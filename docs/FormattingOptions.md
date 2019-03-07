---
id: formatting-options
title: Formatting options
---

Draftail, like Draft.js, distinguishes between 3 content formats:

- [Inline styles](InlineStyles.md), providing inline formatting for text. They can overlap: text can be both bold and italic.
- [Blocks](Blocks.md), that provide structure to the content. They do not overlap – no content can be both a paragraph and a title.
- [Entities](Entities.md), annotating content with data to represent rich content beyond text. They can be inline (e.g. a link applied on a word), or block-based (e.g. an embedded video).

## Built-in formats

- Block types: H1, H2, H3, H4, H5, H6, Blockquote, Code, UL, OL, P
- Inline styles: Bold, Italic, Underline, Code, Strikethrough, Mark, Keyboard, Superscript, Subscript
- And HR, BR

View the [all-formats example](/examples#all), or try them out below.

<iframe src="https://demo.draftail.org/storybook/iframe.html?id=docs--built-in-formats" class="iframe iframe--docs-250"></iframe>

Draftail does not come with built-in controls for things like images and links, so you can build your own exactly as you wish. This is particularly useful when integrating with content sources, like a CMS, an API, or other tools with a fixed schema.

## Configuring available formats

By default, the editor provides the least amount of rich text features. Formats have to be explicitly enabled by the developer, so they have as much control over what rich content is available as possible.

To use a given format, add it to the corresponding list, following the options detailed in the next sections.

```jsx
// List of the available block types.
blockTypes: [],
// List of the available inline styles.
inlineStyles: [],
// List of the available entity types.
entityTypes: [],
```

## Custom formats

Draftail is meant to provide a consistent editing experience regardless of what formats (blocks, inline styles, entities) are available. It should be simple for developers to enable/disable a certain format, or to create new ones.

Here are quick questions to help you determine which formatting to use, depending on the use case:

| In order to…                          | Use                              |
| ------------------------------------- | -------------------------------- |
| Format a portion of a line            | [Inline styles](InlineStyles.md) |
| Indicate the structure of the content | [Blocks](Blocks.md)              |
| Enter additional data/metadata        | [Entities](Entities.md)          |

Then, your mileage may vary! There is good support for custom block-level and inline formatting. Custom entities or decorators require knowledge of the Draft.js API, which is very low-level.
