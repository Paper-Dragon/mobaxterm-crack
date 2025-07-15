import { defaultTheme } from "@vuepress/theme-default";
import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { mobaxtermCrackerPlugin } from 'vuepress-plugin-mobaxterm-cracker';



export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "vuepress-plugin-mobaxterm-cracker",
  description: "一个为 VuePress 2 设计的 MobaXterm 许可证生成器插件",
  plugins: [
    mobaxtermCrackerPlugin()
  ],

  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: false,
  }),
});
