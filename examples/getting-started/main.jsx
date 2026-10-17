import "draft-js/dist/Draft.css"
import "draftail/dist/draftail.css"

import { BLOCK_TYPE, DraftailEditor, INLINE_STYLE } from "draftail"
// biome-ignore lint/correctness/noUnusedImports: React 16 uses the classic JSX transform.
import React from "react"
import ReactDOM from "react-dom"

const initial = JSON.parse(sessionStorage.getItem("draftail:content"))

const onSave = (content) => {
  console.log("saving", content)
  sessionStorage.setItem("draftail:content", JSON.stringify(content))
}

const editor = (
  <DraftailEditor
    ariaLabel="Rich text editor"
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
