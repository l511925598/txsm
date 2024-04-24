import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Eric",
  description: "me Eric",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'choose', link: '/choose' }
    ],

    sidebar: [
      {
        text: 'Catalogue',
        items: [
          { text: 'choose', link: '/choose' },
          { text: 'find', link: '/find' }
        ]
      }
    ],
    //
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
