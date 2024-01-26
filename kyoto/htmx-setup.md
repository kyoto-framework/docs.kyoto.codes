# HTMX Setup

Please, check https://htmx.org/docs/#installing for installation instructions. In addition to this, you must register HTMX handlers for your dynamic components.

```go
package main

...

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/", rendering.Handler(Page))

	mux.HandleFunc("/htmx/component", rendering.Handler(Component))

	http.ListenAndServe(":8080", mux)
}
```

