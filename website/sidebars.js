/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: "category",
      label: "Introduction",
      items: [
        "getting-started",
        "formatting-options",
        "inline-styles",
        "blocks",
        "entities",
        "decorators",
        "arbitrary-controls",
        "plugins",
      ],
    },
    {
      type: "category",
      label: "Guides",
      items: [
        "importing-and-exporting-html",
        "form-validation",
        "getting-started-with-extensions",
        "draftjs-vs-draftail",
        "extensions-tutorial-max-length",
        "extensions-tutorial-linkify",
      ],
    },
    {
      type: "category",
      label: "User guides",
      items: ["user-guide", "keyboard-shortcuts", "markdown-support"],
    },
    {
      type: "category",
      label: "API reference",
      items: [
        "api",
        "content-storage",
        "controlled-component",
        "ui-theming",
        "customising-icons",
        "customising-toolbars",
        "i18n",
        "browser-support",
        "troubleshooting",
      ],
    },
  ],
}

module.exports = sidebars
