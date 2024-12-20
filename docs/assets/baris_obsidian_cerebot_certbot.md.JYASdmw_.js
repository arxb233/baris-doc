import{_ as a,c as n,a4 as e,o as p}from"./chunks/framework.CyeRpf1z.js";const u=JSON.parse('{"title":"windows下使用Certbot申请通配符证书","description":"","frontmatter":{"title":"windows下使用Certbot申请通配符证书","date":"2023-10-18T13:31:55.000Z","tags":null,"top_img":"https://www.myfreax.com/content/images/size/w816/2019/07/certbot.webp","cover":"https://www.myfreax.com/content/images/size/w816/2019/07/certbot.webp"},"headers":[],"relativePath":"baris/obsidian/cerebot/certbot.md","filePath":"baris/obsidian/cerebot/certbot.md","lastUpdated":null}'),t={name:"baris/obsidian/cerebot/certbot.md"};function i(l,s,c,o,r,d){return p(),n("div",null,s[0]||(s[0]=[e(`<p>windows下使用Certbot申请通配符证书</p><p>本文档转发为<a href="https://zhuanlan.zhihu.com/p/627526278%EF%BC%8C%E5%A6%82%E4%BE%B5%E6%9D%83%E8%81%94%E7%B3%BB%E5%88%A0%E9%99%A4" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/627526278，如侵权联系删除</a></p><h2 id="一、下载并安装软件" tabindex="-1">一、下载并安装软件 <a class="header-anchor" href="#一、下载并安装软件" aria-label="Permalink to &quot;一、下载并安装软件&quot;">​</a></h2><p>在这个网站下载最新的软件并安装 <img src="https://pic1.zhimg.com/80/v2-0f1de0a1cfd872d02d533c1b5f0a97a8_720w.webp" alt="avater" loading="lazy"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://github.com/certbot/certbot/</span></span></code></pre></div><p>下载完成后直接双击安装就行了</p><p>安装完成后，以管理员方式运行cmd，输入cretbot --version，如果有显示就说明安装成功了</p><div class="language-bat vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bat</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">C:\\Windows\\System32</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">certbot --version certbot 2.5.0</span></span></code></pre></div><p>命令行工具使用说明</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>用法:</span></span>
<span class="line"><span>  certbot [子命令] [选项] [-d 域名] [-d 域名] ...</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>Certbot工具用于获取和安装 HTTPS/TLS/SSL 证书。默认情况下，Certbot会尝试为本地网页服务器</span></span>
<span class="line"><span>(如果不存在会默认安装一个到本地)获取并安装证书。最常用的子命令和选项如下:</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>获取, 安装, 更新证书:</span></span>
<span class="line"><span>    (默认) run       获取并安装证书到当前网页服务器</span></span>
<span class="line"><span>    certonly        获取或更新证书，但是不安装</span></span>
<span class="line"><span>    renew           更新已经获取但快过期的所有证书</span></span>
<span class="line"><span>   -d 域名列表        指定证书对应的域名列表，域名之间使用逗号分隔</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>  --apache          使用Apache插件进行身份认证和安装</span></span>
<span class="line"><span>  --standalone      运行一个独立的网页服务器用于身份认证</span></span>
<span class="line"><span>  --nginx           使用Nginx插件进行身份认证和安装</span></span>
<span class="line"><span>  --webroot         把身份认证文件放置在服务器的网页根目录下</span></span>
<span class="line"><span>  --manual          使用交互式或脚本钩子的方式获取证书</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>   -n               非交互式运行</span></span>
<span class="line"><span>  --test-cert       从预交付服务器上获取测试证书</span></span>
<span class="line"><span>  --dry-run         测试获取或更新证书，但是不存储到本地硬盘</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>证书管理:</span></span>
<span class="line"><span>    certificates    显示使用Certbot生成的所有证书的信息</span></span>
<span class="line"><span>    revoke          撤销证书(supply --cert-path)</span></span>
<span class="line"><span>    delete          删除证书</span></span></code></pre></div><h2 id="二、申请通配符证书的命令" tabindex="-1">二、申请通配符证书的命令 <a class="header-anchor" href="#二、申请通配符证书的命令" aria-label="Permalink to &quot;二、申请通配符证书的命令&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>certbot certonly -d &quot;*.fanpin.icu&quot; -d fanpin.icu --manual --preferred-challenges dns-01 --server https://acme-v02.api.letsencrypt.org/directory</span></span></code></pre></div><p>命令说明：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>certonly 安装模式</span></span>
<span class="line"><span>-d 申请证书的域名，如果是通配符域名输入 *.http://example.com</span></span>
<span class="line"><span>–manual 使用交互式或脚本钩子的方式获取证书</span></span>
<span class="line"><span>–preferred-challenges dns 使用 DNS 方式校验域名所有权</span></span>
<span class="line"><span>–server，Let’s Encrypt ACME v2 版本使用的服务器不同于 v1 版本，需要显示指定</span></span></code></pre></div><p>官网里v2说明</p><p>*.example.top换成你想要申请的域名就可以了，接下来，会提示需要进行手动验证DNS：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Saving debug log to C:\\Certbot\\log\\letsencrypt.log</span></span>
<span class="line"><span>Requesting a certificate for *.example.top and example.top</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</span></span>
<span class="line"><span>Please deploy a DNS TXT record under the name:</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>_acme-challenge.example.top.</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>with the following value:</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>MeZetcO-5n_7WeJIitM_eAR8lWUZ2EQriWOg1OxBcaE</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</span></span>
<span class="line"><span>Press Enter to Continue</span></span></code></pre></div><p>我的域名是阿里云申请的域名，去域名解析那手动添加一条TXT记录就可以了，我这里申请的是通配符域名，还有一级域名，就需要添加两条记录来验证</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Please deploy a DNS TXT record under the name:</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>_acme-challenge.example.top.</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>with the following value:</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>8eBntKwxymhu1erZuE7J9KPZnuxmE6kiYnBrDD3DkXU</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>(This must be set up in addition to the previous challenges; do not remove,</span></span>
<span class="line"><span>replace, or undo the previous challenge tasks yet. Note that you might be</span></span>
<span class="line"><span>asked to create multiple distinct TXT records with the same name. This is</span></span>
<span class="line"><span>permitted by DNS standards.)</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>Before continuing, verify the TXT record has been deployed. Depending on the DNS</span></span>
<span class="line"><span>provider, this may take some time, from a few seconds to multiple minutes. You can</span></span>
<span class="line"><span>check if it has finished deploying with aid of online tools, such as the Google</span></span>
<span class="line"><span>Admin Toolbox: https://toolbox.googleapps.com/apps/dig/#TXT/_acme-challenge.example.top.</span></span>
<span class="line"><span>Look for one or more bolded line(s) below the line &#39;;ANSWER&#39;. It should show the</span></span>
<span class="line"><span>value(s) you&#39;ve just added.</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</span></span>
<span class="line"><span>Press Enter to Continue</span></span></code></pre></div><p>根据提示操作完成后，在域名解析那就有两条TXT记录了，如下：</p><p><img src="https://pic3.zhimg.com/80/v2-e86d0c4690fa78184b61c37049481ed2_720w.webp" alt="avater" loading="lazy"></p><p>设置好之后的域名解析</p><p>检查是否已经解析完成</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://toolbox.googleapps.com/apps/dig/#TXT/_acme-challenge.fanpin.icu</span></span></code></pre></div><p>接着就会显示申请成功的信息了</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Press Enter to Continue</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Successfully received certificate.</span></span>
<span class="line"><span>Certificate is saved at: C:\\Certbot\\live\\fanpin.icu\\fullchain.pem</span></span>
<span class="line"><span>Key is saved at:         C:\\Certbot\\live\\fanpin.icu\\privkey.pem</span></span>
<span class="line"><span>This certificate expires on 2024-01-16.</span></span>
<span class="line"><span>These files will be updated when the certificate renews.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>NEXT STEPS:</span></span>
<span class="line"><span>- This certificate will not be renewed automatically. Autorenewal of --manual certificates requires the use of an authentication hook script (--manual-auth-hook) but one was not provided. To renew this certificate, repeat this same certbot command before the certificate&#39;s expiry date.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</span></span>
<span class="line"><span>If you like Certbot, please consider supporting our work by:</span></span>
<span class="line"><span> * Donating to ISRG / Let&#39;s Encrypt:   https://letsencrypt.org/donate</span></span>
<span class="line"><span> * Donating to EFF:                    https://eff.org/donate-le</span></span>
<span class="line"><span>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</span></span></code></pre></div><p>这里已经提示的证书的存放位置，直接进c盘去找就好了，这里发现这些文件是快捷方式，然后还有一个readme文件，打开里面提示是不要移动也不要修改名称，看一下快捷方式的属性就发现证书文件存在了另一个文件夹：C:\\Certbot\\archive</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>This directory contains your keys and certificates.</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>\`privkey.pem\`  : the private key for your certificate.</span></span>
<span class="line"><span>\`fullchain.pem\`: the certificate file used in most server software.</span></span>
<span class="line"><span>\`chain.pem\`    : used for OCSP stapling in Nginx &gt;=1.3.7.</span></span>
<span class="line"><span>\`cert.pem\`     : will break many server configurations, and should not be used</span></span>
<span class="line"><span>                 without reading further documentation (see link below).</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>WARNING: DO NOT MOVE OR RENAME THESE FILES!</span></span>
<span class="line"><span>         Certbot expects these files to remain in this location in order</span></span>
<span class="line"><span>         to function properly!</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>We recommend not moving these files. For more information, see the Certbot</span></span>
<span class="line"><span>User Guide at https://certbot.eff.org/docs/using.html#where-are-my-certificates.</span></span></code></pre></div><p>既然不让我移动或改名，那我复制出来使用就可以了。</p><h2 id="三、关于续签证书" tabindex="-1">三、关于续签证书 <a class="header-anchor" href="#三、关于续签证书" aria-label="Permalink to &quot;三、关于续签证书&quot;">​</a></h2><p>刚刚申请成功的地方，有一个关于续签的说明如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>NEXT STEPS:</span></span>
<span class="line"><span>- This certificate will not be renewed automatically. Autorenewal of --manual certificates requires the use of an authentication hook script (--manual-auth-hook) but one was not provided. To renew this certificate, repeat this same certbot command before the certificate&#39;s expiry date.</span></span></code></pre></div><p>翻译过来就是说：</p><p>下一个步骤:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>—该证书不会自动更新。——manual证书的自动更新需要使用身份验证挂钩脚本(——manual-auth-hook)，但没有提供。要更新该证书，请在证书到期之前重复相同的certbot命令。</span></span></code></pre></div><p>我理解就是如果下次经续签，可能就是要重新申请一次。反正也不麻烦，大概几分钟就搞定了，那就下次再重新申请吧。</p>`,36)]))}const b=a(t,[["render",i]]);export{u as __pageData,b as default};
