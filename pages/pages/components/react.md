# `@charcoal-ui/react`

charcoal デザインシステムに則った React コンポーネントを提供します。

## インストール

npm

```bash
npm i @charcoal-ui/react
```

yarn

```bash
yarn add @charcoal-ui/react
```

## コンポーネント

[Storybook](https://pixiv.github.io/charcoal) をご覧ください

## 使い方

React コンポーネントは`CharcoalTheme`が提供されている前提で動作します

```tsx
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { light, dark, CharcoalTheme } from '@charcoal-ui/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends CharcoalTheme {}
}

export default () => (
  <ThemeProvider theme={light}>
    <MyApp />
  </ThemeProvider>
)
```

## コンポーネントテストを書く際の注意

`@charcoal-ui/react` を使用しているプロジェクトが Jest（ あるいは Storyshots などを通じて ）のスナップショットテストを行う場合、コンポーネントの id が一貫性を持たない形で生成されることがあります。

これは `@charcoal-ui/react` が内部で依存している react-aria の ID 生成機構によるものであり、現状では以下のような回避策が必要になります。

```js
// jest.config.js または @storybook/addon-storyshots の初期化時

{
  ...
  snapshotSerializers: [
    // handle react-ariaXXXX-X ids that are inserted by a @charcoal-ui dependency when its LayoutEffects
    // get to run. It has no provision to generate predictable ids, and doesn't use React.useId().
    // React.useId() ids have a ':' character in them, and this might also need to be handled if we update
    // React before storyshots is updated to handle that by itself. It should also be easier
    // to mock.
    //
    // The culprit function is useSSRSafeId from @react-aria/ssr, which is used internally
    // all over the place in react-aria.
    {
      test: val => typeof val === 'string' && /react-aria\d+-\d+/gu.test(val),
      serialize: (val, config, indentation, depth, refs, printer) =>
        printer(
          /** @type {string} */ (val).replace(/react-aria\d+-\d+/gu, '[[react-aria-id]]'),
          config,
          indentation,
          depth,
          refs
        )
    },
    ...
  ]
}
```
