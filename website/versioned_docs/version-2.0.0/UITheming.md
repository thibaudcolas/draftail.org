---
id: version-2.0.0-ui-theming
title: UI theming
original_id: ui-theming
---

The base editor has a very simple UI and its styles are relatively straightforward. To make sure everything works, use a CSS reset, like [Normalize.css](https://necolas.github.io/normalize.css/).

## CSS theming

To tweak the editor UI, Draftail uses old-fashioned stable, namespaced class names that you are free to add more styles to. For example, the toolbar uses `.Draftail-Toolbar`.

Inspect the editor and target class names starting with `Draftail-`, or if unavailable `Draft` / `public-Draft` from Draft.js.

Here’s an example: `Draftail-block--empty`, to style empty blocks differently from the rest.

## Sass theming

Draftail also makes its Sass stylesheets available for extension:

```scss
// Increase the default editor z-index.
$draftail-editor-z-index: 100;

// Import all of the styles in your build.
@import "draftail/src/index";
```

You can get very far by adding new default values for the variables in [`_constants.scss`](https://github.com/springload/draftail/blob/main/src/api/_constants.scss). For example,

```scss
// Remove the editor's border and make the toolbar free-floating
$draftail-editor-border: 0;
$draftail-editor-padding: 0;
$draftail-toolbar-radius: 5px;

@import "draftail/src/index";
```

Draftail also has a `draftail-richtext-styles` mixin you can use to make sure styles on rich text content don't leak to other parts of your site:

```scss
@include draftail-richtext-styles() {
  // Style Draft.js blockquotes.
  blockquote {
    padding: 0 0 0 20px;
    margin-inline-start: 0;
    font-style: italic;
    border-inline-start: 1px solid #e5e5e5;
  }
}
```

Alternatively, only import the constants to reuse them elsewhere in your project.

```scss
@import "draftail/lib/api/constants";
```

## Examples

<iframe src="https://demo.draftail.org/storybook/iframe.html?id=docs--ui-theming" class="iframe iframe--docs-200"></iframe>
