---
id: blocks
title: Blocks
---

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

Simple blocks are very easy to create. Add a new block type to `blockTypes`. Here is an example, creating a "Tiny text" block:

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
  font-size: 11px;
  font-style: italic;
}
```

More advanced blocks, requiring custom React components, aren't supported at the moment. If you need this, feel free to [create an issue](https://github.com/springload/draftail/issues/new).
