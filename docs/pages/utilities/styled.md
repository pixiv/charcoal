# `@charcoal/styled`

charcoal のテーマの制約を利用可能にする styled-components のためのユーティリティです。

## インストール

npm

```bash
npm i @charcoal/styled
```

yarn

```bash
yarn add @charcoal/styled
```

## 使い方

まず `styled-components` を import して ThemeProvider を入れます。

```tsx
import styled, { DefaultTheme, ThemeProvider } from 'styled-components'
import createTheme, { light, Theme } from '@charcoal/styled'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

const theme = createTheme(styled)

export default () => (
  <ThemeProvider theme={light}>
    <MyApp />
  </ThemeProvider>
)
```

こんな感じでコンポーネントを定義します。

```tsx
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
    ])(props)}
`

export default () => <MyComponent big={false}>I am not big</MyComponent>
```
