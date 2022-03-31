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
