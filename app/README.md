---
home: true
title: vuepress-plugin-mobaxterm-cracker
heroText: vuepress-plugin-mobaxterm-cracker
tagline: 一个为 VuePress 2 设计的 MobaXterm 许可证生成器插件
actions:
  - text: 查看源码
    link: https://github.com/Paper-Dragon/mobaxterm-crack
    type: primary
  - text: 查看NPM包
    link: https://www.npmjs.com/package/vuepress-plugin-mobaxterm-cracker
    type: secondary
features:
  - title: 一键生成
    details: 只需在页面中点击一下，即可生成 MobaXterm 的许可证文件。
  - title: 多种许可证类型
    details: 支持生成 Professional, Educational, 和 Personal 三种类型的许可证。
  - title: 无版本限制
    details: 支持 MobaXterm 10.0 及以上的所有版本。
  - title: 跨平台
    details: 支持在 Windows, macOS 和 Linux 上使用。
  - title: 轻量级
    details: 插件体积小，不会对你的网站造成任何性能影响。
  - title: 开源
    details: 完全开源，你可以在 GitHub 上查看源码。
footer: MIT Licensed | Copyright © 2023-present jocker-dragon
---

<MobaXterm />

一个为 VuePress 2设计的 MobaXterm 许可证生成器插件，它提供了一个开箱即用的 `<MobaXterm />` 组件。

## 🎨 使用教程

输入版本号等所需信息，点击生成按钮即可生成`Pro.key`，然后将生成的 `Custom.mxtpro` 文件复制到 MobaXterm 安装目录。

## 📦 安装

在你的 VuePress 2 项目中，使用 pnpm, yarn, 或者 npm 安装本插件：

```bash
# pnpm
pnpm add -D vuepress-plugin-mobaxterm-cracker

# yarn
yarn add -D vuepress-plugin-mobaxterm-cracker

# npm
npm install -D vuepress-plugin-mobaxterm-cracker
```

## 🚀 使用

在你的 VuePress 配置文件中引入插件：

```javascript
// .vuepress/config.js
import { defineUserConfig } from 'vuepress'
import { mobaxtermCrackerPlugin } from 'vuepress-plugin-mobaxterm-cracker'

export default defineUserConfig({
  // ...
  plugins: [
    mobaxtermCrackerPlugin(),
  ],
})
```

然后在你的任何 Markdown 文件中直接使用组件：

```markdown
<MobaXterm />
```