---
title: "[WIP] The future of (rich text) authoring experiences in Wagtail"
author: Thibaud Colas
authorURL: https://twitter.com/thibaud_colas
authorImageURL: https://avatars1.githubusercontent.com/u/877585?s=460&v=4
---

Here is a talk I gave at [Wagtail Space 2019](https://www.wagtail.space/2019). The video recording is available [on YouTube](https://www.youtube.com/watch?v=Fp8nClLoQC0). The talk was 90% demos so the purpose of this presentation is to share the links.

<!-- truncate -->

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Fp8nClLoQC0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

> 👉 [Wagtail Space Storybook demos](https://demo.draftail.org/storybook/?path=/story/plugins--linkify)

## [WIP] The future of (rich text) authoring experiences in Wagtail

Hi 👋, I’m Thibaud! Web developer [@Torchbox](https://github.com/torchbox) since 2 weeks ago. Member of Wagtail’s core dev team since 2 years ago.

Today's talk covers what I did before joining Torchbox. Some context:

- Draftail started in 2016 [@Springload](https://github.com/springload)
  - We were frustrated with the previous editor’s UI, and lack of extensibility
  - We wanted guarantees that rich text content is free of unwanted "copy-paste" formatting
  - We needed to introduce new, custom formats to support our client’s sites.
- Draftail got integrated into Wagtail core a year ago, february 2018
- All of what we will look at as part of this talk was done over the last year, made possible thanks to the people who [supported me on Patreon](https://www.patreon.com/thibaud_colas)
- Last year's talk: [Introducing Draft.js in Wagtail – Wagtail Space 2018](/blog/2018/03/16/introducing-draft-js-in-wagtail)
- Today's talk: the missing "UI/UX blog post" that was supposed to be on its way a year ago.

### Why this matters

More context - motivations:

- IMO, If your site’s content sucks, the whole site suffers. No matter how good the design or features are.
- To me, this makes the content authoring UI the most important feature of a CMS.
- If the UI is lacking, content authors will work outside of the CMS and only reluctantly use it for publication.
  - "Copy-paste from Word" workflow is a symptom (but should be supported nonetheless).
- Other tools are innovating a lot with authoring experiences – [Dropbox Paper](https://paper.dropbox.com), Slack, [Notion](https://www.notion.so/)
  - [Wordpress Gutenberg editor](https://wordpress.org/gutenberg/)

### Demos! 🌈

- Demoing things outside of Wagtail, but all of those examples can also work within Wagtail `*`
  - _`*` As soon as my [PR](https://github.com/wagtail/wagtail/pull/5117) is merged and released_ 😅
- Proof-of-concepts meant to demonstrate the capabilities of Draftail, and stress test its APIs. Not refined designs.

> 👉 [Wagtail Space Storybook demos](https://demo.draftail.org/storybook/?path=/story/plugins--linkify)

- Linkify for intuitively creating links
- Single-line inputs for headings
- Markdown shortcuts for power users
- Emojis!
- Action lists as an example of a custom block
- Slash commands for editing actions beyond rich text
- Custom toolbars, blurring the line with StreamField

### What next

- Polish and integrate some or all of those changes in Wagtail, out of the box or as plug and play extensions
- Do more documentation, tutorials, so people can leverage those APIs to experiment with their own UIs

How you can help:

- Talk to your content editors, do UX research with them, pass on the feedback
  - Have them try out those features, inside and [outside](https://demo.draftail.org/storybook/?path=/story/plugins--linkify) of Wagtail
- Try out the APIs to build your own extensions, and share pain points / missed opportunities
- Get involved with a future rich text task force?

Thank you!
