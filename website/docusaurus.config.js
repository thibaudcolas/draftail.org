// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const versions = require("./versions.json")

const latestVersion = versions[0]

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Draftail",
  tagline: "📝🍸 A configurable rich text editor built with Draft.js",
  url: "https://www.draftail.org",
  baseUrl: "/",
  projectName: "draftail.org",
  organizationName: "thibaudcolas",
  favicon: "img/favicon/favicon.ico?v=2",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  scripts: [
    {
      src: "https://unpkg.com/clipboard@2.0.0/dist/clipboard.min.js",
      defer: true,
    },
    { src: "/js/code-blocks-buttons.js", defer: true },
  ],
  customFields: {
    contactEmail: "thibaudcolas@gmail.com",
    repoUrl: "https://github.com/springload/draftail",
    users: [
      {
        caption: "Wagtail",
        image: "/img/users/wagtail.svg",
        infoLink: "https://github.com/wagtail/wagtail",
      },
      {
        caption: "médialab Sciences Po",
        image: "/img/users/medialab.svg",
        infoLink: "https://github.com/medialab/website",
      },
      {
        caption: "Saleor",
        image: "/img/users/saleor.svg",
        infoLink: "https://github.com/mirumee/saleor",
      },
    ],
    undocumentedVersions: [
      "1.2.1",
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
    ],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "../docs",
          routeBasePath: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/thibaudcolas/draftail.org/edit/main/docs/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          lastVersion: latestVersion,
          versions: {
            current: {
              label: "Next",
              path: "next",
            },
          },
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/thibaudcolas/draftail.org/edit/main/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  themeConfig: {
    image: "img/draftail-ui-screenshot.png",
    metadata: [{ name: "twitter:card", content: "summary_large_image" }],
    navbar: {
      title: "Draftail",
      logo: {
        alt: "Draftail logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docs",
          position: "left",
          label: "Docs",
        },
        {
          type: "doc",
          docId: "api",
          position: "left",
          label: "API",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/springload/draftail",
          label: "GitHub",
          position: "right",
        },
        { type: "search", position: "right" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            { label: "Get started", to: "/docs/getting-started" },
            { label: "API", to: "/docs/api" },
            { label: "Examples", to: "/examples" },
            { label: "Help", to: "/help" },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Wagtail Slack",
              href: "https://github.com/wagtail/wagtail/wiki/Slack",
            },
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/draftjs",
            },
            { label: "GitHub", href: "https://github.com/springload/draftail" },
          ],
        },
        {
          title: "More",
          items: [
            { label: "Blog", to: "/blog" },
            { label: "About", to: "/about" },
            { label: "Code of conduct", to: "/code-of-conduct" },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Thibaud Colas`,
    },
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
      additionalLanguages: ["json5"],
    },
    algolia: {
      appId: "BPY62S0W69",
      apiKey: "955c25bc248c31c769967251c34747a9",
      indexName: "draftail",
      contextualSearch: true,
    },
  },
}

module.exports = config
