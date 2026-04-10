import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-D6EVFDe3.js";import{c as n,nt as r,o as i}from"./iframe-C9I9vVUi.js";import{t as a}from"./mdx-react-shim-BcdQdUlt.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`v6.0.0(予定)`}),`
`,(0,c.jsx)(n.h1,{id:`charcoal-uireactv600予定`,children:`@charcoal-ui/react@v6.0.0(予定)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`@charcoal-ui/react@v5.5.0`}),` に `,(0,c.jsx)(n.strong,{children:`UnstableTextEllipsis`}),` と `,(0,c.jsx)(n.strong,{children:`UnstablePagination`}),` を追加しました。`]}),`
`,(0,c.jsx)(n.li,{children:`react-sandbox にあった TextEllipsis および Pager・LinkPager を、styled-components に依存しない形で @charcoal-ui/react に取り込んだものです。`}),`
`,(0,c.jsx)(n.li,{children:`props の詳細は各コンポーネントの Storybook を参照してください。`}),`
`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h1,{id:`textellipsis`,children:`TextEllipsis`}),`
`,(0,c.jsxs)(n.p,{children:[`複数行のテキストに表示行数制限を設け、はみ出した部分を `,(0,c.jsx)(n.code,{children:`...`}),` で省略するコンポーネントです。`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`-import { TextEllipsis } from '@charcoal-ui/react-sandbox'
// 現時点はUnstableのprefixがある
+import { UnstableTextEllipsis } from '@charcoal-ui/react'
// v6リリース以降(予定)
+import { TextEllipsis } from '@charcoal-ui/react'

<UnstableTextEllipsis lineHeight={24} lineLimit={2}>
  長いテキスト...
</UnstableTextEllipsis>
`})}),`
`,(0,c.jsx)(n.h2,{id:`react-sandbox-との主な違い`,children:`react-sandbox との主な違い`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`styled-components を廃止し、CSS ファイルでスタイルを当てています。`}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lineHeight`}),` は省略可能で、未指定時は親の line-height を継承します。`]}),`
`,(0,c.jsxs)(n.li,{children:[`ツールチップの on/off（`,(0,c.jsx)(n.code,{children:`showTooltip`}),`）や 1 行時の挙動（`,(0,c.jsx)(n.code,{children:`useNowrap`}),`）などの props を追加しています。`]}),`
`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h1,{id:`pagination`,children:`Pagination`}),`
`,(0,c.jsxs)(n.p,{children:[`ページ番号の一覧と「前へ・次へ」を表示し、ページ遷移を提供するコンポーネントです。`,(0,c.jsx)(n.strong,{children:`ボタンモード`}),`（react-sandbox の Pager 相当）と`,(0,c.jsx)(n.strong,{children:`リンクモード`}),`（LinkPager 相当）の 2 通りで使います。`]}),`
`,(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{children:`ボタンモード（Pager）`}),(0,c.jsx)(n.th,{children:`リンクモード（LinkPager）`})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:`props`}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:`onChange(newPage)`})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:`makeUrl(page) => string`})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:`中身`}),(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.code,{children:`<button>`}),` + onClick`]}),(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.code,{children:`<a>`}),` または `,(0,c.jsx)(n.code,{children:`component`})]})]})]})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`-import { Pager, LinkPager } from '@charcoal-ui/react-sandbox'
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
`,(0,c.jsx)(n.h2,{id:`react-sandbox-との主な違い-1`,children:`react-sandbox との主な違い`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Pager と LinkPager が 1 つのコンポーネントに統合され、`,(0,c.jsx)(n.code,{children:`onChange`}),` を渡すか `,(0,c.jsx)(n.code,{children:`makeUrl`}),` を渡すかでモードが切り替わります。`]}),`
`,(0,c.jsxs)(n.li,{children:[`sandbox の LinkPager は `,(0,c.jsx)(n.code,{children:`useComponentAbstraction()`}),` の `,(0,c.jsx)(n.code,{children:`Link`}),`（`,(0,c.jsx)(n.code,{children:`to`}),`）に依存していました。@charcoal-ui/react では `,(0,c.jsx)(n.code,{children:`makeUrl`}),` で URL を返し、`,(0,c.jsx)(n.code,{children:`component`}),` で `,(0,c.jsx)(n.code,{children:`<a>`}),` や Next.js の `,(0,c.jsx)(n.code,{children:`Link`}),` を指定する形で、フレームワークに依存しません。`]}),`
`,(0,c.jsx)(n.li,{children:`styled-components を廃止し、CSS でスタイルを当てています。前後ボタンやページ番号には IconButton を利用しています。`}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`size`}),`（S/M）と `,(0,c.jsx)(n.code,{children:`pageRangeDisplayed`}),`（5 または 7）を追加しています。`]}),`
`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h1,{id:`注意`,children:`注意`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Unstable のため、マイナーバージョン内でも props や export 名が変わる可能性があります。`}),`
`,(0,c.jsxs)(n.li,{children:[`安定化後は `,(0,c.jsx)(n.code,{children:`Unstable`}),` プレフィックスを外し、通常のコンポーネント名で提供する予定です。`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=r(),a(),n()}))();export{s as default};