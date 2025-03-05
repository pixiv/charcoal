"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[2125],{"./packages/react-sandbox/src/components/WithIcon/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>index_story});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/.pnpm/styled-components@5.3.11_@babel+core@7.26.8_react-dom@18.3.1_react@18.3.1__react-is@18.3.1_react@18.3.1/node_modules/styled-components/dist/styled-components.browser.esm.js"),hooks=__webpack_require__("./packages/react-sandbox/src/foundation/hooks.ts");const WithIcon=react.memo((function WithIcon({children,icon,show=!0,prefix:pre=!1,width,fit=!1,fixed=!1}){const node=fit?void 0===width?(0,jsx_runtime.jsx)(AutoWidthIconAnchor,{show,pre,children:icon}):(0,jsx_runtime.jsx)(IconAnchor,{width,show,pre,children:(0,jsx_runtime.jsx)(Icon,{children:icon})}):(0,jsx_runtime.jsx)(IconAnchorNaive,{show,pre,children:(0,jsx_runtime.jsx)(IconNaive,{children:icon})});return(0,jsx_runtime.jsxs)(Root,{children:[pre&&node,(0,jsx_runtime.jsx)(Text,{fixed,children}),!pre&&node]})})),Root=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
`,Text=styled_components_browser_esm.Ay.div`
  ${p=>!p.fixed&&styled_components_browser_esm.AH`
      min-width: 0;
      overflow: hidden;
    `}
  white-space: nowrap;
  text-overflow: ellipsis;
`;function AutoWidthIconAnchor({children,show,pre}){const ref=(0,react.useRef)(null),width=(0,hooks.Lh)(ref,[null])?.width??0;return(0,jsx_runtime.jsx)(IconAnchor,{width,show,pre,children:(0,jsx_runtime.jsx)(Icon,{ref,children})})}const forceCenteringCss=styled_components_browser_esm.AH`
  > svg {
    display: block;
  }
`,iconAnchorCss=styled_components_browser_esm.AH`
  ${p=>"collapse"===p.show?styled_components_browser_esm.AH`
          display: none;
        `:styled_components_browser_esm.AH`
          visibility: ${p.show?"visible":"hidden"};
        `};
  ${p=>p.pre?styled_components_browser_esm.AH`
          margin-right: 4px;
        `:styled_components_browser_esm.AH`
          margin-left: 4px;
        `}
`,IconAnchorNaive=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;

  ${iconAnchorCss}
`,IconNaive=styled_components_browser_esm.Ay.div`
  display: inline-flex;

  ${forceCenteringCss}
`,IconAnchor=styled_components_browser_esm.Ay.div`
  display: flex;
  position: relative;
  /* Iconをline-heightに関与させない */
  height: 0;
  /* 横方向の領域は確保する */
  width: ${p=>p.width}px;

  ${iconAnchorCss}
`,Icon=styled_components_browser_esm.Ay.div`
  display: inline-flex;
  position: absolute;
  transform: translateY(-50%);

  ${forceCenteringCss}
`,index_story={title:"react-sandbox/WithIcon",component:WithIcon,argTypes:{prefix:{type:"boolean"},fit:{type:"boolean"},width:{type:"number"},fixed:{type:"boolean"}}},Default={render:props=>(0,jsx_runtime.jsx)(WithIcon,{...props,icon:(0,jsx_runtime.jsx)("pixiv-icon",{name:"16/Like"}),children:"children"})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: props => {\n    return <WithIcon {...props} icon={<pixiv-icon name="16/Like" />}>\n        children\n      </WithIcon>;\n  }\n}',...Default.parameters?.docs?.source}}}},"./packages/react-sandbox/src/foundation/hooks.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Lh:()=>useElementSize,oZ:()=>useDebounceAnimationState});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");__webpack_require__("./node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js");function measure(ref){return null!==ref?ref.getBoundingClientRect():void 0}function useElementSize(ref,deps=[]){const[size,setSize]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(((state,next)=>void 0===state||void 0===next?next:state.height===next.height&&state.width===next.width?state:next),void 0),[watch,setWatch]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{if(null===watch)return;const observer=new ResizeObserver((()=>{const newSize=measure(watch);setSize(newSize)}));return observer.observe(watch),()=>{observer.unobserve(watch),setSize(void 0)}}),[watch]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{ref.current!==watch&&setWatch(ref.current)})),(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{deps.length>0&&setSize(measure(ref.current))}),deps),(0,react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue)(size),size}function useDebounceAnimationState(defaultValue){const[state,setState]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue),timer=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return[state,(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((value,force=!1)=>{force?setState(value):void 0===timer.current&&(timer.current=requestAnimationFrame((()=>{setState(value),void 0!==timer.current&&(timer.current=void 0)})))}),[])]}}}]);
//# sourceMappingURL=react-sandbox-src-components-WithIcon-index-story.6b61a7a6.iframe.bundle.js.map