const React = require("react")

const CompLibrary = require("../../core/CompLibrary")

const { Container } = CompLibrary

class Examples extends React.Component {
  render() {
    return (
      <div className="mainContainer">
        <Container padding={["bottom", "top"]}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>Examples</h1>
              <p>
                Here are examples of various formatting options and other types
                of extensions
              </p>
            </div>
            <div className="prose">
              <h2>Custom formats</h2>
              <p>
                This editor demonstrates various custom formatting options:
                custom styles, blocks, entities, and other extensions (reading
                time).
              </p>
              <p>
                <a href="https://github.com/springload/draftail/blob/master/examples/examples.story.js">
                  Source
                </a>
              </p>
            </div>
            <iframe
              src="https://demo.draftail.org/storybook/iframe.html?id=examples--custom-formats"
              className="iframe iframe--custom"
            />
            <div className="prose">
              <h2 id="all">All built-in formats</h2>
              <p>
                Here are all of the formatting options available by default in
                Draftail or Draft.js. Most of them do not have much built-in
                behavior except from keyboard shortcuts.
                <br />
                In particular, images and links do not come with any UI for
                choosers/pickers and tooltips.
              </p>
              <p>
                <a href="https://github.com/springload/draftail/blob/master/examples/examples.story.js">
                  Source
                </a>
              </p>
            </div>
            <iframe
              src="https://demo.draftail.org/storybook/iframe.html?id=examples--all-built-in-formats"
              className="iframe iframe--all"
            />
          </div>
        </Container>
      </div>
    )
  }
}

Examples.title = "Examples"
Examples.description =
  "View examples of various WYSIWYG formatting options and other types of Draft.js extensions"

module.exports = Examples
