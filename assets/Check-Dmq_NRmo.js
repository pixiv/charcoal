import{j as n,M as s}from"./iframe-Da7rVJAF.js";import{useMDXComponents as d}from"./index-WfA31zhP.js";import"./preload-helper-C1FmrZbK.js";function c(e){const i={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...d(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"tailwind-diff/Check"}),`
`,n.jsx(i.h1,{id:"tailwind-diff-check",children:"tailwind-diff check"}),`
`,n.jsx(i.h2,{id:"概要",children:"概要"}),`
`,n.jsxs(i.p,{children:["Tailwind CSS のバージョンや設定ファイルの変更をもとに、利用できるクラスの差分を出力します。",n.jsx(i.br,{}),`
`,"内部的には、Tailwind CSS のビルドを 2 回実行し、結果を tmp ディレクトリに保存し、内容を比較しています。"]}),`
`,n.jsx(i.h2,{id:"オプション",children:"オプション"}),`
`,n.jsxs(i.table,{children:[n.jsx(i.thead,{children:n.jsxs(i.tr,{children:[n.jsx(i.th,{children:"name"}),n.jsx(i.th,{children:"description"}),n.jsx(i.th,{children:"alias"}),n.jsx(i.th,{children:"type"}),n.jsx(i.th,{children:"required"})]})}),n.jsxs(i.tbody,{children:[n.jsxs(i.tr,{children:[n.jsx(i.td,{children:"after-config"}),n.jsx(i.td,{children:"2 回目のビルド時に使用する Tailwind CSS の設定ファイル。設定ファイルが変化するシナリオで用いる"}),n.jsx(i.td,{children:"--after-config のみ"}),n.jsx(i.td,{children:"string"}),n.jsx(i.td,{children:"NO"})]}),n.jsxs(i.tr,{children:[n.jsx(i.td,{children:"before-config"}),n.jsx(i.td,{children:"1 回目のビルド時に使用する Tailwind CSS の設定ファイル。設定ファイルが変化するシナリオで用いる"}),n.jsx(i.td,{children:"--before-config のみ"}),n.jsx(i.td,{children:"string"}),n.jsx(i.td,{children:"NO"})]}),n.jsxs(i.tr,{children:[n.jsx(i.td,{children:"config"}),n.jsx(i.td,{children:"ビルド時に使用する Tailwind CSS の設定ファイル。設定ファイルが特に変化しない場合これだけを指定する。(※1)"}),n.jsx(i.td,{children:"-c または --config"}),n.jsx(i.td,{children:"string"}),n.jsx(i.td,{children:"NO"})]}),n.jsxs(i.tr,{children:[n.jsx(i.td,{children:"json"}),n.jsx(i.td,{children:"出力フォーマットを JSON にするかどうか"}),n.jsx(i.td,{children:"--json のみ"}),n.jsx(i.td,{children:"boolean"}),n.jsx(i.td,{children:"NO"})]}),n.jsxs(i.tr,{children:[n.jsx(i.td,{children:"packages"}),n.jsx(i.td,{children:"1 回目のビルドと 2 回目のビルドの間にアップデートすべきパッケージ群"}),n.jsx(i.td,{children:"--packages のみ"}),n.jsx(i.td,{children:"string[] (※2)"}),n.jsx(i.td,{children:"NO"})]})]})]}),`
`,n.jsxs(i.p,{children:["※1 ",n.jsx(i.code,{children:"config"})," と ",n.jsx(i.code,{children:"before-config"})," あるいは ",n.jsx(i.code,{children:"after-config"}),` がどちらも指定されないときの動作は未定義。どちらかは必ず指定する。
また、たとえば `,n.jsx(i.code,{children:"config"})," と ",n.jsx(i.code,{children:"before-config"})," だけを指定した際の動作も未定義。"]}),`
`,n.jsxs(i.p,{children:["※2 ",n.jsx(i.code,{children:"--packages a b"})," と ",n.jsx(i.code,{children:"--packages a --packages b"})," はどちらも OK。詳しくは ",n.jsx(i.a,{href:"https://yargs.js.org/docs/#api-reference-arraykey",rel:"nofollow",children:"yargs"})," のドキュメントを参照。"]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-bash",children:`$ npx @charcoal-ui/tailwind-diff check --help
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
`,n.jsx(i.h2,{id:"使い方の例",children:"使い方の例"}),`
`,n.jsxs(i.h3,{id:"tailwindcss-はそのままcharcoal-uitailwind-config-をアップデートする",children:[n.jsx(i.code,{children:"tailwindcss"})," はそのまま、",n.jsx(i.code,{children:"@charcoal-ui/tailwind-config"})," をアップデートする"]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-bash",children:`npx @charcoal-ui/tailwind-diff check -c ./tailwind.config.js --packages @charcoal-ui/tailwind-config@3.13.0
`})}),`
`,n.jsxs(i.h3,{id:"charcoal-uitailwind-config-はそのままtailwindcss-をアップデートする",children:[n.jsx(i.code,{children:"@charcoal-ui/tailwind-config"})," はそのまま、",n.jsx(i.code,{children:"tailwindcss"})," をアップデートする"]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-bash",children:`npx @charcoal-ui/tailwind-diff check -c ./tailwind.config.js --packages tailwindcss@latest
`})}),`
`,n.jsxs(i.h3,{id:"パッケージをアップデートせずtailwindconfigjs-を変更する",children:["パッケージをアップデートせず、",n.jsx(i.code,{children:"tailwind.config.js"})," を変更する"]}),`
`,n.jsxs(i.p,{children:["手動で新たに ",n.jsx(i.code,{children:"tailwind.config.new.js"})," のようなファイルを作成した上で以下を実行します。"]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-bash",children:`npx @charcoal-ui/tailwind-diff check --before-config ./tailwind.config.js --after-config ./tailwind.config.new.js
`})}),`
`,n.jsx(i.h2,{id:"出力の形式",children:"出力の形式"}),`
`,n.jsx(i.h3,{id:"デフォルトの形式",children:"デフォルトの形式"}),`
`,n.jsx(i.p,{children:"変更内容の詳細は出力せず、増減があったかだけを出力します。"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-bash",children:`$ npx @charcoal-ui/tailwind-diff check --packages @charcoal-ui/tailwind-config@latest --config tailwind.config.js

1 classes added, 0 classes removed.
`})}),`
`,n.jsx(i.p,{children:"増減に変化が 0 件であることを確認したいケースなどはそちらが適用です。"}),`
`,n.jsx(i.h3,{id:"json-形式",children:"JSON 形式"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"--json"})," を指定した場合"]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-bash",children:`$ npx @charcoal-ui/tailwind-diff check --packages @charcoal-ui/tailwind-config@latest --json

[{"className":"w-fit","status":"added","css":[".w-fit {\\n    width: fit-content;\\n}"]}]
`})}),`
`,n.jsxs(i.p,{children:["この場合、",n.jsx(i.code,{children:"@charcoal-ui/tailwind-config"})," をアップデートすると w-fit というクラスが新しく使えるようになることがわかります。"]}),`
`,n.jsxs(i.p,{children:["人間に見やすくするオプションなどはありません。その場合は ",n.jsx(i.a,{href:"https://jqlang.github.io/jq/",rel:"nofollow",children:"jq"})," など、JSON をフォーマットできるコマンドと併用するのが推奨されます。"]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-bash",children:`$ npx @charcoal-ui/tailwind-diff check --packages @charcoal-ui/tailwind-config@latest --json | jq

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
`,n.jsxs(i.p,{children:[n.jsxs(i.strong,{children:["ステータスの種類は ",n.jsx(i.code,{children:"added"})," または ",n.jsx(i.code,{children:"removed"})," の 2 種類です。"]}),`
クラスが変更された場合に `,n.jsx(i.code,{children:"改名した"})," と訳してくれることはなく、1 件の追加と 1 件の削除としてカウントされます。"]})]})}function t(e={}){const{wrapper:i}={...d(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(c,{...e})}):c(e)}export{t as default};
