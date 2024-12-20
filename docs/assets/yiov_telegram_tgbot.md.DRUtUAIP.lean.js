import{_ as e,c as r,a4 as a,o as l}from"./chunks/framework.CyeRpf1z.js";const o="/tgbot/tgbot-01.png",p="/tgbot/tgbot-02.png",i="/tgbot/tgbot-03.png",n="/tgbot/tgbot-04.png",s="/tgbot/tgbot-05.png",h="/tgbot/tgbot-06.png",b="/tgbot/tgbot-07.png",g="/tgbot/tgbot-08.png",f="/tgbot/tgbot-09.png",m="/tgbot/tgbot-10.png",c="/tgbot/tgbot-11.png",d="/tgbot/tgbot-12.png",_="/tgbot/tgbot-13.png",k="/tgbot/tgbot-14.png",u="/tgbot/tgbot-15.png",P=JSON.parse('{"title":"创建自己的tg私聊机器人","description":"","frontmatter":{},"headers":[],"relativePath":"yiov/telegram/tgbot.md","filePath":"yiov/telegram/tgbot.md","lastUpdated":null}'),B={name:"yiov/telegram/tgbot.md"};function y(v,t,S,T,w,D){return l(),r("div",null,t[0]||(t[0]=[a('<h1 id="创建自己的tg私聊机器人" tabindex="-1">创建自己的tg私聊机器人 <a class="header-anchor" href="#创建自己的tg私聊机器人" aria-label="Permalink to &quot;创建自己的tg私聊机器人&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">(当前界面文档全部来自yiov.top)</p><ul><li><a href="https://yiov.top/" target="_blank" rel="noreferrer">yiov</a>「伊奥&#39;s 教程集」</li></ul></div><h2 id="准备" tabindex="-1">准备 <a class="header-anchor" href="#准备" aria-label="Permalink to &quot;准备&quot;">​</a></h2><p>2个bot即可</p><ul><li><p><a href="https://t.me/BotFather" target="_blank" rel="noreferrer">BotFather</a></p></li><li><p><a href="https://t.me/CSFatherBot" target="_blank" rel="noreferrer">CSFather</a> 或者 <a href="https://t.me/LivegramBot" target="_blank" rel="noreferrer">Livegram Bot</a></p></li></ul><h2 id="创建机器人" tabindex="-1">创建机器人 <a class="header-anchor" href="#创建机器人" aria-label="Permalink to &quot;创建机器人&quot;">​</a></h2><p>在tg上搜索 <code>BotFather</code> 并开始 <code>/start</code> 和机器人对话</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>机器人之父，是所有机器人建立的基础</p></div><p><img src="'+o+'" alt="" loading="lazy"></p><p>意思都比较简单，实在看不懂就参照翻译操作</p><p><img src="'+p+'" alt="" loading="lazy"></p><p>点击 <code>/newbot</code> 创建一个机器人，给机器人取个昵称，中英文都可以，最后给他设置一个tg名</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>方便在tg直接搜索，类似于微信名</p></div><p>成功创建会得到一个tg机器人链接和最最重要的API授权令牌</p><p><img src="'+i+'" alt="" loading="lazy"></p><p>点击 <code>/setdescription</code> 给机器人设置一个描述</p><p><img src="'+n+'" alt="" loading="lazy"></p><p>再点击 <code>/setabouttext</code> ，选择机器人，设置个人资料卡的简介</p><p><img src="'+s+'" alt="" loading="lazy"></p><p>最后点击<code>/setuserpic</code> ，选择机器人，设置机器人的头像</p><p><img src="'+h+'" alt="" loading="lazy"></p><p>这样我们的机器人就创建完成了</p><p><img src="'+b+'" alt="" loading="lazy"></p><p>机器人可以衍生出非常多功能，就说一个最常用的私聊信息转发</p><p>需要用到机器人 <code>CSFather</code> 或者 <code>Livegram Bot</code> ，我用CSFather演示</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>CSFather第三方bot，支持中文，功能多</p><p>Livegram Bot官方bot，英文，功能少</p></div><p><img src="'+g+'" alt="" loading="lazy"></p><p>对话机器人后，点击 <code>/lang</code> 设置成 <code>中文简体</code></p><p><img src="'+f+'" alt="" loading="lazy"></p><p>点击新接一个机器人，根据提示粘贴之前的API令牌，就成功了</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>之前的步骤他这里也有视频演示</p></div><p><img src="'+m+'" alt="" loading="lazy"></p><p>其他功能不演示了，来看看消息发送是否正常</p><p><img src="'+c+'" alt="" loading="lazy"></p><p>用另一个号发消息，本机接收消息预览</p><p><img src="'+d+'" alt="" loading="lazy"></p><p><img src="'+_+'" alt="" loading="lazy"></p><h2 id="删除机器人" tabindex="-1">删除机器人 <a class="header-anchor" href="#删除机器人" aria-label="Permalink to &quot;删除机器人&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">注意</p><p>删除就直接销号，无法找回</p></div><p>点击 <code>/deletebot</code> ，选择机器人，按提示输入确定删除</p><p><img src="'+k+'" alt="" loading="lazy"></p><p>删除后，原帐号变成 <code>已销号</code></p><p><img src="'+u+'" alt="" loading="lazy"></p><h2 id="其他机器人" tabindex="-1">其他机器人 <a class="header-anchor" href="#其他机器人" aria-label="Permalink to &quot;其他机器人&quot;">​</a></h2><p>tg机器人目录：<a href="https://botostore.com/bots/telegram/" target="_blank" rel="noreferrer">https://botostore.com/bots/telegram/</a></p><h3 id="官方" tabindex="-1">官方 <a class="header-anchor" href="#官方" aria-label="Permalink to &quot;官方&quot;">​</a></h3><ul><li><p><a href="https://t.me/BotFather" target="_blank" rel="noreferrer">@BotFather：tg官方机器人创建</a></p></li><li><p><a href="https://t.me/BotSupport" target="_blank" rel="noreferrer">@Bot Support：tg官方问题和建议反馈机器人</a></p></li><li><p><a href="https://t.me/discussbot" target="_blank" rel="noreferrer">@DiscussBot：tg官方频道评论通知机器人</a></p></li><li><p><a href="https://t.me/GmailBot" target="_blank" rel="noreferrer">@Gmail Bot：tg官方收发gmail机器人</a></p></li><li><p><a href="https://t.me/gamebot" target="_blank" rel="noreferrer">@GameBot：tg官方游戏平台demo机器人</a></p></li><li><p><a href="https://t.me/SpamBot" target="_blank" rel="noreferrer">@Spam Info Bot：tg官方垃圾信息机器人，可解除私聊限制</a></p></li><li><p><a href="https://t.me/Stickers" target="_blank" rel="noreferrer">@ Stickers Bot：tg官方贴纸表情包制作机器人</a></p></li><li><p><a href="https://t.me/telegraph" target="_blank" rel="noreferrer">@Telegraph：tg官方Telegraph登录和管理机器人</a></p></li></ul><h3 id="音乐" tabindex="-1">音乐 <a class="header-anchor" href="#音乐" aria-label="Permalink to &quot;音乐&quot;">​</a></h3><ul><li><p><a href="https://t.me/encoderbot" target="_blank" rel="noreferrer">@Audio Converter：将音乐文件转换成AAC+格式</a></p></li><li><p><a href="https://t.me/mp3toolsbot" target="_blank" rel="noreferrer">@MP3 Tools：音乐格式__转换/剪辑等</a></p></li><li><p><a href="https://t.me/Music163bot" target="_blank" rel="noreferrer">@Music163bot：网易云音乐下载</a></p></li><li><p><a href="https://t.me/ChinoNyanBot" target="_blank" rel="noreferrer">@チノ喵：网易云音乐下载</a></p></li><li><p><a href="https://t.me/SongIDbot" target="_blank" rel="noreferrer">@Song🆔：音乐识别，听歌识曲</a></p></li><li><p><a href="https://t.me/spotifybot" target="_blank" rel="noreferrer">@Spotify：搜索并下载Spotify歌曲</a></p></li></ul><h3 id="二维码" tabindex="-1">二维码 <a class="header-anchor" href="#二维码" aria-label="Permalink to &quot;二维码&quot;">​</a></h3><ul><li><p><a href="https://t.me/MakeQrBot" target="_blank" rel="noreferrer">@QrCode Bot：二维码生成，支持文字/链接</a></p></li><li><p><a href="https://t.me/LinkGeneratorBot" target="_blank" rel="noreferrer">@URL Shortener：短网址生成，支持bit.ly/q.gs/tinyurl.com</a></p></li><li><p><a href="https://t.me/ScanAnyQRbot" target="_blank" rel="noreferrer">@Scan Any QR Code：二维码识别，链接生成</a></p></li></ul><h3 id="文件" tabindex="-1">文件 <a class="header-anchor" href="#文件" aria-label="Permalink to &quot;文件&quot;">​</a></h3><ul><li><p><a href="https://t.me/AlertBot" target="_blank" rel="noreferrer">@Alert Bot：消息提醒工具，可指定时间</a></p></li><li><p><a href="https://t.me/ctdwnbot" target="_blank" rel="noreferrer">@Countdown：设置倒计时天数提醒</a></p></li><li><p><a href="https://t.me/DrWebBot" target="_blank" rel="noreferrer">@Dr.Web：查看文件是否有病毒</a></p></li><li><p><a href="https://t.me/VirusTotalAV_bot" target="_blank" rel="noreferrer">@VirusTotal：查看文件是否有病毒</a></p></li><li><p><a href="https://t.me/GetPublicLinkBot" target="_blank" rel="noreferrer">@Get Public Link Bot：发送文件获取下载链接</a></p></li><li><p><a href="https://t.me/tlgurbot" target="_blank" rel="noreferrer">@tlgur：tg文件托管服务，发送文件获取链接</a></p></li><li><p><a href="https://t.me/TGhost_bot" target="_blank" rel="noreferrer">@TGhost — file sharing：发送文件获取下载链接</a></p></li><li><p><a href="https://t.me/WangPanBOT" target="_blank" rel="noreferrer">@网盘机器人：免费，支持文件/视频/图片/音乐上传</a></p></li><li><p><a href="https://t.me/NephoBot" target="_blank" rel="noreferrer">@Nepho：在线网盘</a></p></li><li><p><a href="https://t.me/TheTimeBot" target="_blank" rel="noreferrer">@Time：发送位置可获得当地的时间</a></p></li><li><p><a href="https://github.com/qwe7002/telegram-sms" target="_blank" rel="noreferrer">@telegram-sms：安卓短信自动转发到其他手机上</a></p></li></ul><h3 id="信息" tabindex="-1">信息 <a class="header-anchor" href="#信息" aria-label="Permalink to &quot;信息&quot;">​</a></h3><ul><li><p><a href="https://t.me/getidsbot" target="_blank" rel="noreferrer">@GetIDs Bot：查看个人tg电报ID/注册日期</a></p></li><li><p><a href="https://t.me/getuseridbot" target="_blank" rel="noreferrer">@getuserID：获取个人电报id</a></p></li><li><p><a href="https://t.me/getmyid_bot" target="_blank" rel="noreferrer">@Get My ID：获取个人电报id</a></p></li><li><p><a href="https://t.me/GroupIDbot" target="_blank" rel="noreferrer">@GroupID：获取对话ID</a></p></li><li><p><a href="https://t.me/RawDataBot" target="_blank" rel="noreferrer">@Telegram Bot Raw：获取频道、群组和用户信息</a></p></li><li><p><a href="https://t.me/userinfobot" target="_blank" rel="noreferrer">@userinfobot：获取个人电报ID</a></p></li><li><p><a href="https://t.me/pingansgk_bot" target="_blank" rel="noreferrer">@平安社工库：个人信息查询</a></p></li></ul><h3 id="贴纸" tabindex="-1">贴纸 <a class="header-anchor" href="#贴纸" aria-label="Permalink to &quot;贴纸&quot;">​</a></h3><ul><li><p><a href="https://t.me/giftubebot" target="_blank" rel="noreferrer">@GifTube：截取油管视频片段生成Gif</a></p></li><li><p><a href="https://t.me/reverseSearchBot" target="_blank" rel="noreferrer">@Reverse Search Bot：图片/GIF/贴纸来源搜索，还支持动漫截图识别</a></p></li><li><p><a href="https://t.me/tgstogifbot" target="_blank" rel="noreferrer">@stickers to GIF convert：将tg动态贴纸表情包转换成GIF格式</a></p></li><li><p><a href="https://t.me/tgstowebpbot" target="_blank" rel="noreferrer">@stickers to Webp convert：将tg动态贴纸表情包转换成Webp格式</a></p></li><li><p><a href="https://t.me/Stickerdownloadbot" target="_blank" rel="noreferrer">@Sticker Download：tg贴纸表情包下载，支持任何图片和压缩包格式</a></p></li><li><p><a href="https://t.me/stickerset2packbot" target="_blank" rel="noreferrer">@StickerSetBot：tg静态贴纸表情包下载，发送贴纸链接</a></p></li><li><p><a href="https://t.me/GIFDownloader_bot" target="_blank" rel="noreferrer">@TG Downloader：tg表情包下载，支持图片/视频</a></p></li><li><p><a href="https://t.me/big_text_bot" target="_blank" rel="noreferrer">@Text sticker：大字图生成机器人</a></p></li><li><p><a href="https://t.me/youqianbot" target="_blank" rel="noreferrer">@为所欲为：有钱就可以为所欲为的表情包生成机器人</a></p></li><li><p><a href="https://t.me/wangjingze_bot" target="_blank" rel="noreferrer">@王境泽：王境泽真香的表情包生成机器人</a></p></li></ul><h3 id="视频" tabindex="-1">视频 <a class="header-anchor" href="#视频" aria-label="Permalink to &quot;视频&quot;">​</a></h3><ul><li><p><a href="https://t.me/allsaverbot" target="_blank" rel="noreferrer">@All Saver：油管/ins/TikTok/Pinterest下载</a></p></li><li><p><a href="https://t.me/AudioTubeBot" target="_blank" rel="noreferrer">@AudioTubeBot：解析下载油管/VK视频里的音频</a></p></li><li><p><a href="https://t.me/DownloadsMasterBot" target="_blank" rel="noreferrer">@Downloads Master：油管/Spotify/Ins/TikTok/推特/脸书/Reddit/Twitch下载</a></p></li><li><p><a href="https://t.me/twitterdlrobot" target="_blank" rel="noreferrer">@TwitterDlrobot：推特视频下载</a></p></li><li><p><a href="https://t.me/TwitterDownloaderBot" target="_blank" rel="noreferrer">@Twitter Video Downloader：推特视频下载</a></p></li><li><p><a href="https://t.me/TorPurrBot" target="_blank" rel="noreferrer">@TorPurrBot：油管/tiktok/种子/磁力下载</a></p></li><li><p><a href="https://t.me/utubebot" target="_blank" rel="noreferrer">@utubebot：油管视频下载，也可转换成mp3</a></p></li><li><p><a href="https://t.me/youtube_downloader_bot2" target="_blank" rel="noreferrer">@youtube_dwnldr_bot：油管1080P视频下载</a></p></li><li><p><a href="https://t.me/VideoDownloadBot" target="_blank" rel="noreferrer">@Video Download Bot：推特/油管/脸书/TikTok下载</a></p></li><li><p><a href="https://t.me/YtbDownBot" target="_blank" rel="noreferrer">@YoutubeDL：油管/推特/脸书/TikTok下载</a></p></li><li><p><a href="https://t.me/YoutubeAudioDownloadBot" target="_blank" rel="noreferrer">@Youtube Audio Download：油管视频转音频(提取)</a></p></li></ul><h3 id="频道" tabindex="-1">频道 <a class="header-anchor" href="#频道" aria-label="Permalink to &quot;频道&quot;">​</a></h3><ul><li><p><a href="https://t.me/GetFilesRoBot" target="_blank" rel="noreferrer">@File Store Bot：解除频道禁止转发保存的媒体机器人</a></p></li><li><p><a href="https://t.me/GroupHelpBot" target="_blank" rel="noreferrer">@Group Help：群组管理机器人</a></p></li><li><p><a href="https://t.me/ixdbot" target="_blank" rel="noreferrer">@ixdbot：查到群组管理员的用户名、id、昵称、管理权限等</a></p></li><li><p><a href="https://t.me/tgLotteryBot" target="_blank" rel="noreferrer">@Lottery Bot V2：Telegram 中文公平抽奖机器人</a></p></li><li><p><a href="https://t.me/msg_get_bot" target="_blank" rel="noreferrer">@msg_getbot：频道消息提取器，破除频道转发限制</a></p></li><li><p><a href="https://t.me/keyworddel_bot" target="_blank" rel="noreferrer">@NoAdBot：自动删除群组推广/广告/菠菜等等消息</a></p></li><li><p><a href="https://t.me/policr_mini_bot" target="_blank" rel="noreferrer">@Policr Mini(beta)：进群验证机器人</a></p></li><li><p><a href="https://t.me/Buttoncreatingbot" target="_blank" rel="noreferrer">@Quality Button Creator - Banner Creator：频道通知底部的按键导航</a></p></li><li><p><a href="https://t.me/RestrictedContentBot" target="_blank" rel="noreferrer">@Restricted Content Bot：频道消息复制，破除频道复制限制</a></p></li><li><p><a href="https://t.me/SaveRestrictedBot" target="_blank" rel="noreferrer">@Save Restricted Content：破除频道转发复制限制</a></p></li><li><p><a href="https://t.me/MissRose_bot" target="_blank" rel="noreferrer">@Rose：进群验证机器人</a></p></li><li><p><a href="https://t.me/WooMaiBot" target="_blank" rel="noreferrer">@干物妹！小霾：频道群组管理机器人</a></p></li><li><p><a href="https://t.me/WuMingv2Bot" target="_blank" rel="noreferrer">@無名：频到管理机器人</a></p></li></ul><h3 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h3><ul><li><p><a href="https://t.me/apkdl_bot" target="_blank" rel="noreferrer">@APK Downloader：安卓apk文件下载，支持谷歌商店</a></p></li><li><p><a href="https://t.me/createAtthemeBot" target="_blank" rel="noreferrer">@Create .attheme：发送一张图片快速创建安卓tg主题</a></p></li><li><p><a href="https://t.me/CSFatherBot" target="_blank" rel="noreferrer">@CSFather：自行创建消息转发机器人</a></p></li><li><p><a href="https://t.me/LivegramBot" target="_blank" rel="noreferrer">@Livegram Bot：自行创建消息转发机器人</a></p></li><li><p><a href="https://t.me/FFQSubinfoBot" target="_blank" rel="noreferrer">@FFQSubinfoBot：机场订阅查询/流量查询</a></p></li><li><p><a href="https://t.me/libsan_bot" target="_blank" rel="noreferrer">@Free books downloader：搜索和下载 Library/Zlibrary的电子书</a></p></li><li><p><a href="https://t.me/bookdownbot" target="_blank" rel="noreferrer">@BookDown：电子书下载</a></p></li><li><p><a href="https://t.me/sosdbot" target="_blank" rel="noreferrer">@搜书神器Bot V1.1：全能的智能搜书机器人</a></p></li><li><p><a href="https://t.me/GitHubBot" target="_blank" rel="noreferrer">@GitHubBot：GitHub仓库状态更新通知</a></p></li><li><p><a href="https://t.me/imgbbpicbot" target="_blank" rel="noreferrer">@imgbb：图床机器人</a></p></li><li><p><a href="https://t.me/Instasave_bot" target="_blank" rel="noreferrer">@InstaSave：Instagram图片/头像下载</a></p></li><li><p><a href="https://t.me/Manybot" target="_blank" rel="noreferrer">@Manybot：创建自己的机器人</a></p></li><li><p><a href="https://t.me/MEGA_CONVERSION_BOT" target="_blank" rel="noreferrer">@MEGA_CONVERSION_BOT：视频/图片格式转换</a></p></li><li><p><a href="https://t.me/unzip_edm115bot" target="_blank" rel="noreferrer">@Unarchive files：压缩包解压，支持多种格式</a></p></li><li><p><a href="https://github.com/SpriteOvO/Telegram-Anti-Revoke" target="_blank" rel="noreferrer">@Telegram-Anti-Revoke：tg防撤回插件</a></p></li><li><p><a href="https://t.me/aishuazibot" target="_blank" rel="noreferrer">@ShziBot：AI换脸机器人</a></p></li><li><p><a href="https://t.me/RMBToUSDTBot" target="_blank" rel="noreferrer">@RMBToUSDTBot：买U机器人</a></p></li><li><p><a href="https://t.me/badujd_bot" target="_blank" rel="noreferrer">@8度节点机器人：24小时免费获取节点</a></p></li><li><p><a href="https://t.me/aliyunshare_bot" target="_blank" rel="noreferrer">@阿里云盘搜索机器人：阿里云盘资源搜索</a></p></li><li><p><a href="https://t.me/zhutibot" target="_blank" rel="noreferrer">@主题酱：tg主题收集</a></p></li></ul>',63)]))}const G=e(B,[["render",y]]);export{P as __pageData,G as default};
