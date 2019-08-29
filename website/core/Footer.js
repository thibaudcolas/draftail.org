const React = require("react")

class Footer extends React.Component {
  docUrl(doc, language = null) {
    const baseUrl = this.props.config.baseUrl
    return `${baseUrl}docs/${language ? `${language}/` : ""}${doc}`
  }

  pageUrl(doc, language = null) {
    const baseUrl = this.props.config.baseUrl
    return baseUrl + (language ? `${language}/` : "") + doc
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl("getting-started")}>Getting Started</a>
            <a href={this.docUrl("user-guide")}>User Guide</a>
            <a href={this.docUrl("api")}>API Reference</a>
          </div>
          <div>
            <h5>Community</h5>
            <a href={this.pageUrl("help")}>Help</a>
            <a href={this.pageUrl("code-of-conduct")}>Code of conduct</a>
            <a
              href="https://twitter.com/thibaud_colas"
              target="_blank"
              rel="noreferrer noopener"
            >
              Twitter
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href={`${this.props.config.baseUrl}blog`}>Blog</a>
            <a href="http://demo.draftail.org/storybook/">Storybook</a>
            <a href={this.props.config.repoUrl}>GitHub</a>
          </div>
        </section>

        <section className="copyright">
          {this.props.config.copyright}.{" "}
          <a href="https://github.com/thibaudcolas/draftail.org">
            Website content
          </a>{" "}
          available as{" "}
          <a href="https://creativecommons.org/publicdomain/zero/1.0/">CC0</a>.
          Emoji visuals from{" "}
          <a href="https://github.com/mozilla/fxemoji">FxEmojis</a>.
        </section>
      </footer>
    )
  }
}

module.exports = Footer
