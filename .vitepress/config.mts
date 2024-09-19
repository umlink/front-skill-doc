import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: " 前端加油栈",
  description: "一个记录前端知识图谱的站点",
  srcDir: './src',
  head: [
    ['link', {rel: 'icon', type: 'image/jpg', href: '/logo.jpg'}],
    ['meta', {name: 'theme-color', content: '#5f67ee'}],
    ['meta', {property: 'og:type', content: 'website'}],
    ['meta', {property: 'og:site_name', content: 'VitePress'}],
  ],
  themeConfig: {
    logo: 'logo.jpg',
    nav: [
      {text: '前端概要', link: '/client/'},
      {text: '常用工具', link: '/tools/'},
      {text: '运维基础', link: '/markdown-examples'},
      {text: 'Nodejs', link: '/markdown-examples'},
      {text: '轻简历', link: 'https://www.wktline.com', target: 'blank'},
      {
        text: '开源项目管理',
        items: [
          {text: '介绍', link: '/item-2'},
          {text: '体验地址', link: 'http://121.40.42.56/'},
        ]
      }
    ],

    sidebar: {
      '/client/': [
        {
          text: 'CSS',
          collapsed: false,
          items: [
            {text: '基础', link: '/client/css/base'},
            {text: 'Flex', link: '/client/css/flex'},
            {text: 'Grid', link: '/client/css/grid'},
            {text: 'CSS3', link: '/client/css/css3'},
            {text: '常见布局', link: '/client/css/layout'},
            {text: '动画实现', link: '/client/css/animation'},
            {text: '常见题解', link: '/client/css/solution'},
            {text: '高级玩法', link: '/client/css/advanced'},
          ]
        },
        {
          text: 'Javascript',
          collapsed: true,
          items: [
            {text: '原型链', link: '/client/js/prototype'},
            {text: '闭包', link: '/client/js/closure'},
            {text: '属性', link: '/client/js/attribute'},
          ]
        },
        {
          text: 'Typescript',
          collapsed: true,
          items: [
            {text: '基础', link: '/client/typescript/base'},
          ]
        },
        {
          text: 'React',
          collapsed: true,
          items: [
            {text: '基础', link: '/client/react/base'},
          ]
        },
        {
          text: 'Vue',
          collapsed: true,
          items: [
            {text: '基础', link: '/client/vue/base'},
          ]
        },
        {
          text: '浏览器',
          collapsed: true,
          items: [
            {text: '基础', link: '/client/browser/base'},
          ]
        },
        {
          text: '网络',
          collapsed: true,
          items: [
            {text: '基础', link: '/client/network/base'},
          ]
        },
        {
          text: '设计模式',
          collapsed: true,
          items: [
            {text: '基础', link: '/client/dpattern/base'},
          ]
        },{
          text: '混合开发',
          collapsed: true,
          items: [
            {text: '基础', link: '/client/hybrid/base'},
          ]
        },
        {
          text: 'Webpack',
          collapsed: true,
          items: [
            {text: '基础', link: '/client/webpack/base'},
          ]
        },
        {
          text: 'Vite',
          collapsed: true,
          items: [
            {text: '基础', link: '/client/vite/base'},
          ]
        },
      ],
    },
    socialLinks: [
      {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
    ],
    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2024-${new Date().getFullYear()} 赵富林`
    },
    search: {
      provider: 'local',
    },
  },
})
