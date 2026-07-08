import{a as e,n as t}from"./chunk-BneVvdWh.js";import{P as n,Q as r,T as i,Yt as a,lt as o,w as s}from"./iframe-DoThihVl.js";import{n as c,t as l}from"./useClassNames-Ds9EBSPC.js";import{n as u,t as d}from"./IconButton-BCDGAT6b.js";import{n as f,t as p}from"./useIsomorphicLayoutEffect-CblzIwnJ.js";var m=t((()=>{}));function h(e,t){if(typeof window>`u`||typeof IntersectionObserver>`u`)return()=>void 0;let n=e.parentElement;if(!n)return()=>void 0;let r=_.get(n);if(!r){let e=new Map;r={observer:new IntersectionObserver(t=>{for(let n of t)n.isIntersecting&&e.get(n.target)?.()},{root:n,rootMargin:g,threshold:0}),callbacks:e},_.set(n,r)}return r.callbacks.set(e,t),r.observer.observe(e),()=>{let t=_.get(n);t&&(t.callbacks.delete(e),t.observer.unobserve(e),t.callbacks.size===0&&(t.observer.disconnect(),_.delete(n)))}}var g,_,ee=t((()=>{g=`0px -50% 0px -50%`,_=new Map}));function v(){return typeof window>`u`||typeof ResizeObserver>`u`?null:(b||=new ResizeObserver(e=>{for(let t of e)x.get(t.target)?.()}),b)}function y(e,t){let n=v();return n?(x.set(e,t),n.observe(e),()=>{x.delete(e),n.unobserve(e),x.size===0&&(n.disconnect(),b=null)}):()=>void 0}var b,x,S=t((()=>{b=null,x=new Map})),C,w,T,te=t((()=>{C=e(a(),1),ee(),S(),w=o(),T=({index:e,store:t,onResize:n,children:r})=>{let i=(0,C.useRef)(null);return(0,C.useEffect)(()=>{let n=i.current;if(n)return h(n,()=>t.dispatch({type:`setActive`,index:e}))},[e,t]),(0,C.useEffect)(()=>{let n=t.getSnapshot().scroll?.nonce??0;return t.subscribe(()=>{let r=t.getSnapshot().scroll;!r||r.index!==e||r.nonce===n||(n=r.nonce,i.current?.scrollIntoView({behavior:`smooth`,inline:`center`,block:`nearest`}))})},[e,t]),(0,C.useEffect)(()=>{let e=i.current;if(e)return y(e,n)},[n]),(0,w.jsx)(`div`,{ref:i,className:`charcoal-carousel__item`,children:r})};try{T.displayName=`CarouselItem`,T.__docgenInfo={description:``,displayName:`CarouselItem`,filePath:`/home/runner/work/charcoal/charcoal/packages/react/src/components/Carousel/CarouselItem.tsx`,methods:[],props:{index:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/CarouselItem.tsx`,name:`TypeLiteral`}],description:``,name:`index`,required:!0,tags:{},type:{name:`number`}},store:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/CarouselItem.tsx`,name:`TypeLiteral`}],description:``,name:`store`,required:!0,tags:{},type:{name:`Readonly<{ dispatch: (action: CarouselAction) => void; subscribe: (listener: () => void) => () => void; getSnapshot: () => Readonly<{ activeIndex: number; canPrev: boolean; canNext: boolean; scroll: { ...; } | null; }>; }>`}},onResize:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/CarouselItem.tsx`,name:`TypeLiteral`}],description:``,name:`onResize`,required:!0,tags:{},type:{name:`() => void`}}},tags:{}}}catch{}}));function E(e,t){let n=t,r=new Set;return{dispatch(t){n=e(n,t);for(let e of r)e()},subscribe(e){return r.add(e),()=>{r.delete(e)}},getSnapshot:()=>n}}var ne=t((()=>{}));function re(){return E(O,D)}var D,O,k=t((()=>{ne(),D={activeIndex:0,canPrev:!1,canNext:!1,scroll:null},O=(e,t)=>{switch(t.type){case`setActive`:return e.activeIndex===t.index?e:{...e,activeIndex:t.index};case`setScrollState`:return e.canPrev===t.canPrev&&e.canNext===t.canNext?e:{...e,canPrev:t.canPrev,canNext:t.canNext};case`requestScroll`:return{...e,scroll:{index:t.index,nonce:(e.scroll?.nonce??0)+1}}}}}));function ie(e,t,n,r){let{align:i,offset:a,scrollStep:o,onScroll:s,onResize:c,onScrollStateChange:l}=r,u=(0,A.useRef)(!0),d=(0,A.useRef)({onScroll:s,onResize:c,onScrollStateChange:l});(0,A.useEffect)(()=>{d.current={onScroll:s,onResize:c,onScrollStateChange:l}});let p=(0,A.useRef)(null),m=(0,A.useCallback)(()=>{let n=e.current;if(!n)return;let{scrollLeft:r,scrollWidth:i,clientWidth:a}=n,o=r>1,s=r<i-a-1;t.dispatch({type:`setScrollState`,canPrev:o,canNext:s});let c=o||s;p.current!==c&&(p.current=c,d.current.onScrollStateChange?.(c))},[e,t]),h=(0,A.useCallback)(()=>{let t=e.current;if(!t||!u.current)return;let n=t.scrollWidth-t.clientWidth,r=a;switch(i){case`center`:r=n/2+a;break;case`right`:r=n+a;break}t.scrollLeft=Math.max(0,Math.min(r,n))},[e,i,a]);f(()=>{let t=e.current;if(!t)return;m();let n=()=>{m(),d.current.onScroll?.(t.scrollLeft)};return t.addEventListener(`scroll`,n,{passive:!0}),()=>t.removeEventListener(`scroll`,n)},[e,m,n]),f(()=>{let t=e.current;if(!t||typeof ResizeObserver>`u`)return;let n=new ResizeObserver(()=>{h(),m(),d.current.onResize?.(t.clientWidth)});return n.observe(t),()=>n.disconnect()},[e,h,m]),f(()=>{u.current=!0,h(),m();let t=e.current;if(!t)return;let n=()=>{u.current=!1};for(let e of j)t.addEventListener(e,n,!0);return()=>{for(let e of j)t.removeEventListener(e,n,!0)}},[e,h,m,n]);let g=(0,A.useCallback)(()=>{h(),m()},[h,m]),_=(0,A.useCallback)(()=>{u.current=!0,h(),m()},[h,m]);return{scrollByStep:(0,A.useCallback)(t=>{let n=e.current;if(!n)return;u.current=!1;let{clientWidth:r,scrollWidth:i,scrollLeft:a}=n,s=typeof o==`function`?o({clientWidth:r,scrollWidth:i,scrollLeft:a,direction:t}):r*o;n.scrollBy({left:t===`next`?s:-s,behavior:`smooth`})},[e,o]),onItemResize:g,resetScroll:_}}var A,j,ae=t((()=>{A=e(a(),1),p(),j=[`pointerdown`,`wheel`,`touchstart`]})),M,N,oe,se,P,F,ce,I,le,ue=t((()=>{m(),M=e(a(),1),s(),l(),u(),te(),k(),ae(),N=o(),oe=()=>D,se=.75,P={prev:`24/Prev`,next:`24/Next`},F=({direction:e,canScroll:t,onScroll:n})=>{let r=(0,M.useCallback)(()=>{n(e)},[n,e]);return(0,N.jsx)(d,{variant:`Overlay`,size:`S`,icon:P[e],"aria-label":e===`prev`?`Previous`:`Next`,disabled:!t,onClick:r,className:`charcoal-carousel__navigation__item`,"data-direction":e,"data-hidden":!t})},ce=({index:e,isActive:t,onSelect:n})=>{let r=(0,M.useCallback)(()=>{n(e)},[n,e]);return(0,N.jsx)(`button`,{className:`charcoal-carousel__indicator__item`,"data-active":t,"aria-current":t||void 0,"aria-label":`Go to slide ${e+1}`,onClick:r})},I=(0,M.forwardRef)(function({size:e=`M`,navigationButtons:t,indicator:a,hasGradient:o=!1,fullWidth:s=!1,scrollStep:l=se,scrollSnap:u,onScroll:d,onResize:f,onScrollStateChange:p,defaultScroll:{align:m=`left`,offset:h=0}={},...g},_){let ee=c(`charcoal-carousel`,g.className),v=t??e===`M`,y=a??e===`S`,b=u?.type??(e===`S`?`mandatory`:`none`),x=u?.align??`center`,S=(0,M.useRef)(null),[C]=(0,M.useState)(re),{scrollByStep:w,onItemResize:te,resetScroll:E}=ie(S,C,g.items.length,{align:m,offset:h,scrollStep:l,onScroll:d,onResize:f,onScrollStateChange:p});(0,M.useImperativeHandle)(_,()=>({resetScroll:E}),[E]);let{activeIndex:ne,canPrev:D,canNext:O}=(0,M.useSyncExternalStore)(C.subscribe,C.getSnapshot,oe),k=(0,M.useCallback)(e=>C.dispatch({type:`requestScroll`,index:e}),[C]),{keyboardProps:A}=n({onKeyDown:e=>{e.key===`ArrowRight`?(e.preventDefault(),w(`next`)):e.key===`ArrowLeft`?(e.preventDefault(),w(`prev`)):e.continuePropagation()}}),{focusProps:j,isFocusVisible:ae}=i();return(0,N.jsxs)(`div`,{className:ee,"data-size":e,"data-has-gradient":o,"data-full-width":s,"data-indicator":y,"data-scroll-snap-type":b,"data-scroll-snap-align":x,"data-can-prev":D,"data-can-next":O,role:`region`,"aria-roledescription":`carousel`,"aria-label":`Carousel`,children:[(0,N.jsxs)(`div`,{className:`charcoal-carousel__viewport`,children:[(0,N.jsx)(`div`,{...r(j,A),ref:S,className:`charcoal-carousel__scroller`,tabIndex:0,"data-focus-visible":ae||void 0,children:g.items.map((e,t)=>(0,N.jsx)(T,{index:t,store:C,onResize:te,children:e.children},e.id))}),(0,N.jsxs)(`div`,{className:`charcoal-carousel__navigation`,"data-visible":v,"aria-hidden":!v,children:[(0,N.jsx)(F,{direction:`prev`,canScroll:D,onScroll:w}),(0,N.jsx)(F,{direction:`next`,canScroll:O,onScroll:w})]})]}),(0,N.jsx)(`div`,{className:`charcoal-carousel__indicator`,"data-visible":y,"aria-hidden":!y,children:g.items.map((e,t)=>(0,N.jsx)(ce,{index:t,isActive:t===ne,onSelect:k},e.id))})]})}),I.displayName=`Carousel`,le=(0,M.memo)(I);try{I.displayName=`Carousel`,I.__docgenInfo={description:``,displayName:`Carousel`,filePath:`/home/runner/work/charcoal/charcoal/packages/react/src/components/Carousel/index.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}},hasGradient:{defaultValue:{value:`false`},declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`hasGradient`,required:!1,tags:{},type:{name:`boolean`}},fullWidth:{defaultValue:{value:`false`},declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`fullWidth`,required:!1,tags:{},type:{name:`boolean`}},navigationButtons:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`navigationButtons`,required:!1,tags:{},type:{name:`boolean`}},indicator:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`indicator`,required:!1,tags:{},type:{name:`boolean`}},size:{defaultValue:{value:`M`},declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`"S" | "M"`,value:[{value:`"S"`},{value:`"M"`}]}},scrollStep:{defaultValue:{value:`0.75`},declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`scrollStep`,required:!1,tags:{},type:{name:`ScrollStep`}},scrollSnap:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`scrollSnap`,required:!1,tags:{},type:{name:`Readonly<{ type?: ScrollSnapType; align?: ScrollSnapAlign; }> | undefined`}},onScroll:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`onScroll`,required:!1,tags:{},type:{name:`((left: number) => void)`}},onResize:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`onResize`,required:!1,tags:{},type:{name:`((width: number) => void)`}},onScrollStateChange:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`onScrollStateChange`,required:!1,tags:{},type:{name:`((canScroll: boolean) => void)`}},defaultScroll:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`defaultScroll`,required:!1,tags:{},type:{name:`{ align?: ScrollAlign; offset?: number; } | undefined`}},items:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`items`,required:!0,tags:{},type:{name:`CarouselItem[]`}},css:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/type.d.ts`,name:`Attributes`}],description:``,name:`css`,parent:{fileName:`charcoal/packages/react-sandbox/src/type.d.ts`,name:`Attributes`},required:!1,tags:{},type:{name:`CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>`}}},tags:{}}}catch{}})),L,de,R,z,B,V,H,U,W,G,K,q,J,Y,fe,X,Z,Q,$;t((()=>{ue(),L=o(),de=(0,L.jsx)(`img`,{src:`/carousel-sample.png`,alt:`サンプル画像`,style:{width:`100%`,height:`100%`,objectFit:`cover`,display:`block`}}),R=Array.from({length:6},(e,t)=>({id:`item-${t+1}`,children:de})),z=Array.from({length:20},(e,t)=>({id:`num-${t+1}`,children:(0,L.jsx)(`div`,{style:{width:200,height:120,display:`flex`,alignItems:`center`,justifyContent:`center`,background:t%2==0?`#cfe3ff`:`#ffe3cf`,borderRadius:8,font:`bold 32px sans-serif`,color:`#333`},children:t+1})})),B={title:`react/Carousel`,component:le,parameters:{layout:`padded`},args:{items:R,size:`M`,hasGradient:!1,fullWidth:!1,scrollStep:.75},argTypes:{size:{control:{type:`radio`},options:[`S`,`M`]},hasGradient:{control:`boolean`},fullWidth:{control:`boolean`},navigationButtons:{control:`boolean`},indicator:{control:`boolean`},onScroll:{action:`onScroll`},onResize:{action:`onResize`},onScrollStateChange:{action:`onScrollStateChange`},scrollStep:{control:{type:`range`,min:.1,max:1.5,step:.05}}}},V={args:{size:`M`}},H={args:{size:`S`}},U={args:{size:`M`,hasGradient:!0}},W={args:{size:`M`,fullWidth:!0}},G={args:{size:`S`,navigationButtons:!0}},K={args:{size:`M`,indicator:!0}},q={args:{size:`M`,items:z,defaultScroll:{align:`center`}}},J={args:{size:`M`,items:z,defaultScroll:{align:`right`}}},Y={args:{size:`M`,items:R,defaultScroll:{align:`center`}}},fe=Array.from({length:10},(e,t)=>({id:`dark-${t+1}`,children:(0,L.jsx)(`div`,{style:{width:220,height:140,display:`flex`,alignItems:`center`,justifyContent:`center`,background:`#2a3b8f`,color:`#fff`,borderRadius:4,font:`bold 28px sans-serif`},children:t+1})})),X={args:{size:`M`,hasGradient:!0,items:fe}},Z={args:{size:`M`,items:z,scrollStep:({clientWidth:e})=>e-48}},Q={args:{size:`M`,items:z,scrollSnap:{type:`mandatory`,align:`start`}}},$={args:{size:`M`,hasGradient:!0,fullWidth:!1,navigationButtons:!0,indicator:!0}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M'
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'S'
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M',
    hasGradient: true
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M',
    fullWidth: true
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'S',
    navigationButtons: true
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M',
    indicator: true
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M',
    items: numberedItems,
    defaultScroll: {
      align: 'center'
    }
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M',
    items: numberedItems,
    defaultScroll: {
      align: 'right'
    }
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M',
    items,
    defaultScroll: {
      align: 'center'
    }
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M',
    hasGradient: true,
    items: darkTiles
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M',
    items: numberedItems,
    scrollStep: ({
      clientWidth
    }) => clientWidth - 48
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M',
    items: numberedItems,
    scrollSnap: {
      type: 'mandatory',
      align: 'start'
    }
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M',
    hasGradient: true,
    fullWidth: false,
    navigationButtons: true,
    indicator: true
  }
}`,...$.parameters?.docs?.source}}}}))();export{$ as AllControls,q as DefaultScrollCenter,Y as DefaultScrollCenterAsyncImages,J as DefaultScrollRight,W as FullWidth,X as GradientOnDarkContent,K as IndicatorOnSizeM,G as NavigationButtonsOnSizeS,Q as ScrollSnapPerItem,Z as ScrollStepFunction,V as SizeM,H as SizeS,U as WithGradient,B as default};