---
id: user-guide
title: User guide
---

Draftail is an editor built for sites and apps of all shapes and sizes. It aims for a mouse-free, keyboard-centric experience. Most formatting can be done by using common keyboard shortcuts, inspired by [Google Docs](https://support.google.com/docs/answer/179738) and [Markdown](https://en.wikipedia.org/wiki/Markdown).

One thing that sets Draftail apart from other editors is its configurability: **the available formatting options can be different from one instance of the editor to the next**, depending on how the editor is setup. One editor could only allow links. Another might have heading levels, lists, and images.

## Contents

- [Online demo](#online-demo)
- [Browser support](#browser-support)
- [The editor](#the-editor)
  - [Using keyboard shortcuts](#using-keyboard-shortcuts)
  - [Copy-pasting content in the editor](#copy-pasting-content-in-the-editor)
- [Links, images, and more](#links-images-and-more)
- [Feedback](#feedback)
- [Keyboard shortcuts](KeyboardShortcuts.md)
- [Credits](#credits)

## Online demo

| [![Screenshot of Draftail](/img/draftail-ui-screenshot.png)](https://www.draftail.org/)                                               |
| ------------------------------------------------------------------------------------------------------------------------------------- |
| The Draftail website has a nice demo with most built-in features. [Go have a look and try out the editor!](https://www.draftail.org/) |

## Browser support

Draftail supports all modern **desktop** browsers, in their latest version:

| Browser | OS             |
| ------- | -------------- |
| Chrome  | Windows, macOS |
| Firefox | Windows, macOS |
| MS Edge | Windows        |
| Safari  | macOS          |

If your browser is not on this list, your mileage may vary. Have a look at the [list of known issues](https://github.com/springload/draftail/issues/138), or use one of the supported browsers.

For mobile devices, Draftail is tested on the latest versions of iOS and Android. Support is limited – there are many known issues there as well, especially with custom keyboards like [Google’s GBoard keyboard](https://play.google.com/store/apps/details?id=com.google.android.inputmethod.latin) or [SwiftKey](https://swiftkey.com/).

## The editor

Draftail is a simple editor. The toolbar contains all of the formatting options and other controls. You can write underneath. The placeholder text follows your cursor.

![Editor screenshot with toolbar](/img/user-guide/editor.png)

Each control in the toolbar comes with its own tooltip, so you can see exactly what the button is for, as well as the related keyboard shortcuts. Here, the "H3" button is for **Heading level 3**.

![Editor screenshot showing the toolbar’s tooltips to view keyboard shortcuts](/img/user-guide/toolbar-tooltip.png)

---

### Using keyboard shortcuts

> Have a look at the [full list of keyboard shortcuts](KeyboardShortcuts.md).

That H3 control uses the `###` [Markdown](https://en.wikipedia.org/wiki/Markdown)-style shortcut. You can activate H3 formatting by typing `###` followed by a space at the start of a line:

![Editor screenshot showing Markdown shortcuts](/img/user-guide/markdown-shortcuts.gif)

And of course, normal shortcuts for common controls like bold, undo/redo are available as well:

![Editor screenshot showing classic shortcuts](/img/user-guide/classic-shortcuts.gif)

Here is another example shortcut, `-` or `*` for list items:

![Editor screenshot with shortcuts to toggle list items, and indent/de-indent or stop the list](/img/user-guide/list-item-shortcuts.gif)

If numbered lists were available in this editor, you could use `1.`. In the editor below, we’ve enabled line breaks and horizontal rules, which also have their own buttons and shortcuts:

![Editor screenshot showing support for line breaks and horizontal rules with their corresponding shortcuts](/img/user-guide/line-breaks-horizontal-rules.gif)

If you forget the shortcut for a given control, it’s displayed in the tooltip.

![Editor screenshot with a demo of undo/redo buttons and keyboard shortcuts](/img/user-guide/undo-redo.gif)

Those shortcuts are extra convenient on touch screens, where it can be hard to move back and forth between text input and the toolbar. You can find the [full list of supported shortcuts](KeyboardShortcuts.md) next, but bear in mind that they won’t be active unless the editor has the corresponding formatting enabled.

---

### Copy-pasting content in the editor

When pasting content into a Draftail editor, the editor will only keep the formatting that is enabled. This depends on how the editor is set up of course – here are two examples. It can remove all formatting:

![Editor screenshot with a demo of copy-pasting from Word, removing all formatting](/img/user-guide/copy-paste-filter.gif)

It can preserve what’s enabled in the editor (bold and italic here).

![Editor screenshot with a demo of copy-pasting from Word, preserving italics and bold](/img/user-guide/copy-paste-preserve.gif)

The editor may not preserve all formatting as-is, but it will always filter out unallowed formats. Pasting works well from Google Docs, Dropbox Paper, Word, and more.

---

## Links, images, and more

> 🚧 Links and images aren’t default features of Draftail – their behavior may differ a lot depending on how the editor is configured.

It’s also possible to add links within text – and manage the links with their own tooltips:

![Editor screenshot with a demo of rich text links](/img/user-guide/rich-text-link.gif)

Some editors may also contain images if configured. They are inserted with empty lines (that can be removed) above and below to make it easier to select the image.

![Editor screenshot with a demo of an image block](/img/user-guide/rich-text-image.gif)

---

Voilà, that’s Draftail! We hope it’ll work well for you, and you find it useful.

## Feedback

See anything you like in here? Anything missing? We welcome all support, whether on bug reports, feature requests, code, design, reviews, tests, documentation, and more. Please have a look at our [issue tracker](https://github.com/springload/draftail/issues), and consider commenting or suggesting improvements.

---

## Keyboard shortcuts

Please have a look at the [full list of keyboard shortcuts](KeyboardShortcuts.md).

## Credits

Screenshots taken with [LICECap](https://www.cockos.com/licecap/) and [Keycastr](https://github.com/keycastr/keycastr). Images optimised with [ImageAlpha](https://pngmini.com/) and [ImageOptim](https://imageoptim.com/).
