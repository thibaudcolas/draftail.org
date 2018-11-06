---
id: entities
title: Entities
---

## Built-in entities

Put simply, there are no built-in entities in Draftail. The idea is to give as much control as possible over the UI as possible, thus having very little included by default, and providing an extensive API.

That said, [Draft.js](https://draftjs.org), on which Draftail is built, does sometimes have special behavior for `LINK` and `IMAGE` entities (for example, it detects `a` and `img` tags in rich text when pasting, and converts them to entities). If possible, always try to use those built-in types before introducing new ones.

```jsx
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

Creating custom entity types is a bit more involved than custom blocks and inline styles because entities aren't simply on/off: they often need additional data (thus a UI to enter this data), and can be edited. The entity API is at a much lower level of abstraction than that of blocks and styles, and knowledge of the [Draft.js API](https://draftjs.org/docs/overview.html#content) is expected.

Apart from the usual type/label/description/icon options, entities need:

- A `source`, a React component that will be rendered to display the UI when creating or editing an entity. This could involve a modal window, API calls, a tooltip, or any other mean of gathering entity data.
- A `decorator`, a React component to display the entity within the editor area for inline entities (eg. links).
- Finally, the `block` is for block-level entities (think: image block, embed) to supply their React component.

Optionally, entities can also take an `attributes` and `whitelist` props. These can be used to determine whitelisting rules when pasting content into the editor, to only keep the entities considered valid. If undefined, all entities are always preserved with all of their data.

```jsx
{
    type: ENTITY_TYPE.IMAGE,
    icon: '#icon-image',
    // Preserve the src and alt attributes and no other.
    attributes: ['src', 'alt'],
    // Preserve images for which the src starts with "http".
    whitelist: {
        src: '^http',
    },
}
```

## Sources

Sources are responsible for creating and editing entities, and are toggled when requested from the toolbar, or from a decorator or block. Here is a [simple image source](https://github.com/thibaudcolas/draftail-playground/blob/master/src/entities/ImageSource.js) which uses `window.prompt` to ask the user for an image's `src`, then creates an entity and its atomic block:

```js
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

```jsx
// The editorState is available for arbitrary content manipulation.
editorState: PropTypes.object.isRequired,
// Takes the updated editorState, or null if there are no changes.
onComplete: PropTypes.func.isRequired,
// Closes the source, without focusing the editor again.
onClose: PropTypes.func.isRequired,
// Whole entityType configuration, as provided to the editor.
entityType: PropTypes.object.isRequired,
// Current entityKey to edit, if any.
entityKey: PropTypes.string,
// Current entity to edit, if any.
entity: PropTypes.object,
```

## Decorators

Decorators render inline entities based on their data.

```jsx
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

```jsx
// Key of the entity being decorated.
entityKey: PropTypes.string.isRequired,
// Full contentState, read-only.
contentState: PropTypes.object.isRequired,
// The decorated nodes / entity text.
children: PropTypes.node.isRequired,
// Call with the entityKey to trigger the entity source.
onEdit: PropTypes.func.isRequired,
// Call with the entityKey to remove the entity.
onRemove: PropTypes.func.isRequired,
```

The `onEdit` and `onRemove` props are meant so decorators can also serve in managing entities, eg. to build tooltips to edit links.

## Blocks

Blocks render block-level entities based on their data, and can contain editing controls. Here is a [simple image block](https://github.com/thibaudcolas/draftail-playground/blob/master/src/entities/ImageBlock.js), rendering images with `src` and `alt` attributes:

```jsx
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

```jsx
// The current atomic block.
block: PropTypes.object.isRequired,
blockProps: PropTypes.shape({
    // The editorState is available for arbitrary content manipulation.
    editorState: PropTypes.object.isRequired,
    // Current entity to manage.
    entity: PropTypes.object.isRequired,
    // Current entityKey to manage.
    entityKey: PropTypes.string.isRequired,
    // Whole entityType configuration, as provided to the editor.
    entityType: PropTypes.object.isRequired,
    // Make the whole editor read-only, except for the block.
    lockEditor: PropTypes.func.isRequired,
    // Make the editor editable again.
    unlockEditor: PropTypes.func.isRequired,
    // Shorthand to edit entity data.
    onEditEntity: PropTypes.func.isRequired,
    // Shorthand to remove an entity, and the related block.
    onRemoveEntity: PropTypes.func.isRequired,
    // Update the editorState with arbitrary changes.
    onChange: PropTypes.func.isRequired,
}).isRequired,
```
