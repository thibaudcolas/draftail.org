---
id: api
title: API reference
---

## DraftailEditor

```js
import { DraftailEditor } from "draftail"

const editor = <DraftailEditor />
```

To change the behavior of the editor, pass props to the `DraftailEditor` component. Here are the available props, and their default values:

```jsx
// Initial content of the editor. Use this to edit pre-existing content.
rawContentState: null,
// Called when changes occured. Use this to persist editor content.
onSave: null,
// Content of the editor, when using the editor as a controlled component. Incompatible with `rawContentState` and `onSave`.
editorState: null,
// Called whenever the editor state is updated. Use this to manage the content of a controlled editor. Incompatible with `rawContentState` and `onSave`.
onChange: null,
// Called when the editor receives focus.
onFocus: null,
// Called when the editor loses focus.
onBlur: null,
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
// Set whether the editor should be rendered in readOnly mode.
// See https://draftjs.org/docs/api-reference-editor.html#readonly
readOnly: false,
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
// List of plugins of the draft-js-plugins architecture.
plugins: [],
// Optionally override the default Draftail toolbar, removing or replacing it.
topToolbar: Toolbar,
// Optionally add a custom toolbar underneath the editor, e.g. for metrics.
bottomToolbar: null,
// Max level of nesting for list items. 0 = no nesting. Maximum = 10.
maxListNesting: 1,
// Frequency at which to call the save callback (ms).
stateSaveInterval: 250,
```

### rawContentState and onSave

`rawContentState` and `onSave` are used to initialise the editor with content, and to periodically save new content. They work with [raw ContentState](ContentStorage.md) objects representing the editor’s content, or `null` if the editor is empty.

This is the editor’s [uncontrolled component](https://reactjs.org/docs/uncontrolled-components.html) API, which is easier to use for simple implementations. Have a look at the [controlled component](ControlledComponent.md) API as well, with [`editorState` and `onChange`](#editorstate-and-onchange).

### editorState and onChange

`editorState` and `onChange` are used to set the state of the editor, and update this state whenever there are changes to the editor’s content or selection. They work with [`EditorState`](ContentStorage.md#editorstate-vs-contentstate) objects representing all of the editor’s state.

This is the editor’s [controlled component](https://reactjs.org/docs/forms.html#controlled-components) API, matching that of other Draft.js examples.

### Inline styles

How-to guide: [Inline styles](InlineStyles.md)

```jsx
const editor = <DraftailEditor inlineStyles={[...]} />
```

Each item in `inlineStyles` can have the following props:

```jsx
// Unique type shared between inline style instances.
type: string,
// Describes the inline style in the editor UI, concisely.
label?: string,
// Describes the inline style in the editor UI.
description?: string,
// Represents the inline style in the editor UI.
icon?: IconProp,
// CSS properties (in JS format) to apply for styling within the editor area.
style?: {},
```

### Blocks

How-to guide: [Blocks](Blocks.md)

```jsx
const editor = <DraftailEditor blockTypes={[...]} />
```

Each item in `blockTypes` can have the following props:

```jsx
// Unique type shared between block instances.
type: string,
// Describes the block in the editor UI, concisely.
label?: string,
// Describes the block in the editor UI.
description?: string,
// Represents the block in the editor UI.
icon?: IconProp,
// DOM element used to display the block within the editor area.
element?: string,
```

### Entities

How-to guide: [Entities](Entities.md)

```jsx
const editor = <DraftailEditor entityTypes={[...]} />
```

Each item in `entityTypes` can have the following props:

```jsx
// Unique type shared between entity instances.
type: string,
// Describes the entity in the editor UI, concisely.
label?: string,
// Describes the entity in the editor UI.
description?: string,
// Represents the entity in the editor UI.
icon?: IconProp,
// React component providing the UI to manage entities of this type.
source: ComponentType<{}>,
// React component to display inline entities.
decorator?: ComponentType<{}>,
// React component to display block-level entities.
block?: ComponentType<{}>,
// Array of attributes the entity uses, to preserve when filtering entities on paste.
// If undefined, all entity data is preserved.
attributes?: $ReadOnlyArray<string>,
// Attribute - regex mapping, to whitelist entities based on their data on paste.
// For example, { url: '^https:' } will only preserve links that point to HTTPS URLs.
whitelist?: {},
```

### Decorators

How-to guide: [Decorators](Decorators.md)

```jsx
const editor = <DraftailEditor decorators={[...]} />
```

Each item in `decorators` can have the following props:

```jsx
// Determines which pieces of content are to be decorated.
strategy: (block: ContentBlock, callback: (start: number, end: number) => void, contentState: ContentState) => void,
// React component to display the decoration.
component: ComponentType<{}>,
```

### Controls

How-to guide: [Controls](ArbitraryControls.md)

```jsx
const editor = <DraftailEditor controls={[...]} />
```

Each item in `controls` can have the following props:

```jsx
// Retrieve the full Draft.js EditorState.
getEditorState: () => EditorState,
// Change any part of the EditorState.
onChange: (EditorState) => void,
```

### Plugins

How-to guide: [Plugins](Plugins.md)

```jsx
const editor = <DraftailEditor plugins={[...]} />
```

Each item in `plugins` follows the [draft-js-plugins API](https://github.com/draft-js-plugins/draft-js-plugins/blob/master/HOW_TO_CREATE_A_PLUGIN.md).

## Managing focus

The `DraftailEditor` has a `focus()` API [like that of Draft.js](https://draftjs.org/docs/advanced-topics-managing-focus.html#content). Use it to imperatively move focus to the editor. There are also `onFocus` and `onBlur` props to hook into the editor’s focus lifecycle, for example for [form validation](FormValidation.md).

## Content format identifiers

Draftail exports identifiers for common rich text formats to ensure the same identifiers are used consistently.

```js
import { INLINE_STYLE, BLOCK_TYPE, ENTITY_TYPE } from "draftail"
```

For inline styles:

```js
// See https://github.com/facebook/draft-js/blob/master/src/model/immutable/DefaultDraftInlineStyle.js
export const INLINE_STYLE = {
  BOLD: "BOLD",
  ITALIC: "ITALIC",
  CODE: "CODE",
  UNDERLINE: "UNDERLINE",
  STRIKETHROUGH: "STRIKETHROUGH",
  MARK: "MARK",
  QUOTATION: "QUOTATION",
  SMALL: "SMALL",
  SAMPLE: "SAMPLE",
  INSERT: "INSERT",
  DELETE: "DELETE",
  KEYBOARD: "KEYBOARD",
  SUPERSCRIPT: "SUPERSCRIPT",
  SUBSCRIPT: "SUBSCRIPT",
}
```

For blocks:

```js
// See https://github.com/facebook/draft-js/blob/master/src/model/immutable/DefaultDraftBlockRenderMap.js
export const BLOCK_TYPE = {
  // This is used to represent a normal text block (paragraph).
  UNSTYLED: "unstyled",
  HEADER_ONE: "header-one",
  HEADER_TWO: "header-two",
  HEADER_THREE: "header-three",
  HEADER_FOUR: "header-four",
  HEADER_FIVE: "header-five",
  HEADER_SIX: "header-six",
  UNORDERED_LIST_ITEM: "unordered-list-item",
  ORDERED_LIST_ITEM: "ordered-list-item",
  BLOCKQUOTE: "blockquote",
  CODE: "code-block",
  // This represents a "custom" block, not for rich text, with arbitrary content.
  ATOMIC: "atomic",
}
```

For entities:

```js
export const ENTITY_TYPE = {
  LINK: "LINK",
  IMAGE: "IMAGE",
  HORIZONTAL_RULE: "HORIZONTAL_RULE",
}
```

## Data conversion helpers

How-to guide: [Data conversion helpers](ControlledComponent.md#data-conversion-helpers)

Draftail exports the methods it uses internally to initialise the editor’s content via `rawContentState` and persist it in `onSave`: [`createEditorStateFromRaw`](#createeditorstatefromraw), and [`serialiseEditorStateToRaw`](#serialiseeditorstatetoraw).

### createEditorStateFromRaw

Creates a new EditorState from a RawDraftContentState, or an empty editor state by passing `null`.

```js
createEditorStateFromRaw = (rawContentState: ?RawDraftContentState) =>
  EditorState
```

### serialiseEditorStateToRaw

Serialises the editorState using `convertToRaw`, but returns `null` if the editor content is empty (no text, entities, styles).

```js
serialiseEditorStateToRaw = (editorState: EditorState) => RawDraftContentState
```

## Reusable UI components

Some of Draftail’s UI components can be reused to more easily build extensions that are consistent.

### Icon

The Icon can be reused to have consistent icon sizing between different extensions and the toolbar.

```js
import { Icon } from "draftail"

const icon = <Icon icon="#square" />
```

Supported props:

```jsx
icon: string | string[] | Node,
title: ?string,
className: ?string,
```

There is further documentation about what formats are allowed for `icon`: [Customising icons](CustomisingIcons.md).

### ToolbarButton

The ToolbarButton can be reused when building custom [`controls`](ArbitraryControls.md) in the toolbar.

```js
import { ToolbarButton } from "draftail"

const button = <ToolbarButton />
```

Supproted props:

```jsx
name: ?string,
active: boolean,
label: ?string,
title: ?string,
icon: ?IconProp,
onClick: ?(string) => void,
```
