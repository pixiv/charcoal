# `@charcoal-ui/react`

charcoal デザインシステムに則った React コンポーネントを提供します

## インストール

npm

```
npm i @charcoal-ui/react
```

yarn

```
yarn add @charcoal-ui/react
```

## Server Side Rendering を行う場合の注意点

SSR を行う場合はアプリケーション全体を`<SSRProvider>`で囲む必要があります。

```jsx
import { SSRProvider } from '@charcoal-ui/react'

const App = () => (
  <SSRProvider>
    <Page />
  </SSRProvider>
)
```

既知の不具合として、React の[strict mode](https://reactjs.org/docs/strict-mode.html)が有効化されていると hydration error が発生します。`@charcoal-ui/react`が依存している`react-aria`の不具合 (adobe/react-spectrum#2231, adobe/react-spectrum#779) によるものです。
