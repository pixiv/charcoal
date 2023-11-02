"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[736],{"./node_modules/@react-aria/toggle/dist/import.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>$d2c8e2b0480f3f34$export$cbe85ee05b554577});var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@react-aria/utils/dist/import.mjs"),_react_aria_focus__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@react-aria/focus/dist/import.mjs"),_react_aria_interactions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-aria/interactions/dist/import.mjs");function $d2c8e2b0480f3f34$export$cbe85ee05b554577(props,state,ref){let{isDisabled=!1,isRequired,isReadOnly,value,name,children,"aria-label":ariaLabel,"aria-labelledby":ariaLabelledby,validationState="valid"}=props;null!=children||(null!=ariaLabel||null!=ariaLabelledby)||console.warn("If you do not provide children, you must specify an aria-label for accessibility");let{pressProps}=(0,_react_aria_interactions__WEBPACK_IMPORTED_MODULE_0__.r7)({isDisabled}),{focusableProps}=(0,_react_aria_focus__WEBPACK_IMPORTED_MODULE_1__.kc)(props,ref),interactions=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.dG)(pressProps,focusableProps),domProps=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.zL)(props,{labelable:!0});return{inputProps:(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.dG)(domProps,{"aria-invalid":"invalid"===validationState||void 0,"aria-errormessage":props["aria-errormessage"],"aria-controls":props["aria-controls"],"aria-readonly":isReadOnly||void 0,"aria-required":isRequired||void 0,onChange:e=>{e.stopPropagation(),state.setSelected(e.target.checked)},disabled:isDisabled,...null==value?{}:{value},name,type:"checkbox",...interactions})}}},"./node_modules/@react-stately/toggle/dist/import.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>$3017fa7ffdddec74$export$8042c6c013fd5226});var _react_stately_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-stately/utils/dist/import.mjs");function $3017fa7ffdddec74$export$8042c6c013fd5226(props={}){let{isReadOnly}=props,[isSelected,setSelected]=(0,_react_stately_utils__WEBPACK_IMPORTED_MODULE_0__.zk)(props.isSelected,props.defaultSelected||!1,props.onChange);return{isSelected,setSelected:function updateSelected(value){isReadOnly||setSelected(value)},toggle:function toggleState(){isReadOnly||setSelected(!isSelected)}}}},"./node_modules/@react-stately/utils/dist/import.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{zk:()=>$458b0a5536c1a7cf$export$40bfa8c7b0832715});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function $458b0a5536c1a7cf$export$40bfa8c7b0832715(value,defaultValue,onChange){let[stateValue,setStateValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value||defaultValue),ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(void 0!==value),wasControlled=ref.current,isControlled=void 0!==value,stateRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(stateValue);wasControlled!==isControlled&&console.warn(`WARN: A component changed from ${wasControlled?"controlled":"uncontrolled"} to ${isControlled?"controlled":"uncontrolled"}.`),ref.current=isControlled;let setValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((value,...args)=>{let onChangeCaller=(value,...onChangeArgs)=>{onChange&&(Object.is(stateRef.current,value)||onChange(value,...onChangeArgs)),isControlled||(stateRef.current=value)};if("function"==typeof value){console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),setStateValue(((oldValue,...functionArgs)=>{let interceptedValue=value(isControlled?stateRef.current:oldValue,...functionArgs);return onChangeCaller(interceptedValue,...args),isControlled?oldValue:interceptedValue}))}else isControlled||setStateValue(value),onChangeCaller(value,...args)}),[isControlled,onChange]);return isControlled?stateRef.current=value:value=stateValue,[value,setValue]}},"./packages/react/src/components/DropdownSelector/ListItem/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/components/Icon/index.tsx"),_Switch__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/react/src/components/Switch/index.tsx"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/components/DropdownSelector/ListItem/index.tsx"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"DropdownSelector/ListItem",component:___WEBPACK_IMPORTED_MODULE_2__.Z},CustomLink=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.a`
  color: red;
`,Basic=()=>{const[checked,setChecked]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),handleCheck=()=>{setChecked((v=>!v))};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.Z,{children:"Item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(___WEBPACK_IMPORTED_MODULE_2__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_4__.Z,{name:"16/Add"})," Add"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.Z,{as:"a",href:"#",children:"Normal Link"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.Z,{as:CustomLink,href:"#",children:"Custom Link"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(___WEBPACK_IMPORTED_MODULE_2__.Z,{onClick:handleCheck,children:["Switch",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{marginLeft:"auto"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Switch__WEBPACK_IMPORTED_MODULE_5__.Z,{label:"hello",name:"hello",onChange:handleCheck,checked})})]})]})};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'() => {\n  const [checked, setChecked] = useState(false);\n  const handleCheck = () => {\n    setChecked(v => !v);\n  };\n  return <>\n      <ListItem>Item</ListItem>\n      <ListItem>\n        <Icon name="16/Add" /> Add\n      </ListItem>\n      <ListItem as="a" href="#">\n        Normal Link\n      </ListItem>\n      <ListItem as={CustomLink} href="#">\n        Custom Link\n      </ListItem>\n      <ListItem onClick={handleCheck}>\n        Switch\n        <div style={{\n        marginLeft: \'auto\'\n      }}>\n          <Switch label="hello" name="hello" onChange={handleCheck} checked={checked} />\n        </div>\n      </ListItem>\n    </>;\n}',...Basic.parameters?.docs?.source}}};const __namedExportsOrder=["Basic"]},"./packages/react/src/components/DropdownSelector/ListItem/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ListItem});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/styled.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ListItem(props){const{children,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledLi,{role:"option",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ItemDiv,{...rest,children:props.children})})}ListItem.displayName="ListItem";const StyledLi=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.li`
  list-style: none;
`,ItemDiv=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.div`
  display: flex;
  align-items: center;
  min-height: 40px;
  cursor: pointer;
  outline: none;

  ${(0,_styled__WEBPACK_IMPORTED_MODULE_2__.r)((o=>[o.padding.horizontal(16),o.disabled]))}

  &[aria-disabled="true"] {
    cursor: default;
  }

  :hover,
  :focus,
  :focus-within {
    ${(0,_styled__WEBPACK_IMPORTED_MODULE_2__.r)((o=>[o.bg.surface3]))}
  }
`;try{ListItem.displayName="ListItem",ListItem.__docgenInfo={description:"リストのある要素を示すコンポーネント\n\nasを用いて拡張することができる",displayName:"ListItem",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"CustomJSXElement"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/DropdownSelector/ListItem/index.tsx#ListItem"]={docgenInfo:ListItem.__docgenInfo,name:"ListItem",path:"packages/react/src/components/DropdownSelector/ListItem/index.tsx#ListItem"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/Icon/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./packages/icons/dist/index.esm.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const Icon=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function IconInner({name,scale,unsafeNonGuidelineScale,className,...rest},ref){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("pixiv-icon",{ref,name,scale,"unsafe-non-guideline-scale":unsafeNonGuidelineScale,class:className,...rest})})),__WEBPACK_DEFAULT_EXPORT__=Icon;try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{unsafeNonGuidelineScale:{defaultValue:null,description:"",name:"unsafeNonGuidelineScale",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"enum",value:[{value:'"16/Add"'},{value:'"16/Archive"'},{value:'"16/ArrowDown"'},{value:'"16/Artwork"'},{value:'"16/Back"'},{value:'"16/Book"'},{value:'"16/BookmarkOff"'},{value:'"16/BookmarkOn"'},{value:'"16/Check"'},{value:'"16/Comment"'},{value:'"16/Dot"'},{value:'"16/Error"'},{value:'"16/Filter"'},{value:'"16/ImageResponse"'},{value:'"16/Info"'},{value:'"16/Like"'},{value:'"16/Menu"'},{value:'"16/More"'},{value:'"16/Nextworks"'},{value:'"16/Pencil"'},{value:'"16/Question"'},{value:'"16/Ranking"'},{value:'"16/Remove"'},{value:'"16/Search"'},{value:'"16/Smile"'},{value:'"16/Speaker"'},{value:'"16/View"'},{value:'"24/Add"'},{value:'"24/AddImage"'},{value:'"24/AddModel"'},{value:'"24/AddPeople"'},{value:'"24/AddRubi"'},{value:'"24/AddText"'},{value:'"24/Alart"'},{value:'"24/Announcement"'},{value:'"24/Ar"'},{value:'"24/Archive"'},{value:'"24/ArrowDown"'},{value:'"24/ArrowUp"'},{value:'"24/Binet"'},{value:'"24/Body"'},{value:'"24/BodyEdit"'},{value:'"24/Book"'},{value:'"24/BringBackward"'},{value:'"24/BringForward"'},{value:'"24/Calendar"'},{value:'"24/Camera"'},{value:'"24/CameraVideo"'},{value:'"24/ChangeCharactor"'},{value:'"24/ChatBot"'},{value:'"24/Check"'},{value:'"24/ChromaticAberration"'},{value:'"24/Close"'},{value:'"24/Codes"'},{value:'"24/Collapse"'},{value:'"24/CommentFill"'},{value:'"24/CommentOutline"'},{value:'"24/Contest"'},{value:'"24/Contrast"'},{value:'"24/Description"'},{value:'"24/DeviceRotation"'},{value:'"24/Discovery"'},{value:'"24/Dot"'},{value:'"24/DotAlt"'},{value:'"24/Down"'},{value:'"24/DownloadAlt"'},{value:'"24/Duplicate"'},{value:'"24/Dust"'},{value:'"24/Emoji"'},{value:'"24/Error"'},{value:'"24/ErrorOctagon"'},{value:'"24/Events"'},{value:'"24/Expand"'},{value:'"24/FaceEdit"'},{value:'"24/Fashion"'},{value:'"24/Feed"'},{value:'"24/File"'},{value:'"24/Filter"'},{value:'"24/Flare"'},{value:'"24/FormatAlignCenter"'},{value:'"24/FormatAlignLeft"'},{value:'"24/FormatAlignRight"'},{value:'"24/FormatColorFill"'},{value:'"24/FormatColorFillNoColor"'},{value:'"24/FormatFontFamily"'},{value:'"24/FormatFontSize"'},{value:'"24/FormatLetterSpacing"'},{value:'"24/FormatLineSpacing"'},{value:'"24/Fov"'},{value:'"24/FrameEffect"'},{value:'"24/FrameSize"'},{value:'"24/Gift"'},{value:'"24/Glow"'},{value:'"24/Groups"'},{value:'"24/HairEdit"'},{value:'"24/Hashtag"'},{value:'"24/Hide"'},{value:'"24/Home"'},{value:'"24/Hue"'},{value:'"24/Idea"'},{value:'"24/Image"'},{value:'"24/ImageAlt"'},{value:'"24/ImageHidden"'},{value:'"24/ImageReplace"'},{value:'"24/Images"'},{value:'"24/ImgContain"'},{value:'"24/ImgCover"'},{value:'"24/Index"'},{value:'"24/Info"'},{value:'"24/Invalid"'},{value:'"24/Invoice"'},{value:'"24/ItemRemove"'},{value:'"24/LatestWorks"'},{value:'"24/LikeOff"'},{value:'"24/LikeOn"'},{value:'"24/Link"'},{value:'"24/List"'},{value:'"24/LockLock"'},{value:'"24/LockUnlock"'},{value:'"24/Logout"'},{value:'"24/Manga"'},{value:'"24/Menu"'},{value:'"24/Message"'},{value:'"24/Microphone"'},{value:'"24/MobilePhone"'},{value:'"24/Move1"'},{value:'"24/Next"'},{value:'"24/NoImage"'},{value:'"24/Notification"'},{value:'"24/NotificationOff"'},{value:'"24/Novels"'},{value:'"24/OpenInNew"'},{value:'"24/Options"'},{value:'"24/OptionsAlt"'},{value:'"24/Overlay"'},{value:'"24/Palette"'},{value:'"24/Pause"'},{value:'"24/PauseAlt"'},{value:'"24/Pencil"'},{value:'"24/PencilDraw"'},{value:'"24/PencilLive"'},{value:'"24/PencilText"'},{value:'"24/Person"'},{value:'"24/Play"'},{value:'"24/Pose"'},{value:'"24/Prev"'},{value:'"24/Projects"'},{value:'"24/PullDown"'},{value:'"24/PullUp"'},{value:'"24/Question"'},{value:'"24/QuestionOutline"'},{value:'"24/Ranking"'},{value:'"24/ReadHorizontalLeft"'},{value:'"24/ReadHorizontalRight"'},{value:'"24/ReadVertical"'},{value:'"24/Reload"'},{value:'"24/ReloadLoop"'},{value:'"24/Reorder"'},{value:'"24/Roll"'},{value:'"24/Rotate90DegreesC"'},{value:'"24/Rotate90DegreesCc"'},{value:'"24/RotateRight"'},{value:'"24/Saturation"'},{value:'"24/Save"'},{value:'"24/Search"'},{value:'"24/Send"'},{value:'"24/Services"'},{value:'"24/Set"'},{value:'"24/Settings"'},{value:'"24/ShareAndroid"'},{value:'"24/ShareIos"'},{value:'"24/Shopping"'},{value:'"24/Show"'},{value:'"24/ShowOutline"'},{value:'"24/Shutter"'},{value:'"24/Star"'},{value:'"24/Subtract"'},{value:'"24/Sun"'},{value:'"24/Temperature"'},{value:'"24/Text"'},{value:'"24/Trash"'},{value:'"24/TrashAlt"'},{value:'"24/Up"'},{value:'"24/Upload"'},{value:'"24/UploadAlt"'},{value:'"24/Usagi"'},{value:'"24/UsagiAlt"'},{value:'"24/Users"'},{value:'"24/Video"'},{value:'"24/ViewGrid2Columns"'},{value:'"24/ViewGrid3Columns"'},{value:'"24/ViewList"'},{value:'"24/Warning"'},{value:'"32/BookmarkOff"'},{value:'"32/BookmarkOn"'},{value:'"32/Camera"'},{value:'"32/Close"'},{value:'"32/Collapse"'},{value:'"32/CommentOff"'},{value:'"32/CommentOn"'},{value:'"32/Delete"'},{value:'"32/Dot"'},{value:'"32/Edit"'},{value:'"32/Expand"'},{value:'"32/Gift"'},{value:'"32/Home"'},{value:'"32/HorizontalWriting"'},{value:'"32/Index"'},{value:'"32/LikeOff"'},{value:'"32/LikeOn"'},{value:'"32/LikeOnPrivate"'},{value:'"32/Message"'},{value:'"32/Next"'},{value:'"32/Notification"'},{value:'"32/NotificationOff"'},{value:'"32/NovelViewerSettings"'},{value:'"32/Pan"'},{value:'"32/Prev"'},{value:'"32/PullDown"'},{value:'"32/PullUp"'},{value:'"32/ReadHorizontalLeft"'},{value:'"32/ReadHorizontalRight"'},{value:'"32/ReadVertical"'},{value:'"32/RollHorizontal"'},{value:'"32/RollVertical"'},{value:'"32/SansSerif"'},{value:'"32/Serif"'},{value:'"32/ShareAndroid"'},{value:'"32/ShareIos"'},{value:'"32/Shopping"'},{value:'"32/Upload"'},{value:'"32/User"'},{value:'"32/VerticalWriting"'},{value:'"32/ZoomIn"'},{value:'"Inline/Add"'},{value:'"Inline/BookmarkOff"'},{value:'"Inline/BookmarkOn"'},{value:'"Inline/Breadcrumbs"'},{value:'"Inline/Check"'},{value:'"Inline/Comment"'},{value:'"Inline/ContextMenu"'},{value:'"Inline/External"'},{value:'"Inline/Filter"'},{value:'"Inline/Folder"'},{value:'"Inline/ImageResponse"'},{value:'"Inline/Images"'},{value:'"Inline/Like"'},{value:'"Inline/LikeOff"'},{value:'"Inline/List"'},{value:'"Inline/Location"'},{value:'"Inline/Lock"'},{value:'"Inline/More"'},{value:'"Inline/Nextworks"'},{value:'"Inline/OpenInNew"'},{value:'"Inline/Pencil"'},{value:'"Inline/Remove"'},{value:'"Inline/Smile"'},{value:'"Inline/SmileOn"'},{value:'"Inline/Users"'},{value:'"Inline/View"'},{value:'"Inline/ViewOutline"'}]}},scale:{defaultValue:null,description:"",name:"scale",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Icon/index.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"packages/react/src/components/Icon/index.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/Switch/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Switch});var dist_import=__webpack_require__("./node_modules/@react-aria/toggle/dist/import.mjs");var react=__webpack_require__("./node_modules/react/index.js"),toggle_dist_import=__webpack_require__("./node_modules/@react-stately/toggle/dist/import.mjs"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled=__webpack_require__("./packages/react/src/styled.ts"),index_esm=__webpack_require__("./packages/utils/dist/index.esm.js"),utils_dist_import=__webpack_require__("./node_modules/@react-aria/utils/dist/import.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SwitchCheckbox=(0,react.forwardRef)((function SwitchCheckboxInner(props,external){const{disabled,className}=props,ariaSwitchProps=(0,react.useMemo)((()=>({...props,"aria-label":"children"in props?void 0:props.label,isDisabled:props.disabled,isSelected:props.checked})),[props]),state=(0,toggle_dist_import.l)(ariaSwitchProps),ref=(0,utils_dist_import.B3)(external),{inputProps:{className:_className,type:_type,...rest}}=function $b418ec0c85c52f27$export$d853f7095ae95f88(props,state,ref){let{inputProps}=(0,dist_import.O)(props,state,ref),{isSelected}=state;return{inputProps:{...inputProps,role:"switch",checked:isSelected}}}(ariaSwitchProps,state,ref);return(0,jsx_runtime.jsxs)(Label,{className,"aria-disabled":disabled,children:[(0,jsx_runtime.jsx)(SwitchInput,{...rest,ref}),"children"in props?(0,jsx_runtime.jsx)(LabelInner,{children:props.children}):void 0]})})),Switch=(0,react.memo)(SwitchCheckbox),Label=styled_components_browser_esm.ZP.label`
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
`;try{SwitchCheckbox.displayName="SwitchCheckbox",SwitchCheckbox.__docgenInfo={description:"",displayName:"SwitchCheckbox",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(checked: boolean) => void"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Switch/index.tsx#SwitchCheckbox"]={docgenInfo:SwitchCheckbox.__docgenInfo,name:"SwitchCheckbox",path:"packages/react/src/components/Switch/index.tsx#SwitchCheckbox"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/styled.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>theme});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const theme=(0,__webpack_require__("./packages/styled/dist/index.esm.js").jG)(styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP)}}]);
//# sourceMappingURL=react-src-components-DropdownSelector-ListItem-index-story.5e621aa6.iframe.bundle.js.map