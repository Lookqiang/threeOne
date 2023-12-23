---
title: vuePress部署在GitHub page
---

# vuePress 如何部署在 GitHub page

```
本文主要目标
- [ ] vuePress部署在GitHub page的静态网站(GitHub Pages)
- [ ] push代码到GitHub，github进行自动部署(Github Actions)
```

## vuePress 如何部署在 GitHub Pages

1. 在 docs/.vuepress/config.js 中设置正确的 base。

   如果你打算发布到 `https://<USERNAME>.github.io/`，则可以省略这一步，因为 base 默认即是 "/"。
   如果你打算发布到 `https://<USERNAME>.github.io/<REPO>/`（也就是说你的仓库在 `https://github.com/<USERNAME>/<REPO>`），则将 base 设置为 `"/<REPO>/"`。

## Github Actions 提交代码后自动部署

1. 创建 Github access token (opens new window);
   1. click your profile icon
   2. Settings
   3. Developer settings
   4. Personal access tokens ( Tokens (classic))
   5. Generate new token (Classic)
   6. 得到 token
2. 在你 github 仓库下，创建一个 secrets (opens new window)，填入刚创建的 token
   1. click Settings
   2. Secrets (actions)
   3. click New repository secret
   4. Actions secrets / New secret
      1. "Name" : ACCESS_TOKEN
      2. "secret" : 1-6 复制的 token
3. 在项目根目录下的 .github/workflows 目录（没有的话，请手动创建一个）下创建一个 .yml 或者 .yaml 文件，如:docs.yml;

   ```yml
    name: docs
    on: [push]
    jobs:
    docs:
        runs-on: ubuntu-latest
        steps:
        - name: Checkout
            uses: actions/checkout@master
            with:
            persist-credentials: false

        - name: vuepress-deploy
            uses: jenkey2011/vuepress-deploy@master #使用jenkey2011/vuepress-deploy项目
            env:
                ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }} #目标仓库
                TARGET_REPO: Lookqiang/threeOne #目标仓库 <USERNAME>（用户名）/<REPO>（仓库名）
                TARGET_BRANCH: blog  #目标仓库的分支
                BUILD_SCRIPT: yarn && yarn docs:build #构建脚本：自己创建运行的命令 package.json-> scripts:{docs:build:"vuepress build docs"}
                BUILD_DIR: docs/.vuepress/dist #配置构建产物的目录
   ```

   详细使用方法，可以看[vuepress-deploy](https://github.com/jenkey2011/vuepress-deploy/)

4、查看地址：[lookqiang.github.io/threeOne/guide/one](https://lookqiang.github.io/threeOne/guide/one.html)



