import{_ as a,c as i,a4 as t,o as p}from"./chunks/framework.CyeRpf1z.js";const n="/webstack/webstack-01.png",e="/webstack/webstack-02.png",l="/webstack/webstack-03.png",h="/webstack/webstack-04.png",k="/webstack/webstack-05.png",o="/webstack/webstack-06.png",r="/webstack/webstack-07.png",c="/webstack/webstack-08.png",d="/webstack/webstack-09.png",g="/webstack/webstack-10.png",b="/webstack/webstack-11.png",F="/webstack/webstack-12.png",y="/webstack/webstack-13.png",m="/webstack/webstack-14.png",u="/webstack/webstack-15.png",E="/webstack/webstack-16.png",C="/webstack/webstack-17.png",w="/webstack/webstack-18.png",_="/webstack/webstack-19.png",f="/webstack/webstack-20.png",v="/webstack/webstack-21.png",B="/webstack/webstack-22.png",q="/webstack/webstack-23.png",A="/webstack/webstack-24.png",x="/webstack/webstack-25.png",D="/webstack/webstack-26.png",z="/webstack/webstack-27.png",P="/webstack/webstack-28.png",S="/webstack/webstack-29.png",W="/webstack/webstack-30.png",T="/webstack/webstack-31.png",L="/webstack/webstack-32.png",U=JSON.parse('{"title":"Webstack导航从零搭建","description":"","frontmatter":{},"headers":[],"relativePath":"yiov/website/WebStack.md","filePath":"yiov/website/WebStack.md","lastUpdated":1734431113000}'),R={name:"yiov/website/WebStack.md"};function $(H,s,O,M,G,N){return p(),i("div",null,s[0]||(s[0]=[t('<h1 id="webstack导航从零搭建" tabindex="-1">Webstack导航从零搭建 <a class="header-anchor" href="#webstack导航从零搭建" aria-label="Permalink to &quot;Webstack导航从零搭建&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">(当前界面文档全部来自yiov.top)</p><ul><li><a href="https://yiov.top/" target="_blank" rel="noreferrer">yiov</a>「伊奥&#39;s 教程集」</li></ul></div><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>一般情况下个人是不能做导航的，可以考虑国外服务器，毕竟免备案，不过价格就高点</p><p>这里我使用的是 <a href="https://github.com/WebStackPage/WebStackPage.github.io" target="_blank" rel="noreferrer">@Viggoz 大佬的 Webstack 导航</a></p><p>演示：<a href="https://webstack.cc/" target="_blank" rel="noreferrer">https://webstack.cc/</a></p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>虽然模板已经停更了，不过这个已经很棒了</p></div><p><img src="'+n+'" alt="" loading="lazy"></p><h2 id="准备工作" tabindex="-1">准备工作 <a class="header-anchor" href="#准备工作" aria-label="Permalink to &quot;准备工作&quot;">​</a></h2><ul><li><p><a href="./Server/">服务器1台</a></p></li><li><p><a href="./domain/">域名1个</a></p></li><li><p><a href="./shell/">安装shell工具</a></p></li><li><p><a href="./BT.html">安装宝塔面板</a></p></li><li><p><a href="./wordpress.html">搭建WordPress</a></p></li></ul><h2 id="上传主题" tabindex="-1">上传主题 <a class="header-anchor" href="#上传主题" aria-label="Permalink to &quot;上传主题&quot;">​</a></h2><p>根据文档说明，使用 <code>WordPress</code> 搭建，需进入<a href="https://github.com/owen0o0/WebStack" target="_blank" rel="noreferrer">@owen0o0 仓库</a> 下载</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>本次仅演示wordpress，教程也按照这个仓库的来</p></div><p><img src="'+e+'" alt="" loading="lazy"></p><p>登录 <code>wordpress</code> 的后台，外观-主题-上传主题-选择文件-安装，直到完成，然后 <code>启用</code></p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>或者在 <code>/wp-content/themes</code> 文件夹新建webstack文件夹，并上传所有文件</p></div><p>WP后台：<code>http://域名.com/wp-admin/</code></p><p><img src="'+l+'" alt="" loading="lazy"></p><p><img src="'+h+'" alt="" loading="lazy"></p><p>其他主题怎么删掉呢，主题详情-右下有个删除</p><p><img src="'+k+'" alt="" loading="lazy"></p><p><img src="'+o+`" alt="" loading="lazy"></p><h2 id="设置伪静态" tabindex="-1">设置伪静态 <a class="header-anchor" href="#设置伪静态" aria-label="Permalink to &quot;设置伪静态&quot;">​</a></h2><p>登录宝塔，添加站点后，设置伪静态</p><p>根据自己服务器环境 <code>二选一</code> ，我就用Nginx，保存</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Nginx规则</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">location</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    try_files</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $uri $uri</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /index.php?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$args;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rewrite</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /wp-admin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ $scheme</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">://</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$host$uri</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> permanent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Apache 规则</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">IfModule mod_rewrite.c</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RewriteEngine</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> On</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RewriteBase</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RewriteRule</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ^index</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">php</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [L]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RewriteCond</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> %{REQUEST_FILENAME}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> !-f</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RewriteCond</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> %{REQUEST_FILENAME}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> !-d</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RewriteRule</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /index.php</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [L]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/IfModule</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p><img src="`+r+'" alt="" loading="lazy"></p><h2 id="美化网页" tabindex="-1">美化网页 <a class="header-anchor" href="#美化网页" aria-label="Permalink to &quot;美化网页&quot;">​</a></h2><p>我们访问域名，看到的主页无比干净，我们挨个添加</p><p><img src="'+c+'" alt="" loading="lazy"></p><h3 id="一级菜单" tabindex="-1">一级菜单 <a class="header-anchor" href="#一级菜单" aria-label="Permalink to &quot;一级菜单&quot;">​</a></h3><p>网址-网址分类-名称自己取，父级无</p><p><img src="'+d+'" alt="" loading="lazy"></p><p>这里图标，自己选一个， <code>添加新网址目录</code></p><p><img src="'+g+'" alt="" loading="lazy"></p><p>回到网页刷新看看，就有了新增的菜单目录</p><p><img src="'+b+'" alt="" loading="lazy"></p><h3 id="二级菜单" tabindex="-1">二级菜单 <a class="header-anchor" href="#二级菜单" aria-label="Permalink to &quot;二级菜单&quot;">​</a></h3><p>网址-网址分类-名称自己取，父级选已创建好的一级目录</p><p><img src="'+F+'" alt="" loading="lazy"></p><p>这里子级的图标不用选，因为不显示 ，<code>添加新网址目录</code> ，回到网页刷新看看</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>有二级菜单存在的情况，主页面有二级菜单就不显示一级菜单</p></div><p><img src="'+y+'" alt="" loading="lazy"></p><h3 id="侧栏底部菜单" tabindex="-1">侧栏底部菜单 <a class="header-anchor" href="#侧栏底部菜单" aria-label="Permalink to &quot;侧栏底部菜单&quot;">​</a></h3><p>非必须，看自己喜好吧</p><p>外观-菜单，菜单名称自己取，自定义链接-添加至菜单，然后导航标签写一下，勾选 <code>侧栏底部菜单</code> ，保存菜单</p><p><img src="'+m+'" alt="" loading="lazy"></p><p>其他的就依次添加即可，菜单前也想加图标的话，右上方，<code>显示选项</code></p><p><img src="'+u+'" alt="" loading="lazy"></p><p>勾选 <code>css类</code></p><p><img src="'+E+'" alt="" loading="lazy"></p><p>这样菜单里就多了一个css类，我们找自己喜欢的fa图标即可</p><p><a href="http://www.fontawesome.com.cn/icons-ui/" target="_blank" rel="noreferrer">fa图标-Fontawesome中文网</a> 丨<a href="https://fontawesome.dashgame.com/" target="_blank" rel="noreferrer">fa图标-Font Awesome</a></p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>使用前记得前面还要加一个 <code>fa</code></p><p>比如wordpress是 <code>fa-wordpress</code>，那么css就是 <code>fa fa-wordpress</code></p></div><p><img src="'+C+'" alt="" loading="lazy"></p><p>回到网页刷新看看效果</p><p><img src="'+w+'" alt="" loading="lazy"></p><p>如果不喜欢后面的小星星，修改<code>wp-content/themes/WebStack-1.1620/inc/inc.php</code>文件，第473行的星星删掉即可</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>📢 修改文件前，请先备份！</p></div><p><img src="'+_+'" alt="" loading="lazy"></p><h3 id="添加网页" tabindex="-1">添加网页 <a class="header-anchor" href="#添加网页" aria-label="Permalink to &quot;添加网页&quot;">​</a></h3><p>网址-所有网址-添加网址</p><p><img src="'+f+'" alt="" loading="lazy"></p><p>网站名字，段落这里自己写，到时候详情页能看到的</p><p><img src="'+v+'" alt="" loading="lazy"></p><p>填入网站的网址，描述，滑上去点 <strong>发布</strong> 即可</p><p><img src="'+B+'" alt="" loading="lazy"></p><p>回到网页刷新看看，这里的网站没有自动获取图标，我们去设置一下</p><p><img src="'+q+'" alt="" loading="lazy"></p><p>主题设置-常规设置-图标源</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>这次设置好了，下次就不用管了</p></div><p><img src="'+A+'" alt="" loading="lazy"></p><p>这里我们直接用 <a href="https://api.iowen.cn/doc/favicon.html" target="_blank" rel="noreferrer">一为的api</a> ，或者<a href="./Favicon.html">自己按他的源码搭建</a>，图标源api后缀填<code>.png</code>，<strong>保存</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://api.iowen.cn/favicon/</span></span></code></pre></div><p><img src="'+x+'" alt="" loading="lazy"></p><p>回到网页刷新看看，可以按步骤依次添加其他</p><p><img src="'+D+'" alt="" loading="lazy"></p><h3 id="添加详情页" tabindex="-1">添加详情页 <a class="header-anchor" href="#添加详情页" aria-label="Permalink to &quot;添加详情页&quot;">​</a></h3><p>主题设置-常规设置-详情页开关(开启)，已开的无视</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>如果想直接跳转网页，不需要详情页，关闭即可</p></div><p><img src="'+z+'" alt="" loading="lazy"></p><p>我们随便点一个网站进去</p><p><img src="'+P+'" alt="" loading="lazy"></p><p>这个就是详情页</p><p><img src="'+S+'" alt="" loading="lazy"></p><p>如果不喜欢下方的 <code>相关导航</code> ，修改文件<code>wp-content/themes/WebStack-1.1620/single-sites.php</code>，删掉第111-146行，这样下面就干净了</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>📢 修改文件前，请先备份！</p></div><p><img src="'+W+'" alt="" loading="lazy"></p><h2 id="其他设置" tabindex="-1">其他设置 <a class="header-anchor" href="#其他设置" aria-label="Permalink to &quot;其他设置&quot;">​</a></h2><p>大部分都是有开关的，自己看下即可，我就说几个难点的</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>📢 修改文件前，请先备份！</p></div><h3 id="删除天气" tabindex="-1">删除天气 <a class="header-anchor" href="#删除天气" aria-label="Permalink to &quot;删除天气&quot;">​</a></h3><p>修改文件<code>wp-content/themes/WebStack-1.1620/templates/header-banner.php</code>，删除第23-27行即可</p><p><img src="'+T+`" alt="" loading="lazy"></p><p>若想替换成国旗，将第22-28行换成下面代码</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        &lt;!--</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 国旗</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> --&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">li</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> style</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;min-height: 75px;&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                        &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">a</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> href</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                            &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">img</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> src</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://webstack.cc/assets/images/flags/flag-cn.png&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> alt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;flag-cn&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Chinese</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                        &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                    &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">li</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        &lt;!--</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 国旗</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> end</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> --&gt;</span></span></code></pre></div><h3 id="删除fork-me-on-github" tabindex="-1">删除Fork me on GitHub <a class="header-anchor" href="#删除fork-me-on-github" aria-label="Permalink to &quot;删除Fork me on GitHub&quot;">​</a></h3><p>修改文件<code>wp-content/themes/WebStack-1.1620/templates/header-banner.php</code>，删除第31行即可</p><h3 id="关掉搜索框" tabindex="-1">关掉搜索框 <a class="header-anchor" href="#关掉搜索框" aria-label="Permalink to &quot;关掉搜索框&quot;">​</a></h3><p>主题设置-常规设置-搜索（关闭）</p><p><img src="`+L+`" alt="" loading="lazy"></p><p>觉得搜索框复杂，可以自己改文件<code>wp-content/themes/WebStack-1.1620/search-tool.php</code></p><h3 id="底部信息栏" tabindex="-1">底部信息栏 <a class="header-anchor" href="#底部信息栏" aria-label="Permalink to &quot;底部信息栏&quot;">​</a></h3><p>修改文件<code>wp-content/themes/WebStack-1.1620/footer.php</code>，修改第22或者23行即可</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Copyright</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ©</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> echo</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Y&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  &lt;?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">io_get_option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;icp&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&lt;a href=&quot;https://beian.miit.gov.cn/&quot; target=&quot;_blank&quot; rel=&quot;link noopener&quot;&gt;&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> io_get_option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;icp&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&lt;/a&gt;&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">nbsp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">nbsp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Design</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> by</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">a</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> href</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://github.com/WebStackPage/&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> target</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;_blank&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">strong</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Webstack</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">strong</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h3 id="公告" tabindex="-1">公告 <a class="header-anchor" href="#公告" aria-label="Permalink to &quot;公告&quot;">​</a></h3><p>主题-常规设置-显示公告（开启/关闭），这里的公告在wp后台的公告里添加</p><h3 id="图标logo设置" tabindex="-1">图标LOGO设置 <a class="header-anchor" href="#图标logo设置" aria-label="Permalink to &quot;图标LOGO设置&quot;">​</a></h3><p>主题-图标设置，根据尺寸要求来就好了，制作完成上传到image文件夹并在设置中修改</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`logo@2x.png\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 左上角Logo：建议高度80px，原图尺寸178px*40px</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`logo_dark@2x.png\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 左上角Logo：暗黑模式，原图尺寸178px*40px</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`logo-collapsed@2x.png\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 左上角收起菜单栏Logo：建议80px*80px</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`favicon.png\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 本网站的fa图标，原图尺寸64px*64px</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`app-ico.png\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 添加的网站fa图标，开启了api自动获取这个就不用管，原图尺寸180px*180px</span></span></code></pre></div><h3 id="部署sll证书不是绿锁" tabindex="-1">部署SLL证书不是绿锁 <a class="header-anchor" href="#部署sll证书不是绿锁" aria-label="Permalink to &quot;部署SLL证书不是绿锁&quot;">​</a></h3><p>一般正常部署了证书后，就是绿锁，如果出现灰锁，并提示如下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>您与***.com之间的连接采用新型加密套件进行了加密。</span></span>
<span class="line"><span>此外，此页中包含其他不安全的资源。他人能在这些资源传输过程中进行查看，攻击者也可以修改这些资源，从而改变此页的外观。</span></span>
<span class="line"><span>该连接使用TLS 1.2。</span></span>
<span class="line"><span>该连接使用AES_ 128 _GCM和</span></span>
<span class="line"><span>ECDHE_ RSA进行加密和身份验证。</span></span></code></pre></div><p>我们按F12审查元素-安全可以查看到原因，就是因为有的图片用的是http，而不是https</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>此页面不安全。</span></span>
<span class="line"><span>资源 - 混合内容</span></span>
<span class="line"><span>此页面包含 HTTP 资源。</span></span>
<span class="line"><span>Reload the page to record requests for HTTP resources.</span></span></code></pre></div><p>F12审查元素-控制台下方就看得到，黄色的就是问题所在，自己上传了图片或者LOGO引用的链接</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>某些消息已移动到“问题”面板。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Mixed Content: The page at &#39;&lt;URL&gt;&#39; was loaded over HTTPS, but requested an insecure image &#39;&lt;URL&gt;&#39;. This content should also be served over HTTPS.</span></span>
<span class="line"><span>(index):557 Mixed Content: The page at &#39;https://***.com/&#39; was loaded over HTTPS, but requested an insecure image </span></span>
<span class="line"><span>&#39;http://***.com/wp-content/uploads/2022/08/zqyy.png&#39;. </span></span>
<span class="line"><span>This content should also be served over HTTPS.</span></span></code></pre></div><p>我们根据报错的，在WP后台逐个修改网址的fa图标和logo地址，即 <code>http后加一个s</code></p><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#修改前</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;">- http://***.com/wp-content/uploads/2022/08/zqyy.png</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#修改后</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+ https://***.com/wp-content/uploads/2022/08/zqyy.png</span></span></code></pre></div><h2 id="特别鸣谢" tabindex="-1">特别鸣谢 <a class="header-anchor" href="#特别鸣谢" aria-label="Permalink to &quot;特别鸣谢&quot;">​</a></h2><ul><li><p><a href="https://github.com/WebStackPage/" target="_blank" rel="noreferrer">@Viggoz</a></p></li><li><p><a href="https://github.com/owen0o0/WebStack" target="_blank" rel="noreferrer">@owen0o0</a></p></li><li><p><a href="https://fontawesome.dashgame.com/" target="_blank" rel="noreferrer">@Font Awesome</a></p></li><li><p><a href="http://www.fontawesome.com.cn/icons-ui/" target="_blank" rel="noreferrer">@Font Awesome中文网</a></p></li><li><p><a href="https://api.iowen.cn/doc/favicon.html" target="_blank" rel="noreferrer">@一为API</a></p></li></ul>`,122)]))}const V=a(R,[["render",$]]);export{U as __pageData,V as default};
