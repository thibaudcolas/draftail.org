---
id: form-validation
title: Form validation
---

Draftail is easy to integrate with form validation, whether as simple "required" checks or more advanced rich text metrics.

## Integrating with a validation library

Content entered in the editor can be stored for validation with the [`onSave`](API.md#rawcontentstate-and-onsave) prop, or with [`onChange`](API.md#editorstate-and-onchange). The editor also supports [`onFocus` and `onBlur`](API.md#managing-focus) to mark fields as touched/untouched and trigger or stop validation.

## Basic validation of required fields

The editor uses `null` as a content value when it is empty. Here is a what a simple “required field” check would look like:

```js
if (!content) {
  error = "Please enter at least one paragraph"
}
```

## Content validation

For more advanced use cases, the [raw ContentState](ContentStorage.md) content can be parsed to enforce presence or threshold of specific content formats, or content length.

To calculate plain-text content length,

```js
const contentLength = content.blocks.reduce((sum, b) => sum + b.text.length, 0)
```

We can also enforce metrics such as a minimum number of paragraphs (blocks):

```js
if (blocks.filter((b) => b.text.trim().length > 0).length < 2) {
  error = "Please enter at least two paragraphs"
}
```

## Demo

Here is a full demo, using [Formik](https://jaredpalmer.com/formik) as a validation library. It enforces entering at least two paragraphs of content, containing at least one link.

```jsx
<Formik
  initialValues={{ content: null }}
  onSubmit={window.alert.bind(null, "Success!")}
  validate={(values) => {
    const errors = {}

    if (!values.content) {
      errors.content = "Please enter at least two paragraphs"
    } else {
      const { blocks, entityMap } = values.content
      if (Object.keys(entityMap).length === 0) {
        errors.content = "Please use at least one link"
      }

      // Check there are at least two blocks with non-whitespace text
      if (blocks.filter((b) => b.text.trim().length > 0).length < 2) {
        errors.content = "Please enter at least two paragraphs"
      }
    }

    return errors
  }}
>
  {({ errors, touched, handleSubmit, setFieldTouched, setFieldValue }) => (
    <form onSubmit={handleSubmit}>
      <div className="form-field">
        <DraftailEditor
          entityTypes={[ENTITY_CONTROL.LINK]}
          onSave={setFieldValue.bind(null, "content")}
          onBlur={setFieldTouched.bind(null, "content")}
          stateSaveInterval={errors.content ? 50 : 250}
        />
        <div role="alert">
          {errors.content && touched.content && errors.content}
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  )}
</Formik>
```

<iframe src="https://demo.draftail.org/storybook/iframe.html?id=docs--form-validation" class="iframe iframe--docs-250"></iframe>
