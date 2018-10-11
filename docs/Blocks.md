---
id: blocks
title: Blocks
---

Simple blocks are very easy to create. Add a new block type to `blockTypes`, specifying which `element` to display the block as.

Here is an example, creating a "Tiny text" block:

```jsx
blockTypes={[
    {
        type: 'tiny-text',
        label: 'Tiny',
        element: 'div',
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
