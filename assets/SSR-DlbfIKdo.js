import{j as n,M as o}from"./iframe-Czr9xm4W.js";import{useMDXComponents as c}from"./index-DEIIjSGd.js";import"./preload-helper-C1FmrZbK.js";function i(s){const e={br:"br",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...c(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"icons/SSR Guide"}),`
`,n.jsx(e.h1,{id:"サーバーサイドレンダリング",children:"サーバーサイドレンダリング"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"<pixiv-icon>"}),` はサーバーサイドレンダリング時にも利用できます。
`,n.jsx(e.code,{children:"@charcoal-ui/icons"})," は、Node.js の環境下で import されたり、API を呼び出されても問題が起きないように設計されています。"]}),`
`,n.jsxs(e.p,{children:["一方、Custom Element であるということは、",n.jsx(e.strong,{children:"SVG アイコンの読み込みはクライアントサイドで行われます"}),"。",n.jsx(e.br,{}),`
`,"したがって、大きさが確定せずにレイアウトシフトが起こりうるのは、SSR における注意点の一つと言えます。"]}),`
`,n.jsxs(e.p,{children:["以下のようなコードをリセット CSS に含めることで、",n.jsx(e.code,{children:"<pixiv-icon>"})," によるレイアウトシフトの発生を防ぐことができます。",n.jsx(e.br,{}),`
`,"（簡単のため、ネスト記法が利用できるケースを意図しています）"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`pixiv-icon {
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
`,n.jsxs(e.p,{children:["ただしコメントにもある通り、",n.jsxs(e.strong,{children:["現状 ",n.jsx(e.code,{children:"unsafe-non-guideline-scale"})," をつけた要素は、リセット CSS だけではレイアウトシフトが防げません。"]}),`
CSS の `,n.jsx(e.code,{children:"attr()"})," が数値の解釈をサポートするまで、個別にインラインスタイルを用いて大きさを確定させるなどのワークアラウンドが必要です。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<pixiv-icon
  name="24/Add"
  unsafe-non-guideline-scale="0.5"
  style="--scale: 0.5;"
></pixiv-icon>
<pixiv-icon
  name="24/Add"
  unsafe-non-guideline-scale="0.5"
  style="width: 12px; height: 12px;"
></pixiv-icon>
`})})]})}function t(s={}){const{wrapper:e}={...c(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{t as default};
