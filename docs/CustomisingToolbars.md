---
id: customising-toolbars
title: Customising toolbars
---

By default, Draftail comes with a top static toolbar that contains all of the possible formatting, plus a few extra controls.

## Disabling the toolbar

It is possible to hide the toolbar by passing `null` to `topToolbar`:

<iframe src="https://demo.draftail.org/storybook/iframe.html?selectedKind=Docs&selectedStory=No%20toolbar" class="iframe iframe--docs-200"></iframe>

## Customising toolbars

It’s also possible to provide your own custom component to `topToolbar` or `bottomToolbar`, for example to have a UI that is more adapted to a given use case:

<iframe src="https://demo.draftail.org/storybook/iframe.html?selectedKind=Docs&selectedStory=Custom%20toolbars" class="iframe iframe--docs-200"></iframe>

It is possible to reuse the `ToolbarButton` and `Icon` components from Draftail if necessary.

## Toolbars with draft-js-plugins

For more advanced use cases, [Draft.js plugins](https://www.draft-js-plugins.com/) offers really polished toolbars for Draft.js editors. These can easily be used with Draftail, **provided that they are set as the bottom toolbar of the editor** ([Plugin-supplied components cannot be placed above editor, #311](https://github.com/draft-js-plugins/draft-js-plugins/issues/311)).

```jsx
<DraftailEditor
  plugins={[inlineToolbarPlugin, sideToolbarPlugin]}
  topToolbar={null}
  bottomToolbar={(props) => (
    <>
      <SideToolbar {...props} />
      <InlineToolbar {...props} />
    </>
  )}
/>
```

### Example

<iframe src="https://demo.draftail.org/storybook/iframe.html?selectedKind=Plugins&selectedStory=Custom%20toolbars" class="iframe iframe--docs-250"></iframe>
