# Components with state

Stateful components are pretty similar to stateless ones, but they are actualy implementing marshal/unmarshal interface instead of mocking it.

You have multiple state options to choose from: universal or server.

Universal state is a state, that can be marshalled and unmarshalled both on server and client. It's a common state option without functionality limitations. On the other hand, the whole state must to be sent and received, which applies some limitations on the state size.

```go
package main

type ComponentState struct {
	component.Universal // This state allows you to operate with data on both server and client
}

func Component(ctx *component.Context) component.State {
	state := &ComponentState{}
	return state
}
```

Server state can be marshalled and unmarshalled only on server. It's a good option for components, that are not supposed to be updated on client side \(f.e. no inputs\). Also, it's a good option for components with lots of state data.

```go
package main

type ComponentState struct {
	component.Server // This state allows you to operate with data on server only
}

func Component(ctx *component.Context) component.State {
	state := &ComponentState{}
	return state
}
```

