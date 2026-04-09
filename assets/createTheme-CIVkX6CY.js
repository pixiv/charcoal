import{n as e}from"./chunk-BneVvdWh.js";import{c as t,nt as n,o as r}from"./iframe-BIP2GiWG.js";import{r as i}from"./react-C4gTv8ZR.js";import{t as a}from"./mdx-react-shim-ClMUdT0_.js";function o(e){let t={code:`code`,h1:`h1`,p:`p`,pre:`pre`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`styled/createTheme`}),`
`,(0,c.jsxs)(t.h1,{id:`createthemedeprecated`,children:[(0,c.jsx)(t.code,{children:`createTheme`}),`(`,(0,c.jsx)(t.code,{children:`deprecated`}),`)`]}),`
`,(0,c.jsx)(t.p,{children:`The helper function for styled-components has a performance issue.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import styled from 'styled-components'
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
`})})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),t()}))();export{s as default};