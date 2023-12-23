---
title: node-sass升级为sass
---
## node-sass 遇到的问题

### 问题一： node 版本不同，需要安装的 node-sass 版本也是不一样

| NodeJS  | Supported node-sass version | Node Module |
| ------- | --------------------------- | ----------- |
| Node 20 | 9.0+                        | 115         |
| Node 19 | 8.0+                        | 111         |
| Node 18 | 8.0+                        | 108         |
| Node 17 | 7.0+, <8.0                  | 102         |
| Node 16 | 6.0+                        | 93          |
| Node 15 | 5.0+, <7.0                  | 88          |
| Node 14 | 4.14+, <9.0                 | 83          |
| Node 13 | 4.13+, <5.0                 | 79          |
| Node 12 | 4.12+, <8.0                 | 72          |
| Node 11 | 4.10+, <5.0                 | 67          |
| Node 10 | 4.9+, <6.0                  | 64          |
| Node 8  | 4.5.3+, <5.0                | 57          |
| Node <8 | <5.0                        | <57         |

**解决版本也是不匹配的方法：**

```js
# 查看本地node版本
node -v

# 安装node-sass
npm install node-sass@[本地node所对应的node-sass版本]
```

### 问题二： 网络问题

在使用 npm install 安装 node-sass 时，会从 github.com 上下载 .node 文件。由于国内网络环境的问题，这个下载时间可能会很长，甚至导致超时失败。（这也是经常遇到的问题）

**解决这种情况下不仅要使用--registry 参数指定 npm 包的下载源，还需要使用--sass_binary_site 参数指定 sass 二进制文件的下载源（速度也是非常慢的）**

```js
# 查看本地node版本
node -v

# 安装node-sass
npm install node-sass@[本地node所对应的node-sass版本] --registry=https://registry.npm.taobao.org --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
```

## Dart Sass

::: tip node-sass 的仓管 的 Warning
Warning: LibSass and Node Sass are deprecated. While they will continue to receive maintenance releases indefinitely, there are no plans to add additional features or compatibility with any new CSS or Sass features. Projects that still use it should move onto Dart Sass.

翻译：LibSass 和 Node Sass 已弃用。虽然它们将无限期地继续接收维护版本，但没有计划添加额外的功能或与任何新的 CSS 或 Sass 功能的兼容性。仍然使用它的项目应该转移到 Dart Sass。
:::

```js
//卸载 node-sass：
npm uninstall node-sass
// 安装 sass：
npm install sass --save-dev
```

**全局搜索替换：/deep/ 替换为 ::v-deep**

关于 node-sass 和 dark sass 的 性能对比[参考](https://zhuanlan.zhihu.com/p/269296061)

**总结：性能上 Node-Sass 比 dark sass 好，但是存在安装、弃用问题（ 这意味着尽管将不再添加任何功能）。 Dart Sass 面向未来，支持各种新的特性。安装速度快，不用再担心 Node Sass 安装不成功的问题了，并且 Dart Sass 也在积极地处理它的性能问题。**
