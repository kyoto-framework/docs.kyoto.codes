# Components

Components is a common approach for modern libraries to manage frontend parts. Kyoto components are trying to be mostly independent \(but configurable\) part of the project.

To create component, it would be enough to implement component.Component. It's a function, a context receiver which returns a component state. State is an implementation of component.State, which is easy to implement with nesting one of the state implementations \(options will be described later\).

```go
package main

type ComponentState struct {
	component.Disposable // You're providing component with some abilities here
}

func Component(ctx *component.Context) component.State {
	state := &ComponentState{}
	return state
}

...
```

Each component becomes a part of the page or top-level component, which executes component function asynchronously and gets a state future object. In that way your components are executing in a non-blocking way.

Pages are just top-level components, where you can configure rendering and page related stuff.

