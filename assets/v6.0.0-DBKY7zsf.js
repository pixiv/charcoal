import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-BYHlFaUF.js";import{c as n,lt as r,u as i}from"./iframe--1btTK6a.js";import{t as a}from"./mdx-react-shim-DIyDe8yK.js";function o(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`v6.0.0(予定)`}),`
`,(0,c.jsx)(r.h1,{id:`charcoal-uireactv600予定`,children:`@charcoal-ui/react@v6.0.0(予定)`}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h1,{id:`design-token-20`,children:`Design Token 2.0`}),`
`,(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:`@charcoal-ui/react`}),` のコンポーネントで使われる CSS Variables を、新しい Design Token 2.0 で提供します。あわせて `,(0,c.jsx)(r.code,{children:`@charcoal-ui/theme`}),` の CSS・トークン出力を再編し、`,(0,c.jsx)(r.code,{children:`unstable-`}),` プレフィックスを外しました。`]}),`
`,(0,c.jsxs)(r.p,{children:[`Token V2 の変数は `,(0,c.jsx)(r.code,{children:`.ch-token-v2`}),` が付いた要素の内側で有効になります。既存の Design Token 1.0 と同じ画面で共存できるように、まず CSS を読み込み、Token V2 を使いたい範囲だけに `,(0,c.jsx)(r.code,{children:`.ch-token-v2`}),` を付けます。`]}),`
`,(0,c.jsx)(r.h2,{id:`インストール`,children:`インストール`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-bash`,children:`npm install --save-dev @charcoal-ui/theme @charcoal-ui/tailwind-config
npm install @charcoal-ui/react
`})}),`
`,(0,c.jsx)(r.h2,{id:`css-を読み込む`,children:`CSS を読み込む`}),`
`,(0,c.jsx)(r.p,{children:`アプリケーションのエントリポイントで、用途に応じて CSS を読み込みます（コンポーネント実装 CSS は共通）。`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-tsx`,children:`// Design Token 2.0
import '@charcoal-ui/theme/css/v2/light.css'
import '@charcoal-ui/theme/css/v2/dark.css'

// Design Token 1.0 互換モード（2.0 のトークン名を v1 相当の値で供給）
import '@charcoal-ui/theme/css/v1/remap.css'

// コンポーネント実装の CSS
import '@charcoal-ui/react/dist/index.css'
`})}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`2.0`}),`（`,(0,c.jsx)(r.code,{children:`css/v2/light.css`}),` / `,(0,c.jsx)(r.code,{children:`css/v2/dark.css`}),`）: `,(0,c.jsx)(r.code,{children:`.ch-token-v2`}),` の内側で有効になるデザイントークン。`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`1.0 互換`}),`（`,(0,c.jsx)(r.code,{children:`css/v1/remap.css`}),`）: 2.0 のトークン名（`,(0,c.jsx)(r.code,{children:`--charcoal-color-*`}),`）を v1 相当の値へ解決する互換レイヤー。既存の見た目を保ったまま 2.0 のコンポーネントへ移行するために使います。値は canonical な `,(0,c.jsx)(r.code,{children:`--charcoal-*`}),`（v1 トークン）を参照するため、テーマ（light/dark）に追従します。`]}),`
`]}),`
`,(0,c.jsxs)(r.p,{children:[`CSS を読み込むだけでは、ライトテーマの Token V2 は有効になりません。Token V2 を使いたい範囲に `,(0,c.jsx)(r.code,{children:`.ch-token-v2`}),` を付けます。`]}),`
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
`,(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:`.ch-token-v2`}),` の内側では、`,(0,c.jsx)(r.code,{children:`@charcoal-ui/react`}),` のコンポーネント CSS が参照する `,(0,c.jsx)(r.code,{children:`--charcoal-color-*`}),` や `,(0,c.jsx)(r.code,{children:`--charcoal-space-*`}),` などが Token V2 の値になります。外側のコンポーネントは従来どおり Token V1 互換の値を参照します。`]}),`
`,(0,c.jsx)(r.h3,{id:`画面全体で有効にする`,children:`画面全体で有効にする`}),`
`,(0,c.jsxs)(r.p,{children:[`画面全体を Token V2 に切り替える場合は、アプリケーションのルート要素（HTML ルートでも可）に `,(0,c.jsx)(r.code,{children:`.ch-token-v2`}),` を付けます。`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-html`,children:`<html class="ch-token-v2" data-theme="light">
  <body>
    <div id="root"></div>
  </body>
</html>
`})}),`
`,(0,c.jsx)(r.h3,{id:`一部のコンポーネントだけで試す`,children:`一部のコンポーネントだけで試す`}),`
`,(0,c.jsxs)(r.p,{children:[`既存画面へ段階的に導入する場合は、検証したいコンポーネント単位で `,(0,c.jsx)(r.code,{children:`.ch-token-v2`}),` を付けます。Token V2 は CSS Variables を継承して効くため、`,(0,c.jsx)(r.code,{children:`.ch-token-v2`}),` は対象コンポーネント自身かその親要素に付けてください（兄弟要素や離れた要素には影響しません）。`]}),`
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
`,(0,c.jsx)(r.h2,{id:`テーマの切り替え`,children:`テーマの切り替え`}),`
`,(0,c.jsxs)(r.p,{children:[`テーマは `,(0,c.jsx)(r.code,{children:`document.documentElement`}),` の `,(0,c.jsx)(r.code,{children:`data-theme`}),` 属性で切り替えます。`,(0,c.jsx)(r.code,{children:`data-theme`}),` を省略した場合は light として扱われます。dark theme は `,(0,c.jsx)(r.code,{children:`:root[data-theme='dark']`}),` に定義されるため、HTML ルートで切り替えます。`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-tsx`,children:`document.documentElement.dataset.theme = 'light'
document.documentElement.dataset.theme = 'dark'
`})}),`
`,(0,c.jsx)(r.h2,{id:`storybook-で確認する`,children:`Storybook で確認する`}),`
`,(0,c.jsxs)(r.p,{children:[`story の `,(0,c.jsx)(r.code,{children:`parameters.tokenVersion`}),` に `,(0,c.jsx)(r.code,{children:`v2`}),` を指定すると、decorator が `,(0,c.jsx)(r.code,{children:`document.documentElement`}),` に `,(0,c.jsx)(r.code,{children:`.ch-token-v2`}),` を付けます。story 側で wrapper を追加しなくても Token V2 の見た目を確認できます。`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-tsx`,children:`export const TokenV2: StoryObj<typeof Button> = {
  parameters: { tokenVersion: 'v2' },
  render: () => <Button variant="Primary">Button</Button>,
}
`})}),`
`,(0,c.jsx)(r.h2,{id:`export-の変更破壊的変更`,children:`export の変更（破壊的変更）`}),`
`,(0,c.jsxs)(r.p,{children:[`CSS・トークン出力の再編と `,(0,c.jsx)(r.code,{children:`unstable-`}),` プレフィックス削除により、`,(0,c.jsx)(r.code,{children:`@charcoal-ui/theme`}),` の subpath export が変わります。`]}),`
`,(0,c.jsxs)(r.table,{children:[(0,c.jsx)(r.thead,{children:(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.th,{children:`旧`}),(0,c.jsx)(r.th,{children:`新`})]})}),(0,c.jsxs)(r.tbody,{children:[(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:`@charcoal-ui/theme/unstable-css/_variables_light.css`})}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:`@charcoal-ui/theme/css/v2/light.css`})})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:`@charcoal-ui/theme/unstable-css/_variables_dark.css`})}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:`@charcoal-ui/theme/css/v2/dark.css`})})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:`（新規）1.0 互換レイヤー`}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:`@charcoal-ui/theme/css/v1/remap.css`})})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:`@charcoal-ui/theme/unstable-token-object`})}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:`@charcoal-ui/theme/token-object`})})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:`@charcoal-ui/theme/unstable-tokens/*`})}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:`@charcoal-ui/theme/tokens/*`})})]})]})]}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[`
`,(0,c.jsxs)(r.p,{children:[`グローバル定義用途だった `,(0,c.jsx)(r.code,{children:`unstable-css`}),` は、`,(0,c.jsx)(r.code,{children:`.ch-token-v2`}),` でスコープできる `,(0,c.jsx)(r.code,{children:`css/v2`}),` に統合しました。`]}),`
`]}),`
`,(0,c.jsxs)(r.li,{children:[`
`,(0,c.jsxs)(r.p,{children:[`import パスの置換が必要です（例: `,(0,c.jsx)(r.code,{children:`unstable-tokens/css-variables.json`}),` → `,(0,c.jsx)(r.code,{children:`tokens/css-variables.json`}),`）`]}),`
`,(0,c.jsx)(r.p,{children:`。`}),`
`]}),`
`]}),`
`,(0,c.jsx)(r.h2,{id:`10-互換モードの制限`,children:`1.0 互換モードの制限`}),`
`,(0,c.jsxs)(r.p,{children:[`2.0 では複数の v1 トークンを 1 つに統合したトークンがあり、1.0 互換モードではそれらの箇所で旧実装と完全に同じ配色を再現できません（単一の remap 値では複数の旧値を同時に満たせないため）。該当箇所は remap のパリティテスト（`,(0,c.jsx)(r.code,{children:`packages/react/src/__tests__/token-v1-compat.test.ts`}),`）が検出します。`]}),`
`,(0,c.jsx)(r.h2,{id:`導入時の注意`,children:`導入時の注意`}),`
`,(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:`.ch-token-v2`}),` を付け忘れると、React コンポーネントの CSS は Token V2 の値を参照できません。見た目が想定と違う場合は、まず対象コンポーネント自身か親要素に `,(0,c.jsx)(r.code,{children:`.ch-token-v2`}),` が付いているかを確認してください。`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h1,{id:`コンポーネントreact-sandbox-からの移行`,children:`コンポーネント（react-sandbox からの移行）`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`@charcoal-ui/react@v5.5.0`}),` に `,(0,c.jsx)(r.strong,{children:`UnstableTextEllipsis`}),` と `,(0,c.jsx)(r.strong,{children:`UnstablePagination`}),` を追加しました。`]}),`
`,(0,c.jsx)(r.li,{children:`react-sandbox にあった TextEllipsis および Pager・LinkPager を、styled-components に依存しない形で @charcoal-ui/react に取り込んだものです。`}),`
`,(0,c.jsx)(r.li,{children:`props の詳細は各コンポーネントの Storybook を参照してください。`}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h1,{id:`textellipsis`,children:`TextEllipsis`}),`
`,(0,c.jsxs)(r.p,{children:[`複数行のテキストに表示行数制限を設け、はみ出した部分を `,(0,c.jsx)(r.code,{children:`...`}),` で省略するコンポーネントです。`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-tsx`,children:`-import { TextEllipsis } from '@charcoal-ui/react-sandbox'
// 現時点はUnstableのprefixがある
+import { UnstableTextEllipsis } from '@charcoal-ui/react'
// v6リリース以降(予定)
+import { TextEllipsis } from '@charcoal-ui/react'

<UnstableTextEllipsis lineHeight={24} lineLimit={2}>
  長いテキスト...
</UnstableTextEllipsis>
`})}),`
`,(0,c.jsx)(r.h2,{id:`react-sandbox-との主な違い`,children:`react-sandbox との主な違い`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsx)(r.li,{children:`styled-components を廃止し、CSS ファイルでスタイルを当てています。`}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`lineHeight`}),` は省略可能で、未指定時は親の line-height を継承します。`]}),`
`,(0,c.jsxs)(r.li,{children:[`ツールチップの on/off（`,(0,c.jsx)(r.code,{children:`showTooltip`}),`）や 1 行時の挙動（`,(0,c.jsx)(r.code,{children:`useNowrap`}),`）などの props を追加しています。`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h1,{id:`pagination`,children:`Pagination`}),`
`,(0,c.jsxs)(r.p,{children:[`ページ番号の一覧と「前へ・次へ」を表示し、ページ遷移を提供するコンポーネントです。`,(0,c.jsx)(r.strong,{children:`ボタンモード`}),`（react-sandbox の Pager 相当）と`,(0,c.jsx)(r.strong,{children:`リンクモード`}),`（LinkPager 相当）の 2 通りで使います。`]}),`
`,(0,c.jsxs)(r.table,{children:[(0,c.jsx)(r.thead,{children:(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.th,{}),(0,c.jsx)(r.th,{children:`ボタンモード（Pager）`}),(0,c.jsx)(r.th,{children:`リンクモード（LinkPager）`})]})}),(0,c.jsxs)(r.tbody,{children:[(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:`props`}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:`onChange(newPage)`})}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:`makeUrl(page) => string`})})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:`中身`}),(0,c.jsxs)(r.td,{children:[(0,c.jsx)(r.code,{children:`<button>`}),` + onClick`]}),(0,c.jsxs)(r.td,{children:[(0,c.jsx)(r.code,{children:`<a>`}),` または `,(0,c.jsx)(r.code,{children:`component`})]})]})]})]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-tsx`,children:`-import { Pager, LinkPager } from '@charcoal-ui/react-sandbox'
// 現時点はUnstableのprefixがある
+import { UnstablePagination } from '@charcoal-ui/react'
// v6リリース以降(予定)
+import { Pagination } from '@charcoal-ui/react'

// ボタンモード
<UnstablePagination page={page} pageCount={10} onChange={setPage} />

// リンクモード
<UnstablePagination page={1} pageCount={10} makeUrl={(p) => \`?page=\${p}\`} />

// Next.js の Link は href を受け取るためそのまま利用可能。React Router など to を使う場合はラッパーが必要
<UnstablePagination
  page={1}
  pageCount={10}
  makeUrl={(p) => \`?page=\${p}\`}
  component={Link}
  linkProps={{ scroll: false }}
/>
`})}),`
`,(0,c.jsx)(r.h2,{id:`react-sandbox-との主な違い-1`,children:`react-sandbox との主な違い`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[`Pager と LinkPager が 1 つのコンポーネントに統合され、`,(0,c.jsx)(r.code,{children:`onChange`}),` を渡すか `,(0,c.jsx)(r.code,{children:`makeUrl`}),` を渡すかでモードが切り替わります。`]}),`
`,(0,c.jsxs)(r.li,{children:[`sandbox の LinkPager は `,(0,c.jsx)(r.code,{children:`useComponentAbstraction()`}),` の `,(0,c.jsx)(r.code,{children:`Link`}),`（`,(0,c.jsx)(r.code,{children:`to`}),`）に依存していました。@charcoal-ui/react では `,(0,c.jsx)(r.code,{children:`makeUrl`}),` で URL を返し、`,(0,c.jsx)(r.code,{children:`component`}),` で `,(0,c.jsx)(r.code,{children:`<a>`}),` や Next.js の `,(0,c.jsx)(r.code,{children:`Link`}),` を指定する形で、フレームワークに依存しません。`]}),`
`,(0,c.jsx)(r.li,{children:`styled-components を廃止し、CSS でスタイルを当てています。前後ボタンやページ番号には IconButton を利用しています。`}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`size`}),`（S/M）と `,(0,c.jsx)(r.code,{children:`pageRangeDisplayed`}),`（5 または 7）を追加しています。`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h1,{id:`注意`,children:`注意`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsx)(r.li,{children:`Unstable のため、マイナーバージョン内でも props や export 名が変わる可能性があります。`}),`
`,(0,c.jsxs)(r.li,{children:[`安定化後は `,(0,c.jsx)(r.code,{children:`Unstable`}),` プレフィックスを外し、通常のコンポーネント名で提供する予定です。`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`react-aria-モノパッケージへの移行`,children:`React Aria モノパッケージへの移行`}),`
`,(0,c.jsxs)(r.p,{children:[`React Aria v1.17.0 (`,(0,c.jsx)(r.a,{href:`https://react-aria.adobe.com/releases/v1-17-0`,rel:`nofollow`,children:`リリースノート`}),`) に合わせ、`,(0,c.jsx)(r.code,{children:`@charcoal-ui/react`}),` の React Aria 依存を個別パッケージ（`,(0,c.jsx)(r.code,{children:`@react-aria/*`}),`, `,(0,c.jsx)(r.code,{children:`@react-stately/*`}),`）からモノパッケージ（`,(0,c.jsx)(r.code,{children:`react-aria`}),`, `,(0,c.jsx)(r.code,{children:`react-stately`}),`）に移行しました。`]}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`react-aria`}),` / `,(0,c.jsx)(r.code,{children:`react-stately`}),` は `,(0,c.jsx)(r.strong,{children:`dependencies から peerDependencies に変更`}),`されました（`,(0,c.jsx)(r.code,{children:`react-aria >= 3.48.0`}),`, `,(0,c.jsx)(r.code,{children:`react-stately >= 3.46.0`}),`）。npm 7+・pnpm・yarn では自動インストールされるため通常は追加対応不要です。`]}),`
`,(0,c.jsx)(r.li,{children:`目的：アプリ側でも React Aria を使う場合の重複インストールを防ぎ、バンドルサイズとランタイムの不整合を解消します。`}),`
`,(0,c.jsxs)(r.li,{children:[`既存の `,(0,c.jsx)(r.code,{children:`@react-aria/*`}),` 個別パッケージとも共存可能ですが、バージョン不整合に注意してください。`]}),`
`]}),`
`,(0,c.jsx)(r.h3,{id:`必要な対応任意`,children:`必要な対応（任意）`}),`
`,(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:`@react-aria/*`}),` / `,(0,c.jsx)(r.code,{children:`@react-stately/*`}),` を直接 import している場合、React Aria 公式 codemod でモノパッケージ import に移行できます。`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-bash`,children:`npx @react-spectrum/codemods use-monopackages --path /path/to/src
# サブパス import（より細かいバンドル制御）
npx @react-spectrum/codemods use-subpaths --path /path/to/src
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=r(),a(),i()}))();export{s as default};