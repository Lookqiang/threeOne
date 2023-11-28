---
title: node版本管理
---

# node 版本管理

## nvs 管理

```
nvs
.---------------------------------------------------.
| Select a version                                  |
+---------------------------------------------------+
|  a) node/20.4.0/x64                               |
|  b) node/19.0.0/x64                               |
|  c) node/17.8.0/x64                               |
|  d) node/16.15.0/x64                              |
|  e) node/16.0.0/x64                               |
|  f) node/15.0.0/x64                               |
|  g) node/13.11.0/x64                              |
|  h) node/13.1.0/x64                               |
|  i) node/12.18.0/x64 (Erbium)                     |
|  j) node/12.17.0/x64 (Erbium)                     |
|  k) node/12.16.1/x64 (Erbium)                     |
| [l] node/12.14.0/x64 (Erbium) [current] [default] |
|                                                   |
|  ,) Download another version                      |
|  .) Don't use any version                         |
'---------------------------------------------------'
```

::: tip <font color="Coral">有一点点不完美?</font>
nvs 每次重启 cnd 等命令行操作工具需要重新手动选择项目中需要的版本
:::

## Volta

Volta 是一种管理 JavaScript 命令行工具的便捷方式

### 安装

[windows 系统上 安装](https://github.com/volta-cli/volta/releases/download/v1.1.1/volta-1.1.1-windows-x86_64.msi)

```
Volta -v
```

输出版本号 1.1.1 说明安装成功

```
cd 项目根目录
volta install node@[version]

volta pin node@20.4
```

### 使用

如果根目录有存在 `package.json` 文件 会直接在 注入以下代码

```json
{
    ...
    "volta": {
        "node": "20.4.0"
    }
}

```

如果不存在 `package.json` 文件，会提示你 `Not in a node package.`

`npm run dev` 运行开发环境

- 如果首次加载新的 node 版本，volta 会运行 volta fecth node@20.4.0 缓存到本地(file:///C:/Users/user/AppData/Local/Volta/tools/inventory/node/)

::: tip 结论
Volta 的优点 解决了 nvs 每次重启 cnd 等命令行操作工具需要重新手动选择项目中需要的版本的问题。
:::
