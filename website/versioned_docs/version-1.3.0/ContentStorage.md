---
id: version-1.3.0-content-storage
title: Content storage
original_id: content-storage
---

Like all Draft.js editors, Draftail does not process content directly as HTML but as a more structured format called [ContentState](https://draftjs.org/docs/api-reference-content-state/).

## How Draft.js represents rich text

Internally, Draft.js uses its `ContentState` representation, which uses a fixed schema, with predefined rich text types. There are strong constraints on content structure – what is block-level formatting and what is inline, what can have data and how.

For storage, editors output a [raw ContentState](https://draftjs.org/docs/api-reference-data-conversion#converttoraw) representation that is then serialisable as JSON, or can be converted to another format like HTML.

Here is a simple rich text example:

```js
const rawContentState = {
  blocks: [
    {
      // All blocks have a unique key, along with their text, and a type. "unstyled" is the default.
      key: "b1ito",
      text: "Example of the Draft.js ContentState.",
      type: "unstyled",
      // Blocks can have a depth greater than 0 when nested (e.g. list items).
      depth: 0,
      // Inline formatting is stored as ranges, which can overlap.
      inlineStyleRanges: [
        {
          offset: 15,
          length: 8,
          style: "BOLD",
        },
      ],
      // Entities (e.g. links) also use ranges, but do not overlap.
      // Entity ranges point to a key in the entity map.
      entityRanges: [
        {
          offset: 24,
          length: 12,
          key: 0,
        },
      ],
      // Additional data for the block.
      data: {},
    },
  ],
  entityMap: {
    "0": {
      type: "LINK",
      mutability: "MUTABLE",
      data: {
        url: "https://draftjs.org/docs/api-reference-content-state/",
      },
    },
  },
}
```

### Blocks

Think of blocks as [block-level elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements) in HTML: headings, paragraphs, embeds, etc. They direct the flow of the content, taking up the whole width of their containers, following one-another vertically. All of the editor’s content is stored in this `blocks` array.

Draft.js represents each block with the following attributes:

- `key`, a unique identifier for the block.
- `text`, the block’s content in plain-text form.
- `type`, defining how the block behaves in the editor as well as how it should be displayed to end users.
- `depth`, whether the block is visually nested (e.g. for lists), and if so by how many levels.
- `inlineStyleRanges`, indicating where styles are applied in the text.
- `entityRanges`, indicating where entities are applied.
- `data`, additional data/metadata stored alongside the block.

### Block type

The block `type` generally defines how a block is meant to be used in the editor, and displayed later on in the content lifecycle. Blocks are `unstyled` by default.

Draft.js comes with [predefined types](https://github.com/facebook/draft-js/blob/master/src/model/immutable/DefaultDraftBlockRenderMap.js), which generally map to HTML elements:

- `unstyled`
- `header-one`
- `header-two`
- `header-three`
- `header-four`
- `header-five`
- `header-six`
- `unordered-list-item`
- `ordered-list-item`
- `blockquote`
- `code-block`
- `atomic`, used for embedded, mostly non-textual content.

### Inline styles

`inlineStyleRanges` lists all of the locations in the block’s text where styles have been applied, based on starting `offset` and `length`. When multiple styles are applied to a given chunk of text, the ranges can overlap.

Here as well, Draft.js comes with [predefined types of styles](https://github.com/facebook/draft-js/blob/master/src/model/immutable/DefaultDraftInlineStyle.js):

- `BOLD`
- `CODE`
- `ITALIC`
- `STRIKETHROUGH`
- `UNDERLINE`

### Entities

Like for styles, `entityRanges` lists the positions in `text` where entities are applied as an `offset` and `length`. These cannot overlap. Entities are associated by `key`, which corresponds to the `entityMap`.

In the `entityMap`, entities are stored as:

- `type`, like for blocks, defining how the entity behaves in the editor and how it should be displayed.
- `mutability` (`MUTABLE`/`IMMUTABLE`), whether changes in the text the entity is applied on are allowed (e.g. links on arbitrary text, vs mentions containing a person’s full name).
- `data`, to store arbitrary data for the entity.

## EditorState vs ContentState

While ContentState is what Draft.js uses to represent the editor’s content, the content is only one part of the state of the editor – [`EditorState`](https://draftjs.org/docs/api-reference-editor-state) is what Draft.js uses to store all of the editor’s state: content, text selection, undo/redo stack, and more.

---

To learn more about Draft.js, check out resources listed on the [Awesome Draft.js](https://github.com/nikgraf/awesome-draft-js) list.
