import{n as e}from"./chunk-BneVvdWh.js";import{c as t,nt as n,o as r}from"./iframe-D15TZ-Lk.js";import{r as i}from"./react-gSRirEss.js";import{t as a}from"./mdx-react-shim-DhF9kuO7.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,img:`img`,p:`p`,pre:`pre`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`react/README`}),`
`,(0,c.jsx)(t.h1,{id:`quickstart`,children:`Quickstart`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:`https://www.npmjs.com/package/@charcoal-ui/react`,rel:`nofollow`,children:(0,c.jsx)(t.img,{src:`https://img.shields.io/npm/v/@charcoal-ui/react?label=%40charcoal-ui%2Freact&style=flat-square&logo=npm`,alt:`npmバッジ`})})}),`
`,(0,c.jsx)(t.h2,{id:`インストール`,children:`インストール`}),`
`,(0,c.jsx)(t.p,{children:`以下のいずれかのパッケージマネージャーを使用してインストールしてください`}),`
`,(0,c.jsx)(t.h3,{id:`npm`,children:`npm`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm install @charcoal-ui/react
`})}),`
`,(0,c.jsx)(t.h3,{id:`yarn`,children:`yarn`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`yarn add @charcoal-ui/react
`})}),`
`,(0,c.jsx)(t.h3,{id:`pnpm`,children:`pnpm`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`pnpm add @charcoal-ui/react
`})}),`
`,(0,c.jsx)(t.h3,{id:`bun`,children:`bun`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`bun add @charcoal-ui/react
`})}),`
`,(0,c.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`@charcoal-ui/styled`}),`と合わせて使用してください。
`,(0,c.jsx)(t.code,{children:`ThemeProvider`}),`、`,(0,c.jsx)(t.code,{children:`TokenInjector`}),`を使用してください。詳しくは `,(0,c.jsx)(t.code,{children:`@charcoal-ui/styled`}),`のクイックスタートを参照してください。`]}),`
`,(0,c.jsxs)(t.p,{children:[`必要に応じて`,(0,c.jsx)(t.code,{children:`SSRProvider`}),`や`,(0,c.jsx)(t.code,{children:`OverlayProvider`}),`も使用してください。`]}),`
`,(0,c.jsxs)(t.p,{children:[`また、`,(0,c.jsx)(t.code,{children:`ThemeProvider`}),`、`,(0,c.jsx)(t.code,{children:`TokenInjector`}),`、`,(0,c.jsx)(t.code,{children:`SSRProvider`}),`、`,(0,c.jsx)(t.code,{children:`OverlayProvider`}),`を内包した CharcoalProvider を使用することもできます。`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import { CharcoalProvider } from '@charcoal-ui/react'
import { prefersColorScheme, themeSelector } from '@charcoal-ui/styled'
import { dark, light } from '@charcoal-ui/theme'
import { FC, ReactNode } from 'react'

export const CharcoalProviderExample: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <CharcoalProvider
      themeMap={{
        ':root': light,
        [themeSelector('light')]: light,
        [themeSelector('dark')]: dark,
        [prefersColorScheme('dark')]: dark,
      }}
    >
      {children}
    </CharcoalProvider>
  )
}
`})})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),t()}))();export{s as default};