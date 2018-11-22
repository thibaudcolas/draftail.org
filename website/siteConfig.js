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
  tagline:
    "📝🍸 A configurable rich text editor based on Draft.js and React, built for Wagtail",
  baseUrl: "/",
  url: "https://www.draftail.org/",

  // Used for publishing and more
  projectName: "draftail.org",
  organizationName: "thibaudcolas",
  cname: "www.draftail.org",

  disableHeaderTitle: false,
  disableTitleTagline: true,

  editUrl: "https://github.com/thibaudcolas/draftail.org/edit/master/docs/",

  enableUpdateTime: true,

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

  /* path to images for header/footer */
  // headerIcon: "img/docusaurus.svg",
  // footerIcon: "img/docusaurus.svg",
  favicon: "img/favicon/favicon.ico",

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

  algolia: {
    apiKey: "077ed44cb17520db8502e4c1b81d3e55",
    indexName: "draftail",
  },

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: "default",
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [],

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
  // Path to your web app manifest.
  manifest: "img/favicon/manifest.json",

  /**
   * Arbitrary config keys.
   */
  repoUrl: "https://github.com/springload/draftail",
}

module.exports = siteConfig
