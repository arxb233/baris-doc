import{_ as a,c as i,a4 as t,o as l}from"./chunks/framework.CyeRpf1z.js";const n="/Centos/Centos-01.png",e="/Centos/Centos-02.png",p="/Centos/Centos-03.png",o="/Centos/Centos-04.png",h="/Centos/Centos-05.png",c="/Centos/Centos-06.png",r="/Centos/Centos-07.png",d="/Centos/Centos-08.png",k="/Centos/Centos-09.png",g="/Centos/Centos-10.png",m="/Centos/Centos-11.png",u="/Centos/Centos-12.png",y="/Centos/Centos-13.png",C="/Centos/Centos-14.png",F="/Centos/Centos-15.png",b="/Centos/Centos-16.png",z=JSON.parse('{"title":"Centos切换到图形界面","description":"","frontmatter":{},"headers":[],"relativePath":"yiov/website/Centos.md","filePath":"yiov/website/Centos.md","lastUpdated":null}'),_={name:"yiov/website/Centos.md"};function v(f,s,B,q,E,x){return l(),i("div",null,s[0]||(s[0]=[t('<h1 id="centos切换到图形界面" tabindex="-1">Centos切换到图形界面 <a class="header-anchor" href="#centos切换到图形界面" aria-label="Permalink to &quot;Centos切换到图形界面&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">(当前界面文档全部来自yiov.top)</p><ul><li><a href="https://yiov.top/" target="_blank" rel="noreferrer">yiov</a>「伊奥&#39;s 教程集」</li></ul></div><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>远程centos需要借助VNC、xrdp等工具</p><div class="tip custom-block"><p class="custom-block-title">注意</p><p>注意：不可直接使用Xshell等工具！！！</p></div><h2 id="演示环境" tabindex="-1">演示环境 <a class="header-anchor" href="#演示环境" aria-label="Permalink to &quot;演示环境&quot;">​</a></h2><ul><li><p>腾讯云服务器</p></li><li><p>Centos 7.6</p></li></ul><h2 id="步骤" tabindex="-1">步骤 <a class="header-anchor" href="#步骤" aria-label="Permalink to &quot;步骤&quot;">​</a></h2><h3 id="vnc登录" tabindex="-1">VNC登录 <a class="header-anchor" href="#vnc登录" aria-label="Permalink to &quot;VNC登录&quot;">​</a></h3><p>我用的腾讯云，自带VNC登录，其他的云服务器请自测</p><p>控制台-云产品-云服务器-登录</p><p><img src="'+n+'" alt="" loading="lazy"></p><p>选择下方的 <code>VNC登录</code></p><p><img src="'+e+'" alt="" loading="lazy"></p><p>进入命令行界面，我们输入账号密码登录</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>账号默认为root，密码自己设置的服务器密码</p></div><p><img src="'+p+'" alt="" loading="lazy"></p><p><img src="'+o+'" alt="" loading="lazy"></p><h3 id="安装-x-window" tabindex="-1">安装 X window <a class="header-anchor" href="#安装-x-window" aria-label="Permalink to &quot;安装 X window&quot;">​</a></h3><p>安装 X window 控制</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p><code>-y</code> 表示一直同意，省去手动输入</p></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> groupinstall</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;X Window System&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span></span></code></pre></div><p>因为VNC登录不能粘贴，我们点击上面，在输入框里输入，确定，回车，直到安装完成</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>后面的命令也这样粘贴</p></div><p><img src="'+h+'" alt="" loading="lazy"></p><h3 id="安装-gnome" tabindex="-1">安装 GNOME <a class="header-anchor" href="#安装-gnome" aria-label="Permalink to &quot;安装 GNOME&quot;">​</a></h3><p>安装 GNOME 图形界面，时间非常长，耐心等到安装完成</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> groupinstall</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;GNOME Desktop&quot;</span></span></code></pre></div><h3 id="开启图形界面" tabindex="-1">开启图形界面 <a class="header-anchor" href="#开启图形界面" aria-label="Permalink to &quot;开启图形界面&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">init</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span></span></code></pre></div><p><img src="'+c+'" alt="" loading="lazy"></p><p>设置下语言 <code>汉语</code></p><p><img src="'+r+'" alt="" loading="lazy"></p><p><img src="'+d+'" alt="" loading="lazy"></p><p>隐私默认，位置也默认是上海</p><p><img src="'+k+'" alt="" loading="lazy"></p><p><img src="'+g+'" alt="" loading="lazy"></p><p>在线账号跳过</p><p><img src="'+m+'" alt="" loading="lazy"></p><p>设置下登录的账号和密码，登录用的</p><p><img src="'+u+'" alt="" loading="lazy"></p><p><img src="'+y+'" alt="" loading="lazy"></p><p>设置成功，进入桌面</p><p><img src="'+C+'" alt="" loading="lazy"></p><p><img src="'+F+`" alt="" loading="lazy"></p><h3 id="其他命令" tabindex="-1">其他命令 <a class="header-anchor" href="#其他命令" aria-label="Permalink to &quot;其他命令&quot;">​</a></h3><p>了解就行了，不需要输入</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#开机启动模式</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get-default</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#开机时启动图形化界面</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set-default</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> graphical.target</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#开机时启动dos界面</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set-default</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> multi-user.target</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#防火墙状态</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> firewalld</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#开启防火墙</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> firewalld</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#关闭防火墙</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> firewalld</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#重启防火墙</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">firewall-cmd-reload</span></span></code></pre></div><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h2><details class="details custom-block"><summary>如何使用浏览器</summary><p>右上角-应用程序-Firefox</p><p><img src="`+b+'" alt="" loading="lazy"></p></details><details class="details custom-block"><summary>如何退出图形界面</summary><p>按键盘 <code>Ctrl+Alt+F2</code></p><p>图形界面一共是6个,F1-F6</p><p>默认是F1，输入F2是为了切换图形界面</p></details><details class="details custom-block"><summary>如何重新进入界面</summary><p>我们先重新登录root账号，再输入<code>init 3</code>，再输入<code>init 5</code>即可</p><ul><li><p>init 3：命令界面</p></li><li><p>init 5：图形界面</p></li></ul></details><details class="details custom-block"><summary>登录界面提示的 <code>tty1</code> 是什么</summary><p>这是表示图形界面1，默认是tty1-tty6，我们退出图形界面就是用个切换的</p></details><details class="details custom-block"><summary>我网络上搜都是 <code>startx</code> 进入</summary><p>进是可以进，但是界面还是有不同的，主要是我也不知道这个界面怎么退</p></details><h2 id="特别鸣谢" tabindex="-1">特别鸣谢 <a class="header-anchor" href="#特别鸣谢" aria-label="Permalink to &quot;特别鸣谢&quot;">​</a></h2><ul><li><a href="https://cloud.tencent.com/" target="_blank" rel="noreferrer">腾讯云</a></li></ul>',56)]))}const D=a(_,[["render",v]]);export{z as __pageData,D as default};
