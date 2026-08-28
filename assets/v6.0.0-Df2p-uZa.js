import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-D7Q7-7QP.js";import{M as n,c as r,u as i}from"./iframe-CETtDE6Y.js";import{t as a}from"./mdx-react-shim-DjOGpv-q.js";function o(e){let n={a:`a`,blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`v6.0.0`}),`
`,(0,c.jsx)(n.h1,{id:`charcoal-uireactv600`,children:`@charcoal-ui/react@v6.0.0`}),`
`,(0,c.jsxs)(n.p,{children:[`v6 では、`,(0,c.jsx)(n.code,{children:`@charcoal-ui/react`}),` のコンポーネントを Design Token 2.0 に対応させました。あわせて、react-sandbox からのコンポーネント移行、React Aria の依存関係の再編、アイコンの SSR 対応などを行っています。`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`非推奨:`}),` `,(0,c.jsx)(n.code,{children:`@charcoal-ui/react-sandbox`}),` は v6 から非推奨です。次のメジャーバージョンでパッケージの削除を検討しています。新規に利用せず、既存の実装は `,(0,c.jsx)(n.code,{children:`@charcoal-ui/react`}),` へ順次移行してください。`]}),`
`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h1,{id:`v5-からの移行チェックリスト`,children:`v5 からの移行チェックリスト`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`@charcoal-ui/react`}),` と、直接利用している `,(0,c.jsx)(n.code,{children:`@charcoal-ui/*`}),` パッケージを v6 に更新します。`]}),`
`,(0,c.jsxs)(n.li,{children:[`Design Token 1.0 の見た目を維持する場合は `,(0,c.jsx)(n.code,{children:`@charcoal-ui/theme/css/v1/remap.css`}),`、Design Token 2.0 を使う場合は `,(0,c.jsx)(n.code,{children:`@charcoal-ui/theme/css/v2/light.css`}),` と `,(0,c.jsx)(n.code,{children:`dark.css`}),` を読み込みます。
a. Design Token 2.0の見た目を使用したい範囲に `,(0,c.jsx)(n.code,{children:`.ch-token-v2`}),` クラスが有効になるように指定します。`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`TagItem`}),` をボタンとして使っている場合は、`,(0,c.jsx)(n.code,{children:`component="button"`}),` を明示します。`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`UnstableTextEllipsis`}),` / `,(0,c.jsx)(n.code,{children:`UnstablePagination`}),` を stable な export 名へ置き換えます。`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`@charcoal-ui/react-sandbox`}),` を利用している場合は、`,(0,c.jsx)(n.code,{children:`@charcoal-ui/react`}),` へ順次移行します。`]}),`
`,(0,c.jsxs)(n.li,{children:[`peer dependency の解決エラーが出る場合は、`,(0,c.jsx)(n.code,{children:`react-aria`}),` と `,(0,c.jsx)(n.code,{children:`react-stately`}),` をアプリケーションへ追加します。`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-diff`,children:`-import { UnstableTextEllipsis, UnstablePagination } from '@charcoal-ui/react'
+import { TextEllipsis, Pagination } from '@charcoal-ui/react'
`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`// v5 と同じく button として使う場合
<TagItem component="button" label="タグ" />
`})}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h1,{id:`design-token-20`,children:`Design Token 2.0`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`@charcoal-ui/react`}),` のコンポーネントで使われる CSS Variables を、新しい Design Token 2.0 で提供します。あわせて `,(0,c.jsx)(n.code,{children:`@charcoal-ui/theme`}),` の CSS・トークン出力を再編し、`,(0,c.jsx)(n.code,{children:`unstable-`}),` プレフィックスを外しました。`]}),`
`,(0,c.jsxs)(n.p,{children:[`v6 のコンポーネント CSS だけを読み込んでも、必要な `,(0,c.jsx)(n.code,{children:`--charcoal-color-*`}),` や `,(0,c.jsx)(n.code,{children:`--charcoal-space-*`}),` は定義されません。Design Token 1.0 互換レイヤーまたは Design Token 2.0 の CSS を必ずあわせて読み込んでください。`]}),`
`,(0,c.jsx)(n.h2,{id:`インストール`,children:`インストール`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npm install --save-dev @charcoal-ui/theme @charcoal-ui/tailwind-config
npm install @charcoal-ui/react

# Tailwind CSS を利用する場合
npm install --save-dev @charcoal-ui/tailwind-config
`})}),`
`,(0,c.jsx)(n.h2,{id:`css-を読み込む`,children:`CSS を読み込む`}),`
`,(0,c.jsx)(n.p,{children:`既存画面の見た目をできるだけ維持して v6 へ更新する場合は、従来の Design Token 1.0 を供給する仕組みに加えて、互換レイヤーを読み込みます。`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`// Design Token 2.0
import '@charcoal-ui/theme/css/v2/light.css'
import '@charcoal-ui/theme/css/v2/dark.css'

// Design Token 2.0 のトークン名を Design Token 1.0 相当の値へ解決する互換レイヤー
import '@charcoal-ui/theme/css/v1/remap.css'

// コンポーネント実装の CSS
import '@charcoal-ui/react/dist/index.css'
`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`2.0`}),`（`,(0,c.jsx)(n.code,{children:`css/v2/light.css`}),` / `,(0,c.jsx)(n.code,{children:`css/v2/dark.css`}),`）: `,(0,c.jsx)(n.code,{children:`.ch-token-v2`}),` の内側で有効になるデザイントークン。`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`1.0 互換`}),`（`,(0,c.jsx)(n.code,{children:`css/v1/remap.css`}),`）: 2.0 のトークン名（`,(0,c.jsx)(n.code,{children:`--charcoal-color-*`}),`）を v1 相当の値へ解決する互換レイヤー。既存の見た目を保ったまま 2.0 のコンポーネントへ移行するために使います。値は canonical な `,(0,c.jsx)(n.code,{children:`--charcoal-*`}),`（v1 トークン）を参照するため、テーマ（light/dark）に追従します。`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`CSS を読み込むだけでは、ライトテーマの Token V2 は有効になりません。Token V2 を使いたい範囲に `,(0,c.jsx)(n.code,{children:`.ch-token-v2`}),` を付けます。`]}),`
`,(0,c.jsx)(n.h2,{id:`コンポーネントで-token-v2-を有効にする`,children:`コンポーネントで Token V2 を有効にする`}),`
`,(0,c.jsxs)(n.p,{children:[`もっとも小さく導入する場合は、Token V2 で表示したいコンポーネントを `,(0,c.jsx)(n.code,{children:`.ch-token-v2`}),` で囲みます。`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`import { Button, TextField } from '@charcoal-ui/react'

export const FormActions = () => (
  <div className="ch-token-v2">
    <TextField label="タイトル" />
    <Button variant="Primary">保存</Button>
  </div>
)
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`.ch-token-v2`}),` は対象コンポーネント自身か、その親要素に付けてください。CSS Variables は継承によって適用されるため、兄弟要素や離れた要素には影響しません。`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`import { Button } from '@charcoal-ui/react'

export const CompareButtons = () => (
  <>
    <Button>Design Token 1.0</Button>
    <span className="ch-token-v2">
      <Button>Design Token 2.0</Button>
    </span>
  </>
)
`})}),`
`,(0,c.jsx)(n.h3,{id:`画面全体で有効にする`,children:`画面全体で有効にする`}),`
`,(0,c.jsxs)(n.p,{children:[`画面全体を Design Token 2.0 に切り替える場合は、アプリケーションのルート要素に `,(0,c.jsx)(n.code,{children:`.ch-token-v2`}),` を付けます。`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-html`,children:`<html class="ch-token-v2" data-theme="light">
  <body>
    <div id="root"></div>
  </body>
</html>
`})}),`
`,(0,c.jsx)(n.h3,{id:`一部のコンポーネントだけで試す`,children:`一部のコンポーネントだけで試す`}),`
`,(0,c.jsxs)(n.p,{children:[`既存画面へ段階的に導入する場合は、検証したいコンポーネント単位で `,(0,c.jsx)(n.code,{children:`.ch-token-v2`}),` を付けます。Token V2 は CSS Variables を継承して効くため、`,(0,c.jsx)(n.code,{children:`.ch-token-v2`}),` は対象コンポーネント自身かその親要素に付けてください（兄弟要素や離れた要素には影響しません）。`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`import { Button } from '@charcoal-ui/react'

export const CompareButtons = () => (
  <>
    <Button>Token V1</Button>
    <span className="ch-token-v2">
      <Button>Token V2</Button>
    </span>
  </>
)
`})}),`
`,(0,c.jsx)(n.h2,{id:`テーマの切り替え`,children:`テーマの切り替え`}),`
`,(0,c.jsxs)(n.p,{children:[`テーマは `,(0,c.jsx)(n.code,{children:`document.documentElement`}),` の `,(0,c.jsx)(n.code,{children:`data-theme`}),` 属性で切り替えます。`,(0,c.jsx)(n.code,{children:`data-theme`}),` を省略した場合は light として扱われます。`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`document.documentElement.dataset.theme = 'light'
document.documentElement.dataset.theme = 'dark'
`})}),`
`,(0,c.jsx)(n.h3,{id:`dark-theme-のスコープに関する注意`,children:`dark theme のスコープに関する注意`}),`
`,(0,c.jsxs)(n.p,{children:[`Design Token 2.0 の light theme は `,(0,c.jsx)(n.code,{children:`.ch-token-v2`}),` の内側にスコープされますが、dark theme は `,(0,c.jsx)(n.code,{children:`:root[data-theme='dark']`}),` に定義されます。そのため `,(0,c.jsx)(n.code,{children:`data-theme="dark"`}),` に切り替えた場合は、`,(0,c.jsx)(n.code,{children:`.ch-token-v2`}),` の有無にかかわらず Design Token 2.0 の dark theme がページ全体で有効になります。`]}),`
`,(0,c.jsx)(n.p,{children:`Design Token 1.0 と Design Token 2.0 を同じ画面で段階的に比較する場合は、light theme で確認してください。`}),`
`,(0,c.jsx)(n.h2,{id:`text-density`,children:`Text density`}),`
`,(0,c.jsx)(n.p,{children:`Design Token 2.0 では、タイポグラフィの密度を切り替えるクラスを提供します。クラスを付けた要素の内側で、semantic な font-size / line-height token の値が切り替わります。`}),`
`,(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:`クラス`}),(0,c.jsx)(n.th,{children:`用途`})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:`ch-text-dn-compact`})}),(0,c.jsx)(n.td,{children:`情報密度の高い表示`})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:`ch-text-dn-default`})}),(0,c.jsx)(n.td,{children:`標準の表示`})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:`ch-text-dn-cozy`})}),(0,c.jsx)(n.td,{children:`大きくゆとりのある表示`})]})]})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`<div className="ch-token-v2 ch-text-dn-compact">
  <p className="text-body">Compact body text</p>
</div>
`})}),`
`,(0,c.jsx)(n.h2,{id:`storybook-で確認する`,children:`Storybook で確認する`}),`
`,(0,c.jsxs)(n.p,{children:[`story の `,(0,c.jsx)(n.code,{children:`parameters.tokenVersion`}),` に `,(0,c.jsx)(n.code,{children:`v2`}),` を指定すると、decorator が `,(0,c.jsx)(n.code,{children:`document.documentElement`}),` に `,(0,c.jsx)(n.code,{children:`.ch-token-v2`}),` を付けます。story 側で wrapper を追加しなくても Design Token 2.0 の見た目を確認できます。`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`export const TokenV2: StoryObj<typeof Button> = {
  parameters: { tokenVersion: 'v2' },
  render: () => <Button variant="Primary">Button</Button>,
}
`})}),`
`,(0,c.jsxs)(n.h2,{id:`charcoal-uitheme-の-export-変更破壊的変更`,children:[(0,c.jsx)(n.code,{children:`@charcoal-ui/theme`}),` の export 変更（破壊的変更）`]}),`
`,(0,c.jsxs)(n.p,{children:[`CSS・トークン出力の再編と `,(0,c.jsx)(n.code,{children:`unstable-`}),` プレフィックス削除により、subpath export が変わります。`]}),`
`,(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:`旧`}),(0,c.jsx)(n.th,{children:`新`})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:`@charcoal-ui/theme/unstable-css/_variables_light.css`})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:`@charcoal-ui/theme/css/v2/light.css`})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:`@charcoal-ui/theme/unstable-css/_variables_dark.css`})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:`@charcoal-ui/theme/css/v2/dark.css`})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:`（新規）Design Token 1.0 互換レイヤー`}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:`@charcoal-ui/theme/css/v1/remap.css`})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:`@charcoal-ui/theme/unstable-token-object`})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:`@charcoal-ui/theme/token-object`})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:`@charcoal-ui/theme/unstable-tokens/*`})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:`@charcoal-ui/theme/tokens/*`})})]})]})]}),`
`,(0,c.jsx)(n.p,{children:`次のように import パスを置き換えてください。`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-diff`,children:`-import tokens from '@charcoal-ui/theme/unstable-tokens/css-variables.json'
+import tokens from '@charcoal-ui/theme/tokens/css-variables.json'
`})}),`
`,(0,c.jsx)(n.h2,{id:`design-token-10-互換モードの制限`,children:`Design Token 1.0 互換モードの制限`}),`
`,(0,c.jsx)(n.p,{children:`Design Token 2.0 では、複数の Design Token 1.0 のトークンを 1 つの semantic token に統合しています。Design Token 1.0 互換モードでは単一の remap 値から複数の旧値を同時に再現できないため、以下の箇所などで v5 と完全に同じ配色にならない場合があります。`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Button、Checkbox、DropdownSelector、Modal の見出し、MultiSelect、Radio、Switch のテキスト色`}),`
`,(0,c.jsx)(n.li,{children:`Checkbox と Radio の未選択時のボーダー色`}),`
`,(0,c.jsx)(n.li,{children:`HintText のアイコンと LoadingSpinner の色`}),`
`,(0,c.jsx)(n.li,{children:`MultiSelect の checkbox と Switch の背景色`}),`
`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h1,{id:`コンポーネント`,children:`コンポーネント`}),`
`,(0,c.jsx)(n.h2,{id:`dropdownselector`,children:`DropdownSelector`}),`
`,(0,c.jsx)(n.p,{children:`iPadOS Safari で Apple Pencil などのペン入力を使用した場合に、DropdownSelector を開けない、選択肢を選べない、または選択肢の外側をタップしても閉じられない問題を修正しました。マウス、タッチ、キーボードでの操作方法に変更はありません。`}),`
`,(0,c.jsx)(n.h2,{id:`textellipsis--pagination-の-stable-化破壊的変更`,children:`TextEllipsis / Pagination の stable 化（破壊的変更）`}),`
`,(0,c.jsxs)(n.p,{children:[`v5 で `,(0,c.jsx)(n.code,{children:`UnstableTextEllipsis`}),` / `,(0,c.jsx)(n.code,{children:`UnstablePagination`}),` として提供していたコンポーネントを stable 化し、`,(0,c.jsx)(n.code,{children:`Unstable`}),` プレフィックスを外しました。旧 export 名は利用できないため、import を置き換えてください。`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-diff`,children:`-import {
-  UnstableTextEllipsis,
-  UnstablePagination,
-} from '@charcoal-ui/react'
+import { TextEllipsis, Pagination } from '@charcoal-ui/react'
`})}),`
`,(0,c.jsxs)(n.p,{children:[`react-sandbox の TextEllipsis および Pager・LinkPager から移行する場合も、styled-components に依存しない `,(0,c.jsx)(n.code,{children:`@charcoal-ui/react`}),` の実装を利用できます。`]}),`
`,(0,c.jsx)(n.h2,{id:`textellipsis`,children:`TextEllipsis`}),`
`,(0,c.jsxs)(n.p,{children:[`複数行のテキストに表示行数制限を設け、はみ出した部分を `,(0,c.jsx)(n.code,{children:`...`}),` で省略するコンポーネントです。`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`-import { TextEllipsis } from '@charcoal-ui/react-sandbox'
+import { TextEllipsis } from '@charcoal-ui/react'

<TextEllipsis lineHeight={24} lineLimit={2}>
  長いテキスト...
</TextEllipsis>
`})}),`
`,(0,c.jsx)(n.h3,{id:`react-sandbox-との主な違い`,children:`react-sandbox との主な違い`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`styled-components を廃止し、CSS ファイルでスタイルを当てています。`}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lineHeight`}),` は省略可能で、未指定時は親の line-height を継承します。`]}),`
`,(0,c.jsxs)(n.li,{children:[`ツールチップの on/off（`,(0,c.jsx)(n.code,{children:`showTooltip`}),`）や1行時の挙動（`,(0,c.jsx)(n.code,{children:`useNowrap`}),`）などの props を追加しています。`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`pagination`,children:`Pagination`}),`
`,(0,c.jsx)(n.p,{children:`ページ番号の一覧と「前へ・次へ」を表示し、ページ遷移を提供するコンポーネントです。ボタンモード（react-sandbox の Pager 相当）とリンクモード（LinkPager 相当）の2通りで使います。`}),`
`,(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{children:`ボタンモード（Pager）`}),(0,c.jsx)(n.th,{children:`リンクモード（LinkPager）`})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:`props`}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:`onChange(newPage)`})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:`makeUrl(page) => string`})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:`中身`}),(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.code,{children:`<button>`}),` + onClick`]}),(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.code,{children:`<a>`}),` または `,(0,c.jsx)(n.code,{children:`component`})]})]})]})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`-import { Pager, LinkPager } from '@charcoal-ui/react-sandbox'
+import { Pagination } from '@charcoal-ui/react'

// ボタンモード
<Pagination page={page} pageCount={10} onChange={setPage} />

// リンクモード
<Pagination page={1} pageCount={10} makeUrl={(p) => \`?page=\${p}\`} />

// Next.js の Link は href を受け取るためそのまま利用可能
<Pagination
  page={1}
  pageCount={10}
  makeUrl={(p) => \`?page=\${p}\`}
  component={Link}
  linkProps={{ scroll: false }}
/>
`})}),`
`,(0,c.jsx)(n.h3,{id:`react-sandbox-との主な違い-1`,children:`react-sandbox との主な違い`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Pager と LinkPager を1つのコンポーネントに統合し、`,(0,c.jsx)(n.code,{children:`onChange`}),` または `,(0,c.jsx)(n.code,{children:`makeUrl`}),` でモードを切り替えます。`]}),`
`,(0,c.jsxs)(n.li,{children:[`sandbox の LinkPager は `,(0,c.jsx)(n.code,{children:`useComponentAbstraction()`}),` の `,(0,c.jsx)(n.code,{children:`Link`}),`（`,(0,c.jsx)(n.code,{children:`to`}),`）に依存していました。v6 では `,(0,c.jsx)(n.code,{children:`makeUrl`}),` で URL を返し、`,(0,c.jsx)(n.code,{children:`component`}),` で `,(0,c.jsx)(n.code,{children:`<a>`}),` や Next.js の `,(0,c.jsx)(n.code,{children:`Link`}),` を指定します。`]}),`
`,(0,c.jsx)(n.li,{children:`styled-components を廃止し、前後ボタンやページ番号には IconButton を利用しています。`}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`size`}),`（S/M）と `,(0,c.jsx)(n.code,{children:`pageRangeDisplayed`}),`（5または7）を追加しています。`]}),`
`,(0,c.jsx)(n.li,{children:`Tailwind Preflight が有効な環境でも前後ボタンの領域を維持するよう、無効なボタンの非表示方法を修正しました。`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`carousel`,children:`Carousel`}),`
`,(0,c.jsxs)(n.p,{children:[`react-sandbox の Carousel を、styled-components と react-spring に依存しない形で `,(0,c.jsx)(n.code,{children:`@charcoal-ui/react`}),` に追加しました。native scroll と CSS scroll-snap を利用し、キーボード操作、インジケーター、表示サイズなどに対応しています。`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-diff`,children:`-import { Carousel } from '@charcoal-ui/react-sandbox'
+import { Carousel } from '@charcoal-ui/react'
`})}),`
`,(0,c.jsxs)(n.p,{children:[`詳しくは `,(0,c.jsx)(n.a,{href:`/docs/react-carousel-migration-guide--docs`,children:`Carouselのマイグレーションガイド`}),` を参照してください。`]}),`
`,(0,c.jsx)(n.h2,{id:`tagitem-の既定要素変更破壊的変更`,children:`TagItem の既定要素変更（破壊的変更）`}),`
`,(0,c.jsxs)(n.p,{children:[`TagItem の既定のルート要素を `,(0,c.jsx)(n.code,{children:`<button>`}),` から `,(0,c.jsx)(n.code,{children:`<a>`}),` へ変更しました。既定の ref 型も `,(0,c.jsx)(n.code,{children:`HTMLButtonElement`}),` から `,(0,c.jsx)(n.code,{children:`HTMLAnchorElement`}),` へ変わります。`]}),`
`,(0,c.jsxs)(n.p,{children:[`リンクとして使う場合は `,(0,c.jsx)(n.code,{children:`href`}),` を渡してください。v5 と同じボタンとして使う場合は `,(0,c.jsx)(n.code,{children:`component="button"`}),` を明示します。`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`// リンク
<TagItem href="/tags/illustration" label="イラスト" />

// ボタン
<TagItem component="button" label="イラスト" onClick={handleClick} />
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`disabled`}),` prop も追加しました。リンクとして描画する場合は React Aria のリンク処理によって操作を無効化し、ボタンの場合は native の `,(0,c.jsx)(n.code,{children:`disabled`}),` 属性を設定します。`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h1,{id:`icon--ssr`,children:`Icon / SSR`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`@charcoal-ui/react`}),` の Icon と `,(0,c.jsx)(n.code,{children:`@charcoal-ui/icons`}),` の `,(0,c.jsx)(n.code,{children:`<pixiv-icon>`}),` に、固定 px サイズを指定する API を追加しました。`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`// React
<Icon name="24/Add" fixedSize={12} />
`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-html`,children:`<!-- vanilla HTML -->
<pixiv-icon
  name="24/Add"
  fixed-size="12"
  style="--charcoal-icon-size: 12px"
></pixiv-icon>
`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`fixedSize`}),` / `,(0,c.jsx)(n.code,{children:`fixed-size`}),` は `,(0,c.jsx)(n.code,{children:`scale`}),` と `,(0,c.jsx)(n.code,{children:`unsafeNonGuidelineScale`}),` / `,(0,c.jsx)(n.code,{children:`unsafe-non-guideline-scale`}),` より優先されます。`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`unsafeNonGuidelineScale`}),` / `,(0,c.jsx)(n.code,{children:`unsafe-non-guideline-scale`}),` は非推奨になりました。新規実装では固定 px サイズを使ってください。`]}),`
`,(0,c.jsxs)(n.li,{children:[`React の `,(0,c.jsx)(n.code,{children:`<Icon>`}),` は、Custom Element の upgrade 前後で同じサイズになるよう、必要なクラスと CSS Variable を自動で設定します。`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`<pixiv-icon>`}),` を直接使う場合は、Custom Element の JavaScriptと、SSR・初期描画時のレイアウトシフトを防ぐ CSS の両方を読み込んでください。`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`import '@charcoal-ui/icons'
import '@charcoal-ui/icons/css/icon.css'
`})}),`
`,(0,c.jsxs)(n.p,{children:[`vanilla HTML で `,(0,c.jsx)(n.code,{children:`fixed-size`}),` を使う場合、upgrade 前にも同じサイズを確保するため、同じ値の `,(0,c.jsx)(n.code,{children:`--charcoal-icon-size`}),` をインラインで指定してください。React の `,(0,c.jsx)(n.code,{children:`<Icon fixedSize={N}>`}),` では自動的に指定されます。`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h1,{id:`react-aria-モノパッケージへの移行`,children:`React Aria モノパッケージへの移行`}),`
`,(0,c.jsxs)(n.p,{children:[`React Aria v1.17.0 に合わせ、`,(0,c.jsx)(n.code,{children:`@charcoal-ui/react`}),` の React Aria 依存を個別パッケージ（`,(0,c.jsx)(n.code,{children:`@react-aria/*`}),`、`,(0,c.jsx)(n.code,{children:`@react-stately/*`}),`）からモノパッケージ（`,(0,c.jsx)(n.code,{children:`react-aria`}),`、`,(0,c.jsx)(n.code,{children:`react-stately`}),`）へ移行しました。`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`react-aria`}),` と `,(0,c.jsx)(n.code,{children:`react-stately`}),` は dependencies から peerDependencies に変わります。`]}),`
`,(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:`package`}),(0,c.jsx)(n.th,{children:`peer dependency`})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:`react-aria`})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:`>= 3.48.0`})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:`react-stately`})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:`>= 3.46.0`})})]})]})]}),`
`,(0,c.jsx)(n.p,{children:`利用しているパッケージマネージャーで peer dependency が自動的に解決されない場合や、解決エラーが表示された場合は明示的にインストールしてください。`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npm install react-aria@">=3.48.0" react-stately@">=3.46.0"
`})}),`
`,(0,c.jsxs)(n.p,{children:[`アプリケーションが `,(0,c.jsx)(n.code,{children:`@react-aria/*`}),` / `,(0,c.jsx)(n.code,{children:`@react-stately/*`}),` を直接 import している場合は、React Aria 公式 codemod でモノパッケージ import に移行できます。`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx @react-spectrum/codemods use-monopackages --path /path/to/src

# サブパス import（より細かいバンドル制御）
npx @react-spectrum/codemods use-subpaths --path /path/to/src
`})}),`
`,(0,c.jsx)(n.p,{children:`既存の個別パッケージとも共存できますが、モノパッケージとのバージョン不整合に注意してください。`}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h1,{id:`その他の変更`,children:`その他の変更`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`@charcoal-ui/react`}),` の配布形式をモジュール単位に変更し、利用していないコンポーネントとその依存をアプリケーション側の bundler が tree-shaking しやすくしました。対応は不要です。`]}),`
`,(0,c.jsxs)(n.li,{children:[`Modal の mobile bottom sheet アニメーションを react-spring から CSS transition へ移行し、`,(0,c.jsx)(n.code,{children:`@react-spring/web`}),` への依存を削除しました。`]}),`
`,(0,c.jsxs)(n.li,{children:[`IconButton の `,(0,c.jsx)(n.code,{children:`Default`}),` variant の通常時背景色を透明に変更しました。hover / press / active 時には引き続き背景色が付きます。`]}),`
`,(0,c.jsxs)(n.li,{children:[`TextArea の `,(0,c.jsx)(n.code,{children:`rows`}),`、`,(0,c.jsx)(n.code,{children:`maxRows`}),`、`,(0,c.jsx)(n.code,{children:`autoHeight`}),` と文字数カウンターを組み合わせた場合の高さ計算を修正しました。`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};