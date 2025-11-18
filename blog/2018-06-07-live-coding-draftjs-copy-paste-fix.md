---
title: "Live coding – Draft.js copy-paste fix"
authors: thibaudcolas
---

Most of the functionality of Draftail comes from Draft.js, and so do the bugs. One of the most problematic ones for us was the poor support for [copy-paste of content between editors](https://github.com/facebook/draft-js/issues/787). Here’s me live coding my attempt at a fix.

<!-- truncate -->

## Take one

<a href="https://www.youtube.com/watch?v=TVhFDnJAOYk">
  <img src="https://i.ytimg.com/vi_webp/TVhFDnJAOYk/maxresdefault.webp" alt="Live coding – Draft.js copy-paste fix part one" width={560} height={315} />
</a>

PR: [thibaudcolas/draftjs-conductor#2](https://github.com/thibaudcolas/draftjs-conductor/pull/2)

## Take two

<a href="https://www.youtube.com/watch?v=ExL5k0HppIg">
  <img src="https://i.ytimg.com/vi_webp/ExL5k0HppIg/maxresdefault.webp" alt="Live coding – Draft.js copy-paste fix part two" width={560} height={315} />
</a>

PR: [thibaudcolas/draftjs-conductor#3](https://github.com/thibaudcolas/draftjs-conductor/pull/3)

---

This is now available as a PR to Draft.js, and as a separate package ([`draftjs-conductor`](https://github.com/thibaudcolas/draftjs-conductor)), over at [facebook/draft-js#1784](https://github.com/facebook/draft-js/pull/1784).
