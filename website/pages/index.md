# @charcoal ― PIXIV Design System monorepo

This is the monorepo for the `@charcoal` packages by pixiv.

# Development

## Setup

Requires `yarn` and `nodenv`.

```sh
nodenv install `cat .node-version`
yarn install
yarn lerna bootstrap
yarn build
```

You should build all the packages first so that each package can import another `@charcoal/*`
package.

## Commit

`@charcoal` is using [commintlint](https://github.com/conventional-changelog/commitlint) and
following the [Conventional Commits](https://www.conventionalcommits.org/ja/v1.0.0/) rules.
