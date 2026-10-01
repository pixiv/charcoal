import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-DqfMNWZR.js";import{M as n,c as r,u as i}from"./iframe-DI8e7bDa.js";import{t as a}from"./mdx-react-shim-MHi6bYTZ.js";function o(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Styling Guide`}),`
`,(0,c.jsx)(n.h1,{id:`スタイリングの選び方`,children:`スタイリングの選び方`}),`
`,(0,c.jsxs)(n.p,{children:[`charcoal は同じデザイントークンを 3 通りの方法で使えるようにしています。このページは`,(0,c.jsx)(n.strong,{children:`なぜそうなっているか`}),`を説明します。実際の手順は各パッケージのクイックスタート、またはエージェント向けの `,(0,c.jsx)(n.a,{href:`https://github.com/pixiv/charcoal/tree/main/skills`,rel:`nofollow`,children:`skills`}),` を参照してください。`]}),`
`,(0,c.jsx)(n.h2,{id:`三層構造`,children:`三層構造`}),`
`,(0,c.jsx)(n.p,{children:`charcoal の設計思想は「定数」「ユーティリティ」「コンポーネント」の三層です。`}),`
`,(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:`層`}),(0,c.jsx)(n.th,{children:`中身`}),(0,c.jsx)(n.th,{children:`パッケージ`}),(0,c.jsx)(n.th,{children:`選択の余地`})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:`定数`}),(0,c.jsx)(n.td,{children:`デザイントークン`}),(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.code,{children:`@charcoal-ui/foundation`}),` `,(0,c.jsx)(n.code,{children:`@charcoal-ui/theme`})]}),(0,c.jsx)(n.td,{children:`なし。全員これを使う`})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.strong,{children:`ユーティリティ`})}),(0,c.jsx)(n.td,{children:`定数を CSS の表現に落とし込み、マークアップに使えるようにしたもの`}),(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.code,{children:`@charcoal-ui/tailwind-config`}),` `,(0,c.jsx)(n.code,{children:`@charcoal-ui/styled`}),` または素の CSS`]}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.strong,{children:`ここだけ`})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:`コンポーネント`}),(0,c.jsx)(n.td,{children:`見た目と挙動が一体の UI 部品`}),(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.code,{children:`@charcoal-ui/react`}),` `,(0,c.jsx)(n.code,{children:`@charcoal-ui/icons`})]}),(0,c.jsx)(n.td,{children:`なし`})]})]})]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`利用者が選ぶのは真ん中の 1 層だけ`}),`です。ここを押さえておかないと、次の 2 つが混ざります。`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`「styled から pure CSS へ」`}),` — コンポーネント層の内部実装が変わった話です。v4 で `,(0,c.jsx)(n.code,{children:`@charcoal-ui/react`}),` が styled-components への依存を捨てました。利用者に選択権はありません。`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`「styled と Tailwind のどちらか」`}),` — ユーティリティ層で利用者が選ぶ話です。自分のアプリのマークアップをどう書くか、という別の問題です。`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`@charcoal-ui/react`}),` のコンポーネントを使うことと、styled-components や Tailwind を使うことは独立しています。「Tailwind を使っているのに `,(0,c.jsx)(n.code,{children:`@charcoal-ui/styled`}),` も要るのか」という疑問が出たら、この 2 つが混ざっています。答えは要りません。`]}),`
`,(0,c.jsx)(n.h2,{id:`3-つの経路`,children:`3 つの経路`}),`
`,(0,c.jsx)(n.h3,{id:`css-variables-を直接使う`,children:`CSS Variables を直接使う`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`@charcoal-ui/theme`}),` が配布する静的 CSS を読み込み、`,(0,c.jsx)(n.code,{children:`var(--charcoal-color-*)`}),` を書きます。追加の依存がなく、素の CSS でも CSS Modules でも vanilla-extract でも同じように使えます。`,(0,c.jsx)(n.strong,{children:`新規に導入するならこれが既定`}),`です。`]}),`
`,(0,c.jsx)(n.h3,{id:`tailwind`,children:`Tailwind`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`@charcoal-ui/tailwind-config`}),` が preset を提供します。Design Token 2.0 の新機能はまずここに入るため、`,(0,c.jsx)(n.strong,{children:`現在もっとも活発に開発されている経路`}),`です。`]}),`
`,(0,c.jsxs)(n.p,{children:[`Tailwind 標準の `,(0,c.jsx)(n.code,{children:`dark:`}),` バリアントはサポートしません。charcoal のトークンは light と dark で`,(0,c.jsx)(n.strong,{children:`同じ名前のまま値が変わる`}),`設計なので、`,(0,c.jsx)(n.code,{children:`dark:bg-background1`}),` という書き方が成立しないためです。代わりに preset へテーマのマップを渡し、CSS Variables の値そのものを切り替えます。`]}),`
`,(0,c.jsx)(n.h3,{id:`styled-components`,children:`styled-components`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`@charcoal-ui/styled`}),` は、すでに styled-components で書かれたコードベースのために存在します。`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Design Token 2.0 には対応していません。`}),` パッケージ全体が非推奨というわけではなく（`,(0,c.jsx)(n.code,{children:`@deprecated`}),` が付いているのは `,(0,c.jsx)(n.code,{children:`createTheme`}),` だけです）、新機能が入らないまま Token 1.0 に留まっている、という状態です。新規採用は避け、既存資産がある場合の着地点として使ってください。`]}),`
`,(0,c.jsx)(n.h2,{id:`design-token-20-はオプトイン`,children:`Design Token 2.0 はオプトイン`}),`
`,(0,c.jsxs)(n.p,{children:[`v6 のコンポーネントは Design Token 2.0 の CSS Variables を参照します。ただし `,(0,c.jsx)(n.strong,{children:`2.0 は既定では有効になりません。`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-html`,children:`<html lang="ja" class="ch-token-v2">
  <body>
    <div id="root"></div>
  </body>
</html>
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`css/v2/light.css`}),` のセレクタは次の形です。`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-css`,children:`:root.ch-token-v2[data-theme='light'],
:root.ch-token-v2:not([data-theme]),
:root[data-theme='light'] .ch-token-v2,
:root:not([data-theme]) .ch-token-v2 {
  --charcoal-color-…: …;
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`.ch-token-v2`}),` がどこにも無いと、light 側の規則は 1 つもマッチせず、トークンは未定義のままになります。エラーも警告も出ません。CSS Variables は継承で効くので、クラスは対象コンポーネント自身かその祖先に付けてください。`]}),`
`,(0,c.jsxs)(n.p,{children:[`dark だけは `,(0,c.jsx)(n.code,{children:`:root[data-theme='dark']`}),` に定義されており、`,(0,c.jsx)(n.code,{children:`.ch-token-v2`}),` の有無に関係なくページ全体へ効きます。段階移行のために light 側だけをスコープした結果の非対称です。`]}),`
`,(0,c.jsxs)(n.p,{children:[`Tailwind 経路も例外ではありません。preset は `,(0,c.jsx)(n.code,{children:`var(--charcoal-color-*)`}),` を`,(0,c.jsx)(n.strong,{children:`参照する`}),`クラスを生成するだけで、変数自体は定義しないためです。`]}),`
`,(0,c.jsx)(n.h2,{id:`v1-互換レイヤー`,children:`v1 互換レイヤー`}),`
`,(0,c.jsx)(n.p,{children:`既存画面の見た目を保ったまま v6 へ上げる場合は、2.0 の代わりに互換レイヤーを読み込みます。`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`import '@charcoal-ui/theme/css/v1/remap.css'
`})}),`
`,(0,c.jsx)(n.p,{children:`2.0 のトークン名を v1 相当の値へ解決します。ただし 2.0 では複数の v1 トークンが 1 つの semantic token に統合されているため、単一の remap 値から複数の旧値を同時に再現できません。Button・Checkbox・Radio・Switch のテキスト色など、いくつかの箇所では v5 と完全に同じ配色になりません。`}),`
`,(0,c.jsx)(n.h2,{id:`カスケードと優先度`,children:`カスケードと優先度`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`@charcoal-ui/react`}),` は CSS を 2 通りの形で配布します。`]}),`
`,(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{children:(0,c.jsx)(n.code,{children:`dist/index.css`})}),(0,c.jsx)(n.th,{children:(0,c.jsx)(n.code,{children:`dist/layered.css`})})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:`優先度`}),(0,c.jsx)(n.td,{children:`通常のカスケード（詳細度勝負）`}),(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.code,{children:`@layer charcoal`}),` に入る＝レイヤー無指定より必ず弱い`]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:`上書き`}),(0,c.jsx)(n.td,{children:`セレクタの詳細度を上げる必要がある`}),(0,c.jsx)(n.td,{children:`そのまま上書きできる`})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:`対応環境`}),(0,c.jsx)(n.td,{children:`広い`}),(0,c.jsx)(n.td,{children:`iOS 15.4+`})]})]})]}),`
`,(0,c.jsxs)(n.p,{children:[`v4 で styled-components をやめた副作用として、`,(0,c.jsx)(n.code,{children:`styled(Button)`}),` による上書きの優先度が変わる場合があります。レイヤー無指定のスタイル（styled-components の生成 CSS も Tailwind のユーティリティも）は必ずレイヤー付きより強いため、`,(0,c.jsx)(n.code,{children:`layered.css`}),` に切り替えると上書きが詳細度に依存せず安定します。`]}),`
`,(0,c.jsx)(n.h2,{id:`次に読むもの`,children:`次に読むもの`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:(0,c.jsxs)(n.a,{href:`/docs/react-readme--docs`,children:[(0,c.jsx)(n.code,{children:`@charcoal-ui/react`}),` クイックスタート`]})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsxs)(n.a,{href:`/docs/tailwind-config-readme--docs`,children:[(0,c.jsx)(n.code,{children:`@charcoal-ui/tailwind-config`}),` クイックスタート`]})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsxs)(n.a,{href:`/docs/styled-readme--docs`,children:[(0,c.jsx)(n.code,{children:`@charcoal-ui/styled`}),` クイックスタート`]})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:`/docs/v6-0-0--docs`,children:`v6.0.0 移行ガイド`})}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`コーディングエージェントに手順を渡したい場合は、リポジトリの `,(0,c.jsx)(n.a,{href:`https://github.com/pixiv/charcoal/tree/main/skills`,rel:`nofollow`,children:(0,c.jsx)(n.code,{children:`skills/`})}),` をインストールしてください。Claude Code のプラグインとしても `,(0,c.jsx)(n.code,{children:`npx skills`}),` 経由でも入ります。`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};