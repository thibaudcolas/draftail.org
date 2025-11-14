import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import React from "react"

import versions from "../../versions.json"

export default function Versions() {
  const { siteConfig } = useDocusaurusContext()
  const repoUrl =
    siteConfig?.customFields?.repoUrl ??
    "https://github.com/springload/draftail"
  const undocumentedVersions =
    siteConfig?.customFields?.undocumentedVersions ?? []
  const latestVersion = versions[0]
  const archivedVersions = versions
    .slice(1)
    .concat(undocumentedVersions)
    .filter(Boolean)

  return (
    <Layout
      title={`${siteConfig.title} versions`}
      description="Documentation and release notes for older versions of Draftail"
    >
      <main className="container margin-vert--lg">
        <header className="margin-bottom--lg">
          <h1>{siteConfig.title} versions</h1>
          <p>New versions of this project are released periodically.</p>
        </header>
        <section>
          <h2 id="latest">Current version (stable)</h2>
          <table className="versions">
            <tbody>
              <tr>
                <th>{latestVersion}</th>
                <td>
                  <Link to="/docs/getting-started">Documentation</Link>
                </td>
                <td>
                  <a href={`${repoUrl}/releases/tag/v${latestVersion}`}>
                    Release notes
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <p>This is the current stable version of the project.</p>
        </section>
        <section>
          <h2 id="rc">Pre-release versions</h2>
          <p>These are the latest changes that have yet to be released.</p>
          <table className="versions">
            <tbody>
              <tr>
                <th>main</th>
                <td>
                  <Link to="/docs/next/getting-started">Documentation</Link>
                </td>
                <td>
                  <a href={repoUrl}>Source code</a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <h2 id="archive">Past versions</h2>
          <table className="versions">
            <tbody>
              {archivedVersions.map((version) => {
                const hasDocs = !version.startsWith("0")
                return (
                  <tr key={version}>
                    <th>{version}</th>
                    <td>
                      {hasDocs ? (
                        <Link to={`/docs/${version}/getting-started`}>
                          Documentation
                        </Link>
                      ) : (
                        <span>—</span>
                      )}
                    </td>
                    <td>
                      <a href={`${repoUrl}/releases/tag/v${version}`}>
                        Release notes
                      </a>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </section>
      </main>
    </Layout>
  )
}
