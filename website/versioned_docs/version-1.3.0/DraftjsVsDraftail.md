---
id: version-1.3.0-draftjs-vs-draftail
title: Draft.js vs Draftail
original_id: draftjs-vs-draftail
---

Do you already have some knowledge of Draft.js, and wonder how Draftail differs? Are you wondering which of the two is appropriate for your project? This reference is for you.

## TL;DR;

Draftail is an opinionated editor built with Draft.js, a framework to build rich text experiences. Draft.js is relatively low-level, so Draftail provides high-level APIs to easily implement simple formatting needs (e.g. bold) in a WISYWIG style, as well as providing access to the low-level APIs for more custom extensions.

## High-level APIs

Draftail provides high-level, config-only APIs to create [inline styles](InlineStyles.md) and [blocks](Blocks.md). Using those APIs, Draftail provides:

- A toolbar button, with an active state, an icon or label, and tooltip including description and keyboard shortcut
- A keyboard shortcut, for formats that have built-in support
- A Markdown shortcut, for formats that have a Markdown representation
- Default styles for formatted text
- Support to copy-paste custom formats between editors
- Filtering out of inactive formats on paste

The above is also built-in for:

- Line breaks
- Horizontal rules
- To some extent, links and images

## Entities

Additionally to the above, Draftail provides lower-level APIs for [entities](Entities.md), both inline and block-level. Most of the above capabilities are also built-in for entities, except for:

- Entity rendering, whether block or inline. The React component needs to be provided.
- Entity creation UI – when clicking the button in the toolbar, or editing an existing entity. This is supported by providing a React component that will render and be able to update the Draft.js content.

### Low-level APIs

Inline styles, blocks, and entities should be enough for most WYSIWYG experiences. For more advanced features, there are further low-level APIs available:

- [Decorators](Decorators.md), access to the [corresponding Draft.js API](https://draftjs.org/docs/advanced-topics-decorators).
- [Controls](ArbitraryControls.md), a very simple API to render a React component in the toolbar that can edit the editor content in any way.
- [Plugins](Plugins.md), API of the [Draft.js Plugins](https://github.com/draft-js-plugins/draft-js-plugins) plugin architecture.

Additionally, the editor supports overriding its [toolbars](CustomisingToolbars.md) for even more advanced changes (e.g. use separate modal toolbars for inline and block-level formatting).

## Behind the scenes

Beyond supporting all of those APIs, most of the value in Draftail over plain Draft.js is:

- Having good support for keyboard shortcuts and Markdown handling out of the box. There would be quite a lot of boilerplate code to write to get this with a vanilla editor.
- Advanced support to whitelist only the formats you want the editor to support, automatically [filtering-out](https://github.com/thibaudcolas/draftjs-filters) paste of other formats the editor doesn’t have enabled.
- Support for copy-paste of custom formatting between editors, which Draft.js doesn’t support [out of the box](https://github.com/thibaudcolas/draftjs-conductor).
