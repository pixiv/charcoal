import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-PP_6xzBa.js";import{c as n,j as r,u as i}from"./iframe-DrTBVNfQ.js";import{t as a}from"./mdx-react-shim-B4NVjdL8.js";function o(e){let r={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`tailwind-config/Custom`}),`
`,(0,c.jsx)(r.h1,{id:`カスタマイズする`,children:`カスタマイズする`}),`
`,(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:`createTailwindConfig`}),` を利用することでお使いの環境、色などに適応させることができます。`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-js`,children:`const { light, dark } = require('@charcoal-ui/theme')
const { createTailwindConfig } = require('@charcoal-ui/tailwind-config')

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  darkMode: false,
  content: ['./src/**/*.tsx', './src/**/*.html'],
  presets: [
    createTailwindConfig({
      version: 'v3',
      theme: {
        ':root': light,
        '@media (prefers-color-scheme: dark)': dark,
      },
    }),
  ],
}
`})}),`
`,(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:`createTailwindConfig`}),` には以下のオプションを渡すことができます。`]}),`
`,(0,c.jsxs)(r.table,{children:[(0,c.jsx)(r.thead,{children:(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.th,{children:`name`}),(0,c.jsx)(r.th,{children:`type`}),(0,c.jsx)(r.th,{children:`description`})]})}),(0,c.jsxs)(r.tbody,{children:[(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:`theme`}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:`Record<string, Theme>`})}),(0,c.jsx)(r.td,{children:`条件ごとの色の値のマッピングを渡します。 :root は必須のキーです。`})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:`version`}),(0,c.jsx)(r.td,{children:`v1 | v2 | v3`}),(0,c.jsx)(r.td,{children:`Tailwind.css のバージョン系統を指定します。色のキー名に使われる DEFAULT と default などの違いを内部で吸収します。`})]})]})]}),`
`,(0,c.jsx)(r.h2,{id:`themamap-について`,children:`ThemaMap について`}),`
`,(0,c.jsxs)(r.p,{children:[`charcoal は Tailwind.css の通常のダークモード (`,(0,c.jsx)(r.code,{children:`dark:○○`}),`のようなクラス) をサポートしません。
なぜなら charcoal における「色」は、見にくい事もなく light テーマと dark テーマで違うカラーコードであり得るからです。
そこで登場するのが `,(0,c.jsx)(r.code,{children:`@charcoal-ui/tailwind-config`}),` で使える `,(0,c.jsx)(r.code,{children:`theme`}),` というオプションを受け取ります。`]}),`
`,(0,c.jsxs)(r.p,{children:[`以下の例は `,(0,c.jsx)(r.code,{children:`:root`}),` （つまり通常ケース）では light テーマで、システムの設定がダークモードである場合は dark テーマを使用するものです。`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-js`,children:`createTailwindConfig({
  version: 'v3',
  theme: {
    ':root': light,
    '@media (prefers-color-scheme: dark)': dark,
  },
})
`})}),`
`,(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:`theme`}),` オプションを渡す設定の場合、ダークテーマ対応されないサービスであっても `,(0,c.jsx)(r.code,{children:`:root`}),` に必ず自身のプロダクトのカラーテーマを渡す必要があります。`]}),`
`,(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:`theme`}),` でこのように書くと、このような CSS Variables を生成します。`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`/* 以下はイメージです */

:root {
  --tailwind-color-background1: #fff;
  --tailwind-color-background2: #f5f5f5;
  /* ... */
}

@media (prefers-color-scheme: dark) {
  :root {
    --tailwind-color-background1: #1f1f1f;
    --tailwind-color-background2: #000000;
    /* ... */
  }
}
`})}),`
`,(0,c.jsxs)(r.p,{children:[`このとき、以下のように置く必要はありません。
キーが `,(0,c.jsx)(r.code,{children:`@media`}),` で始まる場合はビルド時に `,(0,c.jsx)(r.code,{children:`:root`}),` が補われます。`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-js`,children:`{
  theme: {
    // これは間違い！！
    '@media (prefers-color-scheme: dark)': {
        ':root': dark
    },

    // 正しくはこう
    '@media (prefers-color-scheme: dark)': dark
  }
}
`})}),`
`,(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:`theme`}),` のキーとして通常のセレクタを指定することもできます。
これによりダークモードの切り替えが DOM の状態に依存するケースにも対応します。`,(0,c.jsx)(r.code,{children:`localStorage`}),` などで JS での切り替えを実装しているアプリケーションはこのような手法が好ましいでしょう。`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-js`,children:`createTailwindConfig({
  version: 'v3',
  theme: {
    ':root': light,
    'html[data-theme="dark"]': dark,
  },
})
`})}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`/* 以下はイメージです */

:root {
  --tailwind-color-background1: #fff;
  --tailwind-color-background2: #f5f5f5;
  /* ... */
}

html[data-theme='dark'] {
  --tailwind-color-background1: #1f1f1f;
  --tailwind-color-background2: #000000;
  /* ... */
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=r(),a(),i()}))();export{s as default};