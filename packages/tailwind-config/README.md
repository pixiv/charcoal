# `@charcoal-ui/tailwind-config`

charcoal のカラーテーマやスペーシングなどの定数を元に tailwind.config.js を生成するライブラリです。

## インストール

npm

```
npm i --save-dev @charcoal-ui/tailwind-config
```

yarn

```
yarn add -D @charcoal-ui/tailwind-config
```

## 使い方 tailwind v4 (WIP)

Tailwind v4 の[@config](https://tailwindcss.com/docs/functions-and-directives#config-directive)経由で引き続既存の設定を利用できます。

公式の[マイグレーションガイド](https://tailwindcss.com/docs/upgrade-guide)を参考した上以下の対応を行なってください。

```diff
- @import 'tailwindcss';
/* 現時点@layer 未対応 */
+ @import 'tailwindcss/theme.css';
+ @import 'tailwindcss/utilities.css';

+ @config '@charcoal-ui/tailwind-config' /** デフォルトのconfig使う場合 */
/* また */
+ @config '../tailwind.config.ts' /** v3 configへのpath */
```

## 使い方 tailwind v2,v3

tailwind.config.js の中で `require` して使います。

### デフォルトの config を使う

```js:tailwind.config.js
const { config } = require('@charcoal-ui/tailwind-config')

/**
 * @type {import('tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  darkMode: false,
  content: ['./src/**/*.tsx', './src/**/*.html'],
  presets: [config]
};
```

### カスタマイズする

```js:tailwind.config.js
const { light, dark } = require('@charcoal-ui/theme')
const { createTailwindConfig } = require('@charcoal-ui/tailwind-config')

/**
 * @type {import('tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  darkMode: false,
  content: ['./src/**/*.tsx', './src/**/*.html'],
  presets: [
    createTailwindConfig({
      version: 'v3',
      theme: {
        ':root': light,
        '@media (prefers-color-scheme: dark)': dark
      }
    })
  ]
};
```

`createTailwindConfig` には以下のオプションを渡すことができます。

| キー    | 型                      | 説明                                                                                                                  |
| ------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------- |
| version | `v1` `v2` `v3`          | Tailwind.css のバージョン系統を指定します。色のキー名に使われる `DEFAULT` と `default` などの違いを内部で吸収します。 |
| theme   | `Record<string, Theme>` | 条件ごとの色の値のマッピングを渡します。`:root` は必須のキーです。以下詳細。                                          |

### ThemeMap について

charcoal は Tailwind.css の通常のダークモード（ `dark:〇〇` 系のクラス ）をサポートしません。

なぜなら charcoal における「色」は、同じ名前でも light テーマと dark テーマで違うカラーコードであり得るからです。

これを表現するために `@charcoal-ui/tailwind-config` では `theme` というオプションを受け取ります。

```js
createTailwindConfig({
  version: 'v3',
  theme: {
    ':root': light,
    '@media (prefers-color-scheme: dark)': dark,
  },
})
```

↑ は、`:root`（つまり通常ケース）では light テーマを、システムの設定がダークモードである場合は dark テーマを使用することを表現します。`:root` は必須のキーであり、ダークテーマ対応を行わないサービスであっても、必ず自身のプロダクトのカラーテーマを渡す必要があります。

`theme` をこのように書くと、`tailwind-config` は内部的に以下のような CSS Variables を生成します。

```css
/* 以下はイメージです */

:root {
  --tailwind-color-background1: #fff;
  --tailwind-color-background2: #f5f5f5;
  /* ... */
}

@media (prefers-color-scheme: dark) {
  :root {
    --tailwind-color-background1: #1f1f1f;
    --tailwind-color-background2: #000000;
    /* ... */
  }
}
```

このとき、以下のように書く必要はありません。キーが `@media` で始まる場合はビルド時に `:root` が補われます。

```js
{
  theme: {
    // これは間違い！！
    '@media (prefers-color-scheme: dark)': {
      ':root': dark
    },

    // 正しくはこう
    '@media (prefers-color-scheme: dark)': dark
  }
}
```

theme のキーとして通常のセレクタを指定することもできます。これにより、ダークモードの切り替えが DOM の状態に依存するケースにも対応します。`localStorage` など JS での切り替えを実装しているアプリケーションはこちらの方式（何かしら CSS セレクタで表現できる方法）を使ってください。

```js
createTailwindConfig({
  version: 'v3',
  theme: {
    ':root': light,
    'html[data-theme="dark"]': dark,
  },
})
```

```css
/* 以下はイメージです */

:root {
  --tailwind-color-background1: #fff;
  --tailwind-color-background2: #f5f5f5;
  /* ... */
}

html[data-theme='dark'] {
  --tailwind-color-background1: #1f1f1f;
  --tailwind-color-background2: #000000;
  /* ... */
}
```

### 利用できるクラス

Tailwind.css に通常存在するクラスについては公式ドキュメントを見てください。

https://tailwindcss.com/

`@charcoal-ui/tailwind-config` が独自に定義しているクラスについては Storybook を見てください。

https://pixiv.github.io/charcoal/?path=/docs/tailwind-config-colors-doc--docs
