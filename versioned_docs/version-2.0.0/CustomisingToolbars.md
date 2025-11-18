---
id: customising-toolbars
title: Customising toolbars
original_id: customising-toolbars
---

By default, Draftail comes with many options for toolbars:

- A top static toolbar that contains all of the possible formatting, plus a few extra controls.
- A bottom static toolbar for meta information / less used controls.
- A floating toolbar for inline formatting.
- A command palette for commands.

## Hiding individual toolbar items

With the default toolbar, items are directly derived from the formats (block, style, etc.) enabled in the editor. The buttons for specific items can be hidden by:

- Not defining a `label`, or `icon` for custom formats.
- For built-in formats, setting a `label` of `null`

Here is an example, using the default toolbar but with all heading styles hidden as individual buttons, and only present in the custom dropdown:

<iframe src="https://demo.draftail.org/storybook/iframe.html?id=docs--controls" className="iframe iframe--docs-200" />

## Disabling the toolbar

It is possible to hide the toolbar by passing `null` to `topToolbar`:

<iframe src="https://demo.draftail.org/storybook/iframe.html?id=docs--no-toolbar" className="iframe iframe--docs-200" />

## Customising toolbars

It’s also possible to provide your own custom component to `topToolbar`, `bottomToolbar` or `commandToolbar`, for example to have a UI that is more adapted to a given use case:

<iframe src="https://demo.draftail.org/storybook/iframe.html?id=docs--custom-toolbars" className="iframe iframe--docs-200" />

The editor comes with a number of predefined toolbars:

- `FloatingToolbar` (minimal height).
- `BlockToolbar`, intended for keyboard and first-time users.
- `MetaToolbar`, intended to display editor metadata at the bottom of the editor.
- `InlineToolbar`, which is user-configurable to display either a static or floating toolbar.
- `CommandPalette`, usable with the `commandPalette` rendering prop and the `commands` data prop.

It is also possible to reuse the `ToolbarButton` and `Icon` components from Draftail if necessary.

## Toolbars with draft-js-plugins

For more advanced use cases, [Draft.js plugins](https://www.draft-js-plugins.com/) offers really polished toolbars for Draft.js editors. These can easily be used with Draftail, **provided that they are set as the bottom toolbar of the editor** ([Plugin-supplied components cannot be placed above editor, #311](https://github.com/draft-js-plugins/draft-js-plugins/issues/311)).

```tsx
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

<iframe src="https://demo.draftail.org/storybook/iframe.html?id=plugins--custom-toolbars" className="iframe iframe--docs-250" />
