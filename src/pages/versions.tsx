import useBaseUrl from "@docusaurus/useBaseUrl"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import type { ReactNode } from "react"
import versions from "../../versions.json"

const repoURL = "https://github.com/springload/draftail"

const undocumentedVersions = [
  "0.17.2",
  "0.17.1",
  "0.17.0",
  "0.16.0",
  "0.15.0",
  "0.14.0",
  "0.13.0",
  "0.12.0",
  "0.11.0",
  "0.10.0",
  "0.9.1",
  "0.9.0",
  "0.8.0",
  "0.7.3",
  "0.7.2",
  "0.7.1",
  "0.7.0",
  "0.6.0",
  "0.5.0",
  "0.4.1",
  "0.4.0",
  "0.3.3",
  "0.3.2",
  "0.3.1",
  "0.3.0",
  "0.2.0",
  "0.1.0",
]

export default (): ReactNode => {
  const { siteConfig } = useDocusaurusContext()
  const baseUrl = useBaseUrl("/")
  const latestVersion = versions[0]
  return (
    <Layout
      title="Versions"
      description="Documentation and release notes for older versions of Draftail"
    >
      <main className="container container--fluid margin-vert--lg">
        <div className="row">
          <div className="col col--8">
            <header className="postHeader">
              <h1>{`${siteConfig.title} versions`}</h1>
            </header>
            <p>New versions of this project are released periodically.</p>
            <h2 id="latest">Current version (stable)</h2>
            <table className="versions">
              <tbody>
                <tr>
                  <th>{latestVersion}</th>
                  <td>
                    <a href={useBaseUrl("docs/introduction/getting-started")}>
                      Documentation
                    </a>
                  </td>
                  <td>
                    <a href={`${repoURL}/releases/tag/v${latestVersion}`}>
                      Release notes
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <p>This is the current stable version of the project.</p>
            <h2 id="rc">Pre-release versions</h2>
            <p>These are the latest changes that have yet to be released.</p>
            <table className="versions">
              <tbody>
                <tr>
                  <th>main</th>
                  <td>
                    <a
                      href={`${baseUrl}docs/next/introduction/getting-started`}
                    >
                      Documentation
                    </a>
                  </td>
                  <td>
                    <a href={repoURL}>Source code</a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div>
              <h2 id="archive">Past versions</h2>
              <table className="versions">
                <tbody>
                  {versions
                    .concat(undocumentedVersions)
                    .filter((v) => v !== latestVersion)
                    .map((version) => (
                      <tr key={version}>
                        <th>{version}</th>
                        <td>
                          {version.startsWith("0") ? null : (
                            <a
                              href={`${baseUrl}docs/${version}/getting-started`}
                            >
                              Documentation
                            </a>
                          )}
                        </td>
                        <td>
                          <a href={`${repoURL}/releases/tag/v${version}`}>
                            Release Notes
                          </a>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
