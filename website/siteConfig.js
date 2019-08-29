// See https://docusaurus.io/docs/site-config for all the possible site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: "User1",
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: "/img/docusaurus.svg",
    infoLink: "https://www.facebook.com",
    pinned: true,
  },
]

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
  disableTitleTagline: true,

  // See https://docusaurus.io/docs/en/adding-blog#changing-how-many-blog-posts-show-on-sidebar.
  blogSidebarCount: "ALL",

  editUrl: "https://github.com/thibaudcolas/draftail.org/edit/master/docs/",

  enableUpdateTime: true,
  enableUpdateBy: true,

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: "getting-started", label: "Docs" },
    { doc: "api", label: "API" },
    { blog: true, label: "Blog" },
    { search: true },
    {
      href: "https://github.com/springload/draftail",
      label: "GitHub",
    },
  ],

  // If you have users set above, you add it here:
  users,

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
    apiKey: "077ed44cb17520db8502e4c1b81d3e55",
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
