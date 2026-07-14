import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-DMFioR29.js";import{c as n,lt as r,u as i}from"./iframe--lwxb2D3.js";import{t as a}from"./mdx-react-shim-DRDDBhiq.js";function o(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,img:`img`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`theme/README`}),`
`,(0,c.jsx)(r.h1,{id:`charcoal-uitheme-クイックスタート`,children:`@charcoal-ui/theme クイックスタート`}),`
`,(0,c.jsx)(r.p,{children:(0,c.jsx)(r.a,{href:`https://www.npmjs.com/package/@charcoal-ui/theme`,rel:`nofollow`,children:(0,c.jsx)(r.img,{src:`https://img.shields.io/npm/v/@charcoal-ui/theme?label=%40charcoal-ui%2Ftheme&style=flat-square&logo=npm`,alt:`npmバッジ`})})}),`
`,(0,c.jsx)(r.h2,{id:`インストール`,children:`インストール`}),`
`,(0,c.jsx)(r.h3,{id:`npm`,children:`npm`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-bash`,children:`npm install --save-dev @charcoal-ui/theme
`})}),`
`,(0,c.jsx)(r.h3,{id:`yarn`,children:`yarn`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-bash`,children:`yarn add -D @charcoal-ui/theme
`})}),`
`,(0,c.jsx)(r.h3,{id:`pnpm`,children:`pnpm`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-bash`,children:`pnpm add -D @charcoal-ui/theme
`})}),`
`,(0,c.jsx)(r.h3,{id:`bun`,children:`bun`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-bash`,children:`bun add -d @charcoal-ui/theme
`})}),`
`,(0,c.jsx)(r.h2,{id:`概要`,children:`概要`}),`
`,(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:`@charcoal-ui/theme`}),` は、全体で使われるテーマ型と、デフォルトのライト・ダークテーマを提供します。`]}),`
`,(0,c.jsx)(r.h2,{id:`使い方`,children:`使い方`}),`
`,(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:`styled-components`}),` と合わせて使用できます。`]}),`
`,(0,c.jsxs)(r.p,{children:[`デフォルトのテーマとして提供している `,(0,c.jsx)(r.code,{children:`light`}),`、`,(0,c.jsx)(r.code,{children:`dark`}),` をそのまま使うこともできます。`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-typescript`,children:`import { light, dark } from '@charcoal-ui/theme'
import { ThemeProvider } from 'styled-components'
import { FC, ReactNode } from 'react'

const LightExample: FC<{ children: ReactNode }> = ({ children }) => (
  <ThemeProvider theme={light}>{children}</ThemeProvider>
)

const DarkExample: FC<{ children: ReactNode }> = ({ children }) => (
  <ThemeProvider theme={dark}>{children}</ThemeProvider>
)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=r(),a(),i()}))();export{s as default};