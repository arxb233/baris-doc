import { defineConfig } from 'vitepress'
import { sidebar } from './configs'
import { resolve } from 'path';
import { AutoSidebar } from './configs/sidebar/AutoSidebar';

export default defineConfig({
  lang: 'zh-CN',
  title: 'Baris',
  description: '敏而好学，不耻下问',

  // fav
  head: [
    ['link',{ rel: 'icon', href: '/logo.png'}],
  ],

  base: '/', //网站部署到根目录

  //启用深色模式
  appearance:'dark',

  //markdown配置
  markdown: {
    //行号显示
    lineNumbers: false, 
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },

     //组件插入h1标题下
    config: (md) => {
      md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
          let htmlResult = slf.renderToken(tokens, idx, options);
          if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`; 
          return htmlResult;
      }
    }

  },

  lastUpdated: true,


  //主题配置
  themeConfig: {

    logo: '/logo.png',

    //导航栏
    nav: [
      { text: '首页', link: '/'},
      { text: 'Baris目录', link: '/baris/obsidian/cerebot/certbot' },
      { text: 'Yiov目录', link: '/yiov/guide/' },
      {
        //下拉菜单
        text: '其他项目',
        items: [
        ],
      },
    ],


    //侧边栏
    sidebar,
  



    //本地搜索
    search: {
      provider: 'algolia',
      options: {
        appId: 'VHOTWCHJ9Q',
        apiKey: 'd9af35a368d83c707a9dd14df6fa6aee',
        indexName: 'baris',
        locales: {
          zh: {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                searchBox: {
                  resetButtonTitle: '清除查询条件',
                  resetButtonAriaLabel: '清除查询条件',
                  cancelButtonText: '取消',
                  cancelButtonAriaLabel: '取消'
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有搜索历史',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除'
                },
                errorScreen: {
                  titleText: '无法获取结果',
                  helpText: '你可能需要检查你的网络连接'
                },
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                  searchByText: '搜索提供者'
                },
                noResultsScreen: {
                  noResultsText: '无法找到相关结果',
                  suggestedQueryText: '你可以尝试查询',
                  reportMissingResultsText: '你认为该查询应该有结果？',
                  reportMissingResultsLinkText: '点击反馈'
                },
              },
            },
          },
        },
      },
    },



    //社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/arxb233' },
      { icon: 'gitee', link: 'https://gitee.com/arxb' },
    ],

    //手机端深浅模式文字修改
    darkModeSwitchLabel: '深浅模式',

    //页脚
     footer: {
       message: 'Baris 个人学习文档',
       copyright: `Copyright © 2023-${new Date().getFullYear()} &nbsp <a href="https://github.com/arxb233" target="_blank">Baris</a> &nbsp <a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备2024114118号</a> `,
     },


    //侧边栏文字更改(移动端)
    sidebarMenuLabel:'目录',

    //返回顶部文字修改(移动端)
    returnToTopLabel:'返回顶部',


    //大纲
    outline: { 
      level: [2,3], // 显示2-3级标题
      label: '当前页大纲' // 文字显示
    },


    //自定义上下页名
    docFooter: { 
      prev: '上一页', 
      next: '下一页', 
    }, 
    lastUpdated: {
      text: '最后更新时间',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }

  },

})
