import{j as e,M as h,C as r}from"./iframe-D-iARKYw.js";import{useMDXComponents as i}from"./index-BOdJiagE.js";import{Example as o}from"./addThemeUtils.story-CQGTYjem.js";import"./preload-helper-C1FmrZbK.js";function s(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"styled/addThemeUtils"}),`
`,e.jsx(n.h1,{id:"theme-utils",children:"Theme Utils"}),`
`,e.jsxs(n.p,{children:["We offer utilities for spacing and common classes through ",e.jsx(n.code,{children:"theme.utils"}),", which enable type-safe spacing."]}),`
`,e.jsx(n.h2,{id:"setup",children:"Setup"}),`
`,e.jsxs(n.p,{children:["You can add utilities using ",e.jsx(n.code,{children:"addThemeUtils"})," by passing the object to the ThemeProvider."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// ...
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
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["You can access the theme object using ",e.jsx(n.a,{href:"https://styled-components.com/docs/advanced#theming",rel:"nofollow",children:"styled theming"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const AssertiveRingDiv = styled.div\`
  \${({ theme }) => [theme.utils.assertiveRingCss, theme.utils.margin(8)]}
  transition: 0.2s box-shadow;
\`
`})}),`
`,e.jsx(n.h3,{id:"example",children:"Example"}),`
`,e.jsx(r,{of:o})]})}function m(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{m as default};
