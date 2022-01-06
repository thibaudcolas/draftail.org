// See https://docusaurus.io/docs/site-config for all the possible site configuration options.

const siteConfig = {
  title: "Draftail",
  tagline: "📝🍸 A configurable rich text editor built with Draft.js",
  baseUrl: "/",
  url: "https://www.draftail.org/",

  // Used for publishing and more
  projectName: "draftail.org",
  organizationName: "thibaudcolas",
  cname: "www.draftail.org",

  disableHeaderTitle: false,
  disableTitleTagline: false,

  // See https://docusaurus.io/docs/en/adding-blog#changing-how-many-blog-posts-show-on-sidebar.
  blogSidebarCount: "ALL",

  editUrl: "https://github.com/thibaudcolas/draftail.org/edit/main/docs/",

  enableUpdateTime: true,
  enableUpdateBy: true,

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: "getting-started", label: "Docs" },
    { doc: "api", label: "API" },
    { blog: true, label: "Blog" },
    {
      href: "https://github.com/springload/draftail",
      label: "GitHub",
    },
    { search: true },
  ],

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

  // path to images for header/footer
  headerIcon: "img/logo.svg",
  footerIcon: "img/logo.svg",
  favicon: "img/favicon/favicon.ico?v=2",
  // Path to your web app manifest.
  manifest: "img/favicon/site.webmanifest",

  /* Colors for website */
  colors: {
    primaryColor: "#007d7e",
    secondaryColor: "#006c6e",
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Thibaud Colas`,
  contactEmail: "thibaudcolas@gmail.com",

  // For the index-side config, see:
  // https://github.com/algolia/docsearch-configs/blob/master/configs/draftail.json.
  algolia: {
    apiKey: "955c25bc248c31c769967251c34747a9",
    indexName: "draftail",
    algoliaOptions: {
      facetFilters: ["version:VERSION"],
    },
  },

  usePrism: ["jsx"],

  highlight: {
    theme: "tomorrow",
    hljs: (hljs) => {
      hljs.registerLanguage("json5", (hljs) => hljs.getLanguage("javascript"))
    },
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    {
      src: "https://unpkg.com/clipboard@2.0.0/dist/clipboard.min.js",
      defer: true,
    },
    {
      src: "/js/code-blocks-buttons.js",
      defer: true,
    },
  ],

  // On page navigation for the current documentation page.
  onPageNav: "separate",
  // No .html extensions for paths.
  cleanUrl: true,

  scrollToTop: true,
  scrollToTopOptions: {
    zIndex: 100,
  },

  gaTrackingId: "UA-126695868-1",

  // Open Graph and Twitter card images.
  twitterImage: "img/draftail-ui-screenshot.png",
  ogImage: "img/draftail-ui-screenshot.png",

  /**
   * Arbitrary config keys.
   */
  repoUrl: "https://github.com/springload/draftail",

  undocumentedVersions: [
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
}

module.exports = siteConfig
