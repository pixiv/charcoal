"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[9354],{"./packages/react/src/components/Button/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Danger:()=>Danger,Default:()=>Default,Disabled:()=>Disabled,FullWidth:()=>FullWidth,IsActive:()=>IsActive,Navigation:()=>Navigation,Overlay:()=>Overlay,Primary:()=>Primary,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/components/Button/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Button",component:___WEBPACK_IMPORTED_MODULE_1__.Z},Default={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{...args,children:"Button"})},Primary={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{variant:"Primary",children:"Primary"})},Navigation={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{variant:"Navigation",children:"Navigation"})},Overlay={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{variant:"Overlay",children:"Overlay"})},Danger={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{variant:"Danger",children:"Danger"})},Small={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{size:"S",children:"Small"})},FullWidth={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{fullWidth:!0,children:"Full width"})},Disabled={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{disabled:!0,children:"Disabled"})},IsActive={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{isActive:!0,children:"Active"})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: args => <Button {...args}>Button</Button>\n}",...Default.parameters?.docs?.source}}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  render: () => <Button variant="Primary">Primary</Button>\n}',...Primary.parameters?.docs?.source}}},Navigation.parameters={...Navigation.parameters,docs:{...Navigation.parameters?.docs,source:{originalSource:'{\n  render: () => <Button variant="Navigation">Navigation</Button>\n}',...Navigation.parameters?.docs?.source}}},Overlay.parameters={...Overlay.parameters,docs:{...Overlay.parameters?.docs,source:{originalSource:'{\n  render: () => <Button variant="Overlay">Overlay</Button>\n}',...Overlay.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:'{\n  render: () => <Button variant="Danger">Danger</Button>\n}',...Danger.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:'{\n  render: () => <Button size="S">Small</Button>\n}',...Small.parameters?.docs?.source}}},FullWidth.parameters={...FullWidth.parameters,docs:{...FullWidth.parameters?.docs,source:{originalSource:"{\n  render: () => <Button fullWidth>Full width</Button>\n}",...FullWidth.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  render: () => <Button disabled>Disabled</Button>\n}",...Disabled.parameters?.docs?.source}}},IsActive.parameters={...IsActive.parameters,docs:{...IsActive.parameters?.docs,source:{originalSource:"{\n  render: () => <Button isActive>Active</Button>\n}",...IsActive.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Primary","Navigation","Overlay","Danger","Small","FullWidth","Disabled","IsActive"]},"./packages/react/src/_lib/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function unreachable(value){throw new Error(0===arguments.length?"unreachable":`unreachable (${JSON.stringify(value)})`)}function mergeRefs(...refs){return value=>{for(const ref of refs)"function"==typeof ref?ref(value):null!==ref&&(ref.current=value)}}function countCodePointsInString(string){return Array.from(string).length}__webpack_require__.d(__webpack_exports__,{$j:()=>countCodePointsInString,lq:()=>mergeRefs,t1:()=>unreachable})},"./packages/react/src/components/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Button});var react=__webpack_require__("./node_modules/react/index.js"),_lib=__webpack_require__("./packages/react/src/_lib/index.ts");function variantToFont(variant){switch(variant){case"Overlay":case"Primary":case"Navigation":case"Danger":return"text5";case"Default":return"text2";default:return(0,_lib.t1)(variant)}}try{variantToFont.displayName="variantToFont",variantToFont.__docgenInfo={description:"",displayName:"variantToFont",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Button/lib/variantToFont.tsx#variantToFont"]={docgenInfo:variantToFont.__docgenInfo,name:"variantToFont",path:"packages/react/src/components/Button/lib/variantToFont.tsx#variantToFont"})}catch(__react_docgen_typescript_loader_error){}function variantToBackground(variant){switch(variant){case"Overlay":return"surface4";case"Default":return"surface3";case"Primary":return"brand";case"Navigation":return"surface6";case"Danger":return"assertive";default:return(0,_lib.t1)(variant)}}try{variantToBackground.displayName="variantToBackground",variantToBackground.__docgenInfo={description:"",displayName:"variantToBackground",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Button/lib/variantToBackground.tsx#variantToBackground"]={docgenInfo:variantToBackground.__docgenInfo,name:"variantToBackground",path:"packages/react/src/components/Button/lib/variantToBackground.tsx#variantToBackground"})}catch(__react_docgen_typescript_loader_error){}var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Clickable=__webpack_require__("./packages/react/src/components/Clickable/index.tsx"),index_esm=__webpack_require__("./packages/styled/dist/index.esm.js");const horizontalPaddingSmall=styled_components_browser_esm.iv`
  padding-right: 16px;
  padding-left: 16px;
`,horizontalPaddingMedium=styled_components_browser_esm.iv`
  padding-right: 24px;
  padding-left: 24px;
`,StyledButton=(0,styled_components_browser_esm.ZP)(Clickable.Z)`
  width: ${p=>p.$fullWidth?"stretch":"min-content"};
  display: inline-grid;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  border-radius: 999999px;
  font-size: 14px;
  line-height: 22px;
  font-weight: bold;

  ${p=>"M"===p.$size?horizontalPaddingMedium:horizontalPaddingSmall}
  color: var(--charcoal-${p=>p.$color});
  background-color: var(--charcoal-${p=>p.$background});
  transition: 0.2s color, 0.2s background-color, 0.2s box-shadow;

  &:not(:disabled):not([aria-disabled]),
  &[aria-disabled='false'] {
    ${index_esm.L_}

    ${({$isActive:$active,$color,$background})=>$active?styled_components_browser_esm.iv`
            color: var(--charcoal-${$color}-press);
            background-color: var(--charcoal-${$background}-press);
          `:styled_components_browser_esm.iv`
            &:hover {
              color: var(--charcoal-${$color}-hover);
              background-color: var(--charcoal-${$background}-hover);
            }
            &:active {
              color: var(--charcoal-${$color}-press);
              background-color: var(--charcoal-${$background}-press);
            }
          `}
  }

  &:disabled,
  &[aria-disabled]:not([aria-disabled='false']) {
    opacity: 0.32;
  }
  height: ${p=>"M"===p.$size?40:32}px;
`;try{StyledButton.displayName="StyledButton",StyledButton.__docgenInfo={description:"",displayName:"StyledButton",props:{disabled:{defaultValue:null,description:"クリックの無効化",name:"disabled",required:!1,type:{name:"boolean"}},$isActive:{defaultValue:null,description:"",name:"$isActive",required:!0,type:{name:"boolean"}},$color:{defaultValue:null,description:"",name:"$color",required:!0,type:{name:"enum",value:[{value:'"text2"'},{value:'"text5"'}]}},$background:{defaultValue:null,description:"",name:"$background",required:!0,type:{name:"enum",value:[{value:'"assertive"'},{value:'"surface4"'},{value:'"surface3"'},{value:'"brand"'},{value:'"surface6"'}]}},$fullWidth:{defaultValue:null,description:"",name:"$fullWidth",required:!0,type:{name:"boolean"}},$size:{defaultValue:null,description:"",name:"$size",required:!0,type:{name:"enum",value:[{value:'"S"'},{value:'"M"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}},to:{defaultValue:null,description:"リンクのURL。指定するとbuttonタグではなくaタグとして描画される",name:"to",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Button/StyledButton.tsx#StyledButton"]={docgenInfo:StyledButton.__docgenInfo,name:"StyledButton",path:"packages/react/src/components/Button/StyledButton.tsx#StyledButton"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=(0,react.forwardRef)((function Button({children,variant="Default",size="M",fullWidth:fixed=!1,disabled=!1,isActive=!1,...rest},ref){return(0,jsx_runtime.jsx)(StyledButton,{...rest,disabled,$background:variantToBackground(variant),$color:variantToFont(variant),$size:size,$fullWidth:fixed,$isActive:isActive,ref,children})})),components_Button=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"Default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Overlay"'},{value:'"Primary"'},{value:'"Danger"'},{value:'"Navigation"'}]}},size:{defaultValue:{value:"M"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"S"'},{value:'"M"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},isActive:{defaultValue:{value:"false"},description:"",name:"isActive",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"クリックの無効化",name:"disabled",required:!1,type:{name:"boolean"}},to:{defaultValue:null,description:"リンクのURL。指定するとbuttonタグではなくaタグとして描画される",name:"to",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"packages/react/src/components/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/Clickable/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Clickable});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const DefaultLink=react.forwardRef((function DefaultLink({to,children,...rest},ref){return(0,jsx_runtime.jsx)("a",{href:to,ref,...rest,children})})),DefaultValue={Link:DefaultLink},ComponentAbstractionContext=react.createContext(DefaultValue);function ComponentAbstraction({children,components}){return(0,jsx_runtime.jsx)(ComponentAbstractionContext.Provider,{value:{...DefaultValue,...components},children})}ComponentAbstraction.displayName="ComponentAbstraction";try{ComponentAbstraction.displayName="ComponentAbstraction",ComponentAbstraction.__docgenInfo={description:"",displayName:"ComponentAbstraction",props:{components:{defaultValue:null,description:"",name:"components",required:!0,type:{name:"Partial<Components>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/core/ComponentAbstraction.tsx#ComponentAbstraction"]={docgenInfo:ComponentAbstraction.__docgenInfo,name:"ComponentAbstraction",path:"packages/react/src/core/ComponentAbstraction.tsx#ComponentAbstraction"})}catch(__react_docgen_typescript_loader_error){}try{DefaultLink.displayName="DefaultLink",DefaultLink.__docgenInfo={description:"",displayName:"DefaultLink",props:{to:{defaultValue:null,description:"リンクのURL",name:"to",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/core/ComponentAbstraction.tsx#DefaultLink"]={docgenInfo:DefaultLink.__docgenInfo,name:"DefaultLink",path:"packages/react/src/core/ComponentAbstraction.tsx#DefaultLink"})}catch(__react_docgen_typescript_loader_error){}var index_esm=__webpack_require__("./packages/utils/dist/index.esm.js");const Clickable=react.forwardRef((function Clickable(props,ref){const{Link}=function useComponentAbstraction(){return(0,react.useContext)(ComponentAbstractionContext)}(),isLink="to"in props,as=isLink?Link:"button",ariaDisabled=!(!isLink||!0!==props.disabled)||void 0;let rest=props;if(isLink){const{disabled,..._rest}=props;rest=_rest}return(0,jsx_runtime.jsx)(StyledClickableDiv,{...rest,ref,as,"aria-disabled":ariaDisabled})})),components_Clickable=Clickable,StyledClickableDiv=styled_components_browser_esm.ZP.div`
  cursor: pointer;

  ${index_esm.t0} {
    cursor: default;
  }

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
  text-decoration: none;

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
`;try{Clickable.displayName="Clickable",Clickable.__docgenInfo={description:"",displayName:"Clickable",props:{disabled:{defaultValue:null,description:"クリックの無効化",name:"disabled",required:!1,type:{name:"boolean"}},to:{defaultValue:null,description:"リンクのURL。指定するとbuttonタグではなくaタグとして描画される",name:"to",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Clickable/index.tsx#Clickable"]={docgenInfo:Clickable.__docgenInfo,name:"Clickable",path:"packages/react/src/components/Clickable/index.tsx#Clickable"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=react-src-components-Button-index-story.3a6aeb8b.iframe.bundle.js.map