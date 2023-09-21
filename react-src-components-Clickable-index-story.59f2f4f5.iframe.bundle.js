"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[2335],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_AY7I2SME.aD});var chunk_AY7I2SME=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs")},"./packages/react/src/components/Clickable/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Button:()=>Button,Link:()=>Link,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/components/Clickable/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Clickable",component:___WEBPACK_IMPORTED_MODULE_2__.Z},Button=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.Z,{onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("click"),children:"button"});Button.displayName="Button";const Link=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.Z,{to:"#",onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("click"),children:"link"});Link.displayName="Link",Button.parameters={...Button.parameters,docs:{...Button.parameters?.docs,source:{originalSource:"() => <Clickable onClick={action('click')}>button</Clickable>",...Button.parameters?.docs?.source}}},Link.parameters={...Link.parameters,docs:{...Link.parameters?.docs,source:{originalSource:"() => <Clickable to=\"#\" onClick={action('click')}>\n    link\n  </Clickable>",...Link.parameters?.docs?.source}}};const __namedExportsOrder=["Button","Link"]},"./packages/react/src/components/Clickable/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Clickable});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const DefaultLink=react.forwardRef((function DefaultLink({to,children,...rest},ref){return(0,jsx_runtime.jsx)("a",{href:to,ref,...rest,children})})),DefaultValue={Link:DefaultLink},ComponentAbstractionContext=react.createContext(DefaultValue);function ComponentAbstraction({children,components}){return(0,jsx_runtime.jsx)(ComponentAbstractionContext.Provider,{value:{...DefaultValue,...components},children})}ComponentAbstraction.displayName="ComponentAbstraction";try{ComponentAbstraction.displayName="ComponentAbstraction",ComponentAbstraction.__docgenInfo={description:"",displayName:"ComponentAbstraction",props:{components:{defaultValue:null,description:"",name:"components",required:!0,type:{name:"Partial<Components>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/core/ComponentAbstraction.tsx#ComponentAbstraction"]={docgenInfo:ComponentAbstraction.__docgenInfo,name:"ComponentAbstraction",path:"packages/react/src/core/ComponentAbstraction.tsx#ComponentAbstraction"})}catch(__react_docgen_typescript_loader_error){}try{DefaultLink.displayName="DefaultLink",DefaultLink.__docgenInfo={description:"",displayName:"DefaultLink",props:{to:{defaultValue:null,description:"リンクのURL",name:"to",required:!0,type:{name:"string"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/core/ComponentAbstraction.tsx#DefaultLink"]={docgenInfo:DefaultLink.__docgenInfo,name:"DefaultLink",path:"packages/react/src/core/ComponentAbstraction.tsx#DefaultLink"})}catch(__react_docgen_typescript_loader_error){}var index_esm=__webpack_require__("./packages/utils/dist/index.esm.js");const Clickable=react.forwardRef((function Clickable(props,ref){const{Link}=function useComponentAbstraction(){return(0,react.useContext)(ComponentAbstractionContext)}();if("to"in props){const{onClick,disabled=!1,...rest}=props;return(0,jsx_runtime.jsx)(A,{...rest,as:disabled?void 0:Link,onClick:disabled?void 0:onClick,"aria-disabled":disabled,ref})}return(0,jsx_runtime.jsx)(Button,{...props,ref})})),components_Clickable=Clickable,clickableCss=styled_components_browser_esm.iv`
  /* Clickable style */
  cursor: pointer;

  ${index_esm.t0} {
    cursor: default;
  }
`,Button=styled_components_browser_esm.ZP.button`
  /* Reset button appearance */
  appearance: none;
  background: transparent;
  padding: 0;
  border-style: none;
  outline: none;
  color: inherit;
  text-rendering: inherit;
  letter-spacing: inherit;
  word-spacing: inherit;

  &:focus {
    outline: none;
  }

  /* Change the font styles in all browsers. */
  font: inherit;

  /* Remove the margin in Firefox and Safari. */
  margin: 0;

  /* Show the overflow in Edge. */
  overflow: visible;

  /* Remove the inheritance of text transform in Firefox. */
  text-transform: none;

  /* Remove the inner border and padding in Firefox. */
  &::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  ${clickableCss}
`,A=styled_components_browser_esm.ZP.span`
  /* Reset a-tag appearance */
  color: inherit;

  &:focus {
    outline: none;
  }

  .text {
    top: calc(1em + 2em);
  }

  ${clickableCss}
`;try{Clickable.displayName="Clickable",Clickable.__docgenInfo={description:"",displayName:"Clickable",props:{disabled:{defaultValue:null,description:"クリックの無効化",name:"disabled",required:!1,type:{name:"boolean"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}},to:{defaultValue:null,description:"リンクのURL。指定するとbuttonタグではなくaタグとして描画される",name:"to",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Clickable/index.tsx#Clickable"]={docgenInfo:Clickable.__docgenInfo,name:"Clickable",path:"packages/react/src/components/Clickable/index.tsx#Clickable"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=react-src-components-Clickable-index-story.59f2f4f5.iframe.bundle.js.map