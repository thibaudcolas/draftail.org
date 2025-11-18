import Link from "@docusaurus/Link"
import useBaseUrl from "@docusaurus/useBaseUrl"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import clsx from "clsx"
import type { ReactNode } from "react"
import styles from "./index.module.css"

const FeatureCard = ({ image, title, children }): ReactNode => (
  <div className="text--center">
    <img
      src={image}
      alt=""
      className={styles.featureImage}
      width={128}
      height={128}
    />
    <h3>{title}</h3>
    <p>{children}</p>
  </div>
)

const Features = () => {
  return (
    <div className={clsx("padding-vert--xl", styles.featuresSection)}>
      <div className="container">
        <div className="row">
          <div className="col col--4 margin-bottom--lg">
            <FeatureCard
              image={useBaseUrl("img/visuals/beachumbrella.svg")}
              title="Easy to use"
            >
              Draftail is easy to use regardless of skill level. All rich text
              formatting is available via the toolbar, and{" "}
              <Link to="/docs/keyboard-shortcuts">keyboard shortcuts</Link>.
              Power users can even use Markdown!
            </FeatureCard>
          </div>
          <div className="col col--4 margin-bottom--lg">
            <FeatureCard
              image={useBaseUrl("img/visuals/react.svg")}
              title="Extensible"
            >
              Rich text shouldn't be a black box. Custom extensions for a
              specific use case shouldn't be a headache. Draftail comes with an
              extensive API backed by{" "}
              <Link to="/blog/2018/03/05/why-wagtail-new-editor-is-built-with-draft-js">
                Draft.js and React
              </Link>
              .
            </FeatureCard>
          </div>
          <div className="col col--4 margin-bottom--lg">
            <FeatureCard
              image={useBaseUrl("img/visuals/clipboard.svg")}
              title="Word-friendly"
            >
              Paste content from Word. Or just about{" "}
              <a href="https://github.com/thibaudcolas/draftjs-filters#word-processor-support">
                any editor
              </a>
              . Draftail will only keep the formatting you care about, and
              discard any cruft.{" "}
              <a href="https://www.youtube.com/watch?v=q-uVc-7ZYso">
                See it in action
              </a>
              .
            </FeatureCard>
          </div>
        </div>
        <div className="row">
          <div className="col col--6 margin-bottom--lg">
            <FeatureCard
              image={useBaseUrl("img/visuals/meridianglobe.svg")}
              title="Ready for translations"
            >
              All of the editor's labels can easily be translated. Have a look
              at our <Link to="/docs/i18n">example with react-intl</Link>.
            </FeatureCard>
          </div>
          <div className="col col--6 margin-bottom--lg">
            <FeatureCard
              image={useBaseUrl("img/visuals/artistpalette.svg")}
              title="Theming"
            >
              Draftail's UI is very simple to customise, so it integrates
              perfectly within your app. Take a look at the{" "}
              <Link to="/docs/ui-theming">UI theming</Link> docs.
            </FeatureCard>
          </div>
        </div>
      </div>
    </div>
  )
}

const users = [
  {
    caption: "Wagtail",
    image: "wagtail.svg",
    href: "https://github.com/wagtail/wagtail",
  },
  {
    caption: "médialab Sciences Po",
    image: "medialab.svg",
    href: "https://github.com/medialab/website",
  },
  {
    caption: "Saleor",
    image: "saleor.svg",
    href: "https://github.com/mirumee/saleor",
  },
]

const Showcase = () => {
  return (
    <div className={clsx("padding-vert--xl", styles.showcaseSection)}>
      <div className="container">
        <h2 className="text--center margin-bottom--lg">Who uses Draftail?</h2>
        <div className={styles.logos}>
          {users.map((user) => (
            <a className={styles.userLink} href={user.href} key={user.href}>
              <img src={`/img/users/${user.image}`} alt="" width={150} />
              <span>{user.caption}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout
      title={siteConfig.title}
      description="Keyboard shortcuts, Markdown, and powerful Draft.js & React customisations"
    >
      <header className={clsx("hero", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--primary button--lg",
                styles.getStarted,
              )}
              to={useBaseUrl("/docs/getting-started")}
            >
              Get Started
            </Link>
            <Link
              className={clsx(
                "button button--secondary button--lg",
                styles.getStarted,
              )}
              to={useBaseUrl("/examples")}
            >
              View Examples
            </Link>
          </div>
        </div>
      </header>

      <main>
        <div className="container padding-vert--md">
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
            title="Draftail home demo"
            src="https://demo.draftail.org/storybook/iframe.html?id=draftail--home"
            className="iframe iframe--home"
          />
        </div>

        <Features />

        <div className="container padding-vert--xl">
          <div className="row">
            <div className="col col--6">
              <img
                src={useBaseUrl("img/wagtail-page-edit-screenshot.png")}
                alt=""
                className={styles.wagtailImage}
              />
            </div>
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
          </div>
        </div>

        <div className={clsx("padding-vert--xl", styles.videoSection)}>
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
                <div className={styles.video}>
                  <a href="https://www.youtube.com/watch?v=mf8AS5EwHvc">
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
          </div>
        </div>

        <Showcase />
      </main>
    </Layout>
  )
}
