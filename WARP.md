# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is the documentation website for [Draftail](https://www.draftail.org/), a configurable rich text editor built with Draft.js. The site is built with **Docusaurus 3** and includes documentation, blog posts, versioned docs, and examples.

**Key technologies:**

- Docusaurus 3.9.2 (React 19-based static site generator)
- TypeScript
- Biome 2.3.6 (linting and formatting)
- Prettier (Markdown/YAML formatting)
- Node.js 25 (managed via nvm)

**Deployment:**

- Automatically deployed to Netlify on every push to `main`
- Search powered by Algolia DocSearch
- Algolia search index rebuilt automatically every 24 hours

## Development Commands

### Setup

```bash
nvm install              # Install correct Node.js version
npm install              # Install dependencies
```

### Development Server

```bash
npm start                # Start dev server at http://localhost:3000
```

### Building

```bash
npm run build            # Build production site to build/
npm run serve            # Preview production build locally
```

### Code Quality

```bash
npm run lint             # Lint with Biome + Prettier (JS/TS/CSS + MD/YAML)
npm run format           # Auto-fix formatting issues
```

### Docusaurus Commands

```bash
npm run docusaurus       # Run Docusaurus CLI directly
npm run swizzle          # Customize Docusaurus components
npm run version          # Create a new documentation version
```

## Project Structure

```
├── docs/                    # Main documentation (Markdown + MDX)
├── blog/                    # Blog posts (Markdown with frontmatter)
├── versioned_docs/          # Versioned documentation snapshots
├── versioned_sidebars/      # Versioned sidebar configs
├── versions.json            # List of available doc versions
├── src/
│   ├── css/                 # Custom styling (custom.css, error.css)
│   └── pages/               # Custom React pages (About, Help, etc.)
├── static/                  # Static assets (images, favicons, etc.)
├── docusaurus.config.ts     # Main Docusaurus config
├── sidebars.ts              # Sidebar structure for current docs
├── biome.json               # Biome linter/formatter config
└── tsconfig.json            # TypeScript config
```

## Code Style Guidelines

### Formatting

- **Biome** handles JS/TS/CSS/JSON formatting and linting
- **Prettier** handles Markdown, YAML, and HTML
- 2-space indentation (configured in `.editorconfig` and `biome.json`)
- Semicolons: optional (ASI style)
- Arrow functions: always use parentheses
- Trailing commas: always for JS/TS, never for JSON

### Commit Messages

- Follows [Conventional Commits](https://www.conventionalcommits.org/)
- Enforced by commitlint with `@commitlint/config-conventional`
- Examples: `feat: add new feature`, `fix: correct bug`, `docs: update README`

## Documentation Management

### Versioning

- Documentation versions are managed via `versions.json`
- Current versions: 2.0.0, 1.4.0, 1.3.0, 1.2.1, 1.2.0, 1.1.0, 1.0.0
- Create new version: `npm run version 2.1.0`
- Versioned docs stored in `versioned_docs/version-X.Y.Z/`
- Versioned sidebars stored in `versioned_sidebars/version-X.Y.Z-sidebars.json`

### Adding Documentation

1. Add Markdown/MDX files to `docs/` directory
2. Update `sidebars.ts` to include new pages in navigation
3. Use frontmatter for metadata (title, description, etc.)
4. Link to GitHub edit URL is auto-generated for each page

### Blog Posts

- Add Markdown files to `blog/` with date-prefixed filenames: `YYYY-MM-DD-slug.md`
- Include frontmatter with title, author, tags, etc.
- Reading time calculated automatically

## Configuration Notes

### Algolia Search

- App ID: `BPY62S0W69`
- Index: `draftail`
- Facet filtered to show results for version 2.0.0 by default
- Context-aware search disabled
- Search index config: [algolia/docsearch-configs:draftail.json](https://github.com/algolia/docsearch-configs/blob/master/configs/draftail.json)

### Broken Links

- `onBrokenLinks: "log"` - broken links logged but don't fail build
- `onBrokenMarkdownLinks: "log"` - same for Markdown links
- This is intentional for the Draftail site

### Browser Support

Targets defined in `package.json`:

- `> 1%`
- Not IE 11
- Firefox ESR
- Not Opera Mini

## Special Files

### Static Editor Content

The demo site contains static HTML exported with [draftjs_exporter](https://github.com/springload/draftjs_exporter) for:

- Better SEO
- Improved initial loading experience

To regenerate:

1. Get serialised ContentState from index page editor (in `sessionStorage`)
2. Go to [Draftail playground](http://playground.draftail.org/)
3. Place ContentState in that editor's `sessionStorage` value
4. Export and update static content

### Icons & Assets

- Icons from [IcoMoon](https://icomoon.io/)
- Emojis from [FxEmojis](https://github.com/mozilla/fxemoji)
- Favicons generated with [RealFaviconGenerator](https://realfavicongenerator.net/)
- Original pencil icon: Noun Project crayon (CC0)

## Architecture Notes

### Docusaurus Integration

This is a standard Docusaurus 3 Classic preset site with:

- Docs plugin for versioned documentation
- Blog plugin with RSS/Atom feeds
- Custom CSS in `src/css/`
- Custom React pages in `src/pages/`

The main Draftail library code is NOT in this repository - this is documentation only. The actual Draftail editor is at [springload/draftail](https://github.com/springload/draftail).

### Theme Customization

- Dark mode respects system preference (`respectPrefersColorScheme: true`)
- Custom CSS files: `src/css/custom.css` and `src/css/error.css`
- Syntax highlighting: GitHub theme (light) / Dracula (dark)
- Additional Prism language: SCSS
