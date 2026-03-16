import Translate from "@docusaurus/Translate"
import type { WrapperProps } from "@docusaurus/types"
import type EditThisPageType from "@theme/EditThisPage"
import IconCopy from "@theme/Icon/Copy"
import IconSuccess from "@theme/Icon/Success"
import EditThisPage from "@theme-original/EditThisPage"
import { type ReactNode, useState } from "react"
import styles from "./styles.module.css"

type Props = WrapperProps<typeof EditThisPageType>

export default function EditThisPageWrapper(props: Props): ReactNode {
  const { editUrl } = props
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (!editUrl) {
      return
    }

    // Convert GitHub edit URL to raw URL
    // From: https://github.com/thibaudcolas/draftail.org/edit/main/docs/introduction/getting-started.md
    // To: https://raw.githubusercontent.com/thibaudcolas/draftail.org/main/docs/introduction/getting-started.md
    const rawUrl = editUrl
      .replace("github.com", "raw.githubusercontent.com")
      .replace("/edit/", "/")

    try {
      const response = await fetch(rawUrl)
      if (!response.ok) {
        throw new Error("Failed to fetch")
      }
      const text = await response.text()
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Failed to copy markdown", err)
    }
  }

  const rawUrl = editUrl
    ?.replace("github.com", "raw.githubusercontent.com")
    .replace("/edit/", "/")

  return (
    <div className={styles.container}>
      <EditThisPage {...props} />
      {editUrl && (
        <>
          <span className={styles.separator}>|</span>
          <button
            type="button"
            className={styles.copyButton}
            onClick={handleCopy}
          >
            {copied ? (
              <IconSuccess className={styles.icon} />
            ) : (
              <IconCopy className={styles.icon} />
            )}
            <Translate
              id="theme.common.copyMarkdown"
              description="The link label to copy the Markdown source of the current page"
            >
              {copied ? "Copied!" : "Copy Markdown"}
            </Translate>
          </button>
          {rawUrl && (
            <>
              <span className={styles.separator}>|</span>
              <a
                href={rawUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.copyButton}
              >
                <Translate
                  id="theme.common.viewRawMarkdown"
                  description="The link label to view the raw Markdown source of the current page"
                >
                  Raw
                </Translate>
              </a>
            </>
          )}
        </>
      )}
    </div>
  )
}
