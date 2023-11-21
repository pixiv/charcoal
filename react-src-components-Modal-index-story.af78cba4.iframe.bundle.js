"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[6130],{"./packages/react/src/components/Modal/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BottomSheet:()=>BottomSheet,Default:()=>Default,FullBottomSheet:()=>FullBottomSheet,InternalScroll:()=>InternalScrollStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_story});var Modal=__webpack_require__("./packages/react/src/components/Modal/index.tsx"),dist_import=__webpack_require__("./node_modules/@react-aria/overlays/dist/import.mjs"),overlays_dist_import=__webpack_require__("./node_modules/@react-stately/overlays/dist/import.mjs"),Button=__webpack_require__("./packages/react/src/components/Button/index.tsx"),ModalPlumbing=__webpack_require__("./packages/react/src/components/Modal/ModalPlumbing.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled=__webpack_require__("./packages/react/src/styled.ts"),TextField=__webpack_require__("./packages/react/src/components/TextField/index.tsx"),DropdownSelector=__webpack_require__("./packages/react/src/components/DropdownSelector/index.tsx"),DropdownMenuItem=__webpack_require__("./packages/react/src/components/DropdownSelector/DropdownMenuItem.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),index_esm=__webpack_require__("./packages/utils/dist/index.esm.js");const InternalScrollStory=args=>{const state=(0,overlays_dist_import.d)({});return(0,jsx_runtime.jsxs)(dist_import.N3,{children:[(0,jsx_runtime.jsx)(Button.Z,{onClick:()=>state.open(),children:"Open Modal"}),(0,jsx_runtime.jsxs)(Modal.ZP,{...args,isOpen:state.isOpen,onClose:()=>state.close(),children:[(0,jsx_runtime.jsx)(ModalPlumbing.xB,{}),(0,jsx_runtime.jsxs)(ModalPlumbing.fe,{children:[(0,jsx_runtime.jsx)(ModalBodyOverflowDiv,{$offset:56,$bottomSheet:args.bottomSheet,children:(0,jsx_runtime.jsx)("div",{style:{height:1e3,background:"linear-gradient(#e66465, #9198e5)"}})}),(0,jsx_runtime.jsx)(TopBorderButtons,{children:(0,jsx_runtime.jsx)(Button.Z,{fullWidth:!0,onClick:()=>state.close(),children:"Close"})})]})]})]})};InternalScrollStory.displayName="InternalScrollStory";const ModalBodyOverflowDiv=styled_components_browser_esm.ZP.div`
  overflow: auto;
  max-height: calc(
    100vh - ${184}px - ${({$offset})=>$offset}px
  );
  ${({$bottomSheet,$offset})=>(!0===$bottomSheet||"full"===$bottomSheet)&&styled_components_browser_esm.iv`
      @media ${({theme})=>(0,index_esm.kk)(theme.breakpoint.screen1)} {
        max-height: calc(100vh - ${88}px - ${$offset}px);
      }
    `}
`,TopBorderButtons=(0,styled_components_browser_esm.ZP)(ModalPlumbing.Zf)`
  position: relative;
  &::before {
    content: '';
    pointer-events: none;
    border-top: 1px solid ${({theme})=>theme.border.default.color};
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`,index_story={title:"Modal",component:Modal.ZP,args:{title:"Title"},argTypes:{size:{options:["S","M","L"],control:{type:"inline-radio"}},bottomSheet:{options:["full","true","false"],mapping:{full:"full",true:!0,false:!1},control:{type:"inline-radio"}}}},DefaultStory=args=>{const state=(0,overlays_dist_import.d)({});return(0,jsx_runtime.jsxs)(dist_import.N3,{children:[(0,jsx_runtime.jsx)(Button.Z,{onClick:()=>state.open(),children:"Open Modal"}),(0,jsx_runtime.jsx)(M,{...args,isDismissable:!0,isOpen:state.isOpen,onClose:()=>state.close()})]})};DefaultStory.displayName="DefaultStory";const M=props=>(0,jsx_runtime.jsxs)(Modal.ZP,{...props,children:[(0,jsx_runtime.jsx)(ModalPlumbing.xB,{}),(0,jsx_runtime.jsxs)(ModalPlumbing.fe,{children:[(0,jsx_runtime.jsxs)(ModalVStack,{children:[(0,jsx_runtime.jsx)(StyledModalText,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod placeat tenetur, necessitatibus laudantium cumque exercitationem provident. Quaerat iure enim, eveniet dolores earum odio quo possimus fugiat aspernatur, numquam, commodi repellat."}),(0,jsx_runtime.jsx)(ModalPlumbing.BT,{children:(0,jsx_runtime.jsx)(TextField.Z,{showLabel:!0,label:"Name",placeholder:"Nagisa"})}),(0,jsx_runtime.jsx)(ModalPlumbing.BT,{children:(0,jsx_runtime.jsx)(TextField.Z,{autoFocus:!0,showLabel:!0,label:"Country",placeholder:"Tokyo"})}),(0,jsx_runtime.jsx)(ModalPlumbing.BT,{children:(0,jsx_runtime.jsxs)(DropdownSelector.Z,{onChange:()=>null,value:"10",showLabel:!0,label:"Fruits",placeholder:"Apple",children:[(0,jsx_runtime.jsx)(DropdownMenuItem.Z,{value:"10",children:"Apple"}),(0,jsx_runtime.jsx)(DropdownMenuItem.Z,{value:"20",children:"Banana"}),(0,jsx_runtime.jsx)(DropdownMenuItem.Z,{value:"30",children:"Orange"})]})})]}),(0,jsx_runtime.jsxs)(ModalPlumbing.Zf,{children:[(0,jsx_runtime.jsx)(Button.Z,{variant:"Primary",onClick:()=>props.onClose(),fullWidth:!0,children:"Apply"}),(0,jsx_runtime.jsx)(Button.Z,{onClick:()=>props.onClose(),fullWidth:!0,children:"Cancel"})]})]})]});M.displayName="M";const ModalVStack=styled_components_browser_esm.ZP.div`
  display: grid;
  gap: 24px;
`,StyledModalText=(0,styled_components_browser_esm.ZP)(ModalPlumbing.BT)`
  ${(0,styled.r)((o=>[o.font.text2,o.typography(14)]))}
`,Default=DefaultStory.bind({}),FullBottomSheetStory=args=>{const state=(0,overlays_dist_import.d)({});return(0,jsx_runtime.jsxs)(dist_import.N3,{children:[(0,jsx_runtime.jsx)(Button.Z,{onClick:()=>state.open(),children:"Open Modal"}),(0,jsx_runtime.jsxs)(Modal.ZP,{...args,isDismissable:!0,bottomSheet:"full",isOpen:state.isOpen,onClose:()=>state.close(),children:[(0,jsx_runtime.jsx)(ModalPlumbing.xB,{}),(0,jsx_runtime.jsxs)(ModalPlumbing.fe,{children:[(0,jsx_runtime.jsxs)(ModalVStack,{children:[(0,jsx_runtime.jsx)(StyledModalText,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod placeat tenetur, necessitatibus laudantium cumque exercitationem provident. Quaerat iure enim, eveniet dolores earum odio quo possimus fugiat aspernatur, numquam, commodi repellat."}),(0,jsx_runtime.jsx)(ModalPlumbing.BT,{children:(0,jsx_runtime.jsx)(TextField.Z,{showLabel:!0,label:"Name",placeholder:"Nagisa"})}),(0,jsx_runtime.jsx)(ModalPlumbing.BT,{children:(0,jsx_runtime.jsx)(TextField.Z,{showLabel:!0,label:"Country",placeholder:"Tokyo"})})]}),(0,jsx_runtime.jsxs)(ModalPlumbing.Zf,{children:[(0,jsx_runtime.jsx)(Button.Z,{variant:"Primary",onClick:()=>state.close(),fullWidth:!0,children:"Apply"}),(0,jsx_runtime.jsx)(Button.Z,{onClick:()=>state.close(),fullWidth:!0,children:"Cancel"})]})]})]})]})};FullBottomSheetStory.displayName="FullBottomSheetStory";const FullBottomSheet=FullBottomSheetStory.bind({}),BottomSheetStory=args=>{const state=(0,overlays_dist_import.d)({});return(0,jsx_runtime.jsxs)(dist_import.N3,{children:[(0,jsx_runtime.jsx)(Button.Z,{onClick:()=>state.open(),children:"Open Modal"}),(0,jsx_runtime.jsxs)(Modal.ZP,{...args,isOpen:state.isOpen,onClose:()=>state.close(),bottomSheet:!0,isDismissable:!0,children:[(0,jsx_runtime.jsx)(ModalPlumbing.xB,{}),(0,jsx_runtime.jsxs)(ModalPlumbing.fe,{children:[(0,jsx_runtime.jsx)(ModalVStack,{children:(0,jsx_runtime.jsx)(StyledModalText,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod placeat tenetur, necessitatibus laudantium cumque exercitationem provident. Quaerat iure enim, eveniet dolores earum odio quo possimus fugiat aspernatur, numquam, commodi repellat."})}),(0,jsx_runtime.jsxs)(ModalPlumbing.Zf,{children:[(0,jsx_runtime.jsx)(Button.Z,{variant:"Danger",onClick:()=>state.close(),fullWidth:!0,children:"削除する"}),(0,jsx_runtime.jsx)(Modal.t5,{children:"キャンセル"})]})]})]})]})};BottomSheetStory.displayName="BottomSheetStory";const BottomSheet=BottomSheetStory.bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"(args: ModalProps) => {\n  const state = useOverlayTriggerState({});\n  return (\n    // Application must be wrapped in an OverlayProvider so that it can be\n    // hidden from screen readers when a modal opens.\n    <OverlayProvider>\n      <Button onClick={() => state.open()}>Open Modal</Button>\n      <M {...args} isDismissable isOpen={state.isOpen} onClose={() => state.close()} />\n    </OverlayProvider>\n  );\n}",...Default.parameters?.docs?.source}}},FullBottomSheet.parameters={...FullBottomSheet.parameters,docs:{...FullBottomSheet.parameters?.docs,source:{originalSource:'(args: ModalProps) => {\n  const state = useOverlayTriggerState({});\n  return (\n    // Application must be wrapped in an OverlayProvider so that it can be\n    // hidden from screen readers when a modal opens.\n    <OverlayProvider>\n      <Button onClick={() => state.open()}>Open Modal</Button>\n\n      <Modal {...args} isDismissable bottomSheet="full" isOpen={state.isOpen} onClose={() => state.close()}>\n        <ModalHeader />\n        <ModalBody>\n          <ModalVStack>\n            <StyledModalText>\n              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod\n              placeat tenetur, necessitatibus laudantium cumque exercitationem\n              provident. Quaerat iure enim, eveniet dolores earum odio quo\n              possimus fugiat aspernatur, numquam, commodi repellat.\n            </StyledModalText>\n            <ModalAlign>\n              <TextField showLabel label="Name" placeholder="Nagisa"></TextField>\n            </ModalAlign>\n            <ModalAlign>\n              <TextField showLabel label="Country" placeholder="Tokyo"></TextField>\n            </ModalAlign>\n          </ModalVStack>\n          <ModalButtons>\n            <Button variant="Primary" onClick={() => state.close()} fullWidth>\n              Apply\n            </Button>\n            <Button onClick={() => state.close()} fullWidth>\n              Cancel\n            </Button>\n          </ModalButtons>\n        </ModalBody>\n      </Modal>\n    </OverlayProvider>\n  );\n}',...FullBottomSheet.parameters?.docs?.source}}},BottomSheet.parameters={...BottomSheet.parameters,docs:{...BottomSheet.parameters?.docs,source:{originalSource:'(args: ModalProps) => {\n  const state = useOverlayTriggerState({});\n  return (\n    // Application must be wrapped in an OverlayProvider so that it can be\n    // hidden from screen readers when a modal opens.\n    <OverlayProvider>\n      <Button onClick={() => state.open()}>Open Modal</Button>\n\n      <Modal {...args} isOpen={state.isOpen} onClose={() => state.close()} bottomSheet isDismissable>\n        <ModalHeader />\n        <ModalBody>\n          <ModalVStack>\n            <StyledModalText>\n              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod\n              placeat tenetur, necessitatibus laudantium cumque exercitationem\n              provident. Quaerat iure enim, eveniet dolores earum odio quo\n              possimus fugiat aspernatur, numquam, commodi repellat.\n            </StyledModalText>\n          </ModalVStack>\n          <ModalButtons>\n            <Button variant="Danger" onClick={() => state.close()} fullWidth>\n              削除する\n            </Button>\n            <ModalDismissButton>キャンセル</ModalDismissButton>\n          </ModalButtons>\n        </ModalBody>\n      </Modal>\n    </OverlayProvider>\n  );\n}',...BottomSheet.parameters?.docs?.source}}};const __namedExportsOrder=["Default","FullBottomSheet","BottomSheet","InternalScroll"];try{Story.displayName="Story",Story.__docgenInfo={description:"import { Story } from '@storybook/react/types-6-0'\n\nをするとstyled-componentsが壊れるので代替品を作った\n\nエラー:\nnode_modules/@types/styled-components/ts3.7/index.d.ts\n`Type alias 'Interpolation' circularly references itself. ts(2456)`",displayName:"Story",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Modal/index.story.tsx#Story"]={docgenInfo:Story.__docgenInfo,name:"Story",path:"packages/react/src/components/Modal/index.story.tsx#Story"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/TextField/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_TextField});var dist_import=__webpack_require__("./node_modules/@react-aria/textfield/dist/import.mjs"),visually_hidden_dist_import=__webpack_require__("./node_modules/@react-aria/visually-hidden/dist/import.mjs"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),FieldLabel=__webpack_require__("./packages/react/src/components/FieldLabel/index.tsx"),_lib=__webpack_require__("./packages/react/src/_lib/index.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TextField=react.forwardRef((function SingleLineTextFieldInner({onChange,...props},forwardRef){const{className,showLabel=!1,showCount=!1,label,requiredText,subLabel,disabled=!1,required,invalid=!1,assistiveText,maxLength,prefix=null,suffix=null}=props,{visuallyHiddenProps}=(0,visually_hidden_dist_import.S)(),ariaRef=(0,react.useRef)(null),[count,setCount]=(0,react.useState)((0,_lib.$j)(props.value??"")),nonControlled=void 0===props.value,handleChange=(0,react.useCallback)((value=>{const count=(0,_lib.$j)(value);void 0!==maxLength&&count>maxLength||(nonControlled&&setCount(count),onChange?.(value))}),[maxLength,nonControlled,onChange]);(0,react.useEffect)((()=>{setCount((0,_lib.$j)(props.value??""))}),[props.value]);const{inputProps,labelProps,descriptionProps,errorMessageProps}=(0,dist_import.E)({inputElementType:"input",isDisabled:disabled,isRequired:required,validationState:invalid?"invalid":"valid",description:!invalid&&assistiveText,errorMessage:invalid&&assistiveText,onChange:handleChange,...props},ariaRef),containerRef=(0,react.useRef)(null);return function useFocusWithClick(containerRef,inputRef){(0,react.useEffect)((()=>{const el=containerRef.current;if(el){const handleDown=e=>{e.target!==inputRef.current&&inputRef.current?.focus()};return el.addEventListener("click",handleDown),()=>{el.removeEventListener("click",handleDown)}}}))}(containerRef,ariaRef),(0,jsx_runtime.jsxs)(TextFieldRoot,{className,isDisabled:disabled,children:[(0,jsx_runtime.jsx)(TextFieldLabel,{label,requiredText,required,subLabel,...labelProps,...showLabel?{}:visuallyHiddenProps}),(0,jsx_runtime.jsxs)(StyledInputContainer,{ref:containerRef,invalid,"aria-disabled":!0===disabled||void 0,hasPrefix:null!=prefix,hasSuffix:null!=suffix||showCount,children:[prefix&&(0,jsx_runtime.jsx)(PrefixContainer,{children:prefix}),(0,jsx_runtime.jsx)(StyledInput,{ref:(0,_lib.lq)(forwardRef,ariaRef),invalid,...inputProps}),(suffix||showCount)&&(0,jsx_runtime.jsxs)(SuffixContainer,{children:[suffix,showCount&&(0,jsx_runtime.jsx)(SingleLineCounter,{children:void 0!==maxLength?`${count}/${maxLength}`:count})]})]}),null!=assistiveText&&0!==assistiveText.length&&(0,jsx_runtime.jsx)(AssistiveText,{invalid,...invalid?errorMessageProps:descriptionProps,children:assistiveText})]})})),components_TextField=TextField,TextFieldRoot=styled_components_browser_esm.ZP.div`
  display: flex;
  flex-direction: column;

  ${p=>p.isDisabled&&{opacity:p.theme.elementEffect.disabled.opacity}}
`,TextFieldLabel=(0,styled_components_browser_esm.ZP)(FieldLabel.Z)`
  margin-bottom: 8px;
`,StyledInputContainer=styled_components_browser_esm.ZP.div`
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

  :not(:disabled):not([aria-disabled]):active,
  [aria-disabled='false']:active {
    outline: none;
    box-shadow: 0 0 0 4px
      ${p=>p.invalid?"rgba(255,43,0,0.32)":"rgba(0, 150, 250, 0.32);"};
  }

  :focus-within {
    outline: none;
    box-shadow: 0 0 0 4px
      ${p=>p.invalid?"rgba(255,43,0,0.32)":"rgba(0, 150, 250, 0.32);"};
  }

  ${p=>p.invalid&&styled_components_browser_esm.iv`
      box-shadow: 0 0 0 4px rgba(255, 43, 0, 0.32);
    `}
`,PrefixContainer=styled_components_browser_esm.ZP.div`
  display: flex;
  padding-left: 8px;
  align-items: center;
`,SuffixContainer=styled_components_browser_esm.ZP.span`
  display: flex;
  align-items: center;
  gap: 8px;
`,StyledInput=styled_components_browser_esm.ZP.input`
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
`,SingleLineCounter=styled_components_browser_esm.ZP.span`
  line-height: 22px;
  font-size: 14px;
  color: var(--charcoal-text3);
`,AssistiveText=styled_components_browser_esm.ZP.p`
  font-size: 14px;
  line-height: 22px;
  margin-top: 4px;
  margin-bottom: -4px;
  color: ${p=>`var(--charcoal-${p.invalid?"assertive":"text2"})`};
`;try{TextField.displayName="TextField",TextField.__docgenInfo={description:"",displayName:"TextField",props:{prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"((event: KeyboardEvent<Element>) => void)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((event: FocusEvent<Element, Element>) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<Element, Element>) => void)"}},showCount:{defaultValue:null,description:"",name:"showCount",required:!1,type:{name:"boolean"}},showLabel:{defaultValue:null,description:"",name:"showLabel",required:!1,type:{name:"boolean"}},assistiveText:{defaultValue:null,description:"",name:"assistiveText",required:!1,type:{name:"string"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},requiredText:{defaultValue:null,description:"",name:"requiredText",required:!1,type:{name:"string"}},subLabel:{defaultValue:null,description:"",name:"subLabel",required:!1,type:{name:"ReactNode"}},onCopy:{defaultValue:null,description:"",name:"onCopy",required:!1,type:{name:"ClipboardEventHandler<Element>"}},onPaste:{defaultValue:null,description:"",name:"onPaste",required:!1,type:{name:"ClipboardEventHandler<Element>"}},onCut:{defaultValue:null,description:"",name:"onCut",required:!1,type:{name:"ClipboardEventHandler<Element>"}},onCompositionStart:{defaultValue:null,description:"",name:"onCompositionStart",required:!1,type:{name:"CompositionEventHandler<Element>"}},onCompositionEnd:{defaultValue:null,description:"",name:"onCompositionEnd",required:!1,type:{name:"CompositionEventHandler<Element>"}},onCompositionUpdate:{defaultValue:null,description:"",name:"onCompositionUpdate",required:!1,type:{name:"CompositionEventHandler<Element>"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"ReactEventHandler<Element>"}},onBeforeInput:{defaultValue:null,description:"",name:"onBeforeInput",required:!1,type:{name:"FormEventHandler<Element>"}},onInput:{defaultValue:null,description:"",name:"onInput",required:!1,type:{name:"FormEventHandler<Element>"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/TextField/index.tsx#TextField"]={docgenInfo:TextField.__docgenInfo,name:"TextField",path:"packages/react/src/components/TextField/index.tsx#TextField"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=react-src-components-Modal-index-story.af78cba4.iframe.bundle.js.map