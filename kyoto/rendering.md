# Rendering

Rendering might be tricky, but we're trying to make it as simple as possible. By default, we're using \`html/template\` as a rendering engine. It's a well-known built-in package, so you don't have to learn anything new.

Out of the box we're parsing all templates in root directory with \`\*.html\` glob. You can change this behavior with \`TEMPLATE\_GLOB\` global variable.

For rendering a component, use built-in \`template\` function. Provide a resolved future object \(actually state\) as a template argument.

```html
<div>{{ template "component" call .Component }}</div>
```

As an alternative, you can also include \`rendering.Template\` entry into your component definition. In this way you can use \`render\` function to simplify your code. Please, don't use this approach heavily now, as it affects rendering performance.

```html
<div>{{ render .Component }}</div>
```

