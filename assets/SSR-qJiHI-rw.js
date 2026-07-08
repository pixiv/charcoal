import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-D62w4-DQ.js";import{c as n,lt as r,u as i}from"./iframe-DoThihVl.js";import{t as a}from"./mdx-react-shim-Bg1FETqL.js";function o(e){let r={br:`br`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`icons/SSR Guide`}),`
`,(0,c.jsx)(r.h1,{id:`サーバーサイドレンダリング`,children:`サーバーサイドレンダリング`}),`
`,(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:`<pixiv-icon>`}),` はサーバーサイドレンダリング時にも利用できます。
`,(0,c.jsx)(r.code,{children:`@charcoal-ui/icons`}),` は、Node.js の環境下で import されたり、API を呼び出されても問題が起きないように設計されています。`]}),`
`,(0,c.jsxs)(r.p,{children:[`一方、Custom Element であるということは、`,(0,c.jsx)(r.strong,{children:`SVG アイコンの読み込みはクライアントサイドで行われます`}),`。`,(0,c.jsx)(r.br,{}),`
`,`したがって、大きさが確定せずにレイアウトシフト (CLS) が起こりうるのは、SSR における注意点の一つと言えます。`]}),`
`,(0,c.jsx)(r.h2,{id:`なぜ-css-が必要なのか`,children:`なぜ CSS が必要なのか`}),`
`,(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:`@charcoal-ui/icons`}),` の JS が読み込まれて `,(0,c.jsx)(r.code,{children:`customElements.define('pixiv-icon', ...)`}),` が実行されるまで、`,(0,c.jsx)(r.code,{children:`<pixiv-icon>`}),` は Shadow DOM を持たない単なる未登録 Custom Element です。CSS がない場合、ブラウザはこの要素のサイズを 0x0 として扱うため:`]}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[`SSR で送出された HTML が画面に描画された直後: アイコンは `,(0,c.jsx)(r.strong,{children:`0x0`}),` で何も見えない`]}),`
`,(0,c.jsxs)(r.li,{children:[`JS がロードされて `,(0,c.jsx)(r.code,{children:`pixiv-icon`}),` が `,(0,c.jsx)(r.code,{children:`:defined`}),` になった瞬間: 突然 16x16 / 24x24 などの実サイズになり、`,(0,c.jsx)(r.strong,{children:`周囲のコンテンツが押し出される`})]}),`
`]}),`
`,(0,c.jsxs)(r.p,{children:[`この瞬間に発生する CLS を、`,(0,c.jsx)(r.code,{children:`icon.css`}),` が事前に寸法を確保することで防ぎます。`]}),`
`,(0,c.jsx)(r.h2,{id:`レイアウトシフト防止-css`,children:`レイアウトシフト防止 CSS`}),`
`,(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:`@charcoal-ui/icons/css/icon.css`}),` をインポートすると、`,(0,c.jsx)(r.code,{children:`<pixiv-icon>`}),` のレイアウトシフトを防止できます。
アプリケーションのエントリポイント、または Storybook の `,(0,c.jsx)(r.code,{children:`preview.(js|ts)`}),` で 1 度だけ読み込んでください。`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-ts`,children:`import '@charcoal-ui/icons/css/icon.css'
`})}),`
`,(0,c.jsx)(r.p,{children:`この CSS は 2 つのメカニズムを提供します。`}),`
`,(0,c.jsxs)(r.h3,{id:`1-charcoal-icon-クラスreact-向け`,children:[`1. `,(0,c.jsx)(r.code,{children:`.charcoal-icon`}),` クラス（React 向け）`]}),`
`,(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:`@charcoal-ui/react`}),` の `,(0,c.jsx)(r.code,{children:`<Icon>`}),` コンポーネントは自動的に `,(0,c.jsx)(r.code,{children:`.charcoal-icon`}),` クラスと `,(0,c.jsx)(r.code,{children:`--charcoal-icon-size`}),` CSS 変数を設定します。
CSS が読み込まれていれば、Custom Element の定義前でも正しいサイズが確保されます。`]}),`
`,(0,c.jsxs)(r.h3,{id:`2-pixiv-iconnotdefined-セレクターvanilla-html-向け`,children:[`2. `,(0,c.jsx)(r.code,{children:`pixiv-icon:not(:defined)`}),` セレクター（vanilla HTML 向け）`]}),`
`,(0,c.jsxs)(r.p,{children:[`React を使わない場合でも、`,(0,c.jsx)(r.code,{children:`name`}),` 属性のプレフィックス（`,(0,c.jsx)(r.code,{children:`16/`}),`, `,(0,c.jsx)(r.code,{children:`24/`}),`, `,(0,c.jsx)(r.code,{children:`32/`}),`, `,(0,c.jsx)(r.code,{children:`Inline/`}),`）と `,(0,c.jsx)(r.code,{children:`scale`}),` 属性に基づいてサイズが確保されます。`]}),`
`,(0,c.jsx)(r.h2,{id:`サイズ決定ルール`,children:`サイズ決定ルール`}),`
`,(0,c.jsx)(r.p,{children:`サイズの決定タイミングは hydrate の前後で異なります。`}),`
`,(0,c.jsxs)(r.h3,{id:`hydrate-前-pixiv-iconnotdefined-の段階`,children:[`hydrate 前 (`,(0,c.jsx)(r.code,{children:`pixiv-icon:not(:defined)`}),` の段階)`]}),`
`,(0,c.jsxs)(r.ol,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsxs)(r.strong,{children:[(0,c.jsx)(r.code,{children:`style="--charcoal-icon-size: Npx"`}),` が指定されていれば、その値を使う`]}),`（最優先）`]}),`
`,(0,c.jsxs)(r.li,{children:[`それ以外は `,(0,c.jsx)(r.code,{children:`name`}),` プレフィックスと `,(0,c.jsx)(r.code,{children:`scale`}),` 属性から導出されたガイドラインデフォルトを使う`]}),`
`]}),`
`,(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:`fixed-size`}),` / `,(0,c.jsx)(r.code,{children:`unsafe-non-guideline-scale`}),` 属性は CSS の `,(0,c.jsx)(r.code,{children:`attr()`}),` での
数値解釈に制約があるためこの段階では参照できず、暫定値が表示されます。
`,(0,c.jsxs)(r.strong,{children:[`ガイドライン外のサイズで CLS を完全に防ぐには、必ず `,(0,c.jsx)(r.code,{children:`style="--charcoal-icon-size: Npx"`}),` をインラインで併記してください`]}),` (React の `,(0,c.jsx)(r.code,{children:`<Icon fixedSize>`}),` 経由なら自動で付与されます)。`]}),`
`,(0,c.jsxs)(r.h3,{id:`hydrate-後-defined-状態`,children:[`hydrate 後 (`,(0,c.jsx)(r.code,{children:`:defined`}),` 状態)`]}),`
`,(0,c.jsxs)(r.p,{children:[`JS が読み込まれて web component が定義されると、`,(0,c.jsx)(r.code,{children:`render()`}),` が以下の優先順で size を計算し、
`,(0,c.jsxs)(r.strong,{children:[`結果を `,(0,c.jsx)(r.code,{children:`--charcoal-icon-size`}),` の inline style に上書きします`]}),`。`]}),`
`,(0,c.jsxs)(r.ol,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`fixed-size`}),` 属性（最優先 / ピクセル値）`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`unsafe-non-guideline-scale`}),` 属性 × `,(0,c.jsx)(r.code,{children:`name`}),` のベースサイズ（`,(0,c.jsx)(r.strong,{children:`deprecated`}),`）`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`name`}),` プレフィックスと `,(0,c.jsx)(r.code,{children:`scale`}),` 属性から導出されたガイドラインデフォルト`]}),`
`]}),`
`,(0,c.jsxs)(r.p,{children:[`つまりユーザーが書いた `,(0,c.jsx)(r.code,{children:`style="--charcoal-icon-size: ..."`}),` は `,(0,c.jsx)(r.strong,{children:`hydrate 後には属性ベースの計算結果で上書きされる`}),` 点に注意してください。永続的に上書きしたい場合は属性で指定します。`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-html`,children:`<!-- ガイドライン通り 24px -->
<pixiv-icon name="24/Add"></pixiv-icon>

<!-- ガイドライン通り 48px (24 × scale=2) -->
<pixiv-icon name="24/Add" scale="2"></pixiv-icon>

<!-- 12px に固定 (hydrate 後も 12px のまま)。SSR の CLS を避けるため style も併記 -->
<pixiv-icon
  name="24/Add"
  fixed-size="12"
  style="--charcoal-icon-size: 12px"
></pixiv-icon>
`})}),`
`,(0,c.jsxs)(r.h3,{id:`scale-属性のプレフィックスごとの挙動`,children:[(0,c.jsx)(r.code,{children:`scale`}),` 属性のプレフィックスごとの挙動`]}),`
`,(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:`name`}),` プレフィックスごとに `,(0,c.jsx)(r.code,{children:`scale`}),` のサポート範囲が異なります。表に整理すると以下の通りです。`]}),`
`,(0,c.jsxs)(r.table,{children:[(0,c.jsx)(r.thead,{children:(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.th,{children:`プレフィックス`}),(0,c.jsx)(r.th,{children:(0,c.jsx)(r.code,{children:`scale=1`})}),(0,c.jsx)(r.th,{children:(0,c.jsx)(r.code,{children:`scale=2`})}),(0,c.jsx)(r.th,{children:(0,c.jsx)(r.code,{children:`scale=3`})}),(0,c.jsx)(r.th,{children:`備考`})]})}),(0,c.jsxs)(r.tbody,{children:[(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:`16/`})}),(0,c.jsx)(r.td,{children:`16`}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.strong,{children:`16`})}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.strong,{children:`16`})}),(0,c.jsxs)(r.td,{children:[(0,c.jsx)(r.code,{children:`scale`}),` を無視（意図的な仕様）`]})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:`24/`})}),(0,c.jsx)(r.td,{children:`24`}),(0,c.jsx)(r.td,{children:`48`}),(0,c.jsx)(r.td,{children:`72`}),(0,c.jsx)(r.td,{children:`すべて対応`})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:`32/`})}),(0,c.jsx)(r.td,{children:`32`}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.strong,{children:`32`})}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.strong,{children:`32`})}),(0,c.jsxs)(r.td,{children:[(0,c.jsx)(r.code,{children:`scale`}),` を無視（意図的な仕様）`]})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:`Inline/`})}),(0,c.jsx)(r.td,{children:`16`}),(0,c.jsx)(r.td,{children:`32`}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.strong,{children:`16`})}),(0,c.jsxs)(r.td,{children:[(0,c.jsx)(r.code,{children:`scale=3`}),` は `,(0,c.jsx)(r.code,{children:`scale=1`}),` と同じ扱い`]})]})]})]}),`
`,(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:`scale`}),` に対応していない組み合わせを書いても `,(0,c.jsx)(r.strong,{children:`CLS は発生しません`}),`（CSS と JS 双方で同じ結果を返すように揃えてあります）が、期待通りに大きくならないことに注意してください。
大きく表示したい場合は次節の「ガイドライン外のサイズ指定」を使ってください。`]}),`
`,(0,c.jsx)(r.h3,{id:`ガイドライン外のサイズ指定`,children:`ガイドライン外のサイズ指定`}),`
`,(0,c.jsxs)(r.p,{children:[`ガイドライン外のサイズを使う場合は `,(0,c.jsxs)(r.strong,{children:[(0,c.jsx)(r.code,{children:`fixed-size`}),` (vanilla HTML) / `,(0,c.jsx)(r.code,{children:`fixedSize`}),` (React)`]}),` を使います。
`,(0,c.jsx)(r.code,{children:`fixed-size`}),` は他のサイズ指定 (`,(0,c.jsx)(r.code,{children:`scale`}),` / `,(0,c.jsx)(r.code,{children:`unsafe-non-guideline-scale`}),`) よりも常に優先されます。`]}),`
`,(0,c.jsxs)(r.h4,{id:`react-icon-fixedsizen`,children:[`React (`,(0,c.jsx)(r.code,{children:`<Icon fixedSize={N}>`}),`)`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-jsx`,children:`<Icon name="24/Add" fixedSize={12} />  {/* 12px 固定 */}
<Icon name="24/Add" fixedSize={40} />  {/* 40px 固定 */}
`})}),`
`,(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:`<Icon>`}),` は同じ値を `,(0,c.jsx)(r.code,{children:`--charcoal-icon-size`}),` インライン CSS 変数として自動付与するため、
`,(0,c.jsx)(r.strong,{children:`hydrate 前後とも正しいサイズで CLS は起きません`}),`。利用者側で追加の対応は不要です。`]}),`
`,(0,c.jsxs)(r.h4,{id:`vanilla-html-pixiv-icon-fixed-sizen`,children:[`vanilla HTML (`,(0,c.jsx)(r.code,{children:`<pixiv-icon fixed-size="N">`}),`)`]}),`
`,(0,c.jsxs)(r.p,{children:[`CSS の `,(0,c.jsx)(r.code,{children:`attr()`}),` 関数は数値や `,(0,c.jsx)(r.code,{children:`<length>`}),` 型としての解釈をまだ十分にサポートしていないため、
`,(0,c.jsxs)(r.strong,{children:[(0,c.jsx)(r.code,{children:`fixed-size`}),` 属性だけではブラウザは hydrate 前にサイズを決定できません`]}),`。
SSR 段階から CLS を防ぐには `,(0,c.jsxs)(r.strong,{children:[`必ずインラインスタイルで `,(0,c.jsx)(r.code,{children:`--charcoal-icon-size`}),` も同じ値を指定してください`]}),`。`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-html`,children:`<!-- ✅ OK: fixed-size と --charcoal-icon-size の両方を指定 -->
<pixiv-icon
  name="24/Add"
  fixed-size="12"
  style="--charcoal-icon-size: 12px;"
></pixiv-icon>

<!-- ❌ NG: fixed-size だけだと CSS-only 段階で name 由来の 24px が表示され、
     JS upgrade 後に 12px へジャンプする (= CLS) -->
<pixiv-icon name="24/Add" fixed-size="12"></pixiv-icon>
`})}),`
`,(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:`fixed-size`}),` 属性は Web Component の upgrade 後に `,(0,c.jsx)(r.strong,{children:`必ず`}),` 反映され、
`,(0,c.jsx)(r.code,{children:`--charcoal-icon-size`}),` インラインスタイルは upgrade 前の CSS-only 状態でサイズを確定させる役割を果たします。
両者の値が一致していれば、SSR から hydrate 完了までを通じて同じサイズで表示されます。`]}),`
`,(0,c.jsxs)(r.p,{children:[`サーバーサイドのテンプレートで両方を出し分けるユーティリティを用意するか、React の `,(0,c.jsx)(r.code,{children:`<Icon fixedSize>`}),` を経由するのが安全です。`]}),`
`,(0,c.jsxs)(r.h4,{id:`非推奨-unsafe-non-guideline-scale`,children:[`非推奨: `,(0,c.jsx)(r.code,{children:`unsafe-non-guideline-scale`})]}),`
`,(0,c.jsxs)(r.p,{children:[`過去には `,(0,c.jsx)(r.code,{children:`unsafe-non-guideline-scale`}),` 属性でガイドライン外の倍率を指定できましたが、
これも `,(0,c.jsx)(r.code,{children:`fixed-size`}),` と同じ理由で CSS-only 段階ではサイズを決定できません。
`,(0,c.jsxs)(r.strong,{children:[`新規利用は `,(0,c.jsx)(r.code,{children:`fixed-size`}),` への移行を推奨します`]}),`。`]}),`
`,(0,c.jsx)(r.p,{children:`既存利用箇所では、以下のように個別にインラインスタイルでサイズを確定させる必要があります。`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-html`,children:`<pixiv-icon
  name="24/Add"
  unsafe-non-guideline-scale="0.5"
  style="--charcoal-icon-size: 12px;"
></pixiv-icon>
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=r(),a(),i()}))();export{s as default};