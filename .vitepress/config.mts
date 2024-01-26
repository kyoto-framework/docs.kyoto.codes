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
          ]
        }
      ]
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" }
    ]
  }
})
