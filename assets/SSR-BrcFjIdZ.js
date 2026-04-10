import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-BXrDxJDC.js";import{c as n,nt as r,o as i}from"./iframe-A6E4gP06.js";import{t as a}from"./mdx-react-shim-DzaD4cJM.js";function o(e){let n={br:`br`,code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`icons/SSR Guide`}),`
`,(0,c.jsx)(n.h1,{id:`サーバーサイドレンダリング`,children:`サーバーサイドレンダリング`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`<pixiv-icon>`}),` はサーバーサイドレンダリング時にも利用できます。
`,(0,c.jsx)(n.code,{children:`@charcoal-ui/icons`}),` は、Node.js の環境下で import されたり、API を呼び出されても問題が起きないように設計されています。`]}),`
`,(0,c.jsxs)(n.p,{children:[`一方、Custom Element であるということは、`,(0,c.jsx)(n.strong,{children:`SVG アイコンの読み込みはクライアントサイドで行われます`}),`。`,(0,c.jsx)(n.br,{}),`
`,`したがって、大きさが確定せずにレイアウトシフトが起こりうるのは、SSR における注意点の一つと言えます。`]}),`
`,(0,c.jsxs)(n.p,{children:[`以下のようなコードをリセット CSS に含めることで、`,(0,c.jsx)(n.code,{children:`<pixiv-icon>`}),` によるレイアウトシフトの発生を防ぐことができます。`,(0,c.jsx)(n.br,{}),`
`,`（簡単のため、ネスト記法が利用できるケースを意図しています）`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-css`,children:`pixiv-icon {
  display: inline-flex;
  width: calc(var(--icon-size, 1em) * var(--scale, 1));
  height: calc(var(--icon-size, 1em) * var(--scale, 1));
}

&[name~='16/'] {
  --icon-size: 16px;
}

&[name~='24/'] {
  --icon-size: 24px;
}

&[name~='32/'] {
  --icon-size: 32px;
}

&[scale='2'] {
  --scale: 2;
}

&[scale='3'] {
  --scale: 3;
}

/* NOTICE: 現状とサポートブラウザが少ない */
@supports (--scale: attr(unsafe-non-guideline-scale)) {
  &[unsafe-non-guideline-scale] {
    --scale: attr(unsafe-non-guideline-scale);
  }
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[`ただしコメントにもある通り、`,(0,c.jsxs)(n.strong,{children:[`現状 `,(0,c.jsx)(n.code,{children:`unsafe-non-guideline-scale`}),` をつけた要素は、リセット CSS だけではレイアウトシフトが防げません。`]}),`
CSS の `,(0,c.jsx)(n.code,{children:`attr()`}),` が数値の解釈をサポートするまで、個別にインラインスタイルを用いて大きさを確定させるなどのワークアラウンドが必要です。`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-html`,children:`<pixiv-icon
  name="24/Add"
  unsafe-non-guideline-scale="0.5"
  style="--scale: 0.5;"
></pixiv-icon>
<pixiv-icon
  name="24/Add"
  unsafe-non-guideline-scale="0.5"
  style="width: 12px; height: 12px;"
></pixiv-icon>
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=r(),a(),n()}))();export{s as default};