import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-PqdxpT84.js";import{c as n,lt as r,u as i}from"./iframe-sQnDtw9m.js";import{t as a}from"./mdx-react-shim-D-yAsTV6.js";function o(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,img:`img`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`styled/README`}),`
`,(0,c.jsx)(r.h1,{id:`charcoal-uistyled-クイックスタート`,children:`@charcoal-ui/styled クイックスタート`}),`
`,(0,c.jsx)(r.p,{children:(0,c.jsx)(r.a,{href:`https://www.npmjs.com/package/@charcoal-ui/styled`,rel:`nofollow`,children:(0,c.jsx)(r.img,{src:`https://img.shields.io/npm/v/@charcoal-ui/styled?label=%40charcoal-ui%2Ficons&style=flat-square&logo=npm`,alt:`npmバッジ`})})}),`
`,(0,c.jsx)(r.h2,{id:`インストール`,children:`インストール`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-bash`,children:`npm install @charcoal-ui/styled
`})}),`
`,(0,c.jsx)(r.h3,{id:`yarn`,children:`yarn`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-bash`,children:`yarn add @charcoal-ui/stlyed
`})}),`
`,(0,c.jsx)(r.h3,{id:`pnpm`,children:`pnpm`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-bash`,children:`pnpm add @charcoal-ui/styled
`})}),`
`,(0,c.jsx)(r.h3,{id:`bun`,children:`bun`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-bash`,children:`bun add @charcoal-ui/styled
`})}),`
`,(0,c.jsx)(r.h2,{id:`使い方`,children:`使い方`}),`
`,(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:`ThemeProvider`}),` `,(0,c.jsx)(r.code,{children:`TokenInjector`}),` を使用してください。`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-tsx`,children:`import { FC, ReactNode } from 'react'
import { light, dark } from '@charcoal-ui/theme'
import {
  TokenInjector,
  useTheme,
  useThemeSetter,
  themeSelector,
  prefersColorScheme,
} from '@charcoal-ui/styled'

const ExampleProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme] = useTheme()
  useThemeSetter()
  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <TokenInjector
        theme={{
          ':root': light,
          [themeSelector('light')]: light,
          [themeSelector('dark')]: dark,
          [prefersColorScheme('dark')]: dark,
        }}
        background="background1"
      />
      {children}
    </ThemeProvider>
  )
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=r(),a(),i()}))();export{s as default};