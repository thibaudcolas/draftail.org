---
id: importing-and-exporting-html
title: Importing and exporting HTML
---

Like all Draft.js editors, Draftail does not process HTML directly: It uses its own content representation. [Content storage](../reference/content-storage.md) can be done with the Draft.js representation, but it is also possible to import and export HTML instead.

## Deciding how to store content

In some use cases, it may be desirable to store rich text as HTML. This is particularly useful for websites which do not need further processing of their content when displaying it, or which already have existing HTML processing (for example in a CMS). There are also scenarios in which it might be better to store content with the Draft.js [ContentState](https://draftjs.org/docs/api-reference-content-state/) representation, for example if the content is meant to be used in different mediums (web, mobile apps, email, etc).

**In either case, Draftail has no preference as long as it is provided with raw ContentState when initialised with [`rawContentState`](../reference/api.md#rawcontentstate-and-onsave), or EditorState when using [`editorState`](../reference/api.md#editorstate-and-onchange).**

There are a lot of tools available to convert content. We built the Python [Draft.js exporter](https://github.com/springload/draftjs_exporter) while working on Draftail, for use in Python backends. For the purpose of this guide, we will be doing the conversion in the browser with [draft-convert](https://github.com/HubSpot/draft-convert).

> There are many more converter options available on [Awesome Draft.js](https://github.com/nikgraf/awesome-draft-js).

## Draft.js content conversion

The key is to make sure that the content converters and the editor all use the same identifiers for formatting types: [inline styles](../introduction/inline-styles.md), [blocks](../introduction/blocks.md), and [entities](../introduction/entities.md), and that they all preserve the same attributes/props when needed.

For common formats, Draft.js has its predefined identifiers: [block types](https://github.com/facebook/draft-js/blob/master/src/model/constants/DraftBlockType.js), [inline styles](https://github.com/facebook/draft-js/blob/master/src/model/immutable/DefaultDraftInlineStyle.js), and `LINK` and `IMAGE` for entities. Draftail [exposes the same identifiers](../reference/api.md#content-format-identifiers) (and some more) for convenience, although using the exact same string everywhere will also work.

```js
import { INLINE_STYLE, BLOCK_TYPE, ENTITY_TYPE } from "draftail"

console.log(INLINE_STYLE.BOLD)
```

### HTML import

Let's use [`convertFromHTML`](https://github.com/HubSpot/draft-convert#convertfromhtml) from `draft-convert`. We can configure it to use the same identifiers as Draftail when converting HTML.

```jsx
import { convertToRaw, convertFromRaw } from "draft-js"
import { convertFromHTML, convertToHTML } from "draft-convert"
import { DraftailEditor, ENTITY_TYPE } from "draftail"

const content = `
<p>This editor demonstrates <strong>HTML import and export</strong>.</p>
<hr />
<blockquote>Built with <a href="https://github.com/HubSpot/draft-convert">draft-convert</a></blockquote>
<img src="/static/example-lowres-image2.jpg"/>
    <p></p>
`

const importerConfig = {
  htmlToEntity: (nodeName, node, createEntity) => {
    // a tags will become LINK entities, marked as mutable, with only the URL as data.
    if (nodeName === "a") {
      return createEntity(ENTITY_TYPE.LINK, "MUTABLE", { url: node.href })
    }

    if (nodeName === "img") {
      return createEntity(ENTITY_TYPE.IMAGE, "IMMUTABLE", {
        src: node.src,
      })
    }

    if (nodeName === "hr") {
      return createEntity(ENTITY_TYPE.HORIZONTAL_RULE, "IMMUTABLE", {})
    }

    return null
  },
  htmlToBlock: (nodeName) => {
    if (nodeName === "hr" || nodeName === "img") {
      // "atomic" blocks is how Draft.js structures block-level entities.
      return "atomic"
    }

    return null
  },
}

const fromHTML = (html) => convertToRaw(convertFromHTML(importerConfig)(html))

const editor = (
  <DraftailEditor
    rawContentState={fromHTML(content)}
    enableHorizontalRule
    entityTypes={[
      {
        // We use the same value for type as in the converter.
        type: ENTITY_TYPE.LINK,
        source: LinkSource,
        decorator: Link,
        // We define what data the LINKs can have.
        attributes: ["url"],
        allowlist: {
          href: "^(?![#/])",
        },
      },
    ]}
  />
)
```

`convertFromHTML` does the heavy lifting, followed by the Draft.js [`convertToRaw`](https://draftjs.org/docs/api-reference-data-conversion#converttoraw), and we can then initialise Draftail with HTML.

### HTML export

Converting back to HTML is the inverse process, with [`convertToHTML`](https://github.com/HubSpot/draft-convert#converttohtml). It also needs to use the same identifiers as Draftail when converting HTML, and we will want to make sure the importer and exporter can be used in succession without altering the content.

```jsx
import { convertToRaw, convertFromRaw } from "draft-js"
import { convertFromHTML, convertToHTML } from "draft-convert"
import { DraftailEditor, ENTITY_TYPE } from "draftail"

const exporterConfig = {
  blockToHTML: (block) => {
    if (block.type === BLOCK_TYPE.BLOCKQUOTE) {
      return <blockquote />
    }

    // Discard atomic blocks, as they get converted based on their entity.
    if (block.type === BLOCK_TYPE.ATOMIC) {
      return {
        start: "",
        end: "",
      }
    }

    return null
  },

  entityToHTML: (entity, originalText) => {
    if (entity.type === ENTITY_TYPE.LINK) {
      return <a href={entity.data.url}>{originalText}</a>
    }

    if (entity.type === ENTITY_TYPE.IMAGE) {
      return <img src={entity.data.src} alt={entity.data.alt} />
    }

    if (entity.type === ENTITY_TYPE.HORIZONTAL_RULE) {
      return <hr />
    }

    return originalText
  },
}

const toHTML = (raw) =>
  raw ? convertToHTML(exporterConfig)(convertFromRaw(raw)) : ""

const editor = (
  <DraftailEditor
    onSave={(raw) => {
      console.log(toHTML(raw))
    }}
    enableHorizontalRule
    entityTypes={[
      {
        // We use the same value for type as in the converter.
        type: ENTITY_TYPE.LINK,
        source: LinkSource,
        decorator: Link,
        // We define what data the LINKs can have.
        attributes: ["url"],
        allowlist: {
          href: "^(?![#/])",
        },
      },
    ]}
  />
)
```

Again, most of the configuration work is with `convertToHTML`, but we also need the Draft.js [`convertFromRaw`](https://draftjs.org/docs/api-reference-data-conversion#convertfromraw) to read content from Draftail.

## Demo

Here is a demo that initialises from HTML, and converts content to HTML on save (logged in the browser DevTools console).

<iframe src="https://demo.draftail.org/storybook/iframe.html?id=docs--html-conversion" class="iframe iframe--docs-400"></iframe>
