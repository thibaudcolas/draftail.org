---
id: version-1.0.0-customising-icons
title: Customising icons
original_id: customising-icons
---

## Icon formats

A lot of the formatting options in Draftail rely on icons for toolbar buttons, allowing an `icon?: IconProp` attribute. There are multiple possible formats to this `IconProp`:

- An SVG path data string (the `d` attribute of `<path />`), e.g. `'M10 10 H 90 V 90 H 10 Z'`.
- An array of paths, e.g. `['M10 10 H 90 V 90 H 10 Z', 'M10 10 H 90 V 90 H 10 Z']`.
- An SVG symbol reference, inline or external eg. `#square` / `test.svg#square`.

The SVG has to use a 1024x1024 viewbox that will be downscaled to 16x16.

## Custom icon implementation

To deal with more complex requirements, the `icon` prop can also be an arbitrary React component: `<Icon icon={<CustomIcon icon="square" />}/>`.

For example, with an icon font:

```jsx
const FontIcon = ({ icon }) => (
  <span className={`icon icon-${icon}`} aria-hidden />
);

// And in the editor props:
entityTypes={[
  {
    type: "EMBED",
    description: "Embed",
    icon: <FontIcon icon="embed" />,
    source: EmbedSource,
    block: EmbedBlock,
    attributes: ["url", "title", "thumbnail"],
  }
]}
```

## Ready-made buttons

To customise the icons of BR, HR, and undo/redo buttons, use the `enableHorizontalRule`, `enableLineBreak`, `showUndoControl`, `showRedoControl` props, providing them with an objects with `icon` attributes.

## Example

<iframe src="https://demo.draftail.org/storybook/iframe.html?id=docs--icons" class="iframe iframe--docs-200"></iframe>
