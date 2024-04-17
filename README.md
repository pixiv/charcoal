# @charcoal-ui ― PIXIV Design System monorepo

[![test](https://github.com/pixiv/charcoal/actions/workflows/test.yml/badge.svg)](https://github.com/pixiv/charcoal/actions/workflows/test.yml)
[![Storybook](./.storybook/badge.svg)](https://pixiv.github.io/charcoal)

This is the monorepo for the `@charcoal-ui` packages by pixiv.

## How to use

See our [documentation](https://charcoal-web.pixiv.design/), or README of each package in `/packages`.

## NPM Packages

| package                      | version                                                                                                                                        |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| @charcoal-ui/foundation      | [![styled npm version](https://img.shields.io/npm/v/@charcoal-ui/foundation)](https://www.npmjs.com/package/@charcoal-ui/foundation)           |
| @charcoal-ui/icons           | [![styled npm version](https://img.shields.io/npm/v/@charcoal-ui/icons)](https://www.npmjs.com/package/@charcoal-ui/icons)                     |
| @charcoal-ui/icons-cli       | [![styled npm version](https://img.shields.io/npm/v/@charcoal-ui/icons-cli)](https://www.npmjs.com/package/@charcoal-ui/icons-cli)             |
| @charcoal-ui/react           | [![styled npm version](https://img.shields.io/npm/v/@charcoal-ui/react)](https://www.npmjs.com/package/@charcoal-ui/react)                     |
| @charcoal-ui/react-sandbox   | [![styled npm version](https://img.shields.io/npm/v/@charcoal-ui/react-sandbox)](https://www.npmjs.com/package/@charcoal-ui/react-sandbox)     |
| @charcoal-ui/styled          | [![styled npm version](https://img.shields.io/npm/v/@charcoal-ui/styled)](https://www.npmjs.com/package/@charcoal-ui/styled)                   |
| @charcoal-ui/tailwind-config | [![styled npm version](https://img.shields.io/npm/v/@charcoal-ui/tailwind-config)](https://www.npmjs.com/package/@charcoal-ui/tailwind-config) |
| @charcoal-ui/tailwind-diff   | [![styled npm version](https://img.shields.io/npm/v/@charcoal-ui/tailwind-diff)](https://www.npmjs.com/package/@charcoal-ui/tailwind-diff)     |
| @charcoal-ui/theme           | [![styled npm version](https://img.shields.io/npm/v/@charcoal-ui/theme)](https://www.npmjs.com/package/@charcoal-ui/theme)                     |
| @charcoal-ui/utils           | [![styled npm version](https://img.shields.io/npm/v/@charcoal-ui/utils)](https://www.npmjs.com/package/@charcoal-ui/utils)                     |

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

`@charcoal-ui` is using [commitlint](https://github.com/conventional-changelog/commitlint) and following the [Conventional Commits](https://www.conventionalcommits.org/ja/v1.0.0/) rules.

