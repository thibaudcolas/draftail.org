---
id: blocks
title: Blocks
---

Blocks provide structure to the content. They do not overlap – no content can be both a paragraph and a heading.

## Built-in blocks

To use built-in blocks, simply use their predefined type.

```jsx
import { BLOCK_TYPE } from 'draftail';

blockTypes={[
  {
    type: BLOCK_TYPE.BLOCKQUOTE,
  },
]}
```

Built-in blocks come with default labels or icons, styles, as well as an english description and often keyboard shortcuts.

## Custom blocks

Simple blocks are very easy to create. Add a new block type to [`blockTypes`](../reference/api.md#blocks-docs-blocks). Here is an example, creating a "Tiny text" block:

```jsx
blockTypes={[
    {
        type: 'tiny-text',
        label: 'Tiny',
    },
]}
```

You may also use CSS to style the block, via the `Draftail-block--tiny-text` class:

```css
.Draftail-block--tiny-text {
  font-size: 0.7625rem;
  font-style: italic;
}
```

### Custom list blocks

Use a type ending in `-list-item`, such as `action-list-item`, for a custom list block that should reuse Draftail’s list editing behavior. Pressing Enter at the end of a non-empty item continues the list. On an empty item, Enter reduces its nesting depth, or returns to an unstyled block at depth zero.

This naming convention controls editing behavior; you still need to provide the list’s rendering and styling. It was introduced with [plugin support in Draftail 1.2](https://github.com/wagtail/draftail/pull/171).

### Examples

With a live editor,

<iframe src="https://demo.draftail.org/storybook/iframe.html?id=docs--blocks" class="iframe iframe--docs-200"></iframe>

## Custom block rendering

For even more advanced blocks requiring custom React components to render, please refer to the [`plugins`](../introduction/plugins.md) API.
