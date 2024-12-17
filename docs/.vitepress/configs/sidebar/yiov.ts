export const Yiov ={
  text: 'Yiov',
  collapsed: true,
  items: [
    {
      text: '科学上网',
      items: [
        { text: '介绍(必看)', link: '/yiov/gfw/proxy' },
        { text: '工具', 
          collapsed: true,
          items: [
            { text: '圈X', link: '/yiov/gfw/quantumultX' },
            { text: 'BoxJS', link: '/yiov/gfw/boxjs' },
            { text: '小火箭', link: '/yiov/gfw/shadowrocket' },
            { text: 'Clash', link: '/yiov/gfw/Clash' },
            { text: 'WARP', link: '/yiov/gfw/warp' },
            { text: 'WireGuard', link: '/yiov/gfw/wireguard' },
            { text: 'sing-box', link: '/yiov/gfw/singbox' },
            { text: 'NekoBox', link: '/yiov/gfw/NekoBox' },
            { text: 'Karing', link: '/yiov/gfw/Karing' },
            { text: 'Hiddify', link: '/yiov/gfw/Hiddify' },
            { text: 'V2Ray', link: '/yiov/gfw/v2ray' },
          ],
        },
        { text: '机场', link: '/yiov/gfw/channel' },
        { text: '协议', link: '/yiov/gfw/protocol' },

      ],
    },

    {
      //分组标题2
      text: '日常生活',
      items: [
        { text: '常识', 
          collapsed: true,
          items: [
            { text: '维生素', link: '/yiov/daily/vitamin' },
            { text: '血常规', link: '/yiov/daily/blood' },
            { text: '车厘子', link: '/yiov/daily/cherries' },
            { text: '房产证', link: '/yiov/daily/house' },
            { text: '廿四节气', link: '/yiov/daily/24' },
          ],
        },

        { text: '技巧', 
          collapsed: true,
          items: [
            { text: 'PayPal', link: '/yiov/daily/paypal' },
            { text: '待产包', link: '/yiov/daily/bags-just-yet' },
            { text: '台州麻将', link: '/yiov/daily/mahjong' },
            { text: '1688同源店', link: '/yiovdaily/1688' },
            { text: '京东强制加购', link: '/yiov/daily/jd' },
            { text: '淘宝强制提交', link: '/yiov/daily/taobao' },
          ],
        },

      ],
    },

    {
      //分组标题3
      text: '电脑相关', 
      items: [
        { text: '系统', 
          collapsed: true,
          items: [
            { text: '微PE', link: '/yiov/computer/wepe' },
            { text: '电脑常见问题', link: '/yiov/computer/win11' },
          ],
        },

        { text: 'crx', 
          collapsed: true,
          items: [
            { text: '油猴插件', link: '/yiov/computer/tampermonkey' },
            { text: '书签同步', link: '/yiov/computer/bookmark' },
            { text: '插件导出', link: '/yiov/computer/crx' },
          ],
        },

        { text: '应用', 
          collapsed: true,
          items: [
            { text: 'Pake', link: '/yiov/computer/pake' },
            { text: 'Todesk', link: '/yiov/computer/todesk' },
            { text: 'Markdown', link: '/yiov/computer/markdown' },
            { text: 'PS 2023', link: '/yiov/computer/ps' },
            { text: 'icon提取', link: '/yiov/computer/icon' },
            { text: 'QQ邮箱', link: '/yiov/computer/qqmail' },
            { text: '电视应用', link: '/yiov/computer/tvapp' },
            { text: '微软TTS', link: '/yiov/computer/tts' },
            { text: '企业微信推送', link: '/yiov/computer/wecom' },
          ],
        },

      ],
    },

    {
      //分组标题4
      text: '小米相关',
      items: [
        { text: '小米降级', link: '/yiov/mi/miui' },
        { text: '小米主题', link: '/yiov/mi/mi_theme' },
      ],
    },
    {
      //分组标题5
      text: 'iPhone玩机',
      items: [
        { text: '日常使用', 
          collapsed: true,
          items: [
            { text: 'iMessage', link: '/yiov/iPhone/smscard' },
            { text: 'Apple ID', link: '/yiov/iPhone/Apple_ID' },
            { text: 'stay2', link: '/yiov/iPhone/stay2' },
            { text: 'Stream', link: '/yiov/iPhone/Stream' },
            { text: 'Reqable', link: '/yiov/iPhone/Reqable' },
          ],
        },
        { text: '签名工具', 
          collapsed: true,
          items: [
          { text: '使用介绍(必读)', link: '/yiov/iPhone/sign/' },
          { text: '巨魔助手', link: '/yiov/iPhone/sign/TrollStore' },
          { text: '轻松签', link: '/yiov/iPhone/sign/esign' },
          { text: '牛蛙助手', link: '/yiov/iPhone/sign/bullfrog' },
          { text: 'Sideloadly', link: '/yiov/iPhone/sign/Sideloadly' },
          ],
        },
        { text: '越狱工具', 
          collapsed: true,
          items: [
          { text: '使用介绍(必读)', link: '/yiov/iPhone/Jailbreak/' },
          { text: 'Dopamine', link: '/yiov/iPhone/Jailbreak/Dopamine' },
          { text: 'unc0ver', link: '/yiov/iPhone/Jailbreak/unc0ver' },
          { text: 'checkra1n', link: '/yiov/iPhone/Jailbreak/checkra1n' },
          { text: '搭建插件源', link: '/yiov/iPhone/Jailbreak/repo' },

          ],
        },
        { text: '其他工具', 
          collapsed: true,
          items: [
            { text: 'MDC工具', link: '/yiov/iPhone/mdc' },
            { text: 'KFD工具', link: '/yiov/iPhone/kfd' },
            { text: 'Filza破解', link: '/yiov/iPhone/Filza' },

          ],
        },
      ],
    },
    {
      //分组标题6
      text: 'Telegram',
      items: [
        { text: 'TG', link: '/yiov/telegram/tg' },
        { text: '机器人 ', link: '/yiov/telegram/tgbot' },
        { text: '表情包', link: '/yiov/telegram/sticker' },
      ],
    },
    {
      //分组标题7
      text: '网站相关',
      items: [
        { text: '基础', 
          collapsed: true,
          items: [
            { text: '服务器', 
              collapsed: true,
              items: [
                { text: '使用介绍(必读)', link: '/yiov/website/Server/' },
                { text: '虚拟机', link: '/yiov/website/VMware' },
                { text: '腾讯云', link: '/yiov/website/Server/tencent' },
                { text: 'Serv00', link: '/yiov/website/Server/Serv00' },
                { text: 'wordpress', link: '/yiov/website/Server/wordpress' },
                { text: 'Hax', link: '/yiov/website/Server/hax' },

              ],
            },
            { text: '域名', 
              collapsed: true,
              items: [
                { text: '使用介绍(必读)', link: '/yiov/website/domain/' },
                { text: '腾讯云', link: '/yiov/website/domain/tencent' },
                { text: 'eu.org', link: '/yiov/website/domain/eu' },
                { text: 'US.KG', link: '/yiov/website/domain/uskg' },
                { text: 'ClouDNS', link: '/yiov/website/domain/cloudns' },
                { text: 'L53', link: '/yiov/website/domain/l53' },
                { text: 'com.mp', link: '/yiov/website/domain/commp' },
                { text: 'DNSExit', link: '/yiov/website/domain/dnsexit' },
              ],
            },
            { text: 'Shell', 
              collapsed: true,
              items: [
                { text: '使用介绍(必读)', link: '/yiov/website/shell/' },
                { text: 'Xshell', link: '/yiov/website/shell/Xshell' },
                { text: 'Termius', link: '/yiov/website/shell/Termius' },
                { text: 'JuiceSSH', link: '/yiov/website/shell/JuiceSSH' },
              ],
            },
            { text: '宝塔面板', link: '/yiov/website/BT' },
            { text: '环境', 
              collapsed: true,
              items: [
                { text: 'node.js', link: '/yiov/website/nodejs' },
                { text: 'Go', link: '/yiov/website/go' },
              ],
            }, 
            { text: 'SSL证书', 
              collapsed: true,
              items: [
                { text: '使用介绍(必读)', link: '/yiov/website/ssl/' },
                { text: '宝塔面板', link: '/yiov/website/ssl/bt' },
                { text: 'httpsok', link: 'https://httpsok.com/doc/guide/apply.html' },
                { text: 'acme.sh', link: '/yiov/website/ssl/acmesh' },
                { text: 'ZeroSSL', link: '/yiov/website/ssl/zerossl' },
                { text: '来此加密', link: '/yiov/website/ssl/laici' },
                { text: '腾讯云', link: '/yiov/website/ssl/tencent' },
              ],
            },
          ],
        },

        { text: 'WP相关', 
          collapsed: true,
          items: [
            { text: 'wordpress', link: '/yiov/website/wordpress' },
            { text: 'Webstack', link: '/yiov/website/WebStack' },
            { text: 'Onenav', link: '/yiov/website/onenav' },
          ],
        },

        { text: 'Docker', 
          collapsed: true,
          items: [
            { text: '使用介绍(必读)', link: '/yiov/website/docker' },
             { text: 'Halo', link: '/yiov/website/Halo' },
             { text: 'Alist', link: '/yiov/website/Alist' },
             { text: '青龙面板', link: '/yiov/website/qinglong' },
            { text: 'Dockerhub', link: '/yiov/website/dockerhub' },
           ],
        },

        { text: '静态托管', 
          collapsed: true,
          items: [
            { text: '使用介绍(必读)', link: '/yiov/website/pages/' },
            { text: 'Github', link: '/yiov/website/pages/github' },
            { text: 'Vercel', link: '/yiov/website/pages/vercel' },
            { text: 'GitLab', link: '/yiov/website/pages/gitlab' }, 
            { text: 'Git', link: '/yiov/website/pages/git' },
          ],
        },

        

        { text: '拓展工具', 
          collapsed: true,
          items: [
            { text: 'VSCode', link: '/yiov/website/VSCode' },
            { text: '个人主页搭建', link: '/yiov/website/home' },
            { text: 'Cloudflare', link: '/yiov/website/cloudflare' },
            { text: 'UptimeRobot ', link: '/yiov/website/uptimerobot' },
            { text: 'Replit', link: '/yiov/website/Replit' },
            { text: 'Favicon', link: '/yiov/website/Favicon' },
            { text: '记仇小本本', link: '/yiov/website/heng' },
          ],
        },

        { text: '其他', 
          collapsed: true,
          items: [
            { text: '浅谈内网穿透', link: '/yiov/website/NAT' },
            { text: '闲置苹果托管网站', link: '/yiov/website/ish' },
            { text: 'Centos切换图形界面', link: '/yiov/website/Centos' },
          ],
        },

      ],
    },
    {
      //分组标题8
      text: '其他站点',
      //collapsed: false,
      items: [
        { text: '个人主页', link: 'https://baris.top/' },
      ],
    },
  ]
}
