# `@charcoal-ui/icons`

SVG アイコンを [Custom Elements](https://developer.mozilla.org/ja/docs/Web/Web_Components/Using_custom_elements)として利用できるライブラリです。

### インストール

npm

```bash
npm i @charcoal-ui/icons
```

yarn

```bash
yarn add @charcoal-ui/icons
```

### 使い方

アプリケーションのエントリポイントで `import` します。 Storybook の場合は `preview.(js|ts)` に書くと良いでしょう。

```ts
import '@charcoal-ui/icons'
```

これだけで、 `<pixiv-icon>` という HTML タグが利用可能になります。

TypeScript の型定義がグローバルにインストールされるので、JSX で `<pixiv-icon>` を書く際にも型チェッ
クが効きます。

### 属性

```html
<pixiv-icon name="16/Add" scale="1"></pixiv-icon>
```

| 属性名                         | 型                   | 説明                                                                                                                                           |
| ------------------------------ | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **name**                       | String               | アイコンの名前です。`${size}/${filename}` という形式をしています。利用できる名前の一覧はリポジトリの `packages/icons/svg` 以下を見てください。 |
| **scale**                      | Number `1 or 2 or 3` | アイコンの拡大率を倍率で指定します。拡大は `24/〇〇` 系のアイコンでのみサポートされます。                                                      |
| **unsafe-non-guideline-scale** | Number               | ガイドラインに従わない倍率を無理やり指定する場合に使います。                                                                                   |

### 独自のアイコンを登録する

`pixiv-icon` の name に存在しない SVG をアイコンとして登録することができます。

その場合も名前の形式は `${size}/${name}` である必要があります。

TypeScript 環境下では、`KnownIconType` という型を拡張することで、カスタムアイコンに対しても補完が効くようになります。

```ts
import { PixivIcon } from '@charcoal-ui/icons'
import NewFeature from './NewFeature.svg'

PixivIcon.extend({
  '16/NewFeature': require('./icons/16/NewFeature.svg'),
  '24/NewFeature': 'https://example.com/hoge.svg',
  '32/NewFeature': NewFeature,
})

declare module '@charcoal-ui/icons' {
  export interface KnownIconType {
    '16/NewFeature': unknown
    '24/NewFeature': unknown
    '32/NewFeature': unknown
  }
}
```

### React と組み合わせて使う

Custom Element は **`className` という props を受け取ることが通常できません**。

https://ja.reactjs.org/docs/web-components.html#using-web-components-in-react

もし `styled-components` などを使っていて `className` を渡せないと困るケースでは、ラッパーコンポーネントを作ってください。

```tsx
import { Props as IconProps } from '@charcoal-ui/icons'

interface Props extends Omit<IconProps, 'class'> {
  className?: string
}

export const Icon: React.FC<Props> = ({ className, ...props }) => (
  <pixiv-icon class={className} {...props} />
)
```

### 収録アイコン

[Storybook](https://pixiv.github.io/charcoal?path=/story/icons-pixivicon-pixiv-icon--default) をご覧ください

### Next.js と組み合わせる場合

Next.js のデフォルトの webpack 設定では svg が正しく import されないことがあります。

少なくとも `@charcoal-ui/icons` 以下の svg については `type: 'asset'` で読むようにしてください。

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/u,
      type: 'asset',
    })

    return config
  },
}
```

### Vite と組み合わせる場合

`@charcoal-ui/icons` は内部で SVG を dynamic import しています。

Vite はデフォルトで dynamic import をサポートしますが、`node_modules` 以下のファイルは `import()` の対象外にする設定がされているため、ここを変更する必要があります。

```ts
// vite.config.ts
export default defineConfig({
  plugins: [react(), charcoalIcons()],
})

function charcoalIcons(): PluginOption {
  return {
    name: 'charcoal-icons',
    config() {
      return {
        optimizeDeps: {
          // 開発環境の Pre-bundling で壊れる
          // https://vitejs.dev/guide/dep-pre-bundling.html#the-why
          exclude: ['@charcoal-ui/icons'],
        },
        build: {
          rollupOptions: {
            // dynamicImport がビルド時に解決されない
            // https://vitejs.dev/config/#build-dynamicimportvarsoptions
            plugins: [dynamicImport()],
          },
        },
      }
    },
  }
}
```
