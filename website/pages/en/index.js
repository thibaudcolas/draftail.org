/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react")

const CompLibrary = require("../../core/CompLibrary.js")

const MarkdownBlock = CompLibrary.MarkdownBlock /* Used to read markdown */
const Container = CompLibrary.Container
const GridBlock = CompLibrary.GridBlock

const siteConfig = require(`${process.cwd()}/siteConfig.js`)

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
    <small>
      {siteConfig.tagline}
      <a href="https://github.com/wagtail/wagtail">
        <img src={imgUrl("wagtail.svg")} alt="" width="32" />
      </a>
    </small>
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
            <Button href={docUrl("getting-started.html", language)}>
              Get Started
            </Button>
            <Button href="https://github.com/springload/draftail">
              GitHub
            </Button>
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
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
)

const Features = () => (
  <Block background="light" layout="fourColumn">
    {[
      {
        content:
          "Draftail is intuitive to use regardless of skill level. All formatting is available via the toolbar, and [keyboard shortcuts](/docs/keyboard-shortcuts). Power users can even use Markdown!",
        // image: imgUrl("docusaurus.svg"),
        // imageAlign: "top",
        title: "Easy to use",
      },
      {
        content:
          "Rich text shouldn’t be a black box. Your use case may require special formatting. Draftail comes with an extensive API backed by [Draft.js](https://draftjs.org/).",
        // image: imgUrl("docusaurus.svg"),
        // imageAlign: "top",
        title: "Extensible",
      },
    ]}
  </Block>
)

// const FeatureCallout = () => (
//   <div
//     className="productShowcaseSection paddingBottom"
//     style={{ textAlign: "center" }}
//   >
//     <h2>Feature Callout</h2>
//     <MarkdownBlock>These are features of this project</MarkdownBlock>
//   </div>
// )

const LearnHow = () => (
  <Block background="light">
    {[
      {
        content: "Talk about learning how to use this",
        image: imgUrl("docusaurus.svg"),
        imageAlign: "right",
        title: "Learn How",
      },
    ]}
  </Block>
)

const TryOut = () => (
  <Block id="try">
    {[
      {
        content: "Talk about trying this out",
        image: imgUrl("docusaurus.svg"),
        imageAlign: "left",
        title: "Try it Out",
      },
    ]}
  </Block>
)

const Description = () => (
  <Block background="dark">
    {[
      {
        content: "This is another description of how this project is useful",
        image: imgUrl("docusaurus.svg"),
        imageAlign: "right",
        title: "Description",
      },
    ]}
  </Block>
)

const Showcase = (props) => {
  // if ((siteConfig.users || []).length === 0) {
  //   return null
  // }

  // const showcase = siteConfig.users
  //   .filter((user) => user.pinned)
  //   .map((user) => (
  //     <a href={user.infoLink} key={user.infoLink}>
  //       <img src={user.image} alt={user.caption} title={user.caption} />
  //     </a>
  //   ))

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>Who’s using Draftail?</h2>
      <p>
        Draftail is the default editor of{" "}
        <a href="https://wagtail.io/">Wagtail</a>.
      </p>
      {/* <div className="logos">{showcase}</div> */}
      <div className="more-users">
        <a className="button" href={pageUrl("users.html", props.language)}>
          More {siteConfig.title} Users
        </a>
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
          <iframe
            src="https://demo.draftail.org/examples/iframe.html?selectedKind=Draftail&selectedStory=Home"
            className="home-iframe"
          />
          <Features />
          {/* <FeatureCallout /> */}
          {/* <LearnHow /> */}
          {/* <TryOut /> */}
          {/* <Description /> */}
          {/* <Showcase language={language} /> */}
          <Container padding={["bottom", "top"]}>
            <a className="anchor" name="watch" />
            <a className="hash-link" href="#watch" />
            <div className="blockElement imageAlignSide twoByGridBlock">
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
            </div>
          </Container>
        </div>
      </div>
    )
  }
}

module.exports = Index
