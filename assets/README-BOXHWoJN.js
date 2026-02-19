import{j as e,M as l}from"./iframe-Czr9xm4W.js";import{useMDXComponents as a}from"./index-DEIIjSGd.js";import"./preload-helper-C1FmrZbK.js";function c(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...a(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"styled/README"}),`
`,e.jsx(n.h1,{id:"charcoal-uistyled-クイックスタート",children:"@charcoal-ui/styled クイックスタート"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.npmjs.com/package/@charcoal-ui/styled",rel:"nofollow",children:e.jsx(n.img,{src:"https://img.shields.io/npm/v/@charcoal-ui/styled?label=%40charcoal-ui%2Ficons&style=flat-square&logo=npm",alt:"npmバッジ"})})}),`
`,e.jsx(n.h2,{id:"インストール",children:"インストール"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @charcoal-ui/styled
`})}),`
`,e.jsx(n.h3,{id:"yarn",children:"yarn"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn add @charcoal-ui/stlyed
`})}),`
`,e.jsx(n.h3,{id:"pnpm",children:"pnpm"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`pnpm add @charcoal-ui/styled
`})}),`
`,e.jsx(n.h3,{id:"bun",children:"bun"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`bun add @charcoal-ui/styled
`})}),`
`,e.jsx(n.h2,{id:"使い方",children:"使い方"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ThemeProvider"})," ",e.jsx(n.code,{children:"TokenInjector"})," を使用してください。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { FC, ReactNode } from 'react'
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
`})})]})}function o(r={}){const{wrapper:n}={...a(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(c,{...r})}):c(r)}export{o as default};
