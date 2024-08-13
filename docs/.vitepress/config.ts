import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '@xperia11/utils',
  description: 'Tool Chain',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guide', link: '/guide/' },
      {
        text: 'Function',
        items: [
          { text: 'All Function', link: '/functions/' },
          {
            text: '',
            items: [
              { text: 'data', link: '/functions/data' },
              { text: 'device', link: '/functions/device' },
              { text: 'format', link: '/functions/format' },
              { text: 'image', link: '/functions/image' },
              { text: 'performance', link: '/functions/performance' },
              { text: 'ua', link: '/functions/ua' },
            ],
          },
        ],
      },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Get Started', link: '/guide/' },
          ],
        },
      ],
      '/functions/': [
        {
          text: 'All Function',
          items: [
            { text: 'data', link: '/functions/data' },
            { text: 'device', link: '/functions/device' },
            { text: 'format', link: '/functions/format' },
            { text: 'image', link: '/functions/image' },
            { text: 'performance', link: '/functions/performance' },
            { text: 'ua', link: '/functions/ua' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/skyline523/utils' },
    ],
  },
})
