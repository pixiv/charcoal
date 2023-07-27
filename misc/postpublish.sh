#!/bin/bash

set -euxo pipefail

# project root で実行
cd $(dirname $0)/..

default_branch=$(git remote show origin | grep 'HEAD branch' | awk '{print $NF}')

yarn install

if [[ $(git status --porcelain | grep yarn.lock) ]]; then
  git add yarn.lock
  git commit -m "chore: yarn install after publish"
  git push origin $default_branch
else
  echo 'No diff found after yarn install'
fi

git push origin --tags
