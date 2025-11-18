---
id: entities
title: Entities
original_id: entities
---

Entities annotate content with data to represent rich content beyond text. They can be inline (e.g. a link on a word), or block-based (e.g. an embedded video). They do not overlap – no content can be both a link and an embedded video (though there could be a combined "embedded video with link" entity).

## Built-in entities

Put simply, there are no built-in entities in Draftail. The idea is to give as much control as possible over the UI as possible, thus having very little included by default, and providing an extensive API.

That said, [Draft.js](https://draftjs.org), on which Draftail is built, does sometimes have special behavior for `LINK` and `IMAGE` entities (for example, it detects `a` and `img` tags in rich text when pasting, and converts them to entities). If possible, always try to use those built-in types before introducing new ones.

```tsx
import { ENTITY_TYPE } from 'draftail';

entityTypes={[
  {
    type: ENTITY_TYPE.LINK,
    // [...]
  },
  {
    type: ENTITY_TYPE.IMAGE,
    // [...]
  },
]}
```

## Custom entities

Creating custom entity types is more involved than custom blocks and inline styles because entities aren't simply on/off: they often need additional data (thus a UI to enter this data), and can be edited.

> ⚠ The entity API is at a much lower level of abstraction than that of blocks and styles, and knowledge of the [Draft.js API](https://draftjs.org/docs/advanced-topics-entities) is expected, as well as of [React](https://reactjs.org/) components and their lifecycle.

Apart from the usual type/label/description/icon options to pass via objects in [`entityTypes`](API.md#entities-docs-entities), entities need:

- A `source`, a React component that will be rendered to display the UI when creating or editing an entity. This could involve a modal window, API calls, a tooltip, or any other mean of gathering entity data.
- A `decorator`, a React component to display the entity within the editor area for inline entities (eg. links).
- Finally, the `block` is for block-level entities (think: image block, embed) to supply their React component.

Optionally, entities can also take an `attributes` and `allowlist` props. These can be used to determine allowlisting rules when pasting content into the editor, to only keep the entities considered valid. If undefined, all entities are always preserved with all of their data.

```tsx
{
    type: ENTITY_TYPE.IMAGE,
    icon: '#icon-image',
    // Preserve the src and alt attributes and no other.
    attributes: ['src', 'alt'],
    // Preserve images for which the src starts with "http".
    allowlist: {
        src: '^http',
    },
}
```

### Sources

Sources are responsible for creating and editing entities, and are toggled when requested from the toolbar, or from a decorator or block. Here is a [simple image source](https://github.com/thibaudcolas/draftail-playground/blob/main/src/entities/ImageSource.tsx) which uses `window.prompt` to ask the user for an image's `src`, then creates an entity and its atomic block:

```tsx
import { Component } from "react"
import { AtomicBlockUtils } from "draft-js"

class ImageSource extends Component {
  componentDidMount() {
    const { editorState, entityType, onComplete } = this.props

    const src = window.prompt("Image URL")

    if (src) {
      const content = editorState.getCurrentContent()
      const contentWithEntity = content.createEntity(
        entityType.type,
        "IMMUTABLE",
        { src },
      )
      const entityKey = contentWithEntity.getLastCreatedEntityKey()
      const nextState = AtomicBlockUtils.insertAtomicBlock(
        editorState,
        entityKey,
        " ",
      )

      onComplete(nextState)
    } else {
      onComplete(editorState)
    }
  }

  render() {
    return null
  }
}
```

The source component is given the following props:

```tsx
/** The editorState is available for arbitrary content manipulation. */
editorState: EditorState;
/** Takes the updated editorState, or null if there are no changes, and focuses the editor. */
onComplete: (nextState: EditorState) => void;
/** Closes the source, without focusing the editor again. */
onClose: () => void;
/** Current entity to edit, if any. */
entityType: EntityTypeControl;
/** Current entityKey to edit, if any. */
entityKey?: string | null;
/** Whole entityType configuration, as provided to the editor. */
entity?: EntityInstance | null;
/** Optionally set the overriding text directionality for this editor. */
textDirectionality: TextDirectionality;
```

### Decorators

Decorators render inline entities based on their data.

```tsx
const Link = ({ entityKey, contentState, children }) => {
  const { url } = contentState.getEntity(entityKey).getData()

  return (
    <span title={url} className="Link">
      {children}
    </span>
  )
}
```

They receive the following props:

```tsx
/** The key of the decorated entity. */
entityKey: string;
/** The editor’s content. */
contentState: ContentState;
/** Rich text to be displayed inside the decorator. */
children: React.ReactNode;
/** Shorthand to edit entity data. */
onEdit: (entityKey: string) => void;
/** Shorthand to remove an entity, and the related block. */
onRemove: (entityKey: string, blockKey?: string) => void;
/** Optionally set the overriding text directionality for this editor. */
textDirectionality: TextDirectionality;
```

The `onEdit` and `onRemove` props are meant so decorators can also serve in managing entities, eg. to build tooltips to edit links.

### Blocks

Blocks render block-level entities based on their data, and can contain editing controls. Here is a [simple image block](https://github.com/thibaudcolas/draftail-playground/blob/main/src/entities/ImageBlock.tsx), rendering images with `src` and `alt` attributes:

```tsx
import React, { Component } from "react"

class ImageBlock extends Component {
  render() {
    const { blockProps } = this.props
    const { entity } = blockProps
    const { src, alt } = entity.getData()

    return <img className="ImageBlock" src={src} alt={alt} width="256" />
  }
}
```

They receive the following props:

```tsx
block: ContentBlock;
blockProps: {
  /** The editorState is available for arbitrary content manipulation. */
  editorState: EditorState;
  /** Current entity to manage. */
  entity: EntityInstance;
  /** Current entityKey to manage. */
  entityKey: string;
  /** Whole entityType configuration, as provided to the editor. */
  entityType: EntityTypeControl;
  /** Make the whole editor read-only, except for the block. */
  lockEditor: () => void;
  /** Make the editor editable again. */
  unlockEditor: () => void;
  /** Shorthand to edit entity data. */
  onEditEntity: () => void;
  /** Shorthand to remove an entity, and the related block. */
  onRemoveEntity: () => void;
  /** Update the editorState with arbitrary changes. */
  onChange: (nextState: EditorState) => void;
  /** Optionally set the overriding text directionality for this editor. */
  textDirectionality: TextDirectionality;
};
```

### Custom paste processing

Entities can also implement their own cut/copy - paste processing. For example, this can be helpful when pasting specific URLs should be converted to a custom entity rather than a generic link. The `onPaste` API signature for all entity types is:

```tsx
onPaste?: (
  text: string,
  html: string | null | undefined,
  editorState: EditorState,
  helpers: {
    setEditorState: (state: EditorState) => void;
    getEditorState: () => EditorState;
  },
  entityType: EntityTypeControl,
) => "handled" | "not-handled";
```

When implementing this function, check the `text` and `html` arguments to determine if the pasted content should be converted to an entity. If so, return `"handled"` to prevent the default Draft.js behavior, and call the `setEditorState` function to update the editor state with the desired processing.

### Content storage

Refer to our [Content storage](ContentStorage.md#entities) documentation for information on how entities are stored in Draft.js.

### Examples

Here is an example of what this would look like in practice, with a very simple implementation of link and image chooser UIs.

<iframe src="https://demo.draftail.org/storybook/iframe.html?id=docs--entities" className="iframe iframe--docs-400" />
