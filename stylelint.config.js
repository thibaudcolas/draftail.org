module.exports = {
  // https://github.com/thibaudcolas/stylelint-config-cookbook
  extends: "@thibaudcolas/stylelint-config-cookbook",
  rules: {
    "scale-unlimited/declaration-strict-value": [
      ["/color/", "z-index", "font-size", "font-family"],
      {
        // We need to have a special keyword to ignore hard-coded font sizes in code samples.
        ignoreKeywords: [
          "currentColor",
          "inherit",
          "transparent",
          "initial",
          "0.7625rem",
        ],
      },
    ],
    "scss/media-feature-value-dollar-variable": null,
  },
}
