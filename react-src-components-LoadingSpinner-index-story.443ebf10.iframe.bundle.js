"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[922],{"./packages/react/src/components/LoadingSpinner/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Padding:()=>Padding,Size:()=>Size,Transparent:()=>Transparent,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_story});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const LoadingSpinner=(0,react.forwardRef)((function LoadingSpinnerInner({size=48,padding=16,transparent=!1,className},ref){return(0,jsx_runtime.jsx)(LoadingSpinnerRoot,{size,padding,transparent,className,ref,children:(0,jsx_runtime.jsx)(LoadingSpinnerIcon,{})})})),components_LoadingSpinner=(0,react.memo)(LoadingSpinner),LoadingSpinnerRoot=styled_components_browser_esm.ZP.div.attrs({role:"progressbar"})`
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
`,scaleOut=styled_components_browser_esm.F4`
  from {
    transform: scale(0);
    opacity: 1;
  }

  to {
    transform: scale(1);
    opacity: 0;
  }
`,Icon=styled_components_browser_esm.ZP.div.attrs({role:"presentation"})`
  width: 1em;
  height: 1em;
  border-radius: 1em;
  background-color: currentColor;
  animation: ${scaleOut} 1s both ease-out;
  animation-iteration-count: ${p=>p.once?1:"infinite"};

  &[data-reset-animation] {
    animation: none;
  }
`,LoadingSpinnerIcon=(0,react.forwardRef)((function LoadingSpinnerIcon({once=!1},ref){const iconRef=(0,react.useRef)(null);return(0,react.useImperativeHandle)(ref,(()=>({restart:()=>{iconRef.current&&(iconRef.current.dataset.resetAnimation="true",iconRef.current.offsetWidth,delete iconRef.current.dataset.resetAnimation)}}))),(0,jsx_runtime.jsx)(Icon,{ref:iconRef,once})}));try{LoadingSpinner.displayName="LoadingSpinner",LoadingSpinner.__docgenInfo={description:"",displayName:"LoadingSpinner",props:{size:{defaultValue:{value:"48"},description:"",name:"size",required:!1,type:{name:"number"}},padding:{defaultValue:{value:"16"},description:"",name:"padding",required:!1,type:{name:"number"}},transparent:{defaultValue:{value:"false"},description:"",name:"transparent",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/LoadingSpinner/index.tsx#LoadingSpinner"]={docgenInfo:LoadingSpinner.__docgenInfo,name:"LoadingSpinner",path:"packages/react/src/components/LoadingSpinner/index.tsx#LoadingSpinner"})}catch(__react_docgen_typescript_loader_error){}try{LoadingSpinnerIcon.displayName="LoadingSpinnerIcon",LoadingSpinnerIcon.__docgenInfo={description:"",displayName:"LoadingSpinnerIcon",props:{once:{defaultValue:{value:"false"},description:"",name:"once",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/LoadingSpinner/index.tsx#LoadingSpinnerIcon"]={docgenInfo:LoadingSpinnerIcon.__docgenInfo,name:"LoadingSpinnerIcon",path:"packages/react/src/components/LoadingSpinner/index.tsx#LoadingSpinnerIcon"})}catch(__react_docgen_typescript_loader_error){}const index_story={title:"LoadingSpinner",component:components_LoadingSpinner,tags:["skip-test"],parameters:{layout:"centered"}},Default={render:props=>(0,jsx_runtime.jsx)(components_LoadingSpinner,{...props})},Transparent={render:()=>(0,jsx_runtime.jsx)(components_LoadingSpinner,{transparent:!0})},Size={render:()=>(0,jsx_runtime.jsx)(components_LoadingSpinner,{size:128})},Padding={render:()=>(0,jsx_runtime.jsx)(components_LoadingSpinner,{padding:24})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: props => <LoadingSpinner {...props} />\n}",...Default.parameters?.docs?.source}}},Transparent.parameters={...Transparent.parameters,docs:{...Transparent.parameters?.docs,source:{originalSource:"{\n  render: () => <LoadingSpinner transparent />\n}",...Transparent.parameters?.docs?.source}}},Size.parameters={...Size.parameters,docs:{...Size.parameters?.docs,source:{originalSource:"{\n  render: () => <LoadingSpinner size={128} />\n}",...Size.parameters?.docs?.source}}},Padding.parameters={...Padding.parameters,docs:{...Padding.parameters?.docs,source:{originalSource:"{\n  render: () => <LoadingSpinner padding={24} />\n}",...Padding.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Transparent","Size","Padding"]}}]);
//# sourceMappingURL=react-src-components-LoadingSpinner-index-story.443ebf10.iframe.bundle.js.map