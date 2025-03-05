"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[4705],{"./packages/react-sandbox/src/components/Pager/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>index_story});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/.pnpm/styled-components@5.3.11_@babel+core@7.26.8_react-dom@18.3.1_react@18.3.1__react-is@18.3.1_react@18.3.1/node_modules/styled-components/dist/styled-components.browser.esm.js");__webpack_require__("./node_modules/.pnpm/warning@4.0.3/node_modules/warning/warning.js");function DotsIcon({size=16}){return(0,jsx_runtime.jsx)(StyledSVG,{viewBox:"0 0 20 6",width:size,height:size,children:(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",d:"M5,14.5 C3.61928813,14.5 2.5,13.3807119 2.5,12 C2.5,10.6192881 3.61928813,9.5 5,9.5\n          C6.38071187,9.5 7.5,10.6192881 7.5,12 C7.5,13.3807119 6.38071187,14.5 5,14.5 Z M12,14.5\n          C10.6192881,14.5 9.5,13.3807119 9.5,12 C9.5,10.6192881 10.6192881,9.5 12,9.5\n          C13.3807119,9.5 14.5,10.6192881 14.5,12 C14.5,13.3807119 13.3807119,14.5 12,14.5 Z M19,14.5\n          C17.6192881,14.5 16.5,13.3807119 16.5,12 C16.5,10.6192881 17.6192881,9.5 19,9.5\n          C20.3807119,9.5 21.5,10.6192881 21.5,12 C21.5,13.3807119 20.3807119,14.5 19,14.5 Z",transform:"translate(-2 -9)"})})}const StyledSVG=styled_components_browser_esm.Ay.svg`
  fill: currentColor;
`;DotsIcon.__docgenInfo={description:"",methods:[],displayName:"DotsIcon",props:{size:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"16",computed:!1}},subLink:{required:!1,tsType:{name:"boolean"},description:""}}};var utils=__webpack_require__("./packages/react-sandbox/src/foundation/utils.ts"),WedgeDirection=function(WedgeDirection){return WedgeDirection.Up="up",WedgeDirection.Down="down",WedgeDirection.Left="left",WedgeDirection.Right="right",WedgeDirection}({});function WedgeIcon({size=16,direction}){return(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 10 8",width:size,height:size,children:(0,jsx_runtime.jsx)(StyledPolyline,{strokeWidth:"2",points:"1,2 5,6 9,2",transform:directionToTransform(direction)})})}function directionToTransform(direction){switch(direction){case"up":return"rotate(180 5 4)";case"down":return;case"left":return"rotate(90 5 4)";case"right":return"rotate(-90 5 4)";default:return(0,utils.H)(direction)}}const StyledPolyline=styled_components_browser_esm.Ay.polyline`
  fill: none;
  stroke-linejoin: round;
  stroke-linecap: round;
  stroke: currentColor;
`;WedgeIcon.__docgenInfo={description:"",methods:[],displayName:"WedgeIcon",props:{size:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"16",computed:!1}},direction:{required:!0,tsType:{name:"WedgeDirection"},description:""}}};__webpack_require__("./packages/react-sandbox/src/_lib/ComponentAbstraction.tsx");function usePagerWindow(page,pageCount,pageRangeDisplayed=7){const window=(0,react.useMemo)((()=>{const visibleLastPage=Math.min(pageCount,Math.max(page+Math.floor(pageRangeDisplayed/2),pageRangeDisplayed));if(visibleLastPage<=pageRangeDisplayed)return Array.from({length:1+visibleLastPage-1},((_,i)=>1+i));{const start=visibleLastPage-(pageRangeDisplayed-1)+2;return[1,"...",...Array.from({length:1+visibleLastPage-start},((_,i)=>start+i))]}}),[page,pageCount,pageRangeDisplayed]);return(0,react.useDebugValue)(window),window}const Pager=(0,react.memo)((function Pager({page,pageCount,pageRangeDisplayed,onChange}){const window=usePagerWindow(page,pageCount,pageRangeDisplayed),makeClickHandler=(0,react.useCallback)((value=>()=>{onChange(value)}),[onChange]),hasNext=page<pageCount,hasPrev=page>1;return(0,jsx_runtime.jsxs)(PagerContainer,{children:[(0,jsx_runtime.jsx)(CircleButton,{type:"button",hidden:!hasPrev,disabled:!hasPrev,onClick:makeClickHandler(Math.max(1,page-1)),noBackground:!0,children:(0,jsx_runtime.jsx)(WedgeIcon,{size:16,direction:WedgeDirection.Left})}),window.map((p=>"..."===p?(0,jsx_runtime.jsx)(Spacer,{children:(0,jsx_runtime.jsx)(DotsIcon,{size:20})},p):p===page?(0,jsx_runtime.jsx)(CircleButton,{type:"button","aria-current":!0,children:(0,jsx_runtime.jsx)(Text,{children:p})},p):(0,jsx_runtime.jsx)(CircleButton,{type:"button",onClick:makeClickHandler(p),children:(0,jsx_runtime.jsx)(Text,{children:p})},p))),(0,jsx_runtime.jsx)(CircleButton,{type:"button",hidden:!hasNext,disabled:!hasNext,onClick:makeClickHandler(Math.min(pageCount,page+1)),noBackground:!0,children:(0,jsx_runtime.jsx)(WedgeIcon,{size:16,direction:WedgeDirection.Right})})]})}));const PagerContainer=styled_components_browser_esm.Ay.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`,CircleButton=styled_components_browser_esm.Ay.button`
  font-size: 1rem;
  line-height: calc(1em + 8px);
  text-decoration: none;
  border: none;
  outline: none;
  touch-action: manipulation;
  user-select: none;
  transition: box-shadow 0.2s ease 0s, color 0.2s ease 0s,
    background 0.2s ease 0s, opacity 0.2s ease 0s;

  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: content-box;
  min-width: 24px;
  min-height: 24px;
  padding: 8px;
  cursor: pointer;
  font-weight: bold;
  /* HACK:
   * Safari doesn't correctly repaint the elements when they're reordered in response to interaction.
   * This forces it to repaint them. This doesn't work if put on the parents either, has to be here.
   */
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-transform: translateZ(0);

  &[hidden] {
    visibility: hidden;
    display: block;
  }

  border-radius: 48px;

  background: transparent;
  color: ${({theme})=>theme.color.text3};

  &:hover {
    background: ${({theme})=>theme.color.surface3};
    color: ${({theme})=>theme.color.text2};
  }

  &[aria-current] {
    background-color: ${({theme})=>theme.color.surface6};
    color: ${({theme})=>theme.color.text5};
  }

  &[aria-current]:hover {
    background-color: ${({theme})=>theme.color.surface6};
    color: ${({theme})=>theme.color.text5};
  }

  ${({noBackground=!1})=>noBackground&&styled_components_browser_esm.AH`
      /* stylelint-disable-next-line no-duplicate-selectors */
      &:hover {
        background: transparent;
      }
    `}
`,Spacer=(0,styled_components_browser_esm.Ay)(CircleButton).attrs({type:"button",disabled:!0})`
  && {
    color: ${({theme})=>theme.color.text3};
    background: none;
  }
`,Text="span",index_story={title:"react-sandbox/Pager",component:Pager,args:{page:5,pageCount:10}},Default={render:props=>(0,jsx_runtime.jsx)(Pager,{...props,children:"children"})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: props => {\n    return <Pager {...props}>children</Pager>;\n  }\n}",...Default.parameters?.docs?.source}}}},"./packages/react-sandbox/src/_lib/ComponentAbstraction.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{FY:()=>useComponentAbstraction});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const DefaultLink=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function DefaultLink({to,children,...rest},ref){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:to,ref,...rest,children})})),DefaultValue={Link:DefaultLink},ComponentAbstractionContext=react__WEBPACK_IMPORTED_MODULE_1__.createContext(DefaultValue);function useComponentAbstraction(){return(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ComponentAbstractionContext)}DefaultLink.__docgenInfo={description:"",methods:[],displayName:"DefaultLink",props:{to:{required:!0,tsType:{name:"string"},description:"リンクのURL"}}}},"./packages/react-sandbox/src/foundation/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function unreachable(value){throw new Error(0===arguments.length?"unreachable":`unreachable (${JSON.stringify(value)})`)}__webpack_require__.d(__webpack_exports__,{H:()=>unreachable})}}]);
//# sourceMappingURL=react-sandbox-src-components-Pager-index-story.aa9be00b.iframe.bundle.js.map