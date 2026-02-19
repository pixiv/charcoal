import{j as n,M as i}from"./iframe-Da7rVJAF.js";import{useMDXComponents as c}from"./index-WfA31zhP.js";import"./preload-helper-C1FmrZbK.js";function d(r){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...c(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"tailwind-config/Custom"}),`
`,n.jsx(e.h1,{id:"カスタマイズする",children:"カスタマイズする"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"createTailwindConfig"})," を利用することでお使いの環境、色などに適応させることができます。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const { light, dark } = require('@charcoal-ui/theme')
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
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"createTailwindConfig"})," には以下のオプションを渡すことができます。"]}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"name"}),n.jsx(e.th,{children:"type"}),n.jsx(e.th,{children:"description"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"theme"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"Record<string, Theme>"})}),n.jsx(e.td,{children:"条件ごとの色の値のマッピングを渡します。 :root は必須のキーです。"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"version"}),n.jsx(e.td,{children:"v1 | v2 | v3"}),n.jsx(e.td,{children:"Tailwind.css のバージョン系統を指定します。色のキー名に使われる DEFAULT と default などの違いを内部で吸収します。"})]})]})]}),`
`,n.jsx(e.h2,{id:"themamap-について",children:"ThemaMap について"}),`
`,n.jsxs(e.p,{children:["charcoal は Tailwind.css の通常のダークモード (",n.jsx(e.code,{children:"dark:○○"}),`のようなクラス) をサポートしません。
なぜなら charcoal における「色」は、見にくい事もなく light テーマと dark テーマで違うカラーコードであり得るからです。
そこで登場するのが `,n.jsx(e.code,{children:"@charcoal-ui/tailwind-config"})," で使える ",n.jsx(e.code,{children:"theme"})," というオプションを受け取ります。"]}),`
`,n.jsxs(e.p,{children:["以下の例は ",n.jsx(e.code,{children:":root"})," （つまり通常ケース）では light テーマで、システムの設定がダークモードである場合は dark テーマを使用するものです。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`createTailwindConfig({
  version: 'v3',
  theme: {
    ':root': light,
    '@media (prefers-color-scheme: dark)': dark,
  },
})
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"theme"})," オプションを渡す設定の場合、ダークテーマ対応されないサービスであっても ",n.jsx(e.code,{children:":root"})," に必ず自身のプロダクトのカラーテーマを渡す必要があります。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"theme"})," でこのように書くと、このような CSS Variables を生成します。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* 以下はイメージです */

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
`,n.jsxs(e.p,{children:[`このとき、以下のように置く必要はありません。
キーが `,n.jsx(e.code,{children:"@media"})," で始まる場合はビルド時に ",n.jsx(e.code,{children:":root"})," が補われます。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`{
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
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"theme"}),` のキーとして通常のセレクタを指定することもできます。
これによりダークモードの切り替えが DOM の状態に依存するケースにも対応します。`,n.jsx(e.code,{children:"localStorage"})," などで JS での切り替えを実装しているアプリケーションはこのような手法が好ましいでしょう。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`createTailwindConfig({
  version: 'v3',
  theme: {
    ':root': light,
    'html[data-theme="dark"]': dark,
  },
})
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* 以下はイメージです */

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
`})})]})}function t(r={}){const{wrapper:e}={...c(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(d,{...r})}):d(r)}export{t as default};
