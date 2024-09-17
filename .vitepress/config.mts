import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: " 前端加油栈",
  description: "一个记录前端知识图谱的站点",
  srcDir: './src',
  themeConfig: {
    logo: '/logo.jpg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '前端概要', link: '/' },
      { text: '运维基础', link: '/markdown-examples' },
      { text: 'Nodejs', link: '/markdown-examples' },
      { text: '轻简历', link: 'https://www.wktline.com', target: 'blank' },
      {
        text: '开源项目管理',
        items: [
          { text: '介绍', link: '/item-2' },
          { text: '体验地址', link: 'http://121.40.42.56/' },
        ]
      }
    ],

    sidebar: [
      {
        text: 'CSS',
        collapsed: false,
        items: [
          { text: '基础', link: '/css/base' },
          { text: 'Flex', link: '/css/flex' },
          { text: 'Grid', link: '/css/grid' },
          { text: 'CSS3', link: '/css/css3' },
          { text: '常见布局', link: '/css/layout' },
          { text: '动画实现', link: '/css/animation' },
          { text: '常见题解', link: '/css/solution' },
          { text: '高级玩法', link: '/css/advanced' },
        ]
      },
      {
        text: 'JS',
        collapsed: true,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2024-${new Date().getFullYear()} 赵富林`
    },
    outline: {
      label: '页面导航'
    },
    search: {
      provider: 'local',
    },

  },
})
