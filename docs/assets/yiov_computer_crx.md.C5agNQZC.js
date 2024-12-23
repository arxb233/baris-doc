import{_ as s,c as p,a4 as t,o as c}from"./chunks/framework.CyeRpf1z.js";const o="/crx/crx-01.png",e="/crx/crx-02.png",l="/crx/crx-03.png",i="/crx/crx-04.png",r="/crx/crx-05.png",n="/crx/crx-06.png",d="/crx/crx-07.png",g="/crx/crx-08.png",m="/crx/crx-09.png",u="/crx/crx-10.png",h="/crx/crx-11.png",x="/crx/crx-12.png",b="/crx/crx-13.png",_="/crx/crx-14.png",k="/crx/crx-15.png",y="/crx/crx-16.png",v="/crx/crx-17.png",f="/crx/crx-18.png",z="/crx/crx-19.png",D="/crx/crx-20.png",q="/crx/crx-21.png",C="/crx/crx-22.png",F=JSON.parse('{"title":"浏览器crx插件导出","description":"","frontmatter":{},"headers":[],"relativePath":"yiov/computer/crx.md","filePath":"yiov/computer/crx.md","lastUpdated":1734678955000}'),E={name:"yiov/computer/crx.md"};function P(w,a,I,U,$,A){return c(),p("div",null,a[0]||(a[0]=[t('<h1 id="浏览器crx插件导出" tabindex="-1">浏览器crx插件导出 <a class="header-anchor" href="#浏览器crx插件导出" aria-label="Permalink to &quot;浏览器crx插件导出&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">(当前界面文档来自yiov.top)</p><ul><li><a href="https://yiov.top/" target="_blank" rel="noreferrer">yiov</a>「伊奥&#39;s 教程集」</li></ul></div><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>安装插件后，下载地址忘了，或者发给不会翻墙的朋友，这时候导出插件就用上了</p><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><details class="details custom-block"><summary>360浏览器演示</summary><p>打开360浏览器，地址栏输入下面路径进入插件拓展管理</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>也可以直接点右上角的插件管理进入</p></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>se://plugin-manager/</span></span></code></pre></div><p><img src="'+o+'" alt="" loading="lazy"></p><p>比如我想导出 <code>DuckDuckGo</code>，右上角 <code>高级管理</code></p><p><img src="'+e+'" alt="" loading="lazy"></p><p>这个ID就是对应的插件</p><p><img src="'+l+'" alt="" loading="lazy"></p><p>那怎么找到这个ID呢，我们回到桌面，鼠标右键360浏览器-属性-打开文件所在位置</p><p><img src="'+i+'" alt="" loading="lazy"></p><p>我是安装在D盘的，其他盘根据这个目录找到目录</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>D:\\Program Files (x86)\\360se\\360se6\\User Data\\Default\\Extensions</span></span></code></pre></div><p><img src="'+r+'" alt="" loading="lazy"></p><p>我要导出的DuckDuckGo的ID是：<code>bkdgflcldnnnapblkhphbgpggdiikppg</code> ，打开相对应文件夹</p><p><img src="'+n+'" alt="" loading="lazy"></p><p><img src="'+d+'" alt="" loading="lazy"></p><p>地址复制出来，点击 <code>打包扩展程序</code>，把地址粘贴进去，打包即可</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>D:\\Program Files (x86)\\360se\\360se6\\User Data\\Default\\Extensions\\bkdgflcldnnnapblkhphbgpggdiikppg\\2022.8.25_0</span></span></code></pre></div><p><img src="'+g+'" alt="" loading="lazy"></p><p><img src="'+m+'" alt="" loading="lazy"></p><p>在版本号的同目录下会生成crx文件，我们把拖入浏览器，验证是否正确</p><blockquote><p>pem是证书文件，一般用不上，删掉就好了</p></blockquote><p><img src="'+u+'" alt="" loading="lazy"></p><p><img src="'+h+'" alt="" loading="lazy"></p></details><details class="details custom-block"><summary>Edge浏览器演示</summary><p>打开Edge浏览器，地址栏输入下面路径进入插件拓展管理</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>也可以直接点右上角的插件管理进入</p></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>edge://extensions/</span></span></code></pre></div><p><img src="'+x+'" alt="" loading="lazy"></p><p>打开右侧这个 <code>开发者模式</code> 开关</p><p><img src="'+b+'" alt="" loading="lazy"></p><p>比如：我们想打包 <code>微软tts</code> 这个插件</p><p>我们可以轻松的看到插件的ID</p><p><img src="'+_+'" alt="" loading="lazy"></p><p>Edge插件默认位置在</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>C:\\Users\\你的用户名\\AppData\\Local\\Microsoft\\Edge\\User Data\\Default\\Extensions</span></span></code></pre></div><p>看不到 <code>AppDate</code> ，在上方属性-文件夹选项-查看里打开 <code>显示隐藏文件夹</code></p><p><img src="'+k+'" alt="" loading="lazy"></p><p>根据插件的ID，就可以轻松找到插件文件夹</p><p><img src="'+y+'" alt="" loading="lazy"></p><p>我们进入插件目录页面，复制上方路径路径</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>我这里的 <code>5.0.1_0</code> 是插件的版本号</p><p>还要再进去一层</p></div><p><img src="'+v+'" alt="" loading="lazy"></p><p>将地址粘贴到浏览器 <code>拓展根目录</code> ，然后点 <code>打包拓展</code>，确定</p><p><img src="'+f+'" alt="" loading="lazy"></p><p><img src="'+z+'" alt="" loading="lazy"></p><p>自动生成在插件版本号，同级目录中</p><p>这样，我们就可以发别人安装了</p><blockquote><p>pem是证书文件，一般用不上，删掉就好了</p></blockquote><p><img src="'+D+'" alt="" loading="lazy"></p></details><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h2><details class="details custom-block"><summary>找不到浏览器的文件夹</summary><p>可以用 <code>电脑自带的搜索功能</code> ，觉得慢可以也使用 <a href="https://www.voidtools.com/zh-cn/" target="_blank" rel="noreferrer">Everything</a> 本地文件快速查找</p><p><img src="'+q+'" alt="" loading="lazy"></p></details><details class="details custom-block"><summary>油猴里的插件可以导出么</summary><p>油猴管理面板 - 实用工具 - 导出</p><p><img src="'+C+'" alt="" loading="lazy"></p></details><h2 id="特别鸣谢" tabindex="-1">特别鸣谢 <a class="header-anchor" href="#特别鸣谢" aria-label="Permalink to &quot;特别鸣谢&quot;">​</a></h2><ul><li><a href="https://www.voidtools.com/zh-cn/" target="_blank" rel="noreferrer">Everything</a>「快速查找本地文件」</li></ul>',12)]))}const G=s(E,[["render",P]]);export{F as __pageData,G as default};
