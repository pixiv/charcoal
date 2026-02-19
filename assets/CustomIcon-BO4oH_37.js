import{j as e,M as o}from"./iframe-D-iARKYw.js";import{useMDXComponents as r}from"./index-BOdJiagE.js";import"./preload-helper-C1FmrZbK.js";function s(c){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...r(),...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"icons/Custom"}),`
`,e.jsx(n.h1,{id:"独自のアイコンを登録する",children:"独自のアイコンを登録する"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"<pixiv-icon>"})," に収録されていないアイコンを登録する方法が 2 つ用意されています。"]}),`
`,e.jsx(n.h2,{id:"js-ファイルを登録する",children:".js ファイルを登録する"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"<pixiv-icon>"})," に収録されているアイコン同様の処理系を利用してアイコンをレンダリングします。"]}),`
`,e.jsx(n.h3,{id:"1-svg-タグ文字列を返す-js-ファイルを作成する",children:"1. SVG タグ文字列を返す .js ファイルを作成する"}),`
`,e.jsxs(n.p,{children:["表示したい SVG が文字列として返される ",e.jsx(n.code,{children:".js"})," のファイルを作成してください。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// ExampleCustomIcon.js
export default '<svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><rect width="16" height="16" x="0" y="0" fill="currentColor"></rect></svg>'
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"d.ts"})," も作成するならば以下のようになります。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// ExampleCustomIcon.d.ts
declare const _default: string
export default _default
`})}),`
`,e.jsxs(n.h3,{id:"2-pixiviconextend-で登録する",children:["2. ",e.jsx(n.code,{children:"PixivIcon.extend()"})," で登録する"]}),`
`,e.jsxs(n.p,{children:["作成した object を ",e.jsx(n.code,{children:"PixivIcon.extend()"})," の引数へ与えて登録します。",e.jsx(n.br,{}),`
`,"名前の形式は ",e.jsx(n.code,{children:"{size}/{name}"})," である必要があります。",e.jsx(n.br,{}),`
`,"TypeScript 環境では、",e.jsx(n.code,{children:"KnownIconType"})," という型を拡張することで、カスタムアイコンに対しても補完が効くようになります。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { PixivIcon } from '@charcoal-ui/icons'

PixivIcon.extend({
  '16/ExampleCustomIcon': () =>
    import('./path/to/ExampleCustomIcon.js').then((m) => m.default),
})

declare module '@charcoal-ui/icons' {
  export interface KnownIconType {
    '16/ExampleCustomIcon': unknown
  }
}
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<pixiv-icon name="16/ExampleCustomIcon" />
`})}),`
`,e.jsx(n.h2,{id:"svg-ファイルを登録する",children:"SVG ファイルを登録する"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"<pixiv-icon>"})," の ",e.jsx(n.code,{children:"name"})," に存在しない SVG をアイコンとして登録することができます。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { PixivIcon } from '@charcoal-ui/icons'
import NewFeature from './icons/16/NewFeature.svg'

PixivIcon.extend({
  '16/NewFeature': require('./icons/16/NewFeature.svg'),
  '24/NewFeature': 'https://example.com/hoge.svg',
  '32/NewFeature': NewFeature,
})

declare module '@charcoal-ui/icons' {
  export interface KnownIconType {
    '16/NewFeature': unknown
    '24/NewFeature': unknown
    '32/NewFeature': unknown
  }
}
`})}),`
`,e.jsxs(n.p,{children:["その場合も名前の形式は ",e.jsx(n.code,{children:"{size}/{name}"})," である必要があります。",e.jsx(n.br,{}),`
`,"TypeScript 環境では、",e.jsx(n.code,{children:"KnownIconType"})," という型を拡張することで、カスタムアイコンに対しても補完が効くようになります。"]}),`
`,e.jsx(n.h3,{id:"svg-ファイルアイコンのためのバンドラ設定",children:"SVG ファイルアイコンのためのバンドラ設定"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"PixivIcon.extend()"})," に渡すオブジェクトはキーがアイコン名、値が SVG ファイルに対するパス名または URL である必要があります（内部的には、ここで渡した文字列に対して ",e.jsx(n.code,{children:"fetch()"})," が走ります）。"]}),`
`,e.jsxs(n.p,{children:["SVG ファイルを ",e.jsx(n.code,{children:"import"})," して渡す場合、プロジェクトのバンドラが ",e.jsx(n.code,{children:"*.svg"})," を ",e.jsx(n.strong,{children:"パス文字列として"}),"（ファイルの内容の文字列ではなく）ロードする設定になっていることを確認してください。"]}),`
`,e.jsxs(n.p,{children:["例えば Webpack の場合、当該アイコンファイルに対するルールの type は ",e.jsx(n.a,{href:"https://webpack.js.org/guides/asset-modules/",rel:"nofollow",children:e.jsx(n.code,{children:"asset/resource"})}),` であるべきです。
`,e.jsx(n.a,{href:"https://react-svgr.com/",rel:"nofollow",children:"svgr"})," など、SVG ファイルを文字列以外の値にトランスフォームするツールを使っているプロジェクトでは、",e.jsx(n.code,{children:"PixivIcon.extend()"})," に渡す用の ",e.jsx(n.code,{children:"*.svg"})," ファイルをその対象から除いてください。"]})]})}function l(c={}){const{wrapper:n}={...r(),...c.components};return n?e.jsx(n,{...c,children:e.jsx(s,{...c})}):s(c)}export{l as default};
