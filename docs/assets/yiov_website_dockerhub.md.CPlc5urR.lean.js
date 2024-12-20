import{_ as a,c as i,a4 as e,o as t}from"./chunks/framework.CyeRpf1z.js";const p="/dockerhub/dockerhub.png",l="/dockerhub/dockerhub-01.png",o="/dockerhub/dockerhub-02.png",c="/dockerhub/dockerhub-03.png",d="/dockerhub/dockerhub-04.png",h="/dockerhub/dockerhub-05.png",n="/dockerhub/dockerhub-06.png",r="/dockerhub/dockerhub-07.png",k="/dockerhub/dockerhub-08.png",g="/dockerhub/dockerhub-09.png",u="/dockerhub/dockerhub-10.png",b="/dockerhub/dockerhub-11.png",m="/dockerhub/dockerhub-12.png",y="/dockerhub/dockerhub-13.png",v="/dockerhub/dockerhub-14.png",F="/dockerhub/dockerhub-15.png",C="/dockerhub/dockerhub-16.png",_="/dockerhub/dockerhub-17.png",D=JSON.parse('{"title":"Docker hub注册及使用","description":"","frontmatter":{},"headers":[],"relativePath":"yiov/website/dockerhub.md","filePath":"yiov/website/dockerhub.md","lastUpdated":null}'),f={name:"yiov/website/dockerhub.md"};function B(x,s,E,z,q,P){return t(),i("div",null,s[0]||(s[0]=[e('<h1 id="docker-hub注册及使用" tabindex="-1">Docker hub注册及使用 <a class="header-anchor" href="#docker-hub注册及使用" aria-label="Permalink to &quot;Docker hub注册及使用&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">(当前界面文档全部来自yiov.top)</p><ul><li><a href="https://yiov.top/" target="_blank" rel="noreferrer">yiov</a>「伊奥&#39;s 教程集」</li></ul></div><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p><a href="./docker.html">Docker</a> 官方提供一个托管平台，用于存放镜像</p><p>官网：<a href="https://hub.docker.com/" target="_blank" rel="noreferrer">https://hub.docker.com/</a></p><p><img src="'+p+'" alt="" loading="lazy"></p><h2 id="注册" tabindex="-1">注册 <a class="header-anchor" href="#注册" aria-label="Permalink to &quot;注册&quot;">​</a></h2><p>dockerhub 官网右上角 <a href="https://hub.docker.com/signup" target="_blank" rel="noreferrer">Sign up</a> 注册</p><p><img src="'+l+'" alt="" loading="lazy"></p><h2 id="创建仓库" tabindex="-1">创建仓库 <a class="header-anchor" href="#创建仓库" aria-label="Permalink to &quot;创建仓库&quot;">​</a></h2><p>注册后登录账号，点 <code>Repositories-Create Repository</code> 创建仓库</p><p><img src="'+o+'" alt="" loading="lazy"></p><p>给仓库命名，公开(public) 还是 私有 (private)，创建</p><p><img src="'+c+'" alt="" loading="lazy"></p><p>这样就创建成功了</p><p><img src="'+d+'" alt="" loading="lazy"></p><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p>开始前，请先用 <a href="./shell/">shell工具</a> 登录 <a href="./Server/">服务器</a></p><details class="details custom-block"><summary>拉取镜像</summary><p>以 <a href="https://hub.docker.com/r/whyour/qinglong" target="_blank" rel="noreferrer">青龙面板</a> 做演示</p><p><img src="'+h+'" alt="" loading="lazy"></p><p>拉取镜像</p><details class="details custom-block"><summary>镜像下载很慢？</summary><p>要么等，要么在安装docker的时候，<a href="./docker.html#安装docker">更换国内镜像源</a></p></details><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> whyour/qinglong:latest</span></span></code></pre></div><p><img src="'+n+'" alt="" loading="lazy"></p><p>查看一下镜像</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> images</span></span></code></pre></div><p><img src="'+r+'" alt="" loading="lazy"></p></details><details class="details custom-block"><summary>上传镜像</summary><div class="warning custom-block"><p class="custom-block-title">注意</p><p>本次仅演示，如何上传已拉取别人的镜像</p><p>自己的镜像，Emm... 俺也不会写啊</p></div><p>输入命令登录docker账号和密码，<code>Login Succeeded</code> 就是登录成功</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> login</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">说明</p><p>Username：账户名</p><p>Password：密码 (输入是隐藏的，输入完成回车即可)</p></div><p><img src="'+k+'" alt="" loading="lazy"></p><p>先查看一下镜像</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> images</span></span></code></pre></div><p><img src="'+g+'" alt="" loading="lazy"></p><p>无法直接上传别人的镜像，但可以通过 <code>打标签</code> 的形式来上传</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tag</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 镜像ID</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 账户名/仓库名:标签名</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">说明</p><p>镜像ID：4dc24556b2ff(上面自己复制)</p><p>账户名：yiov(改成自己的账户名)</p><p>仓库名：nvjdc(上传到自己哪个仓库)</p><p>标签名：latest(也可以自己改)</p></div><p>最终：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tag</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 4dc24556b2ff</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yiov/nvjdc:1.0</span></span></code></pre></div><p><img src="'+u+'" alt="" loading="lazy"></p><p>我们再查看一下镜像，这样我们就得到了与原镜像完全一致的镜像</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> images</span></span></code></pre></div><p><img src="'+b+'" alt="" loading="lazy"></p><p>现在我们来上传</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>如果上传前想查看数据 <code>docker inspect 账户名/仓库名:版本号</code></p></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yiov/nvjdc:1.0</span></span></code></pre></div><p><img src="'+m+'" alt="" loading="lazy"></p><p>回到dockerhub网页查看，已经上传成功了</p><p><img src="'+y+'" alt="" loading="lazy"></p><p>在Tags也能直观的看到，pull命令就可以直接使用了</p><p><img src="'+v+'" alt="" loading="lazy"></p></details><details class="details custom-block"><summary>删除镜像</summary><p>先退出账号避免自己误操作，需要的时候再登，<code>Removing login</code> 就是已经移除登录状态了</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> logout</span></span></code></pre></div><p><img src="'+F+'" alt="" loading="lazy"></p><p>先查看一下本地的镜像，我们用命令删除这个生成的镜像</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> images</span></span></code></pre></div><p><img src="'+C+'" alt="" loading="lazy"></p><p>用命令删除即可</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rmi</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 账户名/仓库名:标签名tag</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">说明</p><p>比如我的就是：<code>docker rmi -f yiov/nvjdc:1.0</code></p></div><p>这里再次 <code>docker images</code> 看一下，已经删除了</p><p><img src="'+_+'" alt="" loading="lazy"></p></details><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h2><p>1.docker一直登陆失败</p><p>答：会话超时了，关掉SSH工具，重新打开，重新登录 <code>docker login</code> 即可</p><h2 id="特别鸣谢" tabindex="-1">特别鸣谢 <a class="header-anchor" href="#特别鸣谢" aria-label="Permalink to &quot;特别鸣谢&quot;">​</a></h2><ul><li><p><a href="https://hub.docker.com/r/whyour/qinglong" target="_blank" rel="noreferrer">青龙镜像</a></p></li><li><p>Nvjdc (已更名为方舟)</p></li></ul>',26)]))}const S=a(f,[["render",B]]);export{D as __pageData,S as default};
