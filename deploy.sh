#!/usr/bin/env sh
yarn run build
cd dist
git init
git branch -M main
git add -A
git commit -m 'deploy'
git push -f git@github.com:litongjava/developer-toolkit.git main:gh-pages