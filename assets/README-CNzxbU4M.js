import{n as e}from"./chunk-BneVvdWh.js";import{c as t,nt as n,o as r}from"./iframe-CVQNsQPh.js";import{r as i}from"./react-DgnijFs3.js";import{t as a}from"./mdx-react-shim-BAyak7t4.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,img:`img`,p:`p`,pre:`pre`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`tailwind-config/README`}),`
`,(0,c.jsx)(t.h1,{id:`charcoal-uitailwind-config-クイックスタート`,children:`@charcoal-ui/tailwind-config クイックスタート`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:`https://www.npmjs.com/package/@charcoal-ui/tailwind-config`,rel:`nofollow`,children:(0,c.jsx)(t.img,{src:`https://img.shields.io/npm/v/@charcoal-ui/tailwind-config?label=%40charcoal-ui%2Ftailwind-config&style=flat-square&logo=npm`,alt:`npmバッジ`})})}),`
`,(0,c.jsx)(t.h2,{id:`インストール`,children:`インストール`}),`
`,(0,c.jsx)(t.p,{children:`以下のいずれかのパッケージマネージャーを使用してインストールしてください`}),`
`,(0,c.jsx)(t.h3,{id:`npm`,children:`npm`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm install --save-dev @charcoal-ui/tailwind-config
`})}),`
`,(0,c.jsx)(t.h3,{id:`yarn`,children:`yarn`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`yarn add -D @charcoal-ui/tailwind-config
`})}),`
`,(0,c.jsx)(t.h3,{id:`pnpm`,children:`pnpm`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`pnpm add -D @charcoal-ui/tailwind-config
`})}),`
`,(0,c.jsx)(t.h3,{id:`bun`,children:`bun`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`bun add -D @charcoal-ui/tailwind-config
`})}),`
`,(0,c.jsx)(t.h2,{id:`概要`,children:`概要`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`@charcoal-ui/tailwind-config`}),` は、Tailwind に `,(0,c.jsx)(t.code,{children:`@charcoal-ui/foundation`}),` を適用します。`]}),`
`,(0,c.jsx)(t.h2,{id:`使い方-tailwind-v4-wip`,children:`使い方 tailwind v4 (WIP)`}),`
`,(0,c.jsxs)(t.p,{children:[`Tailwind v4 の`,(0,c.jsx)(t.a,{href:`https://tailwindcss.com/docs/functions-and-directives#config-directive`,rel:`nofollow`,children:`@config`}),`経由で引き続既存の設定を利用できます。`]}),`
`,(0,c.jsxs)(t.p,{children:[`公式の`,(0,c.jsx)(t.a,{href:`https://tailwindcss.com/docs/upgrade-guide`,rel:`nofollow`,children:`マイグレーションガイド`}),`を参考した上以下の対応を行なってください。`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-diff`,children:`- @import 'tailwindcss';
/* 現時点@layer 未対応 */
+ @import 'tailwindcss/theme.css';
+ @import 'tailwindcss/utilities.css';

+ @config '@charcoal-ui/tailwind-config' /** デフォルトのconfig使う場合 */
/* また */
+ @config '../tailwind.config.ts' /** v3 configへのpath */
`})}),`
`,(0,c.jsx)(t.h2,{id:`使い方-tailwind-v2v3`,children:`使い方 tailwind v2,v3`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`tailwind.config.js`}),` の中で `,(0,c.jsx)(t.code,{children:`require`}),` して使います。`]}),`
`,(0,c.jsx)(t.h3,{id:`デフォルトの-config-を使う`,children:`デフォルトの config を使う`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const { config } = require('@charcoal-ui/tailwind-config')

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
`,(0,c.jsxs)(t.p,{children:[`テーマの調整などが必要な場合は`,(0,c.jsx)(t.a,{href:`/docs/tailwind-config-custom--docs`,children:`カスタマイズする`}),`のページを見てください。`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),t()}))();export{s as default};