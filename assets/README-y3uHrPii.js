import{j as c,M as r}from"./iframe-NqksIJAp.js";import{useMDXComponents as o}from"./index-BrAz869J.js";import"./preload-helper-C1FmrZbK.js";function s(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...o(),...e.components};return c.jsxs(c.Fragment,{children:[c.jsx(r,{title:"icons/README"}),`
`,c.jsx(n.h1,{id:"charcoal-uiicons-クイックスタート",children:"@charcoal-ui/icons クイックスタート"}),`
`,c.jsx(n.p,{children:c.jsx(n.a,{href:"https://www.npmjs.com/package/@charcoal-ui/icons",rel:"nofollow",children:c.jsx(n.img,{src:"https://img.shields.io/npm/v/@charcoal-ui/icons?label=%40charcoal-ui%2Ficons&style=flat-square&logo=npm",alt:"npmバッジ"})})}),`
`,c.jsx(n.h2,{id:"インストール",children:"インストール"}),`
`,c.jsx(n.p,{children:"以下のいずれかのパッケージマネージャーを使用してインストールしてください"}),`
`,c.jsx(n.h3,{id:"npm",children:"npm"}),`
`,c.jsx(n.pre,{children:c.jsx(n.code,{className:"language-bash",children:`npm install @charcoal-ui/icons
`})}),`
`,c.jsx(n.h3,{id:"yarn",children:"yarn"}),`
`,c.jsx(n.pre,{children:c.jsx(n.code,{className:"language-bash",children:`yarn add @charcoal-ui/icons
`})}),`
`,c.jsx(n.h3,{id:"pnpm",children:"pnpm"}),`
`,c.jsx(n.pre,{children:c.jsx(n.code,{className:"language-bash",children:`pnpm add @charcoal-ui/icons
`})}),`
`,c.jsx(n.h3,{id:"bun",children:"bun"}),`
`,c.jsx(n.pre,{children:c.jsx(n.code,{className:"language-bash",children:`bun add @charcoal-ui/icons
`})}),`
`,c.jsx(n.h2,{id:"概要",children:"概要"}),`
`,c.jsxs(n.p,{children:[c.jsx(n.code,{children:"@charcoal-ui/icons"})," は、SVG アイコンを ",c.jsx(n.a,{href:"https://developer.mozilla.org/ja/docs/Web/API/Web_components",rel:"nofollow",children:"Web Components"})," の ",c.jsx(n.a,{href:"https://developer.mozilla.org/ja/docs/Web/API/Web_components/Using_custom_elements",rel:"nofollow",children:"Custom Elements"})," として利用できるライブラリです。"]}),`
`,c.jsx(n.h2,{id:"使い方",children:"使い方"}),`
`,c.jsxs(n.p,{children:["アプリケーションのエントリポイントで ",c.jsx(n.code,{children:"import"}),` します。
Storybook の場合は `,c.jsx(n.code,{children:"preview.(js|ts)"})," に書くと良いでしょう。"]}),`
`,c.jsx(n.p,{children:c.jsxs(n.strong,{children:[c.jsx(n.code,{children:"@charcoal-ui/react"})," の ",c.jsx(n.a,{href:"/docs/react-icon--docs",children:c.jsx(n.code,{children:"<Icon>"})})," コンポーネントを利用している場合、この ",c.jsx(n.code,{children:"import"})," は内部で自動的に行われます。"]})}),`
`,c.jsx(n.pre,{children:c.jsx(n.code,{className:"language-typescript",children:`import '@charcoal-ui/icons'
`})}),`
`,c.jsxs(n.p,{children:["これだけで、",c.jsx(n.code,{children:"<pixiv-icon>"}),` という HTML タグが利用可能になります。
TypeScript の型定義がグローバルにインストールされるので、JSX で `,c.jsx(n.code,{children:"<pixiv-icon>"})," を書く際にも型チェックが効きます。"]}),`
`,c.jsx(n.h2,{id:"収録アイコン",children:"収録アイコン"}),`
`,c.jsxs(n.p,{children:[c.jsx(n.a,{href:"/docs/icons-pixivicon-pixiv-icon--docs",children:"PixivIcon"})," のページを見てください。"]}),`
`,c.jsx(n.h2,{id:"各種バンドラとの組み合わせ",children:"各種バンドラとの組み合わせ"}),`
`,c.jsxs(n.p,{children:[c.jsx(n.code,{children:"@charcoal-ui/icons@v2.0.0"})," 以前、このライブラリはアイコンを ",c.jsx(n.code,{children:".svg"}),` ファイルとしてエクスポートしていました。
したがって、利用の際は各種バンドラで `,c.jsx(n.code,{children:".svg"})," ファイルを ",c.jsx(n.code,{children:"import"})," できるように設定ファイルを変更する必要がありました。"]}),`
`,c.jsxs(n.p,{children:[c.jsx(n.code,{children:"v2.0.0"}),` 以降、アイコンは JavaScript の文字列としてエクスポートされるようになっています。
したがって、`,c.jsx(n.code,{children:"@charcoal-ui/icons"})," に収録されたアイコンを利用するだけなら、バンドラの設定は必要ありません。"]}),`
`,c.jsxs(n.p,{children:["プロジェクト内の SVG ファイルをアイコンとして登録したい場合は、",c.jsx(n.a,{href:"/docs/icons-custom-icon--docs",children:"必要に応じて .svg を import できるように設定してください"}),"。"]}),`
`,c.jsx(n.h2,{id:"react-と組み合わせて使う",children:"React と組み合わせて使う"}),`
`,c.jsxs(n.p,{children:[c.jsx(n.code,{children:"@charcoal-ui/react"})," に ",c.jsx(n.code,{children:"<Icon>"})," コンポーネントが収録されているので、基本的にはそちらを利用してください。"]}),`
`,c.jsxs(n.h3,{id:"charcoal-uireact-を使わない場合",children:[c.jsx(n.code,{children:"@charcoal-ui/react"})," を使わない場合"]}),`
`,c.jsxs(n.p,{children:["Custom Element は ",c.jsx(n.code,{children:"className"})," という props を受け取ることが通常できません。"]}),`
`,c.jsxs(n.blockquote,{children:[`
`,c.jsxs(n.p,{children:["Custom elements accept ",c.jsx(n.code,{children:"class"})," rather than ",c.jsx(n.code,{children:"className"}),", and ",c.jsx(n.code,{children:"for"})," rather than ",c.jsx(n.code,{children:"htmlFor"}),`.
`,c.jsx(n.a,{href:"https://reactjs.org/docs/web-components.html#using-web-components-in-react",rel:"nofollow",children:"React 公式ドキュメントより"})]}),`
`]}),`
`,c.jsxs(n.p,{children:["もし ",c.jsx(n.code,{children:"styled-components"})," などを使っていて ",c.jsx(n.code,{children:"className"})," を渡せないと困るケースでは、ラッパーコンポーネントを作ることができます。"]}),`
`,c.jsx(n.pre,{children:c.jsx(n.code,{className:"language-typescript",children:`import { Props as IconProps } from '@charcoal-ui/icons'

interface Props extends Omit<IconProps, 'class'> {
  className?: string
}

export const Icon: React.FC<Props> = ({ className, ...props }) => (
  <pixiv-icon class={className} {...props} />
)
`})})]})}function a(e={}){const{wrapper:n}={...o(),...e.components};return n?c.jsx(n,{...e,children:c.jsx(s,{...e})}):s(e)}export{a as default};
