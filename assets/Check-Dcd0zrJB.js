import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-jqX-xhmR.js";import{c as n,nt as r,o as i}from"./iframe-DdeWrMet.js";import{t as a}from"./mdx-react-shim-BQOr_riv.js";function o(e){let n={a:`a`,br:`br`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`tailwind-diff/Check`}),`
`,(0,c.jsx)(n.h1,{id:`tailwind-diff-check`,children:`tailwind-diff check`}),`
`,(0,c.jsx)(n.h2,{id:`概要`,children:`概要`}),`
`,(0,c.jsxs)(n.p,{children:[`Tailwind CSS のバージョンや設定ファイルの変更をもとに、利用できるクラスの差分を出力します。`,(0,c.jsx)(n.br,{}),`
`,`内部的には、Tailwind CSS のビルドを 2 回実行し、結果を tmp ディレクトリに保存し、内容を比較しています。`]}),`
`,(0,c.jsx)(n.h2,{id:`オプション`,children:`オプション`}),`
`,(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:`name`}),(0,c.jsx)(n.th,{children:`description`}),(0,c.jsx)(n.th,{children:`alias`}),(0,c.jsx)(n.th,{children:`type`}),(0,c.jsx)(n.th,{children:`required`})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:`after-config`}),(0,c.jsx)(n.td,{children:`2 回目のビルド時に使用する Tailwind CSS の設定ファイル。設定ファイルが変化するシナリオで用いる`}),(0,c.jsx)(n.td,{children:`--after-config のみ`}),(0,c.jsx)(n.td,{children:`string`}),(0,c.jsx)(n.td,{children:`NO`})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:`before-config`}),(0,c.jsx)(n.td,{children:`1 回目のビルド時に使用する Tailwind CSS の設定ファイル。設定ファイルが変化するシナリオで用いる`}),(0,c.jsx)(n.td,{children:`--before-config のみ`}),(0,c.jsx)(n.td,{children:`string`}),(0,c.jsx)(n.td,{children:`NO`})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:`config`}),(0,c.jsx)(n.td,{children:`ビルド時に使用する Tailwind CSS の設定ファイル。設定ファイルが特に変化しない場合これだけを指定する。(※1)`}),(0,c.jsx)(n.td,{children:`-c または --config`}),(0,c.jsx)(n.td,{children:`string`}),(0,c.jsx)(n.td,{children:`NO`})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:`json`}),(0,c.jsx)(n.td,{children:`出力フォーマットを JSON にするかどうか`}),(0,c.jsx)(n.td,{children:`--json のみ`}),(0,c.jsx)(n.td,{children:`boolean`}),(0,c.jsx)(n.td,{children:`NO`})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:`packages`}),(0,c.jsx)(n.td,{children:`1 回目のビルドと 2 回目のビルドの間にアップデートすべきパッケージ群`}),(0,c.jsx)(n.td,{children:`--packages のみ`}),(0,c.jsx)(n.td,{children:`string[] (※2)`}),(0,c.jsx)(n.td,{children:`NO`})]})]})]}),`
`,(0,c.jsxs)(n.p,{children:[`※1 `,(0,c.jsx)(n.code,{children:`config`}),` と `,(0,c.jsx)(n.code,{children:`before-config`}),` あるいは `,(0,c.jsx)(n.code,{children:`after-config`}),` がどちらも指定されないときの動作は未定義。どちらかは必ず指定する。
また、たとえば `,(0,c.jsx)(n.code,{children:`config`}),` と `,(0,c.jsx)(n.code,{children:`before-config`}),` だけを指定した際の動作も未定義。`]}),`
`,(0,c.jsxs)(n.p,{children:[`※2 `,(0,c.jsx)(n.code,{children:`--packages a b`}),` と `,(0,c.jsx)(n.code,{children:`--packages a --packages b`}),` はどちらも OK。詳しくは `,(0,c.jsx)(n.a,{href:`https://yargs.js.org/docs/#api-reference-arraykey`,rel:`nofollow`,children:`yargs`}),` のドキュメントを参照。`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`$ npx @charcoal-ui/tailwind-diff check --help
tailwind-diff check

checks diffs due to package updates

Options:
      --version        Show version number                             [boolean]
      --help           Show help                                       [boolean]
      --before-config  tailwind config used in first build              [string]
      --after-config   tailwind config used in second build             [string]
      --packages       packages to be update                             [array]
      --json           print result as JSON format                     [boolean]
  -c, --config         tailwind config file                             [string]
`})}),`
`,(0,c.jsx)(n.h2,{id:`使い方の例`,children:`使い方の例`}),`
`,(0,c.jsxs)(n.h3,{id:`tailwindcss-はそのままcharcoal-uitailwind-config-をアップデートする`,children:[(0,c.jsx)(n.code,{children:`tailwindcss`}),` はそのまま、`,(0,c.jsx)(n.code,{children:`@charcoal-ui/tailwind-config`}),` をアップデートする`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx @charcoal-ui/tailwind-diff check -c ./tailwind.config.js --packages @charcoal-ui/tailwind-config@3.13.0
`})}),`
`,(0,c.jsxs)(n.h3,{id:`charcoal-uitailwind-config-はそのままtailwindcss-をアップデートする`,children:[(0,c.jsx)(n.code,{children:`@charcoal-ui/tailwind-config`}),` はそのまま、`,(0,c.jsx)(n.code,{children:`tailwindcss`}),` をアップデートする`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx @charcoal-ui/tailwind-diff check -c ./tailwind.config.js --packages tailwindcss@latest
`})}),`
`,(0,c.jsxs)(n.h3,{id:`パッケージをアップデートせずtailwindconfigjs-を変更する`,children:[`パッケージをアップデートせず、`,(0,c.jsx)(n.code,{children:`tailwind.config.js`}),` を変更する`]}),`
`,(0,c.jsxs)(n.p,{children:[`手動で新たに `,(0,c.jsx)(n.code,{children:`tailwind.config.new.js`}),` のようなファイルを作成した上で以下を実行します。`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx @charcoal-ui/tailwind-diff check --before-config ./tailwind.config.js --after-config ./tailwind.config.new.js
`})}),`
`,(0,c.jsx)(n.h2,{id:`出力の形式`,children:`出力の形式`}),`
`,(0,c.jsx)(n.h3,{id:`デフォルトの形式`,children:`デフォルトの形式`}),`
`,(0,c.jsx)(n.p,{children:`変更内容の詳細は出力せず、増減があったかだけを出力します。`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`$ npx @charcoal-ui/tailwind-diff check --packages @charcoal-ui/tailwind-config@latest --config tailwind.config.js

1 classes added, 0 classes removed.
`})}),`
`,(0,c.jsx)(n.p,{children:`増減に変化が 0 件であることを確認したいケースなどはそちらが適用です。`}),`
`,(0,c.jsx)(n.h3,{id:`json-形式`,children:`JSON 形式`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`--json`}),` を指定した場合`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`$ npx @charcoal-ui/tailwind-diff check --packages @charcoal-ui/tailwind-config@latest --json

[{"className":"w-fit","status":"added","css":[".w-fit {\\n    width: fit-content;\\n}"]}]
`})}),`
`,(0,c.jsxs)(n.p,{children:[`この場合、`,(0,c.jsx)(n.code,{children:`@charcoal-ui/tailwind-config`}),` をアップデートすると w-fit というクラスが新しく使えるようになることがわかります。`]}),`
`,(0,c.jsxs)(n.p,{children:[`人間に見やすくするオプションなどはありません。その場合は `,(0,c.jsx)(n.a,{href:`https://jqlang.github.io/jq/`,rel:`nofollow`,children:`jq`}),` など、JSON をフォーマットできるコマンドと併用するのが推奨されます。`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`$ npx @charcoal-ui/tailwind-diff check --packages @charcoal-ui/tailwind-config@latest --json | jq

[
  {
    "className": "w-fit",
    "status": "added",
    "css": [
      ".w-fit {\\n    width: fit-content;\\n}"
    ]
  }
]
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsxs)(n.strong,{children:[`ステータスの種類は `,(0,c.jsx)(n.code,{children:`added`}),` または `,(0,c.jsx)(n.code,{children:`removed`}),` の 2 種類です。`]}),`
クラスが変更された場合に `,(0,c.jsx)(n.code,{children:`改名した`}),` と訳してくれることはなく、1 件の追加と 1 件の削除としてカウントされます。`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=r(),a(),n()}))();export{s as default};