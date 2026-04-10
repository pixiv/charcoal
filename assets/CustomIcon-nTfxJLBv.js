import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-D6EVFDe3.js";import{c as n,nt as r,o as i}from"./iframe-C9I9vVUi.js";import{t as a}from"./mdx-react-shim-BcdQdUlt.js";function o(e){let n={a:`a`,br:`br`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`icons/Custom`}),`
`,(0,c.jsx)(n.h1,{id:`独自のアイコンを登録する`,children:`独自のアイコンを登録する`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`<pixiv-icon>`}),` に収録されていないアイコンを登録する方法が 2 つ用意されています。`]}),`
`,(0,c.jsx)(n.h2,{id:`js-ファイルを登録する`,children:`.js ファイルを登録する`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`<pixiv-icon>`}),` に収録されているアイコン同様の処理系を利用してアイコンをレンダリングします。`]}),`
`,(0,c.jsx)(n.h3,{id:`1-svg-タグ文字列を返す-js-ファイルを作成する`,children:`1. SVG タグ文字列を返す .js ファイルを作成する`}),`
`,(0,c.jsxs)(n.p,{children:[`表示したい SVG が文字列として返される `,(0,c.jsx)(n.code,{children:`.js`}),` のファイルを作成してください。`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// ExampleCustomIcon.js
export default '<svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><rect width="16" height="16" x="0" y="0" fill="currentColor"></rect></svg>'
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`d.ts`}),` も作成するならば以下のようになります。`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// ExampleCustomIcon.d.ts
declare const _default: string
export default _default
`})}),`
`,(0,c.jsxs)(n.h3,{id:`2-pixiviconextend-で登録する`,children:[`2. `,(0,c.jsx)(n.code,{children:`PixivIcon.extend()`}),` で登録する`]}),`
`,(0,c.jsxs)(n.p,{children:[`作成した object を `,(0,c.jsx)(n.code,{children:`PixivIcon.extend()`}),` の引数へ与えて登録します。`,(0,c.jsx)(n.br,{}),`
`,`名前の形式は `,(0,c.jsx)(n.code,{children:`{size}/{name}`}),` である必要があります。`,(0,c.jsx)(n.br,{}),`
`,`TypeScript 環境では、`,(0,c.jsx)(n.code,{children:`KnownIconType`}),` という型を拡張することで、カスタムアイコンに対しても補完が効くようになります。`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PixivIcon } from '@charcoal-ui/icons'

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
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-html`,children:`<pixiv-icon name="16/ExampleCustomIcon" />
`})}),`
`,(0,c.jsx)(n.h2,{id:`svg-ファイルを登録する`,children:`SVG ファイルを登録する`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`<pixiv-icon>`}),` の `,(0,c.jsx)(n.code,{children:`name`}),` に存在しない SVG をアイコンとして登録することができます。`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PixivIcon } from '@charcoal-ui/icons'
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
`,(0,c.jsxs)(n.p,{children:[`その場合も名前の形式は `,(0,c.jsx)(n.code,{children:`{size}/{name}`}),` である必要があります。`,(0,c.jsx)(n.br,{}),`
`,`TypeScript 環境では、`,(0,c.jsx)(n.code,{children:`KnownIconType`}),` という型を拡張することで、カスタムアイコンに対しても補完が効くようになります。`]}),`
`,(0,c.jsx)(n.h3,{id:`svg-ファイルアイコンのためのバンドラ設定`,children:`SVG ファイルアイコンのためのバンドラ設定`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`PixivIcon.extend()`}),` に渡すオブジェクトはキーがアイコン名、値が SVG ファイルに対するパス名または URL である必要があります（内部的には、ここで渡した文字列に対して `,(0,c.jsx)(n.code,{children:`fetch()`}),` が走ります）。`]}),`
`,(0,c.jsxs)(n.p,{children:[`SVG ファイルを `,(0,c.jsx)(n.code,{children:`import`}),` して渡す場合、プロジェクトのバンドラが `,(0,c.jsx)(n.code,{children:`*.svg`}),` を `,(0,c.jsx)(n.strong,{children:`パス文字列として`}),`（ファイルの内容の文字列ではなく）ロードする設定になっていることを確認してください。`]}),`
`,(0,c.jsxs)(n.p,{children:[`例えば Webpack の場合、当該アイコンファイルに対するルールの type は `,(0,c.jsx)(n.a,{href:`https://webpack.js.org/guides/asset-modules/`,rel:`nofollow`,children:(0,c.jsx)(n.code,{children:`asset/resource`})}),` であるべきです。
`,(0,c.jsx)(n.a,{href:`https://react-svgr.com/`,rel:`nofollow`,children:`svgr`}),` など、SVG ファイルを文字列以外の値にトランスフォームするツールを使っているプロジェクトでは、`,(0,c.jsx)(n.code,{children:`PixivIcon.extend()`}),` に渡す用の `,(0,c.jsx)(n.code,{children:`*.svg`}),` ファイルをその対象から除いてください。`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=r(),a(),n()}))();export{s as default};