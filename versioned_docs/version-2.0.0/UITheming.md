---
id: ui-theming
title: UI theming
original_id: ui-theming
---

The base editor has a very simple UI and its styles are relatively straightforward. To make sure everything works, use a CSS reset, like [Normalize.css](https://necolas.github.io/normalize.css/).

## CSS theming

To tweak the editor UI, Draftail uses old-fashioned stable, namespaced class names that you are free to add more styles to. For example, the toolbar uses `.Draftail-Toolbar`.

Inspect the editor and target class names starting with `Draftail-`, or if unavailable `Draft` / `public-Draft` from Draft.js.

Here’s an example: `Draftail-block--empty`, to style empty blocks differently from the rest.

## Sass theming

Draftail also makes its Sass stylesheets available for extension, for users of [Dart Sass](https://sass-lang.com/dart-sass/) version 1.23.0 and up with the [`@use` Sass module system](https://sass-lang.com/documentation/at-rules/use/).

```scss
@use "draftail/src/index" with (
  $draftail-editor-z-index: 100,
  // Remove the editor's border and make the toolbar free-floating.
  $draftail-editor-border: 0,
  $draftail-editor-padding: 0,
  $draftail-toolbar-radius: 5px
);
```

This also supports reusing the variables, for example:

```scss
@use "draftail/src/index" as * with (
  $draftail-editor-z-index: 100
);

.my-help-text {
  color: $draftail-editor-text;
}
```

Here are available Sass variables to override or reuse, and their default values:

```scss
$draftail-base-spacing: 0.25rem !default;
$draftail-editor-padding: $button-spacing + $controls-spacing !default;
$draftail-editor-text: $color-grey !default;
$draftail-editor-background: $color-white !default;
$draftail-editor-readonly-opacity: 0.5 !default;
$draftail-editor-chrome: $color-light-grey !default;
$draftail-editor-chrome-text: $color-grey !default;
$draftail-editor-chrome-active: $color-black !default;
$draftail-editor-chrome-accent: color.adjust(
  $color: $draftail-editor-chrome,
  $lightness: -10%,
) !default;
$draftail-tooltip-chrome: $color-grey !default;
$draftail-tooltip-chrome-text: $color-white !default;
$draftail-editor-font-family: sans-serif !default;
$draftail-editor-font-size: 1rem !default;
$draftail-editor-line-height: 1.5 !default;
$draftail-placeholder-text: $color-grey-757575 !default;
$draftail-editor-border: 1px solid $draftail-editor-chrome !default;
$draftail-contrast-outline: var(
  --draftail-contrast-outline,
  2px solid transparent
) !default;
$draftail-contrast-outline-modal: var(
  --draftail-contrast-outline-modal,
  10px solid transparent
) !default;
$draftail-editor-radius: 5px !default;
$draftail-tooltip-radius: 5px !default;
$draftail-toolbar-radius: 0 !default;
$draftail-toolbar-tooltip-radius: 4px !default;
$draftail-toolbar-border-bottom: $draftail-editor-border !default;
$draftail-toolbar-tooltip-duration: 0.1s !default;
$draftail-toolbar-tooltip-delay: 1s !default;
$draftail-block-spacing: $draftail-base-spacing * 2 !default;
$draftail-editor-z-index: 1 !default;
$draftail-tooltip-z-index: $draftail-editor-z-index + 10 !default;
$draftail-overlay-z-index: $draftail-tooltip-z-index + 10 !default;
$draftail-toolbar-z-index: $draftail-overlay-z-index + 10 !default;
$draftail-toolbar-tooltip-z-index: $draftail-toolbar-z-index + 10 !default;
$draftail-page-overlay-z-index: $draftail-toolbar-z-index + 10 !default;
```

### Rich text styles mixin

Draftail also has a `draftail-richtext-styles` mixin you can use to make sure styles on rich text content don't leak to other parts of your site:

```scss
@use "draftail/src/index" as *;
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

### Legacy import syntax

Sass stylesheet reuse is also possible with legacy `@import` syntax, though this isn’t recommended.

```scss
// Increase the default editor z-index.
$draftail-editor-z-index: 100;
// Remove the editor's border and make the toolbar free-floating
$draftail-editor-border: 0;
$draftail-editor-padding: 0;
$draftail-toolbar-radius: 5px;

// Import all of the styles in your build.
@import "draftail/src/index";
```

Or alternatively, only import the constants to reuse them elsewhere in your project.

```scss
@import "draftail/src/api/constants";
```

## Examples

<iframe src="https://demo.draftail.org/storybook/iframe.html?id=docs--ui-theming" className="iframe iframe--docs-200" />
