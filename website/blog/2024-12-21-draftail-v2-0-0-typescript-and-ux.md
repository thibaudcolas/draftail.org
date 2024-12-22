---
title: "Draftail v2.0.0: TypeScript and UX"
author: Thibaud Colas
authorURL: https://thib.me/
authorImageURL: https://avatars1.githubusercontent.com/u/877585?s=460&v=4
---

Draftail v2.0.0! 🌈 I have been working on this new release for two years now, and only now do I feel comfortable shipping it.

<!-- truncate -->

According to git, it took 205 changed files with 10k additions and deletions. There are around 205 files in the repository, so pretty much everything has changed! View the full diff: [v1.4.1...v2.0.0](https://github.com/springload/draftail/compare/v1.4.1...v2.0.0). It also took [20 pre-release versions](https://www.npmjs.com/package/draftail?activeTab=versions), something I rarely bother to do but felt necessary this time.

## Big change: TypeScript

The biggest one really is the switch from [Flow types](https://flow.org/) to TypeScript. This required dependencies upgrades, and rewriting pretty much the whole codebase to some extent. Not all Flow typing patterns are directly portable to TypeScript. It also took doing the same work for Draftail’s dependencies that I maintain like [Draft.js conductor](https://github.com/thibaudcolas/draftjs-conductor) and [Draft.js filters](https://github.com/thibaudcolas/draftjs-filters).

TypeScript is so ubiquitous these days it’s hard to imagine a project of this size and complexity without it. With the advent of generative AI, it also feels like such a clear improvement when it comes to code intelligence and refactoring. For people who use TypeScript this is likely to come with a bit of friction as the introduced types might be different from expectations, And for those who don’t, it’ll make no difference at all.

Going forward, I’d expect to always code with type annotations for anything more serious than a one-off script.

## Small change: Toolbars

There’s now a lot more room to customize the editor’s toolbars, and five ready-to-use components:

- `FloatingToolbar` so the editor can be rendered with a minimal height.
- `BlockToolbar`, intended for keyboard and first-time users.
- `MetaToolbar` intended to display editor metadata at the bottom of the editor.
- `InlineToolbar`, which is user-configurable to display either a static or floating toolbar.
- `CommandPalette`l usable with the `commandPalette` rendering prop and the `commands` data prop.

This is all to help create more accessible (keyboard and mouse-friendly) user experiences.

## Single-line editing

In a similar fashion, single-line text support will allow more space-constrained use cases, like a title field in a form.

## UX improvements

This release also comes with stark improvements to contrast themes support, right-to-left languages support, and accessibility bug fixes.

---

See the [v2.0.0 changelog](https://github.com/springload/draftail/releases/tag/v2.0.0) for a list of all other improvements.
