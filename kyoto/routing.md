# Routing

This library doesn't provide you with routing out of the box. You can use any router you want, built-in one is not a bad option for basic needs.

```go
package main

...

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/", rendering.Handler(Page))
	http.ListenAndServe(":8080", mux)
}
```

