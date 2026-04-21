import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CHUV-3R1.js";import{c as n,nt as r,o as i}from"./iframe-Bwbo-EqB.js";import{t as a}from"./mdx-react-shim-B0BYPpLx.js";function o(e){let n={a:`a`,blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,img:`img`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`icons/README`}),`
`,(0,c.jsx)(n.h1,{id:`charcoal-uiicons-クイックスタート`,children:`@charcoal-ui/icons クイックスタート`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:`https://www.npmjs.com/package/@charcoal-ui/icons`,rel:`nofollow`,children:(0,c.jsx)(n.img,{src:`https://img.shields.io/npm/v/@charcoal-ui/icons?label=%40charcoal-ui%2Ficons&style=flat-square&logo=npm`,alt:`npmバッジ`})})}),`
`,(0,c.jsx)(n.h2,{id:`インストール`,children:`インストール`}),`
`,(0,c.jsx)(n.p,{children:`以下のいずれかのパッケージマネージャーを使用してインストールしてください`}),`
`,(0,c.jsx)(n.h3,{id:`npm`,children:`npm`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npm install @charcoal-ui/icons
`})}),`
`,(0,c.jsx)(n.h3,{id:`yarn`,children:`yarn`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`yarn add @charcoal-ui/icons
`})}),`
`,(0,c.jsx)(n.h3,{id:`pnpm`,children:`pnpm`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`pnpm add @charcoal-ui/icons
`})}),`
`,(0,c.jsx)(n.h3,{id:`bun`,children:`bun`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`bun add @charcoal-ui/icons
`})}),`
`,(0,c.jsx)(n.h2,{id:`概要`,children:`概要`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`@charcoal-ui/icons`}),` は、SVG アイコンを `,(0,c.jsx)(n.a,{href:`https://developer.mozilla.org/ja/docs/Web/API/Web_components`,rel:`nofollow`,children:`Web Components`}),` の `,(0,c.jsx)(n.a,{href:`https://developer.mozilla.org/ja/docs/Web/API/Web_components/Using_custom_elements`,rel:`nofollow`,children:`Custom Elements`}),` として利用できるライブラリです。`]}),`
`,(0,c.jsx)(n.h2,{id:`使い方`,children:`使い方`}),`
`,(0,c.jsxs)(n.p,{children:[`アプリケーションのエントリポイントで `,(0,c.jsx)(n.code,{children:`import`}),` します。
Storybook の場合は `,(0,c.jsx)(n.code,{children:`preview.(js|ts)`}),` に書くと良いでしょう。`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(n.code,{children:`@charcoal-ui/react`}),` の `,(0,c.jsx)(n.a,{href:`/docs/react-icon--docs`,children:(0,c.jsx)(n.code,{children:`<Icon>`})}),` コンポーネントを利用している場合、この `,(0,c.jsx)(n.code,{children:`import`}),` は内部で自動的に行われます。`]})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import '@charcoal-ui/icons'
`})}),`
`,(0,c.jsxs)(n.p,{children:[`これだけで、`,(0,c.jsx)(n.code,{children:`<pixiv-icon>`}),` という HTML タグが利用可能になります。
TypeScript の型定義がグローバルにインストールされるので、JSX で `,(0,c.jsx)(n.code,{children:`<pixiv-icon>`}),` を書く際にも型チェックが効きます。`]}),`
`,(0,c.jsx)(n.h2,{id:`収録アイコン`,children:`収録アイコン`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:`/docs/icons-pixivicon-pixiv-icon--docs`,children:`PixivIcon`}),` のページを見てください。`]}),`
`,(0,c.jsx)(n.h2,{id:`各種バンドラとの組み合わせ`,children:`各種バンドラとの組み合わせ`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`@charcoal-ui/icons@v2.0.0`}),` 以前、このライブラリはアイコンを `,(0,c.jsx)(n.code,{children:`.svg`}),` ファイルとしてエクスポートしていました。
したがって、利用の際は各種バンドラで `,(0,c.jsx)(n.code,{children:`.svg`}),` ファイルを `,(0,c.jsx)(n.code,{children:`import`}),` できるように設定ファイルを変更する必要がありました。`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`v2.0.0`}),` 以降、アイコンは JavaScript の文字列としてエクスポートされるようになっています。
したがって、`,(0,c.jsx)(n.code,{children:`@charcoal-ui/icons`}),` に収録されたアイコンを利用するだけなら、バンドラの設定は必要ありません。`]}),`
`,(0,c.jsxs)(n.p,{children:[`プロジェクト内の SVG ファイルをアイコンとして登録したい場合は、`,(0,c.jsx)(n.a,{href:`/docs/icons-custom-icon--docs`,children:`必要に応じて .svg を import できるように設定してください`}),`。`]}),`
`,(0,c.jsx)(n.h2,{id:`react-と組み合わせて使う`,children:`React と組み合わせて使う`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`@charcoal-ui/react`}),` に `,(0,c.jsx)(n.code,{children:`<Icon>`}),` コンポーネントが収録されているので、基本的にはそちらを利用してください。`]}),`
`,(0,c.jsxs)(n.h3,{id:`charcoal-uireact-を使わない場合`,children:[(0,c.jsx)(n.code,{children:`@charcoal-ui/react`}),` を使わない場合`]}),`
`,(0,c.jsxs)(n.p,{children:[`Custom Element は `,(0,c.jsx)(n.code,{children:`className`}),` という props を受け取ることが通常できません。`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[`Custom elements accept `,(0,c.jsx)(n.code,{children:`class`}),` rather than `,(0,c.jsx)(n.code,{children:`className`}),`, and `,(0,c.jsx)(n.code,{children:`for`}),` rather than `,(0,c.jsx)(n.code,{children:`htmlFor`}),`.
`,(0,c.jsx)(n.a,{href:`https://reactjs.org/docs/web-components.html#using-web-components-in-react`,rel:`nofollow`,children:`React 公式ドキュメントより`})]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`もし `,(0,c.jsx)(n.code,{children:`styled-components`}),` などを使っていて `,(0,c.jsx)(n.code,{children:`className`}),` を渡せないと困るケースでは、ラッパーコンポーネントを作ることができます。`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { Props as IconProps } from '@charcoal-ui/icons'

interface Props extends Omit<IconProps, 'class'> {
  className?: string
}

export const Icon: React.FC<Props> = ({ className, ...props }) => (
  <pixiv-icon class={className} {...props} />
)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=r(),a(),n()}))();export{s as default};