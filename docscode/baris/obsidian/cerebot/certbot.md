---
title: windows下使用Certbot申请通配符证书
date: 2023-10-18 13:31:55
tags:
top_img: https://www.myfreax.com/content/images/size/w816/2019/07/certbot.webp
cover: https://www.myfreax.com/content/images/size/w816/2019/07/certbot.webp
---
# windows下使用Certbot申请通配符证书

本文档转发为https://zhuanlan.zhihu.com/p/627526278，如侵权联系删除
 
## 一、下载并安装软件
在这个网站下载最新的软件并安装
![avater](https://pic1.zhimg.com/80/v2-0f1de0a1cfd872d02d533c1b5f0a97a8_720w.webp)


```
https://github.com/certbot/certbot/
```


下载完成后直接双击安装就行了

安装完成后，以管理员方式运行cmd，输入cretbot --version，如果有显示就说明安装成功了
```bat
C:\Windows\System32>certbot --version certbot 2.5.0
```
命令行工具使用说明
```
用法:
  certbot [子命令] [选项] [-d 域名] [-d 域名] ...
​
Certbot工具用于获取和安装 HTTPS/TLS/SSL 证书。默认情况下，Certbot会尝试为本地网页服务器
(如果不存在会默认安装一个到本地)获取并安装证书。最常用的子命令和选项如下:
​
获取, 安装, 更新证书:
    (默认) run       获取并安装证书到当前网页服务器
    certonly        获取或更新证书，但是不安装
    renew           更新已经获取但快过期的所有证书
   -d 域名列表        指定证书对应的域名列表，域名之间使用逗号分隔
​
  --apache          使用Apache插件进行身份认证和安装
  --standalone      运行一个独立的网页服务器用于身份认证
  --nginx           使用Nginx插件进行身份认证和安装
  --webroot         把身份认证文件放置在服务器的网页根目录下
  --manual          使用交互式或脚本钩子的方式获取证书
​
   -n               非交互式运行
  --test-cert       从预交付服务器上获取测试证书
  --dry-run         测试获取或更新证书，但是不存储到本地硬盘
​
证书管理:
    certificates    显示使用Certbot生成的所有证书的信息
    revoke          撤销证书(supply --cert-path)
    delete          删除证书
```
## 二、申请通配符证书的命令
```
certbot certonly -d "*.fanpin.icu" -d fanpin.icu --manual --preferred-challenges dns-01 --server https://acme-v02.api.letsencrypt.org/directory
```
命令说明：

```
certonly 安装模式
-d 申请证书的域名，如果是通配符域名输入 *.http://example.com
–manual 使用交互式或脚本钩子的方式获取证书
–preferred-challenges dns 使用 DNS 方式校验域名所有权
–server，Let’s Encrypt ACME v2 版本使用的服务器不同于 v1 版本，需要显示指定
```


官网里v2说明


*.example.top换成你想要申请的域名就可以了，接下来，会提示需要进行手动验证DNS：

```
Saving debug log to C:\Certbot\log\letsencrypt.log
Requesting a certificate for *.example.top and example.top
​

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Please deploy a DNS TXT record under the name:
​
_acme-challenge.example.top.
​
with the following value:
​
MeZetcO-5n_7WeJIitM_eAR8lWUZ2EQriWOg1OxBcaE
​
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Press Enter to Continue

```

我的域名是阿里云申请的域名，去域名解析那手动添加一条TXT记录就可以了，我这里申请的是通配符域名，还有一级域名，就需要添加两条记录来验证

```
Please deploy a DNS TXT record under the name:
​
_acme-challenge.example.top.
​
with the following value:
​
8eBntKwxymhu1erZuE7J9KPZnuxmE6kiYnBrDD3DkXU
​
(This must be set up in addition to the previous challenges; do not remove,
replace, or undo the previous challenge tasks yet. Note that you might be
asked to create multiple distinct TXT records with the same name. This is
permitted by DNS standards.)
​
Before continuing, verify the TXT record has been deployed. Depending on the DNS
provider, this may take some time, from a few seconds to multiple minutes. You can
check if it has finished deploying with aid of online tools, such as the Google
Admin Toolbox: https://toolbox.googleapps.com/apps/dig/#TXT/_acme-challenge.example.top.
Look for one or more bolded line(s) below the line ';ANSWER'. It should show the
value(s) you've just added.
​
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Press Enter to Continue
```
根据提示操作完成后，在域名解析那就有两条TXT记录了，如下：

![avater](https://pic3.zhimg.com/80/v2-e86d0c4690fa78184b61c37049481ed2_720w.webp)



设置好之后的域名解析

检查是否已经解析完成
```
https://toolbox.googleapps.com/apps/dig/#TXT/_acme-challenge.fanpin.icu
```
接着就会显示申请成功的信息了

```
Press Enter to Continue

Successfully received certificate.
Certificate is saved at: C:\Certbot\live\fanpin.icu\fullchain.pem
Key is saved at:         C:\Certbot\live\fanpin.icu\privkey.pem
This certificate expires on 2024-01-16.
These files will be updated when the certificate renews.

NEXT STEPS:
- This certificate will not be renewed automatically. Autorenewal of --manual certificates requires the use of an authentication hook script (--manual-auth-hook) but one was not provided. To renew this certificate, repeat this same certbot command before the certificate's expiry date.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
If you like Certbot, please consider supporting our work by:
 * Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
 * Donating to EFF:                    https://eff.org/donate-le
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
```
这里已经提示的证书的存放位置，直接进c盘去找就好了，这里发现这些文件是快捷方式，然后还有一个readme文件，打开里面提示是不要移动也不要修改名称，看一下快捷方式的属性就发现证书文件存在了另一个文件夹：C:\Certbot\archive
```
This directory contains your keys and certificates.
​
`privkey.pem`  : the private key for your certificate.
`fullchain.pem`: the certificate file used in most server software.
`chain.pem`    : used for OCSP stapling in Nginx >=1.3.7.
`cert.pem`     : will break many server configurations, and should not be used
                 without reading further documentation (see link below).
​
WARNING: DO NOT MOVE OR RENAME THESE FILES!
         Certbot expects these files to remain in this location in order
         to function properly!
​
We recommend not moving these files. For more information, see the Certbot
User Guide at https://certbot.eff.org/docs/using.html#where-are-my-certificates.
```
既然不让我移动或改名，那我复制出来使用就可以了。

## 三、关于续签证书
刚刚申请成功的地方，有一个关于续签的说明如下：
```
NEXT STEPS:
- This certificate will not be renewed automatically. Autorenewal of --manual certificates requires the use of an authentication hook script (--manual-auth-hook) but one was not provided. To renew this certificate, repeat this same certbot command before the certificate's expiry date.
```
翻译过来就是说：

下一个步骤:
```
—该证书不会自动更新。——manual证书的自动更新需要使用身份验证挂钩脚本(——manual-auth-hook)，但没有提供。要更新该证书，请在证书到期之前重复相同的certbot命令。
```
我理解就是如果下次经续签，可能就是要重新申请一次。反正也不麻烦，大概几分钟就搞定了，那就下次再重新申请吧。
