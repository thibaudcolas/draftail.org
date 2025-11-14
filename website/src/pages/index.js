import Link from "@docusaurus/Link"
import useBaseUrl from "@docusaurus/useBaseUrl"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import React from "react"

const featureGroups = [
  [
    {
      title: "Easy to use",
      description: (
        <>
          Draftail is easy to use regardless of skill level. All rich text
          formatting is available via the toolbar, and{" "}
          <Link to="/docs/keyboard-shortcuts">keyboard shortcuts</Link> are
          available everywhere. Power users can even use Markdown!
        </>
      ),
      image: "/img/visuals/beachumbrella.svg",
    },
    {
      title: "Extensible",
      description: (
        <>
          Rich text shouldn’t be a black box. Custom extensions for a specific
          use case shouldn’t be a headache. Draftail comes with an extensive API
          backed by Draft.js and React.
        </>
      ),
      image: "/img/visuals/react.svg",
    },
    {
      title: "Word-friendly",
      description: (
        <>
          Paste content from Word or just about any editor. Draftail will only
          keep the formatting you care about, and discard any cruft.{" "}
          <a href="https://www.youtube.com/watch?v=q-uVc-7ZYso">
            See it in action
          </a>
          .
        </>
      ),
      image: "/img/visuals/clipboard.svg",
    },
  ],
  [
    {
      title: "Ready for translations",
      description: (
        <>
          All of the editor’s labels can easily be translated. Have a look at
          our <Link to="/docs/i18n">example with react-intl</Link>.
        </>
      ),
      image: "/img/visuals/meridianglobe.svg",
    },
    {
      title: "Theming",
      description: (
        <>
          Draftail’s UI is very simple to customise, so it integrates perfectly
          within your app. Take a look at the{" "}
          <Link to="/docs/ui-theming">UI theming</Link> docs.
        </>
      ),
      image: "/img/visuals/artistpalette.svg",
    },
  ],
]

function Feature({ feature, columns }) {
  const imageUrl = useBaseUrl(feature.image)
  const columnClass =
    columns === 2 ? "col col--12 col--md-6" : "col col--12 col--md-4"
  return (
    <div className={`${columnClass} padding-horiz--md padding-vert--lg`}>
      <div className="text--center">
        <img className="homepage-feature__image" src={imageUrl} alt="" />
      </div>
      <div>
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
      </div>
    </div>
  )
}

function Showcase() {
  const { siteConfig } = useDocusaurusContext()
  const users = siteConfig?.customFields?.users ?? []
  const assetBaseUrl = useBaseUrl("/")
  const normalizedBaseUrl = assetBaseUrl.endsWith("/")
    ? assetBaseUrl.slice(0, -1)
    : assetBaseUrl
  if (!users.length) {
    return null
  }

  return (
    <section className="homepage-section homepage-showcase">
      <div className="container">
        <h2>Who uses Draftail?</h2>
        <div className="homepage-showcase__logos">
          {users.map((user) => {
            const imageSrc = user.image.startsWith("http")
              ? user.image
              : `${normalizedBaseUrl}${user.image}`
            return (
              <a className="user-link" href={user.infoLink} key={user.infoLink}>
                <img src={imageSrc} alt="" />
                <span>{user.caption}</span>
              </a>
            )
          })}
        </div>
        <p className="homepage-showcase__cta">
          Make a{" "}
          <a href="https://github.com/thibaudcolas/draftail.org/edit/main/website/docusaurus.config.js">
            Pull Request
          </a>{" "}
          to add your project.
        </p>
      </div>
    </section>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  const wagtailScreenshot = useBaseUrl("/img/wagtail-page-edit-screenshot.png")
  return (
    <Layout description="Keyboard shortcuts, Markdown, and powerful Draft.js & React customisations">
      <header className="hero hero--primary homepage-hero">
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className="buttons">
            <Link
              className="button button--secondary button--lg"
              to="/docs/getting-started"
            >
              Get started
            </Link>
            <Link
              className="button button--outline button--lg margin-left--sm"
              to="/examples"
            >
              View examples
            </Link>
          </div>
        </div>
      </header>
      <main className="homepage">
        <section className="homepage-section">
          <div className="container homepage-demo">
            <noscript>
              <h2>
                Draftail is an editor built with{" "}
                <a href="https://github.com/facebook/draft-js">Draft.js</a>
              </h2>
              <p>Try it out by editing this text!</p>
              <h3>Features 📝🍸</h3>
              <p>
                Draftail aims for a mouse-free experience. Most formatting can
                be done with keyboard shortcuts only, inspired by{" "}
                <a href="https://support.google.com/docs/answer/179738">
                  Google Docs
                </a>{" "}
                and{" "}
                <a href="https://en.wikipedia.org/wiki/Markdown">Markdown</a>.
              </p>
              <hr />
              <p>Here are important features worth highlighting:</p>
              <ul className="bullet-list">
                <li>
                  Support for{" "}
                  <Link to="/docs/keyboard-shortcuts">keyboard shortcuts</Link>.
                  Lots of them!
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
                <li>
                  API to build custom controls for links, images, and more.
                </li>
              </ul>
              <p>
                The embeds in this example are powered by{" "}
                <a href="https://embed.ly/">Embedly</a>.
              </p>
            </noscript>
            <iframe
              title="Draftail home demo"
              src="https://demo.draftail.org/storybook/iframe.html?id=draftail--home"
              className="iframe iframe--home"
            />
          </div>
        </section>
        {featureGroups.map((group, index) => (
          <section
            className={`homepage-section ${index === 0 ? "homepage-section--alt" : ""}`}
            key={group[0].title}
          >
            <div className="container">
              <div className="row">
                {group.map((feature) => (
                  <Feature
                    feature={feature}
                    key={feature.title}
                    columns={group.length}
                  />
                ))}
              </div>
            </div>
          </section>
        ))}
        <section className="homepage-section">
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <h2>Powering Wagtail</h2>
                <p>
                  Draftail is the default rich text editor of{" "}
                  <a href="https://wagtail.org/">Wagtail</a>, a Django content
                  management system used by{" "}
                  <a href="https://madewithwagtail.org/">
                    hundreds of organisations
                  </a>
                  .
                </p>
              </div>
              <div className="col col--6">
                <img
                  src={wagtailScreenshot}
                  alt="Screenshot showing Draftail embedded in the Wagtail page editor"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="homepage-section homepage-video">
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <h2 id="watch">Watch videos about Draftail</h2>
                <p>
                  Draftail was introduced as part of{" "}
                  <a href="https://www.youtube.com/watch?v=mf8AS5EwHvc">
                    Wagtail Space 2018
                  </a>
                  . We also have a series on building{" "}
                  <a href="https://www.youtube.com/playlist?list=PLjHJbyg4XIC9J0apkmJe0P3ai9j_PWFwj">
                    rich text extensions
                  </a>
                  .
                </p>
              </div>
              <div className="col col--6">
                <a
                  className="homepage-video__thumbnail"
                  href="https://www.youtube.com/watch?v=mf8AS5EwHvc"
                >
                  <img
                    src="https://i.ytimg.com/vi_webp/mf8AS5EwHvc/maxresdefault.webp"
                    alt="Introducing Draft.js in Wagtail – Wagtail Space 2018"
                    width="560"
                    height="315"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
        <Showcase />
      </main>
    </Layout>
  )
}
