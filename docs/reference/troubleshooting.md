---
id: troubleshooting
title: Troubleshooting
---

## Expected editor behavior

- Pressing return on an empty list item should un-indent it until it is not nested, and then remove it.
- Pressing return at the end of a block should create an empty unstyled block.
- Atomic blocks (images, embeds, `hr`) are always preceded and followed by a block (empty if no other block is present). These editable blocks provide places to position the cursor and insert text before or after media. Extensions that remove them need an alternative interaction for selection and text insertion. See the [Draft.js explanation of surrounding blocks](https://github.com/facebookarchive/draft-js/issues/327#issuecomment-212514270).
- Blocks starting with "- ", "\* ", "1. " are automatically converted to list items.
- Pasting content with block nesting above the configured maximum should reduce the depth up to the maximum.

## Upgrade considerations

### Draft.js

Draft.js is no longer maintained: its repository is archived, so reported issues will not be fixed upstream. Draftail sometimes has to override Draft.js behavior in a way that may be problematic if the Draft.js API is updated.

When upgrading to a more recent Draft.js version, always review the full [CHANGELOG](https://github.com/facebookarchive/draft-js/blob/master/CHANGELOG.md) as well as individual changes.

The following historical workarounds identify behavior to check when changing Draft.js versions or adopting a fork. The linked code records their original implementation; check your Draftail version before retaining or removing a workaround.

- **Entity updates re-render media.** Entity data used a mutable global store, so updating it did not necessarily trigger rendering. The [media block workaround](https://github.com/wagtail/draftail/blob/df903f86c882bd5101eb05e152e8b8a8b9a4915e/lib/blocks/MediaBlock.js#L60-L71) also merged block data to make the update visible.
- **Code blocks use the intended HTML element.** Draftail [overrode the code-block element with `code`](https://github.com/wagtail/draftail/commit/431c3fd09c4cfc043c8b334544b05b9f580b75d2), retaining Draft.js’s wrapper.
- **Shortcuts match the exact modifiers.** Draftail [discarded conflicting Shift key bindings](https://github.com/wagtail/draftail/blob/df903f86c882bd5101eb05e152e8b8a8b9a4915e/lib/api/behavior.js#L100-L110), so combinations such as Command + Shift + B would not unexpectedly toggle bold.
- **Platform detection still works.** The [macOS detection workaround](https://github.com/wagtail/draftail/blob/df903f86c882bd5101eb05e152e8b8a8b9a4915e/lib/api/behavior.js#L23-L26) probed `isOptionKeyCommand` with a non-boolean value, relying on Draft.js internals.
- **Deeply nested lists retain their styling.** Draftail [added depth classes above depth 4](https://github.com/wagtail/draftail/commit/88ae9adcda1929c92f065655a03c1b33fcfe6c2d), which Draft.js did not provide.
- **Splitting a long block keeps the cursor in view.** An [`overflow: auto` rule on the editor root](https://github.com/wagtail/draftail/commit/e05df07f8ed6c5df65c79824bbb1dcd6e8800bdd) corrected scrolling to the wrong position.
- Review suppressed type errors, including `$FlowFixMe` annotations in older versions, for assumptions about Draft.js internals.

## Troubleshooting

- In Firefox, disabling `dom.event.clipboardevents.enabled` can cause the editor to crash on copy-paste. If a custom privacy configuration disables clipboard events, enable this preference in `about:config`. See the [clipboard crash report](https://github.com/wagtail/wagtail/issues/4346).

## Known issues

The following are historical reports collected in the [Draftail issue tracker](https://github.com/wagtail/draftail/issues/138). They are useful cases to test when integrating or extending an editor, rather than a list of confirmed bugs in every current browser and Draftail version:

- **Pasting:** line breaks in code blocks can be lost, and horizontal rules copied from Google Docs can be omitted.
- **Dragging text:** drag-and-drop can leave an unexpected selection.
- **Lists:** mixing ordered and unordered lists can produce unexpected nesting or numbering.
- **Mobile input:** autocorrect and deletion can behave unexpectedly, particularly with input method editors (IMEs).

Reproduce a problem with the browsers, input methods, and editor configuration you support before choosing a workaround. See also the local [Draft.js known issues](../draft-js/advanced-topics/Issues-and-Pitfalls.md#known-issues) for underlying limitations.
