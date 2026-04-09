import{n as e}from"./chunk-BneVvdWh.js";import{c as t,nt as n,o as r}from"./iframe-CVQNsQPh.js";import{r as i}from"./react-DgnijFs3.js";import{t as a}from"./mdx-react-shim-BAyak7t4.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,img:`img`,p:`p`,pre:`pre`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`theme/README`}),`
`,(0,c.jsx)(t.h1,{id:`charcoal-uitheme-クイックスタート`,children:`@charcoal-ui/theme クイックスタート`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:`https://www.npmjs.com/package/@charcoal-ui/theme`,rel:`nofollow`,children:(0,c.jsx)(t.img,{src:`https://img.shields.io/npm/v/@charcoal-ui/theme?label=%40charcoal-ui%2Ftheme&style=flat-square&logo=npm`,alt:`npmバッジ`})})}),`
`,(0,c.jsx)(t.h2,{id:`インストール`,children:`インストール`}),`
`,(0,c.jsx)(t.h3,{id:`npm`,children:`npm`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm install --save-dev @charcoal-ui/theme
`})}),`
`,(0,c.jsx)(t.h3,{id:`yarn`,children:`yarn`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`yarn add -D @charcoal-ui/theme
`})}),`
`,(0,c.jsx)(t.h3,{id:`pnpm`,children:`pnpm`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`pnpm add -D @charcoal-ui/theme
`})}),`
`,(0,c.jsx)(t.h3,{id:`bun`,children:`bun`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`bun add -d @charcoal-ui/theme
`})}),`
`,(0,c.jsx)(t.h2,{id:`概要`,children:`概要`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`@charcoal-ui/theme`}),` は、全体で使われるテーマ型と、デフォルトのライト・ダークテーマを提供します。`]}),`
`,(0,c.jsx)(t.h2,{id:`使い方`,children:`使い方`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`styled-components`}),` と合わせて使用できます。`]}),`
`,(0,c.jsxs)(t.p,{children:[`デフォルトのテーマとして提供している `,(0,c.jsx)(t.code,{children:`light`}),`、`,(0,c.jsx)(t.code,{children:`dark`}),` をそのまま使うこともできます。`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { light, dark } from '@charcoal-ui/theme'
import { ThemeProvider } from 'styled-components'
import { FC, ReactNode } from 'react'

const LightExample: FC<{ children: ReactNode }> = ({ children }) => (
  <ThemeProvider theme={light}>{children}</ThemeProvider>
)

const DarkExample: FC<{ children: ReactNode }> = ({ children }) => (
  <ThemeProvider theme={dark}>{children}</ThemeProvider>
)
`})})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),t()}))();export{s as default};