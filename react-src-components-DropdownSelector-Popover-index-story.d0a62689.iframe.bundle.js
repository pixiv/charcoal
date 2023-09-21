"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[6695],{"./packages/react/src/components/DropdownSelector/Popover/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/components/DropdownSelector/Popover/index.tsx"),_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/components/Button/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"DropdownSelector/Popover",component:___WEBPACK_IMPORTED_MODULE_2__.Z};function Base(props){const[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),triggerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.Z,{onClick:()=>{setIsOpen(!0)},style:props.style,ref:triggerRef,children:"button"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.Z,{isOpen,onClose:()=>setIsOpen(!1),triggerRef,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{margin:"8px 16px"},children:"Hello"})})]})}const Basic=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Base,{style:{position:"absolute"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Base,{style:{position:"absolute",right:8}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Base,{style:{position:"absolute",bottom:8}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Base,{style:{position:"absolute",right:8,bottom:8}})]});Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"() => {\n  return <>\n      <Base style={{\n      position: 'absolute'\n    }} />\n      <Base style={{\n      position: 'absolute',\n      right: 8\n    }} />\n      <Base style={{\n      position: 'absolute',\n      bottom: 8\n    }} />\n      <Base style={{\n      position: 'absolute',\n      right: 8,\n      bottom: 8\n    }} />\n    </>;\n}",...Basic.parameters?.docs?.source}}};const __namedExportsOrder=["Basic"]},"./packages/react/src/_lib/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function unreachable(value){throw new Error(0===arguments.length?"unreachable":`unreachable (${JSON.stringify(value)})`)}function mergeRefs(...refs){return value=>{for(const ref of refs)"function"==typeof ref?ref(value):null!==ref&&(ref.current=value)}}function countCodePointsInString(string){return Array.from(string).length}__webpack_require__.d(__webpack_exports__,{$j:()=>countCodePointsInString,lq:()=>mergeRefs,t1:()=>unreachable})},"./packages/react/src/components/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_lib__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/react/src/_lib/index.ts"),_styled__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/styled.ts"),_Clickable__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/components/Clickable/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function Button({children,variant="Default",size="M",fullWidth:fixed=!1,disabled=!1,...rest},ref){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledButton,{...rest,disabled,$variant:variant,$size:size,$fullWidth:fixed,ref,children})})),__WEBPACK_DEFAULT_EXPORT__=Button,StyledButton=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(_Clickable__WEBPACK_IMPORTED_MODULE_3__.Z)`
  width: ${p=>p.$fullWidth?"stretch":"min-content"};
  display: inline-grid;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;

  ${p=>(0,_styled__WEBPACK_IMPORTED_MODULE_4__.r)((o=>[o.font[variantToFont(p.$variant)].hover.press,o.bg[variantToBackground(p.$variant)].hover.press,o.typography(14).bold.preserveHalfLeading,o.padding.horizontal("M"===p.$size?24:16),o.disabled,o.borderRadius("oval"),o.outline.default.focus]))}

  /* よく考えたらheight=32って定義が存在しないな... */
  height: ${p=>"M"===p.$size?40:32}px;
`;function variantToBackground(variant){switch(variant){case"Overlay":return"surface4";case"Default":return"surface3";case"Primary":return"brand";case"Navigation":return"surface6";case"Danger":return"assertive";default:return(0,_lib__WEBPACK_IMPORTED_MODULE_5__.t1)(variant)}}function variantToFont(variant){switch(variant){case"Overlay":case"Primary":case"Navigation":case"Danger":return"text5";case"Default":return"text2";default:return(0,_lib__WEBPACK_IMPORTED_MODULE_5__.t1)(variant)}}try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"Default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Overlay"'},{value:'"Primary"'},{value:'"Danger"'},{value:'"Navigation"'}]}},size:{defaultValue:{value:"M"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"S"'},{value:'"M"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"クリックの無効化",name:"disabled",required:!1,type:{name:"boolean"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}},to:{defaultValue:null,description:"リンクのURL。指定するとbuttonタグではなくaタグとして描画される",name:"to",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"packages/react/src/components/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/Clickable/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Clickable});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const DefaultLink=react.forwardRef((function DefaultLink({to,children,...rest},ref){return(0,jsx_runtime.jsx)("a",{href:to,ref,...rest,children})})),DefaultValue={Link:DefaultLink},ComponentAbstractionContext=react.createContext(DefaultValue);function ComponentAbstraction({children,components}){return(0,jsx_runtime.jsx)(ComponentAbstractionContext.Provider,{value:{...DefaultValue,...components},children})}ComponentAbstraction.displayName="ComponentAbstraction";try{ComponentAbstraction.displayName="ComponentAbstraction",ComponentAbstraction.__docgenInfo={description:"",displayName:"ComponentAbstraction",props:{components:{defaultValue:null,description:"",name:"components",required:!0,type:{name:"Partial<Components>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/core/ComponentAbstraction.tsx#ComponentAbstraction"]={docgenInfo:ComponentAbstraction.__docgenInfo,name:"ComponentAbstraction",path:"packages/react/src/core/ComponentAbstraction.tsx#ComponentAbstraction"})}catch(__react_docgen_typescript_loader_error){}try{DefaultLink.displayName="DefaultLink",DefaultLink.__docgenInfo={description:"",displayName:"DefaultLink",props:{to:{defaultValue:null,description:"リンクのURL",name:"to",required:!0,type:{name:"string"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/core/ComponentAbstraction.tsx#DefaultLink"]={docgenInfo:DefaultLink.__docgenInfo,name:"DefaultLink",path:"packages/react/src/core/ComponentAbstraction.tsx#DefaultLink"})}catch(__react_docgen_typescript_loader_error){}var index_esm=__webpack_require__("./packages/utils/dist/index.esm.js");const Clickable=react.forwardRef((function Clickable(props,ref){const{Link}=function useComponentAbstraction(){return(0,react.useContext)(ComponentAbstractionContext)}();if("to"in props){const{onClick,disabled=!1,...rest}=props;return(0,jsx_runtime.jsx)(A,{...rest,as:disabled?void 0:Link,onClick:disabled?void 0:onClick,"aria-disabled":disabled,ref})}return(0,jsx_runtime.jsx)(Button,{...props,ref})})),components_Clickable=Clickable,clickableCss=styled_components_browser_esm.iv`
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
`;try{Clickable.displayName="Clickable",Clickable.__docgenInfo={description:"",displayName:"Clickable",props:{disabled:{defaultValue:null,description:"クリックの無効化",name:"disabled",required:!1,type:{name:"boolean"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}},to:{defaultValue:null,description:"リンクのURL。指定するとbuttonタグではなくaタグとして描画される",name:"to",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Clickable/index.tsx#Clickable"]={docgenInfo:Clickable.__docgenInfo,name:"Clickable",path:"packages/react/src/components/Clickable/index.tsx#Clickable"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/DropdownSelector/Popover/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Popover});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_react_aria_overlays__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@react-aria/overlays/dist/import.mjs"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_styled__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/styled.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const _empty=()=>null;function Popover(props){const defaultPopoverRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),finalPopoverRef=void 0===props.popoverRef?defaultPopoverRef:props.popoverRef,{popoverProps,underlayProps}=(0,_react_aria_overlays__WEBPACK_IMPORTED_MODULE_2__.Sv)({triggerRef:props.triggerRef,popoverRef:finalPopoverRef,containerPadding:16},{close:props.onClose,isOpen:props.isOpen,open:_empty,setOpen:_empty,toggle:_empty});return props.isOpen?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_react_aria_overlays__WEBPACK_IMPORTED_MODULE_2__.aV,{portalContainer:document.body,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{...underlayProps,style:{position:"fixed",inset:0}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(DropdownPopoverDiv,{...popoverProps,ref:finalPopoverRef,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_react_aria_overlays__WEBPACK_IMPORTED_MODULE_2__.U4,{onDismiss:()=>props.onClose()}),props.children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_react_aria_overlays__WEBPACK_IMPORTED_MODULE_2__.U4,{onDismiss:()=>props.onClose()})]})]}):null}Popover.displayName="Popover";const DropdownPopoverDiv=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  margin: 4px 0;
  list-style: none;
  overflow: auto;
  max-height: inherit;

  ${(0,_styled__WEBPACK_IMPORTED_MODULE_4__.r)((o=>[o.bg.background1,o.border.default,o.borderRadius(8),o.padding.vertical(8)]))}
`;try{Popover.displayName="Popover",Popover.__docgenInfo={description:"画面の全面に動的に開くことができるコンテナ要素\n外の要素をクリックしたり、内部からフォーカスを移動した場合に自動的に閉じる\n\ntriggerRefの付近に画面内に収まるように表示される",displayName:"Popover",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},triggerRef:{defaultValue:null,description:"",name:"triggerRef",required:!0,type:{name:"RefObject<Element>"}},popoverRef:{defaultValue:null,description:"",name:"popoverRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/DropdownSelector/Popover/index.tsx#Popover"]={docgenInfo:Popover.__docgenInfo,name:"Popover",path:"packages/react/src/components/DropdownSelector/Popover/index.tsx#Popover"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/styled.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>theme});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const theme=(0,__webpack_require__("./packages/styled/dist/index.esm.js").jG)(styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP)}}]);
//# sourceMappingURL=react-src-components-DropdownSelector-Popover-index-story.d0a62689.iframe.bundle.js.map