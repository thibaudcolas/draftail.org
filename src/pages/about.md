---
title: About Draftail
description: Building a WYSIWYG editor from scratch is (almost) never a good idea
---

# About Draftail

![Draftail logo](/img/logo.svg)

Draftail came about in 2016, as our team grew more and more frustrated with [Wagtail’s](https://github.com/wagtail/wagtail) rich text editor, and decided to build our own to eventually try and replace it.

Building a WYSIWYG editor from scratch is (almost) never a good idea, so we quickly settled on [Draft.js](https://draftjs.org/) as a solid WYSIWYG editor framework to build upon. Draft.js + Wagtail – [Draftail was born](/blog/2018/03/05/why-wagtail-new-editor-is-built-with-draft-js) 🎉 .

A few years later, Draftail is now very capable for many use cases, and it comes with a nice little [fantail](https://en.wikipedia.org/wiki/Fantail) logo.

## Ambitions

The main goal of Draftail is to provide a bullet-proof content editing experience for basic rich text content. A modern take on WYSIWYG.

- All of the interactions with the editor should be doable with [keyboard shortcuts](/docs/keyboard-shortcuts).
- Power users should be able to use [Markdown shortcuts](/docs/markdown-support) in the editor to format content even faster.
- Copy-paste, drag and drop, should just work.

We also want Draftail to be heavily customisable, just like Draft.js is, but with sane defaults.

- Implementing basic formatting with strong guarantees should just be a matter of configuration – No need to reinvent your own Draft.js toolbar.
- More advanced extensions should be able to reach out for lower-level APIs, without compromising on consitency of the experience for end users.
- Experimenting with new capabilities to the editor shouldn’t require constant core changes – there should be [plugin APIs](/docs/plugins).

As a project, it’s also fundamental that:

- The documentation is outstanding, providing examples of all Draftail capabilities, and general Draft.js editor capabilities
- Draftail supports use cases it wasn’t initially envisioned for – like saving Draft.js content to HTML in JavaScript

## Roadmap

Work on the editor is tracked in GitHub issues, and prioritised with [Milestones](https://github.com/springload/draftail/milestones). Have a look if you’re wondering what we’re up to!

For the foreseeable future, high-level items on the roadmap are:

1. Improvements to the editing experience with basic formatting.
2. Better support for rich text features that are relatively advanced, like emojis and tables.
3. Built-in, or pluggable, basic support for links and images without having to write code.

## Related projects

Under the hood, Draftail uses:

- [Draft.js filters](https://github.com/thibaudcolas/draftjs-filters) – Filter Draft.js content to preserve only the formatting you allow.
- [Draft.js conductor](https://github.com/thibaudcolas/draftjs-conductor) – Little Draft.js helpers to make rich text editors “just work”
- [markov_draftjs](https://github.com/thibaudcolas/markov_draftjs) – Draft.js sample content generated with Markov chains of Project Gutenberg books.

It’s also developed with and alongside of other projects,

- [Draft.js exporter](https://github.com/springload/draftjs_exporter) – Library to convert rich text from Draft.js raw ContentState to HTML.
- [Draft.js exporter, Markdown](https://github.com/thibaudcolas/draftjs_exporter_markdown) – Library to convert rich text from Draft.js raw ContentState to Markdown
- [Draftail Playground](https://github.com/thibaudcolas/draftail-playground) – Try Draftail in a full-fledged preview environment

And of course, [Wagtail](https://github.com/wagtail/wagtail) still drives development of the editor significantly.
