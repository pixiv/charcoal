import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-yxiPNgMw.js";import{c as n,lt as r,r as i,u as a}from"./iframe-DmhNYrQY.js";import{t as o}from"./mdx-react-shim-CpakHpkQ.js";import{Example as s,t as c}from"./addThemeUtils.story-BbJCW5pp.js";function l(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n,{title:`styled/addThemeUtils`}),`
`,(0,d.jsx)(r.h1,{id:`theme-utils`,children:`Theme Utils`}),`
`,(0,d.jsxs)(r.p,{children:[`We offer utilities for spacing and common classes through `,(0,d.jsx)(r.code,{children:`theme.utils`}),`, which enable type-safe spacing.`]}),`
`,(0,d.jsx)(r.h2,{id:`setup`,children:`Setup`}),`
`,(0,d.jsxs)(r.p,{children:[`You can add utilities using `,(0,d.jsx)(r.code,{children:`addThemeUtils`}),` by passing the object to the ThemeProvider.`]}),`
`,(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:`language-tsx`,children:`// ...
import { addThemeUtils } from '@charcoal-ui/styled'

const ExampleProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme] = useTheme()
  const themeWithUtils = addThemeUtils(theme === 'dark' ? dark : light)
  useThemeSetter()
  return (
    <ThemeProvider theme={themeWithUtils}>
      {...}
    </ThemeProvider>
  )
}
`})}),`
`,(0,d.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsxs)(r.p,{children:[`You can access the theme object using `,(0,d.jsx)(r.a,{href:`https://styled-components.com/docs/advanced#theming`,rel:`nofollow`,children:`styled theming`}),`.`]}),`
`,(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:`language-tsx`,children:`const AssertiveRingDiv = styled.div\`
  \${({ theme }) => [theme.utils.assertiveRingCss, theme.utils.margin(8)]}
  transition: 0.2s box-shadow;
\`
`})}),`
`,(0,d.jsx)(r.h3,{id:`example`,children:`Example`}),`
`,(0,d.jsx)(i,{of:s})]})}function u(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=r(),o(),a(),c()}))();export{u as default};