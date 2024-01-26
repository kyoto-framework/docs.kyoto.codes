# Components with arguments

Sometimes you may want to pass some arguments to the component. It's easy to do with wrapping component with additional function.

```go
package main

type ComponentState struct {
	component.Universal

	Data string
}

func Component(data string) component.Component {
	return func(ctx *component.Context) component.State {
		state := &ComponentState{}
		state.Data = data // We are passing arg to the component state, but it's not a requirement.
		return state
	}
}
```

