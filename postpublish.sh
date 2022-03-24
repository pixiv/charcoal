#!/bin/bash

set -euxo pipefail

default_branch=`git remote show origin | grep 'HEAD branch' | awk '{print $NF}'`

if [[ $default_branch = `git symbolic-ref --short HEAD` ]]; then
  yarn install

  if [[ `git status --porcelain | grep yarn.lock` ]]; then
    git add yarn.lock
    git commit -m "chore: yarn install after publish"
    git push origin $default_branch
  else
    echo 'No diff found after yarn install'
  fi
else
  echo 'Not in default branch'
fi
