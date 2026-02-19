import{j as e,M as a}from"./iframe-Da7rVJAF.js";import{useMDXComponents as h}from"./index-WfA31zhP.js";import"./preload-helper-C1FmrZbK.js";function c(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...h(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"theme/README"}),`
`,e.jsx(n.h1,{id:"charcoal-uitheme-クイックスタート",children:"@charcoal-ui/theme クイックスタート"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.npmjs.com/package/@charcoal-ui/theme",rel:"nofollow",children:e.jsx(n.img,{src:"https://img.shields.io/npm/v/@charcoal-ui/theme?label=%40charcoal-ui%2Ftheme&style=flat-square&logo=npm",alt:"npmバッジ"})})}),`
`,e.jsx(n.h2,{id:"インストール",children:"インストール"}),`
`,e.jsx(n.h3,{id:"npm",children:"npm"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install --save-dev @charcoal-ui/theme
`})}),`
`,e.jsx(n.h3,{id:"yarn",children:"yarn"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn add -D @charcoal-ui/theme
`})}),`
`,e.jsx(n.h3,{id:"pnpm",children:"pnpm"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`pnpm add -D @charcoal-ui/theme
`})}),`
`,e.jsx(n.h3,{id:"bun",children:"bun"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`bun add -d @charcoal-ui/theme
`})}),`
`,e.jsx(n.h2,{id:"概要",children:"概要"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"@charcoal-ui/theme"})," は、全体で使われるテーマ型と、デフォルトのライト・ダークテーマを提供します。"]}),`
`,e.jsx(n.h2,{id:"使い方",children:"使い方"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"styled-components"})," と合わせて使用できます。"]}),`
`,e.jsxs(n.p,{children:["デフォルトのテーマとして提供している ",e.jsx(n.code,{children:"light"}),"、",e.jsx(n.code,{children:"dark"})," をそのまま使うこともできます。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { light, dark } from '@charcoal-ui/theme'
import { ThemeProvider } from 'styled-components'
import { FC, ReactNode } from 'react'

const LightExample: FC<{ children: ReactNode }> = ({ children }) => (
  <ThemeProvider theme={light}>{children}</ThemeProvider>
)

const DarkExample: FC<{ children: ReactNode }> = ({ children }) => (
  <ThemeProvider theme={dark}>{children}</ThemeProvider>
)
`})})]})}function s(r={}){const{wrapper:n}={...h(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(c,{...r})}):c(r)}export{s as default};
