---
id: browser-support
title: Browser support and polyfills
---

**Supported browser / device versions:**

| Browser | Device/OS      | Version |
| ------- | -------------- | ------- |
| Chrome  | Windows, macOS | latest  |
| Firefox | Windows, macOS | latest  |
| Firefox | Windows, macOS | ESR     |
| MS Edge | Windows        | latest  |
| Safari  | macOS          | latest  |

**Partial support:**

| Browser       | Device/OS  | Version |
| ------------- | ---------- | ------- |
| Mobile Safari | iOS Phone  | latest  |
| Mobile Safari | iOS Tablet | latest  |
| IE11          | Windows    | latest  |

**Unsupported:**

| Browser | Device/OS | Version |
| ------- | --------- | ------- |
| Chrome  | Android   | latest  |

## JavaScript

Draftail requires JavaScript to work. We would encourage integrators of the editor to include a ["please enable JavaScript"](https://www.enable-javascript.com/) message in a `<noscript>` tag to make it possible for end users to understand what to do.

## Accessibility targets

The standards we aim for are [WCAG2.1](https://www.w3.org/TR/WCAG21/), AA level, and [ATAG2.0](https://www.w3.org/TR/ATAG20/). Here are
specific assistive technologies we aim to test for and support:

| Type          | Assistive technology                                                                                |
| ------------- | --------------------------------------------------------------------------------------------------- |
| Screen reader | [NVDA](https://www.nvaccess.org/download/) on Windows with Firefox ESR                              |
| Screen reader | [VoiceOver](https://support.apple.com/en-gb/guide/voiceover-guide/welcome/web) on macOS with Safari |
| Magnification | [Windows Magnifier](https://support.microsoft.com/en-gb/help/11542/windows-use-magnifier)           |
| Magnification | macOS Zoom                                                                                          |
| Voice control | Windows Speech Recognition                                                                          |
| Voice control | macOS Dictation                                                                                     |
| Screen reader | Mobile [VoiceOver](https://support.apple.com/en-gb/guide/voiceover-guide/welcome/web) on iOS        |

## Polyfills

Draft.js and Draftail build upon ES6 language features. If targeting browsers that do not support them, have a look at:

- [Draft.js required polyfills](https://draftjs.org/docs/advanced-topics-issues-and-pitfalls#polyfills).
- [`position: sticky` support](https://caniuse.com/#feat=css-sticky), and [`stickyfill` polyfill](https://github.com/wilddeer/stickyfill).
