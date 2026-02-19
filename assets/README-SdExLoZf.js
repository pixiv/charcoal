import{j as e,M as o}from"./iframe-Da7rVJAF.js";import{useMDXComponents as a}from"./index-WfA31zhP.js";import"./preload-helper-C1FmrZbK.js";function c(n){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"react/README"}),`
`,e.jsx(r.h1,{id:"quickstart",children:"Quickstart"}),`
`,e.jsx(r.p,{children:e.jsx(r.a,{href:"https://www.npmjs.com/package/@charcoal-ui/react",rel:"nofollow",children:e.jsx(r.img,{src:"https://img.shields.io/npm/v/@charcoal-ui/react?label=%40charcoal-ui%2Freact&style=flat-square&logo=npm",alt:"npmバッジ"})})}),`
`,e.jsx(r.h2,{id:"インストール",children:"インストール"}),`
`,e.jsx(r.p,{children:"以下のいずれかのパッケージマネージャーを使用してインストールしてください"}),`
`,e.jsx(r.h3,{id:"npm",children:"npm"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-bash",children:`npm install @charcoal-ui/react
`})}),`
`,e.jsx(r.h3,{id:"yarn",children:"yarn"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-bash",children:`yarn add @charcoal-ui/react
`})}),`
`,e.jsx(r.h3,{id:"pnpm",children:"pnpm"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-bash",children:`pnpm add @charcoal-ui/react
`})}),`
`,e.jsx(r.h3,{id:"bun",children:"bun"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-bash",children:`bun add @charcoal-ui/react
`})}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"@charcoal-ui/styled"}),`と合わせて使用してください。
`,e.jsx(r.code,{children:"ThemeProvider"}),"、",e.jsx(r.code,{children:"TokenInjector"}),"を使用してください。詳しくは ",e.jsx(r.code,{children:"@charcoal-ui/styled"}),"のクイックスタートを参照してください。"]}),`
`,e.jsxs(r.p,{children:["必要に応じて",e.jsx(r.code,{children:"SSRProvider"}),"や",e.jsx(r.code,{children:"OverlayProvider"}),"も使用してください。"]}),`
`,e.jsxs(r.p,{children:["また、",e.jsx(r.code,{children:"ThemeProvider"}),"、",e.jsx(r.code,{children:"TokenInjector"}),"、",e.jsx(r.code,{children:"SSRProvider"}),"、",e.jsx(r.code,{children:"OverlayProvider"}),"を内包した CharcoalProvider を使用することもできます。"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { CharcoalProvider } from '@charcoal-ui/react'
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
`})})]})}function h(n={}){const{wrapper:r}={...a(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(c,{...n})}):c(n)}export{h as default};
