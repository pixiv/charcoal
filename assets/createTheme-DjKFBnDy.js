import{j as e,M as s}from"./iframe-D-iARKYw.js";import{useMDXComponents as r}from"./index-BOdJiagE.js";import"./preload-helper-C1FmrZbK.js";function o(t){const n={code:"code",h1:"h1",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"styled/createTheme"}),`
`,e.jsxs(n.h1,{id:"createthemedeprecated",children:[e.jsx(n.code,{children:"createTheme"}),"(",e.jsx(n.code,{children:"deprecated"}),")"]}),`
`,e.jsx(n.p,{children:"The helper function for styled-components has a performance issue."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import styled from 'styled-components'
import { createTheme } from '@charcoal-ui/styled'

export const theme = createTheme(styled)

export const Preview = () => {
  return (
    <>
      <Ex>brand</Ex>
      <Ex2>hover or press me</Ex2>
    </>
  )
}
const Ex = styled.p\`
  \${theme((o) => [o.bg.brand, o.font.text5, o.width.px(104), o.height.px(104)])}
\`

const Ex2 = styled.p\`
  \${theme((o) => [
    o.bg.success.hover.press,
    o.font.text5,
    o.width.px(104),
    o.height.px(104),
  ])}
\`
`})})]})}function p(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{p as default};
