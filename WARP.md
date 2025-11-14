# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is the documentation website for Draftail (a rich text editor built with Draft.js), built with Docusaurus v1. The site includes documentation, examples, blog posts, and API reference.

**Important repositories:**
- This repo (draftail.org): Documentation website only
- Main Draftail library: https://github.com/springload/draftail

## Development Commands

### Initial Setup

```bash
nvm install
npm install
```

The `npm install` command automatically runs `postinstall`, which installs dependencies for the `website/` subdirectory.

### Development Server

Start the local development server:

```bash
cd website
npm run start
```

This launches Docusaurus on http://localhost:3000 with hot reloading.

### Linting and Formatting

From the root directory:

```bash
# Check all code and docs
npm run lint

# Auto-fix formatting issues
npm run format
```

**Linting tools:**
- **Biome**: Lints and formats JavaScript, TypeScript, CSS, JSON (configured in `biome.json`)
- **Prettier**: Formats Markdown, YAML, HTML files (configured in `prettier.config.js`)

**Manual commands:**
```bash
# Run Biome only
npx @biomejs/biome check

# Run Prettier only
npx prettier --check '**/?(.)*.{md,yaml,yml,html}'
```

### Git Hooks

This project uses custom git hooks in `.githooks/`:
- **pre-commit**: Runs Biome and Prettier on staged files, fails on whitespace errors
- **commit-msg**: Validates commit messages with commitlint (conventional commits)

Hooks are automatically installed via `npm run prepare` (runs after `npm install`).

To bypass hooks for a single commit: `git commit --no-verify`

### Building for Production

```bash
cd website
npm run build
```

Output is generated in `website/build/`.

### Deployment

The site auto-deploys to Netlify on every push to `main`. No manual deployment needed.

## Architecture

### Directory Structure

```
draftail.org/
├── docs/                    # Documentation source (Markdown)
├── website/                 # Docusaurus site
│   ├── blog/               # Blog posts (Markdown)
│   ├── pages/en/           # Custom pages (React/JS)
│   ├── static/             # Static assets (images, CSS, JS)
│   ├── versioned_docs/     # Versioned documentation
│   ├── versioned_sidebars/ # Versioned sidebar configs
│   ├── siteConfig.js       # Main Docusaurus config
│   └── sidebars.json       # Sidebar structure
├── .githooks/              # Git hooks for pre-commit checks
└── package.json            # Root package for linting tools
```

### Two-Level Package Structure

This project has a nested structure:
- **Root level**: Tooling for linting (Biome, Prettier, commitlint)
- **website/ level**: Docusaurus and site dependencies

Always run linting from root, but development server from `website/`.

### Documentation Versioning

Docusaurus handles versioning:
- Current docs: `docs/` directory
- Versioned docs: `website/versioned_docs/version-X.X.X/`
- Version list: `website/versions.json`
- Undocumented versions listed in `siteConfig.js`

### Configuration Files

**Biome** (`biome.json`):
- Ignores: `website/build`, `package.json`
- JavaScript style: semicolons as-needed, arrow parens always, trailing commas all
- Indentation: 2 spaces
- Uses `.editorconfig`

**Prettier** (`prettier.config.js`):
- No semicolons
- Trailing commas: all
- Arrow parens: always
- Line width: 80

**Commitlint** (`commitlint.config.js`):
- Uses conventional commits format

### Docusaurus Config

Main configuration in `website/siteConfig.js`:
- **Search**: Algolia DocSearch (index rebuilt every 24hrs)
- **Deployment**: Auto-publish via Netlify
- **Edit URLs**: Point to GitHub main branch
- **Syntax highlighting**: Prism with JSX support, custom JSON5 support

### Custom Pages

Located in `website/pages/en/`:
- `index.js`: Homepage with demo editor
- `examples.js`: Interactive examples
- `about.js`: About page
- `versions.js`: Version history
- `help.js`: Help/resources
- `code-of-conduct.js`: Community guidelines
- `404.js`: Error page

These are React components, not Markdown.

## Code Style

### JavaScript/TypeScript
- Use Biome's recommended rules
- Semi-colons: as-needed (omit when possible)
- Arrow functions: always use parentheses
- Trailing commas: always
- `forEach` loop rule disabled

### Markdown/YAML/HTML
- Use Prettier defaults with 80-char line width
- No trailing semicolons in frontmatter
- Preserve prose wrapping

### Commits
- Follow conventional commits: `type(scope): message`
- Types: `feat`, `fix`, `docs`, `chore`, `refactor`, etc.
- Enforced by commitlint in git hooks

## Working with Documentation

### Adding New Docs
1. Create Markdown file in `docs/`
2. Add appropriate frontmatter:
   ```md
   ---
   id: unique-id
   title: Page Title
   ---
   ```
3. Update `website/sidebars.json` to include in navigation

### Blog Posts
- Create in `website/blog/` with date format: `YYYY-MM-DD-slug.md`
- Frontmatter should include: `title`, `author`, `authorURL`, `authorImageURL`

### Images and Assets
- Place in `website/static/img/` or `docs/assets/`
- Reference as `/img/path` in docs (absolute from static)

## Common Issues

### Module Resolution
The site uses an older version of Docusaurus (1.14.7). If you encounter module issues:
- Ensure you're in the correct directory (`website/` for dev server)
- Dependencies are installed in both root and `website/`

### Hook Failures
If git hooks fail:
- Run `npm run format` to auto-fix formatting
- Check output for specific linting errors
- Bypass with `--no-verify` if necessary (not recommended)

### Build Errors
- Ensure all links in docs are valid
- Check that all referenced images exist
- Verify frontmatter syntax in Markdown files
