import { defineConfig } from 'vitepress'
import { sidebar } from './configs'
import { viteStaticCopy } from 'vite-plugin-static-copy';
import fs from 'fs'; // 文件系统模块
import path from 'path'; // 路径模块

function cleanDirectory(dir) {
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir).forEach(file => {
      const fullPath = path.join(dir, file);

      // 忽略 .git 和 .gitignore
      if (file === '.git' || file === '.gitignore') {
        console.log(`跳过文件/文件夹: ${file}`);
        return;
      }

      // 判断是否是目录
      if (fs.lstatSync(fullPath).isDirectory()) {
        fs.rmSync(fullPath, { recursive: true, force: true });
      } else {
        fs.unlinkSync(fullPath);
      }
    });
    console.log(`已清空目录（忽略 .git 和 .gitignore）: ${dir}`);
  }
}

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

    // 组件插入h1标题下
   // config: (md) => {
     // md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
         // let htmlResult = slf.renderToken(tokens, idx, options);
          //if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`; 
         // return htmlResult;
      //}
    //}

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
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
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
       copyright: `Copyright © 2023-${new Date().getFullYear()} <a href="https://github.com/arxb233" target="_blank">Baris</a>`,
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

  },
  vite: {
    plugins: [
      {
        name: 'clean-target-folder', // 自定义插件名称
        apply: 'build',              // 仅在构建阶段生效
        buildStart() {
          const targetDir = path.resolve(__dirname, '/Users/songpeng/Documents/github/arxb.github.io-dist');
          cleanDirectory(targetDir);
        },
      },
      viteStaticCopy({
        targets: [
          {
            src: '.vitepress/dist/*', // 源目录
            dest: '/Users/songpeng/Documents/github/arxb.github.io-dist', // 目标目录
          },
        ],
      }),
    ],
  },

})
