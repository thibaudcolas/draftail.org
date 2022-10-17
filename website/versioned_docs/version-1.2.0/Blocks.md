---
id: version-1.2.0-blocks
title: Blocks
original_id: blocks
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

Simple blocks are very easy to create. Add a new block type to [`blockTypes`](API.md#blocks-docs-blocks). Here is an example, creating a "Tiny text" block:

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

### Examples

With a live editor,

<iframe src="https://demo.draftail.org/storybook/iframe.html?id=docs--blocks" class="iframe iframe--docs-200"></iframe>

## Custom block rendering

For even more advanced blocks requiring custom React components to render, please refer to the [`plugins`](Plugins.md) API.
