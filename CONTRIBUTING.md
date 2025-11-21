# Contribution Guidelines

Thank you for considering to help this project.

We welcome all support, whether on bug reports, feature requests, code, design, reviews, tests, documentation, and more.

## Development

### Install

> Clone the project on your computer, and install [Node](https://nodejs.org). This project also uses [nvm](https://github.com/creationix/nvm).

```sh
nvm install
# Then, install all project dependencies.
npm install
```

### Working on the project

> Everything mentioned in the installation process should already be done.

```sh
cd website
npm run start
```

### Releases

The website is automatically published on every push to main, with [Netlify](https://www.netlify.com). The search engine index is automatically rebuilt every 24hrs. Full config: [algolia/docsearch-configs:draftail.json](https://github.com/algolia/docsearch-configs/blob/master/configs/draftail.json)

## Favicons

Favicons generated with [RealFaviconGenerator](https://realfavicongenerator.net/).

Original pencil icon is the [Noun project crayon](https://commons.wikimedia.org/wiki/File:Noun_project_-_crayon.svg) dedicated to the public domain (CC0) by D. Charbonnier.

## Icons

The wesite’s icons come from [IcoMoon](https://icomoon.io/). Emojis come from [FxEmojis](https://github.com/mozilla/fxemoji).

## Static editor content

The demo site contains static content exported with [draftjs_exporter](https://github.com/springload/draftjs_exporter). It is placed there for SEO, and also to make the loading experience nicer.

To regenerate it, get the serialised ContentState for the index page's editor (in `sessionStorage`), go to [the Draftail playground](http://playground.draftail.org/), and place the ContentState in the `sessionStorage` value of that editor.

## Content

- Always use [relative file links](https://docusaurus.io/docs/markdown-features/links) to `.md` files inside Markdown docs to preserve link validation, and in-editor file navigation.
