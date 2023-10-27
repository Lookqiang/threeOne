import { defaultTheme } from "vuepress";
module.exports = {
  base: "/threeOne/",
  title: "Hello VuePress",
  description: "Just playing around",
  dest: "public",
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: "首页",
        link: "/",
      },
    ],
  }),
};
