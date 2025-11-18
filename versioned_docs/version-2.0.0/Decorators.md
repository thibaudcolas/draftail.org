---
id: decorators
title: Decorators
---

> Those extensions require a good understanding of the [Draft.js](https://draftjs.org/) API.

Custom decorators follow the Draft.js [CompositeDecorator](https://draftjs.org/docs/advanced-topics-decorators.html#compositedecorator) API. They can be specified as an array via the [`decorators`](API.md#decorators-docs-decorators) prop of the editor, with `strategy` and `component` attributes.

A very basic example would be a hashtag decorator:

```tsx
decorators={[
  {
    strategy: (block, callback) => {
      const text = block.getText();
      let matches;
      while ((matches = /#[\w]+/g.exec(text)) !== null) {
        callback(matches.index, matches.index + matches[0].length);
      }
    },
    component: ({ children }) => (
      <span style={{ color: "#007d7e" }}>{children}</span>
    ),
  },
]}
```

Other more advanced examples could share state between the strategy and its rendering. For example, to build [syntax highlighting for code blocks](https://github.com/springload/draftail/blob/c22d867a6b57dc45144b9af3202c08873c24258b/examples/components/PrismDecorator.js) in rich text.

## Examples

<iframe src="https://demo.draftail.org/storybook/iframe.html?id=docs--decorators" className="iframe iframe--docs-200">
</iframe>
