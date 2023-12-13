"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[4804],{"./node_modules/@react-stately/utils/dist/import.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{zk:()=>$458b0a5536c1a7cf$export$40bfa8c7b0832715});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function $458b0a5536c1a7cf$export$40bfa8c7b0832715(value,defaultValue,onChange){let[stateValue,setStateValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value||defaultValue),isControlledRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(void 0!==value),isControlled=void 0!==value;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{let wasControlled=isControlledRef.current;wasControlled!==isControlled&&console.warn(`WARN: A component changed from ${wasControlled?"controlled":"uncontrolled"} to ${isControlled?"controlled":"uncontrolled"}.`),isControlledRef.current=isControlled}),[isControlled]);let currentValue=isControlled?value:stateValue,setValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((value,...args)=>{let onChangeCaller=(value,...onChangeArgs)=>{onChange&&(Object.is(currentValue,value)||onChange(value,...onChangeArgs)),isControlled||(currentValue=value)};if("function"==typeof value){console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),setStateValue(((oldValue,...functionArgs)=>{let interceptedValue=value(isControlled?currentValue:oldValue,...functionArgs);return onChangeCaller(interceptedValue,...args),isControlled?oldValue:interceptedValue}))}else isControlled||setStateValue(value),onChangeCaller(value,...args)}),[isControlled,currentValue,onChange]);return[currentValue,setValue]}},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_AY7I2SME.aD});var chunk_AY7I2SME=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs")},"./packages/react/src/components/Switch/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Labelled:()=>Labelled,Playground:()=>Playground,Unlabelled:()=>Unlabelled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/components/Switch/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Switch",component:___WEBPACK_IMPORTED_MODULE_3__.Z},Playground=props=>{const[checked,setChecked]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Z,{...props,name:"name",onChange:v=>{setChecked(v),(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("onChange")},checked,children:"選択する"})})};Playground.displayName="Playground";const Labelled=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Z,{...props,name:"name",onChange:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("onChange"),children:"選択する"})});Labelled.displayName="Labelled",Labelled.args={checked:!1,disabled:!1};const Unlabelled=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Z,{...props,name:"name",label:"label",onChange:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("onChange")})});Unlabelled.displayName="Unlabelled",Unlabelled.args={checked:!1,disabled:!1},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"(props: Props) => {\n  const [checked, setChecked] = useState(false);\n  return <div>\n      <Switch {...props} name=\"name\" onChange={v => {\n      setChecked(v);\n      action('onChange');\n    }} checked={checked}>\n        選択する\n      </Switch>\n    </div>;\n}",...Playground.parameters?.docs?.source}}},Labelled.parameters={...Labelled.parameters,docs:{...Labelled.parameters?.docs,source:{originalSource:"(props: Props) => <div>\n    <Switch {...props} name=\"name\" onChange={action('onChange')}>\n      選択する\n    </Switch>\n  </div>",...Labelled.parameters?.docs?.source}}},Unlabelled.parameters={...Unlabelled.parameters,docs:{...Unlabelled.parameters?.docs,source:{originalSource:'(props: Props) => <div>\n    <Switch {...props} name="name" label="label" onChange={action(\'onChange\')} />\n  </div>',...Unlabelled.parameters?.docs?.source}}};const __namedExportsOrder=["Playground","Labelled","Unlabelled"]},"./packages/react/src/components/Switch/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Switch});var dist_import=__webpack_require__("./node_modules/@react-aria/utils/dist/import.mjs"),focus_dist_import=__webpack_require__("./node_modules/@react-aria/focus/dist/import.mjs"),interactions_dist_import=__webpack_require__("./node_modules/@react-aria/interactions/dist/import.mjs");function $d2c8e2b0480f3f34$export$cbe85ee05b554577(props,state,ref){let{isDisabled=!1,isRequired,isReadOnly,value,name,children,"aria-label":ariaLabel,"aria-labelledby":ariaLabelledby,validationState="valid"}=props;null!=children||(null!=ariaLabel||null!=ariaLabelledby)||console.warn("If you do not provide children, you must specify an aria-label for accessibility");let{pressProps}=(0,interactions_dist_import.r7)({isDisabled}),{focusableProps}=(0,focus_dist_import.kc)(props,ref),interactions=(0,dist_import.dG)(pressProps,focusableProps),domProps=(0,dist_import.zL)(props,{labelable:!0});return{inputProps:(0,dist_import.dG)(domProps,{"aria-invalid":"invalid"===validationState||void 0,"aria-errormessage":props["aria-errormessage"],"aria-controls":props["aria-controls"],"aria-readonly":isReadOnly||void 0,"aria-required":isRequired||void 0,onChange:e=>{e.stopPropagation(),state.setSelected(e.target.checked)},disabled:isDisabled,...null==value?{}:{value},name,type:"checkbox",...interactions})}}function $b418ec0c85c52f27$export$d853f7095ae95f88(props,state,ref){let{inputProps}=$d2c8e2b0480f3f34$export$cbe85ee05b554577(props,state,ref),{isSelected}=state;return{inputProps:{...inputProps,role:"switch",checked:isSelected}}}var react=__webpack_require__("./node_modules/react/index.js"),toggle_dist_import=__webpack_require__("./node_modules/react-stately/node_modules/@react-stately/toggle/dist/import.mjs"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled=__webpack_require__("./packages/react/src/styled.ts"),index_esm=__webpack_require__("./packages/utils/dist/index.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SwitchCheckbox=(0,react.forwardRef)((function SwitchCheckboxInner(props,external){const{disabled,className}=props,ariaSwitchProps=(0,react.useMemo)((()=>({...props,"aria-label":"children"in props?void 0:props.label,isDisabled:props.disabled,isSelected:props.checked})),[props]),state=(0,toggle_dist_import.l)(ariaSwitchProps),ref=(0,dist_import.B3)(external),{inputProps:{className:_className,type:_type,...rest}}=$b418ec0c85c52f27$export$d853f7095ae95f88(ariaSwitchProps,state,ref);return(0,jsx_runtime.jsxs)(Label,{className,"aria-disabled":disabled,children:[(0,jsx_runtime.jsx)(SwitchInput,{...rest,ref}),"children"in props?(0,jsx_runtime.jsx)(LabelInner,{children:props.children}):void 0]})})),Switch=(0,react.memo)(SwitchCheckbox),Label=styled_components_browser_esm.ZP.label`
  display: inline-grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  cursor: pointer;
  outline: 0;

  ${(0,styled.r)((o=>o.disabled))}

  :active > input {
    box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);
  }

  ${index_esm.t0} {
    cursor: default;
  }
`,LabelInner=styled_components_browser_esm.ZP.div`
  ${(0,styled.r)((o=>[o.typography(14).preserveHalfLeading,o.font.text2,o.margin.left(4)]))}
`,SwitchInput=styled_components_browser_esm.ZP.input.attrs({type:"checkbox"})`
  appearance: none;
  display: inline-flex;
  position: relative;
  box-sizing: border-box;
  width: 28px;
  border: 2px solid transparent;

  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  cursor: inherit;

  outline: none;
  border-radius: 16px;
  height: 16px;
  margin: 0;
  background-color: var(--charcoal-text4);
  :hover {
    background-color: var(--charcoal-text4-hover);
  }
  :active {
    background-color: var(--charcoal-text4-press);
  }
  :focus {
    box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);
  }

  &::after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 12px;
    height: 12px;
    transform: translateX(0);
    transition: transform 0.2s;
    border-radius: 1024px;
    background-color: var(--charcoal-text5);
    :hover {
      background-color: var(--charcoal-text5-hover);
    }
    :active {
      background-color: var(--charcoal-text5-press);
    }
  }

  &:checked {
    background-color: var(--charcoal-brand);
    :hover {
      background-color: var(--charcoal-brand-hover);
    }
    :active {
      background-color: var(--charcoal-brand-press);
    }
    &::after {
      transform: translateX(12px);
      transition: transform 0.2s;
    }
  }
`;try{SwitchCheckbox.displayName="SwitchCheckbox",SwitchCheckbox.__docgenInfo={description:"",displayName:"SwitchCheckbox",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(checked: boolean) => void"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Switch/index.tsx#SwitchCheckbox"]={docgenInfo:SwitchCheckbox.__docgenInfo,name:"SwitchCheckbox",path:"packages/react/src/components/Switch/index.tsx#SwitchCheckbox"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/styled.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>theme});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const theme=(0,__webpack_require__("./packages/styled/dist/index.esm.js").jG)(styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP)},"./node_modules/react-stately/node_modules/@react-stately/toggle/dist/import.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>$3017fa7ffdddec74$export$8042c6c013fd5226});var _react_stately_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-stately/utils/dist/import.mjs");function $3017fa7ffdddec74$export$8042c6c013fd5226(props={}){let{isReadOnly}=props,[isSelected,setSelected]=(0,_react_stately_utils__WEBPACK_IMPORTED_MODULE_0__.zk)(props.isSelected,props.defaultSelected||!1,props.onChange);return{isSelected,setSelected:function updateSelected(value){isReadOnly||setSelected(value)},toggle:function toggleState(){isReadOnly||setSelected(!isSelected)}}}}}]);
//# sourceMappingURL=react-src-components-Switch-index-story.7f47b257.iframe.bundle.js.map