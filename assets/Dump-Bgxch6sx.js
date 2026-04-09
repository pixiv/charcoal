import{n as e}from"./chunk-BneVvdWh.js";import{c as t,nt as n,o as r}from"./iframe-CVQNsQPh.js";import{r as i}from"./react-DgnijFs3.js";import{t as a}from"./mdx-react-shim-BAyak7t4.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`tailwind-diff/Dump`}),`
`,(0,c.jsx)(t.h1,{id:`tailwind-diff-dump`,children:`tailwind-diff dump`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx @charcoal-ui/tailwind-diff dump -c ./path/to/tailwind.config.js -o dump.css
`})}),`
`,(0,c.jsx)(t.h2,{id:`概要`,children:`概要`}),`
`,(0,c.jsxs)(t.p,{children:[`指定したコンフィグファイルをもとに CSS を出力します。
できることは Tailwind CSS などの `,(0,c.jsx)(t.code,{children:`build`}),` と同じです。`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.a,{href:`/docs/tailwind-diff-check--docs`,children:`check`}),`コマンドとは内部的に`,(0,c.jsx)(t.code,{children:`dump`}),`が利用されています。`]}),`
内部分の利用以外でこのコマンドを直接利用するケースは（デバッグなどを除いて）あまりないと言って良いでしょう。`]}),`
`,(0,c.jsx)(t.h2,{id:`オプション`,children:`オプション`}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`name`}),(0,c.jsx)(t.th,{children:`description`}),(0,c.jsx)(t.th,{children:`alias`}),(0,c.jsx)(t.th,{children:`type`}),(0,c.jsx)(t.th,{children:`required`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:`config`}),(0,c.jsxs)(t.td,{children:[`ビルド時に使用する Tailwind CSS の設定ファイル。省略した場合は `,(0,c.jsx)(t.code,{children:`tailwind.config.js`}),`が使われれる（現在のパスからの相対）。`]}),(0,c.jsx)(t.td,{children:`-c または --config`}),(0,c.jsx)(t.td,{children:`string`}),(0,c.jsx)(t.td,{children:`YES`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:`output`}),(0,c.jsx)(t.td,{children:`ビルド結果の CSS を出力するファイル。省略した場合は標準出力に出る。`}),(0,c.jsx)(t.td,{children:`-o または --output`}),(0,c.jsx)(t.td,{children:`string`}),(0,c.jsx)(t.td,{children:`YES`})]})]})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`$ npx @charcoal-ui/tailwind-diff dump --help
tailwind-diff dump

dump Tailwind CSS with config

Options:
      --version  Show version number                                   [boolean]
      --help     Show help                                             [boolean]
  -o, --output   output file                                            [string]
  -c, --config   tailwind config file                                   [string]
`})})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),t()}))();export{s as default};