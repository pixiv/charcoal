"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[5021],{"./packages/react/src/_lib/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function unreachable(value){throw new Error(0===arguments.length?"unreachable":`unreachable (${JSON.stringify(value)})`)}function mergeRefs(...refs){return value=>{for(const ref of refs)"function"==typeof ref?ref(value):null!==ref&&(ref.current=value)}}function countCodePointsInString(string){return Array.from(string).length}__webpack_require__.d(__webpack_exports__,{$j:()=>countCodePointsInString,lq:()=>mergeRefs,t1:()=>unreachable})},"./packages/react/src/components/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Button});var react=__webpack_require__("./node_modules/react/index.js"),_lib=__webpack_require__("./packages/react/src/_lib/index.ts");function variantToFont(variant){switch(variant){case"Overlay":case"Primary":case"Navigation":case"Danger":return"text5";case"Default":return"text2";default:return(0,_lib.t1)(variant)}}try{variantToFont.displayName="variantToFont",variantToFont.__docgenInfo={description:"",displayName:"variantToFont",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Button/lib/variantToFont.tsx#variantToFont"]={docgenInfo:variantToFont.__docgenInfo,name:"variantToFont",path:"packages/react/src/components/Button/lib/variantToFont.tsx#variantToFont"})}catch(__react_docgen_typescript_loader_error){}function variantToBackground(variant){switch(variant){case"Overlay":return"surface4";case"Default":return"surface3";case"Primary":return"brand";case"Navigation":return"surface6";case"Danger":return"assertive";default:return(0,_lib.t1)(variant)}}try{variantToBackground.displayName="variantToBackground",variantToBackground.__docgenInfo={description:"",displayName:"variantToBackground",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Button/lib/variantToBackground.tsx#variantToBackground"]={docgenInfo:variantToBackground.__docgenInfo,name:"variantToBackground",path:"packages/react/src/components/Button/lib/variantToBackground.tsx#variantToBackground"})}catch(__react_docgen_typescript_loader_error){}var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Clickable=__webpack_require__("./packages/react/src/components/Clickable/index.tsx"),index_esm=__webpack_require__("./packages/styled/dist/index.esm.js");const horizontalPaddingSmall=styled_components_browser_esm.iv`
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
`;try{Clickable.displayName="Clickable",Clickable.__docgenInfo={description:"",displayName:"Clickable",props:{disabled:{defaultValue:null,description:"クリックの無効化",name:"disabled",required:!1,type:{name:"boolean"}},to:{defaultValue:null,description:"リンクのURL。指定するとbuttonタグではなくaタグとして描画される",name:"to",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Clickable/index.tsx#Clickable"]={docgenInfo:Clickable.__docgenInfo,name:"Clickable",path:"packages/react/src/components/Clickable/index.tsx#Clickable"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/DropdownSelector/DropdownMenuItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>DropdownMenuItem});var styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_MenuItem__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/components/DropdownSelector/MenuItem/index.tsx"),_MenuList_MenuListContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/components/DropdownSelector/MenuList/MenuListContext.ts"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Icon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/react/src/components/Icon/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function DropdownMenuItem(props){const{value:ctxValue}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_MenuList_MenuListContext__WEBPACK_IMPORTED_MODULE_2__.b),isSelected=props.value===ctxValue,{children,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__.Z,{...rest,children:[isSelected&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text2ColorIcon,{name:"16/Check"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledSpan,{isSelected,children:props.children})]})}DropdownMenuItem.displayName="DropdownMenuItem";const StyledSpan=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.span`
  font-size: 14px;
  line-height: 22px;
  color: var(--charcoal-text2);
  padding: 9px 0;

  display: flex;
  align-items: center;
  width: 100%;
  margin-left: ${({isSelected})=>!0===isSelected?0:20}px;
`,Text2ColorIcon=(0,styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP)(_Icon__WEBPACK_IMPORTED_MODULE_5__.Z)`
  color: var(--charcoal-text2);
  padding-right: 4px;
`;try{DropdownMenuItem.displayName="DropdownMenuItem",DropdownMenuItem.__docgenInfo={description:"DropdownSelectorの選択肢として使うMenuItem",displayName:"DropdownMenuItem",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/DropdownSelector/DropdownMenuItem.tsx#DropdownMenuItem"]={docgenInfo:DropdownMenuItem.__docgenInfo,name:"DropdownMenuItem",path:"packages/react/src/components/DropdownSelector/DropdownMenuItem.tsx#DropdownMenuItem"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/DropdownSelector/ListItem/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ListItem});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ListItem(props){const{children,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledLi,{role:"option",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ItemDiv,{...rest,children:props.children})})}ListItem.displayName="ListItem";const StyledLi=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.li`
  list-style: none;
`,ItemDiv=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.div`
  display: flex;
  align-items: center;
  min-height: 40px;
  cursor: pointer;
  outline: none;

  padding-right: 16px;
  padding-left: 16px;

  transition: background-color 0.2s;

  &:disabled,
  &[aria-disabled]:not([aria-disabled='false']) {
    opacity: 0.32;
    cursor: default;
  }

  :hover,
  :focus,
  :focus-within {
    &:not(disabled):not([aria-disabled='true']) {
      background-color: var(--charcoal-surface3);
    }
  }
`;try{ListItem.displayName="ListItem",ListItem.__docgenInfo={description:"リストのある要素を示すコンポーネント\n\nasを用いて拡張することができる",displayName:"ListItem",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"CustomJSXElement"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/DropdownSelector/ListItem/index.tsx#ListItem"]={docgenInfo:ListItem.__docgenInfo,name:"ListItem",path:"packages/react/src/components/DropdownSelector/ListItem/index.tsx#ListItem"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/DropdownSelector/MenuItem/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MenuItem});var ListItem=__webpack_require__("./packages/react/src/components/DropdownSelector/ListItem/index.tsx"),react=__webpack_require__("./node_modules/react/index.js");function handleFocusByKeyBoard(element,parent){if(parent.scrollHeight>parent.clientHeight){const rect=element.getBoundingClientRect(),parentRect=parent.getBoundingClientRect();rect.bottom>parentRect.bottom?parent.scrollTo({top:parent.scrollTop+rect.bottom-parentRect.bottom}):rect.top<parentRect.top&&parent.scrollTo({top:parent.scrollTop-(parentRect.top-rect.top)})}else!function scrollIfNeeded(element){const elementRect=element.getBoundingClientRect();elementRect.top>=0&&elementRect.bottom<=(window.innerHeight||document.documentElement.clientHeight)||element.scrollIntoView({block:"nearest"})}(element)}try{handleFocusByKeyBoard.displayName="handleFocusByKeyBoard",handleFocusByKeyBoard.__docgenInfo={description:"elementをparentのスクロールビューに入るようにスクロールする\nparentがスクロール可能でなければelementが見えるようにスクロールする",displayName:"handleFocusByKeyBoard",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/DropdownSelector/MenuItem/internals/handleFocusByKeyBoard.tsx#handleFocusByKeyBoard"]={docgenInfo:handleFocusByKeyBoard.__docgenInfo,name:"handleFocusByKeyBoard",path:"packages/react/src/components/DropdownSelector/MenuItem/internals/handleFocusByKeyBoard.tsx#handleFocusByKeyBoard"})}catch(__react_docgen_typescript_loader_error){}var MenuListContext=__webpack_require__("./packages/react/src/components/DropdownSelector/MenuList/MenuListContext.ts");function useMenuItemHandleKeyDown(value){const{setValue,root,propsArray}=(0,react.useContext)(MenuListContext.b),setContextValue=(0,react.useCallback)((()=>{void 0!==value&&setValue(value)}),[value,setValue]);return[(0,react.useCallback)((e=>{if("Enter"===e.key)setContextValue();else if("ArrowUp"===e.key||"ArrowDown"===e.key){const isForward="ArrowDown"===e.key;if(e.preventDefault(),!propsArray||void 0===value)return;const values=propsArray.map((props=>props.value)).filter((v=>v));let index=values.indexOf(value);if(-1===index)return;for(let n=0;n<values.length;n++){const focusValue=isForward?index+1>=values.length?values[0]:values[index+1]:index-1<0?values[values.length-1]:values[index-1],next=root?.current?.querySelector(`[data-key='${focusValue}']`);if(next instanceof HTMLElement){if("true"===next.ariaDisabled){index+=isForward?1:-1;continue}next.focus({preventScroll:!0}),root?.current?.parentElement&&handleFocusByKeyBoard(next,root.current.parentElement);break}}}}),[setContextValue,propsArray,value,root]),setContextValue]}try{useMenuItemHandleKeyDown.displayName="useMenuItemHandleKeyDown",useMenuItemHandleKeyDown.__docgenInfo={description:"MenuListContextに含まれるvalue間で上下キーでfocusを移動できる\nEnterキーでMenuListContextに値を設定する\n上記2つの処理を含む処理(handleKeyDown)と、Enterキーを押下した処理(setContextValue)を配列で返す",displayName:"useMenuItemHandleKeyDown",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/DropdownSelector/MenuItem/internals/useMenuItemHandleKeyDown.tsx#useMenuItemHandleKeyDown"]={docgenInfo:useMenuItemHandleKeyDown.__docgenInfo,name:"useMenuItemHandleKeyDown",path:"packages/react/src/components/DropdownSelector/MenuItem/internals/useMenuItemHandleKeyDown.tsx#useMenuItemHandleKeyDown"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function MenuItem(props){const{children,as,...rest}=props,[handleKeyDown,setContextValue]=useMenuItemHandleKeyDown(props.value);return(0,jsx_runtime.jsx)(ListItem.Z,{...rest,as,"data-key":props.value,onKeyDown:handleKeyDown,onClick:!0===props.disabled?void 0:setContextValue,tabIndex:-1,"aria-disabled":props.disabled,children:props.children})}MenuItem.displayName="MenuItem";try{MenuItem.displayName="MenuItem",MenuItem.__docgenInfo={description:"上下キーでフォーカス移動でき、エンターキーで選択できるリストの項目\n基本的に`<MenuList>`, `<MenuGroup>`と合わせて使用する",displayName:"MenuItem",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"CustomJSXElement"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/DropdownSelector/MenuItem/index.tsx#MenuItem"]={docgenInfo:MenuItem.__docgenInfo,name:"MenuItem",path:"packages/react/src/components/DropdownSelector/MenuItem/index.tsx#MenuItem"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/DropdownSelector/MenuList/MenuListContext.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>MenuListContext});const MenuListContext=(0,__webpack_require__("./node_modules/react/index.js").createContext)({root:void 0,value:"",propsArray:[],setValue:_v=>{}})},"./packages/react/src/components/DropdownSelector/MenuList/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MenuList});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_MenuListContext__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/components/DropdownSelector/MenuList/MenuListContext.ts"),_internals_getValuesRecursive__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/components/DropdownSelector/MenuList/internals/getValuesRecursive.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function MenuList(props){const root=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),propsArray=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(0,_internals_getValuesRecursive__WEBPACK_IMPORTED_MODULE_2__.H)(props.children)),[props.children]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledUl,{ref:root,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuListContext__WEBPACK_IMPORTED_MODULE_3__.b.Provider,{value:{value:props.value??"",root,propsArray,setValue:v=>{props.onChange?.(v)}},children:props.children})})}MenuList.displayName="MenuList";const StyledUl=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.ul`
  padding: 0;
  margin: 0;
`;try{MenuList.displayName="MenuList",MenuList.__docgenInfo={description:"上下キーでフォーカス移動でき、エンターキーで選択できるリストの項目\n基本的に`<MenuItem>`, `<MenuGroup>`と合わせて使用する",displayName:"MenuList",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((v: string) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/DropdownSelector/MenuList/index.tsx#MenuList"]={docgenInfo:MenuList.__docgenInfo,name:"MenuList",path:"packages/react/src/components/DropdownSelector/MenuList/index.tsx#MenuList"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/DropdownSelector/MenuList/internals/getValuesRecursive.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>getValuesRecursive});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function getValuesRecursive(children){const childArray=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children),propsArray=[];for(let i=0;i<childArray.length;i++){const child=childArray[i];if(react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)){const props=child.props;"value"in props&&"string"==typeof props.value&&propsArray.push({disabled:props.disabled,value:props.value}),"children"in props&&props.children&&propsArray.push(...getValuesRecursive(props.children))}}return propsArray}try{getValuesRecursive.displayName="getValuesRecursive",getValuesRecursive.__docgenInfo={description:"valueというpropsを持つ子要素の値を再起的に探索して配列にする",displayName:"getValuesRecursive",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/DropdownSelector/MenuList/internals/getValuesRecursive.tsx#getValuesRecursive"]={docgenInfo:getValuesRecursive.__docgenInfo,name:"getValuesRecursive",path:"packages/react/src/components/DropdownSelector/MenuList/internals/getValuesRecursive.tsx#getValuesRecursive"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/DropdownSelector/Popover/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Popover});var react=__webpack_require__("./node_modules/react/index.js"),dist_import=__webpack_require__("./node_modules/@react-aria/overlays/dist/import.mjs"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),ModalBackgroundContext=__webpack_require__("./packages/react/src/components/Modal/ModalBackgroundContext.tsx");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _empty=()=>null;function Popover(props){const defaultPopoverRef=(0,react.useRef)(null),finalPopoverRef=void 0===props.popoverRef?defaultPopoverRef:props.popoverRef,{popoverProps,underlayProps}=(0,dist_import.Sv)({triggerRef:props.triggerRef,popoverRef:finalPopoverRef,containerPadding:16},{close:props.onClose,isOpen:props.isOpen,open:_empty,setOpen:_empty,toggle:_empty});return function usePreventScroll(element,isOpen){(0,react.useEffect)((()=>{if(isOpen&&element){const defaultPaddingRight=element.style.paddingRight,defaultOverflow=element.style.overflow;return element.style.paddingRight=window.innerWidth-element.clientWidth+"px",element.style.overflow="hidden",()=>{element.style.paddingRight=defaultPaddingRight,element.style.overflow=defaultOverflow}}}),[element,isOpen])}((0,react.useContext)(ModalBackgroundContext.C),props.isOpen),props.isOpen?(0,jsx_runtime.jsxs)(dist_import.aV,{portalContainer:document.body,children:[(0,jsx_runtime.jsx)("div",{...underlayProps,style:{position:"fixed",zIndex:"number"==typeof popoverProps.style?.zIndex?popoverProps.style.zIndex-1:99999,inset:0}}),(0,jsx_runtime.jsxs)(DropdownPopoverDiv,{...popoverProps,ref:finalPopoverRef,children:[(0,jsx_runtime.jsx)(dist_import.U4,{onDismiss:()=>props.onClose()}),props.children,(0,jsx_runtime.jsx)(dist_import.U4,{onDismiss:()=>props.onClose()})]})]}):null}Popover.displayName="Popover";const DropdownPopoverDiv=styled_components_browser_esm.ZP.div`
  margin: 4px 0;
  list-style: none;
  overflow: auto;
  max-height: inherit;
  background-color: var(--charcoal-background1);
  border: solid 1px var(--charcoal-border-default);
  border-radius: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
`;try{Popover.displayName="Popover",Popover.__docgenInfo={description:"画面の全面に動的に開くことができるコンテナ要素\n外の要素をクリックしたり、内部からフォーカスを移動した場合に自動的に閉じる\n\ntriggerRefの付近に画面内に収まるように表示される",displayName:"Popover",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},triggerRef:{defaultValue:null,description:"",name:"triggerRef",required:!0,type:{name:"RefObject<Element>"}},popoverRef:{defaultValue:null,description:"",name:"popoverRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/DropdownSelector/Popover/index.tsx#Popover"]={docgenInfo:Popover.__docgenInfo,name:"Popover",path:"packages/react/src/components/DropdownSelector/Popover/index.tsx#Popover"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/DropdownSelector/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>DropdownSelector});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),index_esm=__webpack_require__("./packages/utils/dist/index.esm.js"),Icon=__webpack_require__("./packages/react/src/components/Icon/index.tsx"),FieldLabel=__webpack_require__("./packages/react/src/components/FieldLabel/index.tsx"),Popover=__webpack_require__("./packages/react/src/components/DropdownSelector/Popover/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function DropdownPopover({children,...props}){const ref=(0,react.useRef)(null);return(0,react.useEffect)((()=>{props.isOpen&&ref.current&&props.triggerRef.current&&(ref.current.style.width=`${props.triggerRef.current.clientWidth}px`)}),[props.triggerRef,props.isOpen]),(0,react.useEffect)((()=>{if(props.isOpen&&void 0!==props.value){const windowScrollY=window.scrollY,windowScrollX=window.scrollX,selectedElement=document.querySelector(`[data-key="${props.value.toString()}"]`);selectedElement?.focus(),window.scrollTo(windowScrollX,windowScrollY)}}),[props.value,props.isOpen]),(0,jsx_runtime.jsx)(Popover.Z,{isOpen:props.isOpen,onClose:props.onClose,popoverRef:ref,triggerRef:props.triggerRef,children})}DropdownPopover.displayName="DropdownPopover";try{DropdownPopover.displayName="DropdownPopover",DropdownPopover.__docgenInfo={description:"DropdownSelectorの選択肢をを表示するためのPopover\ntriggerRefの要素と同じ幅になる\n表示の際にvalueが等しいDropdownMenuItemを中央に表示する",displayName:"DropdownPopover",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},triggerRef:{defaultValue:null,description:"",name:"triggerRef",required:!0,type:{name:"RefObject<Element>"}},popoverRef:{defaultValue:null,description:"",name:"popoverRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"Key"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/DropdownSelector/DropdownPopover.tsx#DropdownPopover"]={docgenInfo:DropdownPopover.__docgenInfo,name:"DropdownPopover",path:"packages/react/src/components/DropdownSelector/DropdownPopover.tsx#DropdownPopover"})}catch(__react_docgen_typescript_loader_error){}function findPreviewRecursive(children,value){const childArray=react.Children.toArray(children);for(let i=0;i<childArray.length;i++){const child=childArray[i];if(react.isValidElement(child)){if("value"in child.props){if(child.props.value===value&&"children"in child.props){return child.props.children}}if("children"in child.props){const children=findPreviewRecursive(child.props.children,value);if(void 0!==children)return children}}}}try{findPreviewRecursive.displayName="findPreviewRecursive",findPreviewRecursive.__docgenInfo={description:"DropdownSelectorの選択中の要素をレンダリングするため、\n選択中のMenuItemを再帰的に探索しReactNodeを返す。",displayName:"findPreviewRecursive",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/DropdownSelector/utils/findPreviewRecursive.tsx#findPreviewRecursive"]={docgenInfo:findPreviewRecursive.__docgenInfo,name:"findPreviewRecursive",path:"packages/react/src/components/DropdownSelector/utils/findPreviewRecursive.tsx#findPreviewRecursive"})}catch(__react_docgen_typescript_loader_error){}var MenuList=__webpack_require__("./packages/react/src/components/DropdownSelector/MenuList/index.tsx"),dist_index_esm=__webpack_require__("./packages/styled/dist/index.esm.js"),getValuesRecursive=__webpack_require__("./packages/react/src/components/DropdownSelector/MenuList/internals/getValuesRecursive.tsx"),dist_import=__webpack_require__("./node_modules/@react-aria/visually-hidden/dist/import.mjs");const defaultRequiredText="*必須";function DropdownSelector({onChange,...props}){const triggerRef=(0,react.useRef)(null),[isOpen,setIsOpen]=(0,react.useState)(!1),preview=findPreviewRecursive(props.children,props.value),isPlaceholder=(0,react.useMemo)((()=>void 0!==props.placeholder&&void 0===preview),[preview,props.placeholder]),propsArray=(0,getValuesRecursive.H)(props.children),{visuallyHiddenProps}=(0,dist_import.S)(),handleChange=(0,react.useCallback)((e=>{onChange(e.target.value)}),[onChange]);return(0,jsx_runtime.jsxs)(DropdownSelectorRoot,{"aria-disabled":props.disabled,children:[!0===props.showLabel&&(0,jsx_runtime.jsx)(DropdownFieldLabel,{label:props.label,required:props.required,requiredText:props.requiredText??defaultRequiredText,subLabel:props.subLabel}),(0,jsx_runtime.jsx)("div",{...visuallyHiddenProps,"aria-hidden":"true",children:(0,jsx_runtime.jsx)("select",{name:props.name,value:props.value,onChange:handleChange,tabIndex:-1,children:propsArray.map((itemProps=>(0,jsx_runtime.jsx)("option",{value:itemProps.value,disabled:itemProps.disabled,children:itemProps.value},itemProps.value)))})}),(0,jsx_runtime.jsxs)(DropdownButton,{invalid:props.invalid,disabled:props.disabled,onClick:()=>{!0!==props.disabled&&setIsOpen(!0)},ref:triggerRef,type:"button",$active:isOpen,children:[(0,jsx_runtime.jsx)(DropdownButtonText,{$isText3:isPlaceholder,children:isPlaceholder?props.placeholder:preview}),(0,jsx_runtime.jsx)(DropdownButtonIcon,{name:"16/Menu"})]}),isOpen&&(0,jsx_runtime.jsx)(DropdownPopover,{isOpen,onClose:()=>setIsOpen(!1),triggerRef,value:props.value,children:(0,jsx_runtime.jsx)(MenuList.Z,{value:props.value,onChange:v=>{onChange(v),setIsOpen(!1)},children:props.children})}),void 0!==props.assistiveText&&(0,jsx_runtime.jsx)(AssertiveText,{invalid:props.invalid,children:props.assistiveText})]})}DropdownSelector.displayName="DropdownSelector";const DropdownSelectorRoot=styled_components_browser_esm.ZP.div`
  display: inline-block;
  width: 100%;

  ${index_esm.t0} {
    cursor: default;
    opacity: 0.32;
  }
`,DropdownFieldLabel=(0,styled_components_browser_esm.ZP)(FieldLabel.Z)`
  width: 100%;
  margin-bottom: 8px;
`,DropdownButton=styled_components_browser_esm.ZP.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 40px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  cursor: pointer;
  gap: 4px;

  ${index_esm.t0} {
    cursor: default;
  }

  padding-right: 8px;
  padding-left: 8px;
  background-color: var(--charcoal-surface3);
  border-radius: 4px;

  transition: 0.2s box-shadow, 0.2s background-color;

  &:not(:disabled):not([aria-disabled]),
  &[aria-disabled='false'] {
    ${dist_index_esm.L_}
    ${({$active})=>!0===$active?styled_components_browser_esm.iv`
            background-color: var(--charcoal-surface3-press);
          `:styled_components_browser_esm.iv`
            &:hover {
              background-color: var(--charcoal-surface3-hover);
            }
            &:active {
              background-color: var(--charcoal-surface3-press);
            }
          `}
  }

  ${({invalid})=>!0===invalid&&styled_components_browser_esm.iv`
      &:not(:disabled):not([aria-disabled]),
      &[aria-disabled='false'] {
        box-shadow: 0 0 0 4px rgba(255, 43, 0, 0.32);
      }
    `}
`,DropdownButtonText=styled_components_browser_esm.ZP.span`
  text-align: left;
  font-size: 14px;
  line-height: 22px;
  display: flow-root;
  color: var(--charcoal-${p=>p.$isText3?"text3":"text2"});
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,DropdownButtonIcon=(0,styled_components_browser_esm.ZP)(Icon.Z)`
  color: var(--charcoal-text2);
`,AssertiveText=styled_components_browser_esm.ZP.div`
  margin-top: 8px;
  font-size: 14px;
  color: var(--charcoal-text2);
  line-height: 22px;
  display: flow-root;
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

  ${({invalid})=>!0===invalid&&styled_components_browser_esm.iv`
      color: var(--charcoal-assertive);
    `}
`;try{DropdownSelector.displayName="DropdownSelector",DropdownSelector.__docgenInfo={description:"",displayName:"DropdownSelector",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},showLabel:{defaultValue:null,description:"",name:"showLabel",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},assistiveText:{defaultValue:null,description:"",name:"assistiveText",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},requiredText:{defaultValue:null,description:"",name:"requiredText",required:!1,type:{name:"string"}},subLabel:{defaultValue:null,description:"",name:"subLabel",required:!1,type:{name:"ReactNode"}},name:{defaultValue:null,description:"the name of hidden `<select />`",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/DropdownSelector/index.tsx#DropdownSelector"]={docgenInfo:DropdownSelector.__docgenInfo,name:"DropdownSelector",path:"packages/react/src/components/DropdownSelector/index.tsx#DropdownSelector"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/FieldLabel/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const FieldLabel=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function FieldLabel({style,className,label,required=!1,requiredText,subLabel,...labelProps},ref){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FieldLabelWrapper,{style,className,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Label,{ref,...labelProps,children:label}),required&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RequiredText,{children:requiredText}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SubLabelClickable,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{children:subLabel})})]})})),__WEBPACK_DEFAULT_EXPORT__=FieldLabel,Label=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.label`
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
`;try{FieldLabel.displayName="FieldLabel",FieldLabel.__docgenInfo={description:"",displayName:"FieldLabel",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},subLabel:{defaultValue:null,description:"",name:"subLabel",required:!1,type:{name:"ReactNode"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},requiredText:{defaultValue:null,description:"",name:"requiredText",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/FieldLabel/index.tsx#FieldLabel"]={docgenInfo:FieldLabel.__docgenInfo,name:"FieldLabel",path:"packages/react/src/components/FieldLabel/index.tsx#FieldLabel"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/Icon/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./packages/icons/dist/index.esm.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const Icon=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function IconInner({name,scale,unsafeNonGuidelineScale,className,...rest},ref){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("pixiv-icon",{ref,name,scale,"unsafe-non-guideline-scale":unsafeNonGuidelineScale,class:className,...rest})})),__WEBPACK_DEFAULT_EXPORT__=Icon;try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{unsafeNonGuidelineScale:{defaultValue:null,description:"",name:"unsafeNonGuidelineScale",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"enum",value:[{value:'"16/Add"'},{value:'"16/Archive"'},{value:'"16/ArrowDown"'},{value:'"16/Artwork"'},{value:'"16/Back"'},{value:'"16/Book"'},{value:'"16/BookmarkOff"'},{value:'"16/BookmarkOn"'},{value:'"16/Check"'},{value:'"16/Comment"'},{value:'"16/Dot"'},{value:'"16/Error"'},{value:'"16/Filter"'},{value:'"16/ImageResponse"'},{value:'"16/Info"'},{value:'"16/Like"'},{value:'"16/Menu"'},{value:'"16/More"'},{value:'"16/Nextworks"'},{value:'"16/Pencil"'},{value:'"16/Question"'},{value:'"16/Ranking"'},{value:'"16/Remove"'},{value:'"16/Search"'},{value:'"16/Smile"'},{value:'"16/Speaker"'},{value:'"16/View"'},{value:'"16/Warning"'},{value:'"24/Add"'},{value:'"24/AddImage"'},{value:'"24/AddModel"'},{value:'"24/AddPeople"'},{value:'"24/AddRubi"'},{value:'"24/AddText"'},{value:'"24/Alart"'},{value:'"24/Announcement"'},{value:'"24/Ar"'},{value:'"24/Archive"'},{value:'"24/ArrowDown"'},{value:'"24/ArrowUp"'},{value:'"24/Binet"'},{value:'"24/Body"'},{value:'"24/BodyEdit"'},{value:'"24/Book"'},{value:'"24/BringBackward"'},{value:'"24/BringForward"'},{value:'"24/Calendar"'},{value:'"24/Camera"'},{value:'"24/CameraVideo"'},{value:'"24/ChangeCharactor"'},{value:'"24/ChatBot"'},{value:'"24/Check"'},{value:'"24/ChromaticAberration"'},{value:'"24/Click"'},{value:'"24/Close"'},{value:'"24/Codes"'},{value:'"24/Collapse"'},{value:'"24/CommentFill"'},{value:'"24/CommentOutline"'},{value:'"24/Contest"'},{value:'"24/Contrast"'},{value:'"24/Description"'},{value:'"24/DeviceRotation"'},{value:'"24/Discovery"'},{value:'"24/Dot"'},{value:'"24/DotAlt"'},{value:'"24/Down"'},{value:'"24/DownloadAlt"'},{value:'"24/Duplicate"'},{value:'"24/Dust"'},{value:'"24/Emoji"'},{value:'"24/Error"'},{value:'"24/ErrorOctagon"'},{value:'"24/Events"'},{value:'"24/Expand"'},{value:'"24/FaceEdit"'},{value:'"24/Fashion"'},{value:'"24/Feed"'},{value:'"24/File"'},{value:'"24/Filter"'},{value:'"24/Flare"'},{value:'"24/FormatAlignCenter"'},{value:'"24/FormatAlignLeft"'},{value:'"24/FormatAlignRight"'},{value:'"24/FormatColorFill"'},{value:'"24/FormatColorFillNoColor"'},{value:'"24/FormatFontFamily"'},{value:'"24/FormatFontSize"'},{value:'"24/FormatLetterSpacing"'},{value:'"24/FormatLineSpacing"'},{value:'"24/Fov"'},{value:'"24/FrameEffect"'},{value:'"24/FrameSize"'},{value:'"24/Gift"'},{value:'"24/Glow"'},{value:'"24/Groups"'},{value:'"24/HairEdit"'},{value:'"24/Hashtag"'},{value:'"24/Hide"'},{value:'"24/Home"'},{value:'"24/Hue"'},{value:'"24/Idea"'},{value:'"24/Image"'},{value:'"24/ImageAlt"'},{value:'"24/ImageHidden"'},{value:'"24/ImageReplace"'},{value:'"24/Images"'},{value:'"24/ImgContain"'},{value:'"24/ImgCover"'},{value:'"24/Index"'},{value:'"24/Info"'},{value:'"24/Invalid"'},{value:'"24/Invoice"'},{value:'"24/ItemRemove"'},{value:'"24/LatestWorks"'},{value:'"24/LikeOff"'},{value:'"24/LikeOn"'},{value:'"24/Link"'},{value:'"24/List"'},{value:'"24/LockLock"'},{value:'"24/LockUnlock"'},{value:'"24/Logout"'},{value:'"24/Manga"'},{value:'"24/Menu"'},{value:'"24/Message"'},{value:'"24/Microphone"'},{value:'"24/MobilePhone"'},{value:'"24/Move1"'},{value:'"24/Next"'},{value:'"24/NoImage"'},{value:'"24/Notification"'},{value:'"24/NotificationOff"'},{value:'"24/Novels"'},{value:'"24/OpenInNew"'},{value:'"24/Options"'},{value:'"24/OptionsAlt"'},{value:'"24/Overlay"'},{value:'"24/Palette"'},{value:'"24/Pause"'},{value:'"24/PauseAlt"'},{value:'"24/Pencil"'},{value:'"24/PencilDraw"'},{value:'"24/PencilLive"'},{value:'"24/PencilText"'},{value:'"24/Person"'},{value:'"24/Play"'},{value:'"24/Pose"'},{value:'"24/Prev"'},{value:'"24/Projects"'},{value:'"24/PullDown"'},{value:'"24/PullUp"'},{value:'"24/Question"'},{value:'"24/QuestionOutline"'},{value:'"24/Ranking"'},{value:'"24/ReadHorizontalLeft"'},{value:'"24/ReadHorizontalRight"'},{value:'"24/ReadVertical"'},{value:'"24/Reload"'},{value:'"24/ReloadLoop"'},{value:'"24/Reorder"'},{value:'"24/Roll"'},{value:'"24/Rotate90DegreesC"'},{value:'"24/Rotate90DegreesCc"'},{value:'"24/RotateRight"'},{value:'"24/Saturation"'},{value:'"24/Save"'},{value:'"24/Search"'},{value:'"24/Send"'},{value:'"24/Services"'},{value:'"24/Set"'},{value:'"24/Settings"'},{value:'"24/ShareAndroid"'},{value:'"24/ShareIos"'},{value:'"24/Shopping"'},{value:'"24/Show"'},{value:'"24/ShowOutline"'},{value:'"24/Shutter"'},{value:'"24/Star"'},{value:'"24/Subtract"'},{value:'"24/Sun"'},{value:'"24/Temperature"'},{value:'"24/Text"'},{value:'"24/Trash"'},{value:'"24/TrashAlt"'},{value:'"24/Up"'},{value:'"24/Upload"'},{value:'"24/UploadAlt"'},{value:'"24/Usagi"'},{value:'"24/UsagiAlt"'},{value:'"24/Users"'},{value:'"24/Video"'},{value:'"24/ViewGrid2Columns"'},{value:'"24/ViewGrid3Columns"'},{value:'"24/ViewList"'},{value:'"24/Warning"'},{value:'"32/BookmarkOff"'},{value:'"32/BookmarkOn"'},{value:'"32/Camera"'},{value:'"32/Close"'},{value:'"32/Collapse"'},{value:'"32/CommentOff"'},{value:'"32/CommentOn"'},{value:'"32/Delete"'},{value:'"32/Dot"'},{value:'"32/Edit"'},{value:'"32/Expand"'},{value:'"32/Gift"'},{value:'"32/Home"'},{value:'"32/HorizontalWriting"'},{value:'"32/Index"'},{value:'"32/LikeOff"'},{value:'"32/LikeOn"'},{value:'"32/LikeOnPrivate"'},{value:'"32/Message"'},{value:'"32/Next"'},{value:'"32/Notification"'},{value:'"32/NotificationOff"'},{value:'"32/NovelViewerSettings"'},{value:'"32/Pan"'},{value:'"32/Prev"'},{value:'"32/PullDown"'},{value:'"32/PullUp"'},{value:'"32/ReadHorizontalLeft"'},{value:'"32/ReadHorizontalRight"'},{value:'"32/ReadVertical"'},{value:'"32/RollHorizontal"'},{value:'"32/RollVertical"'},{value:'"32/SansSerif"'},{value:'"32/Serif"'},{value:'"32/ShareAndroid"'},{value:'"32/ShareIos"'},{value:'"32/Shopping"'},{value:'"32/Upload"'},{value:'"32/User"'},{value:'"32/VerticalWriting"'},{value:'"32/ZoomIn"'},{value:'"Inline/Add"'},{value:'"Inline/BookmarkOff"'},{value:'"Inline/BookmarkOn"'},{value:'"Inline/Breadcrumbs"'},{value:'"Inline/Check"'},{value:'"Inline/Comment"'},{value:'"Inline/ContextMenu"'},{value:'"Inline/External"'},{value:'"Inline/Filter"'},{value:'"Inline/Folder"'},{value:'"Inline/ImageResponse"'},{value:'"Inline/Images"'},{value:'"Inline/Like"'},{value:'"Inline/LikeOff"'},{value:'"Inline/List"'},{value:'"Inline/Location"'},{value:'"Inline/Lock"'},{value:'"Inline/More"'},{value:'"Inline/Nextworks"'},{value:'"Inline/OpenInNew"'},{value:'"Inline/Pencil"'},{value:'"Inline/Remove"'},{value:'"Inline/Smile"'},{value:'"Inline/SmileOn"'},{value:'"Inline/Users"'},{value:'"Inline/View"'},{value:'"Inline/ViewOutline"'}]}},scale:{defaultValue:null,description:"",name:"scale",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:'"1"'},{value:'"2"'},{value:'"3"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Icon/index.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"packages/react/src/components/Icon/index.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/IconButton/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Clickable__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/components/Clickable/index.tsx"),_charcoal_ui_styled__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/styled/dist/index.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const IconButton=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function IconButtonInner({variant="Default",size="M",icon,isActive=!1,...rest},ref){return function validateIconSize(size,icon){let requiredIconSize;switch(size){case"XS":requiredIconSize="16";break;case"S":case"M":requiredIconSize="24"}const result=/^\d*/u.exec(icon);if(null==result)throw new Error("Invalid icon name");const[iconSize]=result;iconSize!==requiredIconSize&&console.warn(`IconButton with size "${size}" expect icon size "${requiredIconSize}, but got "${iconSize}"`)}(size,icon),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledIconButton,{...rest,ref,$size:size,$variant:variant,$isActive:isActive,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("pixiv-icon",{name:icon})})})),__WEBPACK_DEFAULT_EXPORT__=IconButton,StyledIconButton=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(_Clickable__WEBPACK_IMPORTED_MODULE_3__.Z).attrs((function styledProps({$size,$variant}){return{...variantToProps($variant),...sizeToProps($size)}}))`
  user-select: none;

  width: ${p=>p.$width}px;
  height: ${p=>p.$height}px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(${({$font})=>`--charcoal-${$font}`});
  background-color: var(${({$background})=>`--charcoal-${$background}`});
  border-radius: 999999px;
  transition: 0.2s background-color, 0.2s box-shadow;

  &:not(:disabled):not([aria-disabled]),
  &[aria-disabled='false'] {
    ${({$isActive,$background,$font})=>$isActive?styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
            color: var(--charcoal-${$font}-press);
            background-color: var(--charcoal-${$background}-press);
          `:styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
            &:hover {
              color: var(--charcoal-${$font}-hover);
              background-color: var(--charcoal-${$background}-hover);
            }
            &:active {
              color: var(--charcoal-${$font}-press);
              background-color: var(--charcoal-${$background}-press);
            }
          `}
    ${_charcoal_ui_styled__WEBPACK_IMPORTED_MODULE_4__.L_}
  }

  &:disabled,
  &[aria-disabled]:not([aria-disabled='false']) {
    opacity: 0.32;
  }
`;function variantToProps(variant){switch(variant){case"Default":return{$font:"text3",$background:"transparent"};case"Overlay":return{$font:"text5",$background:"surface4"}}}function sizeToProps(size){switch(size){case"XS":return{$width:20,$height:20};case"S":return{$width:32,$height:32};case"M":return{$width:40,$height:40}}}try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{variant:{defaultValue:{value:"Default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Overlay"'}]}},size:{defaultValue:{value:"M"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"S"'},{value:'"M"'},{value:'"XS"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"enum",value:[{value:'"16/Add"'},{value:'"16/Archive"'},{value:'"16/ArrowDown"'},{value:'"16/Artwork"'},{value:'"16/Back"'},{value:'"16/Book"'},{value:'"16/BookmarkOff"'},{value:'"16/BookmarkOn"'},{value:'"16/Check"'},{value:'"16/Comment"'},{value:'"16/Dot"'},{value:'"16/Error"'},{value:'"16/Filter"'},{value:'"16/ImageResponse"'},{value:'"16/Info"'},{value:'"16/Like"'},{value:'"16/Menu"'},{value:'"16/More"'},{value:'"16/Nextworks"'},{value:'"16/Pencil"'},{value:'"16/Question"'},{value:'"16/Ranking"'},{value:'"16/Remove"'},{value:'"16/Search"'},{value:'"16/Smile"'},{value:'"16/Speaker"'},{value:'"16/View"'},{value:'"16/Warning"'},{value:'"24/Add"'},{value:'"24/AddImage"'},{value:'"24/AddModel"'},{value:'"24/AddPeople"'},{value:'"24/AddRubi"'},{value:'"24/AddText"'},{value:'"24/Alart"'},{value:'"24/Announcement"'},{value:'"24/Ar"'},{value:'"24/Archive"'},{value:'"24/ArrowDown"'},{value:'"24/ArrowUp"'},{value:'"24/Binet"'},{value:'"24/Body"'},{value:'"24/BodyEdit"'},{value:'"24/Book"'},{value:'"24/BringBackward"'},{value:'"24/BringForward"'},{value:'"24/Calendar"'},{value:'"24/Camera"'},{value:'"24/CameraVideo"'},{value:'"24/ChangeCharactor"'},{value:'"24/ChatBot"'},{value:'"24/Check"'},{value:'"24/ChromaticAberration"'},{value:'"24/Click"'},{value:'"24/Close"'},{value:'"24/Codes"'},{value:'"24/Collapse"'},{value:'"24/CommentFill"'},{value:'"24/CommentOutline"'},{value:'"24/Contest"'},{value:'"24/Contrast"'},{value:'"24/Description"'},{value:'"24/DeviceRotation"'},{value:'"24/Discovery"'},{value:'"24/Dot"'},{value:'"24/DotAlt"'},{value:'"24/Down"'},{value:'"24/DownloadAlt"'},{value:'"24/Duplicate"'},{value:'"24/Dust"'},{value:'"24/Emoji"'},{value:'"24/Error"'},{value:'"24/ErrorOctagon"'},{value:'"24/Events"'},{value:'"24/Expand"'},{value:'"24/FaceEdit"'},{value:'"24/Fashion"'},{value:'"24/Feed"'},{value:'"24/File"'},{value:'"24/Filter"'},{value:'"24/Flare"'},{value:'"24/FormatAlignCenter"'},{value:'"24/FormatAlignLeft"'},{value:'"24/FormatAlignRight"'},{value:'"24/FormatColorFill"'},{value:'"24/FormatColorFillNoColor"'},{value:'"24/FormatFontFamily"'},{value:'"24/FormatFontSize"'},{value:'"24/FormatLetterSpacing"'},{value:'"24/FormatLineSpacing"'},{value:'"24/Fov"'},{value:'"24/FrameEffect"'},{value:'"24/FrameSize"'},{value:'"24/Gift"'},{value:'"24/Glow"'},{value:'"24/Groups"'},{value:'"24/HairEdit"'},{value:'"24/Hashtag"'},{value:'"24/Hide"'},{value:'"24/Home"'},{value:'"24/Hue"'},{value:'"24/Idea"'},{value:'"24/Image"'},{value:'"24/ImageAlt"'},{value:'"24/ImageHidden"'},{value:'"24/ImageReplace"'},{value:'"24/Images"'},{value:'"24/ImgContain"'},{value:'"24/ImgCover"'},{value:'"24/Index"'},{value:'"24/Info"'},{value:'"24/Invalid"'},{value:'"24/Invoice"'},{value:'"24/ItemRemove"'},{value:'"24/LatestWorks"'},{value:'"24/LikeOff"'},{value:'"24/LikeOn"'},{value:'"24/Link"'},{value:'"24/List"'},{value:'"24/LockLock"'},{value:'"24/LockUnlock"'},{value:'"24/Logout"'},{value:'"24/Manga"'},{value:'"24/Menu"'},{value:'"24/Message"'},{value:'"24/Microphone"'},{value:'"24/MobilePhone"'},{value:'"24/Move1"'},{value:'"24/Next"'},{value:'"24/NoImage"'},{value:'"24/Notification"'},{value:'"24/NotificationOff"'},{value:'"24/Novels"'},{value:'"24/OpenInNew"'},{value:'"24/Options"'},{value:'"24/OptionsAlt"'},{value:'"24/Overlay"'},{value:'"24/Palette"'},{value:'"24/Pause"'},{value:'"24/PauseAlt"'},{value:'"24/Pencil"'},{value:'"24/PencilDraw"'},{value:'"24/PencilLive"'},{value:'"24/PencilText"'},{value:'"24/Person"'},{value:'"24/Play"'},{value:'"24/Pose"'},{value:'"24/Prev"'},{value:'"24/Projects"'},{value:'"24/PullDown"'},{value:'"24/PullUp"'},{value:'"24/Question"'},{value:'"24/QuestionOutline"'},{value:'"24/Ranking"'},{value:'"24/ReadHorizontalLeft"'},{value:'"24/ReadHorizontalRight"'},{value:'"24/ReadVertical"'},{value:'"24/Reload"'},{value:'"24/ReloadLoop"'},{value:'"24/Reorder"'},{value:'"24/Roll"'},{value:'"24/Rotate90DegreesC"'},{value:'"24/Rotate90DegreesCc"'},{value:'"24/RotateRight"'},{value:'"24/Saturation"'},{value:'"24/Save"'},{value:'"24/Search"'},{value:'"24/Send"'},{value:'"24/Services"'},{value:'"24/Set"'},{value:'"24/Settings"'},{value:'"24/ShareAndroid"'},{value:'"24/ShareIos"'},{value:'"24/Shopping"'},{value:'"24/Show"'},{value:'"24/ShowOutline"'},{value:'"24/Shutter"'},{value:'"24/Star"'},{value:'"24/Subtract"'},{value:'"24/Sun"'},{value:'"24/Temperature"'},{value:'"24/Text"'},{value:'"24/Trash"'},{value:'"24/TrashAlt"'},{value:'"24/Up"'},{value:'"24/Upload"'},{value:'"24/UploadAlt"'},{value:'"24/Usagi"'},{value:'"24/UsagiAlt"'},{value:'"24/Users"'},{value:'"24/Video"'},{value:'"24/ViewGrid2Columns"'},{value:'"24/ViewGrid3Columns"'},{value:'"24/ViewList"'},{value:'"24/Warning"'},{value:'"32/BookmarkOff"'},{value:'"32/BookmarkOn"'},{value:'"32/Camera"'},{value:'"32/Close"'},{value:'"32/Collapse"'},{value:'"32/CommentOff"'},{value:'"32/CommentOn"'},{value:'"32/Delete"'},{value:'"32/Dot"'},{value:'"32/Edit"'},{value:'"32/Expand"'},{value:'"32/Gift"'},{value:'"32/Home"'},{value:'"32/HorizontalWriting"'},{value:'"32/Index"'},{value:'"32/LikeOff"'},{value:'"32/LikeOn"'},{value:'"32/LikeOnPrivate"'},{value:'"32/Message"'},{value:'"32/Next"'},{value:'"32/Notification"'},{value:'"32/NotificationOff"'},{value:'"32/NovelViewerSettings"'},{value:'"32/Pan"'},{value:'"32/Prev"'},{value:'"32/PullDown"'},{value:'"32/PullUp"'},{value:'"32/ReadHorizontalLeft"'},{value:'"32/ReadHorizontalRight"'},{value:'"32/ReadVertical"'},{value:'"32/RollHorizontal"'},{value:'"32/RollVertical"'},{value:'"32/SansSerif"'},{value:'"32/Serif"'},{value:'"32/ShareAndroid"'},{value:'"32/ShareIos"'},{value:'"32/Shopping"'},{value:'"32/Upload"'},{value:'"32/User"'},{value:'"32/VerticalWriting"'},{value:'"32/ZoomIn"'},{value:'"Inline/Add"'},{value:'"Inline/BookmarkOff"'},{value:'"Inline/BookmarkOn"'},{value:'"Inline/Breadcrumbs"'},{value:'"Inline/Check"'},{value:'"Inline/Comment"'},{value:'"Inline/ContextMenu"'},{value:'"Inline/External"'},{value:'"Inline/Filter"'},{value:'"Inline/Folder"'},{value:'"Inline/ImageResponse"'},{value:'"Inline/Images"'},{value:'"Inline/Like"'},{value:'"Inline/LikeOff"'},{value:'"Inline/List"'},{value:'"Inline/Location"'},{value:'"Inline/Lock"'},{value:'"Inline/More"'},{value:'"Inline/Nextworks"'},{value:'"Inline/OpenInNew"'},{value:'"Inline/Pencil"'},{value:'"Inline/Remove"'},{value:'"Inline/Smile"'},{value:'"Inline/SmileOn"'},{value:'"Inline/Users"'},{value:'"Inline/View"'},{value:'"Inline/ViewOutline"'}]}},isActive:{defaultValue:{value:"false"},description:"",name:"isActive",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"クリックの無効化",name:"disabled",required:!1,type:{name:"boolean"}},to:{defaultValue:null,description:"リンクのURL。指定するとbuttonタグではなくaタグとして描画される",name:"to",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/IconButton/index.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"packages/react/src/components/IconButton/index.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/Modal/ModalBackgroundContext.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>ModalBackgroundContext});const ModalBackgroundContext=__webpack_require__("./node_modules/react/index.js").createContext(null);try{ModalBackgroundContext.displayName="ModalBackgroundContext",ModalBackgroundContext.__docgenInfo={description:"ModalBackgroundのElementが入ったコンテキスト",displayName:"ModalBackgroundContext",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Modal/ModalBackgroundContext.tsx#ModalBackgroundContext"]={docgenInfo:ModalBackgroundContext.__docgenInfo,name:"ModalBackgroundContext",path:"packages/react/src/components/Modal/ModalBackgroundContext.tsx#ModalBackgroundContext"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/Modal/ModalPlumbing.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BT:()=>ModalAlign,Zf:()=>ModalButtons,fe:()=>ModalBody,xB:()=>ModalHeader});var ___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/components/Modal/index.tsx"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/utils/dist/index.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ModalHeader(){const modalCtx=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(___WEBPACK_IMPORTED_MODULE_2__.tC);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ModalHeaderRoot,{$bottomSheet:modalCtx.bottomSheet,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledModalTitle,{})})}ModalHeader.displayName="ModalHeader";const ModalHeaderRoot=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  height: 64px;
  display: grid;
  align-content: center;
  justify-content: center;
  @media ${({theme})=>(0,_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_4__.kk)(theme.breakpoint.screen1)} {
    ${p=>!1!==p.$bottomSheet&&styled_components__WEBPACK_IMPORTED_MODULE_3__.iv`
        height: 48px;
      `}
  }
`,StyledModalTitle=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP)(___WEBPACK_IMPORTED_MODULE_2__.r6)`
  color: var(--charcoal-text1);
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  display: flow-root;

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
`,ModalAlign=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  padding-left: 16px;
  padding-right: 16px;
`,ModalBody=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  padding-bottom: 40px;
`,ModalButtons=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 8px;

  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
`;try{ModalAlign.displayName="ModalAlign",ModalAlign.__docgenInfo={description:"",displayName:"ModalAlign",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Modal/ModalPlumbing.tsx#ModalAlign"]={docgenInfo:ModalAlign.__docgenInfo,name:"ModalAlign",path:"packages/react/src/components/Modal/ModalPlumbing.tsx#ModalAlign"})}catch(__react_docgen_typescript_loader_error){}try{ModalBody.displayName="ModalBody",ModalBody.__docgenInfo={description:"",displayName:"ModalBody",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Modal/ModalPlumbing.tsx#ModalBody"]={docgenInfo:ModalBody.__docgenInfo,name:"ModalBody",path:"packages/react/src/components/Modal/ModalPlumbing.tsx#ModalBody"})}catch(__react_docgen_typescript_loader_error){}try{ModalButtons.displayName="ModalButtons",ModalButtons.__docgenInfo={description:"",displayName:"ModalButtons",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Modal/ModalPlumbing.tsx#ModalButtons"]={docgenInfo:ModalButtons.__docgenInfo,name:"ModalButtons",path:"packages/react/src/components/Modal/ModalPlumbing.tsx#ModalButtons"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/Modal/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{tC:()=>ModalContext,t5:()=>ModalDismissButton,r6:()=>ModalTitle,ZP:()=>components_Modal});var react=__webpack_require__("./node_modules/react/index.js"),dist_import=__webpack_require__("./node_modules/@react-aria/overlays/dist/import.mjs"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),index_esm=__webpack_require__("./packages/utils/dist/index.esm.js"),dist_index_esm=__webpack_require__("./packages/styled/dist/index.esm.js"),react_spring_esm=__webpack_require__("./node_modules/react-spring/dist/react-spring.esm.js"),Button=__webpack_require__("./packages/react/src/components/Button/index.tsx"),IconButton=__webpack_require__("./packages/react/src/components/IconButton/index.tsx"),utils_dist_import=__webpack_require__("./node_modules/@react-aria/utils/dist/import.mjs"),focus_dist_import=__webpack_require__("./node_modules/@react-aria/focus/dist/import.mjs");var foundation_dist_index_esm=__webpack_require__("./packages/foundation/dist/index.esm.js"),_lib=__webpack_require__("./packages/react/src/_lib/index.ts");function useForwardedRef(ref){const innerRef=react.useRef(null);return react.useEffect((()=>{ref&&("function"==typeof ref?ref(innerRef.current):ref.current=innerRef.current)})),innerRef}try{useForwardedRef.displayName="useForwardedRef",useForwardedRef.__docgenInfo={description:"",displayName:"useForwardedRef",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/_lib/useForwardedRef.tsx#useForwardedRef"]={docgenInfo:useForwardedRef.__docgenInfo,name:"useForwardedRef",path:"packages/react/src/_lib/useForwardedRef.tsx#useForwardedRef"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Dialog=(0,react.forwardRef)((function Dialog(props,forwardRef){const ref=useForwardedRef(forwardRef),{dialogProps}=function $40df3f8667284809$export$d55e7ee900f34e93(props,ref){let{role="dialog"}=props,titleId=(0,utils_dist_import.mp)();titleId=props["aria-label"]?void 0:titleId;let isRefocusing=(0,react.useRef)(!1);return(0,react.useEffect)((()=>{if(ref.current&&!ref.current.contains(document.activeElement)){(0,focus_dist_import.ex)(ref.current);let timeout=setTimeout((()=>{document.activeElement===ref.current&&(isRefocusing.current=!0,ref.current&&(ref.current.blur(),(0,focus_dist_import.ex)(ref.current)),isRefocusing.current=!1)}),500);return()=>{clearTimeout(timeout)}}}),[ref]),(0,dist_import.Bq)(),{dialogProps:{...(0,utils_dist_import.zL)(props,{labelable:!0}),role,tabIndex:-1,"aria-labelledby":props["aria-labelledby"]||titleId,onBlur:e=>{isRefocusing.current&&e.stopPropagation()}},titleProps:{id:titleId}}}({role:"dialog"},ref);return(0,jsx_runtime.jsx)(AnimatedStyledDialogDiv,{...props,role:dialogProps.role,tabIndex:dialogProps.tabIndex,"aria-labelledby":dialogProps["aria-labelledby"],onBlur:dialogProps.onBlur,ref})})),AnimatedStyledDialogDiv=(0,react_spring_esm.animated)(styled_components_browser_esm.ZP.div`
  margin: auto;
  position: relative;
  height: fit-content;
  width: ${p=>{switch(p.size){case"S":return(0,foundation_dist_index_esm.iH)(3,foundation_dist_index_esm.hw,foundation_dist_index_esm.K_)+2*foundation_dist_index_esm.K_;case"M":return(0,foundation_dist_index_esm.iH)(4,foundation_dist_index_esm.hw,foundation_dist_index_esm.K_)+2*foundation_dist_index_esm.K_;case"L":return(0,foundation_dist_index_esm.iH)(6,foundation_dist_index_esm.hw,foundation_dist_index_esm.K_)+2*foundation_dist_index_esm.K_;default:return(0,_lib.t1)(p.size)}}}px;

  background-color: var(--charcoal-surface1);
  border-radius: 24px;

  @media ${({theme})=>(0,index_esm.kk)(theme.breakpoint.screen1)} {
    max-width: 440px;
    width: calc(100% - 48px);
    ${p=>!1!==p.bottomSheet&&styled_components_browser_esm.iv`
        max-width: unset;
        width: 100%;
        border-radius: 0;
        margin: auto 0 0 0;
        ${"full"===p.bottomSheet&&styled_components_browser_esm.iv`
          min-height: 100%;
        `}
      `}
  }
  :focus {
    outline: none;
  }
`);try{Dialog.displayName="Dialog",Dialog.__docgenInfo={description:"",displayName:"Dialog",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Modal/Dialog/index.tsx#Dialog"]={docgenInfo:Dialog.__docgenInfo,name:"Dialog",path:"packages/react/src/components/Modal/Dialog/index.tsx#Dialog"})}catch(__react_docgen_typescript_loader_error){}var ModalBackgroundContext=__webpack_require__("./packages/react/src/components/Modal/ModalBackgroundContext.tsx");function useCharcoalModalOverlay(props,state,ref){const{overlayProps,underlayProps}=(0,dist_import.Ir)({...props,isOpen:state.isOpen,onClose:state.onClose,shouldCloseOnInteractOutside:()=>!1},ref);return(0,dist_import.tk)({isDisabled:!state.isOpen}),(0,dist_import.Bq)(),react.useEffect((()=>{if(state.isOpen&&ref.current)return(0,dist_import.RP)([ref.current])}),[state.isOpen,ref]),{modalProps:overlayProps,underlayProps}}try{useCharcoalModalOverlay.displayName="useCharcoalModalOverlay",useCharcoalModalOverlay.__docgenInfo={description:"We want to enable scrolling on the modal background,\nbut `useModalOverlay` (specifically, `useOverlay` within it) detects pointer events on the scrollbar.\nTherefore, to prevent this issue, we need to override `shouldCloseOnInteractOutside` in `useModalOverlay`.",displayName:"useCharcoalModalOverlay",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Modal/useCustomModalOverlay.tsx#useCharcoalModalOverlay"]={docgenInfo:useCharcoalModalOverlay.__docgenInfo,name:"useCharcoalModalOverlay",path:"packages/react/src/components/Modal/useCustomModalOverlay.tsx#useCharcoalModalOverlay"})}catch(__react_docgen_typescript_loader_error){}const Modal=(0,react.forwardRef)((function ModalInner({children,zIndex=10,portalContainer,...props},external){const{title,size="M",bottomSheet=!1,isDismissable,onClose,className,isOpen=!1}=props,ref=(0,utils_dist_import.B3)(external),{modalProps,underlayProps}=useCharcoalModalOverlay({...props,isKeyboardDismissDisabled:void 0===isDismissable||!1===isDismissable},{onClose,isOpen},ref),theme=(0,styled_components_browser_esm.Fg)(),isMobile=(0,dist_index_esm.GS)((0,index_esm.kk)(theme.breakpoint.screen1))??!1,transitionEnabled=isMobile&&!1!==bottomSheet,showDismiss=!isMobile||!0!==bottomSheet,transition=(0,react_spring_esm.useTransition)(isOpen,{from:{transform:"translateY(100%)",backgroundColor:"rgba(0, 0, 0, 0)",overflow:"hidden"},enter:{transform:"translateY(0%)",backgroundColor:"rgba(0, 0, 0, 0.4)"},update:{overflow:"auto"},leave:{transform:"translateY(100%)",backgroundColor:"rgba(0, 0, 0, 0)",overflow:"hidden"},config:transitionEnabled?{duration:400,easing:react_spring_esm.easings.easeOutQuart}:{duration:0}}),bgRef=react.useRef(null),handleClick=react.useCallback((e=>{e.currentTarget===e.target&&onClose()}),[onClose]);return transition((({backgroundColor,overflow,transform},item)=>item&&(0,jsx_runtime.jsx)(dist_import.aV,{portalContainer,children:(0,jsx_runtime.jsx)(ModalBackground,{ref:bgRef,zIndex,...underlayProps,style:transitionEnabled?{backgroundColor,overflow}:{},$bottomSheet:bottomSheet,onClick:handleClick,children:(0,jsx_runtime.jsx)(ModalBackgroundContext.C.Provider,{value:bgRef.current,children:(0,jsx_runtime.jsx)(Dialog,{ref,...modalProps,style:transitionEnabled?{transform}:{},size,bottomSheet,className,children:(0,jsx_runtime.jsxs)(ModalContext.Provider,{value:{titleProps:{},title,close:onClose,showDismiss,bottomSheet},children:[children,!0===isDismissable&&(0,jsx_runtime.jsx)(ModalCrossButton,{size:"S",icon:"24/Close",onClick:onClose})]})})})})})))})),components_Modal=(0,react.memo)(Modal),ModalContext=react.createContext({titleProps:{},title:"",close:void 0,showDismiss:!0,bottomSheet:!1}),ModalBackground=(0,react_spring_esm.animated)(styled_components_browser_esm.ZP.div`
  z-index: ${({zIndex})=>zIndex};
  overflow: auto;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: -webkit-fill-available;
  width: -moz-available;
  height: 100%;
  justify-content: center;
  padding: 40px 0;
  box-sizing: border-box;

  background-color: var(--charcoal-surface4);

  @media ${({theme})=>(0,index_esm.kk)(theme.breakpoint.screen1)} {
    ${p=>!1!==p.$bottomSheet&&styled_components_browser_esm.iv`
        padding: 0;
      `}
  }
`),ModalCrossButton=(0,styled_components_browser_esm.ZP)(IconButton.Z)`
  position: absolute;
  top: 8px;
  right: 8px;

  color: var(--charcoal-text3);
  transition: 0.2s color;

  &:not(:disabled):not([aria-disabled]),
  &[aria-disabled='false'] {
    &:hover {
      color: var(--charcoal-text3-hover);
    }
    &:active {
      color: var(--charcoal-text3-press);
    }
  }
`;function ModalTitle(props){const{titleProps,title}=(0,react.useContext)(ModalContext);return(0,jsx_runtime.jsx)(ModalHeading,{...titleProps,...props,children:title})}ModalTitle.displayName="ModalTitle";const ModalHeading=styled_components_browser_esm.ZP.h3`
  margin: 0;
  font-weight: inherit;
  font-size: inherit;
`;function ModalDismissButton({children,...props}){const{close,showDismiss}=(0,react.useContext)(ModalContext);return showDismiss?(0,jsx_runtime.jsx)(Button.Z,{...props,onClick:close,fullWidth:!0,children}):null}ModalDismissButton.displayName="ModalDismissButton";try{ModalTitle.displayName="ModalTitle",ModalTitle.__docgenInfo={description:"",displayName:"ModalTitle",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Modal/index.tsx#ModalTitle"]={docgenInfo:ModalTitle.__docgenInfo,name:"ModalTitle",path:"packages/react/src/components/Modal/index.tsx#ModalTitle"})}catch(__react_docgen_typescript_loader_error){}try{ModalDismissButton.displayName="ModalDismissButton",ModalDismissButton.__docgenInfo={description:"",displayName:"ModalDismissButton",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Overlay"'},{value:'"Primary"'},{value:'"Danger"'},{value:'"Navigation"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"S"'},{value:'"M"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},isActive:{defaultValue:null,description:"",name:"isActive",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"クリックの無効化",name:"disabled",required:!1,type:{name:"boolean"}},to:{defaultValue:null,description:"リンクのURL。指定するとbuttonタグではなくaタグとして描画される",name:"to",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Modal/index.tsx#ModalDismissButton"]={docgenInfo:ModalDismissButton.__docgenInfo,name:"ModalDismissButton",path:"packages/react/src/components/Modal/index.tsx#ModalDismissButton"})}catch(__react_docgen_typescript_loader_error){}try{Modal.displayName="Modal",Modal.__docgenInfo={description:"モーダルコンポーネント。",displayName:"Modal",props:{zIndex:{defaultValue:{value:"10"},description:"",name:"zIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"S"'},{value:'"M"'},{value:'"L"'}]}},bottomSheet:{defaultValue:null,description:"",name:"bottomSheet",required:!1,type:{name:"BottomSheet"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},portalContainer:{defaultValue:null,description:"https://github.com/adobe/react-spectrum/issues/3787\nNext.jsで使用する際に発生するエラーの一時的な回避策でdocument.bodyを指定する必要がある",name:"portalContainer",required:!1,type:{name:"HTMLElement"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Modal/index.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"packages/react/src/components/Modal/index.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/TextField/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{TT:()=>AssistiveText,ZP:()=>__WEBPACK_DEFAULT_EXPORT__,pU:()=>TextFieldLabel});var _react_aria_textfield__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@react-aria/textfield/dist/import.mjs"),_react_aria_visually_hidden__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@react-aria/visually-hidden/dist/import.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_FieldLabel__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/react/src/components/FieldLabel/index.tsx"),_lib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/_lib/index.ts"),_useFocusWithClick__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/react/src/components/TextField/useFocusWithClick.tsx"),_react_aria_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@react-aria/utils/dist/import.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const TextField=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function SingleLineTextFieldInner({onChange,...props},forwardRef){const{className,showLabel=!1,showCount=!1,label,requiredText,subLabel,disabled=!1,required,invalid=!1,assistiveText,maxLength,prefix=null,suffix=null,...restProps}=props,{visuallyHiddenProps}=(0,_react_aria_visually_hidden__WEBPACK_IMPORTED_MODULE_2__.S)(),ariaRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),[count,setCount]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_lib__WEBPACK_IMPORTED_MODULE_3__.$j)(props.value??"")),nonControlled=void 0===props.value,handleChange=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((value=>{const count=(0,_lib__WEBPACK_IMPORTED_MODULE_3__.$j)(value);void 0!==maxLength&&count>maxLength||(nonControlled&&setCount(count),onChange?.(value))}),[maxLength,nonControlled,onChange]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setCount((0,_lib__WEBPACK_IMPORTED_MODULE_3__.$j)(props.value??""))}),[props.value]);const{inputProps:ariaInputProps,labelProps,descriptionProps,errorMessageProps}=(0,_react_aria_textfield__WEBPACK_IMPORTED_MODULE_4__.E)({inputElementType:"input",isDisabled:disabled,isRequired:required,validationState:invalid?"invalid":"valid",description:!invalid&&assistiveText,errorMessage:invalid&&assistiveText,onChange:handleChange,...props},ariaRef),containerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);(0,_useFocusWithClick__WEBPACK_IMPORTED_MODULE_5__.Q)(containerRef,ariaRef);const inputProps=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_6__.dG)(restProps,ariaInputProps);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(TextFieldRoot,{className,isDisabled:disabled,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TextFieldLabel,{label,requiredText,required,subLabel,...labelProps,...showLabel?{}:visuallyHiddenProps}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(StyledInputContainer,{ref:containerRef,invalid,"aria-disabled":!0===disabled||void 0,hasPrefix:null!=prefix,hasSuffix:null!=suffix||showCount,children:[prefix&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PrefixContainer,{children:prefix}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledInput,{ref:(0,_lib__WEBPACK_IMPORTED_MODULE_3__.lq)(forwardRef,ariaRef),invalid,...inputProps}),(suffix||showCount)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(SuffixContainer,{children:[suffix,showCount&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SingleLineCounter,{children:void 0!==maxLength?`${count}/${maxLength}`:count})]})]}),null!=assistiveText&&0!==assistiveText.length&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(AssistiveText,{invalid,...invalid?errorMessageProps:descriptionProps,children:assistiveText})]})})),__WEBPACK_DEFAULT_EXPORT__=TextField,TextFieldRoot=styled_components__WEBPACK_IMPORTED_MODULE_7__.ZP.div`
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
`;try{TextField.displayName="TextField",TextField.__docgenInfo={description:"",displayName:"TextField",props:{prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"((event: KeyboardEvent<Element>) => void)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((event: FocusEvent<Element, Element>) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<Element, Element>) => void)"}},showCount:{defaultValue:null,description:"",name:"showCount",required:!1,type:{name:"boolean"}},showLabel:{defaultValue:null,description:"",name:"showLabel",required:!1,type:{name:"boolean"}},assistiveText:{defaultValue:null,description:"",name:"assistiveText",required:!1,type:{name:"string"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},requiredText:{defaultValue:null,description:"",name:"requiredText",required:!1,type:{name:"string"}},subLabel:{defaultValue:null,description:"",name:"subLabel",required:!1,type:{name:"ReactNode"}},onCopy:{defaultValue:null,description:"",name:"onCopy",required:!1,type:{name:"ClipboardEventHandler<Element>"}},onPaste:{defaultValue:null,description:"",name:"onPaste",required:!1,type:{name:"ClipboardEventHandler<Element>"}},onCut:{defaultValue:null,description:"",name:"onCut",required:!1,type:{name:"ClipboardEventHandler<Element>"}},onCompositionStart:{defaultValue:null,description:"",name:"onCompositionStart",required:!1,type:{name:"CompositionEventHandler<Element>"}},onCompositionEnd:{defaultValue:null,description:"",name:"onCompositionEnd",required:!1,type:{name:"CompositionEventHandler<Element>"}},onCompositionUpdate:{defaultValue:null,description:"",name:"onCompositionUpdate",required:!1,type:{name:"CompositionEventHandler<Element>"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"ReactEventHandler<Element>"}},onBeforeInput:{defaultValue:null,description:"",name:"onBeforeInput",required:!1,type:{name:"FormEventHandler<Element>"}},onInput:{defaultValue:null,description:"",name:"onInput",required:!1,type:{name:"FormEventHandler<Element>"}},autoCapitalize:{defaultValue:null,description:"",name:"autoCapitalize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"on"'},{value:'"off"'},{value:'"sentences"'},{value:'"words"'},{value:'"characters"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/TextField/index.tsx#TextField"]={docgenInfo:TextField.__docgenInfo,name:"TextField",path:"packages/react/src/components/TextField/index.tsx#TextField"})}catch(__react_docgen_typescript_loader_error){}try{TextFieldLabel.displayName="TextFieldLabel",TextFieldLabel.__docgenInfo={description:"",displayName:"TextFieldLabel",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},requiredText:{defaultValue:null,description:"",name:"requiredText",required:!1,type:{name:"string"}},subLabel:{defaultValue:null,description:"",name:"subLabel",required:!1,type:{name:"ReactNode"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/TextField/index.tsx#TextFieldLabel"]={docgenInfo:TextFieldLabel.__docgenInfo,name:"TextFieldLabel",path:"packages/react/src/components/TextField/index.tsx#TextFieldLabel"})}catch(__react_docgen_typescript_loader_error){}try{AssistiveText.displayName="AssistiveText",AssistiveText.__docgenInfo={description:"",displayName:"AssistiveText",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLParagraphElement | null) => void) | RefObject<HTMLParagraphElement> | null"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!0,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/TextField/index.tsx#AssistiveText"]={docgenInfo:AssistiveText.__docgenInfo,name:"AssistiveText",path:"packages/react/src/components/TextField/index.tsx#AssistiveText"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/TextField/useFocusWithClick.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>useFocusWithClick});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useFocusWithClick(containerRef,inputRef){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const el=containerRef.current;if(el){const handleDown=e=>{e.target!==inputRef.current&&inputRef.current?.focus()};return el.addEventListener("click",handleDown),()=>{el.removeEventListener("click",handleDown)}}}))}}}]);
//# sourceMappingURL=5021.f5a25452.iframe.bundle.js.map