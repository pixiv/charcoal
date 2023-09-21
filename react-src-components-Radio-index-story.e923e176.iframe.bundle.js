"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[6258],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_AY7I2SME.aD});var chunk_AY7I2SME=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs")},"./packages/react/src/components/Radio/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_story});var dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),warning=__webpack_require__("./node_modules/warning/warning.js"),warning_default=__webpack_require__.n(warning),styled=__webpack_require__("./packages/react/src/styled.ts"),index_esm=__webpack_require__("./packages/utils/dist/index.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Radio=(0,react.forwardRef)((function RadioInner({value,disabled=!1,children,className},ref){const{name,selected,disabled:isParentDisabled,readonly,invalid,onChange}=(0,react.useContext)(RadioGroupContext);warning_default()(void 0!==name,'"name" is not Provided for <Radio>. Perhaps you forgot to wrap with <RadioGroup> ?');const isSelected=value===selected,isDisabled=disabled||isParentDisabled,isReadonly=readonly&&!isSelected,handleChange=(0,react.useCallback)((e=>{onChange(e.currentTarget.value)}),[onChange]);return(0,jsx_runtime.jsxs)(RadioRoot,{"aria-disabled":isDisabled||isReadonly,className,children:[(0,jsx_runtime.jsx)(RadioInput,{name,value,checked:isSelected,invalid,onChange:handleChange,disabled:isDisabled||isReadonly,ref}),null!=children&&(0,jsx_runtime.jsx)(RadioLabel,{children})]})})),components_Radio=(0,react.memo)(Radio),RadioRoot=styled_components_browser_esm.ZP.label`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: ${({theme})=>(0,index_esm.px)(theme.spacing[4])};
  align-items: center;
  cursor: pointer;

  ${(0,styled.r)((o=>[o.disabled]))}
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

    ${({invalid=!1})=>(0,styled.r)((o=>[o.borderRadius("oval"),o.bg.surface1.hover.press,invalid&&o.outline.assertive]))};

    &:not(:checked) {
      border-width: 2px;
      border-style: solid;
      border-color: ${({theme})=>theme.color.text3};
    }

    &:checked {
      ${(0,styled.r)((o=>o.bg.brand.hover.press))}

      &::after {
        content: '';
        display: block;
        width: 8px;
        height: 8px;
        pointer-events: none;

        ${(0,styled.r)((o=>[o.bg.text5.hover.press,o.borderRadius("oval")]))}
      }
    }

    ${(0,styled.r)((o=>o.outline.default.focus))}

    /* FIXME: o.outline.default.focus の transition に o.bg.brand の transition が打ち消されてしまう */
    transition: all 0.2s !important;
  }
`,RadioLabel=styled_components_browser_esm.ZP.div`
  ${(0,styled.r)((o=>[o.typography(14),o.font.text2]))}
`,StyledRadioGroup=styled_components_browser_esm.ZP.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${({theme})=>(0,index_esm.px)(theme.spacing[8])};
`,RadioGroupContext=react.createContext({name:void 0,selected:void 0,disabled:!1,readonly:!1,invalid:!1,onChange(){throw new Error("Cannot find onChange() handler. Perhaps you forgot to wrap with <RadioGroup> ?")}});function RadioGroup({className,value,label,name,onChange,disabled,readonly,invalid,children}){const handleChange=(0,react.useCallback)((next=>{onChange(next)}),[onChange]);return(0,jsx_runtime.jsx)(RadioGroupContext.Provider,{value:{name,selected:value,disabled:disabled??!1,readonly:readonly??!1,invalid:invalid??!1,onChange:handleChange},children:(0,jsx_runtime.jsx)(StyledRadioGroup,{role:"radiogroup","aria-orientation":"vertical","aria-label":label,"aria-invalid":invalid,className,children})})}RadioGroup.displayName="RadioGroup";try{RadioGroup.displayName="RadioGroup",RadioGroup.__docgenInfo={description:"",displayName:"RadioGroup",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(next: string) => void"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},readonly:{defaultValue:null,description:"",name:"readonly",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Radio/index.tsx#RadioGroup"]={docgenInfo:RadioGroup.__docgenInfo,name:"RadioGroup",path:"packages/react/src/components/Radio/index.tsx#RadioGroup"})}catch(__react_docgen_typescript_loader_error){}try{Radio.displayName="Radio",Radio.__docgenInfo={description:"",displayName:"Radio",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Radio/index.tsx#Radio"]={docgenInfo:Radio.__docgenInfo,name:"Radio",path:"packages/react/src/components/Radio/index.tsx#Radio"})}catch(__react_docgen_typescript_loader_error){}try{RadioInput.displayName="RadioInput",RadioInput.__docgenInfo={description:"",displayName:"RadioInput",props:{css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Radio/index.tsx#RadioInput"]={docgenInfo:RadioInput.__docgenInfo,name:"RadioInput",path:"packages/react/src/components/Radio/index.tsx#RadioInput"})}catch(__react_docgen_typescript_loader_error){}const options=["value1","value2"],index_story={title:"Radio",component:components_Radio,argTypes:{value:{control:{type:"select"},options}},args:{invalid:!1,parentDisabled:!1,childDisabled:!1,readonly:!1}},Template=({value,invalid,parentDisabled,childDisabled,readonly,className})=>(0,jsx_runtime.jsx)("div",{css:styled_components_browser_esm.iv`
      display: flex;
      flex-direction: column;
      gap: ${({theme})=>(0,index_esm.px)(theme.spacing[24])};
    `,children:["name1","name2","name3"].map((name=>(0,jsx_runtime.jsx)(RadioGroup,{label:`選択肢-${name}`,name,value,onChange:(0,dist.aD)("onChange"),disabled:parentDisabled,readonly,invalid,children:options.map((option=>(0,jsx_runtime.jsxs)(components_Radio,{value:option,disabled:childDisabled,className,children:[name,"(",option,")を選ぶ"]},option)))},name)))});Template.displayName="Template";const Default=Template.bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  value,\n  invalid,\n  parentDisabled,\n  childDisabled,\n  readonly,\n  className\n}) => <div css={css`\n      display: flex;\n      flex-direction: column;\n      gap: ${({\n  theme\n}) => px(theme.spacing[24])};\n    `}>\n    {['name1', 'name2', 'name3'].map(name => <RadioGroup key={name} label={`選択肢-${name}`} name={name} value={value} onChange={action('onChange')} disabled={parentDisabled} readonly={readonly} invalid={invalid}>\n        {options.map(option => <Radio key={option} value={option} disabled={childDisabled} className={className}>\n            {name}({option})を選ぶ\n          </Radio>)}\n      </RadioGroup>)}\n  </div>",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"];try{Default.displayName="Default",Default.__docgenInfo={description:"",displayName:"Default",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},parentDisabled:{defaultValue:null,description:"",name:"parentDisabled",required:!1,type:{name:"boolean"}},childDisabled:{defaultValue:null,description:"",name:"childDisabled",required:!1,type:{name:"boolean"}},readonly:{defaultValue:null,description:"",name:"readonly",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Radio/index.story.tsx#Default"]={docgenInfo:Default.__docgenInfo,name:"Default",path:"packages/react/src/components/Radio/index.story.tsx#Default"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/styled.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>theme});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const theme=(0,__webpack_require__("./packages/styled/dist/index.esm.js").jG)(styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP)}}]);
//# sourceMappingURL=react-src-components-Radio-index-story.e923e176.iframe.bundle.js.map