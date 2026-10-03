# Agent guidelines

> For the human-readable contributor guide, see [CONTRIBUTING.md](CONTRIBUTING.md). This file is a concise quick-reference for the AI assistant.

## Project overview

This is the source of [draftail.org](https://www.draftail.org/), the documentation website for [Draftail](https://github.com/wagtail/draftail) (the editor library lives in a separate repository). It is a [Docusaurus](https://docusaurus.io/) site with documentation, blog posts, versioned docs, and demos.

**Key technologies:**

- Docusaurus 3.10 with React 19, TypeScript
- Biome for JS/TS/CSS/JSON linting and formatting
- Prettier for Markdown, YAML, and HTML formatting
- Node.js version from [.node-version](.node-version), managed with nvm
- Netlify for hosting, Algolia DocSearch for search

## Project structure & module organization

Documentation lives in `docs/`, with the current draft of the next version. Published documentation snapshots are in `versioned_docs/`, configured by `versions.json` and `versioned_sidebars/`. Blog posts are in `blog/`, custom pages in `src/pages/`, custom styles in `src/css/`, and other assets in `static/`. Main configuration: `docusaurus.config.ts` and `sidebars.ts`.

## Development commands

- `nvm install && npm install` – set up dependencies
- `npm start` – dev server at http://localhost:3000
- `npm run build` – production build to `build/`
- `npm run serve` – preview the production build locally
- `npm run lint` – Biome + Prettier checks + `tsc --noEmit`
- `npm run format` – auto-format all files
- `npm run version X.Y.Z` – create a new documentation version

## Project tools

- `npm` for dependency management
- `biome` for JS/TS/CSS/JSON, `prettier` for Markdown/YAML/HTML
- `tsc --noEmit` for type checking
- `lychee` for link checking (`npm run check-links`)
- `commitlint` with Conventional Commits, run by the `commit-msg` Git hook on every commit
- Git hooks (Biome, Prettier, tsc on staged files) managed by husky and lint-staged, installed with `npm run prepare`
- GitHub Actions for CI, Netlify for automatic deploys of `main`

## Coding style & conventions

- 2-space indentation, no semicolons (ASI style), always-parenthesised arrows, trailing commas in JS/TS, none in JSON.
- Biome and Prettier both follow `.editorconfig`. Run `npm run format` rather than hand-formatting.
- Markdown content: use relative links between `.md` files so link validation and editor navigation work. Prefer Sentence case in prose and headings, never Title Case.
- Blog posts use `YYYY-MM-DD-slug.md` filenames with frontmatter for title, authors, and tags.

## Site-specific notes

- `onBrokenLinks` and `onBrokenMarkdownLinks` are `"log"` on purpose – do not treat link warnings as build failures to fix.
- Documentation versioning: current content goes in `docs/`; run `npm run version X.Y.Z` to snapshot it into `versioned_docs/version-X.Y.Z/` and update `versions.json`. Never edit published versions except for corrections, applied to the matching `versioned_docs/` snapshot.
- Search is Algolia DocSearch, filtered to the latest stable version. The index config is managed in [algolia/docsearch-configs](https://github.com/algolia/docsearch-configs/blob/master/configs/draftail.json).
- The site also publishes `llms.txt` files generated from the docs by `docusaurus-plugin-llms`, configured in `docusaurus.config.ts`. Regenerating docs content may require reviewing those include/exclude patterns.
- The index page demo uses static HTML exported with [draftjs_exporter](https://github.com/springload/draftjs_exporter) for SEO and loading performance. See [CONTRIBUTING.md](CONTRIBUTING.md#static-editor-content) to regenerate it.

## Commit & pull request guidelines

- Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/), enforced by commitlint: short, imperative summaries like `feat: add new feature`, `fix: correct bug`, `docs: update README`.
- Be concise and to the point. Explain rationales that aren't obvious.
- CI runs Biome, Prettier, and `tsc --noEmit`, and exercises the Git hooks. Ensure `npm run lint` passes before pushing.
