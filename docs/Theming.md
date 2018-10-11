---
id: theming
title: Theming
---

Without custom controls, the editor has a very simple UI and its styles are relatively straightforward. To make sure everything works, use a CSS reset, like [Normalize.css](https://necolas.github.io/normalize.css/).

To tweak the editor UI, Draftail uses old-fashioned stable, namespaced class names that you are free to add more styles to. For example, the toolbar uses `.Draftail-Toolbar`.

Draftail also makes its Sass stylesheets available for extension:

```scss
// Increase the default editor z-index.
$draftail-editor-z-index: 100;

// Import all of the styles in your build.
@import "draftail/lib/index";

// Alternatively, only import the constants to reuse them elsewhere in your project.
@import "draftail/lib/api/constants";
```

## Icons

Draftail can use icons to display each format in the toolbar. There are multiple possible formats:

- A `<path />` data string (the `d` attribute), eg `'M10 10 H 90 V 90 H 10 Z'`.
- An array of paths, eg. `['M10 10 H 90 V 90 H 10 Z', 'M10 10 H 90 V 90 H 10 Z']`.
- An SVG symbol reference, inline or external eg. `#square` / `test.svg#square`.

The SVG has to use a 1024x1024 viewbox that will be downscaled to 16x16.

To deal with more complex requirements, the `icon` can be an arbitrary React component: `<Icon icon={<CustomIcon icon="square" />`.

## Styles

If using Sass, you can get very far by adding new default values for the variables in [`_constants.scss`](/lib/api/_constants.scss). For example,

```scss
// Remove the editor's border and make the toolbar free-floating
$draftail-editor-border: 0;
$draftail-editor-padding: 0;
$draftail-toolbar-radius: 5px;

@import "draftail/lib/index";
```

Draftail also has a `draftail-richtext-styles` mixin you can use to make sure styles on rich text content don't leak to other parts of your site:

```scss
@include draftail-richtext-styles {
  // Style Draft.js blockquotes.
  blockquote {
    border-left: 1px solid #e5e5e5;
    padding: 0 0 0 20px;
    margin-left: 0;
    font-style: italic;
  }
}
```

Without Sass, refer to class names starting with `Draftail-` or `Draft` / `public-Draft` (Draft.js)..
