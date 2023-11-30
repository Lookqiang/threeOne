module.exports = {
  base: "/threeOne/",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "日常", link: "/guide/" },
    ],
    sidebar: {
      "/guide/": ["one" /* /foo/one.html */, "node管理", "node-sass升级为sass" /* /foo/two.html */],
    },
  }
};
