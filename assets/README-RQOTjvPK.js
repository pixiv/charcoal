import{j as n,M as s}from"./iframe-Da7rVJAF.js";import{useMDXComponents as a}from"./index-WfA31zhP.js";import"./preload-helper-C1FmrZbK.js";function e(c){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...a(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"tailwind-config/README"}),`
`,n.jsx(i.h1,{id:"charcoal-uitailwind-config-クイックスタート",children:"@charcoal-ui/tailwind-config クイックスタート"}),`
`,n.jsx(i.p,{children:n.jsx(i.a,{href:"https://www.npmjs.com/package/@charcoal-ui/tailwind-config",rel:"nofollow",children:n.jsx(i.img,{src:"https://img.shields.io/npm/v/@charcoal-ui/tailwind-config?label=%40charcoal-ui%2Ftailwind-config&style=flat-square&logo=npm",alt:"npmバッジ"})})}),`
`,n.jsx(i.h2,{id:"インストール",children:"インストール"}),`
`,n.jsx(i.p,{children:"以下のいずれかのパッケージマネージャーを使用してインストールしてください"}),`
`,n.jsx(i.h3,{id:"npm",children:"npm"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-bash",children:`npm install --save-dev @charcoal-ui/tailwind-config
`})}),`
`,n.jsx(i.h3,{id:"yarn",children:"yarn"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-bash",children:`yarn add -D @charcoal-ui/tailwind-config
`})}),`
`,n.jsx(i.h3,{id:"pnpm",children:"pnpm"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-bash",children:`pnpm add -D @charcoal-ui/tailwind-config
`})}),`
`,n.jsx(i.h3,{id:"bun",children:"bun"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-bash",children:`bun add -D @charcoal-ui/tailwind-config
`})}),`
`,n.jsx(i.h2,{id:"概要",children:"概要"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"@charcoal-ui/tailwind-config"})," は、Tailwind に ",n.jsx(i.code,{children:"@charcoal-ui/foundation"})," を適用します。"]}),`
`,n.jsx(i.h2,{id:"使い方-tailwind-v4-wip",children:"使い方 tailwind v4 (WIP)"}),`
`,n.jsxs(i.p,{children:["Tailwind v4 の",n.jsx(i.a,{href:"https://tailwindcss.com/docs/functions-and-directives#config-directive",rel:"nofollow",children:"@config"}),"経由で引き続既存の設定を利用できます。"]}),`
`,n.jsxs(i.p,{children:["公式の",n.jsx(i.a,{href:"https://tailwindcss.com/docs/upgrade-guide",rel:"nofollow",children:"マイグレーションガイド"}),"を参考した上以下の対応を行なってください。"]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-diff",children:`- @import 'tailwindcss';
/* 現時点@layer 未対応 */
+ @import 'tailwindcss/theme.css';
+ @import 'tailwindcss/utilities.css';

+ @config '@charcoal-ui/tailwind-config' /** デフォルトのconfig使う場合 */
/* また */
+ @config '../tailwind.config.ts' /** v3 configへのpath */
`})}),`
`,n.jsx(i.h2,{id:"使い方-tailwind-v2v3",children:"使い方 tailwind v2,v3"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"tailwind.config.js"})," の中で ",n.jsx(i.code,{children:"require"})," して使います。"]}),`
`,n.jsx(i.h3,{id:"デフォルトの-config-を使う",children:"デフォルトの config を使う"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-javascript",children:`const { config } = require('@charcoal-ui/tailwind-config')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [config],
}
`})}),`
`,n.jsxs(i.p,{children:["テーマの調整などが必要な場合は",n.jsx(i.a,{href:"/docs/tailwind-config-custom--docs",children:"カスタマイズする"}),"のページを見てください。"]})]})}function r(c={}){const{wrapper:i}={...a(),...c.components};return i?n.jsx(i,{...c,children:n.jsx(e,{...c})}):e(c)}export{r as default};
