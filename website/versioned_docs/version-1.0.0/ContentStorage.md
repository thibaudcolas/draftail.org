---
id: version-1.0.0-content-storage
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
