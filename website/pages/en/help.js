const React = require("react")
const CompLibrary = require("../../core/CompLibrary")

const Container = CompLibrary.Container
const GridBlock = CompLibrary.GridBlock

const siteConfig = require(`${process.cwd()}/siteConfig.js`)

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ""}${doc}`
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? `${language}/` : "") + page
}

class Help extends React.Component {
  render() {
    const { config: siteConfig } = this.props
    const baseURL = `${siteConfig.baseUrl}${this.props.language}`
    const supportLinks = [
      {
        title: "Browse the docs",
        content: `Learn more about Draftail using the [official documentation](${docUrl(
          "getting-started",
        )}), as well as the [Draft.js](https://draftjs.org) docs.`,
      },
      {
        title: "Chat: #draftail",
        content:
          "You can join the #draftail channel on [Wagtail’s Slack](https://github.com/wagtail/wagtail/wiki/Slack), where a lot of people using Wagtail often share tips and provide feedback.",
      },
      {
        title: "Stack Overflow",
        content:
          "There are some questions & answers on Stack Overflow – either searching for [`draftail`](https://stackoverflow.com/search?q=draftail), or using the [`draftjs`](https://stackoverflow.com/questions/tagged/draftjs) tag.",
      },
      {
        title: "GitHub",
        content: `At our [GitHub repository](${siteConfig.repoUrl}) – Browse and submit [issues](${siteConfig.repoUrl}/issues) or [pull requests](${siteConfig.repoUrl}/pulls) for bugs or enhancements. Be sure to also check out our [contributing guidelines](${siteConfig.repoUrl}/blob/master/docs/CONTRIBUTING.md).`,
      },
    ]

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h1>Need help?</h1>
            </header>
            <p>If you need help with Draftail, here are things you can try.</p>
            <blockquote>
              This project follows a{" "}
              <a href={pageUrl("code-of-conduct")}>code of conduct</a>. Please
              have a look at it before joining the conversation!
            </blockquote>
            <GridBlock contents={supportLinks} layout="fourColumn" />
          </div>
        </Container>
      </div>
    )
  }
}

Help.title = "Help"

module.exports = Help
