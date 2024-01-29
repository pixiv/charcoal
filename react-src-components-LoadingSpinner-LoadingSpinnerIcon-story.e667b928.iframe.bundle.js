"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[3839],{"./packages/react/src/components/LoadingSpinner/LoadingSpinnerIcon.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Icon:()=>Icon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"LoadingSpinnerIcon",component:__webpack_require__("./packages/react/src/components/LoadingSpinner/index.tsx").T,args:{once:!1}},Icon={};Icon.parameters={...Icon.parameters,docs:{...Icon.parameters?.docs,source:{originalSource:"{}",...Icon.parameters?.docs?.source}}};const __namedExportsOrder=["Icon"]},"./packages/react/src/components/LoadingSpinner/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>LoadingSpinnerIcon,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const LoadingSpinner=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function LoadingSpinnerInner({size=48,padding=16,transparent=!1,className},ref){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(LoadingSpinnerRoot,{size,padding,transparent,className,ref,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(LoadingSpinnerIcon,{})})})),__WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(LoadingSpinner),LoadingSpinnerRoot=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div.attrs({role:"progressbar"})`
  box-sizing: content-box;
  margin: auto;
  padding: ${props=>props.padding}px;
  border-radius: 8px;
  font-size: ${props=>props.size}px;
  width: ${props=>props.size}px;
  height: ${props=>props.size}px;
  opacity: 0.84;
  color: var(--charcoal-text4);
  background-color: ${({transparent})=>`var(--charcoal-${transparent?"transparent":"background1"})`};
`,scaleOut=styled_components__WEBPACK_IMPORTED_MODULE_2__.F4`
  from {
    transform: scale(0);
    opacity: 1;
  }

  to {
    transform: scale(1);
    opacity: 0;
  }
`,Icon=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div.attrs({role:"presentation"})`
  width: 1em;
  height: 1em;
  border-radius: 1em;
  background-color: currentColor;
  animation: ${scaleOut} 1s both ease-out;
  animation-iteration-count: ${p=>p.once?1:"infinite"};

  &[data-reset-animation] {
    animation: none;
  }
`,LoadingSpinnerIcon=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function LoadingSpinnerIcon({once=!1},ref){const iconRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref,(()=>({restart:()=>{iconRef.current&&(iconRef.current.dataset.resetAnimation="true",iconRef.current.offsetWidth,delete iconRef.current.dataset.resetAnimation)}}))),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Icon,{ref:iconRef,once})}));try{LoadingSpinner.displayName="LoadingSpinner",LoadingSpinner.__docgenInfo={description:"",displayName:"LoadingSpinner",props:{size:{defaultValue:{value:"48"},description:"",name:"size",required:!1,type:{name:"number"}},padding:{defaultValue:{value:"16"},description:"",name:"padding",required:!1,type:{name:"number"}},transparent:{defaultValue:{value:"false"},description:"",name:"transparent",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/LoadingSpinner/index.tsx#LoadingSpinner"]={docgenInfo:LoadingSpinner.__docgenInfo,name:"LoadingSpinner",path:"packages/react/src/components/LoadingSpinner/index.tsx#LoadingSpinner"})}catch(__react_docgen_typescript_loader_error){}try{LoadingSpinnerIcon.displayName="LoadingSpinnerIcon",LoadingSpinnerIcon.__docgenInfo={description:"",displayName:"LoadingSpinnerIcon",props:{once:{defaultValue:{value:"false"},description:"",name:"once",required:!1,type:{name:"boolean"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/LoadingSpinner/index.tsx#LoadingSpinnerIcon"]={docgenInfo:LoadingSpinnerIcon.__docgenInfo,name:"LoadingSpinnerIcon",path:"packages/react/src/components/LoadingSpinner/index.tsx#LoadingSpinnerIcon"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=react-src-components-LoadingSpinner-LoadingSpinnerIcon-story.e667b928.iframe.bundle.js.map