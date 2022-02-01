const React = require("react")

const CompLibrary = require("../../core/CompLibrary")

const { MarkdownBlock } = CompLibrary
const { Container } = CompLibrary
const { GridBlock } = CompLibrary

const siteConfig = require(`${process.cwd()}/siteConfig`)

function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`
}

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ""}${doc}`
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? `${language}/` : "") + page
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    )
  }
}

Button.defaultProps = {
  target: "_self",
}

const SplashContainer = (props) => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
)

const ProjectTitle = () => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
)

const PromoSection = (props) => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
)

class HomeSplash extends React.Component {
  render() {
    const language = this.props.language || ""
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            {/* <Button href="#try">Try It Out</Button> */}
            <Button href={docUrl("getting-started", language)}>
              Get Started
            </Button>
            <Button href={pageUrl("examples", language)}>View Examples</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    )
  }
}

const Block = (props) => (
  <Container
    padding={["bottom", "top"]}
    id={props.id}
    background={props.background}
  >
    <GridBlock contents={props.children} layout={props.layout} />
  </Container>
)

const Features = () => (
  <Container padding={["bottom", "top"]} background="light">
    <GridBlock
      align="center"
      contents={[
        {
          content: `Draftail is easy to use regardless of skill level. All rich text formatting is available via the toolbar, and [keyboard shortcuts](/docs/keyboard-shortcuts). Power users can even use Markdown!`,
          image: imgUrl("visuals/beachumbrella.svg"),
          imageAlign: "top",
          imageAlt: "",
          title: "Easy to use",
        },
        {
          content: `Rich text shouldn’t be a black box. Custom extensions for a specific use case shouldn't be a headache. Draftail comes with an extensive API backed by [Draft.js and React](/blog/2018/03/05/why-wagtail-new-editor-is-built-with-draft-js).`,
          image: imgUrl("visuals/react.svg"),
          imageAlign: "top",
          imageAlt: "",
          title: "Extensible",
        },

        {
          content: `Paste content from Word. Or just about [any editor](https://github.com/thibaudcolas/draftjs-filters#word-processor-support). Draftail will only keep the formatting you care about, and discard any cruft. [See it in action ](https://www.youtube.com/watch?v=q-uVc-7ZYso).`,
          image: imgUrl("visuals/clipboard.svg"),
          imageAlign: "top",
          imageAlt: "",
          title: "Word-friendly",
        },
      ]}
      layout="threeColumn"
    />
    <br />
    <br />
    <GridBlock
      align="center"
      contents={[
        {
          content: `All of the editor’s labels can easily be translated. Have a look at our [example with react-intl](/docs/i18n).`,
          image: imgUrl("visuals/meridianglobe.svg"),
          imageAlign: "top",
          imageAlt: "",
          title: "Ready for translations",
        },
        {
          content: `Draftail’s UI is very simple to customise, so it integrates perfectly within your app. Take a look at the [UI theming](/docs/ui-theming) docs.`,
          image: imgUrl("visuals/artistpalette.svg"),
          imageAlign: "top",
          imageAlt: "",
          title: "Theming",
        },
      ]}
      layout="twoColumn"
    />
  </Container>
)

const Showcase = (props) => {
  if (siteConfig.users.length === 0) {
    return null
  }

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>Who uses Draftail?</h2>
      <div className="logos">
        {siteConfig.users.map((user) => (
          <a className="user-link" href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt="" />
            <span>{user.caption}</span>
          </a>
        ))}
      </div>
      <div className="more-users">
        <p>
          Make a{" "}
          <a href="https://github.com/thibaudcolas/draftail.org/edit/main/website/siteConfig.js">
            Pull Request
          </a>{" "}
          to add your project.
        </p>
      </div>
    </div>
  )
}

class Index extends React.Component {
  render() {
    const language = this.props.language || ""

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <noscript>
            <h2>
              Draftail is an editor built with{" "}
              <a href="https://github.com/facebook/draft-js">Draft.js</a>
            </h2>
            <p>Try it out by editing this text!</p>
            <h3>Features 📝🍸</h3>
            <p>
              Draftail aims for a mouse-free experience. Most formatting can be
              done with keyboard shortcuts only, inspired by{" "}
              <a href="https://support.google.com/docs/answer/179738">
                Google Docs
              </a>{" "}
              and <a href="https://en.wikipedia.org/wiki/Markdown">Markdown</a>.
            </p>
            <hr />
            <p>Here are important features worth highlighting:</p>
            <ul className="bullet-list">
              <li>
                Support for{" "}
                <a href="/docs/keyboard-shortcuts">keyboard shortcuts</a>. Lots
                of them!
              </li>
              <li>
                Autolists – start a line with <kbd>-</kbd>, <kbd>*</kbd>,{" "}
                <kbd>1.</kbd> to create a list item.
              </li>
              <li>
                Shortcuts for heading levels <kbd>##</kbd>, code blocks{" "}
                <kbd>```</kbd>, and more.
              </li>
              <li>Undo / redo – until the end of times.</li>
              <li>Common text types: headings, paragraphs, quotes, lists.</li>
              <li>
                Common text styles: <strong>Bold</strong>,{" "}
                <em className="u-font-italic">Italic</em>, and many more.
              </li>
              <li>API to build custom controls for links, images, and more.</li>
            </ul>
            <p>
              The embeds in this example are powered by{" "}
              <a href="https://embed.ly/">Embedly</a>.
            </p>
          </noscript>
          <iframe
            src="https://demo.draftail.org/storybook/iframe.html?id=draftail--home"
            className="iframe iframe--home"
          />
          <Features />
          <Block id="wagtail" layout="oneColumn" background="white">
            {[
              {
                content: `Draftail is the default rich text editor of [Wagtail](https://wagtail.org/), a Django content management system used by [hundreds of organisations](https://madewithwagtail.org/).`,
                image: imgUrl("wagtail-page-edit-screenshot.png"),
                imageAlign: "left",
                imageAlt: "",
                align: "left",
                title: "Powering Wagtail",
              },
            ]}
          </Block>
          <Container padding={["bottom", "top"]} background="light">
            <a className="anchor" name="watch" />
            <a className="hash-link" href="#watch" />
            <div className="blockElement imageAlignSide twoByGridBlock">
              <div className="blockContent">
                <h2>Watch videos about Draftail</h2>
                <div>
                  <MarkdownBlock>
                    Draftail was introduced as part of [Wagtail Space
                    2018](https://www.youtube.com/watch?v=mf8AS5EwHvc) We also
                    have a series on building [rich text
                    extensions](https://www.youtube.com/playlist?list=PLjHJbyg4XIC9J0apkmJe0P3ai9j_PWFwj).
                  </MarkdownBlock>
                </div>
              </div>
              <div className="video">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/mf8AS5EwHvc"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            </div>
          </Container>
          <Showcase />
        </div>
      </div>
    )
  }
}

Index.description =
  "Keyboard shortcuts, Markdown, and powerful Draft.js & React customisations"

module.exports = Index
