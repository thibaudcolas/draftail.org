const React = require("react")

const CompLibrary = require("../../core/CompLibrary")

const { Container } = CompLibrary

const siteConfig = require(`${process.cwd()}/siteConfig`)
const versions = require(`${process.cwd()}/versions.json`)
const { repoUrl, baseUrl, undocumentedVersions } = siteConfig

class Versions extends React.Component {
  render() {
    const latestVersion = versions[0]
    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer versionsContainer">
          <div className="post">
            <header className="postHeader">
              <h2>{`${siteConfig.title} versions`}</h2>
            </header>
            <p>New versions of this project are released periodically.</p>
            <a name="latest" />
            <h3>Current version (stable)</h3>
            <table className="versions">
              <tbody>
                <tr>
                  <th>{latestVersion}</th>
                  <td>
                    <a href={`${baseUrl}docs/getting-started`}>Documentation</a>
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
            <a name="rc" />
            <h3>Pre-release versions</h3>
            <p>These are the latest changes that have yet to be released.</p>
            <table className="versions">
              <tbody>
                <tr>
                  <th>master</th>
                  <td>
                    <a href={`${baseUrl}docs/next/getting-started`}>
                      Documentation
                    </a>
                  </td>
                  <td>
                    <a href={repoUrl}>Source code</a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div>
              <a name="archive" />
              <h3>Past versions</h3>
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
                          <a href={`${repoUrl}/releases/tag/v${version}`}>
                            Release Notes
                          </a>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

Versions.title = "Versions"
Versions.description =
  "Documentation and release notes for older versions of Draftail"

module.exports = Versions
