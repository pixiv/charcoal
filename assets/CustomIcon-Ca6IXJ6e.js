import{n as e}from"./chunk-BneVvdWh.js";import{c as t,nt as n,o as r}from"./iframe-D15TZ-Lk.js";import{r as i}from"./react-gSRirEss.js";import{t as a}from"./mdx-react-shim-DhF9kuO7.js";function o(e){let t={a:`a`,br:`br`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`icons/Custom`}),`
`,(0,c.jsx)(t.h1,{id:`独自のアイコンを登録する`,children:`独自のアイコンを登録する`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`<pixiv-icon>`}),` に収録されていないアイコンを登録する方法が 2 つ用意されています。`]}),`
`,(0,c.jsx)(t.h2,{id:`js-ファイルを登録する`,children:`.js ファイルを登録する`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`<pixiv-icon>`}),` に収録されているアイコン同様の処理系を利用してアイコンをレンダリングします。`]}),`
`,(0,c.jsx)(t.h3,{id:`1-svg-タグ文字列を返す-js-ファイルを作成する`,children:`1. SVG タグ文字列を返す .js ファイルを作成する`}),`
`,(0,c.jsxs)(t.p,{children:[`表示したい SVG が文字列として返される `,(0,c.jsx)(t.code,{children:`.js`}),` のファイルを作成してください。`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`// ExampleCustomIcon.js
export default '<svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><rect width="16" height="16" x="0" y="0" fill="currentColor"></rect></svg>'
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`d.ts`}),` も作成するならば以下のようになります。`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`// ExampleCustomIcon.d.ts
declare const _default: string
export default _default
`})}),`
`,(0,c.jsxs)(t.h3,{id:`2-pixiviconextend-で登録する`,children:[`2. `,(0,c.jsx)(t.code,{children:`PixivIcon.extend()`}),` で登録する`]}),`
`,(0,c.jsxs)(t.p,{children:[`作成した object を `,(0,c.jsx)(t.code,{children:`PixivIcon.extend()`}),` の引数へ与えて登録します。`,(0,c.jsx)(t.br,{}),`
`,`名前の形式は `,(0,c.jsx)(t.code,{children:`{size}/{name}`}),` である必要があります。`,(0,c.jsx)(t.br,{}),`
`,`TypeScript 環境では、`,(0,c.jsx)(t.code,{children:`KnownIconType`}),` という型を拡張することで、カスタムアイコンに対しても補完が効くようになります。`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PixivIcon } from '@charcoal-ui/icons'

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
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<pixiv-icon name="16/ExampleCustomIcon" />
`})}),`
`,(0,c.jsx)(t.h2,{id:`svg-ファイルを登録する`,children:`SVG ファイルを登録する`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`<pixiv-icon>`}),` の `,(0,c.jsx)(t.code,{children:`name`}),` に存在しない SVG をアイコンとして登録することができます。`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PixivIcon } from '@charcoal-ui/icons'
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
`,(0,c.jsxs)(t.p,{children:[`その場合も名前の形式は `,(0,c.jsx)(t.code,{children:`{size}/{name}`}),` である必要があります。`,(0,c.jsx)(t.br,{}),`
`,`TypeScript 環境では、`,(0,c.jsx)(t.code,{children:`KnownIconType`}),` という型を拡張することで、カスタムアイコンに対しても補完が効くようになります。`]}),`
`,(0,c.jsx)(t.h3,{id:`svg-ファイルアイコンのためのバンドラ設定`,children:`SVG ファイルアイコンのためのバンドラ設定`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`PixivIcon.extend()`}),` に渡すオブジェクトはキーがアイコン名、値が SVG ファイルに対するパス名または URL である必要があります（内部的には、ここで渡した文字列に対して `,(0,c.jsx)(t.code,{children:`fetch()`}),` が走ります）。`]}),`
`,(0,c.jsxs)(t.p,{children:[`SVG ファイルを `,(0,c.jsx)(t.code,{children:`import`}),` して渡す場合、プロジェクトのバンドラが `,(0,c.jsx)(t.code,{children:`*.svg`}),` を `,(0,c.jsx)(t.strong,{children:`パス文字列として`}),`（ファイルの内容の文字列ではなく）ロードする設定になっていることを確認してください。`]}),`
`,(0,c.jsxs)(t.p,{children:[`例えば Webpack の場合、当該アイコンファイルに対するルールの type は `,(0,c.jsx)(t.a,{href:`https://webpack.js.org/guides/asset-modules/`,rel:`nofollow`,children:(0,c.jsx)(t.code,{children:`asset/resource`})}),` であるべきです。
`,(0,c.jsx)(t.a,{href:`https://react-svgr.com/`,rel:`nofollow`,children:`svgr`}),` など、SVG ファイルを文字列以外の値にトランスフォームするツールを使っているプロジェクトでは、`,(0,c.jsx)(t.code,{children:`PixivIcon.extend()`}),` に渡す用の `,(0,c.jsx)(t.code,{children:`*.svg`}),` ファイルをその対象から除いてください。`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),t()}))();export{s as default};