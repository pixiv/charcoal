"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[6415],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_AY7I2SME.aD});var chunk_AY7I2SME=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs")},"./packages/react-sandbox/src/components/MenuListItem/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,HardLink:()=>HardLink,Icon:()=>index_story_Icon,InlineIcon:()=>InlineIcon,Label:()=>Label,Link:()=>Link,NoHoverEffect:()=>NoHoverEffect,Simple:()=>Simple,Spacer:()=>Spacer,TextEllipsis:()=>index_story_TextEllipsis,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_story});var dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),addon_knobs_dist=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),SwitchCheckbox=__webpack_require__("./packages/react-sandbox/src/components/SwitchCheckbox/index.tsx"),WithIcon=__webpack_require__("./packages/react-sandbox/src/components/WithIcon/index.tsx"),react=__webpack_require__("./node_modules/react/index.js"),styled=__webpack_require__("./packages/react-sandbox/src/styled.ts"),TextEllipsis=__webpack_require__("./packages/react-sandbox/src/components/TextEllipsis/index.tsx"),index_esm=__webpack_require__("./packages/react/dist/index.esm.js"),dist_index_esm=__webpack_require__("./packages/utils/dist/index.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MenuListItemContext=react.createContext({padding:24});function MenuListItem({primary,secondary,onClick,disabled=!1,noHover=!1,gtmClass,children}){const{padding}=(0,react.useContext)(MenuListItemContext);return(0,jsx_runtime.jsxs)(Item,{hasSubLabel:void 0!==secondary,onClick:e=>!disabled&&onClick&&onClick(e),sidePadding:padding,noHover,noClick:void 0===onClick,"aria-disabled":disabled,role:void 0!==onClick?"button":void 0,className:void 0!==gtmClass?`gtm-${gtmClass}`:void 0,children:[(0,jsx_runtime.jsxs)(Labels,{children:[(0,jsx_runtime.jsx)(PrimaryText,{children:(0,jsx_runtime.jsx)(TextEllipsis.o,{lineHeight:22,lineLimit:1,children:primary})}),void 0!==secondary&&(0,jsx_runtime.jsx)(SecondaryText,{children:(0,jsx_runtime.jsx)(TextEllipsis.o,{lineHeight:22,lineLimit:1,children:secondary})})]}),children]})}MenuListItem.displayName="MenuListItem";const Item=styled_components_browser_esm.ZP.div`
  display: flex;
  height: ${p=>p.hasSubLabel?56:40}px;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${p=>p.sidePadding}px;
  user-select: none;
  cursor: ${p=>p.noClick?"default":"pointer"};
  transition: 0.2s background-color;

  &:hover {
    ${p=>!p.noHover&&styled_components_browser_esm.iv`
        background-color: ${({theme})=>theme.color.surface3};
      `}
  }

  ${(0,styled.r)((o=>o.disabled))}

  ${dist_index_esm.t0} {
    cursor: default;
    pointer-events: none;

    &:hover {
      background-color: unset;
    }
  }
`,Labels=styled_components_browser_esm.ZP.div`
  display: flex;
  flex-direction: column;
`,PrimaryText=styled_components_browser_esm.ZP.div`
  color: ${p=>p.theme.color.text2};
  line-height: 22px;
  font-size: 14px;
  display: grid;
`,SecondaryText=styled_components_browser_esm.ZP.div`
  color: ${p=>p.theme.color.text3};
  line-height: 18px;
  font-size: 10px;
`;function MenuListLinkItem({link,onClick,disabled=!1,primary,secondary,gtmClass,noHover,children,...linkProps}){const{Link}=(0,index_esm.BB)(),props={disabled,primary,secondary,gtmClass,noHover,children};return disabled?(0,jsx_runtime.jsx)("span",{onClick,children:(0,jsx_runtime.jsx)(MenuListItem,{...props})}):(0,jsx_runtime.jsx)(A,{as:Link,to:link,onClick,...linkProps,children:(0,jsx_runtime.jsx)(MenuListItem,{onClick:()=>{},...props})})}const A=styled_components_browser_esm.ZP.a`
  display: block;
`;function MenuListLinkItemWithIcon({icon,primary:text,...props}){const primary=(0,jsx_runtime.jsxs)(IconContainer,{children:[(0,jsx_runtime.jsx)(Icon,{children:icon}),text]});return(0,jsx_runtime.jsx)(MenuListLinkItem,{primary,...props})}function MenuListItemWithIcon({icon,primary:text,...props}){const primary=(0,jsx_runtime.jsxs)(IconContainer,{children:[(0,jsx_runtime.jsx)(Icon,{children:icon}),text]});return(0,jsx_runtime.jsx)(MenuListItem,{primary,...props})}MenuListLinkItemWithIcon.displayName="MenuListLinkItemWithIcon",MenuListItemWithIcon.displayName="MenuListItemWithIcon";const IconContainer=styled_components_browser_esm.ZP.div`
  display: grid;
  gap: 8px;
  grid-auto-flow: column;
  align-items: center;
`,Icon=styled_components_browser_esm.ZP.div`
  color: ${({theme})=>theme.color.text3};
  display: flex;
`,MenuListSpacer=styled_components_browser_esm.ZP.div`
  height: 24px;
`,MenuListLabel=styled_components_browser_esm.ZP.div`
  padding: 0 16px;
  font-size: 12px;
  line-height: 16px;
  color: ${({theme})=>theme.color.text3};
  margin-top: -2px;
  margin-bottom: 6px;
`;try{MenuListItem.displayName="MenuListItem",MenuListItem.__docgenInfo={description:"",displayName:"MenuListItem",props:{primary:{defaultValue:null,description:"",name:"primary",required:!0,type:{name:"ReactNode"}},secondary:{defaultValue:null,description:"",name:"secondary",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},gtmClass:{defaultValue:null,description:"",name:"gtmClass",required:!1,type:{name:"string"}},noHover:{defaultValue:{value:"false"},description:"",name:"noHover",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react-sandbox/src/components/MenuListItem/index.tsx#MenuListItem"]={docgenInfo:MenuListItem.__docgenInfo,name:"MenuListItem",path:"packages/react-sandbox/src/components/MenuListItem/index.tsx#MenuListItem"})}catch(__react_docgen_typescript_loader_error){}try{MenuListLinkItem.displayName="MenuListLinkItem",MenuListLinkItem.__docgenInfo={description:"",displayName:"MenuListLinkItem",props:{link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},primary:{defaultValue:null,description:"",name:"primary",required:!0,type:{name:"ReactNode"}},secondary:{defaultValue:null,description:"",name:"secondary",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},gtmClass:{defaultValue:null,description:"",name:"gtmClass",required:!1,type:{name:"string"}},noHover:{defaultValue:null,description:"",name:"noHover",required:!1,type:{name:"boolean"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react-sandbox/src/components/MenuListItem/index.tsx#MenuListLinkItem"]={docgenInfo:MenuListLinkItem.__docgenInfo,name:"MenuListLinkItem",path:"packages/react-sandbox/src/components/MenuListItem/index.tsx#MenuListLinkItem"})}catch(__react_docgen_typescript_loader_error){}try{MenuListLinkItemWithIcon.displayName="MenuListLinkItemWithIcon",MenuListLinkItemWithIcon.__docgenInfo={description:"",displayName:"MenuListLinkItemWithIcon",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"ReactNode"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},primary:{defaultValue:null,description:"",name:"primary",required:!0,type:{name:"ReactNode"}},secondary:{defaultValue:null,description:"",name:"secondary",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},gtmClass:{defaultValue:null,description:"",name:"gtmClass",required:!1,type:{name:"string"}},noHover:{defaultValue:null,description:"",name:"noHover",required:!1,type:{name:"boolean"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react-sandbox/src/components/MenuListItem/index.tsx#MenuListLinkItemWithIcon"]={docgenInfo:MenuListLinkItemWithIcon.__docgenInfo,name:"MenuListLinkItemWithIcon",path:"packages/react-sandbox/src/components/MenuListItem/index.tsx#MenuListLinkItemWithIcon"})}catch(__react_docgen_typescript_loader_error){}try{MenuListItemWithIcon.displayName="MenuListItemWithIcon",MenuListItemWithIcon.__docgenInfo={description:"",displayName:"MenuListItemWithIcon",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"ReactNode"}},primary:{defaultValue:null,description:"",name:"primary",required:!0,type:{name:"ReactNode"}},secondary:{defaultValue:null,description:"",name:"secondary",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},gtmClass:{defaultValue:null,description:"",name:"gtmClass",required:!1,type:{name:"string"}},noHover:{defaultValue:null,description:"",name:"noHover",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react-sandbox/src/components/MenuListItem/index.tsx#MenuListItemWithIcon"]={docgenInfo:MenuListItemWithIcon.__docgenInfo,name:"MenuListItemWithIcon",path:"packages/react-sandbox/src/components/MenuListItem/index.tsx#MenuListItemWithIcon"})}catch(__react_docgen_typescript_loader_error){}try{MenuListSpacer.displayName="MenuListSpacer",MenuListSpacer.__docgenInfo={description:"",displayName:"MenuListSpacer",props:{css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react-sandbox/src/components/MenuListItem/index.tsx#MenuListSpacer"]={docgenInfo:MenuListSpacer.__docgenInfo,name:"MenuListSpacer",path:"packages/react-sandbox/src/components/MenuListItem/index.tsx#MenuListSpacer"})}catch(__react_docgen_typescript_loader_error){}try{MenuListLabel.displayName="MenuListLabel",MenuListLabel.__docgenInfo={description:"",displayName:"MenuListLabel",props:{css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react-sandbox/src/components/MenuListItem/index.tsx#MenuListLabel"]={docgenInfo:MenuListLabel.__docgenInfo,name:"MenuListLabel",path:"packages/react-sandbox/src/components/MenuListItem/index.tsx#MenuListLabel"})}catch(__react_docgen_typescript_loader_error){}const index_story={title:"Sandbox/MenuListItem",component:MenuListItem},Default=()=>{const primary=(0,addon_knobs_dist.text)("primary","Knob to change"),secondary=(0,addon_knobs_dist.text)("secondary",""),disabled=(0,addon_knobs_dist.boolean)("disabled",!1),padding=(0,addon_knobs_dist.select)("padding",{16:16,24:24},24),noHover=(0,addon_knobs_dist.boolean)("noHover",!1);return(0,jsx_runtime.jsx)(MenuListItemContext.Provider,{value:{padding},children:(0,jsx_runtime.jsx)(MenuListItem,{primary,secondary:""===secondary?void 0:secondary,disabled,onClick:(0,dist.aD)("click"),noHover})})};Default.displayName="Default";const Simple=()=>(0,jsx_runtime.jsx)(MenuListItem,{primary:"Simple item",secondary:"with secondary",onClick:(0,dist.aD)("click")});Simple.displayName="Simple";const Disabled=()=>(0,jsx_runtime.jsx)(MenuListItem,{primary:"Disabled item",disabled:!0,onClick:(0,dist.aD)("disabled click")});Disabled.displayName="Disabled";const Link=()=>(0,jsx_runtime.jsx)(MenuListLinkItem,{primary:"This is link",onClick:(0,dist.aD)("link click"),link:"#linkTo"});Link.displayName="Link";const HardLink=()=>(0,jsx_runtime.jsx)(MenuListLinkItem,{primary:'This is link with target "_blank"',onClick:(0,dist.aD)("link click"),link:"#linkTo",target:"_blank",rel:"noopener noreferrer"});HardLink.displayName="HardLink";const InlineIcon=()=>(0,jsx_runtime.jsx)(MenuListItem,{primary:(0,jsx_runtime.jsx)(WithIcon.Z,{icon:(0,jsx_runtime.jsx)(TestInlineIcon,{}),children:"Label with inline icon"}),onClick:(0,dist.aD)("toggle")});InlineIcon.displayName="InlineIcon";const index_story_Icon=()=>(0,jsx_runtime.jsx)(MenuListLinkItemWithIcon,{primary:"Link with 24px icon",icon:(0,jsx_runtime.jsx)(TestIcon,{}),link:"#linkTo"});index_story_Icon.displayName="Icon";const NoHoverEffect=()=>(0,jsx_runtime.jsx)(MenuListItem,{primary:"With toggle (no hover effect)",onClick:(0,dist.aD)("toggle"),noHover:!0,children:(0,jsx_runtime.jsx)(SwitchCheckbox.Z,{checked:!0,onChange:(0,dist.aD)("toggle")})});NoHoverEffect.displayName="NoHoverEffect";const Spacer=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(MenuListItem,{primary:"↓ This is spacer"}),(0,jsx_runtime.jsx)(MenuListSpacer,{}),(0,jsx_runtime.jsx)(MenuListItem,{primary:"↑ This is spacer"})]}),Label=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(MenuListLabel,{children:"Label"}),(0,jsx_runtime.jsx)(MenuListItem,{primary:"Label grouped items"})]}),index_story_TextEllipsis=()=>(0,jsx_runtime.jsx)("div",{css:"\n      width: 300px;\n    ",children:(0,jsx_runtime.jsx)(MenuListItem,{primary:"Loooooooooooooooooooooooooong texxxxxxxxxxxxxxxxxxxxxxxxxt"})});index_story_TextEllipsis.displayName="TextEllipsis";const TestIcon=styled_components_browser_esm.ZP.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  background-color: currentColor;
`,TestInlineIcon=styled_components_browser_esm.ZP.div`
  display: inline-flex;
  vertical-align: top;
  align-items: center;
  &::before {
    content: '';
    display: inline-block;
    height: 16px;
    width: 16px;
    background-color: currentColor;
  }
`;Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => {\n  const primary = text('primary', 'Knob to change');\n  const secondary = text('secondary', '');\n  const disabled = boolean('disabled', false);\n  const padding = select('padding', {\n    '16': 16,\n    '24': 24\n  }, 24);\n  const noHover = boolean('noHover', false);\n  return <MenuListItemContext.Provider value={{\n    padding\n  }}>\n      <MenuListItem primary={primary} secondary={secondary === '' ? undefined : secondary} disabled={disabled} onClick={action('click')} noHover={noHover} />\n    </MenuListItemContext.Provider>;\n}",...Default.parameters?.docs?.source}}},Simple.parameters={...Simple.parameters,docs:{...Simple.parameters?.docs,source:{originalSource:'() => <MenuListItem primary="Simple item" secondary="with secondary" onClick={action(\'click\')} />',...Simple.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"() => <MenuListItem primary=\"Disabled item\" disabled onClick={action('disabled click')} />",...Disabled.parameters?.docs?.source}}},Link.parameters={...Link.parameters,docs:{...Link.parameters?.docs,source:{originalSource:'() => <MenuListLinkItem primary="This is link" onClick={action(\'link click\')} link="#linkTo" />',...Link.parameters?.docs?.source}}},HardLink.parameters={...HardLink.parameters,docs:{...HardLink.parameters?.docs,source:{originalSource:'() => <MenuListLinkItem primary=\'This is link with target "_blank"\' onClick={action(\'link click\')} link="#linkTo" target="_blank" rel="noopener noreferrer" />',...HardLink.parameters?.docs?.source}}},InlineIcon.parameters={...InlineIcon.parameters,docs:{...InlineIcon.parameters?.docs,source:{originalSource:"() => <MenuListItem primary={<WithIcon icon={<TestInlineIcon />}>Label with inline icon</WithIcon>} onClick={action('toggle')} />",...InlineIcon.parameters?.docs?.source}}},index_story_Icon.parameters={...index_story_Icon.parameters,docs:{...index_story_Icon.parameters?.docs,source:{originalSource:'() => <MenuListLinkItemWithIcon primary="Link with 24px icon" icon={<TestIcon />} link="#linkTo" />',...index_story_Icon.parameters?.docs?.source}}},NoHoverEffect.parameters={...NoHoverEffect.parameters,docs:{...NoHoverEffect.parameters?.docs,source:{originalSource:"() => <MenuListItem primary=\"With toggle (no hover effect)\" onClick={action('toggle')} noHover>\n    <SwitchCheckbox checked onChange={action('toggle')} />\n  </MenuListItem>",...NoHoverEffect.parameters?.docs?.source}}},Spacer.parameters={...Spacer.parameters,docs:{...Spacer.parameters?.docs,source:{originalSource:'() => <>\n    <MenuListItem primary="↓ This is spacer" />\n    <MenuListSpacer />\n    <MenuListItem primary="↑ This is spacer" />\n  </>',...Spacer.parameters?.docs?.source}}},Label.parameters={...Label.parameters,docs:{...Label.parameters?.docs,source:{originalSource:'() => <>\n    <MenuListLabel>Label</MenuListLabel>\n    <MenuListItem primary="Label grouped items" />\n  </>',...Label.parameters?.docs?.source}}},index_story_TextEllipsis.parameters={...index_story_TextEllipsis.parameters,docs:{...index_story_TextEllipsis.parameters?.docs,source:{originalSource:'() => <div css={`\n      width: 300px;\n    `}>\n    <MenuListItem primary="Loooooooooooooooooooooooooong texxxxxxxxxxxxxxxxxxxxxxxxxt" />\n  </div>',...index_story_TextEllipsis.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Simple","Disabled","Link","HardLink","InlineIcon","Icon","NoHoverEffect","Spacer","Label","TextEllipsis"]},"./packages/react-sandbox/src/components/SwitchCheckbox/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/utils/dist/index.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function SwitchCheckbox({gtmClass,flex=!1,rowReverse=!1,children,disabled,...props},ref){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Label,{className:void 0!==gtmClass?`gtm-${gtmClass}`:"",flex,rowReverse,"aria-disabled":disabled,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(SwitchOuter,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SwitchInput,{...props,disabled,ref}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SwitchInner,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SwitchInnerKnob,{})})]}),null!=children&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Children,{rowReverse,children})]})})),Children=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.span`
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
`;try{SwitchCheckbox.displayName="SwitchCheckbox",SwitchCheckbox.__docgenInfo={description:"",displayName:"SwitchCheckbox",props:{gtmClass:{defaultValue:null,description:"",name:"gtmClass",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"boolean"}},rowReverse:{defaultValue:null,description:"",name:"rowReverse",required:!1,type:{name:"boolean"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react-sandbox/src/components/SwitchCheckbox/index.tsx#SwitchCheckbox"]={docgenInfo:SwitchCheckbox.__docgenInfo,name:"SwitchCheckbox",path:"packages/react-sandbox/src/components/SwitchCheckbox/index.tsx#SwitchCheckbox"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react-sandbox/src/components/TextEllipsis/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>TextEllipsis});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js");const hasChildren=element=>(0,react.isValidElement)(element)&&Boolean(element.props.children),childToString=child=>null==child||"boolean"==typeof child||"{}"===JSON.stringify(child)?"":child.toString(),onlyText=children=>Array.isArray(children)||(0,react.isValidElement)(children)?react.Children.toArray(children).reduce(((text,child)=>{let newText="";return newText=(0,react.isValidElement)(child)&&hasChildren(child)?onlyText(child.props.children):(0,react.isValidElement)(child)&&!hasChildren(child)?"":childToString(child),text.concat(newText)}),""):childToString(children),TextEllipsis=styled_components_browser_esm.ZP.div.attrs((({children,title=onlyText(children)})=>({title:""!==title?title:void 0})))`
  overflow: hidden;
  line-height: ${props=>props.lineHeight}px;
  /* For english */
  overflow-wrap: break-word;

  ${({lineLimit=1,lineHeight})=>1===lineLimit?styled_components_browser_esm.iv`
          text-overflow: ellipsis;
          white-space: nowrap;
        `:styled_components_browser_esm.iv`
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: ${lineLimit};
          /* Fallback for -webkit-line-clamp */
          max-height: ${lineHeight*lineLimit}px;
        `}
`;try{TextEllipsis.displayName="TextEllipsis",TextEllipsis.__docgenInfo={description:"複数行のテキストに表示行数制限を設けて`...`で省略する",displayName:"TextEllipsis",props:{css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},lineLimit:{defaultValue:null,description:"",name:"lineLimit",required:!1,type:{name:"number"}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!0,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react-sandbox/src/components/TextEllipsis/index.tsx#TextEllipsis"]={docgenInfo:TextEllipsis.__docgenInfo,name:"TextEllipsis",path:"packages/react-sandbox/src/components/TextEllipsis/index.tsx#TextEllipsis"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react-sandbox/src/components/WithIcon/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_foundation_hooks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react-sandbox/src/foundation/hooks.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.memo((function WithIcon({children,icon,show=!0,prefix:pre=!1,width,fit=!1,fixed=!1}){const node=fit?void 0===width?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(AutoWidthIconAnchor,{show,pre,children:icon}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(IconAnchor,{width,show,pre,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Icon,{children:icon})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(IconAnchorNaive,{show,pre,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(IconNaive,{children:icon})});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Root,{children:[pre&&node,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text,{fixed,children}),!pre&&node]})})),Root=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  display: flex;
  align-items: center;
`,Text=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  ${p=>!p.fixed&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      min-width: 0;
      overflow: hidden;
    `}
  white-space: nowrap;
  text-overflow: ellipsis;
`;function AutoWidthIconAnchor({children,show,pre}){const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),width=(0,_foundation_hooks__WEBPACK_IMPORTED_MODULE_3__.h4)(ref,[null])?.width??0;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(IconAnchor,{width,show,pre,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Icon,{ref,children})})}AutoWidthIconAnchor.displayName="AutoWidthIconAnchor";const forceCenteringCss=styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
  > svg {
    display: block;
  }
`,iconAnchorCss=styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
  ${p=>"collapse"===p.show?styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
          display: none;
        `:styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
          visibility: ${p.show?"visible":"hidden"};
        `};
  ${p=>p.pre?styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
          margin-right: 4px;
        `:styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
          margin-left: 4px;
        `}
`,IconAnchorNaive=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  display: flex;
  align-items: center;

  ${iconAnchorCss}
`,IconNaive=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  display: inline-flex;

  ${forceCenteringCss}
`,IconAnchor=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  display: flex;
  position: relative;
  /* Iconをline-heightに関与させない */
  height: 0;
  /* 横方向の領域は確保する */
  width: ${p=>p.width}px;

  ${iconAnchorCss}
`,Icon=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  display: inline-flex;
  position: absolute;
  transform: translateY(-50%);

  ${forceCenteringCss}
`;try{WithIcon.displayName="WithIcon",WithIcon.__docgenInfo={description:"",displayName:"WithIcon",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"ReactNode"}},show:{defaultValue:null,description:"アイコンを表示。デフォルトがtrueなので、非表示にするときに使います。 (アイコン自体の幅を維持します)",name:"show",required:!1,type:{name:'boolean | "collapse"'}},prefix:{defaultValue:null,description:"アイコンを前にする",name:"prefix",required:!1,type:{name:"boolean"}},fit:{defaultValue:null,description:"アイコンの高さが文字の高さよりも大きいケースで有効。アイコンの高さをゼロにしてインラインの高さに関与させないようにします。",name:"fit",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"`fit`と併用した時にのみ有効な最適化オプション。アイコンの幅の自動計算を行わず指定した数値を利用します。",name:"width",required:!1,type:{name:"number"}},fixed:{defaultValue:null,description:"親要素のサイズに合わせるのではなく、コンテンツのサイズを優先する",name:"fixed",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react-sandbox/src/components/WithIcon/index.tsx#WithIcon"]={docgenInfo:WithIcon.__docgenInfo,name:"WithIcon",path:"packages/react-sandbox/src/components/WithIcon/index.tsx#WithIcon"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react-sandbox/src/foundation/hooks.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D$:()=>useDebounceAnimationState,h4:()=>useElementSize});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");__webpack_require__("./node_modules/react-dom/index.js");function measure(ref){return null!==ref?ref.getBoundingClientRect():void 0}function useElementSize(ref,deps=[]){const[size,setSize]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(((state,next)=>void 0===state||void 0===next?next:state.height===next.height&&state.width===next.width?state:next),void 0),[watch,setWatch]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{if(null===watch)return;const observer=new ResizeObserver((()=>{const newSize=measure(watch);setSize(newSize)}));return observer.observe(watch),()=>{observer.unobserve(watch),setSize(void 0)}}),[watch]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{ref.current!==watch&&setWatch(ref.current)})),(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{deps.length>0&&setSize(measure(ref.current))}),deps),(0,react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue)(size),size}function useDebounceAnimationState(defaultValue){const[state,setState]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue),timer=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return[state,(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((value,force=!1)=>{force?setState(value):void 0===timer.current&&(timer.current=requestAnimationFrame((()=>{setState(value),void 0!==timer.current&&(timer.current=void 0)})))}),[])]}},"./packages/react-sandbox/src/styled.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>theme});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const theme=(0,__webpack_require__("./packages/styled/dist/index.esm.js").jG)(styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP)}}]);
//# sourceMappingURL=react-sandbox-src-components-MenuListItem-index-story.a72a2dd1.iframe.bundle.js.map