import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-B0qF1vn9.js";import{c as n,mt as r,u as i}from"./iframe-CxB8iIxV.js";import{t as a}from"./mdx-react-shim-DEdRksEl.js";function o(e){let r={code:`code`,h1:`h1`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`styled/createTheme`}),`
`,(0,c.jsxs)(r.h1,{id:`createthemedeprecated`,children:[(0,c.jsx)(r.code,{children:`createTheme`}),`(`,(0,c.jsx)(r.code,{children:`deprecated`}),`)`]}),`
`,(0,c.jsx)(r.p,{children:`The helper function for styled-components has a performance issue.`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-tsx`,children:`import styled from 'styled-components'
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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=r(),a(),i()}))();export{s as default};