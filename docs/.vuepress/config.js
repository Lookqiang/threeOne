module.exports = {
  base: "/threeOne/",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
    ],
    sidebar: {
      "/guide/": [ "one" /* /foo/one.html */, "two" /* /foo/two.html */],
    },
  },
};
