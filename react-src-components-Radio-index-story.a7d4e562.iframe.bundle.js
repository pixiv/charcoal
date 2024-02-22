"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[6258],{"./packages/react/src/components/Radio/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Disabled:()=>Disabled,Invalid:()=>Invalid,PartialDisabled:()=>PartialDisabled,Readonly:()=>Readonly,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_story});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),warning=__webpack_require__("./node_modules/warning/warning.js"),warning_default=__webpack_require__.n(warning),index_esm=__webpack_require__("./packages/styled/dist/index.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Radio=(0,react.forwardRef)((function RadioInner({value,disabled=!1,children,className},ref){const{name,selected,disabled:isParentDisabled,readonly,invalid,onChange}=(0,react.useContext)(RadioGroupContext);warning_default()(void 0!==name,'"name" is not Provided for <Radio>. Perhaps you forgot to wrap with <RadioGroup> ?');const isSelected=value===selected,isDisabled=disabled||isParentDisabled,isReadonly=readonly&&!isSelected,handleChange=(0,react.useCallback)((e=>{onChange(e.currentTarget.value)}),[onChange]);return(0,jsx_runtime.jsxs)(RadioRoot,{"aria-disabled":isDisabled||isReadonly,className,children:[(0,jsx_runtime.jsx)(RadioInput,{name,value,checked:isSelected,"aria-invalid":invalid,onChange:handleChange,disabled:isDisabled||isReadonly,ref}),null!=children&&(0,jsx_runtime.jsx)(RadioLabel,{children})]})})),components_Radio=(0,react.memo)(Radio),RadioRoot=styled_components_browser_esm.ZP.label`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 4px;
  align-items: center;
  cursor: pointer;

  &[aria-disabled]:not([aria-disabled='false']) {
    opacity: 0.32;
    cursor: default;
  }
`,RadioInput=styled_components_browser_esm.ZP.input.attrs({type:"radio"})`
  /** Make prior to browser default style */
  &[type='radio'] {
    appearance: none;
    display: block;
    box-sizing: border-box;

    margin: 0;
    padding: 6px;

    width: 20px;
    height: 20px;
    cursor: pointer;
    border-radius: 999999px;
    background-color: var(--charcoal-surface1);
    transition: 0.2s background-color, 0.2s box-shadow;

    :disabled {
      cursor: default;
    }

    &:not(:disabled):not([aria-disabled]),
    &[aria-disabled='false'] {
      &:hover {
        background-color: var(--charcoal-surface1-hover);
      }
      &:active {
        background-color: var(--charcoal-surface1-press);
      }
      ${index_esm.L_}
      &[aria-invalid='true'] {
        box-shadow: 0 0 0 4px rgba(255, 43, 0, 0.32);
        &:focus {
          box-shadow: 0 0 0 4px rgba(255, 43, 0, 0.32);
        }
      }
    }

    &:not(:checked) {
      border-width: 2px;
      border-style: solid;
      border-color: var(--charcoal-text3);
    }

    &:checked {
      background-color: var(--charcoal-brand);
      &::after {
        content: '';
        display: block;
        width: 8px;
        height: 8px;
        pointer-events: none;
        background-color: var(--charcoal-text5);
        border-radius: 999999px;
        transition: 0.2s background-color, 0.2s box-shadow;
      }

      &:not(:disabled):not([aria-disabled]),
      &[aria-disabled='false'] {
        &:hover {
          background-color: var(--charcoal-brand-hover);
          &::after {
            background-color: var(--charcoal-text5-hover);
          }
        }
        &:active {
          background-color: var(--charcoal-brand-press);
          &::after {
            background-color: var(--charcoal-text5-press);
          }
        }
      }
    }
  }
`,RadioLabel=styled_components_browser_esm.ZP.div`
  font-size: 14px;
  line-height: 22px;
  display: flow-root;
  color: var(--charcoal-text2);

  &::before {
    display: block;
    width: 0;
    height: 0;
    content: '';
    margin-top: -4px;
  }
  &::after {
    display: block;
    width: 0;
    height: 0;
    content: '';
    margin-bottom: -4px;
  }
`,StyledRadioGroup=styled_components_browser_esm.ZP.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;
`,RadioGroupContext=react.createContext({name:void 0,selected:void 0,disabled:!1,readonly:!1,invalid:!1,onChange(){throw new Error("Cannot find onChange() handler. Perhaps you forgot to wrap with <RadioGroup> ?")}});function RadioGroup({className,value,label,name,onChange,disabled,readonly,invalid,children}){const handleChange=(0,react.useCallback)((next=>{onChange(next)}),[onChange]);return(0,jsx_runtime.jsx)(RadioGroupContext.Provider,{value:{name,selected:value,disabled:disabled??!1,readonly:readonly??!1,invalid:invalid??!1,onChange:handleChange},children:(0,jsx_runtime.jsx)(StyledRadioGroup,{role:"radiogroup","aria-orientation":"vertical","aria-label":label,"aria-invalid":invalid,className,children})})}RadioGroup.displayName="RadioGroup";try{RadioGroup.displayName="RadioGroup",RadioGroup.__docgenInfo={description:"",displayName:"RadioGroup",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(next: string) => void"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},readonly:{defaultValue:null,description:"",name:"readonly",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Radio/index.tsx#RadioGroup"]={docgenInfo:RadioGroup.__docgenInfo,name:"RadioGroup",path:"packages/react/src/components/Radio/index.tsx#RadioGroup"})}catch(__react_docgen_typescript_loader_error){}try{Radio.displayName="Radio",Radio.__docgenInfo={description:"",displayName:"Radio",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Radio/index.tsx#Radio"]={docgenInfo:Radio.__docgenInfo,name:"Radio",path:"packages/react/src/components/Radio/index.tsx#Radio"})}catch(__react_docgen_typescript_loader_error){}try{RadioInput.displayName="RadioInput",RadioInput.__docgenInfo={description:"",displayName:"RadioInput",props:{css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Radio/index.tsx#RadioInput"]={docgenInfo:RadioInput.__docgenInfo,name:"RadioInput",path:"packages/react/src/components/Radio/index.tsx#RadioInput"})}catch(__react_docgen_typescript_loader_error){}var dist_index_esm=__webpack_require__("./packages/utils/dist/index.esm.js");const index_story={title:"Radio",component:components_Radio,args:{name:"name",label:"label"},parameters:{layout:"centered"}},LayoutDiv=styled_components_browser_esm.ZP.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme})=>(0,dist_index_esm.px)(theme.spacing[24])};
`,Basic={render:function Render(){const options=["1","2","3"],[value,setValue]=(0,react.useState)(options[0]);return(0,jsx_runtime.jsx)(LayoutDiv,{children:(0,jsx_runtime.jsx)(RadioGroup,{label:"label",name:"name",value,onChange:setValue,children:options.map((option=>(0,jsx_runtime.jsxs)(components_Radio,{value:option,children:["Value ",option]},option)))})})}},Disabled={render:function Render(){const options=["1","2","3"],[value,setValue]=(0,react.useState)(options[0]);return(0,jsx_runtime.jsx)(LayoutDiv,{children:(0,jsx_runtime.jsx)(RadioGroup,{label:"label",name:"name",value,onChange:setValue,disabled:!0,children:options.map((option=>(0,jsx_runtime.jsxs)(components_Radio,{value:option,disabled:!0,children:["Value ",option]},option)))})})}},PartialDisabled={render:function Render(){const options=["1","2","3"],[value,setValue]=(0,react.useState)(options[0]);return(0,jsx_runtime.jsx)(LayoutDiv,{children:(0,jsx_runtime.jsx)(RadioGroup,{label:"label",name:"name",value,onChange:setValue,children:options.map((option=>(0,jsx_runtime.jsxs)(components_Radio,{value:option,disabled:"2"===option,children:["Value ",option]},option)))})})}},Readonly={render:function Render(){const options=["1","2","3"],[value,setValue]=(0,react.useState)(options[0]);return(0,jsx_runtime.jsx)(LayoutDiv,{children:(0,jsx_runtime.jsx)(RadioGroup,{label:"label",name:"name",value,onChange:setValue,readonly:!0,children:options.map((option=>(0,jsx_runtime.jsxs)(components_Radio,{value:option,children:["Value ",option]},option)))})})}},Invalid={render:function Render(){const options=["1","2","3"],[value,setValue]=(0,react.useState)(options[0]);return(0,jsx_runtime.jsx)(LayoutDiv,{children:(0,jsx_runtime.jsx)(RadioGroup,{label:"label",name:"name",value,onChange:setValue,invalid:!0,children:options.map((option=>(0,jsx_runtime.jsxs)(components_Radio,{value:option,children:["Value ",option]},option)))})})}};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  render: function Render() {\n    const options = ['1', '2', '3'];\n    const [value, setValue] = useState(options[0]);\n    return <LayoutDiv>\n        <RadioGroup label={'label'} name={'name'} value={value} onChange={setValue}>\n          {options.map(option => <Radio key={option} value={option}>\n              Value {option}\n            </Radio>)}\n        </RadioGroup>\n      </LayoutDiv>;\n  }\n}",...Basic.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  render: function Render() {\n    const options = ['1', '2', '3'];\n    const [value, setValue] = useState(options[0]);\n    return <LayoutDiv>\n        <RadioGroup label={'label'} name={'name'} value={value} onChange={setValue} disabled>\n          {options.map(option => <Radio key={option} value={option} disabled>\n              Value {option}\n            </Radio>)}\n        </RadioGroup>\n      </LayoutDiv>;\n  }\n}",...Disabled.parameters?.docs?.source}}},PartialDisabled.parameters={...PartialDisabled.parameters,docs:{...PartialDisabled.parameters?.docs,source:{originalSource:"{\n  render: function Render() {\n    const options = ['1', '2', '3'];\n    const [value, setValue] = useState(options[0]);\n    return <LayoutDiv>\n        <RadioGroup label={'label'} name={'name'} value={value} onChange={setValue}>\n          {options.map(option => <Radio key={option} value={option} disabled={option === '2'}>\n              Value {option}\n            </Radio>)}\n        </RadioGroup>\n      </LayoutDiv>;\n  }\n}",...PartialDisabled.parameters?.docs?.source}}},Readonly.parameters={...Readonly.parameters,docs:{...Readonly.parameters?.docs,source:{originalSource:"{\n  render: function Render() {\n    const options = ['1', '2', '3'];\n    const [value, setValue] = useState(options[0]);\n    return <LayoutDiv>\n        <RadioGroup label={'label'} name={'name'} value={value} onChange={setValue} readonly>\n          {options.map(option => <Radio key={option} value={option}>\n              Value {option}\n            </Radio>)}\n        </RadioGroup>\n      </LayoutDiv>;\n  }\n}",...Readonly.parameters?.docs?.source}}},Invalid.parameters={...Invalid.parameters,docs:{...Invalid.parameters?.docs,source:{originalSource:"{\n  render: function Render() {\n    const options = ['1', '2', '3'];\n    const [value, setValue] = useState(options[0]);\n    return <LayoutDiv>\n        <RadioGroup label={'label'} name={'name'} value={value} onChange={setValue} invalid>\n          {options.map(option => <Radio key={option} value={option}>\n              Value {option}\n            </Radio>)}\n        </RadioGroup>\n      </LayoutDiv>;\n  }\n}",...Invalid.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","Disabled","PartialDisabled","Readonly","Invalid"]}}]);
//# sourceMappingURL=react-src-components-Radio-index-story.a7d4e562.iframe.bundle.js.map