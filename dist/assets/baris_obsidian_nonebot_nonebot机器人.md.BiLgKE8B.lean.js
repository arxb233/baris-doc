import{_ as s,c as n,a4 as e,o as t}from"./chunks/framework.CyeRpf1z.js";const b=JSON.parse('{"title":"nonebot异步机器人框架安装指南","description":"","frontmatter":{"title":"nonebot异步机器人框架安装指南","date":"2023-10-16T11:01:13.000Z","tags":null,"top_img":"https://z1.ax1x.com/2023/10/16/piCY2kV.png","cover":"https://z1.ax1x.com/2023/10/16/piCY2kV.png"},"headers":[],"relativePath":"baris/obsidian/nonebot/nonebot机器人.md","filePath":"baris/obsidian/nonebot/nonebot机器人.md","lastUpdated":1734431113000}'),p={name:"baris/obsidian/nonebot/nonebot机器人.md"};function i(o,a,l,c,d,h){return t(),n("div",null,a[0]||(a[0]=[e(`<h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1，nonebot官网：https://v2.nonebot.dev/docs/start/installation</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2，go-cqhttp官网：https://docs.go-cqhttp.org/</span></span></code></pre></div><h2 id="安装脚手架​" tabindex="-1">安装脚手架​ <a class="header-anchor" href="#安装脚手架​" aria-label="Permalink to &quot;安装脚手架​&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>确保你已经安装了 Python 3.8 及以上版本，然后在命令行中执行以下命令：</span></span></code></pre></div><h2 id="安装-pipx" tabindex="-1">安装 pipx <a class="header-anchor" href="#安装-pipx" aria-label="Permalink to &quot;安装 pipx&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>python -m pip install --user pipx</span></span>
<span class="line"><span>python -m pipx ensurepath</span></span>
<span class="line"><span>如果在此步骤的输出中出现了“open a new terminal”或者“re-login”字样，那么请关闭当前终端并重新打开一个新的终端。</span></span></code></pre></div><h2 id="安装脚手架" tabindex="-1">安装脚手架 <a class="header-anchor" href="#安装脚手架" aria-label="Permalink to &quot;安装脚手架&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>pipx install nb-cli</span></span>
<span class="line"><span>安装完成后，你可以在命令行使用 nb 命令来使用脚手架。如果出现无法找到命令的情况（例如出现“Command not found”字样），请参考 pipx 文档 检查你的环境变量。</span></span></code></pre></div><h2 id="创建项目​" tabindex="-1">创建项目​ <a class="header-anchor" href="#创建项目​" aria-label="Permalink to &quot;创建项目​&quot;">​</a></h2><p>使用脚手架来创建一个项目：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>nb create</span></span>
<span class="line"><span>这一指令将会执行创建项目的流程，你将会看到一些询问：</span></span></code></pre></div><h2 id="项目模板" tabindex="-1">项目模板 <a class="header-anchor" href="#项目模板" aria-label="Permalink to &quot;项目模板&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[?] 选择一个要使用的模板: bootstrap (初学者或用户)</span></span>
<span class="line"><span>这里我们选择 bootstrap 模板，它是一个简单的项目模板，能够安装商店插件。如果你需要自行编写插件，这里请选择 simple 模板。</span></span></code></pre></div><h2 id="项目名称" tabindex="-1">项目名称 <a class="header-anchor" href="#项目名称" aria-label="Permalink to &quot;项目名称&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[?] 项目名称: awesome-bot</span></span>
<span class="line"><span>这里我们以 awesome-bot 为例，作为项目名称。你可以根据自己的需要来命名。</span></span></code></pre></div><h2 id="其他选项" tabindex="-1">其他选项 <a class="header-anchor" href="#其他选项" aria-label="Permalink to &quot;其他选项&quot;">​</a></h2><p>请注意，多选项使用空格选中或取消，回车确认。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[?] 要使用哪些驱动器? FastAPI (FastAPI 驱动器)</span></span>
<span class="line"><span>[?] 要使用哪些适配器? Console (基于终端的交互式适配器)</span></span>
<span class="line"><span>[?] 立即安装依赖? (Y/n) Yes</span></span>
<span class="line"><span>[?] 创建虚拟环境? (Y/n) Yes</span></span>
<span class="line"><span>这里我们选择了创建虚拟环境，nb-cli 在之后的操作中将会自动使用这个虚拟环境。如果你不需要自动创建虚拟环境或者已经创建了其他虚拟环境，nb-cli 将会安装依赖至当前激活的 Python 虚拟环境。</span></span></code></pre></div><h2 id="选择内置插件" tabindex="-1">选择内置插件 <a class="header-anchor" href="#选择内置插件" aria-label="Permalink to &quot;选择内置插件&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[?] 要使用哪些内置插件? echo</span></span>
<span class="line"><span>这里我们选择 echo 插件作为示例。这是一个简单的复读回显插件，可以用于测试你的机器人是否正常运行。</span></span></code></pre></div><h2 id="运行项目​" tabindex="-1">运行项目​ <a class="header-anchor" href="#运行项目​" aria-label="Permalink to &quot;运行项目​&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>在项目创建完成后，你可以在项目目录中使用以下命令来运行项目：</span></span>
<span class="line"><span>nb run</span></span></code></pre></div><p>你现在应该已经运行起来了你的第一个 NoneBot 项目了！ 请注意，生成的项目中使用了 FastAPI 驱动器和 Console 适配器，你之后可以自行修改配置或安装其他适配器。</p><h2 id="尝试使用​" tabindex="-1">尝试使用​ <a class="header-anchor" href="#尝试使用​" aria-label="Permalink to &quot;尝试使用​&quot;">​</a></h2><p>在项目运行起来后，Console 适配器会在你的终端启动交互模式，</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>你可以直接在输入框中输入 /echo hello world 来测试你的机器人是否正常运行。</span></span></code></pre></div>`,26)]))}const u=s(p,[["render",i]]);export{b as __pageData,u as default};
