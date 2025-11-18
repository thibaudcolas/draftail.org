---
title: "Why Wagtail’s new editor is built with Draft.js"
authors: thibaudcolas
---

Have you ever worked with rich text editors? You know how frustrating of an experience that can be. Users enter content without much confidence in how the editor will preserve it. Developers have to harden their sites to handle the unstructured soup that is rich text. Designers see their layout completely destroyed by the cheer variation in shape and length. A recipe for frustration.

It’s time to add some noodles and flavour, give some structure to our bland broth and enjoy rich text again.

<!-- truncate -->

## Introducing Draft.js

> [Draft.js](https://draftjs.org/) is a framework for building rich text editors in React, powered by an immutable model and abstracting over cross-browser differences.

Sure, using React is nice, but what matters the most is the model:

- The content “source of truth” is separate from HTML rendered in the editor via [`contenteditable`](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content) (which has highly unreliable behavior between browsers).
- It follows a fixed schema, with predefined formats (eg. bold) but also the opportunity to make custom ones.
- There are strong constraints on content structure – what is block-level formatting and what is inline, what can have data and how.

This model, called ContentState, is the most important characteristic of Draft.js. Conceptually, it addresses the frustrating brittleness of `contenteditable`, which is too permissive and might process content differently in each browser.

In practice, here is what ContentState content looks like:

```js

{
  "blocks": [
    {
      "key": "b1ito",
      // Here’s the most important bits: text and type.
      "text": "Rethinking rich text pipelines with Draft.js",
      "type": "header-one",
      "depth": 0,
      "inlineStyleRanges": [
        {
          // The text is bold starting at offset 10, for 4 characters.
          "offset": 10,
          "length": 4,
          "style": "BOLD"
        }
      ],
      "entityRanges": [],
      "data": {}
    }
  ],
  "entityMap": {}
}
```

Content is stored as separate blocks containing plain text, with separate text ranges for styles (bold, italic) and entities (things with data like links). A block’s `type` defines how the block behaves. There are built-in types like `header-one`, but you can also make your own. Same goes for the styles, and entities.

If you want a more in-depth introduction, here is a great talk from the creator of Draft.js:

<a href="https://www.youtube.com/watch?v=feUYwoLhE_4">
  <img src="https://i.ytimg.com/vi_webp/feUYwoLhE_4/maxresdefault.webp" alt="React.js Conf 2016 - Isaac Salier-Hellendag - Rich Text Editing with React" width={560} height={315} />
</a>

## A framework for rich text

Draft.js isn’t the only tool to use this “content model separate from `contenteditable`” approach though: [Trix](https://trix-editor.org/), [Quill](https://quilljs.com/), [Slate](https://github.com/ianstormtaylor/slate), [ProseMirror](https://prosemirror.net/), and [Scribe](https://github.com/guardian/scribe) all work similarly. Where Draft.js distinguishes itself is that it is a _framework_, not a full-featured editor, not even a modular editor. Draft.js provides many low-level APIs, for example:

- Process the input of a single character. This could be used to make an autocomplete, or to turn boring "quotes" into their “smart” equivalent. Or enhance emojis with accessible text.
- Handle pasting or drag-and-drop in the editor. Auto-linkify, auto-embed, drag-drop image upload features start here.
- Parse and filter editor content. Data migrations for rich text, anyone?

The sky is the limit! This flexibility comes at a cost though: even seemingly basic rich text interactions might require extra code. Additionally, the model’s conceptual constraints can drastically reduce what the framework can be used for:

- It is impossible to represent nested structures beyond nested lists (at least [for now](https://github.com/facebook/draft-js/pull/388)).
- Highlights-heavy rich text is hard to work with (think comments or annotations on text containing a link).
- Collaborative editing isn’t designed for.

> There is a good list of Draft.js conceptual frustrations in the [Slate documentation](https://github.com/ianstormtaylor/slate#why).

The implementation itself also has its shortcomings, but those are generally easier to address.

## Abstracting over cross-browser differences

Front-end developers know very well how hard it can be to build UIs across the Web’s fragmented landscape – multiple browsers, on different operating systems, at different screen sizes, and more. Cross-browser rich text editing faces those same problems, except even the modern browsers behave in their own quirky ways. Draft.js abstracts this all away from view, but it has its shortcomings, especially on [Android](https://github.com/facebook/draft-js/issues/1077).

I have spent enough time working with Draft.js editors and looking at the Draft.js issue tracker to know that, yep, it works, mostly. There is a lot of improvement to be done in handling of text drag-and-drop, IMEs, and rich text copy-paste in particular – you can see the full list of issues you might run into for non-IME usage [here](https://github.com/springload/draftail/issues/138).

## Built with React

Did I mention that using [React](https://reactjs.org/) is nice? I have been using React for three full years now, and it still is hands-down the best view layer library I know of. In the fast-paced JavaScript world, this is a big compliment.

It’s no accident that React and Draft.js work nicely together: they are both built with the same approach of deriving the UI from the underlying data and state, following functional programming and immutability principles. It also helps that they are both built by Facebook.

## Using Draft.js to build an actual editor

The advantages of using Draft.js go beyond the editor UI component, because of the structure it brings to rich text. But for now, let’s look at editors. There are many [open-source editors](https://github.com/nikgraf/awesome-draft-js#standalone-editors-built-on-draftjs) built with Draft.js. There is also a whole [plugin architecture](https://github.com/draft-js-plugins/draft-js-plugins), that comes with many plugins.

We wanted a lot of control over rich text features, which led us to build our own editor: [Draftail](https://www.draftail.org/).

[![Screenshot of Draftail, with the toolbar, and some example content](./assets/why-wagtail-new-editor-is-built-with-draft-js/draftail-intro.png)](https://www.draftail.org/)

It was nonetheless really useful to reuse established solutions for common rich text behaviors, and we also got to create reusable Draft.js-friendly packages, like the [Draft.js filters](https://github.com/thibaudcolas/draftjs-filters).

## What next

Rich text has a lot of potential as a user interface. #hashtags and @mentions are now part of our everyday lives. I don’t want to ever have to press `Ctrl + B` to make text bold when Slack allows `*Markdown*` formatting. Mobile devices with limited keyboards spurred innovations like predictive typing, eg. in Google’s [Gboard](https://en.wikipedia.org/wiki/Gboard) – can I have this in my desktop editor as well please?

With those new means of interaction in mind, I am thrilled to see the [Draftail editor make its way into Wagtail core](https://wagtail.org/blog/wagtail-2/), and empower Wagtail users to better communicate with their audiences. I really hope we can build upon this foundation, and create even more delightful UIs that give users the freedom they want, while preserving the structure developers rely upon.
