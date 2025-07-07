"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[92080],{"./packages/react-sandbox/src/_lib/ComponentAbstraction.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{FY:()=>useComponentAbstraction});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const DefaultLink=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function DefaultLink({to,children,...rest},ref){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:to,ref,...rest,children})})),DefaultValue={Link:DefaultLink},ComponentAbstractionContext=react__WEBPACK_IMPORTED_MODULE_1__.createContext(DefaultValue);function useComponentAbstraction(){return(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ComponentAbstractionContext)}DefaultLink.__docgenInfo={description:"",methods:[],displayName:"DefaultLink",props:{to:{required:!0,tsType:{name:"string"},description:"リンクのURL"}}}},"./packages/react-sandbox/src/components/Filter/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>index_story});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/.pnpm/styled-components@5.3.11_@babel+core@7.26.10_react-dom@18.3.1_react@18.3.1__react-is@18.3.1_react@18.3.1/node_modules/styled-components/dist/styled-components.browser.esm.js"),index_esm=__webpack_require__("./packages/utils/dist/index.esm.js"),ComponentAbstraction=__webpack_require__("./packages/react-sandbox/src/_lib/ComponentAbstraction.tsx");const FilterButton=react.forwardRef((function FilterButton({onClick,children,active=!1,hover,reactive=!1},ref){return(0,jsx_runtime.jsx)(ButtonLike,{active,reactive,hover,onClick:active&&!reactive?void 0:onClick,ref,children})})),FilterIconButton=react.forwardRef((function FilterIconButton({onClick,children,active=!1,hover,reactive=!1,width,height},ref){return(0,jsx_runtime.jsx)(StyledButtonLike,{active,reactive,hover,onClick:active&&!reactive?void 0:onClick,ref,buttonWidth:width,buttonHeight:height,children})})),FilterLink=react.forwardRef((function FilterLink({onClick,children,active=!1,hover,reactive=!1,...props},ref){const{Link}=(0,ComponentAbstraction.FY)();return active&&!reactive?(0,jsx_runtime.jsx)(PlainElement,{active:!0,hover,ref,children}):(0,jsx_runtime.jsx)(Link,{...props,onClick,children:(0,jsx_runtime.jsx)(PlainElement,{active,reactive,hover,ref,children})})})),buttonCss=styled_components_browser_esm.AH`
  display: block;
  outline: none;
  border: none;
  padding: 9px 24px;
  font-size: 14px;
  line-height: 22px;
  font-weight: bold;
  border-radius: /* absurd radius, but ensures rounded corners */ 2000px;
  transition: color 0.2s;
  color: ${({theme})=>theme.color.text3};
  cursor: pointer;
  user-select: none;
  background-color: transparent;

  &:hover {
    color: ${({theme})=>theme.color.text2};
  }

  ${({hover=!1})=>hover&&styled_components_browser_esm.AH`
      color: ${({theme})=>theme.color.text2};
    `}

  ${({active=!1})=>active&&styled_components_browser_esm.AH`
      background-color: ${({theme})=>theme.color.surface3};
      color: ${({theme})=>theme.color.text2};
    `}

  ${({active=!1,reactive=!1})=>active&&!reactive&&styled_components_browser_esm.AH`
      cursor: default;
    `}

  @media ${({theme})=>(0,index_esm.JX)(theme.breakpoint.screen1)} {
    padding: 5px 16px;
  }
`,padding0Css=styled_components_browser_esm.AH`
  padding: 0;

  @media ${({theme})=>(0,index_esm.JX)(theme.breakpoint.screen1)} {
    padding: 0;
  }
`,ButtonLike=styled_components_browser_esm.Ay.button`
  ${buttonCss}
`,PlainElement=styled_components_browser_esm.Ay.span`
  ${buttonCss}
`,StyledButtonLike=(0,styled_components_browser_esm.Ay)(ButtonLike)`
  ${padding0Css};
  ${p=>void 0!==p.buttonWidth&&`width: ${p.buttonWidth}px;`}
  ${p=>void 0!==p.buttonHeight&&`height: ${p.buttonHeight}px;`}
`;styled_components_browser_esm.Ay.div`
  display: flex;
`;FilterButton.__docgenInfo={description:"",methods:[],displayName:"FilterButton",props:{active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hover:{required:!1,tsType:{name:"boolean"},description:""},reactive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<T>",elements:[{name:"T"}]},description:""}}},FilterIconButton.__docgenInfo={description:"",methods:[],displayName:"FilterIconButton",props:{active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hover:{required:!1,tsType:{name:"boolean"},description:""},reactive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<T>",elements:[{name:"HTMLButtonElement"}]},description:""},width:{required:!1,tsType:{name:"number"},description:""},height:{required:!1,tsType:{name:"number"},description:""}}},FilterLink.__docgenInfo={description:"",methods:[],displayName:"FilterLink",props:{active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hover:{required:!1,tsType:{name:"boolean"},description:""},reactive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<T>",elements:[{name:"T"}]},description:""},to:{required:!0,tsType:{name:"string"},description:"リンクのURL"}}};const index_story={title:"react-sandbox/Filter",component:FilterButton},Default={render:props=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["FilterButton: ",(0,jsx_runtime.jsx)(FilterButton,{...props,children:"test"}),"FilterLink: ",(0,jsx_runtime.jsx)(FilterLink,{...props,children:"test"}),"FilterIconButton:"," ",(0,jsx_runtime.jsx)(FilterIconButton,{width:40,height:40,...props,children:"test"})]})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: props => {\n    return <>\n        FilterButton: <FilterButton {...props}>test</FilterButton>\n        FilterLink: <FilterLink {...props}>test</FilterLink>\n        FilterIconButton:{' '}\n        <FilterIconButton width={40} height={40} {...props}>\n          test\n        </FilterIconButton>\n      </>;\n  }\n}",...Default.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=react-sandbox-src-components-Filter-index-story.de6f4698.iframe.bundle.js.map