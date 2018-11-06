---
id: getting-started
title: Getting Started
---

First, install the package and its peer dependencies:

```sh
# Draftail's peerDependencies:
npm install --save draft-js@^0.10.5 react react-dom prop-types
npm install --save draftail
```

Import the styles for Draft.js, and the editor:

```scss
@import "draft-js/dist/Draft";
@import "draftail/dist/draftail";
```

Then, import the editor and use it in your code. Here is a simple example:

```jsx
import React from "react"
import ReactDOM from "react-dom"

import { DraftailEditor, BLOCK_TYPE, INLINE_STYLE } from "draftail"

const initial = JSON.parse(sessionStorage.getItem("draftail:content"))

const onSave = (content) => {
  console.log("saving", content)
  sessionStorage.setItem("draftail:content", JSON.stringify(content))
}

const editor = (
  <DraftailEditor
    rawContentState={initial || null}
    onSave={onSave}
    blockTypes={[
      { type: BLOCK_TYPE.HEADER_THREE, label: "H3" },
      { type: BLOCK_TYPE.UNORDERED_LIST_ITEM, label: "UL" },
    ]}
    inlineStyles={[
      { type: INLINE_STYLE.BOLD, label: "B" },
      { type: INLINE_STYLE.ITALIC, label: "I" },
    ]}
  />
)

ReactDOM.render(editor, document.querySelector("[data-mount]"))
```

This will render the following:

<iframe src="https://demo.draftail.org/examples/iframe.html?selectedKind=Draftail&selectedStory=Simple" width="320" height="160"></iframe>

Finally, be sure to check out the [required polyfills](BrowserSupport.md).
