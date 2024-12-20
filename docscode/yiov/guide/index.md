---
sidebar: false
---

# 目录索引
::: tip (当前界面文档全部来自yiov.top) 
* [yiov](https://yiov.top/)「伊奥's 教程集」
:::

<script setup>
import { gfw } from '/.vitepress/theme/lists/yiov/gfw'
import { daily } from '/.vitepress/theme/lists/yiov/daily'
import { computer } from '/.vitepress/theme/lists/yiov/computer'
import { mi } from '/.vitepress/theme/lists/yiov/mi'
import { iPhone } from '/.vitepress/theme/lists/yiov/iPhone'
import { tg } from '/.vitepress/theme/lists/yiov/tg'
import { website } from '/.vitepress/theme/lists/yiov/website'
</script>


## 科学上网

<lists v-for="{ items } in gfw" :items="items" />



## 日常生活

<lists v-for="{ title , items } in daily" :title="title" :items="items" />



## 电脑相关

<lists v-for="{ title , items } in computer" :title="title" :items="items" />




## 小米相关

<lists v-for="{ items } in mi" :items="items" />




## 苹果相关

<lists v-for="{  title , items } in iPhone" :title="title" :items="items" />




## Telegram

<lists v-for="{ items } in tg" :items="items" />





## 网站搭建

<lists v-for="{ title , items } in website" :title="title" :items="items" />





