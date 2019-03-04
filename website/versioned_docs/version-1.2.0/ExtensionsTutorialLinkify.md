---
id: version-1.2.0-extensions-tutorial-linkify
title: Extensions tutorial: linkify
original_id: extensions-tutorial-linkify
---

Linkify features a type of interaction that’s easy to implement with the [Draft.js plugins](https://www.draft-js-plugins.com/) API (here, the [`handlePastedText`](https://draftjs.org/docs/api-reference-editor#handlepastedtext) API from Draft.js).

It only requires implementing `handlePastedText` and no other API:

```jsx
const linkifyPlugin = () => ({
  handlePastedText(
    text: string,
    html: ?string,
    editorState: EditorState,
    { setEditorState }: { setEditorState: (EditorState) => void },
  ) {
    let nextState = editorState
    if (text.match(LINKIFY_REGEX_EXACT)) {
      const selection = nextState.getSelection()

      if (selection.isCollapsed()) {
        nextState = createEntity(
          nextState,
          "LINK",
          { url: text },
          text,
          "MUTABLE",
        )
      } else {
        const content = nextState.getCurrentContent()
        const contentWithEntity = content.createEntity("LINK", "MUTABLE", {
          url: text,
        })
        const entityKey = contentWithEntity.getLastCreatedEntityKey()
        nextState = RichUtils.toggleLink(nextState, selection, entityKey)
      }
      setEditorState(nextState)
      return "handled"
    }

    return "not-handled"
  },
})
```

Linkify is a good feature to have as an extension because it is both very useful to end users, and very opinionated – because of the regular expression used to determine whether pasted content is a URL. No URL detection will be perfect, it is important to use a technique that has appropriate false positives and false negatives for the use case.

In the above example, there are two use cases:

- If the selection is collapsed, insert the text of the URL and create a link on it.
- If the selection is not collapsed, insert the pasted URL as a link onto the selected text.

## Example

Here is a demo:

<iframe src="https://demo.draftail.org/storybook/iframe.html?selectedKind=Plugins&selectedStory=Linkify" class="iframe iframe--docs-200"></iframe>
