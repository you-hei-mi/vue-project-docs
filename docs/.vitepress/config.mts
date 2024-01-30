import fs from 'fs'
import path from 'path'
import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'

console.log('process.env.NODE_ENV',process.env.NODE_ENV)
export const nav: ThemeConfig['nav'] = [
  {
    text: '介绍',
    activeMatch: `^/(guide | other)/`,
    link: '/guide/'
  },{
    text: '示例',
    link: '/examples/'
  },{
    text: '互动教程',
    link: '/tutorial/'
  },{
    text: 'Markdown 扩展',
    link: (process.env.NODE_ENV === "development" ? '/other/markdown' : 'https://vitepress.dev/zh/guide/markdown')
  },{
    text: '更新日志',
    link: '/other/empty.md '
  },
]
export const sidebar: ThemeConfig['sidebar'] = {
  '/guide/':[
    {
      text: '介绍',
      items: [
        { text: '入门指南', link: '/guide/index' },
        { text: '事件', link: '/guide/events' }
      ]
    },
    {
      text: '指令',
      items: [
        { text: '指令方法', link: '/other/empty' },
      ]
    },
  ],
  '/examples/': [
    {
      text: '基础',
      items: [
        {
          text: '你好，世界！',
          link: '/examples/#hello-world'
        },
        {
          text: '用户输入',
          link: '/examples/#handling-input'
        },
      ]
    }
  ]
}

export const socialLinks: ThemeConfig['socialLinks'] = [
  { icon: 'github', link: 'https://github.com/you-hei-mi/vue-project-docs' }
]

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<ThemeConfig>({
  // extends: baseConfig,
  extends: {
    "scrollOffset": [
        "header",
        ".VPLocalNav"
    ],
    "vite": {
        "ssr": {
            "noExternal": [
                "@vue/theme",
                "@vueuse/core",
                "body-scroll-lock"
            ]
        },
        "optimizeDeps": {
            "exclude": [
                "@vue/theme",
                "@vueuse/core",
                "body-scroll-lock"
            ]
        }
    },
    "head": [
        [
            "link",
            {
                "rel": "icon",
                "href": "/logo.svg"
            }
        ]
    ],
    "markdown": {
        "headers": {
            "level": [
                2,
                3
            ]
        }
    }
  },
  lang: 'en-US',
  title: "My Awesome Project",
  description: "A VitePress Site",
  base: "/vue-project-docs/",
  head: [
    ["meta", { name: "theme-color", content: "#cccc" }],
    [
      'meta',
      {
        property: 'og:description',
        content: 'Vue.js - The Progressive JavaScript Framework'
      }
    ],
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://vuejs.org/images/logo.png'
      }
    ],
    [
      'script',
      {},
      fs.readFileSync(
        path.resolve(__dirname, './inlined-scripts/restorePreference.js'),
        'utf-8'
      )
    ],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'XNOLWPLB',
        'data-spa': 'auto',
        defer: ''
      }
    ],
  ],
  // srcDir: 'docs',
  // srcExclude: ['tutorial/**/description.md'],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    socialLinks,
    algolia: {
      indexName: 'vuejs',
      appId: 'ML0LEBN7FQ',
      apiKey: 'f49cbd92a74532cc55cfbffa5e5a7d01',
      searchParameters: {
        facetFilters: ['version:v3']
      }
    },
    // 广告
    // carbonAds: {
    //   code: 'CEBDT27Y',
    //   placement: 'vuejsorg'
    // },
  }
})