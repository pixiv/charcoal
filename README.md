# @pixiv-elements ― PIXIV Design System monorepo

This is the monorepo for the `@pixiv-elements` packages by pixiv.

# Development

## Setup

Requires `yarn` and `nodenv`.

Requires `.npmrc` in CI/CD setting page of the repository.

```sh
nodenv install `cat .node-version`
yarn install
yarn lerna bootstrap
yarn build
```

You should build all the packages first so that each package can import another `@pixiv-elements/*` package.

## Commit

`@pixiv-elements` is using [commintlint](https://github.com/conventional-changelog/commitlint) and following the [Conventional Commits](https://www.conventionalcommits.org/ja/v1.0.0/) rules.
