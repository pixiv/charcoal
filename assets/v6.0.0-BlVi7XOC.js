import{j as n,M as l}from"./iframe-HsBtWllP.js";import{useMDXComponents as r}from"./index-DqAfBXlN.js";import"./preload-helper-C1FmrZbK.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"v6.0.0(予定)"}),`
`,n.jsx(e.h1,{id:"charcoal-uireactv600予定",children:"@charcoal-ui/react@v6.0.0(予定)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"@charcoal-ui/react@v5.5.0"})," に ",n.jsx(e.strong,{children:"UnstableTextEllipsis"})," と ",n.jsx(e.strong,{children:"UnstablePagination"})," を追加しました。"]}),`
`,n.jsx(e.li,{children:"react-sandbox にあった TextEllipsis および Pager・LinkPager を、styled-components に依存しない形で @charcoal-ui/react に取り込んだものです。"}),`
`,n.jsx(e.li,{children:"props の詳細は各コンポーネントの Storybook を参照してください。"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h1,{id:"textellipsis",children:"TextEllipsis"}),`
`,n.jsxs(e.p,{children:["複数行のテキストに表示行数制限を設け、はみ出した部分を ",n.jsx(e.code,{children:"..."})," で省略するコンポーネントです。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`-import { TextEllipsis } from '@charcoal-ui/react-sandbox'
// 現時点はUnstableのprefixがある
+import { UnstableTextEllipsis } from '@charcoal-ui/react'
// v6リリース以降(予定)
+import { TextEllipsis } from '@charcoal-ui/react'

<UnstableTextEllipsis lineHeight={24} lineLimit={2}>
  長いテキスト...
</UnstableTextEllipsis>
`})}),`
`,n.jsx(e.h2,{id:"react-sandbox-との主な違い",children:"react-sandbox との主な違い"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"styled-components を廃止し、CSS ファイルでスタイルを当てています。"}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"lineHeight"})," は省略可能で、未指定時は親の line-height を継承します。"]}),`
`,n.jsxs(e.li,{children:["ツールチップの on/off（",n.jsx(e.code,{children:"showTooltip"}),"）や 1 行時の挙動（",n.jsx(e.code,{children:"useNowrap"}),"）などの props を追加しています。"]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h1,{id:"pagination",children:"Pagination"}),`
`,n.jsxs(e.p,{children:["ページ番号の一覧と「前へ・次へ」を表示し、ページ遷移を提供するコンポーネントです。",n.jsx(e.strong,{children:"ボタンモード"}),"（react-sandbox の Pager 相当）と",n.jsx(e.strong,{children:"リンクモード"}),"（LinkPager 相当）の 2 通りで使います。"]}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{}),n.jsx(e.th,{children:"ボタンモード（Pager）"}),n.jsx(e.th,{children:"リンクモード（LinkPager）"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"props"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"onChange(newPage)"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"makeUrl(page) => string"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"中身"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"<button>"})," + onClick"]}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"<a>"})," または ",n.jsx(e.code,{children:"component"})]})]})]})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`-import { Pager, LinkPager } from '@charcoal-ui/react-sandbox'
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
`,n.jsx(e.h2,{id:"react-sandbox-との主な違い-1",children:"react-sandbox との主な違い"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Pager と LinkPager が 1 つのコンポーネントに統合され、",n.jsx(e.code,{children:"onChange"})," を渡すか ",n.jsx(e.code,{children:"makeUrl"})," を渡すかでモードが切り替わります。"]}),`
`,n.jsxs(e.li,{children:["sandbox の LinkPager は ",n.jsx(e.code,{children:"useComponentAbstraction()"})," の ",n.jsx(e.code,{children:"Link"}),"（",n.jsx(e.code,{children:"to"}),"）に依存していました。@charcoal-ui/react では ",n.jsx(e.code,{children:"makeUrl"})," で URL を返し、",n.jsx(e.code,{children:"component"})," で ",n.jsx(e.code,{children:"<a>"})," や Next.js の ",n.jsx(e.code,{children:"Link"})," を指定する形で、フレームワークに依存しません。"]}),`
`,n.jsx(e.li,{children:"styled-components を廃止し、CSS でスタイルを当てています。前後ボタンやページ番号には IconButton を利用しています。"}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"size"}),"（S/M）と ",n.jsx(e.code,{children:"pageRangeDisplayed"}),"（5 または 7）を追加しています。"]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h1,{id:"注意",children:"注意"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Unstable のため、マイナーバージョン内でも props や export 名が変わる可能性があります。"}),`
`,n.jsxs(e.li,{children:["安定化後は ",n.jsx(e.code,{children:"Unstable"})," プレフィックスを外し、通常のコンポーネント名で提供する予定です。"]}),`
`]})]})}function o(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{o as default};
