"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[6925],{"./packages/react-sandbox/src/components/Carousel/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_Carousel:()=>_Carousel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_story});var passiveEventsResult,dist=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),react_spring_esm=__webpack_require__("./node_modules/react-spring/dist/react-spring.esm.js"),hooks=__webpack_require__("./packages/react-sandbox/src/foundation/hooks.ts");const useIsomorphicLayoutEffect="undefined"!=typeof window?react.useLayoutEffect:react.useEffect;var CarouselButton=__webpack_require__("./packages/react-sandbox/src/components/CarouselButton/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Carousel({buttonOffset=0,buttonPadding=16,bottomOffset=0,defaultScroll:{align="left",offset:scrollOffset=0}={},onScroll,onResize,children,centerItems,onScrollStateChange,scrollAmountCoef=.75,...options}){const[scrollLeft,setScrollLeft]=(0,hooks.D$)(0),animation=(0,react.useRef)(!1),[maxScrollLeft,setMaxScrollLeft]=(0,react.useState)(0),[leftShow,setLeftShow]=(0,react.useState)(!1),[rightShow,setRightShow]=(0,react.useState)(!1),[styles,set]=(0,react_spring_esm.useSpring)((()=>({scroll:0}))),ref=(0,react.useRef)(null),visibleAreaRef=(0,react.useRef)(null),innerRef=(0,react.useRef)(null),handleRight=(0,react.useCallback)((()=>{if(null===visibleAreaRef.current)return;const{clientWidth}=visibleAreaRef.current,scroll=Math.min(scrollLeft+clientWidth*scrollAmountCoef,maxScrollLeft);setScrollLeft(scroll,!0),set({scroll,from:{scroll:scrollLeft},reset:!animation.current}),animation.current=!0}),[animation,maxScrollLeft,scrollLeft,set,scrollAmountCoef,setScrollLeft]),handleLeft=(0,react.useCallback)((()=>{if(null===visibleAreaRef.current)return;const{clientWidth}=visibleAreaRef.current,scroll=Math.max(scrollLeft-clientWidth*scrollAmountCoef,0);setScrollLeft(scroll,!0),set({scroll,from:{scroll:scrollLeft},reset:!animation.current}),animation.current=!0}),[animation,scrollLeft,set,scrollAmountCoef,setScrollLeft]);(0,react.useEffect)((()=>{const newLeftShow=scrollLeft>0,newRightShow=scrollLeft<maxScrollLeft&&maxScrollLeft>0;newLeftShow===leftShow&&newRightShow===rightShow||(setLeftShow(newLeftShow),setRightShow(newRightShow),onScrollStateChange?.(newLeftShow||newRightShow))}),[leftShow,maxScrollLeft,onScrollStateChange,rightShow,scrollLeft]);const handleScroll=(0,react.useCallback)((()=>{if(null===ref.current)return;animation.current&&(styles.scroll.stop(),animation.current=!1);const manualScrollLeft=ref.current.scrollLeft;setScrollLeft(manualScrollLeft)}),[animation,setScrollLeft,styles]),handleResize=(0,react.useCallback)((()=>{if(null===ref.current)return;const{clientWidth,scrollWidth}=ref.current;setMaxScrollLeft(scrollWidth-clientWidth),onResize&&onResize(clientWidth)}),[onResize]);useIsomorphicLayoutEffect((()=>{const elm=ref.current,innerElm=innerRef.current;if(null===elm||null===innerElm)return;elm.addEventListener("wheel",handleScroll,function passiveEvents(){if(void 0!==passiveEventsResult)return passiveEventsResult;passiveEventsResult=!1;try{const options=Object.defineProperty({},"passive",{get:()=>passiveEventsResult=!0});window.addEventListener("test",test,options),window.removeEventListener("test",test)}catch{}return passiveEventsResult;function test(){}}()&&{passive:!0});const resizeObserver=new ResizeObserver(handleResize);resizeObserver.observe(elm);const resizeObserverInner=new ResizeObserver(handleResize);return resizeObserverInner.observe(innerElm),()=>{elm.removeEventListener("wheel",handleScroll),resizeObserver.disconnect(),resizeObserverInner.disconnect()}}),[handleResize,handleScroll]),useIsomorphicLayoutEffect((()=>{if("left"!==align||0!==scrollOffset){const scroll=ref.current;if(null!==scroll){const scrollLength=Math.max(0,Math.min("left"===align&&scrollOffset>0?scrollOffset:"center"===align?maxScrollLeft/2+scrollOffset:"right"===align&&scrollOffset<=maxScrollLeft?maxScrollLeft-scrollOffset/2:0,maxScrollLeft));scroll.scrollLeft=scrollLength,setScrollLeft(scrollLength,!0)}}}),[ref.current]);const handleScrollMove=(0,react.useCallback)((()=>{null!==ref.current&&onScroll&&onScroll(ref.current.scrollLeft)}),[onScroll]),[disableGradient,setDisableGradient]=(0,react.useState)(!1);if(useIsomorphicLayoutEffect((()=>{navigator.userAgent.includes("Edge/")&&setDisableGradient(!0)}),[]),!disableGradient&&!0===options.hasGradient){const fadeInGradient=options.fadeInGradient??!1,overflowGradient=!fadeInGradient;return(0,jsx_runtime.jsxs)(Container,{ref:visibleAreaRef,children:[(0,jsx_runtime.jsx)(GradientContainer,{fadeInGradient,children:(0,jsx_runtime.jsx)(RightGradient,{children:(0,jsx_runtime.jsx)(LeftGradient,{show:overflowGradient||scrollLeft>0,children:(0,jsx_runtime.jsx)(ScrollArea,{ref,scrollLeft:styles.scroll,onScroll:handleScrollMove,children:(0,jsx_runtime.jsx)(CarouselContainer,{ref:innerRef,centerItems,children})})})})}),(0,jsx_runtime.jsxs)(ButtonsContainer,{children:[(0,jsx_runtime.jsx)(CarouselButton.ZP,{direction:CarouselButton.Nm.Left,show:leftShow,offset:buttonOffset,bottomOffset,padding:buttonPadding,gradient:overflowGradient,onClick:handleLeft}),(0,jsx_runtime.jsx)(CarouselButton.ZP,{direction:CarouselButton.Nm.Right,show:rightShow,offset:buttonOffset,bottomOffset,padding:buttonPadding,gradient:!0,onClick:handleRight})]})]})}return(0,jsx_runtime.jsxs)(Container,{ref:visibleAreaRef,children:[(0,jsx_runtime.jsx)(ScrollArea,{ref,scrollLeft:styles.scroll,onScroll:handleScrollMove,children:(0,jsx_runtime.jsx)(CarouselContainer,{ref:innerRef,centerItems,children})}),(0,jsx_runtime.jsxs)(ButtonsContainer,{children:[(0,jsx_runtime.jsx)(CarouselButton.ZP,{direction:CarouselButton.Nm.Left,show:leftShow,offset:buttonOffset,bottomOffset,padding:buttonPadding,onClick:handleLeft}),(0,jsx_runtime.jsx)(CarouselButton.ZP,{direction:CarouselButton.Nm.Right,show:rightShow,offset:buttonOffset,bottomOffset,padding:buttonPadding,onClick:handleRight})]})]})}Carousel.displayName="Carousel";const CarouselContainer=styled_components_browser_esm.ZP.ul`
  vertical-align: top;
  overflow: hidden;
  list-style: none;
  padding: 0;

  /* 最小幅を100%にして親要素にぴったりくっつけることで子要素で要素を均等に割り付けるなどを出来るようにしてある */
  min-width: 100%;
  box-sizing: border-box;

  ${({centerItems=!1})=>centerItems?styled_components_browser_esm.iv`
          display: flex;
          width: max-content;
          margin: 0 auto;
        `:styled_components_browser_esm.iv`
          display: inline-flex;
          margin: 0;
        `}
`,ButtonsContainer=styled_components_browser_esm.ZP.div`
  opacity: 0;
  transition: 0.4s opacity;
`,Container=styled_components_browser_esm.ZP.div`
  &:hover ${ButtonsContainer} {
    opacity: 1;
  }

  /* CarouselButtonの中にz-index:1があるのでここでコンテキストを切る */
  position: relative;
  z-index: 0;
`,ScrollArea=(0,styled_components_browser_esm.ZP)(react_spring_esm.animated.div)`
  overflow-x: auto;
  padding: 0;
  margin: 0;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
`,GradientContainer=styled_components_browser_esm.ZP.div`
  /* NOTE: LeftGradientがはみ出るためhidden */
  overflow: hidden;
  ${p=>!p.fadeInGradient&&styled_components_browser_esm.iv`
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
`,RightGradient=styled_components_browser_esm.ZP.div`
  mask-image: linear-gradient(
    to right,
    #000 calc(100% - ${72}px),
    transparent
  );
`,LeftGradient=styled_components_browser_esm.ZP.div`
  /* NOTE: mask-position が left → negative px の時、right → abs(negative px) の位置に表示されるため */
  margin-right: ${-72}px;
  padding-right: ${72}px;
  /* NOTE: mask-position に transition をつけたいが vender prefixes 対策で all につける */
  transition: 0.2s all ease-in;
  mask: linear-gradient(to right, transparent, #000 ${72}px)
    ${p=>p.show?0:-72}px 0;
`;try{Carousel.displayName="Carousel",Carousel.__docgenInfo={description:"",displayName:"Carousel",props:{buttonOffset:{defaultValue:{value:"0"},description:"",name:"buttonOffset",required:!1,type:{name:"number"}},buttonPadding:{defaultValue:{value:"16"},description:"",name:"buttonPadding",required:!1,type:{name:"number"}},bottomOffset:{defaultValue:{value:"0"},description:"",name:"bottomOffset",required:!1,type:{name:"number"}},defaultScroll:{defaultValue:null,description:"",name:"defaultScroll",required:!1,type:{name:"ScrollProps"}},hasGradient:{defaultValue:null,description:"",name:"hasGradient",required:!1,type:{name:"boolean"}},onScroll:{defaultValue:null,description:"",name:"onScroll",required:!1,type:{name:"((left: number) => void)"}},onResize:{defaultValue:null,description:"",name:"onResize",required:!1,type:{name:"((width: number) => void)"}},centerItems:{defaultValue:null,description:"",name:"centerItems",required:!1,type:{name:"boolean"}},onScrollStateChange:{defaultValue:null,description:"",name:"onScrollStateChange",required:!1,type:{name:"((canScroll: boolean) => void)"}},scrollAmountCoef:{defaultValue:{value:"0.75"},description:"",name:"scrollAmountCoef",required:!1,type:{name:"number"}},fadeInGradient:{defaultValue:null,description:"",name:"fadeInGradient",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react-sandbox/src/components/Carousel/index.tsx#Carousel"]={docgenInfo:Carousel.__docgenInfo,name:"Carousel",path:"packages/react-sandbox/src/components/Carousel/index.tsx#Carousel"})}catch(__react_docgen_typescript_loader_error){}try{.75.displayName="SCROLL_AMOUNT_COEF",.75.__docgenInfo={description:"カルーセル系のスクロール量の定数",displayName:"SCROLL_AMOUNT_COEF",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react-sandbox/src/components/Carousel/index.tsx#SCROLL_AMOUNT_COEF"]={docgenInfo:.75.__docgenInfo,name:"SCROLL_AMOUNT_COEF",path:"packages/react-sandbox/src/components/Carousel/index.tsx#SCROLL_AMOUNT_COEF"})}catch(__react_docgen_typescript_loader_error){}const dummyText=styled_components_browser_esm.iv`
  color: ${({theme})=>theme.color.text4};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
`,Dummy=styled_components_browser_esm.ZP.div`
  background-color: ${({theme})=>theme.color.surface2};
  border-radius: 8px;

  ${dummyText}
`,index_story={title:"Sandbox/Carousel",decorators:[dist.withKnobs]},_Carousel=()=>{const hasGradient=(0,dist.boolean)("Gradient",!1),fadeInGradient=(0,dist.boolean)("FadeInGradient",!1),buttonOffset=(0,dist.number)("buttonOffset",0),buttonPadding=(0,dist.number)("buttonPadding",16),defaultScrollAlign=(0,dist.select)("scrollAlign",{Left:"left",Center:"center",Right:"right"},"left"),defaultScrollOffset=(0,dist.number)("scrollOffset",0),itemCount=(0,dist.number)("Item count",20),itemSize=(0,dist.number)("Item size",118),items=Array.from({length:itemCount});return(0,jsx_runtime.jsx)(Base,{children:(0,jsx_runtime.jsx)(Carousel,{buttonOffset,buttonPadding,defaultScroll:{align:defaultScrollAlign,offset:defaultScrollOffset},hasGradient,fadeInGradient,children:(0,jsx_runtime.jsx)(index_story_Container,{children:items.map(((_value,index)=>(0,jsx_runtime.jsx)(Box,{size:itemSize,children:"Dummy"},index)))})})})};_Carousel.displayName="_Carousel";const Base=styled_components_browser_esm.ZP.div`
  width: 100%;
  padding: 0 108px;
  box-sizing: border-box;
`,index_story_Container=styled_components_browser_esm.ZP.div`
  display: flex;
  padding: 0 16px;

  > * + * {
    margin-left: 4px;
  }
`,Box=(0,styled_components_browser_esm.ZP)(Dummy)`
  width: ${props=>`${props.size}px`};
  height: ${props=>`${props.size}px`};
`;_Carousel.parameters={..._Carousel.parameters,docs:{..._Carousel.parameters?.docs,source:{originalSource:"() => {\n  const hasGradient = boolean('Gradient', false);\n  const fadeInGradient = boolean('FadeInGradient', false);\n  const buttonOffset = number('buttonOffset', 0);\n  const buttonPadding = number('buttonPadding', 16);\n  const defaultScrollAlign = select('scrollAlign', {\n    Left: 'left',\n    Center: 'center',\n    Right: 'right'\n  }, 'left');\n  const defaultScrollOffset = number('scrollOffset', 0);\n  const itemCount = number('Item count', 20);\n  const itemSize = number('Item size', 118);\n  const items = Array.from({\n    length: itemCount\n  });\n  return <Base>\n      <Carousel buttonOffset={buttonOffset} buttonPadding={buttonPadding} defaultScroll={{\n      align: defaultScrollAlign,\n      offset: defaultScrollOffset\n    }} hasGradient={hasGradient} fadeInGradient={fadeInGradient}>\n        <Container>\n          {items.map((_value, index) => <Box size={itemSize} key={index}>\n              Dummy\n            </Box>)}\n        </Container>\n      </Carousel>\n    </Base>;\n}",..._Carousel.parameters?.docs?.source}}};const __namedExportsOrder=["_Carousel"]},"./packages/react-sandbox/src/components/CarouselButton/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Nm:()=>Direction,Tq:()=>ScrollHintButton,ZP:()=>CarouselButton});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("./packages/react-sandbox/src/foundation/utils.ts"),Base=__webpack_require__("./packages/react-sandbox/src/components/icons/Base.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let WedgeDirection=function(WedgeDirection){return WedgeDirection.Up="up",WedgeDirection.Down="down",WedgeDirection.Left="left",WedgeDirection.Right="right",WedgeDirection}({});const path="M8.08579 16.5858C7.30474 17.3668 7.30474 18.6332 8.08579 19.4142C8.86684 20.1953 10.1332 20.1953 10.9142 19.4142L18.3284 12L10.9142 4.58579C10.1332 3.80474 8.86684 3.80474 8.08579 4.58579C7.30474 5.36684 7.30474 6.63317 8.08579 7.41421L12.6716 12L8.08579 16.5858Z",size=24;function NextIcon({direction}){const transform=function directionToTransform(direction){switch(direction){case WedgeDirection.Up:return"rotate(270 12 12)";case WedgeDirection.Down:return"rotate(90 12 12)";case WedgeDirection.Left:return"rotate(180 12 12)";case WedgeDirection.Right:return;default:return(0,utils.t)(direction)}}(direction);return(0,jsx_runtime.jsx)(Base.Z,{viewBoxSize:size,size,currentColor:!0,path,transform})}NextIcon.displayName="NextIcon";try{NextIcon.displayName="NextIcon",NextIcon.__docgenInfo={description:"",displayName:"NextIcon",props:{direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"up"'},{value:'"down"'},{value:'"left"'},{value:'"right"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react-sandbox/src/components/icons/NextIcon.tsx#NextIcon"]={docgenInfo:NextIcon.__docgenInfo,name:"NextIcon",path:"packages/react-sandbox/src/components/icons/NextIcon.tsx#NextIcon"})}catch(__react_docgen_typescript_loader_error){}var index_esm=__webpack_require__("./packages/utils/dist/index.esm.js");let Direction=function(Direction){return Direction.Right="right",Direction.Left="left",Direction}({});function CarouselButton({direction,show,offset=0,padding=0,bottomOffset:bottom=0,gradient=!1,onClick}){const offsetStyle=direction===Direction.Left?{left:gradient?offset-72:offset,paddingLeft:Math.max(padding,0),paddingBottom:bottom}:{right:gradient?offset-72:offset,paddingRight:Math.max(padding,0),paddingBottom:bottom};return(0,jsx_runtime.jsx)(Button,{type:"button",onClick,hide:!show,style:offsetStyle,css:onlyNonTouchDevice,children:(0,jsx_runtime.jsx)(CarouselButtonIcon,{children:(0,jsx_runtime.jsx)(NextIcon,{direction:direction===Direction.Right?WedgeDirection.Right:direction===Direction.Left?WedgeDirection.Left:(0,utils.t)()})})})}CarouselButton.displayName="CarouselButton";const CarouselButtonIcon=styled_components_browser_esm.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${40}px;
  height: ${40}px;
  border-radius: 50%;
  background-color: ${({theme})=>theme.color.surface4};
  transition: 0.4s visibility, 0.4s opacity, 0.2s background-color, 0.2s color;
  color: ${({theme})=>theme.color.text5};
`,Button=styled_components_browser_esm.ZP.button`
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
    background-color: ${({theme})=>(0,index_esm.nC)(theme.color.surface4,theme.effect.hover)};
    color: ${({theme})=>(0,index_esm.nC)(theme.color.text5,theme.effect.hover)};
  }

  &:active ${CarouselButtonIcon} {
    background-color: ${({theme})=>(0,index_esm.nC)(theme.color.surface4,theme.effect.press)};
    color: ${({theme})=>(0,index_esm.nC)(theme.color.text5,theme.effect.press)};
  }

  ${p=>p.hide&&styled_components_browser_esm.iv`
      visibility: hidden;
      opacity: 0;
      pointer-events: none;
    `}
`;function ScrollHintButton({direction,onClick}){return(0,jsx_runtime.jsx)(ScrollHintIcon,{onClick,children:(0,jsx_runtime.jsx)(NextIcon,{direction:direction===Direction.Right?WedgeDirection.Right:direction===Direction.Left?WedgeDirection.Left:(0,utils.t)()})})}ScrollHintButton.displayName="ScrollHintButton";const ScrollHintIcon=(0,styled_components_browser_esm.ZP)(CarouselButtonIcon)`
  cursor: pointer;

  &:hover {
    background-color: ${({theme})=>(0,index_esm.nC)(theme.color.surface4,theme.effect.hover)};
    color: ${({theme})=>(0,index_esm.nC)(theme.color.text5,theme.effect.hover)};
  }

  &:active {
    background-color: ${({theme})=>(0,index_esm.nC)(theme.color.surface4,theme.effect.press)};
    color: ${({theme})=>(0,index_esm.nC)(theme.color.text5,theme.effect.press)};
  }
`,onlyNonTouchDevice=styled_components_browser_esm.iv`
  @media (hover: none) and (pointer: coarse) {
    display: none;
  }
`;try{CarouselButton.displayName="CarouselButton",CarouselButton.__docgenInfo={description:"",displayName:"CarouselButton",props:{direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}},show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}},offset:{defaultValue:{value:"0"},description:"",name:"offset",required:!1,type:{name:"number"}},padding:{defaultValue:{value:"0"},description:"",name:"padding",required:!1,type:{name:"number"}},bottomOffset:{defaultValue:null,description:"",name:"bottomOffset",required:!1,type:{name:"number"}},gradient:{defaultValue:{value:"false"},description:"",name:"gradient",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react-sandbox/src/components/CarouselButton/index.tsx#CarouselButton"]={docgenInfo:CarouselButton.__docgenInfo,name:"CarouselButton",path:"packages/react-sandbox/src/components/CarouselButton/index.tsx#CarouselButton"})}catch(__react_docgen_typescript_loader_error){}try{ScrollHintButton.displayName="ScrollHintButton",ScrollHintButton.__docgenInfo={description:"",displayName:"ScrollHintButton",props:{direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react-sandbox/src/components/CarouselButton/index.tsx#ScrollHintButton"]={docgenInfo:ScrollHintButton.__docgenInfo,name:"ScrollHintButton",path:"packages/react-sandbox/src/components/CarouselButton/index.tsx#ScrollHintButton"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react-sandbox/src/components/icons/Base.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>IconBase});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function IconBase({size=24,viewBoxSize,currentColor,path,transform,fillRule,clipRule}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Icon,{viewBox:`0 0 ${viewBoxSize} ${viewBoxSize}`,size,currentColor,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(IconBasePath,{path,transform,fillRule,clipRule})})}IconBase.displayName="IconBase";const Icon=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.svg`
  stroke: none;
  fill: ${({currentColor=!1,theme})=>currentColor?"currentColor":theme.color.text2};
  width: ${props=>props.size}px;
  height: ${props=>props.size}px;
  line-height: 0;
  font-size: 0;
  vertical-align: middle;
`,IconBasePath=({path,transform,fillRule,clipRule})=>"string"==typeof path?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:path,transform,fillRule,clipRule}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:path});try{Base.displayName="Base",Base.__docgenInfo={description:"",displayName:"Base",props:{path:{defaultValue:null,description:"",name:"path",required:!0,type:{name:"ReactNode"}},viewBoxSize:{defaultValue:null,description:"",name:"viewBoxSize",required:!0,type:{name:"number"}},size:{defaultValue:{value:"24"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"32"},{value:"40"},{value:"48"},{value:"16"},{value:"24"},{value:"72"},{value:"64"}]}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"string"}},currentColor:{defaultValue:null,description:"",name:"currentColor",required:!1,type:{name:"boolean"}},fillRule:{defaultValue:null,description:"",name:"fillRule",required:!1,type:{name:"enum",value:[{value:'"nonzero"'},{value:'"evenodd"'}]}},clipRule:{defaultValue:null,description:"",name:"clipRule",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"nonzero"'},{value:'"evenodd"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react-sandbox/src/components/icons/Base.tsx#Base"]={docgenInfo:Base.__docgenInfo,name:"Base",path:"packages/react-sandbox/src/components/icons/Base.tsx#Base"})}catch(__react_docgen_typescript_loader_error){}try{IconBasePath.displayName="IconBasePath",IconBasePath.__docgenInfo={description:"",displayName:"IconBasePath",props:{path:{defaultValue:null,description:"",name:"path",required:!0,type:{name:"ReactNode"}},clipRule:{defaultValue:null,description:"",name:"clipRule",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"nonzero"'},{value:'"evenodd"'}]}},fillRule:{defaultValue:null,description:"",name:"fillRule",required:!1,type:{name:"enum",value:[{value:'"nonzero"'},{value:'"evenodd"'}]}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react-sandbox/src/components/icons/Base.tsx#IconBasePath"]={docgenInfo:IconBasePath.__docgenInfo,name:"IconBasePath",path:"packages/react-sandbox/src/components/icons/Base.tsx#IconBasePath"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react-sandbox/src/foundation/hooks.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D$:()=>useDebounceAnimationState,h4:()=>useElementSize});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");__webpack_require__("./node_modules/react-dom/index.js");function measure(ref){return null!==ref?ref.getBoundingClientRect():void 0}function useElementSize(ref,deps=[]){const[size,setSize]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(((state,next)=>void 0===state||void 0===next?next:state.height===next.height&&state.width===next.width?state:next),void 0),[watch,setWatch]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{if(null===watch)return;const observer=new ResizeObserver((()=>{const newSize=measure(watch);setSize(newSize)}));return observer.observe(watch),()=>{observer.unobserve(watch),setSize(void 0)}}),[watch]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{ref.current!==watch&&setWatch(ref.current)})),(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{deps.length>0&&setSize(measure(ref.current))}),deps),(0,react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue)(size),size}function useDebounceAnimationState(defaultValue){const[state,setState]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue),timer=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return[state,(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((value,force=!1)=>{force?setState(value):void 0===timer.current&&(timer.current=requestAnimationFrame((()=>{setState(value),void 0!==timer.current&&(timer.current=void 0)})))}),[])]}},"./packages/react-sandbox/src/foundation/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function unreachable(value){throw new Error(0===arguments.length?"unreachable":`unreachable (${JSON.stringify(value)})`)}__webpack_require__.d(__webpack_exports__,{t:()=>unreachable})}}]);
//# sourceMappingURL=react-sandbox-src-components-Carousel-index-story.fe3b3fe6.iframe.bundle.js.map