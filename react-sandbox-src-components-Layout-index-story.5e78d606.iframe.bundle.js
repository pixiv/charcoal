"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[55788],{"./packages/react-sandbox/src/components/Layout/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>index_story});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/.pnpm/styled-components@5.3.11_@babel+core@7.26.10_react-dom@18.3.1_react@18.3.1__react-is@18.3.1_react@18.3.1/node_modules/styled-components/dist/styled-components.browser.esm.js"),dist=__webpack_require__("./packages/foundation/dist/index.js");const RESPONSIVE_LEFT_WIDTH=(0,dist.AC)(2,dist.sG,dist.lg)+dist.lg,RESPONSIVE_MAIN_MAX_WIDTH=(0,dist.AC)(12,dist.sG,dist.lg);var utils_dist=__webpack_require__("./packages/utils/dist/index.js");const LayoutConfigContext=react.createContext({wide:!1,center:!1,withLeft:!1});function Layout({menu,children,header,center=!1,wide,isHeaderTopMenu=!1}){const config={center,wide:!!center||(wide??!1),withLeft:null!=menu&&!isHeaderTopMenu};return(0,jsx_runtime.jsxs)(LayoutRoot,{children:[(0,jsx_runtime.jsxs)(LayoutConfigContext.Provider,{value:config,children:[config.withLeft&&(0,jsx_runtime.jsx)(LeftArea,{children:menu}),(0,jsx_runtime.jsxs)(MainArea,{center,children:[null!=header&&(0,jsx_runtime.jsx)(Header,{children:header}),isHeaderTopMenu&&(0,jsx_runtime.jsx)(HeaderTopMenuContainer,{children:menu}),(0,jsx_runtime.jsx)(Grid,{children})]})]}),(0,jsx_runtime.jsx)(GlobalStyle,{})]})}const HeaderTopMenuContainer=styled_components_browser_esm.Ay.div`
  margin-bottom: 40px;
  overflow-x: auto;
  word-break: keep-all;

  @media ${({theme})=>(0,utils_dist.JX)(theme.breakpoint.screen1)} {
    margin-bottom: 0;
    padding-left: 16px;
    padding-bottom: 16px;
    background-color: ${({theme})=>theme.color.surface2};
  }
`,GlobalStyle=styled_components_browser_esm.DU`
  :root {
    background-color: ${({theme})=>theme.color.background2};

    @media ${({theme})=>(0,utils_dist.JX)(theme.breakpoint.screen1)} {
      background-color: ${({theme})=>theme.color.background1};
    }
  }
`,LayoutRoot=styled_components_browser_esm.Ay.div`
  display: flex;
  background-color: ${({theme})=>theme.color.background2};

  @media ${({theme})=>(0,utils_dist.JX)(theme.breakpoint.screen1)} {
    background-color: ${({theme})=>theme.color.background1};
  }
`,LeftArea=styled_components_browser_esm.Ay.div`
  min-width: ${RESPONSIVE_LEFT_WIDTH}px;
  padding: 40px 0 40px ${dist.lg}px;
  box-sizing: border-box;

  @media ${({theme})=>theme.breakpoint.screen3} {
    display: none;
  }
`,MainArea=styled_components_browser_esm.Ay.div`
  flex-grow: 1;
  /* https://www.w3.org/TR/css-flexbox-1/#min-size-auto */
  min-width: 0;
  max-width: ${p=>p.center?(0,dist.AC)(6,dist.sG,dist.lg):RESPONSIVE_MAIN_MAX_WIDTH}px;
  padding: 40px ${72}px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media ${({theme})=>(0,utils_dist.JX)(theme.breakpoint.screen1)} {
    padding: 0;
  }
`,Header=styled_components_browser_esm.Ay.div`
  font-weight: bold;
  margin-bottom: 12px;
  font-size: 20px;
  line-height: 28px;
  color: ${({theme})=>theme.color.text2};

  @media ${({theme})=>(0,utils_dist.JX)(theme.breakpoint.screen1)} {
    margin-bottom: 0;
    padding: 12px;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    justify-content: center;
    background-color: ${({theme})=>theme.color.surface2};
  }
`,Grid=styled_components_browser_esm.Ay.div`
  display: grid;
  gap: ${dist.lg}px;
  grid-template-columns: 1fr;
  grid-auto-columns: 1fr;
  grid-auto-rows: auto;

  @media ${({theme})=>(0,utils_dist.JX)(theme.breakpoint.screen1)} {
    gap: 0;
    background-color: ${({theme})=>theme.color.background1};
    padding-bottom: 60px;
  }
`,LayoutItem=react.forwardRef((function LayoutItem({span,children},ref){const{withLeft}=(0,react.useContext)(LayoutConfigContext);return(0,jsx_runtime.jsx)(StyledLayoutItem,{span,withLeft,ref,children})})),StyledLayoutItem=styled_components_browser_esm.Ay.div`
  grid-column-start: auto;
  grid-column-end: span ${p=>p.span};
  border-radius: 24px;
  color: ${({theme})=>theme.color.text2};
  background-color: ${({theme})=>theme.color.background1};
  /* https://www.w3.org/TR/css-grid-1/#min-size-auto */
  min-width: 0;

  @media ${p=>p.withLeft?p.theme.breakpoint.screen4:p.theme.breakpoint.screen3} {
    ${p=>p.span>2&&styled_components_browser_esm.AH`
        grid-column-end: span 2;
      `}
  }

  @media ${({theme})=>(0,utils_dist.JX)(theme.breakpoint.screen1)} {
    ${p=>p.span>1&&styled_components_browser_esm.AH`
        grid-column-end: span 1;
      `}

    border-radius: 0;
    padding-bottom: 40px;
  }
`;styled_components_browser_esm.Ay.div`
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
  ${p=>p.center&&styled_components_browser_esm.AH`
      justify-content: center;
    `}

  @media ${({theme})=>(0,utils_dist.JX)(theme.breakpoint.screen1)} {
    margin-top: 4px;
    padding: 0 16px;
    background: none;
    overflow-x: auto;
    border-radius: unset;
    ${p=>p.wide&&styled_components_browser_esm.AH`
        height: 48px;
        margin-top: 0;
      `}
  }
`;const LAYOUT_ITEM_BODY_PADDING={wide:{x:40,y:40},default:{x:24,y:24},column1:{x:16,y:16},narrow:{x:24,yTop:12,yBottom:20},narrowColumn1:{x:16,yTop:4,yBottom:0}};styled_components_browser_esm.Ay.div`
  padding: ${p=>p.narrow?`${LAYOUT_ITEM_BODY_PADDING.narrow.yTop}px ${p.horizontal?0:LAYOUT_ITEM_BODY_PADDING.narrow.x}px ${LAYOUT_ITEM_BODY_PADDING.narrow.yBottom}px`:p.wide?`${p.horizontal?0:LAYOUT_ITEM_BODY_PADDING.wide.y}px ${LAYOUT_ITEM_BODY_PADDING.wide.x}px`:`${p.horizontal?0:LAYOUT_ITEM_BODY_PADDING.default.y}px ${LAYOUT_ITEM_BODY_PADDING.default.x}px`};

  @media ${({theme})=>(0,utils_dist.JX)(theme.breakpoint.screen1)} {
    padding: ${p=>p.narrow?`${LAYOUT_ITEM_BODY_PADDING.narrowColumn1.yTop}px ${p.horizontal?0:LAYOUT_ITEM_BODY_PADDING.narrowColumn1.x}px ${LAYOUT_ITEM_BODY_PADDING.narrowColumn1.yBottom}px`:`${LAYOUT_ITEM_BODY_PADDING.column1.y}px ${LAYOUT_ITEM_BODY_PADDING.column1.x}px 0`};
  }

  width: 100%;
  box-sizing: border-box;
`;styled_components_browser_esm.Ay.div`
  margin: 0 -${p=>p.wide?LAYOUT_ITEM_BODY_PADDING.wide.x:LAYOUT_ITEM_BODY_PADDING.default.x}px;
  margin-top: -${({cancelTop=!1,wide})=>cancelTop?wide?LAYOUT_ITEM_BODY_PADDING.wide.y:LAYOUT_ITEM_BODY_PADDING.default.y:0}px;

  @media ${({theme})=>(0,utils_dist.JX)(theme.breakpoint.screen1)} {
    margin: 0 -${LAYOUT_ITEM_BODY_PADDING.column1.x}px;
    margin-top: -${({cancelTop=!1})=>cancelTop?LAYOUT_ITEM_BODY_PADDING.column1.x:0}px;
  }
`;Layout.__docgenInfo={description:"",methods:[],displayName:"Layout",props:{menu:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isHeaderTopMenu:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},header:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},wide:{required:!1,tsType:{name:"boolean"},description:""},center:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}},LayoutItem.__docgenInfo={description:"",methods:[],displayName:"LayoutItem",props:{span:{required:!0,tsType:{name:"number"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const index_story={title:"react-sandbox/Layout",component:Layout},Default={render:props=>(0,jsx_runtime.jsx)(Layout,{...props,menu:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"menu"}),header:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"header"}),children:"children"})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: props => {\n    return <Layout {...props} menu={<>menu</>} header={<>header</>}>\n        children\n      </Layout>;\n  }\n}",...Default.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=react-sandbox-src-components-Layout-index-story.5e78d606.iframe.bundle.js.map