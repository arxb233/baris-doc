---
title: nonebot异步机器人框架安装指南
date: 2023-10-16 11:01:13
tags:
top_img: https://z1.ax1x.com/2023/10/16/piCY2kV.png
cover: https://z1.ax1x.com/2023/10/16/piCY2kV.png
---

# nonebot异步机器人框架安装指南

## 参考链接
```
1，nonebot官网：https://v2.nonebot.dev/docs/start/installation

2，go-cqhttp官网：https://docs.go-cqhttp.org/
```

## 安装脚手架​
```
确保你已经安装了 Python 3.8 及以上版本，然后在命令行中执行以下命令：
```

## 安装 pipx
```
python -m pip install --user pipx
python -m pipx ensurepath
如果在此步骤的输出中出现了“open a new terminal”或者“re-login”字样，那么请关闭当前终端并重新打开一个新的终端。
```
## 安装脚手架
```
pipx install nb-cli
安装完成后，你可以在命令行使用 nb 命令来使用脚手架。如果出现无法找到命令的情况（例如出现“Command not found”字样），请参考 pipx 文档 检查你的环境变量。
```
## 创建项目​
使用脚手架来创建一个项目：
```
nb create
这一指令将会执行创建项目的流程，你将会看到一些询问：
```
## 项目模板

```
[?] 选择一个要使用的模板: bootstrap (初学者或用户)
这里我们选择 bootstrap 模板，它是一个简单的项目模板，能够安装商店插件。如果你需要自行编写插件，这里请选择 simple 模板。
``` 

## 项目名称
```
[?] 项目名称: awesome-bot
这里我们以 awesome-bot 为例，作为项目名称。你可以根据自己的需要来命名。
```

## 其他选项 
请注意，多选项使用空格选中或取消，回车确认。
```
[?] 要使用哪些驱动器? FastAPI (FastAPI 驱动器)
[?] 要使用哪些适配器? Console (基于终端的交互式适配器)
[?] 立即安装依赖? (Y/n) Yes
[?] 创建虚拟环境? (Y/n) Yes
这里我们选择了创建虚拟环境，nb-cli 在之后的操作中将会自动使用这个虚拟环境。如果你不需要自动创建虚拟环境或者已经创建了其他虚拟环境，nb-cli 将会安装依赖至当前激活的 Python 虚拟环境。
```
## 选择内置插件
```
[?] 要使用哪些内置插件? echo
这里我们选择 echo 插件作为示例。这是一个简单的复读回显插件，可以用于测试你的机器人是否正常运行。
```
## 运行项目​
```
在项目创建完成后，你可以在项目目录中使用以下命令来运行项目：
nb run
```
你现在应该已经运行起来了你的第一个 NoneBot 项目了！
请注意，生成的项目中使用了 FastAPI 驱动器和 Console 适配器，你之后可以自行修改配置或安装其他适配器。

## 尝试使用​
在项目运行起来后，Console 适配器会在你的终端启动交互模式，
```
你可以直接在输入框中输入 /echo hello world 来测试你的机器人是否正常运行。
```
