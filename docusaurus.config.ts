import type * as Preset from "@docusaurus/preset-classic"
import type { Config } from "@docusaurus/types"
import { themes as prismThemes } from "prism-react-renderer"

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Draftail",
  tagline: "📝🍸 A configurable rich text editor built with Draft.js",
  url: "https://www.draftail.org/",
  baseUrl: "/",
  organizationName: "thibaudcolas",
  projectName: "draftail.org",
  favicon: "img/favicon/favicon.ico?v=2",
  onBrokenLinks: "log",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "log",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl:
            "https://github.com/thibaudcolas/draftail.org/edit/main/docs/",
          path: "docs",
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          path: "blog",
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          blogSidebarCount: "ALL",
          blogSidebarTitle: "Blog",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: ["./src/css/custom.css", "./src/css/error.css"],
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [],
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["scss"],
    },
    navbar: {
      title: "Draftail",
      logo: {
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/getting-started",
          label: "Docs",
          position: "right",
        },
        {
          to: "docs/api",
          label: "API",
          position: "right",
        },
        { to: "blog", label: "Blog", position: "right" },
        {
          type: "docsVersionDropdown",
          position: "right",
        },
        {
          href: "https://github.com/springload/draftail",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    image: "img/draftail-ui-screenshot.png",
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/getting-started",
            },
            {
              label: "User Guide",
              to: "docs/user-guide",
            },
            {
              label: "API Reference",
              to: "docs/api",
            },
            {
              label: "Versions",
              to: "versions",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Help",
              to: "help",
            },
            {
              label: "About",
              to: "about",
            },
            {
              label: "Code of conduct",
              to: "code-of-conduct",
            },
            {
              label: "Wagtail",
              href: "https://github.com/wagtail/wagtail",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "Demos (Storybook)",
              href: "https://demo.draftail.org/storybook/",
            },
            {
              label: "GitHub",
              href: "https://github.com/springload/draftail",
            },
            {
              label: "Author",
              href: "https://thib.me/",
            },
          ],
        },
      ],
      copyright: `Copyright © 2025 Thibaud Colas. <a href="https://github.com/thibaudcolas/draftail.org">Website content</a> available as <a href="https://creativecommons.org/publicdomain/zero/1.0/">CC0</a>. Emoji visuals from <a href="https://github.com/mozilla/fxemoji">FxEmojis</a>. This site is powered by <a href="https://www.netlify.com/">Netlify</a>.`,
      logo: {
        src: "img/logo.svg",
        width: 66,
        height: 58,
        alt: "Draftail logo",
        href: "/",
      },
    },
    algolia: {
      appId: "BPY62S0W69",
      apiKey: "955c25bc248c31c769967251c34747a9",
      indexName: "draftail",
      contextualSearch: false,
      searchParameters: {
        facetFilters: ["version:2.0.0"],
      },
    },
  } satisfies Preset.ThemeConfig,
}

export default config
