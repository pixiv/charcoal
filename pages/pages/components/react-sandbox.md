# `@charcoal-ui/react-sandbox`

charcoal デザインシステムに則った React コンポーネントを試験的に公開しているパッケージです。

`@charcoal-ui/react` と比較して破壊的な変更が頻繁に行われる可能性があります。

## インストール

npm

```bash
npm i @charcoal-ui/react-sandbox
```

yarn

```bash
yarn add @charcoal-ui/react-sandbox
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
