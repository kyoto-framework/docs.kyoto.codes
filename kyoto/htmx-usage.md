# HTMX Usage

This is a basic example of HTMX usage. Please, check https://htmx.org/docs/ for more details.

In this example we're defining a form component, that is updating itself on submit.

```html
{{ define "Component" }}
<form hx-post="/htmx/component" hx-target="this" hx-swap="outerHTML">
	<input type="text" name="foo" value="{{ .Foo }}">
	<input type="text" name="bar" value="{{ .Bar }}">
	<button type="submit">Submit</button>
</form>
{{ end }}
```

And this is how you can define a component, that will handle this request.

```go
package main

type ComponentState struct {
	component.Disposable // We're not using any stored state here, so we're using disposable
	rendering.Template   // We're using template rendering for this component, just like in pages

	Foo string
	Bar string
}

func Component(ctx *component.Context) component.State {
	// Initialize state
	state := &ComponentState{}
	// We're getting request data from context and passing it to the state
	if ctx.Request.Method == http.MethodPost {
		ctx.Request.ParseForm()
		state.Foo = ctx.Request.FormValue("foo")
		state.Bar = ctx.Request.FormValue("bar")
	}
	// Done
	return state
}
```

