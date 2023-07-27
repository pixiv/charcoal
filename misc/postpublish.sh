#!/bin/bash

set -euxo pipefail

# project root で実行
cd $(dirname $0)/..

current_branch=$(git symbolic-ref --short HEAD)

yarn install

if [[ $(git status --porcelain | grep yarn.lock) ]]; then
  git add yarn.lock
  git commit -m "chore: yarn install after publish"
  git push origin $current_branch
else
  echo 'No diff found after yarn install'
fi

git push origin --tags
