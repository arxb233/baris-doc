import{_ as t,c as r,a4 as e,o}from"./chunks/framework.CyeRpf1z.js";const l="/protocol/protocol-01.png",i="/protocol/protocol-02.png",s="/protocol/protocol-03.png",m=JSON.parse('{"title":"常见的协议/代理协议","description":"","frontmatter":{},"headers":[],"relativePath":"yiov/gfw/protocol.md","filePath":"yiov/gfw/protocol.md","lastUpdated":1734678955000}'),p={name:"yiov/gfw/protocol.md"};function c(h,a,n,u,d,b){return o(),r("div",null,a[0]||(a[0]=[e('<h1 id="常见的协议-代理协议" tabindex="-1">常见的协议/代理协议 <a class="header-anchor" href="#常见的协议-代理协议" aria-label="Permalink to &quot;常见的协议/代理协议&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">(当前界面文档来自yiov.top)</p><ul><li><a href="https://yiov.top/" target="_blank" rel="noreferrer">yiov</a>「伊奥&#39;s 教程集」</li></ul></div><h2 id="基础模型" tabindex="-1">基础模型 <a class="header-anchor" href="#基础模型" aria-label="Permalink to &quot;基础模型&quot;">​</a></h2><h3 id="osi" tabindex="-1">OSI <a class="header-anchor" href="#osi" aria-label="Permalink to &quot;OSI&quot;">​</a></h3><p>OSI 模型，全称为开放系统互连参考模型（Open System Interconnect），是由国际标准化组织（ISO）和国际电报电话咨询委员会（CCITT）联合制定</p><div class="tip custom-block"><p class="custom-block-title">网络互连的七层框架</p><ul><li><p>物理层（Physical Layer）</p></li><li><p>数据链路层（Data Link Layer）</p></li><li><p>网络层（Network Layer）</p></li><li><p>传输层（Transport Layer）</p></li><li><p>会话层（Session Layor）</p></li><li><p>表示层（Presentation Layer）</p></li><li><p>应用层（Application Layer）</p></li></ul></div><p><img src="'+l+'" alt="" loading="lazy"></p><h3 id="tcp-ip" tabindex="-1">TCP/IP <a class="header-anchor" href="#tcp-ip" aria-label="Permalink to &quot;TCP/IP&quot;">​</a></h3><p>TCP/IP模型是一种网络通信协议模型，由传输控制协议（TCP）和互联网协议（IP）组成</p><div class="tip custom-block"><p class="custom-block-title">5层TCP/IP模型</p><ul><li><p>物理层（Physical Layer）</p></li><li><p>数据链路层（Data Link Layer）</p></li><li><p>网络层（Network Layer）</p></li><li><p>传输层（Transport Layer）</p></li><li><p>应用层（Application Layer）</p></li></ul><p>即：将OSI模型的 <code>应用层、表示层、会话层</code> 合并成了一个 <code>应用层</code></p></div><p><img src="'+i+'" alt="" loading="lazy"></p><p>层级与设备及常见的协议，如图</p><p><img src="'+s+'" alt="" loading="lazy"></p><h2 id="通信协议" tabindex="-1">通信协议 <a class="header-anchor" href="#通信协议" aria-label="Permalink to &quot;通信协议&quot;">​</a></h2><h3 id="tcp" tabindex="-1">TCP <a class="header-anchor" href="#tcp" aria-label="Permalink to &quot;TCP&quot;">​</a></h3><p>传输控制协议（Transmission Control Protocol），是 <a href="#tcp-ip">TCP/IP模型</a> 中的传输层协议之一</p><div class="tip custom-block"><p class="custom-block-title">关于TCP</p><ul><li><p>特点：它是一种面向连接的协议，需要进行三次握手来建立连接</p></li><li><p>优劣：虽然这种机制确保了数据的稳定传输，但它会产生较大的延迟</p></li><li><p>场景：常用于文件传输、网页浏览、电子邮件等</p></li></ul></div><hr><h3 id="udp" tabindex="-1">UDP <a class="header-anchor" href="#udp" aria-label="Permalink to &quot;UDP&quot;">​</a></h3><p>用户数据报协议（User Datagram Protocol），是 <a href="#tcp-ip">TCP/IP模型</a> 中的传输层协议之一</p><div class="tip custom-block"><p class="custom-block-title">关于UDP</p><ul><li><p>特点：它为应用程序提供了一种无需建立连接，就可以发送封装的 IP 数据包的方法</p></li><li><p>优劣：虽然效率高，但是稳定性并不强</p></li><li><p>场景：常用于音频、视频、实时游戏等</p></li></ul></div><hr><h3 id="http" tabindex="-1">HTTP <a class="header-anchor" href="#http" aria-label="Permalink to &quot;HTTP&quot;">​</a></h3><p>超文本传输协议(HyperText Transfer Protocol)，缩写：HTTP</p><div class="tip custom-block"><p class="custom-block-title">关于HTTP</p><ul><li><p>特点：基于 <a href="#tcp">TCP协议</a> ，用于从Web服务器传输超文本到本地浏览器的传送协议，是一种是无状态协议，使用cookie和session开管理。最新的版本为 HTTP/3 ，采用基于 <a href="#quic">UDP协议的QUIC</a></p></li><li><p>优劣：使用明文不加密；无法验证数据完整性；不验证身份</p></li><li><p>场景：HTML 文件、图片文件、查询结果等</p></li></ul></div><hr><h3 id="https" tabindex="-1">HTTPS <a class="header-anchor" href="#https" aria-label="Permalink to &quot;HTTPS&quot;">​</a></h3><p>超文本传输安全协议(Hypertext Transfer Protocol Secure)，缩写：HTTPS</p><div class="tip custom-block"><p class="custom-block-title">关于HTPS</p><ul><li><p>特点：基于 <a href="#tcp">TCP协议</a> ，它在 HTTP 下增加了 <a href="#tls">SSL/TLS协议</a> ，提供了数据加密、完整性校验和身份验证</p></li><li><p>优劣：资源消耗大，由于加解密处理消耗更多的CPU和内存资源</p></li><li><p>端口区别：HTTP默认的端口号为80；HTTPS的端口号为443</p></li></ul></div><hr><h3 id="quic" tabindex="-1">QUIC <a class="header-anchor" href="#quic" aria-label="Permalink to &quot;QUIC&quot;">​</a></h3><p>谷歌公司开发的一种全新的传输协议，全称：quick</p><div class="tip custom-block"><p class="custom-block-title">关于QUIC</p><ul><li><p>特点：基于 <a href="#udp">UDP协议</a>，可实现可靠传输、快速握手、拥塞控制、加密等功能</p></li><li><p>优劣：连接建立速度快、可以多路复用、头部压缩；但现有的网络设施兼容支持差</p></li><li><p>场景：被广泛运用到 HTTP/3 中</p></li></ul></div><hr><h3 id="ws" tabindex="-1">WS <a class="header-anchor" href="#ws" aria-label="Permalink to &quot;WS&quot;">​</a></h3><p>WebSocket是一种在单个TCP连接上进行全双工通信的协议，简称：WS</p><div class="tip custom-block"><p class="custom-block-title">关于WS</p><ul><li><p>特点：基于 <a href="#tcp">TCP协议</a> ，使用HTTP协议进行握手，使用TCP协议进行传输</p></li><li><p>优劣：更高的实时性；但的兼容性差、占用较多服务器资源、数据完整性和安全性有待提升</p></li></ul></div><hr><h3 id="ssh" tabindex="-1">SSH <a class="header-anchor" href="#ssh" aria-label="Permalink to &quot;SSH&quot;">​</a></h3><p>安全外壳协议(Secure Shell Protocol)，简称：SSH</p><div class="tip custom-block"><p class="custom-block-title">关于SSH</p><p>特点：基于 <a href="#tcp-ip">TCP/IP协议</a> 应用层上的加密的网络传输协议</p><p>优劣：数据加密传输、防止身份伪造；加解密会增加延迟，不支持硬件加速</p><p>场景：常用于远程登录系统、隧道传输或端口转发</p></div><hr><h3 id="kcp" tabindex="-1">KCP <a class="header-anchor" href="#kcp" aria-label="Permalink to &quot;KCP&quot;">​</a></h3><p>KCP以浪费 10%-20% 的带宽的代价，换取平均延迟降低 30%-40% 的传输效果</p><p>仓库：<a href="https://github.com/skywind3000/kcp" target="_blank" rel="noreferrer">https://github.com/skywind3000/kcp</a></p><div class="tip custom-block"><p class="custom-block-title">对比TCP</p><p>TCP保证数据准确交付，UDP保证数据快速到达</p><p>KCP则是两种协议的一个折中，在力求在保证可靠性的情况下提高传输速度</p></div><hr><h3 id="mkcp" tabindex="-1">mKCP <a class="header-anchor" href="#mkcp" aria-label="Permalink to &quot;mKCP&quot;">​</a></h3><p>mKCP是一个基于 UDP 的流式传输协议，由 KCP 协议修改而来，可以按顺序传输任意的数据流</p><div class="tip custom-block"><p class="custom-block-title">对比TCP</p><p>mKCP 同样也是牺牲带宽来降低延迟，传输同样的内容，mKCP 一般比 TCP 消耗更多的流量</p></div><hr><h3 id="kcptun" tabindex="-1">KCPTUN <a class="header-anchor" href="#kcptun" aria-label="Permalink to &quot;KCPTUN&quot;">​</a></h3><p>Kcptun 基于 KCP 协议的 UDP 隧道，它可以将 TCP 流转换为 KCP+UDP 流</p><p>仓库：<a href="https://github.com/xtaci/kcptun" target="_blank" rel="noreferrer">https://github.com/xtaci/kcptun</a></p><h2 id="安全协议" tabindex="-1">安全协议 <a class="header-anchor" href="#安全协议" aria-label="Permalink to &quot;安全协议&quot;">​</a></h2><h3 id="tls" tabindex="-1">TLS <a class="header-anchor" href="#tls" aria-label="Permalink to &quot;TLS&quot;">​</a></h3><p>传输层安全性协议(Transport Layer Security)，缩写：TLS</p><div class="tip custom-block"><p class="custom-block-title">关于SSL</p><p>TLS的前身就是安全套接层（SSL，Secure Sockets Layer）</p><ul><li><p>特点：基于 <a href="#tcp-ip">TCP/IP协议</a> 上实现的一种安全协议，采用公开密钥技术</p></li><li><p>优劣：密码算法过时，容易被破解，现已用TLS代替</p></li></ul><details class="details custom-block"><summary>SSL不使用了，浏览器却还是SSL证书</summary><p>浏览器中使用的数字证书（Digital Certificate），早期是SSL</p><p>但后来由于安全问题已经废弃，如今使用的都是TLS，也称：SSL/TLS 证书</p></details></div><div class="tip custom-block"><p class="custom-block-title">关于TLS</p><ul><li><p>特点：基于 <a href="#tcp-ip">TCP/IP协议</a> 上实现的一种安全协议</p></li><li><p>优劣：加密、数据完整性、身份认证；加解密会消耗CPU资源</p></li></ul></div><hr><h3 id="xtls" tabindex="-1">XTLS <a class="header-anchor" href="#xtls" aria-label="Permalink to &quot;XTLS&quot;">​</a></h3><p>由 <a href="https://github.com/XTLS/" target="_blank" rel="noreferrer">Project X Community</a> 开发并维护，基于 <a href="#tls">TLS 1.3</a> 开发的网络代理工具</p><div class="tip custom-block"><p class="custom-block-title">关于XTLS</p><ul><li><p>特点：使用 <a href="#tls">TLS 1.3 协议</a> 握手，<a href="#tcp">TCP协议</a> 进行传输</p></li><li><p>优劣：通过混淆、伪装和流量控制等技术，增加了网络流量的隐蔽性和安全性；但可能会减慢通信速度</p></li></ul></div><h2 id="代理协议" tabindex="-1">代理协议 <a class="header-anchor" href="#代理协议" aria-label="Permalink to &quot;代理协议&quot;">​</a></h2><h3 id="http-s" tabindex="-1">HTTP(S) <a class="header-anchor" href="#http-s" aria-label="Permalink to &quot;HTTP(S)&quot;">​</a></h3><p>HTTP 代理协议是一种基于 <a href="#http">HTTP协议</a> 的特定协议，用于实现代理服务器</p><div class="tip custom-block"><p class="custom-block-title">关于HTTP代理协议</p><ul><li><p>特点：它允许客户端通过一个中间服务器来访问其他服务器上的资源</p></li><li><p>优劣：提高网速、隐藏真实IP；但增加了带宽消耗，数据可能被篡改或泄露</p></li><li><p>区别：HTTP协议，用于传输数据；HTTP代理协议，用于代理</p></li></ul></div><hr><h3 id="socks5" tabindex="-1">socks5 <a class="header-anchor" href="#socks5" aria-label="Permalink to &quot;socks5&quot;">​</a></h3><p>防火墙安全会话转换协议(Protocol for sessions traversal across firewall securel)，简称socks，最新的版本为：socks5</p><div class="tip custom-block"><p class="custom-block-title">关于SOCKS5</p><ul><li><p>特点：基于 <a href="#tcp-ip">TCP/IP协议</a>，用于客户端与外网服务器之间通讯的中间传递</p></li><li><p>优劣：速度比 HTTP 快，但数据是明文没有加密，需配合 SSL/TLS 进行加密</p></li></ul></div><hr><h3 id="shadowsocks" tabindex="-1">Shadowsocks <a class="header-anchor" href="#shadowsocks" aria-label="Permalink to &quot;Shadowsocks&quot;">​</a></h3><p>一种基于 <a href="#socks5">Socks5代理</a> 方式的加密传输协议，中文名影梭，简称：SS</p><p>官网：<a href="https://shadowsocks.org/" target="_blank" rel="noreferrer">https://shadowsocks.org/</a></p><p>仓库：<a href="https://github.com/shadowsocks/shadowsocks-rust" target="_blank" rel="noreferrer">https://github.com/shadowsocks/shadowsocks-rust</a></p><p>客户端：<a href="https://github.com/shadowsocks/shadowsocks-android/releases" target="_blank" rel="noreferrer">安卓端</a>丨<a href="https://github.com/shadowsocks/shadowsocks-windows/releases" target="_blank" rel="noreferrer">PC端</a>丨<a href="https://github.com/shadowsocks/ShadowsocksX-NG/releases/" target="_blank" rel="noreferrer">Mac端</a></p><div class="tip custom-block"><p class="custom-block-title">历史进程</p><ul><li><p>2012年4月，V2EX论坛用户 <a href="https://github.com/Clowwindy" target="_blank" rel="noreferrer">@clowwindy</a> 发布第一个翻墙协议 Shadowsocks</p></li><li><p>2015年8月22日，作者 <a href="https://github.com/Clowwindy" target="_blank" rel="noreferrer">@clowwindy</a> 称受到了中国警方的压力，宣布停止维护此计划（项目）并移除其GitHub个人页面所存储的源代码</p></li><li><p>目前由老外维护</p></li></ul></div><hr><h3 id="shadowsocksr" tabindex="-1">ShadowsocksR <a class="header-anchor" href="#shadowsocksr" aria-label="Permalink to &quot;ShadowsocksR&quot;">​</a></h3><p>在 <a href="#shadowsocks">Shadowsocks</a> 的 <a href="#socks5">Socks5</a> 基础上添加了混淆协议，简称：SSR</p><p>客户端：<a href="https://github.com/shadowsocksrr/shadowsocksr-android/releases" target="_blank" rel="noreferrer">安卓端</a>丨<a href="https://github.com/shadowsocksr-rm/shadowsocksr-csharp/releases" target="_blank" rel="noreferrer">PC端</a></p><div class="tip custom-block"><p class="custom-block-title">历史进程</p><ul><li><p>2016年，<a href="https://github.com/breakwa11" target="_blank" rel="noreferrer">@breakwa11</a> 发起的Shadowsocks分支并对其进行了一些优化</p></li><li><p>2017年7月27日，破娃 <a href="https://github.com/breakwa11" target="_blank" rel="noreferrer">@breakwa11</a> 遭到人肉，删除了GitHub上的所有代码、解散交流群组</p></li></ul></div><hr><h3 id="vmess-v2ray" tabindex="-1">VMess(V2Ray) <a class="header-anchor" href="#vmess-v2ray" aria-label="Permalink to &quot;VMess(V2Ray)&quot;">​</a></h3><p>在 <a href="#shadowsocks">Shadowsocks</a> 被封杀后，V2Ray成立，VMess协议是其专属的加密通讯协议</p><p>官网：<a href="https://www.v2ray.com/" target="_blank" rel="noreferrer">https://www.v2ray.com/</a></p><p>仓库：<a href="https://github.com/v2ray/v2ray-core" target="_blank" rel="noreferrer">https://github.com/v2ray/v2ray-core</a></p><div class="tip custom-block"><p class="custom-block-title">历史进程</p><ul><li><p>2019年，Victoria Raymond以及其社区团队开发的反审查工具</p></li><li><p>2019年2月，V2Ray项目创始人Victoria Raymond突然消失，其Twitter、Telegram以及知乎停止更新</p></li><li><p>2019年，新的社区V2Fly成立，后续关于 V2Ray 的更新都由 V2Fly 社区负责</p></li></ul><p>V2Ray 现在已经是 Project V 项目的核心工具，而 Project V 是一个平台</p></div><div class="warning custom-block"><p class="custom-block-title">关于VMess</p><p>全称 Virtual Machine Encryption Security Service，简称VMess，它是一种基于TLS的网络传输协议，用于建立安全的TCP和UDP连接</p><p>支持协议：</p><ul><li><p>Blackhole(出站协议)</p></li><li><p>Dokodemo-door(入站协议)</p></li><li><p>Freedom(出站协议)</p></li><li><p>HTTP(HTTP代理协议)</p></li><li><p>MTProto(telegram专用协议)</p></li><li><p>Shadowsocks(梯子协议，不支持SSR)</p></li><li><p>Socks(传统代理协议)</p></li><li><p>VMess(v2ray专用加密传输协议)</p></li><li><p>Vless(xray协议)</p></li></ul></div><hr><h3 id="trojan" tabindex="-1">Trojan <a class="header-anchor" href="#trojan" aria-label="Permalink to &quot;Trojan&quot;">​</a></h3><p>利用 <a href="#tls">TLS</a> 加密方式的协议，全称为Trojan-GFW，2019年沿用至今，是目前最成功的科学上网伪装技术之一</p><p>官网：<a href="https://trojan-gfw.github.io/trojan/" target="_blank" rel="noreferrer">https://trojan-gfw.github.io/trojan/</a></p><p>仓库：<a href="https://github.com/trojan-gfw/trojan" target="_blank" rel="noreferrer">https://github.com/trojan-gfw/trojan</a></p><div class="tip custom-block"><p class="custom-block-title">简介</p><ul><li><p>原理：Trojan通过监听443端口，模仿互联网上最常见的 HTTPS 协议，把合法的Trojan代理数据伪装成正常的 HTTPS 通信，并真正地完整完成的TLS 握手，以诱骗GFW认为它就是 HTTPS，从而不被识别，但无法配合CDN使用。</p></li><li><p>对比：Trojan是V2Ray的 <a href="#ws">WS</a>+<a href="#tls">TLS</a> 模式的精简版，速度比V2Ray更快，伪装比V2Ray更逼真，更难以被GFW识别</p></li></ul></div><hr><h3 id="trojan-go" tabindex="-1">Trojan-Go <a class="header-anchor" href="#trojan-go" aria-label="Permalink to &quot;Trojan-Go&quot;">​</a></h3><p>Trojan-Go 兼容原版 Trojan 的绝大多数功能，2020年沿用至今</p><p>官网：<a href="https://p4gefau1t.github.io/trojan-go/" target="_blank" rel="noreferrer">https://p4gefau1t.github.io/trojan-go/</a></p><p>仓库：<a href="https://github.com/p4gefau1t/trojan-go" target="_blank" rel="noreferrer">https://github.com/p4gefau1t/trojan-go</a></p><div class="tip custom-block"><p class="custom-block-title">新特性</p><ul><li><p>Websocket 传输支持，以实现 CDN 流量中转（基于 WebSocket over TLS）和对抗 GFW 中间人攻击</p></li><li><p>支持对用户更友好的 YAML 配置文件格式</p></li><li><p>自定义路由模块，可实现国内外分流 / 广告屏蔽等功能</p></li></ul></div><hr><h3 id="shadowtls" tabindex="-1">ShadowTLS <a class="header-anchor" href="#shadowtls" aria-label="Permalink to &quot;ShadowTLS&quot;">​</a></h3><p>一个可以使用别人的受信证书的 TLS 伪装代理</p><p>官网：<a href="https://www.ihcblog.com/a-better-tls-obfs-proxy/" target="_blank" rel="noreferrer">https://www.ihcblog.com/a-better-tls-obfs-proxy/</a></p><p>仓库：<a href="https://github.com/ihciah/shadow-tls" target="_blank" rel="noreferrer">https://github.com/ihciah/shadow-tls</a></p><div class="tip custom-block"><p class="custom-block-title">对比Trojan</p><p>它和 trojan 的表现类似，但它在做真实 TLS 握手的同时，可以直接使用别人的受信证书（如某些大公司或机构的域名）,而不需要自己签发证书</p><p>当直接使用浏览器打开时，可以正常显示对应可信域名的网页内容</p></div><hr><h3 id="vless-xray" tabindex="-1">VLESS(Xray) <a class="header-anchor" href="#vless-xray" aria-label="Permalink to &quot;VLESS(Xray)&quot;">​</a></h3><p>Xray是 <a href="#vmess-v2ray">V2ray</a> 的升级版，包含V2ray所有协议，以及新的VLESS协议</p><p>仓库：<a href="https://github.com/XTLS/Xray-core" target="_blank" rel="noreferrer">https://github.com/XTLS/Xray-core</a></p><p>XrayR:<a href="https://github.com/XrayR-project/XrayR" target="_blank" rel="noreferrer">基于Xray的后端框架</a></p><div class="tip custom-block"><p class="custom-block-title">历史进程</p><ul><li>2020年11月，因为开源许可证等原因 <a href="https://github.com/XTLS" target="_blank" rel="noreferrer">@XTLS</a> 被V2Ray社区从V2ray core移除，<a href="https://github.com/XTLS" target="_blank" rel="noreferrer">@XTLS</a> 和 <a href="https://github.com/RPRX" target="_blank" rel="noreferrer">@rprx</a> 另行组建了 <a href="https://github.com/XTLS/" target="_blank" rel="noreferrer">Project X</a> 组织，开发了基于V2Ray的派生版本Xray</li></ul></div><div class="warning custom-block"><p class="custom-block-title">关于VLESS</p><p>简介：VLESS 是一个无状态的轻量传输协议，最突出的就是它可以配合 <a href="#xtls">XTLS</a> 进行数据加密，效果更好、性能更强</p><p>优势：在使用 TLS 的情况下，VLess 协议比 VMess 速度更快，性能更好，因为 VLess 不会对数据进行加解密</p></div><hr><h3 id="hysteria2" tabindex="-1">Hysteria2 <a class="header-anchor" href="#hysteria2" aria-label="Permalink to &quot;Hysteria2&quot;">​</a></h3><p>Hysteria 2 基于经过修改的 <a href="#quic">QUIC协议</a> ，简称hy2</p><p>官网：<a href="https://v2.hysteria.network/zh/" target="_blank" rel="noreferrer">https://v2.hysteria.network/zh/</a></p><p>仓库：<a href="https://github.com/apernet/hysteria" target="_blank" rel="noreferrer">https://github.com/apernet/hysteria</a></p><div class="tip custom-block"><p class="custom-block-title">关于hy2</p><ul><li>特点：伪装成标准的 HTTP/3 流量，有很强的的防封锁能力；但是无法套CDN</li></ul></div><hr><h3 id="mieru" tabindex="-1">mieru <a class="header-anchor" href="#mieru" aria-label="Permalink to &quot;mieru&quot;">​</a></h3><p>mieru【見える】是一款安全的、无流量特征、难以主动探测的，基于 TCP 或 UDP 协议的 socks5 / HTTP / HTTPS 网络代理软件</p><p>仓库：<a href="https://github.com/enfein/mieru" target="_blank" rel="noreferrer">https://github.com/enfein/mieru</a></p><div class="tip custom-block"><p class="custom-block-title">关于mieru</p><ul><li><p>原理：mieru 的翻墙原理与 shadowsocks / v2ray 等软件类似，在客户端和墙外的代理服务器之间建立一个加密的通道。GFW 不能破解加密传输的信息，无法判定你最终访问的网址，因此只能选择放行</p></li><li><p>特性：实现客户端和代理服务器之间所有传输内容的完整加密</p></li></ul></div><hr><h3 id="naive" tabindex="-1">naive <a class="header-anchor" href="#naive" aria-label="Permalink to &quot;naive&quot;">​</a></h3><p>消除了客户端的tls指纹和tls-in-tls特征</p><p>仓库：<a href="https://github.com/klzgrad/naiveproxy/" target="_blank" rel="noreferrer">https://github.com/klzgrad/naiveproxy/</a></p><div class="tip custom-block"><p class="custom-block-title">历史进程</p><ul><li><p>NaiveProxy，挪威语叫NaïveProxy，翻译成中文：天真的代理</p></li><li><p>2019年底由klzgrad大神开发的一种突破GFW网络审查的新型科学上网代理技术，它使用Chrome的网络堆栈来伪装流量，具有较强的抗审查能力和较低的可检测性，重用Chrome网络堆栈是确保性能和安全性的最佳实践</p></li></ul></div><div class="warning custom-block"><p class="custom-block-title">对比Trojan</p><p>Trojan最大的优点就是伪装成互联网最常见的HTTPS流量，而NaiveProxy最大的优势不仅伪装成 HTTP/2 的流量</p><p>而且使用互联网最常用的浏览器Chrome网络堆栈的指纹，更加难以被识别，而且这些也是Go语言模仿不了的</p></div><hr><h3 id="tuic" tabindex="-1">tuic <a class="header-anchor" href="#tuic" aria-label="Permalink to &quot;tuic&quot;">​</a></h3><p>个人开发者 <a href="https://github.com/EAimTY/" target="_blank" rel="noreferrer">@EAimTY</a> 基于 <a href="#quic">QUIC协议</a> 开发的新代理工具</p><p>仓库：<a href="https://github.com/EAimTY/tuic" target="_blank" rel="noreferrer">https://github.com/EAimTY/tuic</a></p><div class="tip custom-block"><p class="custom-block-title">关于tuic</p><p>已删库，<a href="https://www.eaimty.com/2023/opensource-project-based-on-hormone/" target="_blank" rel="noreferrer">删库说明</a></p></div><hr><h3 id="brook" tabindex="-1">Brook <a class="header-anchor" href="#brook" aria-label="Permalink to &quot;Brook&quot;">​</a></h3><p>Brook 是一个高效的 Socks5 代理软件，官方支持Windows、Linux、MacOS、IOS、Android、树莓派等设备</p><p>官网：<a href="https://brook.app/" target="_blank" rel="noreferrer">https://brook.app/</a></p><p>仓库：<a href="https://github.com/txthinking/brook" target="_blank" rel="noreferrer">https://github.com/txthinking/brook</a></p><div class="tip custom-block"><p class="custom-block-title">支持协议</p><p>Brook（自主研发新版）、Stream Brook（旧版）协议、Shadowsocks 协议、SOCKS5 协议等</p></div>',143)]))}const f=t(p,[["render",c]]);export{m as __pageData,f as default};
