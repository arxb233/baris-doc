import DefaultTheme from 'vitepress/theme'
import './custom.css'
import confetti from "./components/confetti.vue" // 五彩纸屑

export default {
    extends: DefaultTheme,
    enhanceApp({app , router }) {
      app.component('confetti' , confetti) // 五彩纸屑
    },
}