---
id: getting-started
title: Getting started
---

Draftail is built with [Draft.js](https://draftjs.org/) and [React](https://reactjs.org/). Let’s start by installing them both, as well as Draftail:

```sh
npm install --save draftail draft-js@0.10.5 react react-dom
```

We will also need to import the styles of Draft.js, and of the editor:

```scss
@import "draft-js/dist/Draft";
@import "draftail/dist/draftail";
```

Then, import the editor and use it in your code as a React component. Here is a simple example:

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
      { type: BLOCK_TYPE.HEADER_THREE },
      { type: BLOCK_TYPE.UNORDERED_LIST_ITEM },
    ]}
    inlineStyles={[{ type: INLINE_STYLE.BOLD }, { type: INLINE_STYLE.ITALIC }]}
  />
)

ReactDOM.render(editor, document.querySelector("[data-mount]"))
```

In this example, the editor will have four buttons in its toolbar: H3, bullet list, bold, and italic. Here is a demo of the result:

<iframe src="https://demo.draftail.org/storybook/iframe.html?id=draftail--simple" class="iframe iframe--docs-200"></iframe>

Draftail supports many more [formatting options](FormattingOptions.md). Be sure to also check out the [required polyfills](BrowserSupport.md).
