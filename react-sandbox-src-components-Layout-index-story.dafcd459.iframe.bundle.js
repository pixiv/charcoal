"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[5738],{"./packages/react-sandbox/src/components/Layout/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Center:()=>Center,NoMenu:()=>NoMenu,Wide:()=>Wide,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_story});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const dummyText=styled_components_browser_esm.iv`
  color: ${({theme})=>theme.color.text4};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
`;styled_components_browser_esm.ZP.div`
  background-color: ${({theme})=>theme.color.surface2};
  border-radius: 8px;

  ${dummyText}
`;var styled=__webpack_require__("./packages/react-sandbox/src/styled.ts"),index_esm=__webpack_require__("./packages/react/dist/index.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function LeftMenu({links,active}){const{Link}=(0,index_esm.BB)();return(0,jsx_runtime.jsx)(Container,{children:links.map(((link,index)=>(0,jsx_runtime.jsx)(Link,{to:link.to,children:(0,jsx_runtime.jsx)(LinkItem,{"aria-current":link.id===active||void 0,children:link.text})},index)))})}function LeftMenuContent({links}){return _jsx(_Fragment,{children:links.map(((link,index)=>_jsx(MenuListLinkItem,{link:link.to,primary:link.text},index)))})}LeftMenu.displayName="LeftMenu";const Container=styled_components_browser_esm.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,LinkItem=styled_components_browser_esm.ZP.div`
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
`;try{LeftMenu.displayName="LeftMenu",LeftMenu.__docgenInfo={description:"",displayName:"LeftMenu",props:{links:{defaultValue:null,description:"",name:"links",required:!0,type:{name:"readonly { text: string; to: string; id: ID; }[]"}},active:{defaultValue:null,description:"",name:"active",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react-sandbox/src/components/LeftMenu/index.tsx#LeftMenu"]={docgenInfo:LeftMenu.__docgenInfo,name:"LeftMenu",path:"packages/react-sandbox/src/components/LeftMenu/index.tsx#LeftMenu"})}catch(__react_docgen_typescript_loader_error){}try{LeftMenuContent.displayName="LeftMenuContent",LeftMenuContent.__docgenInfo={description:"",displayName:"LeftMenuContent",props:{links:{defaultValue:null,description:"",name:"links",required:!0,type:{name:"readonly { text: string; to: string; id: ID; }[]"}},active:{defaultValue:null,description:"",name:"active",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react-sandbox/src/components/LeftMenu/index.tsx#LeftMenuContent"]={docgenInfo:LeftMenuContent.__docgenInfo,name:"LeftMenuContent",path:"packages/react-sandbox/src/components/LeftMenu/index.tsx#LeftMenuContent"})}catch(__react_docgen_typescript_loader_error){}var dist_index_esm=__webpack_require__("./packages/foundation/dist/index.esm.js");const RESPONSIVE_LEFT_WIDTH=(0,dist_index_esm.iH)(2,dist_index_esm.hw,dist_index_esm.K_)+dist_index_esm.K_,RESPONSIVE_MAIN_MAX_WIDTH=(0,dist_index_esm.iH)(12,dist_index_esm.hw,dist_index_esm.K_);var utils_dist_index_esm=__webpack_require__("./packages/utils/dist/index.esm.js");const LayoutConfigContext=react.createContext({wide:!1,center:!1,withLeft:!1});function Layout({menu,children,header,center=!1,wide,isHeaderTopMenu=!1}){const config={center,wide:!!center||(wide??!1),withLeft:null!=menu&&!isHeaderTopMenu};return(0,jsx_runtime.jsxs)(LayoutRoot,{children:[(0,jsx_runtime.jsxs)(LayoutConfigContext.Provider,{value:config,children:[config.withLeft&&(0,jsx_runtime.jsx)(LeftArea,{children:menu}),(0,jsx_runtime.jsxs)(MainArea,{center,children:[null!=header&&(0,jsx_runtime.jsx)(Header,{children:header}),isHeaderTopMenu&&(0,jsx_runtime.jsx)(HeaderTopMenuContainer,{children:menu}),(0,jsx_runtime.jsx)(Grid,{children})]})]}),(0,jsx_runtime.jsx)(GlobalStyle,{})]})}Layout.displayName="Layout";const HeaderTopMenuContainer=styled_components_browser_esm.ZP.div`
  margin-bottom: 40px;
  overflow-x: auto;
  word-break: keep-all;

  @media ${({theme})=>(0,utils_dist_index_esm.kk)(theme.breakpoint.screen1)} {
    margin-bottom: 0;
    padding-left: 16px;
    padding-bottom: 16px;
    background-color: ${({theme})=>theme.color.surface2};
  }
`,GlobalStyle=styled_components_browser_esm.vJ`
  :root {
    background-color: ${({theme})=>theme.color.background2};

    @media ${({theme})=>(0,utils_dist_index_esm.kk)(theme.breakpoint.screen1)} {
      background-color: ${({theme})=>theme.color.background1};
    }
  }
`,LayoutRoot=styled_components_browser_esm.ZP.div`
  display: flex;
  background-color: ${({theme})=>theme.color.background2};

  @media ${({theme})=>(0,utils_dist_index_esm.kk)(theme.breakpoint.screen1)} {
    background-color: ${({theme})=>theme.color.background1};
  }
`,LeftArea=styled_components_browser_esm.ZP.div`
  min-width: ${RESPONSIVE_LEFT_WIDTH}px;
  padding: 40px 0 40px ${dist_index_esm.K_}px;
  box-sizing: border-box;

  @media ${({theme})=>theme.breakpoint.screen3} {
    display: none;
  }
`,MainArea=styled_components_browser_esm.ZP.div`
  flex-grow: 1;
  /* https://www.w3.org/TR/css-flexbox-1/#min-size-auto */
  min-width: 0;
  max-width: ${p=>p.center?(0,dist_index_esm.iH)(6,dist_index_esm.hw,dist_index_esm.K_):RESPONSIVE_MAIN_MAX_WIDTH}px;
  padding: 40px ${72}px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media ${({theme})=>(0,utils_dist_index_esm.kk)(theme.breakpoint.screen1)} {
    padding: 0;
  }
`,Header=styled_components_browser_esm.ZP.div`
  font-weight: bold;
  margin-bottom: 12px;
  font-size: 20px;
  line-height: 28px;
  color: ${({theme})=>theme.color.text2};

  @media ${({theme})=>(0,utils_dist_index_esm.kk)(theme.breakpoint.screen1)} {
    margin-bottom: 0;
    padding: 12px;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    justify-content: center;
    background-color: ${({theme})=>theme.color.surface2};
  }
`,Grid=styled_components_browser_esm.ZP.div`
  display: grid;
  gap: ${dist_index_esm.K_}px;
  grid-template-columns: 1fr;
  grid-auto-columns: 1fr;
  grid-auto-rows: auto;

  @media ${({theme})=>(0,utils_dist_index_esm.kk)(theme.breakpoint.screen1)} {
    gap: 0;
    background-color: ${({theme})=>theme.color.background1};
    padding-bottom: 60px;
  }
`,LayoutItem=react.forwardRef((function LayoutItem({span,children},ref){const{withLeft}=(0,react.useContext)(LayoutConfigContext);return(0,jsx_runtime.jsx)(StyledLayoutItem,{span,withLeft,ref,children})})),StyledLayoutItem=styled_components_browser_esm.ZP.div`
  grid-column-start: auto;
  grid-column-end: span ${p=>p.span};
  border-radius: 24px;
  color: ${({theme})=>theme.color.text2};
  background-color: ${({theme})=>theme.color.background1};
  /* https://www.w3.org/TR/css-grid-1/#min-size-auto */
  min-width: 0;

  @media ${p=>p.withLeft?p.theme.breakpoint.screen4:p.theme.breakpoint.screen3} {
    ${p=>p.span>2&&styled_components_browser_esm.iv`
        grid-column-end: span 2;
      `}
  }

  @media ${({theme})=>(0,utils_dist_index_esm.kk)(theme.breakpoint.screen1)} {
    ${p=>p.span>1&&styled_components_browser_esm.iv`
        grid-column-end: span 1;
      `}

    border-radius: 0;
    padding-bottom: 40px;
  }
`;function LayoutItemHeader({children}){const{wide,center}=(0,react.useContext)(LayoutConfigContext);return(0,jsx_runtime.jsx)(StyledLayoutItemHeader,{wide,center,children})}LayoutItemHeader.displayName="LayoutItemHeader";const StyledLayoutItemHeader=styled_components_browser_esm.ZP.div`
  padding: 0 ${p=>p.wide?40:24}px;
  height: ${p=>p.wide?64:48}px;
  display: grid;
  align-items: center;
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  background-color: ${({theme})=>theme.color.surface2};
  color: ${({theme})=>theme.color.text2};
  border-radius: 24px 24px 0 0;
  ${p=>p.center&&styled_components_browser_esm.iv`
      justify-content: center;
    `}

  @media ${({theme})=>(0,utils_dist_index_esm.kk)(theme.breakpoint.screen1)} {
    margin-top: 4px;
    padding: 0 16px;
    background: none;
    overflow-x: auto;
    border-radius: unset;
    ${p=>p.wide&&styled_components_browser_esm.iv`
        height: 48px;
        margin-top: 0;
      `}
  }
`,LAYOUT_ITEM_BODY_PADDING={wide:{x:40,y:40},default:{x:24,y:24},column1:{x:16,y:16},narrow:{x:24,yTop:12,yBottom:20},narrowColumn1:{x:16,yTop:4,yBottom:0}};function LayoutItemBody({children,horizontal=!1,narrow=!1}){const{wide}=(0,react.useContext)(LayoutConfigContext);return(0,jsx_runtime.jsx)(StyledLayoutItemBody,{wide,horizontal,narrow,children})}LayoutItemBody.displayName="LayoutItemBody";const StyledLayoutItemBody=styled_components_browser_esm.ZP.div`
  padding: ${p=>p.narrow?`${LAYOUT_ITEM_BODY_PADDING.narrow.yTop}px ${p.horizontal?0:LAYOUT_ITEM_BODY_PADDING.narrow.x}px ${LAYOUT_ITEM_BODY_PADDING.narrow.yBottom}px`:p.wide?`${p.horizontal?0:LAYOUT_ITEM_BODY_PADDING.wide.y}px ${LAYOUT_ITEM_BODY_PADDING.wide.x}px`:`${p.horizontal?0:LAYOUT_ITEM_BODY_PADDING.default.y}px ${LAYOUT_ITEM_BODY_PADDING.default.x}px`};

  @media ${({theme})=>(0,utils_dist_index_esm.kk)(theme.breakpoint.screen1)} {
    padding: ${p=>p.narrow?`${LAYOUT_ITEM_BODY_PADDING.narrowColumn1.yTop}px ${p.horizontal?0:LAYOUT_ITEM_BODY_PADDING.narrowColumn1.x}px ${LAYOUT_ITEM_BODY_PADDING.narrowColumn1.yBottom}px`:`${LAYOUT_ITEM_BODY_PADDING.column1.y}px ${LAYOUT_ITEM_BODY_PADDING.column1.x}px 0`};
  }

  width: 100%;
  box-sizing: border-box;
`;function CancelLayoutItemBodyPadding({children,cancelTop}){const{wide}=(0,react.useContext)(LayoutConfigContext);return(0,jsx_runtime.jsx)(StyledCancelLayoutItemBodyPadding,{wide,cancelTop,children})}CancelLayoutItemBodyPadding.displayName="CancelLayoutItemBodyPadding";const StyledCancelLayoutItemBodyPadding=styled_components_browser_esm.ZP.div`
  margin: 0 -${p=>p.wide?LAYOUT_ITEM_BODY_PADDING.wide.x:LAYOUT_ITEM_BODY_PADDING.default.x}px;
  margin-top: -${({cancelTop=!1,wide})=>cancelTop?wide?LAYOUT_ITEM_BODY_PADDING.wide.y:LAYOUT_ITEM_BODY_PADDING.default.y:0}px;

  @media ${({theme})=>(0,utils_dist_index_esm.kk)(theme.breakpoint.screen1)} {
    margin: 0 -${LAYOUT_ITEM_BODY_PADDING.column1.x}px;
    margin-top: -${({cancelTop=!1})=>cancelTop?LAYOUT_ITEM_BODY_PADDING.column1.x:0}px;
  }
`;try{Layout.displayName="Layout",Layout.__docgenInfo={description:"",displayName:"Layout",props:{menu:{defaultValue:null,description:"",name:"menu",required:!1,type:{name:"ReactNode"}},isHeaderTopMenu:{defaultValue:{value:"false"},description:"",name:"isHeaderTopMenu",required:!1,type:{name:"boolean"}},header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"ReactNode"}},wide:{defaultValue:null,description:"",name:"wide",required:!1,type:{name:"boolean"}},center:{defaultValue:{value:"false"},description:"",name:"center",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react-sandbox/src/components/Layout/index.tsx#Layout"]={docgenInfo:Layout.__docgenInfo,name:"Layout",path:"packages/react-sandbox/src/components/Layout/index.tsx#Layout"})}catch(__react_docgen_typescript_loader_error){}try{LayoutItemHeader.displayName="LayoutItemHeader",LayoutItemHeader.__docgenInfo={description:"",displayName:"LayoutItemHeader",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react-sandbox/src/components/Layout/index.tsx#LayoutItemHeader"]={docgenInfo:LayoutItemHeader.__docgenInfo,name:"LayoutItemHeader",path:"packages/react-sandbox/src/components/Layout/index.tsx#LayoutItemHeader"})}catch(__react_docgen_typescript_loader_error){}try{LayoutItemBody.displayName="LayoutItemBody",LayoutItemBody.__docgenInfo={description:"",displayName:"LayoutItemBody",props:{horizontal:{defaultValue:{value:"false"},description:"",name:"horizontal",required:!1,type:{name:"boolean"}},narrow:{defaultValue:{value:"false"},description:"",name:"narrow",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react-sandbox/src/components/Layout/index.tsx#LayoutItemBody"]={docgenInfo:LayoutItemBody.__docgenInfo,name:"LayoutItemBody",path:"packages/react-sandbox/src/components/Layout/index.tsx#LayoutItemBody"})}catch(__react_docgen_typescript_loader_error){}try{CancelLayoutItemBodyPadding.displayName="CancelLayoutItemBodyPadding",CancelLayoutItemBodyPadding.__docgenInfo={description:"",displayName:"CancelLayoutItemBodyPadding",props:{cancelTop:{defaultValue:null,description:"",name:"cancelTop",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react-sandbox/src/components/Layout/index.tsx#CancelLayoutItemBodyPadding"]={docgenInfo:CancelLayoutItemBodyPadding.__docgenInfo,name:"CancelLayoutItemBodyPadding",path:"packages/react-sandbox/src/components/Layout/index.tsx#CancelLayoutItemBodyPadding"})}catch(__react_docgen_typescript_loader_error){}try{LayoutItem.displayName="LayoutItem",LayoutItem.__docgenInfo={description:"",displayName:"LayoutItem",props:{span:{defaultValue:null,description:"",name:"span",required:!0,type:{name:"number"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react-sandbox/src/components/Layout/index.tsx#LayoutItem"]={docgenInfo:LayoutItem.__docgenInfo,name:"LayoutItem",path:"packages/react-sandbox/src/components/Layout/index.tsx#LayoutItem"})}catch(__react_docgen_typescript_loader_error){}try{StyledLayoutItemBody.displayName="StyledLayoutItemBody",StyledLayoutItemBody.__docgenInfo={description:"",displayName:"StyledLayoutItemBody",props:{css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},horizontal:{defaultValue:null,description:"",name:"horizontal",required:!0,type:{name:"boolean"}},wide:{defaultValue:null,description:"",name:"wide",required:!0,type:{name:"boolean"}},narrow:{defaultValue:null,description:"",name:"narrow",required:!0,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react-sandbox/src/components/Layout/index.tsx#StyledLayoutItemBody"]={docgenInfo:StyledLayoutItemBody.__docgenInfo,name:"StyledLayoutItemBody",path:"packages/react-sandbox/src/components/Layout/index.tsx#StyledLayoutItemBody"})}catch(__react_docgen_typescript_loader_error){}try{StyledCancelLayoutItemBodyPadding.displayName="StyledCancelLayoutItemBodyPadding",StyledCancelLayoutItemBodyPadding.__docgenInfo={description:"",displayName:"StyledCancelLayoutItemBodyPadding",props:{css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},wide:{defaultValue:null,description:"",name:"wide",required:!0,type:{name:"boolean"}},cancelTop:{defaultValue:null,description:"",name:"cancelTop",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react-sandbox/src/components/Layout/index.tsx#StyledCancelLayoutItemBodyPadding"]={docgenInfo:StyledCancelLayoutItemBodyPadding.__docgenInfo,name:"StyledCancelLayoutItemBodyPadding",path:"packages/react-sandbox/src/components/Layout/index.tsx#StyledCancelLayoutItemBodyPadding"})}catch(__react_docgen_typescript_loader_error){}const index_story={title:"Sandbox/Layout",component:Layout,parameters:{layout:"fullscreen"}};function Basic(){const menu=(0,jsx_runtime.jsx)(DummyMenu,{}),header=(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Header"});return(0,jsx_runtime.jsxs)(Layout,{menu,header,children:[(0,jsx_runtime.jsx)(DummyCard,{span:3,children:"Span 3"}),(0,jsx_runtime.jsx)(DummyCard,{span:2,children:"Span 2"}),(0,jsx_runtime.jsx)(DummyCard,{span:1,children:"Span 1"}),(0,jsx_runtime.jsx)(DummyCard,{span:1,children:"Span 1"}),(0,jsx_runtime.jsx)(DummyCard,{span:1,children:"Span 1"}),(0,jsx_runtime.jsx)(DummyCard,{span:1,children:"Span 1"})]})}function NoMenu(){const header=(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Header"});return(0,jsx_runtime.jsxs)(Layout,{header,children:[(0,jsx_runtime.jsx)(DummyCard,{span:3,children:"Span 3"}),(0,jsx_runtime.jsx)(DummyCard,{span:2,children:"Span 2"}),(0,jsx_runtime.jsx)(DummyCard,{span:1,children:"Span 1"}),(0,jsx_runtime.jsx)(DummyCard,{span:1,children:"Span 1"}),(0,jsx_runtime.jsx)(DummyCard,{span:1,children:"Span 1"}),(0,jsx_runtime.jsx)(DummyCard,{span:1,children:"Span 1"})]})}function Wide(){const menu=(0,jsx_runtime.jsx)(DummyMenu,{}),header=(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Header"});return(0,jsx_runtime.jsx)(Layout,{menu,header,wide:!0,children:(0,jsx_runtime.jsxs)(LayoutItem,{span:3,children:[(0,jsx_runtime.jsx)(LayoutItemHeader,{children:"Wide"}),(0,jsx_runtime.jsx)(LayoutItemBody,{children:(0,jsx_runtime.jsx)(index_story_Dummy,{children:"Hello, Flexible Grid Layout!"})})]})})}function Center(){const header=(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Header"});return(0,jsx_runtime.jsx)(Layout,{header,wide:!0,center:!0,children:(0,jsx_runtime.jsxs)(LayoutItem,{span:3,children:[(0,jsx_runtime.jsx)(LayoutItemHeader,{children:"Center"}),(0,jsx_runtime.jsx)(LayoutItemBody,{children:(0,jsx_runtime.jsx)(index_story_Dummy,{children:"Hello, Flexible Grid Layout!"})})]})})}function DummyCard({span,children}){return(0,jsx_runtime.jsxs)(LayoutItem,{span,children:[(0,jsx_runtime.jsx)(LayoutItemHeader,{children:"Dummy"}),(0,jsx_runtime.jsx)(LayoutItemBody,{children:(0,jsx_runtime.jsx)(index_story_Dummy,{children})})]})}Basic.displayName="Basic",NoMenu.displayName="NoMenu",Wide.displayName="Wide",Center.displayName="Center",DummyCard.displayName="DummyCard";const index_story_Dummy=styled_components_browser_esm.ZP.div`
  ${(0,styled.r)((o=>o.height.column(2)))}

  ${dummyText}
`;function DummyMenu(){return(0,jsx_runtime.jsx)(LeftMenu,{links:[{id:"hello",text:"Hello",to:"#hello"},{id:"world",text:"World",to:"#world"},{id:"dummy",text:"Dummy",to:"#dummy"},{id:"menu",text:"Menu",to:"#menu"}],active:"hello"})}DummyMenu.displayName="DummyMenu",Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"function Basic() {\n  const menu = <DummyMenu />;\n  const header = <>Header</>;\n  return <Layout menu={menu} header={header}>\n      <DummyCard span={3}>Span 3</DummyCard>\n      <DummyCard span={2}>Span 2</DummyCard>\n      <DummyCard span={1}>Span 1</DummyCard>\n      <DummyCard span={1}>Span 1</DummyCard>\n      <DummyCard span={1}>Span 1</DummyCard>\n      <DummyCard span={1}>Span 1</DummyCard>\n    </Layout>;\n}",...Basic.parameters?.docs?.source}}},NoMenu.parameters={...NoMenu.parameters,docs:{...NoMenu.parameters?.docs,source:{originalSource:"function NoMenu() {\n  const header = <>Header</>;\n  return <Layout header={header}>\n      <DummyCard span={3}>Span 3</DummyCard>\n      <DummyCard span={2}>Span 2</DummyCard>\n      <DummyCard span={1}>Span 1</DummyCard>\n      <DummyCard span={1}>Span 1</DummyCard>\n      <DummyCard span={1}>Span 1</DummyCard>\n      <DummyCard span={1}>Span 1</DummyCard>\n    </Layout>;\n}",...NoMenu.parameters?.docs?.source}}},Wide.parameters={...Wide.parameters,docs:{...Wide.parameters?.docs,source:{originalSource:"function Wide() {\n  const menu = <DummyMenu />;\n  const header = <>Header</>;\n  return <Layout menu={menu} header={header} wide>\n      <LayoutItem span={3}>\n        <LayoutItemHeader>Wide</LayoutItemHeader>\n        <LayoutItemBody>\n          <Dummy>Hello, Flexible Grid Layout!</Dummy>\n        </LayoutItemBody>\n      </LayoutItem>\n    </Layout>;\n}",...Wide.parameters?.docs?.source}}},Center.parameters={...Center.parameters,docs:{...Center.parameters?.docs,source:{originalSource:"function Center() {\n  const header = <>Header</>;\n  return <Layout header={header} wide center>\n      <LayoutItem span={3}>\n        <LayoutItemHeader>Center</LayoutItemHeader>\n        <LayoutItemBody>\n          <Dummy>Hello, Flexible Grid Layout!</Dummy>\n        </LayoutItemBody>\n      </LayoutItem>\n    </Layout>;\n}",...Center.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","NoMenu","Wide","Center"]},"./packages/react-sandbox/src/styled.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>theme});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const theme=(0,__webpack_require__("./packages/styled/dist/index.esm.js").jG)(styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP)}}]);
//# sourceMappingURL=react-sandbox-src-components-Layout-index-story.dafcd459.iframe.bundle.js.map