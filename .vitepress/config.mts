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
            { text: "Async", collapsed: true, items: [
              { text: "Overview", link: "/zen/async/", },
              { text: "Definitions", link: "/zen/async/definitions-index", },
            ]},
            { text: "Errors", collapsed: true, items: [
              { text: "Overview", link: "/zen/errorsx/", },
              { text: "Definitions", link: "/zen/errorsx/definitions-index", },
            ]},
            { text: "Logic", collapsed: true, items: [
              { text: "Overview", link: "/zen/logic/", },
              { text: "Definitions", link: "/zen/logic/definitions-index", },
            ]},
            { text: "Slices", collapsed: true, items: [
              { text: "Overview", link: "/zen/slice/", },
              { text: "Definitions", link: "/zen/slice/definitions-index", },
            ]},
            { text: "Maps", collapsed: true, items: [
              { text: "Overview", link: "/zen/mapx/", },
              { text: "Definitions", link: "/zen/mapx/definitions-index", },
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
