module.exports = {
  "*.{css,js,ts,tsx,json,jsonc,json5}": [
    "biome check --write --no-errors-on-unmatched",
  ],
  "*.{md,yml,yaml,html}": ["prettier --write"],
  // A function prevents lint-staged from appending filenames, so tsc uses tsconfig.json.
  "*.{ts,tsx}": () => "tsc --noEmit",
}
