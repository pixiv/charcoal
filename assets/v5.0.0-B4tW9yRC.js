import{j as n,M as s}from"./iframe-ruKs1uur.js";import{useMDXComponents as e}from"./index-BkkCAF1b.js";import"./preload-helper-C1FmrZbK.js";function l(i){const c={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...e(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"v5.0.0"}),`
`,n.jsx(c.h1,{id:"tsdown--esm-移行",children:"tsdown & ESM 移行"}),`
`,n.jsx(c.p,{children:"以下のパッケージを tsup から tsdown に移行し、ESM 化しました。併せて exports の設定を調整しました。"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsx(c.li,{children:n.jsx(c.code,{children:"@charcoal-ui/foundation@v5.0.0"})}),`
`,n.jsx(c.li,{children:n.jsx(c.code,{children:"@charcoal-ui/icon-files@v5.0.0"})}),`
`,n.jsx(c.li,{children:n.jsx(c.code,{children:"@charcoal-ui/icons@v5.0.0"})}),`
`,n.jsx(c.li,{children:n.jsx(c.code,{children:"@charcoal-ui/react@v5.0.0"})}),`
`,n.jsx(c.li,{children:n.jsx(c.code,{children:"@charcoal-ui/react-sandbox@v5.0.0"})}),`
`,n.jsx(c.li,{children:n.jsx(c.code,{children:"@charcoal-ui/styled@v5.0.0"})}),`
`,n.jsx(c.li,{children:n.jsx(c.code,{children:"@charcoal-ui/theme@v5.0.0"})}),`
`,n.jsx(c.li,{children:n.jsx(c.code,{children:"@charcoal-ui/utils@v5.0.0"})}),`
`]}),`
`,n.jsx(c.p,{children:"以下の CLI パッケージは引き続き CommonJS を維持しています。"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsx(c.li,{children:n.jsx(c.code,{children:"@charcoal-ui/token-cli@v5.0.0"})}),`
`,n.jsx(c.li,{children:n.jsx(c.code,{children:"@charcoal-ui/icons-cli@v5.0.0"})}),`
`,n.jsx(c.li,{children:n.jsx(c.code,{children:"@charcoal-ui/tailwind-config@v5.0.0"})}),`
`]}),`
`,n.jsx(c.p,{children:"以下のパッケージで minify を有効化しました。"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsx(c.li,{children:n.jsx(c.code,{children:"@charcoal-ui/foundation@v5.0.0"})}),`
`,n.jsx(c.li,{children:n.jsx(c.code,{children:"@charcoal-ui/react@v5.0.0"})}),`
`,n.jsx(c.li,{children:n.jsx(c.code,{children:"@charcoal-ui/react-sandbox@v5.0.0"})}),`
`,n.jsx(c.li,{children:n.jsx(c.code,{children:"@charcoal-ui/styled@v5.0.0"})}),`
`,n.jsx(c.li,{children:n.jsx(c.code,{children:"@charcoal-ui/utils@v5.0.0"})}),`
`]}),`
`,n.jsx(c.p,{children:"以下のパッケージを削除しました。"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"@charcoal-ui/pullrequest-cli"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsx(c.li,{children:"packages 配下から misc 配下へ移動しました。"}),`
`]}),`
`]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"@charcoal-ui/esbuild-plugin-styled-components"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsx(c.li,{children:"react-sandbox 内部に移行しました。"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(c.p,{children:"以下のパッケージは今後大幅な調整が入る可能性があるため、依存する際はご注意ください。"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"@charcoal-ui/tailwind-diff"}),"（廃止予定）"]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"@charcoal-ui/icons-cli"}),"（API 調整予定）"]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"@charcoal-ui/token-cli"}),"（API 調整予定）"]}),`
`]}),`
`,n.jsx(c.h1,{id:"charcoal-uiicon-files",children:"@charcoal-ui/icon-files"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:["v2 系のアイコンを追加しました（Charcoal v4 より安定化）。",`
`,n.jsxs(c.ul,{children:[`
`,n.jsx(c.li,{children:n.jsx(c.a,{href:"https://www.figma.com/community/file/1415608153880597802/charcoal-icons-2-0",rel:"nofollow",children:"Charcoal Icons 2.0"})}),`
`]}),`
`]}),`
`,n.jsx(c.li,{children:"data URI 形式の提供を開始しました。"}),`
`]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-ts",children:`import iconsV2 from '@charcoal-ui/icon-files/v2/datauri'
import iconsV1 from '@charcoal-ui/icon-files/v1/datauri'
`})}),`
`,n.jsx(c.h1,{id:"charcoal-uiicons",children:"@charcoal-ui/icons"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsx(c.li,{children:"v2 系のアイコンを追加しました。"}),`
`,n.jsxs(c.li,{children:["従来の ",n.jsx(c.code,{children:"<pixiv-icon />"})," に加え、CSS および React コンポーネント経由でもアイコンを利用できるようにしました。"]}),`
`]}),`
`,n.jsx(c.h2,{id:"react",children:"react"}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-tsx",children:`import { IconAdd24 } from '@charcoal-ui/icons/react/v1/24/Add'

function AddButton() {
  return (
    <button>
      <IconAdd24 /> Add
    </button>
  )
}
`})}),`
`,n.jsx(c.h2,{id:"css",children:"css"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsx(c.li,{children:n.jsx(c.a,{href:"https://charcoal-web.pixiv.design/?path=/docs/icons-v1-css--docs",rel:"nofollow",children:"v1 Storybook"})}),`
`,n.jsx(c.li,{children:n.jsx(c.a,{href:"https://charcoal-web.pixiv.design/?path=/docs/icons-v2-css--docs",rel:"nofollow",children:"v2 Storybook"})}),`
`]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-html",children:`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@charcoal-ui/icons@5.0.0/css/v1/index.css" />
<div
  class="charcoal-icon-v1-add"
  aria-label="add icon"
  role="img"
/></div>
`})}),`
`,n.jsx(c.h1,{id:"charcoal-uitailwind-config",children:"@charcoal-ui/tailwind-config"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"iconsV1"}),", ",n.jsx(c.code,{children:"iconsV2"})," オプションにより、CSS ベースのアイコンを安定版として利用できるようになりました（v4 から提供）。"]}),`
`]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-diff",children:`const charcoal = createTailwindConfig({
  // for .icons-v1-<icon-name>
+ iconsV1: true,
  // for .icons-v2-<icon-name>
+ iconsV2: true,
  // ...
}) as Config
`})}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-html",children:`<!-- アイコンのサイズは font-size に依存します -->
<button className="text-24">
  <div className="icon-v1-add" role="presentation" />
  Add
</button>
`})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsx(c.li,{children:n.jsx(c.a,{href:"https://charcoal-web.pixiv.design/?path=/docs/tailwind-config-icons-1-0--docs",rel:"nofollow",children:"v1 Storybook"})}),`
`,n.jsx(c.li,{children:n.jsx(c.a,{href:"https://charcoal-web.pixiv.design/?path=/docs/tailwind-config-icons-2-0--docs",rel:"nofollow",children:"v2 Storybook"})}),`
`]}),`
`,n.jsxs(c.p,{children:["注意：",n.jsx(c.code,{children:"Safari >= 15.4"})," のみをサポートする場合は、browserslist に追加することで ",n.jsx(c.code,{children:"-webkit-mask-image"})," の autoprefix を避け、CSS のサイズを軽減できます。"]}),`
`,n.jsx(c.h1,{id:"内部変更",children:"内部変更"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:["開発環境の依存関係を更新しました。",`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"node"})," 22 lts に更新しました。"]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"typescript"})," v5 にアップデートしました。"]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"lerna"})," v7 にアップデートしました。"]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"prettier"})," v3 にアップデートしました。"]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"@pixiv/eslint-config"})," に移行しました。"]}),`
`]}),`
`]}),`
`,n.jsxs(c.li,{children:["一部のパッケージで ",n.jsx(c.code,{children:"isolatedDeclarations"})," を有効化しました。"]}),`
`,n.jsxs(c.li,{children:["ほとんどの ",n.jsx(c.code,{children:"tsconfig.build.json"})," を削除し、",n.jsx(c.code,{children:"tsconfig.json"})," に統合しました。"]}),`
`]})]})}function h(i={}){const{wrapper:c}={...e(),...i.components};return c?n.jsx(c,{...i,children:n.jsx(l,{...i})}):l(i)}export{h as default};
