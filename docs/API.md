---
id: api
title: API Reference
---

To change the behavior of the editor, pass props to `DraftailEditor`. Here are the available props, and their default values:

```jsx
// Initial content of the editor. Use this to edit pre-existing content.
rawContentState: null,
// Called when changes occured. Use this to persist editor content.
onSave: () => {},
// Displayed when the editor is empty. Hidden if the user changes styling.
placeholder: null,
// Enable the use of horizontal rules in the editor.
enableHorizontalRule: false,
// Enable the use of line breaks in the editor.
enableLineBreak: false,
// Show undo control in the toolbar.
showUndoControl: false,
// Show redo control in the toolbar.
showRedoControl: false,
// Disable copy/paste of rich text in the editor.
stripPastedStyles: true,
// Set whether spellcheck is turned on for your editor.
// See https://draftjs.org/docs/api-reference-editor.html#spellcheck.
spellCheck: false,
// Optionally set the overriding text alignment for this editor.
// See https://draftjs.org/docs/api-reference-editor.html#textalignment.
textAlignment: null,
// Optionally set the overriding text directionality for this editor.
// See https://draftjs.org/docs/api-reference-editor.html#textdirectionality.
textDirectionality: null,
// Set if auto capitalization is turned on and how it behaves.
// See https://draftjs.org/docs/api-reference-editor.html#autocapitalize-string.
autoCapitalize: null,
// Set if auto complete is turned on and how it behaves.
// See https://draftjs.org/docs/api-reference-editor.html#autocomplete-string.
autoComplete: null,
// Set if auto correct is turned on and how it behaves.
// See https://draftjs.org/docs/api-reference-editor.html#autocorrect-string.
autoCorrect: null,
// See https://draftjs.org/docs/api-reference-editor.html#aria-props.
ariaDescribedBy: null,
// List of the available block types.
blockTypes: [],
// List of the available inline styles.
inlineStyles: [],
// List of the available entity types.
entityTypes: [],
// List of active decorators.
decorators: [],
// Additional React components to render in the toolbar.
controls: [],
// Max level of nesting for list items. 0 = no nesting. Maximum = 10.
maxListNesting: 1,
// Frequency at which to call the save callback (ms).
stateSaveInterval: 250,
```

## Blocks

```jsx
// Unique type shared between block instances.
type: PropTypes.string.isRequired,
// Describes the block in the editor UI, concisely.
label: PropTypes.string,
// Describes the block in the editor UI.
description: PropTypes.string,
// Represents the block in the editor UI.
icon: [...], // see documentation.
// DOM element used to display the block within the editor area.
element: PropTypes.string,
```

## Inline styles

```jsx
// Unique type shared between inline style instances.
type: PropTypes.string.isRequired,
// Describes the inline style in the editor UI, concisely.
label: PropTypes.string,
// Describes the inline style in the editor UI.
description: PropTypes.string,
// Represents the inline style in the editor UI.
icon: [...], // see documentation.
// CSS properties (in JS format) to apply for styling within the editor area.
style: PropTypes.Object,
```

## Entities

```jsx
// Unique type shared between entity instances.
type: PropTypes.string.isRequired,
// Describes the entity in the editor UI, concisely.
label: PropTypes.string,
// Describes the entity in the editor UI.
description: PropTypes.string,
// Represents the entity in the editor UI.
icon: [...], // see documentation.
// React component providing the UI to manage entities of this type.
source: PropTypes.func.isRequired,
// React component to display inline entities.
decorator: PropTypes.func,
// React component to display block-level entities.
block: PropTypes.func,
// Array of attributes the entity uses, to preserve when filtering entities on paste.
// If undefined, all entity data is preserved.
attributes: PropTypes.arrayOf(PropTypes.string),
// Attribute - regex mapping, to whitelist entities based on their data on paste.
// For example, { url: '^https:' } will only preserve links that point to HTTPS URLs.
whitelist: PropTypes.object,
```

## Decorators

```jsx
// Determines which pieces of content are to be decorated.
strategy: PropTypes.func,
// React component to display the decoration.
component: PropTypes.func,
```
