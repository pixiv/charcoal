"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[40604],{"./packages/react-sandbox/src/components/Carousel/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>index_story});var passiveEventsResult,jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),react_spring_modern=__webpack_require__("./node_modules/.pnpm/react-spring@9.7.5_@react-three+fiber@9.1.0_@types+react@18.3.20_react-dom@18.3.1_react_b0d05b1c4bb95fbe9ef93ab998610723/node_modules/react-spring/dist/react-spring.modern.mjs"),styled_components_browser_esm=__webpack_require__("./node_modules/.pnpm/styled-components@5.3.11_@babel+core@7.26.10_react-dom@18.3.1_react@18.3.1__react-is@18.3.1_react@18.3.1/node_modules/styled-components/dist/styled-components.browser.esm.js"),hooks=__webpack_require__("./packages/react-sandbox/src/foundation/hooks.ts");const useIsomorphicLayoutEffect="undefined"!=typeof window?react.useLayoutEffect:react.useEffect;var utils=__webpack_require__("./packages/react-sandbox/src/foundation/utils.ts"),Base=__webpack_require__("./packages/react-sandbox/src/components/icons/Base.tsx"),WedgeDirection=function(WedgeDirection){return WedgeDirection.Up="up",WedgeDirection.Down="down",WedgeDirection.Left="left",WedgeDirection.Right="right",WedgeDirection}({});function NextIcon({direction}){const transform=function directionToTransform(direction){switch(direction){case"up":return"rotate(270 12 12)";case"down":return"rotate(90 12 12)";case"left":return"rotate(180 12 12)";case"right":return;default:return(0,utils.H)(direction)}}(direction);return(0,jsx_runtime.jsx)(Base.A,{viewBoxSize:24,size:24,currentColor:!0,path:"M8.08579 16.5858C7.30474 17.3668 7.30474 18.6332 8.08579 19.4142C8.86684 20.1953 10.1332 20.1953 10.9142 19.4142L18.3284 12L10.9142 4.58579C10.1332 3.80474 8.86684 3.80474 8.08579 4.58579C7.30474 5.36684 7.30474 6.63317 8.08579 7.41421L12.6716 12L8.08579 16.5858Z",transform})}NextIcon.__docgenInfo={description:"",methods:[],displayName:"NextIcon",props:{direction:{required:!0,tsType:{name:"WedgeDirection"},description:""}}};var index_esm=__webpack_require__("./packages/utils/dist/index.esm.js"),Direction=function(Direction){return Direction.Right="right",Direction.Left="left",Direction}({});function CarouselButton({direction,show,offset=0,padding=0,bottomOffset:bottom=0,gradient=!1,onClick}){const offsetStyle="left"===direction?{left:gradient?offset-72:offset,paddingLeft:Math.max(padding,0),paddingBottom:bottom}:{right:gradient?offset-72:offset,paddingRight:Math.max(padding,0),paddingBottom:bottom};return(0,jsx_runtime.jsx)(Button,{type:"button",onClick,hide:!show,style:offsetStyle,css:onlyNonTouchDevice,children:(0,jsx_runtime.jsx)(CarouselButtonIcon,{children:(0,jsx_runtime.jsx)(NextIcon,{direction:"right"===direction?WedgeDirection.Right:"left"===direction?WedgeDirection.Left:(0,utils.H)()})})})}const CarouselButtonIcon=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${40}px;
  height: ${40}px;
  border-radius: 50%;
  background-color: ${({theme})=>theme.color.surface4};
  transition: 0.4s visibility, 0.4s opacity, 0.2s background-color, 0.2s color;
  color: ${({theme})=>theme.color.text5};
`,Button=styled_components_browser_esm.Ay.button`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  padding: 0;
  min-width: 40px;
  border: none;
  outline: 0;
  background: transparent;
  cursor: pointer;
  transition: 0.4s visibility, 0.4s opacity;
  /* つらい */
  /* このコンポーネントはCarouselでしか使われてないのでそっちでコンテキストで切る */
  z-index: 1;

  &:hover ${CarouselButtonIcon} {
    background-color: ${({theme})=>(0,index_esm.Cf)(theme.color.surface4,theme.effect.hover)};
    color: ${({theme})=>(0,index_esm.Cf)(theme.color.text5,theme.effect.hover)};
  }

  &:active ${CarouselButtonIcon} {
    background-color: ${({theme})=>(0,index_esm.Cf)(theme.color.surface4,theme.effect.press)};
    color: ${({theme})=>(0,index_esm.Cf)(theme.color.text5,theme.effect.press)};
  }

  ${p=>p.hide&&styled_components_browser_esm.AH`
      visibility: hidden;
      opacity: 0;
      pointer-events: none;
    `}
`;(0,styled_components_browser_esm.Ay)(CarouselButtonIcon)`
  cursor: pointer;

  &:hover {
    background-color: ${({theme})=>(0,index_esm.Cf)(theme.color.surface4,theme.effect.hover)};
    color: ${({theme})=>(0,index_esm.Cf)(theme.color.text5,theme.effect.hover)};
  }

  &:active {
    background-color: ${({theme})=>(0,index_esm.Cf)(theme.color.surface4,theme.effect.press)};
    color: ${({theme})=>(0,index_esm.Cf)(theme.color.text5,theme.effect.press)};
  }
`;const onlyNonTouchDevice=styled_components_browser_esm.AH`
  @media (hover: none) and (pointer: coarse) {
    display: none;
  }
`;CarouselButton.__docgenInfo={description:"",methods:[],displayName:"CarouselButton",props:{direction:{required:!0,tsType:{name:"Direction"},description:""},show:{required:!0,tsType:{name:"boolean"},description:""},offset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},padding:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},bottomOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},gradient:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};function Carousel({buttonOffset=0,buttonPadding=16,bottomOffset=0,defaultScroll:{align="left",offset:scrollOffset=0}={},onScroll,onResize,children,centerItems,onScrollStateChange,scrollAmountCoef=.75,...options}){const[scrollLeft,setScrollLeft]=(0,hooks.oZ)(0),animation=(0,react.useRef)(!1),[maxScrollLeft,setMaxScrollLeft]=(0,react.useState)(0),[leftShow,setLeftShow]=(0,react.useState)(!1),[rightShow,setRightShow]=(0,react.useState)(!1),[styles,set]=(0,react_spring_modern.zh)((()=>({scroll:0}))),ref=(0,react.useRef)(null),visibleAreaRef=(0,react.useRef)(null),innerRef=(0,react.useRef)(null),handleRight=(0,react.useCallback)((()=>{if(null===visibleAreaRef.current)return;const{clientWidth}=visibleAreaRef.current,scroll=Math.min(scrollLeft+clientWidth*scrollAmountCoef,maxScrollLeft);setScrollLeft(scroll,!0),set({scroll,from:{scroll:scrollLeft},reset:!animation.current}),animation.current=!0}),[animation,maxScrollLeft,scrollLeft,set,scrollAmountCoef,setScrollLeft]),handleLeft=(0,react.useCallback)((()=>{if(null===visibleAreaRef.current)return;const{clientWidth}=visibleAreaRef.current,scroll=Math.max(scrollLeft-clientWidth*scrollAmountCoef,0);setScrollLeft(scroll,!0),set({scroll,from:{scroll:scrollLeft},reset:!animation.current}),animation.current=!0}),[animation,scrollLeft,set,scrollAmountCoef,setScrollLeft]);(0,react.useEffect)((()=>{const newLeftShow=scrollLeft>0,newRightShow=scrollLeft<maxScrollLeft&&maxScrollLeft>0;newLeftShow===leftShow&&newRightShow===rightShow||(setLeftShow(newLeftShow),setRightShow(newRightShow),onScrollStateChange?.(newLeftShow||newRightShow))}),[leftShow,maxScrollLeft,onScrollStateChange,rightShow,scrollLeft]);const handleScroll=(0,react.useCallback)((()=>{if(null===ref.current)return;animation.current&&(styles.scroll.stop(),animation.current=!1);const manualScrollLeft=ref.current.scrollLeft;setScrollLeft(manualScrollLeft)}),[animation,setScrollLeft,styles]),handleResize=(0,react.useCallback)((()=>{if(null===ref.current)return;const{clientWidth,scrollWidth}=ref.current;setMaxScrollLeft(scrollWidth-clientWidth),onResize&&onResize(clientWidth)}),[onResize]);useIsomorphicLayoutEffect((()=>{const elm=ref.current,innerElm=innerRef.current;if(null===elm||null===innerElm)return;elm.addEventListener("wheel",handleScroll,function passiveEvents(){if(void 0!==passiveEventsResult)return passiveEventsResult;passiveEventsResult=!1;try{const options=Object.defineProperty({},"passive",{get:()=>passiveEventsResult=!0});window.addEventListener("test",test,options),window.removeEventListener("test",test)}catch{}return passiveEventsResult;function test(){}}()&&{passive:!0});const resizeObserver=new ResizeObserver(handleResize);resizeObserver.observe(elm);const resizeObserverInner=new ResizeObserver(handleResize);return resizeObserverInner.observe(innerElm),()=>{elm.removeEventListener("wheel",handleScroll),resizeObserver.disconnect(),resizeObserverInner.disconnect()}}),[handleResize,handleScroll]),useIsomorphicLayoutEffect((()=>{if("left"!==align||0!==scrollOffset){const scroll=ref.current;if(null!==scroll){const scrollLength=Math.max(0,Math.min("left"===align&&scrollOffset>0?scrollOffset:"center"===align?maxScrollLeft/2+scrollOffset:"right"===align&&scrollOffset<=maxScrollLeft?maxScrollLeft-scrollOffset/2:0,maxScrollLeft));scroll.scrollLeft=scrollLength,setScrollLeft(scrollLength,!0)}}}),[ref.current]);const handleScrollMove=(0,react.useCallback)((()=>{null!==ref.current&&onScroll&&onScroll(ref.current.scrollLeft)}),[onScroll]),[disableGradient,setDisableGradient]=(0,react.useState)(!1);if(useIsomorphicLayoutEffect((()=>{navigator.userAgent.includes("Edge/")&&setDisableGradient(!0)}),[]),!disableGradient&&!0===options.hasGradient){const fadeInGradient=options.fadeInGradient??!1,overflowGradient=!fadeInGradient;return(0,jsx_runtime.jsxs)(Container,{ref:visibleAreaRef,children:[(0,jsx_runtime.jsx)(GradientContainer,{fadeInGradient,children:(0,jsx_runtime.jsx)(RightGradient,{children:(0,jsx_runtime.jsx)(LeftGradient,{show:overflowGradient||scrollLeft>0,children:(0,jsx_runtime.jsx)(ScrollArea,{ref,scrollLeft:styles.scroll,onScroll:handleScrollMove,children:(0,jsx_runtime.jsx)(CarouselContainer,{ref:innerRef,centerItems,children})})})})}),(0,jsx_runtime.jsxs)(ButtonsContainer,{children:[(0,jsx_runtime.jsx)(CarouselButton,{direction:Direction.Left,show:leftShow,offset:buttonOffset,bottomOffset,padding:buttonPadding,gradient:overflowGradient,onClick:handleLeft}),(0,jsx_runtime.jsx)(CarouselButton,{direction:Direction.Right,show:rightShow,offset:buttonOffset,bottomOffset,padding:buttonPadding,gradient:!0,onClick:handleRight})]})]})}return(0,jsx_runtime.jsxs)(Container,{ref:visibleAreaRef,children:[(0,jsx_runtime.jsx)(ScrollArea,{ref,scrollLeft:styles.scroll,onScroll:handleScrollMove,children:(0,jsx_runtime.jsx)(CarouselContainer,{ref:innerRef,centerItems,children})}),(0,jsx_runtime.jsxs)(ButtonsContainer,{children:[(0,jsx_runtime.jsx)(CarouselButton,{direction:Direction.Left,show:leftShow,offset:buttonOffset,bottomOffset,padding:buttonPadding,onClick:handleLeft}),(0,jsx_runtime.jsx)(CarouselButton,{direction:Direction.Right,show:rightShow,offset:buttonOffset,bottomOffset,padding:buttonPadding,onClick:handleRight})]})]})}const CarouselContainer=styled_components_browser_esm.Ay.ul`
  vertical-align: top;
  overflow: hidden;
  list-style: none;
  padding: 0;

  /* 最小幅を100%にして親要素にぴったりくっつけることで子要素で要素を均等に割り付けるなどを出来るようにしてある */
  min-width: 100%;
  box-sizing: border-box;

  ${({centerItems=!1})=>centerItems?styled_components_browser_esm.AH`
          display: flex;
          width: max-content;
          margin: 0 auto;
        `:styled_components_browser_esm.AH`
          display: inline-flex;
          margin: 0;
        `}
`,ButtonsContainer=styled_components_browser_esm.Ay.div`
  opacity: 0;
  transition: 0.4s opacity;
`,Container=styled_components_browser_esm.Ay.div`
  &:hover ${ButtonsContainer} {
    opacity: 1;
  }

  /* CarouselButtonの中にz-index:1があるのでここでコンテキストを切る */
  position: relative;
  z-index: 0;
`,ScrollArea=(0,styled_components_browser_esm.Ay)(react_spring_modern.CS.div)`
  overflow-x: auto;
  padding: 0;
  margin: 0;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
`,GradientContainer=styled_components_browser_esm.Ay.div`
  /* NOTE: LeftGradientがはみ出るためhidden */
  overflow: hidden;
  ${p=>!p.fadeInGradient&&styled_components_browser_esm.AH`
      margin-left: ${-72}px;
      ${CarouselContainer} {
        padding-left: ${72}px;
      }
    `}

  margin-right: ${-72}px;
  /* stylelint-disable-next-line no-duplicate-selectors */
  ${CarouselContainer} {
    padding-right: ${72}px;
  }
`,RightGradient=styled_components_browser_esm.Ay.div`
  mask-image: linear-gradient(
    to right,
    #000 calc(100% - ${72}px),
    transparent
  );
`,LeftGradient=styled_components_browser_esm.Ay.div`
  /* NOTE: mask-position が left → negative px の時、right → abs(negative px) の位置に表示されるため */
  margin-right: ${-72}px;
  padding-right: ${72}px;
  /* NOTE: mask-position に transition をつけたいが vender prefixes 対策で all につける */
  transition: 0.2s all ease-in;
  mask: linear-gradient(to right, transparent, #000 ${72}px)
    ${p=>p.show?0:-72}px 0;
`;Carousel.__docgenInfo={description:"",methods:[],displayName:"Carousel",props:{buttonOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},buttonPadding:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"16",computed:!1}},bottomOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},defaultScroll:{required:!1,tsType:{name:"ScrollProps"},description:"",defaultValue:{value:"{}",computed:!1}},onScroll:{required:!1,tsType:{name:"signature",type:"function",raw:"(left: number) => void",signature:{arguments:[{type:{name:"number"},name:"left"}],return:{name:"void"}}},description:""},onResize:{required:!1,tsType:{name:"signature",type:"function",raw:"(width: number) => void",signature:{arguments:[{type:{name:"number"},name:"width"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},centerItems:{required:!1,tsType:{name:"boolean"},description:""},onScrollStateChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(canScroll: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"canScroll"}],return:{name:"void"}}},description:""},scrollAmountCoef:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0.75",computed:!1}}}};const index_story={title:"react-sandbox/Carousel",component:Carousel,argTypes:{}},items=[1,2,3,4,5],Default={render:props=>(0,jsx_runtime.jsx)(Carousel,{...props,children:(0,jsx_runtime.jsx)("div",{style:{display:"flex",gap:"8px"},children:items.map((item=>(0,jsx_runtime.jsx)("div",{style:{width:"200px",height:"100px",backgroundColor:"var(--charcoal-brand)",filter:`hue-rotate(0.${item}turn)`}},item)))})})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: props => <Carousel {...props}>\n      <div style={{\n      display: 'flex',\n      gap: '8px'\n    }}>\n        {items.map(item => <div key={item} style={{\n        width: '200px',\n        height: '100px',\n        backgroundColor: 'var(--charcoal-brand)',\n        filter: `hue-rotate(0.${item}turn)`\n      }} />)}\n      </div>\n    </Carousel>\n}",...Default.parameters?.docs?.source}}}},"./packages/react-sandbox/src/components/icons/Base.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>IconBase});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function IconBase({size=24,viewBoxSize,currentColor,path,transform,fillRule,clipRule}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icon,{viewBox:`0 0 ${viewBoxSize} ${viewBoxSize}`,size,currentColor,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconBasePath,{path,transform,fillRule,clipRule})})}const Icon=__webpack_require__("./node_modules/.pnpm/styled-components@5.3.11_@babel+core@7.26.10_react-dom@18.3.1_react@18.3.1__react-is@18.3.1_react@18.3.1/node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.svg`
  stroke: none;
  fill: ${({currentColor=!1,theme})=>currentColor?"currentColor":theme.color.text2};
  width: ${props=>props.size}px;
  height: ${props=>props.size}px;
  line-height: 0;
  font-size: 0;
  vertical-align: middle;
`,IconBasePath=({path,transform,fillRule,clipRule})=>"string"==typeof path?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:path,transform,fillRule,clipRule}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:path});IconBase.__docgenInfo={description:"",methods:[],displayName:"IconBase",props:{path:{required:!0,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},viewBoxSize:{required:!0,tsType:{name:"number"},description:""},size:{required:!1,tsType:{name:"union",raw:"IconSizes | 40 | 48 | 64 | 72",elements:[{name:"union",raw:"16 | 24 | 32",elements:[{name:"literal",value:"16"},{name:"literal",value:"24"},{name:"literal",value:"32"}]},{name:"literal",value:"40"},{name:"literal",value:"48"},{name:"literal",value:"64"},{name:"literal",value:"72"}]},description:"",defaultValue:{value:"24",computed:!1}},transform:{required:!1,tsType:{name:"string"},description:""},currentColor:{required:!1,tsType:{name:"boolean"},description:""},fillRule:{required:!1,tsType:{name:"union",raw:"'nonzero' | 'evenodd'",elements:[{name:"literal",value:"'nonzero'"},{name:"literal",value:"'evenodd'"}]},description:""},clipRule:{required:!1,tsType:{name:"union",raw:"'nonzero' | 'evenodd' | 'inherit'",elements:[{name:"literal",value:"'nonzero'"},{name:"literal",value:"'evenodd'"},{name:"literal",value:"'inherit'"}]},description:""}}},IconBasePath.__docgenInfo={description:"",methods:[],displayName:"IconBasePath"}},"./packages/react-sandbox/src/foundation/hooks.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Lh:()=>useElementSize,oZ:()=>useDebounceAnimationState});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");__webpack_require__("./node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js");function measure(ref){return null!==ref?ref.getBoundingClientRect():void 0}function useElementSize(ref,deps=[]){const[size,setSize]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(((state,next)=>void 0===state||void 0===next?next:state.height===next.height&&state.width===next.width?state:next),void 0),[watch,setWatch]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{if(null===watch)return;const observer=new ResizeObserver((()=>{const newSize=measure(watch);setSize(newSize)}));return observer.observe(watch),()=>{observer.unobserve(watch),setSize(void 0)}}),[watch]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{ref.current!==watch&&setWatch(ref.current)})),(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{deps.length>0&&setSize(measure(ref.current))}),deps),(0,react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue)(size),size}function useDebounceAnimationState(defaultValue){const[state,setState]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue),timer=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(void 0);return[state,(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((value,force=!1)=>{force?setState(value):void 0===timer.current&&(timer.current=requestAnimationFrame((()=>{setState(value),void 0!==timer.current&&(timer.current=void 0)})))}),[])]}},"./packages/react-sandbox/src/foundation/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function unreachable(value){throw new Error(0===arguments.length?"unreachable":`unreachable (${JSON.stringify(value)})`)}__webpack_require__.d(__webpack_exports__,{H:()=>unreachable})}}]);
//# sourceMappingURL=react-sandbox-src-components-Carousel-index-story.0f7e4bd5.iframe.bundle.js.map