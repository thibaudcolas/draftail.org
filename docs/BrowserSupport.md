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

## Polyfills

Draft.js and Draftail build upon ES6 language features. If targeting browsers that do not support them, have a look at:

- [Draft.js required polyfills](https://draftjs.org/docs/advanced-topics-issues-and-pitfalls#polyfills).
- [`position: sticky` support](https://caniuse.com/#feat=css-sticky), and [`stickyfill` polyfill](https://github.com/wilddeer/stickyfill).
