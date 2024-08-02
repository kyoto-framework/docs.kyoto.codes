import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kyoto Framework",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    search: {
      provider: "local"
    },

    nav: [
      { text: "Home", link: "/" },
      { text: "Kyoto", link: "/kyoto/" },
      { text: "Zen", link: "/zen/" },
    ],

    sidebar: {
      "/kyoto/": [
        {
          text: "Kyoto",
          items: [
            { text: "Overview", link: "/kyoto/", },
            { text: "Quick Start", link: "/kyoto/quick-start", },
            { text: "Components", collapsed: true, items: [
              { text: "Basic", link: "/kyoto/components", },
              { text: "State", link: "/kyoto/components-with-state", },
              { text: "Arguments", link: "/kyoto/components-with-arguments", },
            ]},
            { text: "Context", link: "/kyoto/context" },
            { text: "Routing", link: "/kyoto/routing", },
            { text: "Rendering", link: "/kyoto/rendering", },
            { text: "HTMX", collapsed: true, items: [
              { text: "Overview", link: "/kyoto/htmx", },
              { text: "Setup", link: "/kyoto/htmx-setup", },
              { text: "Usage", link: "/kyoto/htmx-usage", },
              { text: "State", link: "/kyoto/htmx-state", },
            ]},
          ]
        }
      ],
      "/zen/": [
        {
          text: "Zen",
          items: [
            { text: "Overview", link: "/zen/", },
            { text: "Slices", collapsed: true, items: [
              { text: "Overview", link: "/zen/slice/", },
              { text: "Conditional", link: "/zen/slice/conditional", },
              { text: "Transformation", link: "/zen/slice/transformation", },
              { text: "Modification", link: "/zen/slice/modification", },
              { text: "Selection", link: "/zen/slice/selection", },
              { text: "Definitions", link: "/zen/slice/definitions-index", },
            ]},
            { text: "Maps", collapsed: true, items: [
              { text: "Overview", link: "/zen/mapx/", },
              { text: "Construction", link: "/zen/mapx/construction", },
              { text: "Transformation", link: "/zen/mapx/transformation", },
              { text: "Modification", link: "/zen/mapx/modification", },
              { text: "Definitions", link: "/zen/mapx/definitions-index", },
            ]},
            { text: "Errors", collapsed: true, items: [
              { text: "Overview", link: "/zen/errx/", },
              { text: "Must / Ignore", link: "/zen/errx/must-ignore", },
              { text: "Result[T]", link: "/zen/errx/result-t", },
              { text: "Definitions", link: "/zen/errx/definitions-index", },
            ]},
            { text: "Logic", collapsed: true, items: [
              { text: "Overview", link: "/zen/logic/", },
              { text: "Or / Tr", link: "/zen/logic/or-tr", },
              { text: "Empty / NotEmpty", link: "/zen/logic/empty-notempty", },
              { text: "Definitions", link: "/zen/logic/definitions-index", },
            ]},
            { text: "Async", collapsed: true, items: [
              { text: "Overview", link: "/zen/async/", },
              { text: "Async / Await", link: "/zen/async/async-await", },
              { text: "Map / Filter / Pool", link: "/zen/async/map-filter-pool", },
              { text: "Definitions", link: "/zen/async/definitions-index", },
            ]},
            { text: "Requests", collapsed: true, items: [
              { text: "Overview", link: "/zen/httpx/", },
              { text: "Path", link: "/zen/httpx/path", },
              { text: "Query", link: "/zen/httpx/query", },
              { text: "Request / Response", link: "/zen/httpx/request-response", },
              { text: "Definitions", link: "/zen/httpx/definitions-index", },
            ]},
            { text: "Conversions", collapsed: true, items: [
              { text: "Overview", link: "/zen/conv/", },
              { text: "Definitions", link: "/zen/conv/definitions-index", },
            ]},
          ]
        }
      ]
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/kyoto-framework" }
    ]
  }
})
