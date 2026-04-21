import{a as e,n as t}from"./chunk-BneVvdWh.js";import{A as n,At as r,Dt as i,Ht as a,gt as o,j as s,k as c,kt as l,mt as u,nt as d}from"./iframe-CKoxdw4A.js";import{n as f,t as p}from"./hooks-CpxRNc3h.js";import{n as m,t as h}from"./utils-Ba7tqOhS.js";import{n as g,t as _}from"./Base-BN_1Cl-D.js";function v(){if(y!==void 0)return y;y=!1;try{let t=Object.defineProperty({},`passive`,{get(){return y=!0}});window.addEventListener(`test`,e,t),window.removeEventListener(`test`,e)}catch{}return y;function e(){}}var y,b,x=t((()=>{b=()=>navigator.userAgent.includes(`Edge/`)})),S,C,w=t((()=>{S=e(a(),1),C=typeof window<`u`?S.useLayoutEffect:S.useEffect}));function T({direction:e}){return(0,D.jsx)(_,{viewBoxSize:A,size:A,currentColor:!0,path:k,transform:E(e)})}function E(e){switch(e){case O.Up:return`rotate(270 12 12)`;case O.Down:return`rotate(90 12 12)`;case O.Left:return`rotate(180 12 12)`;case O.Right:return;default:return m(e)}}var D,O,k,A,j=t((()=>{h(),g(),D=d(),O=function(e){return e.Up=`up`,e.Down=`down`,e.Left=`left`,e.Right=`right`,e}({}),k=`M8.08579 16.5858C7.30474 17.3668 7.30474 18.6332 8.08579 19.4142C8.86684 20.1953 10.1332 20.1953 10.9142 19.4142L18.3284 12L10.9142 4.58579C10.1332 3.80474 8.86684 3.80474 8.08579 4.58579C7.30474 5.36684 7.30474 6.63317 8.08579 7.41421L12.6716 12L8.08579 16.5858Z`,A=24;try{T.displayName=`NextIcon`,T.__docgenInfo={description:``,displayName:`NextIcon`,filePath:`/home/runner/work/charcoal/charcoal/packages/react-sandbox/src/components/icons/NextIcon.tsx`,methods:[],props:{direction:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/icons/NextIcon.tsx`,name:`Props`}],description:``,name:`direction`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/icons/NextIcon.tsx`,name:`Props`},required:!0,tags:{},type:{name:`enum`,raw:`WedgeDirection`,value:[{value:`"up"`,description:``,fullComment:``,tags:{}},{value:`"down"`,description:``,fullComment:``,tags:{}},{value:`"left"`,description:``,fullComment:``,tags:{}},{value:`"right"`,description:``,fullComment:``,tags:{}}]}}},tags:{}}}catch{}}));function M({direction:e,show:t,offset:n=0,padding:r=0,bottomOffset:i=0,gradient:a=!1,onClick:o}){let s=e===P.Left?{left:a?n-72:n,paddingLeft:Math.max(r,0),paddingBottom:i}:{right:a?n-72:n,paddingRight:Math.max(r,0),paddingBottom:i};return(0,N.jsx)(L,{type:`button`,onClick:o,hide:!t,style:s,css:F,children:(0,N.jsx)(I,{children:(0,N.jsx)(T,{direction:e===P.Right?O.Right:e===P.Left?O.Left:m()})})})}var N,P,F,I,L,R=t((()=>{l(),h(),j(),o(),N=d(),P=function(e){return e.Right=`right`,e.Left=`left`,e}({}),F=i`
  @media (hover: none) and (pointer: coarse) {
    display: none;
  }
`,I=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${40}px;
  height: ${40}px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.color.surface4};
  transition:
    0.4s visibility,
    0.4s opacity,
    0.2s background-color,
    0.2s color;
  color: ${({theme:e})=>e.color.text5};
`,L=r.button`
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
  transition:
    0.4s visibility,
    0.4s opacity;
  /* つらい */
  /* このコンポーネントはCarouselでしか使われてないのでそっちでコンテキストで切る */
  z-index: 1;

  &:hover ${I} {
    background-color: ${({theme:e})=>u(e.color.surface4,e.effect.hover)};
    color: ${({theme:e})=>u(e.color.text5,e.effect.hover)};
  }

  &:active ${I} {
    background-color: ${({theme:e})=>u(e.color.surface4,e.effect.press)};
    color: ${({theme:e})=>u(e.color.text5,e.effect.press)};
  }

  ${e=>e.hide&&i`
      visibility: hidden;
      opacity: 0;
      pointer-events: none;
    `}
`;try{M.displayName=`CarouselButton`,M.__docgenInfo={description:``,displayName:`CarouselButton`,filePath:`/home/runner/work/charcoal/charcoal/packages/react-sandbox/src/components/CarouselButton/index.tsx`,methods:[],props:{direction:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/CarouselButton/index.tsx`,name:`Props`}],description:``,name:`direction`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/CarouselButton/index.tsx`,name:`Props`},required:!0,tags:{},type:{name:`enum`,raw:`Direction`,value:[{value:`"right"`,description:``,fullComment:``,tags:{}},{value:`"left"`,description:``,fullComment:``,tags:{}}]}},show:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/CarouselButton/index.tsx`,name:`Props`}],description:``,name:`show`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/CarouselButton/index.tsx`,name:`Props`},required:!0,tags:{},type:{name:`boolean`}},offset:{defaultValue:{value:`0`},declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/CarouselButton/index.tsx`,name:`Props`}],description:``,name:`offset`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/CarouselButton/index.tsx`,name:`Props`},required:!1,tags:{},type:{name:`number`}},padding:{defaultValue:{value:`0`},declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/CarouselButton/index.tsx`,name:`Props`}],description:``,name:`padding`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/CarouselButton/index.tsx`,name:`Props`},required:!1,tags:{},type:{name:`number`}},bottomOffset:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/CarouselButton/index.tsx`,name:`Props`}],description:``,name:`bottomOffset`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/CarouselButton/index.tsx`,name:`Props`},required:!1,tags:{},type:{name:`number`}},gradient:{defaultValue:{value:`false`},declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/CarouselButton/index.tsx`,name:`Props`}],description:``,name:`gradient`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/CarouselButton/index.tsx`,name:`Props`},required:!1,tags:{},type:{name:`boolean`}},onClick:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/CarouselButton/index.tsx`,name:`Props`}],description:``,name:`onClick`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/CarouselButton/index.tsx`,name:`Props`},required:!0,tags:{},type:{name:`() => void`}}},tags:{}}}catch{}}));function z({buttonOffset:e=0,buttonPadding:t=16,bottomOffset:n=0,defaultScroll:{align:r=`left`,offset:i=0}={},onScroll:a,onResize:o,children:c,centerItems:l,onScrollStateChange:u,scrollAmountCoef:d=H,...p}){let[m,h]=f(0),g=(0,B.useRef)(!1),[_,y]=(0,B.useState)(0),[x,S]=(0,B.useState)(!1),[w,T]=(0,B.useState)(!1),[E,D]=s(()=>({from:{scroll:0}})),O=(0,B.useRef)(null),k=(0,B.useRef)(null),A=(0,B.useRef)(null),j=(0,B.useCallback)(()=>{if(k.current===null)return;let{clientWidth:e}=k.current,t=Math.min(m+e*d,_);h(t,!0),D({scroll:t,from:{scroll:m},reset:!g.current}),g.current=!0},[g,_,m,D,d,h]),N=(0,B.useCallback)(()=>{if(k.current===null)return;let{clientWidth:e}=k.current,t=Math.max(m-e*d,0);h(t,!0),D({scroll:t,from:{scroll:m},reset:!g.current}),g.current=!0},[g,m,D,d,h]);(0,B.useEffect)(()=>{let e=m>0,t=m<_&&_>0;(e!==x||t!==w)&&(S(e),T(t),u?.(e||t))},[x,_,u,w,m]);let F=(0,B.useCallback)(()=>{if(O.current===null)return;g.current&&=(E.scroll.stop(),!1);let e=O.current.scrollLeft;h(e)},[g,h,E]),I=(0,B.useCallback)(()=>{if(O.current===null)return;let{clientWidth:e,scrollWidth:t}=O.current;y(t-e),o&&o(e)},[o]);C(()=>{let e=O.current,t=A.current;if(e===null||t===null)return;e.addEventListener(`wheel`,F,v()&&{passive:!0});let n=new ResizeObserver(I);n.observe(e);let r=new ResizeObserver(I);return r.observe(t),()=>{e.removeEventListener(`wheel`,F),n.disconnect(),r.disconnect()}},[I,F]),C(()=>{if(r!==`left`||i!==0){let e=O.current;if(e!==null){let t=Math.max(0,Math.min(r===`left`&&i>0?i:r===`center`?_/2+i:r===`right`&&i<=_?_-i/2:0,_));e.scrollLeft=t,h(t,!0)}}},[O.current]);let L=(0,B.useCallback)(()=>{O.current!==null&&a&&a(O.current.scrollLeft)},[a]),[R,z]=(0,B.useState)(!1);if(C(()=>{b()&&z(!0)},[]),!R&&p.hasGradient===!0){let r=p.fadeInGradient??!1,i=!r;return(0,V.jsxs)(G,{ref:k,children:[(0,V.jsx)(q,{fadeInGradient:r,children:(0,V.jsx)(J,{children:(0,V.jsx)(Y,{show:i||m>0,children:(0,V.jsx)(K,{ref:O,scrollLeft:E.scroll,onScroll:L,children:(0,V.jsx)(U,{ref:A,centerItems:l,children:c})})})})}),(0,V.jsxs)(W,{children:[(0,V.jsx)(M,{direction:P.Left,show:x,offset:e,bottomOffset:n,padding:t,gradient:i,onClick:N}),(0,V.jsx)(M,{direction:P.Right,show:w,offset:e,bottomOffset:n,padding:t,gradient:!0,onClick:j})]})]})}return(0,V.jsxs)(G,{ref:k,children:[(0,V.jsx)(K,{ref:O,scrollLeft:E.scroll,onScroll:L,children:(0,V.jsx)(U,{ref:A,centerItems:l,children:c})}),(0,V.jsxs)(W,{children:[(0,V.jsx)(M,{direction:P.Left,show:x,offset:e,bottomOffset:n,padding:t,onClick:N}),(0,V.jsx)(M,{direction:P.Right,show:w,offset:e,bottomOffset:n,padding:t,onClick:j})]})]})}var B,V,H,U,W,G,K,q,J,Y,ee=t((()=>{B=e(a(),1),a(),n(),l(),p(),x(),w(),R(),V=d(),H=.75,U=r.ul`
  vertical-align: top;
  overflow: hidden;
  list-style: none;
  padding: 0;

  /* 最小幅を100%にして親要素にぴったりくっつけることで子要素で要素を均等に割り付けるなどを出来るようにしてある */
  min-width: 100%;
  box-sizing: border-box;

  ${({centerItems:e=!1})=>e?i`
          display: flex;
          width: max-content;
          margin: 0 auto;
        `:i`
          display: inline-flex;
          margin: 0;
        `}
`,W=r.div`
  opacity: 0;
  transition: 0.4s opacity;
`,G=r.div`
  &:hover ${W} {
    opacity: 1;
  }

  /* CarouselButtonの中にz-index:1があるのでここでコンテキストを切る */
  position: relative;
  z-index: 0;
`,K=r(c.div)`
  overflow-x: auto;
  padding: 0;
  margin: 0;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
`,q=r.div`
  /* NOTE: LeftGradientがはみ出るためhidden */
  overflow: hidden;
  ${e=>!e.fadeInGradient&&i`
      margin-left: ${-72}px;
      ${U} {
        padding-left: ${72}px;
      }
    `}

  margin-right: ${-72}px;
  /* stylelint-disable-next-line no-duplicate-selectors */
  ${U} {
    padding-right: ${72}px;
  }
`,J=r.div`
  mask-image: linear-gradient(
    to right,
    #000 calc(100% - ${72}px),
    transparent
  );
`,Y=r.div`
  /* NOTE: mask-position が left → negative px の時、right → abs(negative px) の位置に表示されるため */
  margin-right: ${-72}px;
  padding-right: ${72}px;
  /* NOTE: mask-position に transition をつけたいが vender prefixes 対策で all につける */
  transition: 0.2s all ease-in;
  mask: linear-gradient(to right, transparent, #000 ${72}px)
    ${e=>e.show?0:-72}px 0;
`;try{z.displayName=`Carousel`,z.__docgenInfo={description:``,displayName:`Carousel`,filePath:`/home/runner/work/charcoal/charcoal/packages/react-sandbox/src/components/Carousel/index.tsx`,methods:[],props:{buttonOffset:{defaultValue:{value:`0`},declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Carousel/index.tsx`,name:`CarouselBaseAppearanceProps`}],description:``,name:`buttonOffset`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/Carousel/index.tsx`,name:`CarouselBaseAppearanceProps`},required:!1,tags:{},type:{name:`number`}},buttonPadding:{defaultValue:{value:`16`},declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Carousel/index.tsx`,name:`CarouselBaseAppearanceProps`}],description:``,name:`buttonPadding`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/Carousel/index.tsx`,name:`CarouselBaseAppearanceProps`},required:!1,tags:{},type:{name:`number`}},bottomOffset:{defaultValue:{value:`0`},declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Carousel/index.tsx`,name:`CarouselBaseAppearanceProps`}],description:``,name:`bottomOffset`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/Carousel/index.tsx`,name:`CarouselBaseAppearanceProps`},required:!1,tags:{},type:{name:`number`}},defaultScroll:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Carousel/index.tsx`,name:`CarouselBaseAppearanceProps`}],description:``,name:`defaultScroll`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/Carousel/index.tsx`,name:`CarouselBaseAppearanceProps`},required:!1,tags:{},type:{name:`ScrollProps`}},hasGradient:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Carousel/index.tsx`,name:`TypeLiteral`},{fileName:`charcoal/packages/react-sandbox/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`hasGradient`,required:!1,tags:{},type:{name:`boolean`}},onScroll:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`onScroll`,required:!1,tags:{},type:{name:`((left: number) => void)`}},onResize:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`onResize`,required:!1,tags:{},type:{name:`((width: number) => void)`}},centerItems:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`centerItems`,required:!1,tags:{},type:{name:`boolean`}},onScrollStateChange:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`onScrollStateChange`,required:!1,tags:{},type:{name:`((canScroll: boolean) => void)`}},scrollAmountCoef:{defaultValue:{value:`0.75`},declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`scrollAmountCoef`,required:!1,tags:{},type:{name:`number`}},fadeInGradient:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`fadeInGradient`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{H.displayName=`SCROLL_AMOUNT_COEF`,H.__docgenInfo={description:`カルーセル系のスクロール量の定数`,displayName:`SCROLL_AMOUNT_COEF`,filePath:`/home/runner/work/charcoal/charcoal/packages/react-sandbox/src/components/Carousel/index.tsx`,methods:[],props:{},tags:{example:`const scrollAmount = containerElm.clientWidth * SCROLL_AMOUNT_COEF`}}}catch{}})),X,Z,Q,$;t((()=>{ee(),X=d(),Z={title:`react-sandbox/Carousel`,component:z,argTypes:{}},Q=[1,2,3,4,5],$={render:e=>(0,X.jsx)(z,{...e,children:(0,X.jsx)(`div`,{style:{display:`flex`,gap:`8px`},children:Q.map(e=>(0,X.jsx)(`div`,{style:{width:`200px`,height:`100px`,backgroundColor:`var(--charcoal-brand)`,filter:`hue-rotate(0.${e}turn)`}},e))})})},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: props => <Carousel {...props}>
      <div style={{
      display: 'flex',
      gap: '8px'
    }}>
        {items.map(item => <div key={item} style={{
        width: '200px',
        height: '100px',
        backgroundColor: 'var(--charcoal-brand)',
        filter: \`hue-rotate(0.\${item}turn)\`
      }} />)}
      </div>
    </Carousel>
}`,...$.parameters?.docs?.source}}}}))();export{$ as Default,Z as default};