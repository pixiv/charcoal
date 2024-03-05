"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[7195],{"./packages/styled/src/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_story});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function pxIfNum(v){return void 0===v?"":"number"==typeof v?`${v}px`:v}function margin(arg1,arg2,arg3,arg4){return styled_components_browser_esm.iv`
    margin: ${pxIfNum(arg1)} ${pxIfNum(arg2)} ${pxIfNum(arg3)} ${pxIfNum(arg4)};
  `}function marginTop(v){return styled_components_browser_esm.iv`
    margin-top: ${pxIfNum(v)};
  `}function marginBottom(v){return styled_components_browser_esm.iv`
    margin-bottom: ${pxIfNum(v)};
  `}function marginLeft(v){return styled_components_browser_esm.iv`
    margin-left: ${pxIfNum(v)};
  `}function marginRight(v){return styled_components_browser_esm.iv`
    margin-right: ${pxIfNum(v)};
  `}function padding(arg1,arg2,arg3,arg4){return styled_components_browser_esm.iv`
    padding: ${arg1}px ${pxIfNum(arg2)} ${pxIfNum(arg3)} ${pxIfNum(arg4)};
  `}function paddingTop(v){return styled_components_browser_esm.iv`
    padding-top: ${v}px;
  `}function paddingBottom(v){return styled_components_browser_esm.iv`
    padding-bottom: ${v}px;
  `}function paddingLeft(v){return styled_components_browser_esm.iv`
    padding-left: ${v}px;
  `}function paddingRight(v){return styled_components_browser_esm.iv`
    padding-right: ${v}px;
  `}function gap(v1,v2){return styled_components_browser_esm.iv`
    gap: ${v1}px ${pxIfNum(v2)};
  `}function rowGap(v){return styled_components_browser_esm.iv`
    row-gap: ${v}px;
  `}function columnGap(v){return styled_components_browser_esm.iv`
    column-gap: ${v}px;
  `}const disabledCss=styled_components_browser_esm.iv`
  :disabled,
  [aria-disabled]:not([aria-disabled='false']) {
    opacity: 0.32;
    cursor: default;
  }
`,boldCss=styled_components_browser_esm.iv`
  font-weight: bold;
`,removeHalfLeadingCss=styled_components_browser_esm.iv`
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
`;function typography(size,bold=!1,preserveHalfLeading=!1){return styled_components_browser_esm.iv`
    font-size: ${size}px;
    line-height: ${size+8}px;
    display: flow-root;
    ${!0===bold&&boldCss}
    ${!0!==preserveHalfLeading&&removeHalfLeadingCss}
  `}const focusVisibleFocusRingCss=styled_components_browser_esm.iv`
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
`,assertiveRingCss=styled_components_browser_esm.iv`
  box-shadow: 0 0 0 4px rgba(255, 43, 0, 0.32);
`;function addThemeUtils(theme){return{...theme,utils:{margin,marginTop,marginLeft,marginBottom,marginRight,padding,paddingTop,paddingLeft,paddingBottom,paddingRight,gap,rowGap,columnGap,typography,focusVisibleFocusRingCss,assertiveRingCss,disabledCss}}}function myTheme(theme){return{...addThemeUtils(theme),color:{...theme.color,mycolor:"#ff9e8c"}}}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const index_story={title:"styled"},Example=()=>(0,jsx_runtime.jsx)(styled_components_browser_esm.f6,{theme:myTheme,children:(0,jsx_runtime.jsxs)(RootDiv,{children:[(0,jsx_runtime.jsx)(Bg1Div,{children:(0,jsx_runtime.jsx)(TypographyDiv,{children:"${({ theme }) => theme.utils.typography(14, true)}"})}),(0,jsx_runtime.jsx)(Bg1Div,{children:(0,jsx_runtime.jsx)(MarginDiv,{children:(0,jsx_runtime.jsx)(Pre,{children:(0,jsx_runtime.jsx)(Code,{children:"${({ theme }) => [\n    theme.utils.margin(16, 'auto'),\n    theme.utils.padding(4, 8, 16, 24),\n  ]}"})})})}),(0,jsx_runtime.jsx)(Bg1Div,{children:(0,jsx_runtime.jsx)(AssertiveRingDiv,{children:"theme.utils.assertiveRingCss"})}),(0,jsx_runtime.jsxs)(Bg1Div,{children:[(0,jsx_runtime.jsx)(StyledButton,{children:"theme.utils.focusVisibleFocusRingCss"}),(0,jsx_runtime.jsx)(StyledButton,{disabled:!0,children:"theme.utils.disabledCss"})]})]})});Example.displayName="Example";const RootDiv=styled_components_browser_esm.ZP.div`
  ${({theme})=>theme.utils.gap(40)}
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    'Liberation Mono', 'Courier New', monospace;
`,Pre=styled_components_browser_esm.ZP.pre`
  margin: 0;
`,Code=styled_components_browser_esm.ZP.code`
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    'Liberation Mono', 'Courier New', monospace;
`,TypographyDiv=styled_components_browser_esm.ZP.div`
  ${({theme})=>theme.utils.typography(14,!0)}
`,MarginDiv=styled_components_browser_esm.ZP.div`
  color: ${({theme})=>theme.color.text1};
  background-color: ${({theme})=>theme.color.background2};
  border: 1px solid ${({theme})=>theme.color.border};
  ${({theme})=>[theme.utils.margin(16,"auto"),theme.utils.padding(4,8,16,24)]}
`,Bg1Div=styled_components_browser_esm.ZP.div`
  box-sizing: border-box;
  display: flex;
  background-color: ${({theme})=>theme.color.background1};
  border: 1px solid ${({theme})=>theme.color.border};
  overflow-x: auto;
  overflow-y: hidden;
`,AssertiveRingDiv=styled_components_browser_esm.ZP.div`
  ${({theme})=>[theme.utils.assertiveRingCss,theme.utils.margin(8)]}
  transition: 0.2s box-shadow;
`,StyledButton=styled_components_browser_esm.ZP.button`
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
`;Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:"() => <ThemeProvider theme={myTheme}>\n    <RootDiv>\n      <Bg1Div>\n        <TypographyDiv>\n          {'${({ theme }) => theme.utils.typography(14, true)}'}\n        </TypographyDiv>\n      </Bg1Div>\n\n      <Bg1Div>\n        <MarginDiv>\n          <Pre>\n            <Code>\n              {`\\${({ theme }) => [\n    theme.utils.margin(16, 'auto'),\n    theme.utils.padding(4, 8, 16, 24),\n  ]}`}\n            </Code>\n          </Pre>\n        </MarginDiv>\n      </Bg1Div>\n\n      <Bg1Div>\n        <AssertiveRingDiv>{'theme.utils.assertiveRingCss'}</AssertiveRingDiv>\n      </Bg1Div>\n\n      <Bg1Div>\n        <StyledButton>{'theme.utils.focusVisibleFocusRingCss'}</StyledButton>\n\n        <StyledButton disabled>{'theme.utils.disabledCss'}</StyledButton>\n      </Bg1Div>\n    </RootDiv>\n  </ThemeProvider>",...Example.parameters?.docs?.source}}};const __namedExportsOrder=["Example"]}}]);
//# sourceMappingURL=styled-src-index-story.b2a23bdf.iframe.bundle.js.map