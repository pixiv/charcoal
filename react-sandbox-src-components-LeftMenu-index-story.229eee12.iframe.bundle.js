"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[48016],{"./packages/react-sandbox/src/_lib/ComponentAbstraction.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{FY:()=>useComponentAbstraction});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const DefaultLink=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function DefaultLink({to,children,...rest},ref){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:to,ref,...rest,children})})),DefaultValue={Link:DefaultLink},ComponentAbstractionContext=react__WEBPACK_IMPORTED_MODULE_1__.createContext(DefaultValue);function useComponentAbstraction(){return(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ComponentAbstractionContext)}DefaultLink.__docgenInfo={description:"",methods:[],displayName:"DefaultLink",props:{to:{required:!0,tsType:{name:"string"},description:"リンクのURL"}}}},"./packages/react-sandbox/src/components/LeftMenu/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>index_story});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),styled_components_browser_esm=__webpack_require__("./node_modules/.pnpm/styled-components@5.3.11_@babel+core@7.26.10_react-dom@18.3.1_react@18.3.1__react-is@18.3.1_react@18.3.1/node_modules/styled-components/dist/styled-components.browser.esm.js"),react=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),styled=__webpack_require__("./packages/react-sandbox/src/styled.ts");const hasChildren=element=>(0,react.isValidElement)(element)&&Boolean(element.props.children),childToString=child=>null==child||"boolean"==typeof child||"{}"===JSON.stringify(child)?"":child.toString(),onlyText=children=>Array.isArray(children)||(0,react.isValidElement)(children)?react.Children.toArray(children).reduce(((text,child)=>{let newText="";return newText=(0,react.isValidElement)(child)&&hasChildren(child)?onlyText(child.props.children):(0,react.isValidElement)(child)&&!hasChildren(child)?"":childToString(child),text.concat(newText)}),""):childToString(children),TextEllipsis=styled_components_browser_esm.Ay.div.attrs((({children,title=onlyText(children)})=>({title:""!==title?title:void 0})))`
  overflow: hidden;
  line-height: ${props=>props.lineHeight}px;
  /* For english */
  overflow-wrap: break-word;

  ${({lineLimit=1,lineHeight})=>1===lineLimit?styled_components_browser_esm.AH`
          text-overflow: ellipsis;
          white-space: nowrap;
        `:styled_components_browser_esm.AH`
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: ${lineLimit};
          /* Fallback for -webkit-line-clamp */
          max-height: ${lineHeight*lineLimit}px;
        `}
`;var ComponentAbstraction=__webpack_require__("./packages/react-sandbox/src/_lib/ComponentAbstraction.tsx"),dist=__webpack_require__("./packages/utils/dist/index.js");const MenuListItemContext=react.createContext({padding:24});function MenuListItem({primary,secondary,onClick,disabled=!1,noHover=!1,gtmClass,children}){const{padding}=(0,react.useContext)(MenuListItemContext);return(0,jsx_runtime.jsxs)(Item,{hasSubLabel:void 0!==secondary,onClick:e=>!disabled&&onClick&&onClick(e),sidePadding:padding,noHover,noClick:void 0===onClick,"aria-disabled":disabled,role:void 0!==onClick?"button":void 0,className:void 0!==gtmClass?`gtm-${gtmClass}`:void 0,children:[(0,jsx_runtime.jsxs)(Labels,{children:[(0,jsx_runtime.jsx)(PrimaryText,{children:(0,jsx_runtime.jsx)(TextEllipsis,{lineHeight:22,lineLimit:1,children:primary})}),void 0!==secondary&&(0,jsx_runtime.jsx)(SecondaryText,{children:(0,jsx_runtime.jsx)(TextEllipsis,{lineHeight:22,lineLimit:1,children:secondary})})]}),children]})}const Item=styled_components_browser_esm.Ay.div`
  display: flex;
  height: ${p=>p.hasSubLabel?56:40}px;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${p=>p.sidePadding}px;
  user-select: none;
  cursor: ${p=>p.noClick?"default":"pointer"};
  transition: 0.2s background-color;

  &:hover {
    ${p=>!p.noHover&&styled_components_browser_esm.AH`
        background-color: ${({theme})=>theme.color.surface3};
      `}
  }

  ${(0,styled.w)((o=>o.disabled))}

  ${dist.gT} {
    cursor: default;
    pointer-events: none;

    &:hover {
      background-color: unset;
    }
  }
`,Labels=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
`,PrimaryText=styled_components_browser_esm.Ay.div`
  color: ${p=>p.theme.color.text2};
  line-height: 22px;
  font-size: 14px;
  display: grid;
`,SecondaryText=styled_components_browser_esm.Ay.div`
  color: ${p=>p.theme.color.text3};
  line-height: 18px;
  font-size: 10px;
`;function MenuListLinkItem({link,onClick,disabled=!1,primary,secondary,gtmClass,noHover,children,...linkProps}){const{Link}=(0,ComponentAbstraction.FY)(),props={disabled,primary,secondary,gtmClass,noHover,children};return disabled?(0,jsx_runtime.jsx)("span",{onClick,children:(0,jsx_runtime.jsx)(MenuListItem,{...props})}):(0,jsx_runtime.jsx)(A,{as:Link,to:link,onClick,...linkProps,children:(0,jsx_runtime.jsx)(MenuListItem,{onClick:()=>{},...props})})}const A=styled_components_browser_esm.Ay.a`
  display: block;
`;styled_components_browser_esm.Ay.div`
  display: grid;
  gap: 8px;
  grid-auto-flow: column;
  align-items: center;
`,styled_components_browser_esm.Ay.div`
  color: ${({theme})=>theme.color.text3};
  display: flex;
`,styled_components_browser_esm.Ay.div`
  height: 24px;
`,styled_components_browser_esm.Ay.div`
  padding: 0 16px;
  font-size: 12px;
  line-height: 16px;
  color: ${({theme})=>theme.color.text3};
  margin-top: -2px;
  margin-bottom: 6px;
`;function LeftMenu({links,active}){const{Link}=(0,ComponentAbstraction.FY)();return(0,jsx_runtime.jsx)(Container,{children:links.map(((link,index)=>(0,jsx_runtime.jsx)(Link,{to:link.to,children:(0,jsx_runtime.jsx)(LinkItem,{"aria-current":link.id===active||void 0,children:link.text})},index)))})}MenuListItem.__docgenInfo={description:"",methods:[],displayName:"MenuListItem",props:{primary:{required:!0,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},secondary:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},gtmClass:{required:!1,tsType:{name:"string"},description:""},noHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}},MenuListLinkItem.__docgenInfo={description:"",methods:[],displayName:"MenuListLinkItem",props:{primary:{required:!0,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},secondary:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},gtmClass:{required:!1,tsType:{name:"string"},description:""},noHover:{required:!1,tsType:{name:"boolean"},description:""},link:{required:!0,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["Omit"]};const Container=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,LinkItem=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  color: ${({theme})=>theme.color.text3};
  border-radius: 24px;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  padding: 0 16px;
  height: 40px;
  transition: 0.2s color;
  &:hover {
    transition: 0.2s color;
    color: ${({theme})=>theme.color.text2};
  }
  &[aria-current] {
    color: ${({theme})=>theme.color.text2};
    background-color: ${({theme})=>theme.color.surface3};
  }
`;LeftMenu.__docgenInfo={description:"",methods:[],displayName:"LeftMenu",props:{links:{required:!0,tsType:{name:"unknown"},description:""},active:{required:!0,tsType:{name:"ID"},description:""}}};const index_story={title:"react-sandbox/LeftMenu",component:LeftMenu},links=[{text:"text1",to:"",id:"1"},{text:"text2",to:"",id:"2"},{text:"text3",to:"",id:"3"}],Default={render:props=>(0,jsx_runtime.jsx)(LeftMenu,{...props,links,active:"1",children:"children"})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: props => {\n    return <LeftMenu {...props} links={links} active="1">\n        children\n      </LeftMenu>;\n  }\n}',...Default.parameters?.docs?.source}}}},"./packages/react-sandbox/src/styled.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>theme});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/styled-components@5.3.11_@babel+core@7.26.10_react-dom@18.3.1_react@18.3.1__react-is@18.3.1_react@18.3.1/node_modules/styled-components/dist/styled-components.browser.esm.js");const theme=(0,__webpack_require__("./packages/styled/dist/index.js").an)(styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay)}}]);
//# sourceMappingURL=react-sandbox-src-components-LeftMenu-index-story.229eee12.iframe.bundle.js.map