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
      let currentExpressionIndex = 0; // 当前表情索引
      let expressions: string[] = []; 
      const oml2d = loadOml2d({
        primaryColor: 'pink',
        dockedPosition:'right',
        models: [
          {
            name: "HK416-1-normal",
            "path": "https://model.oml2d.com/HK416-1-normal/model.json",
            "position": [0, 0],
            "scale": 0.06,
            "stageStyle": {
              "height": 300
            }
          },
          {
            name: "冰糖",
            path: "https://share.baris.top/Model/冰糖/免费模型冰糖.model3.json",
            position: [0, 0],
            scale: 0.06,
            stageStyle: {
              height: 400
            }
          },
          {
            name: "艾莲",
            path: "https://share.baris.top/Model/艾莲/免费模型艾莲.model3.json",
            position: [0, 0],
            scale: 0.06,
            stageStyle: {
              height: 340
            }
          },
          {
            name: "镜流",
            path: "https://share.baris.top/Model/镜流/镜流.model3.json",
            position: [0, 0],
            scale: 0.09,
            stageStyle: {
              height: 340
            }
          },
          {
            name: "符玄",
            path: "https://share.baris.top/Model/符玄/符玄.model3.json",
            position: [0, 0],
            scale: 0.04,
            stageStyle: {
              height: 340
            }
          },
          {
            name: "kafuka",
            path: "https://share.baris.top/Model/kafuka/kafuka.model3.json",
            position: [0, 0],
            scale: 0.06,
            stageStyle: {
              height: 340
            }
          },
          {
            name: "简",
            path: "https://share.baris.top/Model/简/简.model3.json",
            position: [0, 0],
            scale: 0.06,
            stageStyle: {
              height: 340
            }
          },
          {
            name: "藿藿",
            path: "https://share.baris.top/Model/藿藿/藿藿.model3.json",
            position: [0, 0],
            scale: 0.06,
            stageStyle: {
              height: 340
            }
          },
          {
            name: "Diana",
            path: "https://share.baris.top/Model/Diana/Diana1.0.model3.json",
            position: [0, 0],
            scale: 0.1,
            stageStyle: {
              height: 240
            }
          },
          {
            name: "知更鸟",
            path: "https://share.baris.top/Model/知更鸟/知更鸟.model3.json",
            position: [0, 0],
            scale: 0.06,
            stageStyle: {
              height: 340
            }
          },
          {
            name: "秧秧",
            path: "https://share.baris.top/Model/秧秧/秧秧.model3.json",
            position: [0, 0],
            scale: 0.06,
            stageStyle: {
              height: 340
            }
          },
          {
            name: "胡桃",
            path: "https://share.baris.top/Model/胡桃/胡桃001.model3.json",
            position: [0, 0],
            scale: 0.02,
            stageStyle: {
              height: 340
            }
          }
         
        ],
        tips: {
          idleTips: {
            wordTheDay: (wordTheDayData) => {
              return wordTheDayData.hitokoto;
            }
          }
        },
        menus: (currentModel) => {
          switch (currentModel.name) {
            case 'HK416-1-normal':
            case 'Diana':
            case 'kafuka':
            case '符玄':
              return {
                items: (defaultItem) => {
                  return [defaultItem[0],defaultItem[2]];
                }
              };
            default:
              return {
                items: (defaultItem = []) => {
                  return [
                    defaultItem[0], 
                    {
                      id: 'emoji',
                      title: '表情',
                      icon: 'icon-like',
                      onClick: () => {
                        const expression = expressions[currentExpressionIndex];
                        // @ts-ignore-error
                        oml2d.models.model.internalModel.motionManager.expressionManager.setExpression(expression);
                        currentExpressionIndex = (currentExpressionIndex + 1) % expressions.length;
                        
                      }
                    },
                    defaultItem[2]
                  ];
                }
              };   
          }
        }        
      });
      oml2d.onStageSlideIn(() => {
        switch (oml2d.options.models?.[oml2d.modelIndex].name) {
          case "冰糖":
            // @ts-ignore-error
            oml2d.models.model.internalModel.coreModel.setParameterValueById("Paramheadxy3", 30);
            // @ts-ignore-error
            oml2d.models.model.internalModel.coreModel.setParameterValueById("Paramheadxy", 30);
            expressions = ["O O", "red", "black"];
            break;
          case '艾莲':
            // @ts-ignore-error
            oml2d.models.model.internalModel.coreModel.setParameterValueById("Paramheadxy", 30);
            expressions = ["red", "black", "shou", "tang"];
            break;
          case '镜流':
            expressions = ["open", "close"];
            break;
          case '简':
            expressions = ["Expressions1", "Expressions2", "Expressions3", "Expressions4", "Expressions5", "Expressions6", "Expressions7"];
            break;
          case '藿藿':
            expressions = ["Expressions1", "Expressions2", "Expressions3", "Expressions4", "Expressions5"];
            break;
          case '知更鸟':
            expressions = ["Expressions1", "Expressions2", "Expressions3"];
            break;
          case '胡桃':
            expressions = ["Expressions1", "Expressions2", "Expressions3", "Expressions4"];
            break;
          case '秧秧':
            expressions = ["Expressions1", "Expressions2", "Expressions3", "Expressions4"];
            break;
          default:
            break;
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