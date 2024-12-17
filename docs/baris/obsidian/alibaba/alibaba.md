---
title: 如何获取海外alibaba的商品kewords
date: 2023-10-24 10:11:06
tags:
top_img: https://n.sinaimg.cn/spider20190711/320/w1200h720/20190711/2f34-hzrevpz9873856.jpg
cover: https://n.sinaimg.cn/spider20190711/320/w1200h720/20190711/2f34-hzrevpz9873856.jpg
---
<center><h2>如何获取海外阿里巴巴的kewords</h2></center>

## 1.使用谷歌官方浏览器
### (1)下载地址：https://www.google.cn/chrome/index.html

![](/alibaba/Snipaste_2023-10-24_08-38-20.png)

## 2.打开需要获取的产品链接

![](/alibaba/图片1.png)

## 3.键盘按下F12打开开发者模式

![](/alibaba/图片2.png)
![](alibaba/图片3.png)

## 4.双击代码第五行<head></head>，展开折叠项
![](/alibaba/图片4.png)![](alibaba/图片5.png)
## 5.下拉展开折叠项的代码

![](/alibaba/图片6.png)

## 6.找到<!-- meta信息 -->该代码部分

![](/alibaba/图片7.png)

## 7.meta信息第二部分
```html
<meta name="keywords" content="Resistor Kit Smd Book 0805 Chip Resistor Assortment Kit 1206 1% Fr-07 Smt 170 Values 0r-10m - Buy 1206 0r J,1206 0r J Resistor,1206 0r J J Aluminum Resistors Product on Alibaba.com">即为key
words
```
![](/alibaba/图片8.png)

## 8.content为keywords内容，按照逗号依次区分四条数据内容，格式为
```html
content="name - Design Phone Case,Phone Cover,Print Phone Case “
```
| 产品名称 |        K1         |     K2      |        K3        |
| :------: | :---------------: | :---------: | :--------------: |
|   name   | Design Phone Case | Phone Cover | Print Phone Case |