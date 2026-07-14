import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CjmczWEP.js";import{c as n,lt as r,u as i}from"./iframe-C17UB5SL.js";import{t as a}from"./mdx-react-shim-FWqSoHf3.js";function o(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,img:`img`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`react/README`}),`
`,(0,c.jsx)(r.h1,{id:`quickstart`,children:`Quickstart`}),`
`,(0,c.jsx)(r.p,{children:(0,c.jsx)(r.a,{href:`https://www.npmjs.com/package/@charcoal-ui/react`,rel:`nofollow`,children:(0,c.jsx)(r.img,{src:`https://img.shields.io/npm/v/@charcoal-ui/react?label=%40charcoal-ui%2Freact&style=flat-square&logo=npm`,alt:`npmバッジ`})})}),`
`,(0,c.jsx)(r.h2,{id:`インストール`,children:`インストール`}),`
`,(0,c.jsx)(r.p,{children:`以下のいずれかのパッケージマネージャーを使用してインストールしてください`}),`
`,(0,c.jsx)(r.h3,{id:`npm`,children:`npm`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-bash`,children:`npm install @charcoal-ui/react
`})}),`
`,(0,c.jsx)(r.h3,{id:`yarn`,children:`yarn`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-bash`,children:`yarn add @charcoal-ui/react
`})}),`
`,(0,c.jsx)(r.h3,{id:`pnpm`,children:`pnpm`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-bash`,children:`pnpm add @charcoal-ui/react
`})}),`
`,(0,c.jsx)(r.h3,{id:`bun`,children:`bun`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-bash`,children:`bun add @charcoal-ui/react
`})}),`
`,(0,c.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:`@charcoal-ui/styled`}),`と合わせて使用してください。
`,(0,c.jsx)(r.code,{children:`ThemeProvider`}),`、`,(0,c.jsx)(r.code,{children:`TokenInjector`}),`を使用してください。詳しくは `,(0,c.jsx)(r.code,{children:`@charcoal-ui/styled`}),`のクイックスタートを参照してください。`]}),`
`,(0,c.jsxs)(r.p,{children:[`必要に応じて`,(0,c.jsx)(r.code,{children:`SSRProvider`}),`や`,(0,c.jsx)(r.code,{children:`OverlayProvider`}),`も使用してください。`]}),`
`,(0,c.jsxs)(r.p,{children:[`また、`,(0,c.jsx)(r.code,{children:`ThemeProvider`}),`、`,(0,c.jsx)(r.code,{children:`TokenInjector`}),`、`,(0,c.jsx)(r.code,{children:`SSRProvider`}),`、`,(0,c.jsx)(r.code,{children:`OverlayProvider`}),`を内包した CharcoalProvider を使用することもできます。`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-tsx`,children:`import { CharcoalProvider } from '@charcoal-ui/react'
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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=r(),a(),i()}))();export{s as default};