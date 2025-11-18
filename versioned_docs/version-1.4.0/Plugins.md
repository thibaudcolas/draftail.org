---
id: plugins
title: Plugins
---

> Those extensions require a good understanding of the [Draft.js](https://draftjs.org/) API.

Draftail supports plugins following the [Draft.js Plugins](https://www.draft-js-plugins.com/) architecture. Such plugins are the most advanced and powerful type of extension for Draftail, offering customisation capabilities equal to what would be possible with a custom Draft.js editor. From the rendering of any block, to the text input handling, keyboard shortcuts, copy-paste handling – **all that is customisable in a bespoke Draft.js implementation should be customisable with plugins.**

## Reusing existing plugins

Please follow the [official Draft.js Plugins documentation](https://www.draft-js-plugins.com/) for information on how to reuse existing plugins. From the Draftail perspective, this should be very straightforward; for example:

```tsx
import createHashtagPlugin from "draft-js-hashtag-plugin"

const hashtagPlugin = createHashtagPlugin()

const editor = <DraftailEditor plugins={[hashtagPlugin]} />
```

## Creating new plugins

Please have a look at the official [How to create a plugin](https://github.com/draft-js-plugins/draft-js-plugins/blob/master/HOW_TO_CREATE_A_PLUGIN.md) guide. You can also explore the code of [many pre-existing plugins](https://www.npmjs.com/search?q=draft-js-plugins).

## Example

Here is an example of a custom "action list" plugin, which uses a custom block component:

<iframe src="https://demo.draftail.org/storybook/iframe.html?id=plugins--actions" className="iframe iframe--docs-200">
</iframe>
