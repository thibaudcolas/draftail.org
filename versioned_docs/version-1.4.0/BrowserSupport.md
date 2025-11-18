---
id: browser-support
title: Browser support and polyfills
original_id: browser-support
---

**Supported browser / device versions:**

| Browser | Device/OS      | Version |
| ------- | -------------- | ------- |
| Chrome  | Windows, macOS | Last 2  |
| Firefox | Windows, macOS | latest  |
| Firefox | Windows, macOS | ESR     |
| MS Edge | Windows        | Last 2  |
| Safari  | macOS          | Last 3  |

**Partial support:**

| Browser       | Device/OS  | Version |
| ------------- | ---------- | ------- |
| Mobile Safari | iOS Phone  | Last 2  |
| Mobile Safari | iOS Tablet | Last 2  |

**Unsupported:**

| Browser | Device/OS | Version |
| ------- | --------- | ------- |
| IE11    | Windows   | latest  |
| Chrome  | Android   | latest  |

## Right-to-left languages

Draftail supports right-to-left languages.

## JavaScript

Draftail requires JavaScript to work. We would encourage integrators of the editor to include a ["please enable JavaScript"](https://www.enable-javascript.com/) message in a `<noscript>` tag to make it possible for end users to understand what to do.

## Accessibility targets

The standards we aim for are [WCAG 2.2](https://www.w3.org/TR/WCAG22/), AA level, and [ATAG2.0](https://www.w3.org/TR/ATAG20/). Here are
specific assistive technologies we aim to test for and support:

| Type          | Assistive technology                                                                                             |
| ------------- | ---------------------------------------------------------------------------------------------------------------- |
| Screen reader | [NVDA](https://www.nvaccess.org/download/) on Windows with Firefox ESR                                           |
| Screen reader | [VoiceOver](https://support.apple.com/en-gb/guide/voiceover-guide/welcome/web) on macOS with Safari              |
| Magnification | [Windows Magnifier](https://support.microsoft.com/en-gb/help/11542/windows-use-magnifier)                        |
| Magnification | macOS Zoom                                                                                                       |
| Voice control | Windows Speech Recognition                                                                                       |
| Voice control | macOS Dictation                                                                                                  |
| Screen reader | Mobile [VoiceOver](https://support.apple.com/en-gb/guide/voiceover-guide/welcome/web) on iOS                     |
| Theming       | [Windows Contrast themes](https://docs.microsoft.com/en-us/fluent-ui/web-components/design-system/high-contrast) |
