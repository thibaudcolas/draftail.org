---
id: advanced-extensions
title: Advanced extensions
---

> Those extensions require a good understanding of the [Draft.js](https://draftjs.org/) API.

## Custom text decorators

Custom decorators follow the Draft.js [CompositeDecorator](https://draftjs.org/docs/advanced-topics-decorators.html#compositedecorator) API. They can be specified as an array via the `decorators` prop of the editor.

## Arbitrary toolbar controls

Draftail also has an API to add arbitrary controls in the toolbar, via the `controls` prop. This prop takes an array of React components, which will be given a `getEditorState` function and the `onChange` handler as props.

- `getEditorState` can be used to retrieve and read the full Draft.js [EditorState](https://draftjs.org/docs/api-reference-editor-state).
- `onChange` can be called with a new EditorState.

The controls can import the `Icon` and `ToolbarButton` components from Draftail if necessary.
