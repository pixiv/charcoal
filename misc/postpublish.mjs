#!/usr/bin/env zx
import { cd, echo, $ } from 'zx'

cd(`${__dirname}/..`)

const default_branch = await $`git remote show origin | grep 'HEAD branch' | awk '{print $NF}'`
const current_branch = await $`git symbolic-ref --short HEAD`

const SAMPLE_PACKAGE_JSON_PATH = 'packages/sample/package.json'
const YARN_LOCK_PATH = 'yarn.lock'

if (default_branch === current_branch) {
  await $`yarn install`
  await $`zx ./misc/fix-versioning.mjs`

  try {
    // check `packages/sample/package.json` is modified
    await $`git status --porcelain | grep ${SAMPLE_PACKAGE_JSON_PATH}`

    await $`git add ${SAMPLE_PACKAGE_JSON_PATH}`
  } catch {
    echo`No diff found after fix-versioning`
  }

  try {
    // check `yarn.lock` is modified
    await $`git status --porcelain | grep ${YARN_LOCK_PATH}`

    await $`git add ${YARN_LOCK_PATH}`
  } catch {
    echo`No diff found after yarn install`
  }

  try {

  }

    await $`git commit -m "chore: yarn install after publish"`
    await $`git push origin $default_branch`
}
