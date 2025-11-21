---
id: arbitrary-controls
title: Arbitrary controls
---

> Those extensions require a good understanding of the [Draft.js](https://draftjs.org/) API.

Draftail also has an API to add arbitrary controls in the toolbar, via the [`controls`](../reference/api.md#controls-docs-arbitrary-controls) prop. This prop takes an array of objects, each which can have a `inline`, `block`, or `meta` key. This key maps to a React component which will be given a `getEditorState` function and the `onChange` handler as props.

- Use the `inline` key for controls intended for the floating toolbar.
- Use the `block` key for controls intended for the "block" static toolbar at the top of the editor.
- Use the `meta` key for controls intended for the bottom / meta toolbar.

Controls can also have a `type` to help with troubleshooting.

Controls can use multiple keys if they need to be displayed in multiple toolbars.

For the React component props:

- `getEditorState` can be used to retrieve and read the full Draft.js [EditorState](https://draftjs.org/docs/api-reference-editor-state).
- `onChange` can be called with a new EditorState.

The controls can import the `Icon` and `ToolbarButton` components from Draftail if necessary.

## Examples

Controls can be used for a wide range of use cases:

- Generating metrics based on the whole content of the editor
- Applying one-off transformations to the editor (e.g. inserting content from third-party data sources, clear formatting).

<iframe src="https://demo.draftail.org/storybook/iframe.html?id=docs--controls" class="iframe iframe--docs-200"></iframe>
