"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[885,31403],{"./node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.20_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./packages/styled/src/addThemeUtils.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),_home_runner_work_charcoal_charcoal_node_modules_pnpm_storybook_addon_docs_8_6_9_types_react_18_3_20_storybook_8_6_9_prettier_3_6_2_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.20_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@storybook+blocks@8.6.9_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.6.9_prettier@3.6.2_/node_modules/@storybook/blocks/dist/index.mjs"),_addThemeUtils_story__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/styled/src/addThemeUtils.story.tsx");function _createMdxContent(props){const _components={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,_home_runner_work_charcoal_charcoal_node_modules_pnpm_storybook_addon_docs_8_6_9_types_react_18_3_20_storybook_8_6_9_prettier_3_6_2_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.W8,{title:"styled/addThemeUtils"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"theme-utils",children:"Theme Utils"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["We offer utilities for spacing and common classes through ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"theme.utils"}),", which enable type-safe spacing."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"setup",children:"Setup"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["You can add utilities using ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"addThemeUtils"})," by passing the object to the ThemeProvider."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-tsx",children:"// ...\nimport { addThemeUtils } from '@charcoal-ui/styled'\n\nconst ExampleProvider: FC<{ children: ReactNode }> = ({ children }) => {\n  const [theme] = useTheme()\n  const themeWithUtils = addThemeUtils(theme === 'dark' ? dark : light)\n  useThemeSetter()\n  return (\n    <ThemeProvider theme={themeWithUtils}>\n      {...}\n    </ThemeProvider>\n  )\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["You can access the theme object using ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://styled-components.com/docs/advanced#theming",rel:"nofollow",children:"styled theming"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-tsx",children:"const AssertiveRingDiv = styled.div`\n  ${({ theme }) => [theme.utils.assertiveRingCss, theme.utils.margin(8)]}\n  transition: 0.2s box-shadow;\n`\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"example",children:"Example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hl,{of:_addThemeUtils_story__WEBPACK_IMPORTED_MODULE_4__.Example})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_charcoal_charcoal_node_modules_pnpm_storybook_addon_docs_8_6_9_types_react_18_3_20_storybook_8_6_9_prettier_3_6_2_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./packages/styled/src/addThemeUtils.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,default:()=>addThemeUtils_story});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),styled_components_browser_esm=__webpack_require__("./node_modules/.pnpm/styled-components@5.3.11_@babel+core@7.26.10_react-dom@18.3.1_react@18.3.1__react-is@18.3.1_react@18.3.1/node_modules/styled-components/dist/styled-components.browser.esm.js");function pxIfNum(v){return void 0===v?"":"number"==typeof v?`${v}px`:v}function margin(arg1,arg2,arg3,arg4){return styled_components_browser_esm.AH`
    margin: ${pxIfNum(arg1)} ${pxIfNum(arg2)} ${pxIfNum(arg3)} ${pxIfNum(arg4)};
  `}function marginTop(v){return styled_components_browser_esm.AH`
    margin-top: ${pxIfNum(v)};
  `}function marginBottom(v){return styled_components_browser_esm.AH`
    margin-bottom: ${pxIfNum(v)};
  `}function marginLeft(v){return styled_components_browser_esm.AH`
    margin-left: ${pxIfNum(v)};
  `}function marginRight(v){return styled_components_browser_esm.AH`
    margin-right: ${pxIfNum(v)};
  `}function padding(arg1,arg2,arg3,arg4){return styled_components_browser_esm.AH`
    padding: ${arg1}px ${pxIfNum(arg2)} ${pxIfNum(arg3)} ${pxIfNum(arg4)};
  `}function paddingTop(v){return styled_components_browser_esm.AH`
    padding-top: ${v}px;
  `}function paddingBottom(v){return styled_components_browser_esm.AH`
    padding-bottom: ${v}px;
  `}function paddingLeft(v){return styled_components_browser_esm.AH`
    padding-left: ${v}px;
  `}function paddingRight(v){return styled_components_browser_esm.AH`
    padding-right: ${v}px;
  `}function gap(v1,v2){return styled_components_browser_esm.AH`
    gap: ${v1}px ${pxIfNum(v2)};
  `}function rowGap(v){return styled_components_browser_esm.AH`
    row-gap: ${v}px;
  `}function columnGap(v){return styled_components_browser_esm.AH`
    column-gap: ${v}px;
  `}const disabledCss=styled_components_browser_esm.AH`
  &:disabled,
  &[aria-disabled]:not([aria-disabled='false']) {
    opacity: 0.32;
    cursor: default;
  }
`,boldCss=styled_components_browser_esm.AH`
  font-weight: bold;
`,removeHalfLeadingCss=styled_components_browser_esm.AH`
  &::before {
    display: block;
    width: 0;
    height: 0;
    content: '';
    margin-top: -4px;
  }

  &::after {
    display: block;
    width: 0;
    height: 0;
    content: '';
    margin-bottom: -4px;
  }
`;function typography(size,bold=!1,preserveHalfLeading=!1){return styled_components_browser_esm.AH`
    font-size: ${size}px;
    line-height: ${size+8}px;
    display: flow-root;
    ${!0===bold&&boldCss}
    ${!0!==preserveHalfLeading&&removeHalfLeadingCss}
  `}const focusVisibleFocusRingCss=styled_components_browser_esm.AH`
  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);
  }
  &:focus:not(:focus-visible) {
    box-shadow: none;
  }
  &:focus-visible {
    box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);
  }
`,assertiveRingCss=styled_components_browser_esm.AH`
  box-shadow: 0 0 0 4px rgba(255, 43, 0, 0.32);
`;function addThemeUtils(theme){return{...theme,utils:{margin,marginTop,marginLeft,marginBottom,marginRight,padding,paddingTop,paddingLeft,paddingBottom,paddingRight,gap,rowGap,columnGap,typography,focusVisibleFocusRingCss,assertiveRingCss,disabledCss}}}function myTheme(theme){return{...addThemeUtils(theme),color:{...theme.color,mycolor:"#ff9e8c"}}}const addThemeUtils_story={title:"styled/addThemeUtils"},Example=()=>(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:myTheme,children:(0,jsx_runtime.jsxs)(RootDiv,{children:[(0,jsx_runtime.jsx)(Bg1Div,{children:(0,jsx_runtime.jsx)(TypographyDiv,{children:"${({ theme }) => theme.utils.typography(14, true)}"})}),(0,jsx_runtime.jsx)(Bg1Div,{children:(0,jsx_runtime.jsx)(MarginDiv,{children:(0,jsx_runtime.jsx)(Pre,{children:(0,jsx_runtime.jsx)(Code,{children:"${({ theme }) => [\n    theme.utils.margin(16, 'auto'),\n    theme.utils.padding(4, 8, 16, 24),\n  ]}"})})})}),(0,jsx_runtime.jsx)(Bg1Div,{children:(0,jsx_runtime.jsx)(AssertiveRingDiv,{children:"theme.utils.assertiveRingCss"})}),(0,jsx_runtime.jsxs)(Bg1Div,{children:[(0,jsx_runtime.jsx)(StyledButton,{children:"theme.utils.focusVisibleFocusRingCss"}),(0,jsx_runtime.jsx)(StyledButton,{disabled:!0,children:"theme.utils.disabledCss"})]})]})}),RootDiv=styled_components_browser_esm.Ay.div`
  ${({theme})=>theme.utils.gap(40)}
  color: ${({theme})=>theme.color.text1};
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  font-family:
    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
`,Pre=styled_components_browser_esm.Ay.pre`
  margin: 0;
`,Code=styled_components_browser_esm.Ay.code`
  font-family:
    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
`,TypographyDiv=styled_components_browser_esm.Ay.div`
  ${({theme})=>theme.utils.typography(14,!0)}
`,MarginDiv=styled_components_browser_esm.Ay.div`
  color: ${({theme})=>theme.color.text1};
  background-color: ${({theme})=>theme.color.background2};
  border: 1px solid ${({theme})=>theme.color.border};
  ${({theme})=>[theme.utils.margin(16,"auto"),theme.utils.padding(4,8,16,24)]}
`,Bg1Div=styled_components_browser_esm.Ay.div`
  box-sizing: border-box;
  display: flex;
  background-color: ${({theme})=>theme.color.background1};
  border: 1px solid ${({theme})=>theme.color.border};
  overflow-x: auto;
  overflow-y: hidden;
`,AssertiveRingDiv=styled_components_browser_esm.Ay.div`
  ${({theme})=>[theme.utils.assertiveRingCss,theme.utils.margin(8)]}
  transition: 0.2s box-shadow;
`,StyledButton=styled_components_browser_esm.Ay.button`
  ${({theme})=>[theme.utils.focusVisibleFocusRingCss,theme.utils.disabledCss,theme.utils.padding(0,16),theme.utils.margin(16)]}
  transition: 0.2s box-shadow;

  cursor: pointer;
  height: 40px;
  background-color: ${({theme})=>theme.color.brand};
  color: ${({theme})=>theme.color.text5};
  border: none;
  border-radius: 9999px;

  :not(:disabled):active {
    background-color: var(--charcoal-brand-press);
  }
`;Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:"() => <ThemeProvider theme={myTheme}>\n    <RootDiv>\n      <Bg1Div>\n        <TypographyDiv>\n          {'${({ theme }) => theme.utils.typography(14, true)}'}\n        </TypographyDiv>\n      </Bg1Div>\n\n      <Bg1Div>\n        <MarginDiv>\n          <Pre>\n            <Code>\n              {`\\${({ theme }) => [\n    theme.utils.margin(16, 'auto'),\n    theme.utils.padding(4, 8, 16, 24),\n  ]}`}\n            </Code>\n          </Pre>\n        </MarginDiv>\n      </Bg1Div>\n\n      <Bg1Div>\n        <AssertiveRingDiv>{'theme.utils.assertiveRingCss'}</AssertiveRingDiv>\n      </Bg1Div>\n\n      <Bg1Div>\n        <StyledButton>{'theme.utils.focusVisibleFocusRingCss'}</StyledButton>\n\n        <StyledButton disabled>{'theme.utils.disabledCss'}</StyledButton>\n      </Bg1Div>\n    </RootDiv>\n  </ThemeProvider>",...Example.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=styled-src-addThemeUtils-mdx.ffb35442.iframe.bundle.js.map