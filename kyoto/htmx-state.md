# HTMX State

Sometimes it might be useful to have a component state, which will persist between requests and will be stored without any actual usage in the client side presentation.

```html
<form hx-post="/htmx/component" hx-target="this" hx-swap="outerHTML">
	{{ hxstate . }}
	<div>Cursor: {{ .Cursor }}</div>
	<button type="submit">Submit</button>
</form>
```

This function injects a hidden input field with a serialized state. Let's check how it works on the server side.

```go
package main

type ComponentState struct {
	component.Universal // We're using server state here
	rendering.Template  // We're using template rendering for this component, just like in pages

	Cursor string
}

func Component(ctx *component.Context) component.State {
	// Initialize state
	state := &ComponentState{}
	// Unmarshal state on post request
	if ctx.Request.Method == http.MethodPost {
		ctx.Request.ParseForm()
		state.Unmarshal(ctx.Request.FormValue("hx-state"))
	}
	// Initialize cursor if it's empty
	if state.Cursor == "" {
		state.Cursor = "..."
	}
	// Done
	return state
}
```

As a result, we have a component with a persistent state between requests.

