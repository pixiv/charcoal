"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[3188],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_AY7I2SME.aD});var chunk_AY7I2SME=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs")},"./packages/react-sandbox/src/components/SwitchCheckbox/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Off:()=>Off,On:()=>On,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react-sandbox/src/components/SwitchCheckbox/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Sandbox/Selection Control/SwitchCheckbox",component:___WEBPACK_IMPORTED_MODULE_3__.Z},Default=()=>{const checked=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("checked",!1),disabled=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("disabled",!1),flex=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("flex",!1),rowReverse=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("rowReverse",!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Z,{defaultChecked:checked,flex,disabled,rowReverse,onChange:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("onChange"),children:"label"})};Default.displayName="Default";const On=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Z,{checked:!0});On.displayName="On";const Off=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Z,{checked:!1});Off.displayName="Off";const Disabled=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Z,{checked:!0,disabled:!0});Disabled.displayName="Disabled",Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => {\n  const checked = boolean('checked', false);\n  const disabled = boolean('disabled', false);\n  const flex = boolean('flex', false);\n  const rowReverse = boolean('rowReverse', false);\n  return <SwitchCheckbox defaultChecked={checked} flex={flex} disabled={disabled} rowReverse={rowReverse} onChange={action('onChange')}>\n      label\n    </SwitchCheckbox>;\n}",...Default.parameters?.docs?.source}}},On.parameters={...On.parameters,docs:{...On.parameters?.docs,source:{originalSource:"() => <SwitchCheckbox checked />",...On.parameters?.docs?.source}}},Off.parameters={...Off.parameters,docs:{...Off.parameters?.docs,source:{originalSource:"() => <SwitchCheckbox checked={false} />",...Off.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"() => <SwitchCheckbox checked disabled />",...Disabled.parameters?.docs?.source}}};const __namedExportsOrder=["Default","On","Off","Disabled"]},"./packages/react-sandbox/src/components/SwitchCheckbox/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/utils/dist/index.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function SwitchCheckbox({gtmClass,flex=!1,rowReverse=!1,children,disabled,...props},ref){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Label,{className:void 0!==gtmClass?`gtm-${gtmClass}`:"",flex,rowReverse,"aria-disabled":disabled,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(SwitchOuter,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SwitchInput,{...props,disabled,ref}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SwitchInner,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SwitchInnerKnob,{})})]}),null!=children&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Children,{rowReverse,children})]})})),Children=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.span`
  ${p=>p.rowReverse?styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
          margin-right: 8px;
        `:styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
          margin-left: 8px;
        `}
`,Label=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.label`
  display: inline-flex;
  align-items: center;
  ${({flex})=>flex&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      display: flex;
      justify-content: space-between;
    `}
  ${({rowReverse})=>styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      flex-direction: ${rowReverse?"row-reverse":"row"};
    `}
  cursor: pointer;
  outline: 0;

  &[aria-disabled='true'] {
    cursor: auto;
  }
`,SwitchOuter=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.span`
  display: inline-flex;
  position: relative;
  z-index: 0;
`,SwitchInner=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  position: relative;
  box-sizing: border-box;
  width: 28px;
  height: 16px;
  border-radius: 16px;
  border: 2px solid transparent;
  background: ${({theme})=>theme.color.text4};
  transition: box-shadow 0.2s, background-color 0.2s;
`,SwitchInnerKnob=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 12px;
  height: 12px;
  background-color: ${({theme})=>theme.color.text5};
  border-radius: 50%;
  transform: translateX(0);
  transition: transform 0.2s;
`,SwitchInput=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.input.attrs({type:"checkbox"})`
  position: absolute;
  /* NOTE: this is contained by the GraphicCheckboxOuter */
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* just to control the clickable area if used standalone */
  border-radius: 16px;
  opacity: 0;
  appearance: none;
  outline: none;
  cursor: pointer;

  &:checked {
    ~ ${SwitchInner} {
      background-color: ${({theme})=>theme.color.brand};

      ${SwitchInnerKnob} {
        transform: translateX(12px);
      }
    }
  }

  &:disabled {
    cursor: auto;

    ~ ${SwitchInner} {
      opacity: ${({theme})=>theme.elementEffect.disabled.opacity};
    }
  }

  &:not(:disabled):focus {
    ~ ${SwitchInner} {
      box-shadow: 0 0 0 4px
        ${({theme})=>(0,_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_3__.nC)(theme.color.brand,theme.elementEffect.disabled)};
    }
  }
`;try{SwitchCheckbox.displayName="SwitchCheckbox",SwitchCheckbox.__docgenInfo={description:"",displayName:"SwitchCheckbox",props:{gtmClass:{defaultValue:null,description:"",name:"gtmClass",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"boolean"}},rowReverse:{defaultValue:null,description:"",name:"rowReverse",required:!1,type:{name:"boolean"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react-sandbox/src/components/SwitchCheckbox/index.tsx#SwitchCheckbox"]={docgenInfo:SwitchCheckbox.__docgenInfo,name:"SwitchCheckbox",path:"packages/react-sandbox/src/components/SwitchCheckbox/index.tsx#SwitchCheckbox"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=react-sandbox-src-components-SwitchCheckbox-index-story.9c4269e0.iframe.bundle.js.map