import DefaultTheme from 'vitepress/theme'
import './style/index.css' 

import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';
import { useData, useRoute } from 'vitepress';

import Linkcard from "./components/Linkcard.vue"
import ArticleMetadata from "./components/ArticleMetadata.vue"
import MyLayout from './components/MyLayout.vue'
import vfooter from './components/vfooter.vue'
import DataPanel from './components/DataPanel.vue'


import vuejs from './components/vuejs.vue'
import lists from './lists/lists.vue'
import navlist from './navlist/navlist.vue'

import giscusTalk from 'vitepress-plugin-comment-with-giscus';

import confetti from "./components/confetti.vue"

import { loadOml2d } from 'oh-my-live2d';

import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'

export default {
  extends: DefaultTheme,

  Layout: MyLayout, 

  async enhanceApp({app , router }) { 
    // 注册全局组件
    app.component('Linkcard' , Linkcard)
    app.component('ArticleMetadata' , ArticleMetadata)
    app.component('vuejs' , vuejs)
    app.component('lists' , lists)
    app.component('navlist' , navlist)
    app.component('vfooter' , vfooter)
    app.component('confetti' , confetti)
    app.component('DataPanel' , DataPanel)

    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch()
      }
    }

     // @ts-ignore-error
    if (!import.meta.env.SSR) {
      const { loadOml2d } = await import('oh-my-live2d');
      loadOml2d({
        primaryColor: 'pink',
        dockedPosition:'right',
        models: [
          {
            path: 'https://model.oml2d.com/HK416-1-normal/model.json',
            position: [0, 60],
            scale: 0.04,
            stageStyle: {
              height: 340
            }
          },
          {
            path: 'https://model.oml2d.com/cat-black/model.json',
            scale: 0.15,
            position: [0, 20],
            stageStyle: {
              height: 350
            }
          },
          {
            path: 'https://model.oml2d.com/shizuku_pajama/index.json',
            scale: 0.2,
            volume: 0,
            position: [40, 10],
            stageStyle: {
              height: 350,
              width: 330
            }
          },
          {
            path: 'https://model.oml2d.com/shizuku/shizuku.model.json',
            scale: 0.2,
            volume: 0,
            position: [70, 70],
            stageStyle: {
              height: 370,
              width: 400
            }
          },
          {
            path: 'https://model.oml2d.com/Senko_Normals/senko.model3.json',
            position: [-10, 20]
          },
          {
            path: 'https://model.oml2d.com/Pio/model.json',
            scale: 0.4,
            position: [0, 50],
            stageStyle: {
              height: 300
            }
          }
        ],

        tips: {
          idleTips: {
            wordTheDay: (wordTheDayData) => {
              return wordTheDayData.hitokoto;
            }
          }
        }
      });
    }
  },

  setup() {
    const route = useRoute();
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
    const { frontmatter } = useData();
        
    // giscus配置
    giscusTalk({
      repo: 'arxb233/baris-doc', //仓库
      repoId: 'R_kgDONYwfew', //仓库ID
      category: 'Announcements', // 讨论分类
      categoryId: 'DIC_kwDONYwfe84ClaqG', //讨论分类ID
      mapping: 'pathname',
      inputPosition: 'bottom',
      lang: 'zh-CN',
      }, 
      {
        frontmatter, route
      },
      true
    );
  },
}