---
id: version-1.0.0-getting-started-with-extensions
title: Getting started with extensions
original_id: getting-started-with-extensions
---

Do you want to write extensions for Draftail? This is a good place to start. I’ll first try to discourage you from doing it (rich text is messy and unforgiving), then tell what you need to know, and how to proceed.

## Why you shouldn’t mess with rich text editors

It all comes down to [`contenteditable`](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content), which is very hard to make work. [Draft.js](https://draftjs.org/) partly saves us from this. If you want to know more, read on [Why Wagtail’s new editor is built with Draft.js](/blog/2018/03/05/why-wagtail-new-editor-is-built-with-draft-js).

The TL;DR; is that there are a lot of issues with specific interactions within `contenteditable`. I made a list of the [issues I know about in Draft.js / Draftail](https://github.com/springload/draftail/issues/138). Here are the high-level problems you will have to make peace with:

- [Support for IMEs (Input Method Editor)](https://en.wikipedia.org/wiki/Input_method). which is how [CJK characters](https://en.wikipedia.org/wiki/CJK_characters) are entered, and how OS-level autocomplete and autocorrect works. Differently in each OS/browser, of course.
- Mobile support. For Draft.js, Android Chrome is particularly problematic – because of its implementation of text input as IME in all languages that does not match with other browsers (including Chrome desktop).
- Copy-pasting. Some things will paste fine, some won't. Thankfully, Draftail is built to never allow unwanted formatting.
- Focus management. Not strictly an issue, but something that actually needs to be taken care of for the rich text experience to feel good.

### Draftail vs StreamField

Within Wagtail, [StreamField](http://docs.wagtail.io/en/stable/topics/streamfield.html) already delivers when it comes to free-form content. Sure, it's not rich text, but it's very usable for block-level content. Here is my rule of thumb for when to use one over the other:

- If it's text, use rich text.
- If it's inline text formatting (bold, strikethrough, etc), use rich text.
- If it's block text formatting (h2, blockquote, ul), you get to choose, I personally prefer Draftail because it's nicer (faster) to use than the StreamField UI.
- If it's a block with more than just text, use StreamField.

There may be an opportunity for Draftail to support blocks better in the future, but in the meantime [StreamField is already getting better](https://www.kickstarter.com/projects/noripyt/wagtails-first-hatch) thanks to the work of NoriPyt’s Bertrand.

## When you should use Draftail

With the presentations out of the way, we can now talk about the areas where Draftail extensions can help.

There are three categories of extensions I can think of:

1. Custom links – things that enhance textual content with added data.
2. Tokens, IMEs, autocompletes – help entering content, with or without extra data.
3. Editor metrics, highlighting, helpers – help without necessarily altering content.

### Custom links

Any kind of custom "link" feature is a good fit for a Draftail extension. This can be:

- Links to specific entities from the domain model of your site. This could be links that have a specific icon next to them to denote their target is special, like branches of an chain store.
- Links that are not supported by the traditional "Link" feature. Anchor links come to mind.
- Enhanced links with embedded content, or inline previews. The official ["stock" example](http://docs.wagtail.io/en/stable/advanced_topics/customisation/extending_draftail.html#creating-new-entities) is one of those. Here is what its attached quote card looked like on the Forbes website:

[![Screenshot of a quote card in a Forbes article. The quote card expands from the word "Google" in the text, showing Google's stock and relevant articles.](assets/getting-started-with-extensions/forbes-quotecard-expanded.png)](https://www.forbes.com/sites/jasonbloomberg/2018/02/04/the-real-reason-red-hat-is-acquiring-coreos/#70a79bf05c4d)

> Quote cards enrich Forbes articles with stock information, and also show related content that readers might find helpful.

### Tokens, IMEs, autocompletes

By "token", I mean any content that could be confused with other plain text if it did not have a [particular meaning](https://en.wikipedia.org/wiki/Lexical_analysis#Token). IMEs and autocompletes are simply ways to insert content. Some examples include:

- Emojis, with an emoji picker, and potentially an interface to enter alternative labels for screen readers.
- Hashtags, with or without an aucomplete or other IME.
- Predefined keywords, tags, or entries from a taxonomy.
- Mentions, most likely with an autocomplete that turns them into links.
- Any set of values specific to the site’s purpose. For example, a web design website might want a way to easily insert color codes into their content: `#E75480`.

[![Screenshot of a mention UI in Draft.js, where the text @j triggers an autocomplete UI](assets/getting-started-with-extensions/draftjs-plugin-mention.png)](https://www.draft-js-plugins.com/plugin/mention)

> [Draft.js plugin](https://www.draft-js-plugins.com/plugin/mention) for a mention feature, where `@` triggers the autocomplete UI.

### Editor metrics, highlighting, helpers

Anything that helps the end user without necessarily changing the content. The folks from VIX Digital have some great examples from this category: [vixdigital/draftail-plugins](https://github.com/vixdigital/draftail-plugins).

- Text metrics – content length, readability, reading time, and much more.
- Highlighting – be it syntax highlighting for programmers, or highlighting of specific words that are particularly important in the content.
- Spellcheckers and writing assistants. They will highlight content, as well as offer alternative text.

[![Screenshot of the reading level plugin, with readability metrics updating as the user types in the editor](assets/getting-started-with-extensions/reading-level-plugin.gif)](https://vixdigital.github.io/draftail-plugins/)

> The Reading Level plugin from VIX Digital is a great example. The metrics help you understand your content better, without interrupting the writing flow.
> Better yet, it updates as you type, and is helpful regardless of whether your content is rich text or not.

## Building a content extension

You’re ready to wrangle with rich text. StreamField definitely won’t cut it for your specific problem. The examples above sound similar to your use case. Here are initial considerations before you get building:

- **How will the extension behave in the editor?**
  - Will it be an additional toolbar button? What happens when you click on it?
  - If you create custom entities (say a `STOCK`), how are they meant to behave once inserted in the editor? Can they be edited? Deleted?
  - What does the your custom content look like when displayed in the editor?
- **How will the custom format be stored within rich text?**
  - Will it have its own HTML tag, perhaps with specific attributes?
  - Will it risk clashing with the storage format of other rich text content?
  - Which parts of your rich text markup are semantic? Which are presentational? Can those not be stored?
  - Is there a potential need for migration of this content in the future? Can you make this easier on yourself?
- **What will the content look like on the site’s front-end?**
  - Will you need the storage to be done in a specific way to render a no-JS fallback?
  - What will the differences be between stored content and rendered content?

Some of those questions can be hard to answer if you don’t have experience building rich text extensions. My preferred approach is to get prototyping and build a [proof of concept (PoC)](https://en.wikipedia.org/wiki/Proof_of_concept).

### Required knowledge

Most of the time spent developing extensions will be spent with the APIs of [Draft.js](https://draftjs.org/), the framework that Draftail [is built upon](GettingStarted.md#why-we-need-draftjs-and-react). The Draftail documentation is a good resource to learn what types of extension are supported and general high-level concepts, but in order to develop an extension that manipulates the editor’s content, you will likely need to read the Draft.js docs – or search for examples of similar extensions built for Draft.js itself, which are likely reusable.

### Prototyping extensions

Generally, the hardest part to build when creating a content extension is the editing UI (think: choosers as forms within modals, tooltips). Then, content storage and conversion is the most important part to "get right" from the beginning, since changes there will create stale content that can be hard to deal with. Here are my tips:

1. Get your extension to display in the toolbar, and use [`window.prompt()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) as a crude data entry modal.
2. Make a simple decorator component displaying your custom content as bold (or any other very basic style) to see where your data is.
3. Play with content conversion and storage, and get this right as soon as possible.
4. Quickly prototype the front-end rendering of your new rich text content.

## Going further

[Draft.js Plugins](https://github.com/draft-js-plugins/draft-js-plugins) also offers a lot of general-purpose extensions for Draft.js. For Draftail in particular, as of today, the most advanced extensions to learn from are Wagtail’s built-in [Link, Document, Image, and Embed](https://github.com/wagtail/wagtail/blob/607f2ec0673814a54bd8c35f7cda42a4b37f73f2/client/src/components/Draftail/decorators/Link.js). They use the same APIs as any custom extension would, and offer quite good rich text interactions. To learn even more about making extensions, you might also enjoy a video tutorial where I go through the official "stock" example from start to finish, explaining what is going on along the way:

<iframe src="https://player.twitch.tv/?autoplay=false&video=v266474479" frameborder="0" allowfullscreen="true" scrolling="no" height="315" width="560"></iframe>

---

If you want to know more about specific extension types, please get in touch on Twitter ([@thibaud_colas](https://twitter.com/thibaud_colas)) – I'm looking for ideas for what to cover next as part of my [Patreon](https://www.patreon.com/thibaud_colas).
