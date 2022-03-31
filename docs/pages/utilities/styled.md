# `@charcoal-ui/styled`

charcoal のテーマの制約を利用可能にする styled-components のためのユーティリティです。

## インストール

npm

```bash
npm i @charcoal-ui/styled
```

yarn

```bash
yarn add @charcoal-ui/styled
```

## 使い方

まず `styled-components` を import して ThemeProvider を入れます。

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

こんな感じでコンポーネントを定義します。

```tsx
import styled from 'styled-components'
import createTheme from '@charcoal-ui/styled'
const theme = createTheme(styled)

const MyComponent = styled.div`
  display: flex;
  justify-content: center;

  ${theme((o) => [
    o.bg.surface2, // 背景色を変える
    o.font.text2, // 文字色を変える
    o.typography(20).bold, // フォントサイズを 20px にして太字にする
    o.padding.all(40), // padding を全方向に 40px
    o.margin.vertical(24), // marging を top と bottom だけ 24px
  ])}
`

export default () => <MyComponent>I am a big bold typography</MyComponent>
```

色や文字色など、テーマで定義できる値については `theme(o => )` で提供されます。

それ以外のプロパティはふつうに CSS で書きます（ `o.flex` のようなものは生えません ）。

## 条件つき theme

```tsx
const MyComponent = styled.div<{ big?: boolean }>`
  display: flex;
  justify-content: center;

  ${(props) =>
    theme((o) => [
      o.bg.surface2,
      o.font.text2,

      // 条件でユーティリティを分岐する
      props.big ? o.typography(20).bold : o.typography(14).bold,
    ])}
`

export default () => <MyComponent big={false}>I am not big</MyComponent>
```

## テーマのカスタマイズ

styled-components の`DefaultTheme`を拡張することでテーマのカスタマイズを行うことができます。

```tsx
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { light, dark, CharcoalTheme } from '@charcoal-ui/theme'
import { Material } from '@charcoal-ui/foundation'

type MyTheme = CharcoalTheme & {
  color: {
    mycolor: Material
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends MyTheme {}
}

const myTheme = (theme: CharcoalTheme): MyTheme => ({
  ...theme,
  color: {
    ...theme.color,
    mycolor: '#ff9e8c',
  },
})

export default () => (
  <ThemeProvider theme={myTheme(light)}>
    <StyledText>I am text with mycolor</StyledText>
  </ThemeProvider>
)

const StyledText = styled.h1`
  ${theme((o) => [o.font.mycolor])}
`
```
