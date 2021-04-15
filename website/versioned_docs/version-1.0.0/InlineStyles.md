---
id: version-1.0.0-inline-styles
title: Inline styles
original_id: inline-styles
---

Inline styles provide inline formatting for rich text. They can overlap: text can be both bold and italic.

## Built-in styles

All you need to do is to use the predefined type for the block, via an object in [`inlineStyles`](API.md#inline-styles-docs-inline-styles):

```jsx
import { INLINE_STYLE } from 'draftail';

inlineStyles={[
  {
    type: INLINE_STYLE.BOLD,
  },
]}
```

All built-in styles come with default labels or icons, styles, as well as an english description and often keyboard shortcuts.

## Custom styles

Apart from a `type`, custom inline styles only require a `style` prop, defining which [CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference) to apply when the format is active.

Here is a basic example:

```jsx
inlineStyles={[
    {
        label: 'Redacted',
        type: 'REDACTED',
        style: {
            backgroundColor: 'currentcolor',
        },
    },
]}
```

It is also possible to override the styling of predefined inline styles:

```jsx
inlineStyles={[
    {
        label: 'Bold',
        type: INLINE_STYLE.BOLD,
        style: {
            fontWeight: 'bold',
            textShadow: '1px 1px 1px black',
        },
    },
]}
```

All other props are optional, but styles need to have either a `label` or `icon` in order to appear in the toolbar.

### Examples

Those examples would render as:

<iframe src="https://demo.draftail.org/storybook/iframe.html?id=docs--inline-styles" class="iframe iframe--docs-200"></iframe>
