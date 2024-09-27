import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "EasyFront",
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
      {
        text: '前端基础', activeMatch: '/client',
        items: [
          {text: 'CSS基础', link: '/client/css', activeMatch: '/client/css'},
          {text: 'JavaScript', link: '/client/javascript', activeMatch: '/client/javascript'},
          {text: 'TypeScript', link: '/client/typescript', activeMatch: '/client/typescript'},
          {text: 'React', link: '/client/react', activeMatch: '/client/react/base'},
          {text: 'Vue', link: '/client/vue', activeMatch: '/client/vue/base'},
          {text: '打包优化', link: '/client/build', activeMatch: '/client/build/webpack'},
        ]
      },
      {text: '移动端', link: '/mobile', activeMatch: '/mobile'},
      {text: '浏览器', link: '/browser/base', activeMatch: '/browser'},
      {text: '设计模式', link: '/design-pattern', activeMatch: '/design-pattern'},
      {text: '算法', link: '/algorithm'},
      {text: '工具链', link: '/tools', activeMatch: '/tools'},
      {text: '关于', link: '/about'},
      {text: '轻简历', link: 'https://www.wktline.com', target: 'blank'},
      {
        text: '我的开源',
        items: [
          {text: 'wktline介绍', link: 'https://juejin.cn/post/7410062139275984936'},
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
            {text: '基础扫盲', link: '/client/css/base'},
            {text: 'Flex弹性布局', link: '/client/css/flex'},
            {text: 'Grid网格布局', link: '/client/css/grid'},
            {text: 'CSS3', link: '/client/css/css3'},
            {text: '常见布局', link: '/client/css/layout'},
            {text: '动画实现', link: '/client/css/animation'},
            {text: '常见题解', link: '/client/css/solution'},
            {text: '高级玩法', link: '/client/css/advanced'},
          ]
        },
      ],
      '/client/javascript/': {
        text: 'Javascript',
        collapsed: true,
        items: [
          {text: '原型链', link: '/client/javascript/prototype'},
          {text: '闭包', link: '/client/javascript/closure'},
          {text: '属性', link: '/client/javascript/attribute'},
        ]
      },
      '/client/typescript/': {
        text: 'TypeScript',
        collapsed: true,
        items: [
          {text: '基础', link: '/client/typescript/base'}
        ]
      },
      '/client/react/': {
        text: 'React',
        collapsed: true,
        items: [
          {text: '基础', link: '/client/react/base'},
        ]
      },
      '/client/vue/': {
        text: 'Vue',
        collapsed: true,
        items: [
          {text: '基础', link: '/client/vue/base'},
        ]
      },
      '/client/build/': {
        text: '打包工具',
        collapsed: true,
        items: [
          {text: 'webpack', link: '/client/build/webpack'},
          {text: 'vite', link: '/client/build/vite'},
        ]
      },
      '/browser': {
        base: '/browser',
        items: [
          {text: '浏览器介绍', link: '/base'},
          {text: '渲染原理', link: '/render'},
          {text: '事件循环机制', link: '/event-loop'},
          {text: '宏任务和微任务', link: '/network'},
          {text: '浏览器缓存', link: '/cache'},
          {text: '网络相关', link: '/network'},
          {text: 'CORS/CSRF安全', link: '/secure'},
          {text: '调试指南', link: '/debug-guide'},
          {text: '插件开发', link: '/plugin-dev'},
          {text: '插件推荐', link: '/plugin-recommendation'},
        ]
      },
      '/algorithm': {
        base: '/algorithm',
        items: [
          {text: '算法介绍', link: '/'},
        ]
      },
      '/design-pattern': {
        base: '/design-pattern',
        items: [
          {text: '设计模式', link: '/base'},
        ]
      },
      '/mobile': {
        base: '/mobile',
        items: [
          {text: '移动端', link: '/base'},
        ]
      },
      '/tools/': {
        base: '/tools/',
        items: [{
          text: '常用工具',
          items: [
            {
              text: 'Git',
              link: '/git'
            },
            {
              text: 'Nginx',
              link: '/nginx'
            },
            {
              text: 'Docker',
              link: '/docker'
            },
            {
              text: 'Scp',
              link: '/scp'
            }
          ]
        }]
      },
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
    // docFooter: {
    //   prev: '上一页',
    //   next: '下一页',
    // },
  },
})
