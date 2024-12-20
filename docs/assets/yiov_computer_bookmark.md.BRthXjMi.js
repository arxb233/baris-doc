import{_ as a,c as t,a4 as r,o as e}from"./chunks/framework.CyeRpf1z.js";const i="/bookmark/bookmark-01.png",s="/bookmark/bookmark-02.png",l="/bookmark/bookmark-03.png",p="/bookmark/bookmark-04.png",c="/bookmark/bookmark-05.png",m="/bookmark/bookmark-06.png",n="/bookmark/bookmark-07.png",k="/bookmark/bookmark-08.png",d="/bookmark/bookmark-09.png",b="/bookmark/bookmark-10.png",h="/bookmark/bookmark-11.png",g="/bookmark/bookmark-12.png",u="/bookmark/bookmark-13.png",_="/bookmark/bookmark-14.png",f="/bookmark/bookmark-15.png",y="/bookmark/bookmark-16.png",q="/bookmark/bookmark-17.png",D=JSON.parse('{"title":"书签同步至不同浏览器","description":"","frontmatter":{},"headers":[],"relativePath":"yiov/computer/bookmark.md","filePath":"yiov/computer/bookmark.md","lastUpdated":null}'),v={name:"yiov/computer/bookmark.md"};function x(z,o,w,P,G,E){return e(),t("div",null,o[0]||(o[0]=[r('<h1 id="书签同步至不同浏览器" tabindex="-1">书签同步至不同浏览器 <a class="header-anchor" href="#书签同步至不同浏览器" aria-label="Permalink to &quot;书签同步至不同浏览器&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">(当前界面文档来自yiov.top)</p><ul><li><a href="https://yiov.top/" target="_blank" rel="noreferrer">yiov</a>「伊奥&#39;s 教程集」</li></ul></div><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>当我们从一个浏览器更换到另一个浏览器时，如何将收藏夹中的网址，同步到另一个浏览器呢</p><p>本文前提：注册一个 <a href="./../website/pages/github.html">Github账号</a></p><h2 id="安装插件" tabindex="-1">安装插件 <a class="header-anchor" href="#安装插件" aria-label="Permalink to &quot;安装插件&quot;">​</a></h2><p>BookmarkHub：<a href="https://chrome.google.com/webstore/detail/bookmarkhub-sync-bookmark/fohimdklhhcpcnpmmichieidclgfdmol" target="_blank" rel="noreferrer">☛点我下载 谷歌商店版</a></p><details class="details custom-block"><summary>网址打不开，需要翻墙？</summary><p>插件小屋：<a href="https://www.chajianxw.com/product-tool/32593.html" target="_blank" rel="noreferrer">https://www.chajianxw.com/product-tool/32593.html</a></p></details><p><img src="'+i+'" alt="" loading="lazy"></p><p>谷歌下载就直接安装好了</p><details class="details custom-block"><summary><a href="https://www.chajianxw.com/product-tool/32593.html" target="_blank" rel="noreferrer">插件小屋</a> 下的，如何安装</summary><p>将下载的压缩包解压，得到一个 <code>.crx</code> 后缀的插件</p><ul><li><p>360浏览器：直接拖入浏览器安装</p></li><li><p>Edge浏览器：右上角 <code>...</code> - 拓展 - 管理拓展 - 拖入安装</p></li></ul></details><p><img src="'+s+'" alt="" loading="lazy"></p><h2 id="设置参数" tabindex="-1">设置参数 <a class="header-anchor" href="#设置参数" aria-label="Permalink to &quot;设置参数&quot;">​</a></h2><p>点击安装好的BookmarkHub，再点设置</p><p><img src="'+l+'" alt="" loading="lazy"></p><p>这里需要填入相应的参数</p><p><img src="'+p+'" alt="" loading="lazy"></p><h3 id="github-token" tabindex="-1">Github Token <a class="header-anchor" href="#github-token" aria-label="Permalink to &quot;Github Token&quot;">​</a></h3><p>登录 GitHub 账号：<a href="https://github.com/" target="_blank" rel="noreferrer">https://github.com/</a></p><p><img src="'+c+'" alt="" loading="lazy"></p><p>在 个人头像 - 设置 最下方找到 <code>Developer Settings</code> 开发者设置</p><p><img src="'+m+'" alt="" loading="lazy"></p><p>个人访问令牌中选择 <code>Tokens(classic)</code> - <code>Personal access tokens</code> - <code>Generate new token(classic)</code> 生成新令牌</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>注意不要选错，否则一会token选不了 <code>无有效期</code></p></div><p><img src="'+n+'" alt="" loading="lazy"></p><p><code>Note</code> 名称随便写，有效期选 <code>无有效期</code></p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>名称建议还是写 <code>bookmarkhub</code> ，否则后期删除token，都不知道是啥</p></div><p><img src="'+k+'" alt="" loading="lazy"></p><p>拉倒下方，将gist勾选，然后生成令牌</p><p><img src="'+d+'" alt="" loading="lazy"></p><p>这样我们的令牌token就生成了，复制填入插件</p><p><img src="'+b+'" alt="" loading="lazy"></p><h3 id="gist-id" tabindex="-1">Gist ID <a class="header-anchor" href="#gist-id" aria-label="Permalink to &quot;Gist ID&quot;">​</a></h3><p>在 <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a> 登录的状态下，我们打开 Gist</p><p>官网：<a href="https://gist.github.com/" target="_blank" rel="noreferrer">https://gist.github.com/</a></p><p>片段描述也可以随意写，建议还是 <code>bookmarkhub</code> ，字段随便写，然后创建私密片段</p><p><img src="'+h+'" alt="" loading="lazy"></p><p>这样我们的gist id就得到了，填入插件中</p><details class="details custom-block"><summary>id复制不到</summary><p>地址栏的链接也有：<a href="https://gist.github.com/Yiov/***/" target="_blank" rel="noreferrer">https://gist.github.com/Yiov/***/</a></p></details><p><img src="'+g+'" alt="" loading="lazy"></p><p>将这两个参数分别填入插件中</p><p><img src="'+u+'" alt="" loading="lazy"></p><h2 id="同步书签" tabindex="-1">同步书签 <a class="header-anchor" href="#同步书签" aria-label="Permalink to &quot;同步书签&quot;">​</a></h2><p>token等参数填入后，会自动保存，直接可以使用了</p><h3 id="上传书签" tabindex="-1">上传书签 <a class="header-anchor" href="#上传书签" aria-label="Permalink to &quot;上传书签&quot;">​</a></h3><p>点击插件 - 上传书签，将本地浏览器收藏的网址上传到gist上</p><p><img src="'+_+'" alt="" loading="lazy"></p><p>上传成功后，我们看一下 gist 已经新增了一条信息</p><p><img src="'+f+'" alt="" loading="lazy"></p><h3 id="下载书签" tabindex="-1">下载书签 <a class="header-anchor" href="#下载书签" aria-label="Permalink to &quot;下载书签&quot;">​</a></h3><p>我用Edge浏览器演示</p><p>我们用同样的方法，给Edge装上插件并填入参数后，点下载书签</p><p><img src="'+y+'" alt="" loading="lazy"></p><p>这样就导入成功啦</p><details class="details custom-block"><summary>Edge标签很长,可以收缩吗</summary><p>在 收藏夹 - ... - 显示收藏栏，改成 <code>从不</code></p></details><p><img src="'+q+'" alt="" loading="lazy"></p><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h2><details class="details custom-block"><summary>清空本地书签后无法再次导入</summary><p>记录清空了就无法找回了，谨慎操作</p><p>其他浏览器还有记录的再上传一次，然后再回到被清空的浏览器下载书签即可</p></details>',58)]))}const H=a(v,[["render",x]]);export{D as __pageData,H as default};
