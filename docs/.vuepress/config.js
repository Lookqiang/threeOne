//基于目录的自动引入

module.exports = {
  base: "/threeOne/",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "日常", link: "/guide/" },
    ],
    sidebar: {
      "/guide/": ["one", "node管理", "node-sass升级为sass",'钉钉小程序'],
    },
  },
};
