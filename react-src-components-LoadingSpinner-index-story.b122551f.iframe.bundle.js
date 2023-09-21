"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[922],{"./packages/react/src/components/LoadingSpinner/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Icon:()=>index_story_Icon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_story});var dist=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled=__webpack_require__("./packages/react/src/styled.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const LoadingSpinner=(0,react.forwardRef)((function LoadingSpinnerInner({size=48,padding=16,transparent=!1,className},ref){return(0,jsx_runtime.jsx)(LoadingSpinnerRoot,{size,padding,transparent,className,ref,children:(0,jsx_runtime.jsx)(LoadingSpinnerIcon,{})})})),components_LoadingSpinner=(0,react.memo)(LoadingSpinner),LoadingSpinnerRoot=styled_components_browser_esm.ZP.div.attrs({role:"progressbar"})`
  box-sizing: content-box;
  margin: auto;
  padding: ${props=>props.padding}px;
  border-radius: 8px;
  font-size: ${props=>props.size}px;
  width: ${props=>props.size}px;
  height: ${props=>props.size}px;
  opacity: 0.84;
  ${({transparent})=>(0,styled.r)((o=>[o.font.text4,transparent?o.bg.transparent:o.bg.background1]))}
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
`,LoadingSpinnerIcon=(0,react.forwardRef)((function LoadingSpinnerIcon({once=!1},ref){const iconRef=(0,react.useRef)(null);return(0,react.useImperativeHandle)(ref,(()=>({restart:()=>{iconRef.current&&(iconRef.current.dataset.resetAnimation="true",iconRef.current.offsetWidth,delete iconRef.current.dataset.resetAnimation)}}))),(0,jsx_runtime.jsx)(Icon,{ref:iconRef,once})}));try{LoadingSpinner.displayName="LoadingSpinner",LoadingSpinner.__docgenInfo={description:"",displayName:"LoadingSpinner",props:{size:{defaultValue:{value:"48"},description:"",name:"size",required:!1,type:{name:"number"}},padding:{defaultValue:{value:"16"},description:"",name:"padding",required:!1,type:{name:"number"}},transparent:{defaultValue:{value:"false"},description:"",name:"transparent",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/LoadingSpinner/index.tsx#LoadingSpinner"]={docgenInfo:LoadingSpinner.__docgenInfo,name:"LoadingSpinner",path:"packages/react/src/components/LoadingSpinner/index.tsx#LoadingSpinner"})}catch(__react_docgen_typescript_loader_error){}try{LoadingSpinnerIcon.displayName="LoadingSpinnerIcon",LoadingSpinnerIcon.__docgenInfo={description:"",displayName:"LoadingSpinnerIcon",props:{once:{defaultValue:{value:"false"},description:"",name:"once",required:!1,type:{name:"boolean"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/LoadingSpinner/index.tsx#LoadingSpinnerIcon"]={docgenInfo:LoadingSpinnerIcon.__docgenInfo,name:"LoadingSpinnerIcon",path:"packages/react/src/components/LoadingSpinner/index.tsx#LoadingSpinnerIcon"})}catch(__react_docgen_typescript_loader_error){}const index_story={title:"LoadingSpinner",component:components_LoadingSpinner,decorators:[dist.withKnobs]};function Basic(){const size=(0,dist.number)("size",48),padding=(0,dist.number)("padding",16),transparent=(0,dist.boolean)("transparent",!1),className=(0,dist.text)("className","basic");return(0,jsx_runtime.jsx)(components_LoadingSpinner,{size,padding,transparent,className})}function index_story_Icon(){return(0,jsx_runtime.jsx)(IconComponent,{})}function IconComponent(){const size=(0,dist.number)("size",12),color=(0,dist.text)("color","#B1CC29"),once=(0,dist.boolean)("once",!1);(0,dist.button)("restart",(()=>ref.current?.restart()));const ref=(0,react.useRef)(null);return(0,jsx_runtime.jsx)("div",{css:`\n        font-size: ${size}px;\n        color: ${color};\n      `,children:(0,jsx_runtime.jsx)(LoadingSpinnerIcon,{once,ref})})}Basic.displayName="Basic",index_story_Icon.displayName="Icon",IconComponent.displayName="IconComponent",Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"function Basic() {\n  const size = number('size', 48);\n  const padding = number('padding', 16);\n  const transparent = boolean('transparent', false);\n  const className = text('className', 'basic');\n  return <LoadingSpinner size={size} padding={padding} transparent={transparent} className={className} />;\n}",...Basic.parameters?.docs?.source}}},index_story_Icon.parameters={...index_story_Icon.parameters,docs:{...index_story_Icon.parameters?.docs,source:{originalSource:"function Icon() {\n  return <IconComponent />;\n}",...index_story_Icon.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","Icon"]},"./packages/react/src/styled.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>theme});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const theme=(0,__webpack_require__("./packages/styled/dist/index.esm.js").jG)(styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP)}}]);
//# sourceMappingURL=react-src-components-LoadingSpinner-index-story.b122551f.iframe.bundle.js.map