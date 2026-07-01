import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C-uoaJhr.js";import{c as n,mt as r,u as i}from"./iframe-y42Cim2R.js";import{t as a}from"./mdx-react-shim-DErduoTG.js";function o(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`theme/Design Token 2.0`}),`
`,(0,c.jsx)(r.h1,{id:`design-token-20-セットアップガイド`,children:`Design Token 2.0 セットアップガイド`}),`
`,(0,c.jsx)(r.h2,{id:`インストール`,children:`インストール`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-bash`,children:`npm install --save-dev @charcoal-ui/theme @charcoal-ui/tailwind-config
npm install @charcoal-ui/react
`})}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-tsx`,children:`// Design Token 1.0互換モード
import '@charcoal-ui/theme/css/_token_v1.css'

// Design Token 2.0
import '@charcoal-ui/theme/css/_variables_dark.css'
import '@charcoal-ui/theme/css/_variables_light.css'

// コンポーネント実装のCSS
import '@charcoal-ui/react/dist/index.css'
`})}),`
`,(0,c.jsx)(r.h2,{id:`概要`,children:`概要`}),`
`,(0,c.jsxs)(r.p,{children:[`Design Token 2.0 は `,(0,c.jsx)(r.code,{children:`@charcoal-ui/react`}),` のコンポーネントで使われる CSS Variables を提供します。`]}),`
`,(0,c.jsxs)(r.p,{children:[`Token V2 の変数は `,(0,c.jsx)(r.code,{children:`.ch-token-v2`}),` が付いた要素の内側で有効になります。既存の Design Token 1.0 と同じ画面で共存できるように、まず CSS を読み込み、Token V2 を使いたい範囲だけに `,(0,c.jsx)(r.code,{children:`.ch-token-v2`}),` を付けてください。`]}),`
`,(0,c.jsx)(r.h2,{id:`css-を読み込む`,children:`CSS を読み込む`}),`
`,(0,c.jsx)(r.p,{children:`アプリケーションのエントリポイントで、Token V1 互換 CSS、Token V2 の CSS、React コンポーネントの CSS を読み込みます。`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-tsx`,children:`import '@charcoal-ui/theme/css/_token_v1.css'
import '@charcoal-ui/theme/css/_variables_dark.css'
import '@charcoal-ui/theme/css/_variables_light.css'
import '@charcoal-ui/react/dist/index.css'
`})}),`
`,(0,c.jsxs)(r.p,{children:[`CSS を読み込むだけでは、ライトテーマの Token V2 は有効になりません。`,(0,c.jsx)(r.code,{children:`@charcoal-ui/react`}),` のコンポーネントを Token V2 で表示したい範囲に `,(0,c.jsx)(r.code,{children:`.ch-token-v2`}),` を付けます。`]}),`
`,(0,c.jsx)(r.h2,{id:`コンポーネントで-token-v2-を有効にする`,children:`コンポーネントで Token V2 を有効にする`}),`
`,(0,c.jsxs)(r.p,{children:[`もっとも小さく導入する場合は、Token V2 で表示したいコンポーネントを `,(0,c.jsx)(r.code,{children:`.ch-token-v2`}),` で囲みます。`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-tsx`,children:`import { Button, TextField } from '@charcoal-ui/react'

export const FormActions = () => (
  <div className="ch-token-v2">
    <TextField label="タイトル" />
    <Button variant="Primary">保存</Button>
  </div>
)
`})}),`
`,(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:`.ch-token-v2`}),` の内側では、`,(0,c.jsx)(r.code,{children:`@charcoal-ui/react`}),` のコンポーネント CSS が参照する `,(0,c.jsx)(r.code,{children:`--charcoal-color-*`}),` や `,(0,c.jsx)(r.code,{children:`--charcoal-space-*`}),` などの CSS Variables が Token V2 の値になります。`,(0,c.jsx)(r.code,{children:`.ch-token-v2`}),` の外側にあるコンポーネントは、従来どおり Token V1 互換の値を参照します。`]}),`
`,(0,c.jsx)(r.h3,{id:`画面全体で有効にする`,children:`画面全体で有効にする`}),`
`,(0,c.jsxs)(r.p,{children:[`画面全体を Token V2 に切り替える場合は、アプリケーションのルート要素に `,(0,c.jsx)(r.code,{children:`.ch-token-v2`}),` を付けます。`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-tsx`,children:`import { Button } from '@charcoal-ui/react'

export const App = () => (
  <main className="ch-token-v2">
    <Button variant="Primary">投稿する</Button>
  </main>
)
`})}),`
`,(0,c.jsx)(r.p,{children:`HTML ルートに付けても有効です。`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-html`,children:`<html class="ch-token-v2" data-theme="light">
  <body>
    <div id="root"></div>
  </body>
</html>
`})}),`
`,(0,c.jsx)(r.h3,{id:`一部のコンポーネントだけで試す`,children:`一部のコンポーネントだけで試す`}),`
`,(0,c.jsxs)(r.p,{children:[`既存画面へ段階的に導入する場合は、検証したいコンポーネント単位で `,(0,c.jsx)(r.code,{children:`.ch-token-v2`}),` を付けます。`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-tsx`,children:`import { Button } from '@charcoal-ui/react'

export const CompareButtons = () => (
  <>
    <Button>Token V1</Button>

    <span className="ch-token-v2">
      <Button>Token V2</Button>
    </span>
  </>
)
`})}),`
`,(0,c.jsxs)(r.p,{children:[`Token V2 は CSS Variables を継承して効くため、`,(0,c.jsx)(r.code,{children:`.ch-token-v2`}),` は対象コンポーネント自身か、その親要素に付けてください。兄弟要素や離れた要素に付けても影響しません。`]}),`
`,(0,c.jsx)(r.h2,{id:`テーマの切り替え`,children:`テーマの切り替え`}),`
`,(0,c.jsxs)(r.p,{children:[`テーマは `,(0,c.jsx)(r.code,{children:`document.documentElement`}),` の `,(0,c.jsx)(r.code,{children:`data-theme`}),` 属性で切り替えます。`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-tsx`,children:`document.documentElement.dataset.theme = 'light'
document.documentElement.dataset.theme = 'dark'
`})}),`
`,(0,c.jsxs)(r.p,{children:[`Token V2 の適用範囲は `,(0,c.jsx)(r.code,{children:`.ch-token-v2`}),` で指定します。light または `,(0,c.jsx)(r.code,{children:`data-theme`}),` を省略した状態では、特定のコンポーネントだけを Token V2 にできます。`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-tsx`,children:`export const TokenV2Area = ({ children }: { children: React.ReactNode }) => (
  <div className="ch-token-v2">{children}</div>
)
`})}),`
`,(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:`data-theme`}),` を省略した場合は light として扱われます。dark theme は `,(0,c.jsx)(r.code,{children:`:root[data-theme='dark']`}),` に対して変数が定義されるため、HTML ルートで切り替えます。`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-html`,children:`<html class="ch-token-v2" data-theme="dark">
  <body>
    <div id="root"></div>
  </body>
</html>
`})}),`
`,(0,c.jsx)(r.h2,{id:`storybook-で確認する`,children:`Storybook で確認する`}),`
`,(0,c.jsxs)(r.p,{children:[`Storybook の story で Token V2 を確認する場合は、`,(0,c.jsx)(r.code,{children:`parameters.tokenVersion`}),` に `,(0,c.jsx)(r.code,{children:`v2`}),` を指定します。`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-tsx`,children:`import { Meta, StoryObj } from '@storybook/react-vite'
import Button from './Button'

export default {
  title: 'react/Button',
  component: Button,
} as Meta<typeof Button>

export const TokenV2: StoryObj<typeof Button> = {
  parameters: {
    tokenVersion: 'v2',
  },
  render: () => <Button variant="Primary">Button</Button>,
}
`})}),`
`,(0,c.jsxs)(r.p,{children:[`このリポジトリの Storybook decorator では、`,(0,c.jsx)(r.code,{children:`parameters.tokenVersion === 'v2'`}),` の story を表示するときに `,(0,c.jsx)(r.code,{children:`document.documentElement.classList`}),` へ `,(0,c.jsx)(r.code,{children:`.ch-token-v2`}),` を付けています。`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-tsx`,children:`document.documentElement.classList.toggle('ch-token-v2', isTokenV2)
`})}),`
`,(0,c.jsx)(r.p,{children:`そのため、story 側で毎回 wrapper を追加しなくても Token V2 の見た目を確認できます。`}),`
`,(0,c.jsx)(r.h2,{id:`導入時の注意`,children:`導入時の注意`}),`
`,(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:`.ch-token-v2`}),` を付け忘れると、React コンポーネントの CSS は Token V2 の値を参照できません。コンポーネントの見た目が想定と違う場合は、まず対象コンポーネント自身か親要素に `,(0,c.jsx)(r.code,{children:`.ch-token-v2`}),` が付いているかを確認してください。`]}),`
`,(0,c.jsxs)(r.p,{children:[`Token V1 と Token V2 を同じ画面で比較する場合は、Token V2 にしたい範囲だけを `,(0,c.jsx)(r.code,{children:`.ch-token-v2`}),` で囲みます。画面全体へ一度に付けると、内側のすべての `,(0,c.jsx)(r.code,{children:`@charcoal-ui/react`}),` コンポーネントが Token V2 の値を参照します。`]}),`
`,(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:`@charcoal-ui/theme/unstable-css/*`}),` は Token V2 の変数をグローバルに定義する用途です。既存コンポーネントと段階的に共存させる場合は、`,(0,c.jsx)(r.code,{children:`.ch-token-v2`}),` でスコープできる `,(0,c.jsx)(r.code,{children:`@charcoal-ui/theme/css/*`}),` を使ってください。`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=r(),a(),i()}))();export{s as default};