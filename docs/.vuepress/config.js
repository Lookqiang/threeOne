module.exports = {
  base: "/threeOne/",
  title: "Hello VuePress",
  description: "Just playing around",
  dest: "public",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "External", link: "https://google.com" },
    ],
  },
};
