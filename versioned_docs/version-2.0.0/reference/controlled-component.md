---
id: controlled-component
title: Controlled component
---

Since [v1.3.0](/blog/2019/08/15/draftail-v1-3-0-community-improvements-beyond-wagtail), the editor can now be used as a [controlled component](https://reactjs.org/docs/forms.html#controlled-components) with its [`editorState` and `onChange`](../reference/api.md#editorstate-and-onchange) props, like a vanilla Draft.js editor. For example, with the `useState` hook:

```js
import React, { useState } from "react"
import { EditorState } from "draft-js"
import { DraftailEditor, BLOCK_TYPE } from "draftail"

const MyEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  return (
    <DraftailEditor
      editorState={editorState}
      onChange={setEditorState}
      blockTypes={[
        { type: BLOCK_TYPE.HEADER_THREE },
        { type: BLOCK_TYPE.UNORDERED_LIST_ITEM },
      ]}
    />
  )
}
```

The `editorState` prop must be set to a Draft.js [`EditorState`](../reference/content-storage.md#editorstate-vs-contentstate) instance, and `onChange` will be called instantaneously whenever needed by Draft.js to update the saved state.

Here is a small example of this in action:

<iframe src="https://demo.draftail.org/storybook/iframe.html?id=docs--controlled-component" class="iframe iframe--docs-200"></iframe>

## Choosing between controlled and uncontrolled APIs

The main advantage of the controlled API is increased _control_ over the editor’s initialisation, validation, and general lifecycle of the content. Having an instant callback on state changes makes it easier to integrate the editor with form validation libraries, or state management tools like Redux.

The main drawback is that there is more implementation work to do – debouncing state updates to improve performance, serialising content to be saved, etc.

## Data conversion helpers

To simplify the initialisation and serialisation of the editor’s content, we provide '
[`createEditorStateFromRaw`](../reference/api.md#createeditorstatefromraw) and [`serialiseEditorStateToRaw`](../reference/api.md#serialiseeditorstatetoraw) methods:

```js
import { createEditorStateFromRaw, serialiseEditorStateToRaw } from "draftail"

// Initialise with `null` if there’s no preexisting state.
const editorState = createEditorStateFromRaw(null)
// Initialise with the raw content state otherwise.
const editorState = createEditorStateFromRaw(rawContentState)

// Content will be `null` if there’s no textual content, or RawDraftContentState otherwise.
const content = serialiseEditorStateToRaw(editorState)
```

When used with a controlled editor, these methods can help with initialising and persisting state the same way as Draftail would if using [`rawContentState` and `onSave`](../reference/api.md#rawcontentstate-and-onsave).
