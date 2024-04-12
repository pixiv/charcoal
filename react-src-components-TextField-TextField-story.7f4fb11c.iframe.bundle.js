"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[2896],{"./packages/react/src/components/TextField/TextField.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Affix:()=>Affix,AssistiveText:()=>AssistiveText,Default:()=>Default,Disabled:()=>Disabled,Invalid:()=>Invalid,Label:()=>Label,Number:()=>Number,Placeholder:()=>Placeholder,Prefix:()=>Prefix,ReadOnly:()=>ReadOnly,RequiredText:()=>RequiredText,ShowCount:()=>ShowCount,SubLabel:()=>SubLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Clickable__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/components/Clickable/index.tsx"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/components/TextField/index.tsx"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"TextField",component:___WEBPACK_IMPORTED_MODULE_2__.ZP,parameters:{layout:"centered"}},Default={args:{showLabel:!1,assistiveText:"",disabled:!1,required:!1,invalid:!1,readOnly:!1,label:"Label",requiredText:"*必須",subLabel:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Clickable__WEBPACK_IMPORTED_MODULE_3__.Z,{children:"Text Link"}),placeholder:"TextField"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.ZP,{...args})},Label={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.ZP,{showLabel:!0,label:"Label"})},Placeholder={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.ZP,{label:"Label",placeholder:"Placeholder"})},RequiredText={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.ZP,{label:"Label",showLabel:!0,required:!0,requiredText:"*必須"})},AssistiveText={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.ZP,{label:"Label",assistiveText:"説明が入ります"})},SubLabel={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.ZP,{label:"Label",subLabel:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Clickable__WEBPACK_IMPORTED_MODULE_3__.Z,{children:"Text Link"})})},ShowCount={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.ZP,{label:"Label",showCount:!0,maxLength:100})},Disabled={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.ZP,{label:"Label",disabled:!0})},Invalid={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.ZP,{label:"Label",invalid:!0,assistiveText:"エラーメッセージ"})},ReadOnly={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.ZP,{label:"Label",readOnly:!0,value:"読み取り専用"})},Affix={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.ZP,{label:"Label",prefix:"/home/john/",suffix:".png"})},PrefixIconWrap=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.div`
  display: flex;
  align-items: center;
  color: ${({theme})=>theme.color.text3};
`,Prefix={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.ZP,{label:"Label",prefix:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PrefixIconWrap,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("pixiv-icon",{name:"16/Search"})})})},Number={render:function Render(args){const[count,setCount]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.ZP,{...args,type:"number",value:count.toString(),onChange:value=>setCount(parseInt(value)),onWheel:e=>{e.currentTarget.blur(),e.stopPropagation()}})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    showLabel: false,\n    assistiveText: '',\n    disabled: false,\n    required: false,\n    invalid: false,\n    readOnly: false,\n    label: 'Label',\n    requiredText: '*必須',\n    subLabel: <Clickable>Text Link</Clickable>,\n    placeholder: 'TextField'\n  },\n  render(args) {\n    return <TextField {...args} />;\n  }\n}",...Default.parameters?.docs?.source}}},Label.parameters={...Label.parameters,docs:{...Label.parameters?.docs,source:{originalSource:'{\n  render() {\n    return <TextField showLabel label="Label" />;\n  }\n}',...Label.parameters?.docs?.source}}},Placeholder.parameters={...Placeholder.parameters,docs:{...Placeholder.parameters?.docs,source:{originalSource:'{\n  render() {\n    return <TextField label="Label" placeholder="Placeholder" />;\n  }\n}',...Placeholder.parameters?.docs?.source}}},RequiredText.parameters={...RequiredText.parameters,docs:{...RequiredText.parameters?.docs,source:{originalSource:'{\n  render() {\n    return <TextField label="Label" showLabel required requiredText="*必須" />;\n  }\n}',...RequiredText.parameters?.docs?.source}}},AssistiveText.parameters={...AssistiveText.parameters,docs:{...AssistiveText.parameters?.docs,source:{originalSource:'{\n  render() {\n    return <TextField label="Label" assistiveText="説明が入ります" />;\n  }\n}',...AssistiveText.parameters?.docs?.source}}},SubLabel.parameters={...SubLabel.parameters,docs:{...SubLabel.parameters?.docs,source:{originalSource:'{\n  render() {\n    return <TextField label="Label" subLabel={<Clickable>Text Link</Clickable>} />;\n  }\n}',...SubLabel.parameters?.docs?.source}}},ShowCount.parameters={...ShowCount.parameters,docs:{...ShowCount.parameters?.docs,source:{originalSource:'{\n  render() {\n    return <TextField label="Label" showCount maxLength={100} />;\n  }\n}',...ShowCount.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render() {\n    return <TextField label="Label" disabled />;\n  }\n}',...Disabled.parameters?.docs?.source}}},Invalid.parameters={...Invalid.parameters,docs:{...Invalid.parameters?.docs,source:{originalSource:'{\n  render() {\n    return <TextField label="Label" invalid assistiveText="エラーメッセージ" />;\n  }\n}',...Invalid.parameters?.docs?.source}}},ReadOnly.parameters={...ReadOnly.parameters,docs:{...ReadOnly.parameters?.docs,source:{originalSource:'{\n  render() {\n    return <TextField label="Label" readOnly value="読み取り専用" />;\n  }\n}',...ReadOnly.parameters?.docs?.source}}},Affix.parameters={...Affix.parameters,docs:{...Affix.parameters?.docs,source:{originalSource:'{\n  render() {\n    return <TextField label="Label" prefix="/home/john/" suffix=".png" />;\n  }\n}',...Affix.parameters?.docs?.source}}},Prefix.parameters={...Prefix.parameters,docs:{...Prefix.parameters?.docs,source:{originalSource:'{\n  render() {\n    return <TextField label="Label" prefix={<PrefixIconWrap>\n            <pixiv-icon name="16/Search" />\n          </PrefixIconWrap>} />;\n  }\n}',...Prefix.parameters?.docs?.source}}},Number.parameters={...Number.parameters,docs:{...Number.parameters?.docs,source:{originalSource:'{\n  render: function Render(args) {\n    const [count, setCount] = useState(0);\n    return <TextField {...args} type="number" value={count.toString()} onChange={value => setCount(parseInt(value))} onWheel={e => {\n      e.currentTarget.blur();\n      e.stopPropagation();\n    }} />;\n  }\n}',...Number.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Label","Placeholder","RequiredText","AssistiveText","SubLabel","ShowCount","Disabled","Invalid","ReadOnly","Affix","Prefix","Number"]},"./packages/react/src/_lib/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function unreachable(value){throw new Error(0===arguments.length?"unreachable":`unreachable (${JSON.stringify(value)})`)}function mergeRefs(...refs){return value=>{for(const ref of refs)"function"==typeof ref?ref(value):null!==ref&&(ref.current=value)}}function countCodePointsInString(string){return Array.from(string).length}__webpack_require__.d(__webpack_exports__,{$j:()=>countCodePointsInString,lq:()=>mergeRefs,t1:()=>unreachable})},"./packages/react/src/components/Clickable/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Clickable});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const DefaultLink=react.forwardRef((function DefaultLink({to,children,...rest},ref){return(0,jsx_runtime.jsx)("a",{href:to,ref,...rest,children})})),DefaultValue={Link:DefaultLink},ComponentAbstractionContext=react.createContext(DefaultValue);function ComponentAbstraction({children,components}){return(0,jsx_runtime.jsx)(ComponentAbstractionContext.Provider,{value:{...DefaultValue,...components},children})}ComponentAbstraction.displayName="ComponentAbstraction";try{ComponentAbstraction.displayName="ComponentAbstraction",ComponentAbstraction.__docgenInfo={description:"",displayName:"ComponentAbstraction",props:{components:{defaultValue:null,description:"",name:"components",required:!0,type:{name:"Partial<Components>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/core/ComponentAbstraction.tsx#ComponentAbstraction"]={docgenInfo:ComponentAbstraction.__docgenInfo,name:"ComponentAbstraction",path:"packages/react/src/core/ComponentAbstraction.tsx#ComponentAbstraction"})}catch(__react_docgen_typescript_loader_error){}try{DefaultLink.displayName="DefaultLink",DefaultLink.__docgenInfo={description:"",displayName:"DefaultLink",props:{to:{defaultValue:null,description:"リンクのURL",name:"to",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/core/ComponentAbstraction.tsx#DefaultLink"]={docgenInfo:DefaultLink.__docgenInfo,name:"DefaultLink",path:"packages/react/src/core/ComponentAbstraction.tsx#DefaultLink"})}catch(__react_docgen_typescript_loader_error){}var index_esm=__webpack_require__("./packages/utils/dist/index.esm.js");const Clickable=react.forwardRef((function Clickable(props,ref){const{Link}=function useComponentAbstraction(){return(0,react.useContext)(ComponentAbstractionContext)}(),isLink="to"in props,as=isLink?Link:"button",ariaDisabled=!(!isLink||!0!==props.disabled)||void 0;let rest=props;if(isLink){const{disabled,..._rest}=props;rest=_rest}return(0,jsx_runtime.jsx)(StyledClickableDiv,{...rest,ref,as,"aria-disabled":ariaDisabled})})),components_Clickable=Clickable,StyledClickableDiv=styled_components_browser_esm.ZP.div`
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
`;try{Clickable.displayName="Clickable",Clickable.__docgenInfo={description:"",displayName:"Clickable",props:{disabled:{defaultValue:null,description:"クリックの無効化",name:"disabled",required:!1,type:{name:"boolean"}},to:{defaultValue:null,description:"リンクのURL。指定するとbuttonタグではなくaタグとして描画される",name:"to",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Clickable/index.tsx#Clickable"]={docgenInfo:Clickable.__docgenInfo,name:"Clickable",path:"packages/react/src/components/Clickable/index.tsx#Clickable"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/FieldLabel/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const FieldLabel=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function FieldLabel({style,className,label,required=!1,requiredText,subLabel,...labelProps},ref){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FieldLabelWrapper,{style,className,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Label,{ref,...labelProps,children:label}),required&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RequiredText,{children:requiredText}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SubLabelClickable,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{children:subLabel})})]})})),__WEBPACK_DEFAULT_EXPORT__=FieldLabel,Label=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.label`
  font-size: 14px;
  line-height: 22px;
  font-weight: bold;
  display: flow-root;
  color: var(--charcoal-text1);

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
`,RequiredText=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.span`
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
`,SubLabelClickable=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  font-size: 14px;
  line-height: 22px;
  display: flow-root;
  color: var(--charcoal-text3);
  transition: 0.2s color, 0.2s box-shadow;

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

  &:not(:disabled):not([aria-disabled]),
  &[aria-disabled='false'] {
    &:hover {
      color: var(--charcoal-text3-hover);
    }
    &:active {
      color: var(--charcoal-text3-press);
    }
    &:active,
    &:focus,
    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);
    }
  }
`,FieldLabelWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  display: inline-flex;
  align-items: center;

  > ${RequiredText} {
    margin-left: 4px;
  }

  > ${SubLabelClickable} {
    margin-left: auto;
  }
`;try{FieldLabel.displayName="FieldLabel",FieldLabel.__docgenInfo={description:"",displayName:"FieldLabel",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},subLabel:{defaultValue:null,description:"",name:"subLabel",required:!1,type:{name:"ReactNode"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},requiredText:{defaultValue:null,description:"",name:"requiredText",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/FieldLabel/index.tsx#FieldLabel"]={docgenInfo:FieldLabel.__docgenInfo,name:"FieldLabel",path:"packages/react/src/components/FieldLabel/index.tsx#FieldLabel"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/TextField/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{TT:()=>AssistiveText,ZP:()=>__WEBPACK_DEFAULT_EXPORT__,pU:()=>TextFieldLabel});var _react_aria_textfield__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@react-aria/textfield/dist/import.mjs"),_react_aria_visually_hidden__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@react-aria/visually-hidden/dist/import.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_FieldLabel__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/react/src/components/FieldLabel/index.tsx"),_lib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/_lib/index.ts"),_useFocusWithClick__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/react/src/components/TextField/useFocusWithClick.tsx"),_react_aria_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@react-aria/utils/dist/import.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const TextField=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function SingleLineTextFieldInner({onChange,...props},forwardRef){const{className,showLabel=!1,showCount=!1,label,requiredText,subLabel,disabled=!1,required,invalid=!1,readOnly=!1,assistiveText,maxLength,prefix=null,suffix=null,...restProps}=props,{visuallyHiddenProps}=(0,_react_aria_visually_hidden__WEBPACK_IMPORTED_MODULE_2__.S)(),ariaRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),[count,setCount]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_lib__WEBPACK_IMPORTED_MODULE_3__.$j)(props.value??"")),nonControlled=void 0===props.value,handleChange=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((value=>{const count=(0,_lib__WEBPACK_IMPORTED_MODULE_3__.$j)(value);void 0!==maxLength&&count>maxLength||(nonControlled&&setCount(count),onChange?.(value))}),[maxLength,nonControlled,onChange]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setCount((0,_lib__WEBPACK_IMPORTED_MODULE_3__.$j)(props.value??""))}),[props.value]);const{inputProps:ariaInputProps,labelProps,descriptionProps,errorMessageProps}=(0,_react_aria_textfield__WEBPACK_IMPORTED_MODULE_4__.E)({inputElementType:"input",isDisabled:disabled,isRequired:required,isReadOnly:readOnly,validationState:invalid?"invalid":"valid",description:!invalid&&assistiveText,errorMessage:invalid&&assistiveText,onChange:handleChange,...props},ariaRef),containerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);(0,_useFocusWithClick__WEBPACK_IMPORTED_MODULE_5__.Q)(containerRef,ariaRef);const inputProps=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_6__.dG)(restProps,ariaInputProps);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(TextFieldRoot,{className,isDisabled:disabled,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TextFieldLabel,{label,requiredText,required,subLabel,...labelProps,...showLabel?{}:visuallyHiddenProps}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(StyledInputContainer,{ref:containerRef,invalid,"aria-disabled":!0===disabled||void 0,hasPrefix:null!=prefix,hasSuffix:null!=suffix||showCount,children:[prefix&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PrefixContainer,{children:prefix}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledInput,{ref:(0,_lib__WEBPACK_IMPORTED_MODULE_3__.lq)(forwardRef,ariaRef),invalid,...inputProps}),(suffix||showCount)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(SuffixContainer,{children:[suffix,showCount&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SingleLineCounter,{children:void 0!==maxLength?`${count}/${maxLength}`:count})]})]}),null!=assistiveText&&0!==assistiveText.length&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(AssistiveText,{invalid,...invalid?errorMessageProps:descriptionProps,children:assistiveText})]})})),__WEBPACK_DEFAULT_EXPORT__=TextField,TextFieldRoot=styled_components__WEBPACK_IMPORTED_MODULE_7__.ZP.div`
  display: flex;
  flex-direction: column;

  ${p=>p.isDisabled&&{opacity:p.theme.elementEffect.disabled.opacity}}
`,TextFieldLabel=(0,styled_components__WEBPACK_IMPORTED_MODULE_7__.ZP)(_FieldLabel__WEBPACK_IMPORTED_MODULE_8__.Z)`
  margin-bottom: 8px;
`,StyledInputContainer=styled_components__WEBPACK_IMPORTED_MODULE_7__.ZP.div`
  display: grid;
  grid-template-columns: ${p=>[p.hasPrefix&&"auto","1fr",p.hasSuffix&&"auto"].filter(Boolean).join(" ")};
  height: 40px;
  transition: 0.2s background-color, 0.2s box-shadow;
  color: var(--charcoal-text2);
  background-color: var(--charcoal-surface3);
  border-radius: 4px;
  gap: 4px;
  padding: 0 8px;
  line-height: 22px;
  font-size: 14px;

  :not(:disabled):not([aria-disabled]):hover,
  [aria-disabled='false']:hover {
    background-color: var(--charcoal-surface3-hover);
  }

  :focus-within {
    outline: none;
    box-shadow: 0 0 0 4px
      ${p=>p.invalid?"rgba(255,43,0,0.32)":"rgba(0, 150, 250, 0.32);"};
  }

  ${p=>p.invalid&&styled_components__WEBPACK_IMPORTED_MODULE_7__.iv`
      box-shadow: 0 0 0 4px rgba(255, 43, 0, 0.32);
    `}
`,PrefixContainer=styled_components__WEBPACK_IMPORTED_MODULE_7__.ZP.div`
  display: flex;
  align-items: center;
`,SuffixContainer=styled_components__WEBPACK_IMPORTED_MODULE_7__.ZP.span`
  display: flex;
  align-items: center;
  gap: 8px;
`,StyledInput=styled_components__WEBPACK_IMPORTED_MODULE_7__.ZP.input`
  border: none;
  box-sizing: border-box;
  outline: none;
  font-family: inherit;

  /* Prevent zooming for iOS Safari */
  transform-origin: top left;
  transform: scale(0.875);
  width: calc(100% / 0.875);
  height: calc(100% / 0.875);
  font-size: calc(14px / 0.875);
  line-height: calc(22px / 0.875);
  padding-left: 0;
  padding-right: 0;
  border-radius: calc(4px / 0.875);

  /* Display box-shadow for iOS Safari */
  appearance: none;
  background: transparent;

  color: var(--charcoal-text2);
  &::placeholder {
    color: var(--charcoal-text3);
  }
`,SingleLineCounter=styled_components__WEBPACK_IMPORTED_MODULE_7__.ZP.span`
  line-height: 22px;
  font-size: 14px;
  color: var(--charcoal-text3);
`,AssistiveText=styled_components__WEBPACK_IMPORTED_MODULE_7__.ZP.p`
  font-size: 14px;
  line-height: 22px;
  margin-top: 4px;
  margin-bottom: -4px;
  color: ${p=>`var(--charcoal-${p.invalid?"assertive":"text2"})`};
`;try{TextField.displayName="TextField",TextField.__docgenInfo={description:"",displayName:"TextField",props:{prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"((event: KeyboardEvent<Element>) => void)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((event: FocusEvent<Element, Element>) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<Element, Element>) => void)"}},showCount:{defaultValue:null,description:"",name:"showCount",required:!1,type:{name:"boolean"}},showLabel:{defaultValue:null,description:"",name:"showLabel",required:!1,type:{name:"boolean"}},assistiveText:{defaultValue:null,description:"",name:"assistiveText",required:!1,type:{name:"string"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},requiredText:{defaultValue:null,description:"",name:"requiredText",required:!1,type:{name:"string"}},subLabel:{defaultValue:null,description:"",name:"subLabel",required:!1,type:{name:"ReactNode"}},onCopy:{defaultValue:null,description:"",name:"onCopy",required:!1,type:{name:"ClipboardEventHandler<Element>"}},onPaste:{defaultValue:null,description:"",name:"onPaste",required:!1,type:{name:"ClipboardEventHandler<Element>"}},onCut:{defaultValue:null,description:"",name:"onCut",required:!1,type:{name:"ClipboardEventHandler<Element>"}},onCompositionStart:{defaultValue:null,description:"",name:"onCompositionStart",required:!1,type:{name:"CompositionEventHandler<Element>"}},onCompositionEnd:{defaultValue:null,description:"",name:"onCompositionEnd",required:!1,type:{name:"CompositionEventHandler<Element>"}},onCompositionUpdate:{defaultValue:null,description:"",name:"onCompositionUpdate",required:!1,type:{name:"CompositionEventHandler<Element>"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"ReactEventHandler<Element>"}},onBeforeInput:{defaultValue:null,description:"",name:"onBeforeInput",required:!1,type:{name:"FormEventHandler<Element>"}},onInput:{defaultValue:null,description:"",name:"onInput",required:!1,type:{name:"FormEventHandler<Element>"}},autoCapitalize:{defaultValue:null,description:"",name:"autoCapitalize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"on"'},{value:'"off"'},{value:'"sentences"'},{value:'"words"'},{value:'"characters"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/TextField/index.tsx#TextField"]={docgenInfo:TextField.__docgenInfo,name:"TextField",path:"packages/react/src/components/TextField/index.tsx#TextField"})}catch(__react_docgen_typescript_loader_error){}try{TextFieldLabel.displayName="TextFieldLabel",TextFieldLabel.__docgenInfo={description:"",displayName:"TextFieldLabel",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},requiredText:{defaultValue:null,description:"",name:"requiredText",required:!1,type:{name:"string"}},subLabel:{defaultValue:null,description:"",name:"subLabel",required:!1,type:{name:"ReactNode"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/TextField/index.tsx#TextFieldLabel"]={docgenInfo:TextFieldLabel.__docgenInfo,name:"TextFieldLabel",path:"packages/react/src/components/TextField/index.tsx#TextFieldLabel"})}catch(__react_docgen_typescript_loader_error){}try{AssistiveText.displayName="AssistiveText",AssistiveText.__docgenInfo={description:"",displayName:"AssistiveText",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLParagraphElement | null) => void) | RefObject<HTMLParagraphElement> | null"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!0,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/TextField/index.tsx#AssistiveText"]={docgenInfo:AssistiveText.__docgenInfo,name:"AssistiveText",path:"packages/react/src/components/TextField/index.tsx#AssistiveText"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/TextField/useFocusWithClick.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>useFocusWithClick});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useFocusWithClick(containerRef,inputRef){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const el=containerRef.current;if(el){const handleDown=e=>{e.target!==inputRef.current&&inputRef.current?.focus()};return el.addEventListener("click",handleDown),()=>{el.removeEventListener("click",handleDown)}}}))}}}]);
//# sourceMappingURL=react-src-components-TextField-TextField-story.7f4fb11c.iframe.bundle.js.map