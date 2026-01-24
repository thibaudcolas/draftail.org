import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js"
import type {
  CallToolResult,
  JSONRPCError,
} from "@modelcontextprotocol/sdk/types.js"
import { toFetchResponse, toReqRes } from "fetch-to-node"
import { z } from "zod"

// Netlify serverless function handler which handles all inbound requests
export default async (req: Request) => {
  try {
    // for stateless MCP, we'll only use the POST requests that are sent
    // with event information for the init phase and resource/tool requests
    if (req.method === "POST") {
      // Convert the Request object into a Node.js Request object
      const { req: nodeReq, res: nodeRes } = toReqRes(req)
      const server = getServer()

      const transport = new StreamableHTTPServerTransport({
        sessionIdGenerator: undefined,
      })

      await server.connect(transport)

      const body = await req.json()
      await transport.handleRequest(nodeReq, nodeRes, body)

      nodeRes.on("close", () => {
        console.log("Request closed")
        transport.close()
        server.close()
      })

      return toFetchResponse(nodeRes)
    }

    return new Response("Method not allowed", { status: 405 })
  } catch (error) {
    console.error("MCP error:", error)
    return new Response(
      JSON.stringify({
        jsonrpc: "2.0",
        error: {
          code: -32603,
          message: "Internal server error",
        },
        id: "",
      } satisfies JSONRPCError),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}

function getServer(): McpServer {
  const server = new McpServer(
    {
      name: "draftail-assist-server",
      version: "1.0.0",
    },
    { capabilities: { logging: {} } },
  )

  server.tool(
    "list-sections",
    "Use this FIRST to discover all available documentation sections. Returns a structured list with titles, use_cases, and paths.",
    {},
    async (): Promise<CallToolResult> => {
      const response = await fetch("https://www.draftail.org/llms.txt")
      const text = await response.text()
      const lines = text.split("\n")
      const sections = lines
        .filter((line) => line.startsWith("- ["))
        .map((line) => {
          const match = line.match(/- \[(.+)\]\((.+)\): (.+)/)
          if (match) {
            const [_, title, url, use_case] = match
            const path = new URL(url).pathname
            return { title, path, use_case }
          }
          return null
        })
        .filter(Boolean)

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(sections),
          },
        ],
      }
    },
  )

  server.tool(
    "get-documentation",
    "Retrieves full documentation content for specific sections. Accepts single or multiple sections.",
    {
      sections: z
        .array(z.string())
        .describe("Array of section paths to retrieve documentation for."),
    },
    async ({ sections: sectionPaths }): Promise<CallToolResult> => {
      const listResponse = await fetch("https://www.draftail.org/llms.txt")
      const listText = await listResponse.text()
      const pathToTitle = new Map<string, string>()
      listText.split("\n").forEach((line) => {
        const match = line.match(/- \[(.+)\]\((.+)\):/)
        if (match) {
          const [_, title, url] = match
          const path = new URL(url).pathname
          pathToTitle.set(path, title)
        }
      })

      const fullDocResponse = await fetch(
        "https://www.draftail.org/llms-full.txt",
      )
      const fullDocText = await fullDocResponse.text()

      const docContent = sectionPaths
        .map((path) => {
          const title = pathToTitle.get(path)
          if (!title) {
            return `## Section for path ${path} not found\n\n`
          }

          const sectionRegex = new RegExp(
            `## ${title.replace(/[.*+?^${'{}'}()|[\]\\]/g, "\\$&")}\\n([\\s\\S]*?)(?=\\n##|$)`,
          )
          const match = fullDocText.match(sectionRegex)
          if (match?.[1]) {
            return `## ${title}\n\n${match[1].trim()}`
          }
          return `## Content for ${title} not found\n\n`
        })
        .join("\n\n---\n\n")

      return {
        content: [
          {
            type: "text",
            text: docContent,
          },
        ],
      }
    },
  )

  server.tool(
    "draftail-autofixer",
    "Analyzes Draftail code and returns issues and suggestions.",
    {
      code: z.string().describe("The Draftail code to analyze."),
    },
    async ({ code }: { code: string }): Promise<CallToolResult> => {
      const issues: string[] = []
      const suggestions: string[] = []

      // Check for incompatible props for controlled/uncontrolled components
      const hasRawContentState = /rawContentState/.test(code)
      const hasOnSave = /onSave/.test(code)
      const hasEditorState = /editorState/.test(code)
      const hasOnChange = /onChange/.test(code)

      if (hasRawContentState && (hasEditorState || hasOnChange)) {
        issues.push(
          "Incompatible props: `rawContentState` should not be used with `editorState` or `onChange`. Use `rawContentState` and `onSave` for uncontrolled components, or `editorState` and `onChange` for controlled components.",
        )
      }
      if (hasOnSave && (hasEditorState || hasOnChange)) {
        issues.push(
          "Incompatible props: `onSave` should not be used with `editorState` or `onChange`. Use `rawContentState` and `onSave` for uncontrolled components, or `editorState` and `onChange` for controlled components.",
        )
      }

      // Check for magic strings in blockTypes
      const blockTypesRegex = /blockTypes=\{([^}]*)\}/s
      const blockTypesMatch = code.match(blockTypesRegex)
      if (blockTypesMatch?.[1]) {
        const typeRegex = /type:\s*'([^']*)'/g
        const typeMatch = typeRegex.exec(blockTypesMatch[1])
        if (typeMatch) {
          const magicString = typeMatch[1]
          suggestions.push(
            `Magic string detected: \`'${magicString}'\` in \`blockTypes\`. Consider using the \`BLOCK_TYPE\` constants (e.g., \`BLOCK_TYPE.HEADER_ONE\`) for better code maintainability and to avoid typos.`,
          )
        }
      }

      if (issues.length === 0 && suggestions.length === 0) {
        suggestions.push("No obvious issues found. The code looks good.")
      }

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({ issues, suggestions }),
          },
        ],
      }
    },
  )

  return server
}

// Ensure this function responds to the <domain>/mcp path
// This can be any path you want but you'll need to ensure the
// mcp server config you use/share matches this path.
export const config = {
  path: "/mcp",
}
