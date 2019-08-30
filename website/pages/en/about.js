const React = require("react")

const CompLibrary = require("../../core/CompLibrary")

const Container = CompLibrary.Container

const siteConfig = require(`${process.cwd()}/siteConfig`)

class About extends React.Component {
  render() {
    const { config: siteConfig } = this.props

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <div className="prose" style={{ maxWidth: "800px" }}>
              <h1>About Draftail</h1>
              <img
                src={`${siteConfig.baseUrl}img/logo.svg`}
                alt=""
                width="256"
              />
              <p>
                Draftail came about in 2016, as our team grew more and more
                frustrated with{" "}
                <a href="https://github.com/wagtail/wagtail">Wagtail’s</a> rich
                text editor, and decided to build our own to eventually try and
                replace it.
              </p>
              <p>
                Building a{" "}
                <abbr title="What You See Is What You Get">WYSIWYG</abbr> editor
                from scratch is (almost) never a good idea, so we quickly
                settled on <a href="https://draftjs.org">Draft.js</a> as a solid
                WYSIWYG editor framework to build upon. Draft.js + Wagtail – 
                <a href="/blog/2018/03/05/why-wagtail-new-editor-is-built-with-draft-js">
                  Draftail was born
                </a>{" "}
                🎉 .
              </p>
              <h2>Ambitions</h2>
              <p>
                The main goal of Draftail is to provide a bullet-proof content
                editing experience for basic rich text content. A modern take on
                WYSIWYG.
              </p>
              <ul>
                <li>
                  All of the interactions with the editor should be doable with{" "}
                  <a href="/docs/keyboard-shortcuts">keyboard shortcuts</a>.
                </li>
                <li>
                  Power users should be able to use{" "}
                  <a href="/docs/markdown-support">Markdown shortcuts</a> in the
                  editor to format content even faster.
                </li>
                <li>Copy-paste, drag and drop, should just work.</li>
              </ul>
              <p>
                We also want Draftail to be heavily customisable, just like
                Draft.js is, but with sane defaults.
              </p>
              <ul>
                <li>
                  Implementing basic formatting with strong guarantees should
                  just be a matter of configuration.
                </li>
                <li>
                  More advanced extensions should be able to reach out for
                  lower-level APIs, without compromising on consitency of the
                  experience for end users.
                </li>
                <li>
                  Experimenting with new capabilities to the editor shouldn’t
                  require constant core changes – there should be{" "}
                  <a href="/docs/plugins">plugin APIs</a>.
                </li>
              </ul>
              <h2>Roadmap</h2>
              <p>
                Work on the editor is tracked in GitHub issues, and prioritised
                with{" "}
                <a href="https://github.com/springload/draftail/milestones">
                  Milestones
                </a>
                . Have a look if you’re wondering what we’re up to!
              </p>
              <p>
                For the foreseeable future, high-level items on the roadmap are:
              </p>
              <ol>
                <li>
                  Improvements to the editing experience with basic formatting.
                </li>
                <li>
                  Better support for rich text features that are relatively
                  advanced, like emojis and tables.
                </li>
                <li>
                  Built-in, or pluggable, basic support for links and images
                  without having to write code.
                </li>
              </ol>
              <h2>Related projects</h2>
              <p>Under the hood, Draftail uses:</p>
              <ul>
                <li>
                  <a href="https://github.com/thibaudcolas/draftjs-filters">
                    Draft.js filters
                  </a>{" "}
                  – Filter Draft.js content to preserve only the formatting you
                  allow.
                </li>
                <li>
                  <a href="https://github.com/thibaudcolas/draftjs-conductor">
                    Draft.js conductor
                  </a>{" "}
                  – Little Draft.js helpers to make rich text editors “just
                  work”
                </li>
                <li>
                  <a href="https://github.com/thibaudcolas/markov_draftjs">
                    markov_draftjs
                  </a>{" "}
                  – Draft.js sample content generated with Markov chains of
                  Project Gutenberg books.
                </li>
              </ul>
              <p>It’s also developed with and alongside of other projects,</p>
              <ul>
                <li>
                  <a href="https://github.com/springload/draftjs_exporter">
                    Draft.js exporter
                  </a>{" "}
                  – Library to convert rich text from Draft.js raw ContentState
                  to HTML.
                </li>
                <li>
                  <a href="https://github.com/thibaudcolas/draftjs_exporter_markdown">
                    Draft.js exporter, Markdown
                  </a>{" "}
                  – Library to convert rich text from Draft.js raw ContentState
                  to Markdown
                </li>
                <li>
                  <a href="https://github.com/thibaudcolas/draftail-playground">
                    Draftail Playground
                  </a>{" "}
                  – Try Draftail in a full-fledged preview environment
                </li>
              </ul>
              <p>
                And of course,{" "}
                <a href="https://github.com/wagtail/wagtail">Wagtail</a> still
                drives development of the editor significantly.
              </p>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

About.title = "About"

module.exports = About
