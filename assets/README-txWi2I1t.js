import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-jqX-xhmR.js";import{c as n,nt as r,o as i}from"./iframe-DdeWrMet.js";import{t as a}from"./mdx-react-shim-BQOr_riv.js";function o(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,img:`img`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`tailwind-config/README`}),`
`,(0,c.jsx)(n.h1,{id:`charcoal-uitailwind-config-クイックスタート`,children:`@charcoal-ui/tailwind-config クイックスタート`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:`https://www.npmjs.com/package/@charcoal-ui/tailwind-config`,rel:`nofollow`,children:(0,c.jsx)(n.img,{src:`https://img.shields.io/npm/v/@charcoal-ui/tailwind-config?label=%40charcoal-ui%2Ftailwind-config&style=flat-square&logo=npm`,alt:`npmバッジ`})})}),`
`,(0,c.jsx)(n.h2,{id:`インストール`,children:`インストール`}),`
`,(0,c.jsx)(n.p,{children:`以下のいずれかのパッケージマネージャーを使用してインストールしてください`}),`
`,(0,c.jsx)(n.h3,{id:`npm`,children:`npm`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npm install --save-dev @charcoal-ui/tailwind-config
`})}),`
`,(0,c.jsx)(n.h3,{id:`yarn`,children:`yarn`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`yarn add -D @charcoal-ui/tailwind-config
`})}),`
`,(0,c.jsx)(n.h3,{id:`pnpm`,children:`pnpm`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`pnpm add -D @charcoal-ui/tailwind-config
`})}),`
`,(0,c.jsx)(n.h3,{id:`bun`,children:`bun`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`bun add -D @charcoal-ui/tailwind-config
`})}),`
`,(0,c.jsx)(n.h2,{id:`概要`,children:`概要`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`@charcoal-ui/tailwind-config`}),` は、Tailwind に `,(0,c.jsx)(n.code,{children:`@charcoal-ui/foundation`}),` を適用します。`]}),`
`,(0,c.jsx)(n.h2,{id:`使い方-tailwind-v4-wip`,children:`使い方 tailwind v4 (WIP)`}),`
`,(0,c.jsxs)(n.p,{children:[`Tailwind v4 の`,(0,c.jsx)(n.a,{href:`https://tailwindcss.com/docs/functions-and-directives#config-directive`,rel:`nofollow`,children:`@config`}),`経由で引き続既存の設定を利用できます。`]}),`
`,(0,c.jsxs)(n.p,{children:[`公式の`,(0,c.jsx)(n.a,{href:`https://tailwindcss.com/docs/upgrade-guide`,rel:`nofollow`,children:`マイグレーションガイド`}),`を参考した上以下の対応を行なってください。`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-diff`,children:`- @import 'tailwindcss';
/* 現時点@layer 未対応 */
+ @import 'tailwindcss/theme.css';
+ @import 'tailwindcss/utilities.css';

+ @config '@charcoal-ui/tailwind-config' /** デフォルトのconfig使う場合 */
/* また */
+ @config '../tailwind.config.ts' /** v3 configへのpath */
`})}),`
`,(0,c.jsx)(n.h2,{id:`使い方-tailwind-v2v3`,children:`使い方 tailwind v2,v3`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`tailwind.config.js`}),` の中で `,(0,c.jsx)(n.code,{children:`require`}),` して使います。`]}),`
`,(0,c.jsx)(n.h3,{id:`デフォルトの-config-を使う`,children:`デフォルトの config を使う`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const { config } = require('@charcoal-ui/tailwind-config')

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
`,(0,c.jsxs)(n.p,{children:[`テーマの調整などが必要な場合は`,(0,c.jsx)(n.a,{href:`/docs/tailwind-config-custom--docs`,children:`カスタマイズする`}),`のページを見てください。`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=r(),a(),n()}))();export{s as default};