#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vitepress/dist
rm -rf .git
# 如果是发布到自定义域名
# echo 'www.baidu.com' > CNAME

git init
git add -A
git commit -m 'feat: deploy docs'
git branch -m master main

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push -f https://github.com/you-hei-mi/vue-project-docs.git main:docs
cd -