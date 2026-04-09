import{n as e}from"./chunk-BneVvdWh.js";import{c as t,nt as n,o as r}from"./iframe-BIP2GiWG.js";import{r as i}from"./react-C4gTv8ZR.js";import{t as a}from"./mdx-react-shim-ClMUdT0_.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,img:`img`,p:`p`,pre:`pre`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`styled/README`}),`
`,(0,c.jsx)(t.h1,{id:`charcoal-uistyled-クイックスタート`,children:`@charcoal-ui/styled クイックスタート`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:`https://www.npmjs.com/package/@charcoal-ui/styled`,rel:`nofollow`,children:(0,c.jsx)(t.img,{src:`https://img.shields.io/npm/v/@charcoal-ui/styled?label=%40charcoal-ui%2Ficons&style=flat-square&logo=npm`,alt:`npmバッジ`})})}),`
`,(0,c.jsx)(t.h2,{id:`インストール`,children:`インストール`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm install @charcoal-ui/styled
`})}),`
`,(0,c.jsx)(t.h3,{id:`yarn`,children:`yarn`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`yarn add @charcoal-ui/stlyed
`})}),`
`,(0,c.jsx)(t.h3,{id:`pnpm`,children:`pnpm`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`pnpm add @charcoal-ui/styled
`})}),`
`,(0,c.jsx)(t.h3,{id:`bun`,children:`bun`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`bun add @charcoal-ui/styled
`})}),`
`,(0,c.jsx)(t.h2,{id:`使い方`,children:`使い方`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`ThemeProvider`}),` `,(0,c.jsx)(t.code,{children:`TokenInjector`}),` を使用してください。`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import { FC, ReactNode } from 'react'
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
`})})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),t()}))();export{s as default};