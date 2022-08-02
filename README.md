# @charcoal-ui ― PIXIV Design System monorepo

[![test](https://github.com/pixiv/charcoal/actions/workflows/test.yml/badge.svg)](https://github.com/pixiv/charcoal/actions/workflows/test.yml)
[![Storybook](./.storybook/badge.svg)](https://pixiv.github.io/charcoal)

This is the monorepo for the `@charcoal-ui` packages by pixiv.

## How to use

See our [documentation](https://pixiv.github.io/charcoal/docs), or README of each package in `/packages`.

## Contribution

### Setup

Requires `yarn` and `nodenv`.

```sh
nodenv install `cat .node-version`
yarn install
```

### Development

Start the development server on http://localhost:6006

```
yarn build
yarn storybook
```

If you want to start development for documentation site, run the following command and go to http://localhost:5000

```
yarn website
```

### Commit

`@charcoal-ui` is using [commintlint](https://github.com/conventional-changelog/commitlint) and following the [Conventional Commits](https://www.conventionalcommits.org/ja/v1.0.0/) rules.
