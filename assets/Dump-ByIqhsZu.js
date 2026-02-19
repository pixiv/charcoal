import{j as n,M as s}from"./iframe-Da7rVJAF.js";import{useMDXComponents as t}from"./index-WfA31zhP.js";import"./preload-helper-C1FmrZbK.js";function e(d){const i={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t(),...d.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"tailwind-diff/Dump"}),`
`,n.jsx(i.h1,{id:"tailwind-diff-dump",children:"tailwind-diff dump"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-bash",children:`npx @charcoal-ui/tailwind-diff dump -c ./path/to/tailwind.config.js -o dump.css
`})}),`
`,n.jsx(i.h2,{id:"概要",children:"概要"}),`
`,n.jsxs(i.p,{children:[`指定したコンフィグファイルをもとに CSS を出力します。
できることは Tailwind CSS などの `,n.jsx(i.code,{children:"build"})," と同じです。"]}),`
`,n.jsxs(i.p,{children:[n.jsxs(i.strong,{children:[n.jsx(i.a,{href:"/docs/tailwind-diff-check--docs",children:"check"}),"コマンドとは内部的に",n.jsx(i.code,{children:"dump"}),"が利用されています。"]}),`
内部分の利用以外でこのコマンドを直接利用するケースは（デバッグなどを除いて）あまりないと言って良いでしょう。`]}),`
`,n.jsx(i.h2,{id:"オプション",children:"オプション"}),`
`,n.jsxs(i.table,{children:[n.jsx(i.thead,{children:n.jsxs(i.tr,{children:[n.jsx(i.th,{children:"name"}),n.jsx(i.th,{children:"description"}),n.jsx(i.th,{children:"alias"}),n.jsx(i.th,{children:"type"}),n.jsx(i.th,{children:"required"})]})}),n.jsxs(i.tbody,{children:[n.jsxs(i.tr,{children:[n.jsx(i.td,{children:"config"}),n.jsxs(i.td,{children:["ビルド時に使用する Tailwind CSS の設定ファイル。省略した場合は ",n.jsx(i.code,{children:"tailwind.config.js"}),"が使われれる（現在のパスからの相対）。"]}),n.jsx(i.td,{children:"-c または --config"}),n.jsx(i.td,{children:"string"}),n.jsx(i.td,{children:"YES"})]}),n.jsxs(i.tr,{children:[n.jsx(i.td,{children:"output"}),n.jsx(i.td,{children:"ビルド結果の CSS を出力するファイル。省略した場合は標準出力に出る。"}),n.jsx(i.td,{children:"-o または --output"}),n.jsx(i.td,{children:"string"}),n.jsx(i.td,{children:"YES"})]})]})]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-bash",children:`$ npx @charcoal-ui/tailwind-diff dump --help
tailwind-diff dump

dump Tailwind CSS with config

Options:
      --version  Show version number                                   [boolean]
      --help     Show help                                             [boolean]
  -o, --output   output file                                            [string]
  -c, --config   tailwind config file                                   [string]
`})})]})}function h(d={}){const{wrapper:i}={...t(),...d.components};return i?n.jsx(i,{...d,children:n.jsx(e,{...d})}):e(d)}export{h as default};
