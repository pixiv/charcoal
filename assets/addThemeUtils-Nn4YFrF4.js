import{n as e}from"./chunk-BneVvdWh.js";import{c as t,n,nt as r,o as i}from"./iframe-D15TZ-Lk.js";import{r as a}from"./react-gSRirEss.js";import{t as o}from"./mdx-react-shim-DhF9kuO7.js";import{Example as s,t as c}from"./addThemeUtils.story-Bk_yeA9O.js";function l(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...a(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i,{title:`styled/addThemeUtils`}),`
`,(0,d.jsx)(t.h1,{id:`theme-utils`,children:`Theme Utils`}),`
`,(0,d.jsxs)(t.p,{children:[`We offer utilities for spacing and common classes through `,(0,d.jsx)(t.code,{children:`theme.utils`}),`, which enable type-safe spacing.`]}),`
`,(0,d.jsx)(t.h2,{id:`setup`,children:`Setup`}),`
`,(0,d.jsxs)(t.p,{children:[`You can add utilities using `,(0,d.jsx)(t.code,{children:`addThemeUtils`}),` by passing the object to the ThemeProvider.`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`// ...
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
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsxs)(t.p,{children:[`You can access the theme object using `,(0,d.jsx)(t.a,{href:`https://styled-components.com/docs/advanced#theming`,rel:`nofollow`,children:`styled theming`}),`.`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`const AssertiveRingDiv = styled.div\`
  \${({ theme }) => [theme.utils.assertiveRingCss, theme.utils.margin(8)]}
  transition: 0.2s box-shadow;
\`
`})}),`
`,(0,d.jsx)(t.h3,{id:`example`,children:`Example`}),`
`,(0,d.jsx)(n,{of:s})]})}function u(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=r(),o(),t(),c()}))();export{u as default};