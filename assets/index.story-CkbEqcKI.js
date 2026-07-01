import{a as e,n as t}from"./chunk-BneVvdWh.js";import{P as n,T as r,en as i,mt as a,rt as o,w as s}from"./iframe-y42Cim2R.js";import{n as c,t as l}from"./useClassNames-5eLXgFrC.js";import{n as u,t as d}from"./IconButton-B2O2oXBM.js";var f=t((()=>{}));function p(e,t){if(typeof window>`u`||typeof IntersectionObserver>`u`)return()=>void 0;let n=e.parentElement;if(!n)return()=>void 0;let r=h.get(n);if(!r){let e=new Map;r={observer:new IntersectionObserver(t=>{for(let n of t)n.isIntersecting&&e.get(n.target)?.()},{root:n,rootMargin:m,threshold:0}),callbacks:e},h.set(n,r)}return r.callbacks.set(e,t),r.observer.observe(e),()=>{let t=h.get(n);t&&(t.callbacks.delete(e),t.observer.unobserve(e),t.callbacks.size===0&&(t.observer.disconnect(),h.delete(n)))}}var m,h,g=t((()=>{m=`0px -50% 0px -50%`,h=new Map}));function _(){return typeof window>`u`||typeof ResizeObserver>`u`?null:(v||=new ResizeObserver(e=>{for(let t of e)y.get(t.target)?.()}),v)}function ee(e,t){let n=_();return n?(y.set(e,t),n.observe(e),()=>{y.delete(e),n.unobserve(e),y.size===0&&(n.disconnect(),v=null)}):()=>void 0}var v,y,te=t((()=>{v=null,y=new Map})),b,x,S,C=t((()=>{b=e(i(),1),g(),te(),x=a(),S=({index:e,store:t,onResize:n,children:r})=>{let i=(0,b.useRef)(null);return(0,b.useEffect)(()=>{let n=i.current;if(n)return p(n,()=>t.dispatch({type:`setActive`,index:e}))},[e,t]),(0,b.useEffect)(()=>{let n=t.getSnapshot().scroll?.nonce??0;return t.subscribe(()=>{let r=t.getSnapshot().scroll;!r||r.index!==e||r.nonce===n||(n=r.nonce,i.current?.scrollIntoView({behavior:`smooth`,inline:`center`,block:`nearest`}))})},[e,t]),(0,b.useEffect)(()=>{let e=i.current;if(e)return ee(e,n)},[n]),(0,x.jsx)(`div`,{ref:i,className:`charcoal-carousel__item`,children:r})};try{S.displayName=`CarouselItem`,S.__docgenInfo={description:``,displayName:`CarouselItem`,filePath:`/home/runner/work/charcoal/charcoal/packages/react/src/components/Carousel/CarouselItem.tsx`,methods:[],props:{index:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/CarouselItem.tsx`,name:`TypeLiteral`}],description:``,name:`index`,required:!0,tags:{},type:{name:`number`}},store:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/CarouselItem.tsx`,name:`TypeLiteral`}],description:``,name:`store`,required:!0,tags:{},type:{name:`Readonly<{ dispatch: (action: CarouselAction) => void; subscribe: (listener: () => void) => () => void; getSnapshot: () => Readonly<{ activeIndex: number; canPrev: boolean; canNext: boolean; scroll: { ...; } | null; }>; }>`}},onResize:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/CarouselItem.tsx`,name:`TypeLiteral`}],description:``,name:`onResize`,required:!0,tags:{},type:{name:`() => void`}}},tags:{}}}catch{}}));function w(e,t){let n=t,r=new Set;return{dispatch(t){n=e(n,t);for(let e of r)e()},subscribe(e){return r.add(e),()=>{r.delete(e)}},getSnapshot:()=>n}}var T=t((()=>{}));function ne(){return w(D,E)}var E,D,O=t((()=>{T(),E={activeIndex:0,canPrev:!1,canNext:!1,scroll:null},D=(e,t)=>{switch(t.type){case`setActive`:return e.activeIndex===t.index?e:{...e,activeIndex:t.index};case`setScrollState`:return e.canPrev===t.canPrev&&e.canNext===t.canNext?e:{...e,canPrev:t.canPrev,canNext:t.canNext};case`requestScroll`:return{...e,scroll:{index:t.index,nonce:(e.scroll?.nonce??0)+1}}}}}));function re(e,t,n,r){let{align:i,offset:a,scrollStep:o,onScroll:s,onResize:c,onScrollStateChange:l}=r,u=(0,k.useRef)(!0),d=(0,k.useRef)({onScroll:s,onResize:c,onScrollStateChange:l});(0,k.useEffect)(()=>{d.current={onScroll:s,onResize:c,onScrollStateChange:l}});let f=(0,k.useRef)(null),p=(0,k.useCallback)(()=>{let n=e.current;if(!n)return;let{scrollLeft:r,scrollWidth:i,clientWidth:a}=n,o=r>1,s=r<i-a-1;t.dispatch({type:`setScrollState`,canPrev:o,canNext:s});let c=o||s;f.current!==c&&(f.current=c,d.current.onScrollStateChange?.(c))},[e,t]),m=(0,k.useCallback)(()=>{let t=e.current;if(!t||!u.current)return;let n=t.scrollWidth-t.clientWidth,r=a;switch(i){case`center`:r=n/2+a;break;case`right`:r=n+a;break}t.scrollLeft=Math.max(0,Math.min(r,n))},[e,i,a]);A(()=>{let t=e.current;if(!t)return;p();let n=()=>{p(),d.current.onScroll?.(t.scrollLeft)};return t.addEventListener(`scroll`,n,{passive:!0}),()=>t.removeEventListener(`scroll`,n)},[e,p,n]),A(()=>{let t=e.current;if(!t||typeof ResizeObserver>`u`)return;let n=new ResizeObserver(()=>{m(),p(),d.current.onResize?.(t.clientWidth)});return n.observe(t),()=>n.disconnect()},[e,m,p]),A(()=>{u.current=!0,m(),p();let t=e.current;if(!t)return;let n=()=>{u.current=!1};for(let e of j)t.addEventListener(e,n,!0);return()=>{for(let e of j)t.removeEventListener(e,n,!0)}},[e,m,p,n]);let h=(0,k.useCallback)(()=>{m(),p()},[m,p]),g=(0,k.useCallback)(()=>{u.current=!0,m(),p()},[m,p]);return{scrollByStep:(0,k.useCallback)(t=>{let n=e.current;if(!n)return;u.current=!1;let{clientWidth:r,scrollWidth:i,scrollLeft:a}=n,s=typeof o==`function`?o({clientWidth:r,scrollWidth:i,scrollLeft:a,direction:t}):r*o;n.scrollBy({left:t===`next`?s:-s,behavior:`smooth`})},[e,o]),onItemResize:h,resetScroll:g}}var k,A,j,ie=t((()=>{k=e(i(),1),A=typeof window<`u`?k.useLayoutEffect:k.useEffect,j=[`pointerdown`,`wheel`,`touchstart`]})),M,N,ae,P,F,I,oe,L,se,ce=t((()=>{f(),M=e(i(),1),s(),l(),u(),C(),O(),ie(),N=a(),ae=()=>E,P=.75,F={prev:`24/Prev`,next:`24/Next`},I=({direction:e,canScroll:t,onScroll:n})=>{let r=(0,M.useCallback)(()=>{n(e)},[n,e]);return(0,N.jsx)(d,{variant:`Overlay`,size:`S`,icon:F[e],"aria-label":e===`prev`?`Previous`:`Next`,disabled:!t,onClick:r,className:`charcoal-carousel__navigation__item`,"data-direction":e,"data-hidden":!t})},oe=({index:e,isActive:t,onSelect:n})=>{let r=(0,M.useCallback)(()=>{n(e)},[n,e]);return(0,N.jsx)(`button`,{className:`charcoal-carousel__indicator__item`,"data-active":t,"aria-current":t||void 0,"aria-label":`Go to slide ${e+1}`,onClick:r})},L=(0,M.forwardRef)(function({size:e=`M`,navigationButtons:t,indicator:i,hasGradient:a=!1,fullWidth:s=!1,scrollStep:l=P,scrollSnap:u,onScroll:d,onResize:f,onScrollStateChange:p,defaultScroll:{align:m=`left`,offset:h=0}={},...g},_){let ee=c(`charcoal-carousel`,g.className),v=t??e===`M`,y=i??e===`S`,te=u?.type??(e===`S`?`mandatory`:`none`),b=u?.align??`center`,x=(0,M.useRef)(null),[C]=(0,M.useState)(ne),{scrollByStep:w,onItemResize:T,resetScroll:E}=re(x,C,g.items.length,{align:m,offset:h,scrollStep:l,onScroll:d,onResize:f,onScrollStateChange:p});(0,M.useImperativeHandle)(_,()=>({resetScroll:E}),[E]);let{activeIndex:D,canPrev:O,canNext:k}=(0,M.useSyncExternalStore)(C.subscribe,C.getSnapshot,ae),A=(0,M.useCallback)(e=>C.dispatch({type:`requestScroll`,index:e}),[C]),{keyboardProps:j}=n({onKeyDown:e=>{e.key===`ArrowRight`?(e.preventDefault(),w(`next`)):e.key===`ArrowLeft`?(e.preventDefault(),w(`prev`)):e.continuePropagation()}}),{focusProps:ie,isFocusVisible:F}=r();return(0,N.jsxs)(`div`,{className:ee,"data-size":e,"data-has-gradient":a,"data-full-width":s,"data-indicator":y,"data-scroll-snap-type":te,"data-scroll-snap-align":b,"data-can-prev":O,"data-can-next":k,role:`region`,"aria-roledescription":`carousel`,"aria-label":`Carousel`,children:[(0,N.jsxs)(`div`,{className:`charcoal-carousel__viewport`,children:[(0,N.jsx)(`div`,{...o(ie,j),ref:x,className:`charcoal-carousel__scroller`,tabIndex:0,"data-focus-visible":F||void 0,children:g.items.map((e,t)=>(0,N.jsx)(S,{index:t,store:C,onResize:T,children:e.children},e.id))}),(0,N.jsxs)(`div`,{className:`charcoal-carousel__navigation`,"data-visible":v,"aria-hidden":!v,children:[(0,N.jsx)(I,{direction:`prev`,canScroll:O,onScroll:w}),(0,N.jsx)(I,{direction:`next`,canScroll:k,onScroll:w})]})]}),(0,N.jsx)(`div`,{className:`charcoal-carousel__indicator`,"data-visible":y,"aria-hidden":!y,children:g.items.map((e,t)=>(0,N.jsx)(oe,{index:t,isActive:t===D,onSelect:A},e.id))})]})}),L.displayName=`Carousel`,se=(0,M.memo)(L);try{L.displayName=`Carousel`,L.__docgenInfo={description:``,displayName:`Carousel`,filePath:`/home/runner/work/charcoal/charcoal/packages/react/src/components/Carousel/index.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}},hasGradient:{defaultValue:{value:`false`},declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`hasGradient`,required:!1,tags:{},type:{name:`boolean`}},fullWidth:{defaultValue:{value:`false`},declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`fullWidth`,required:!1,tags:{},type:{name:`boolean`}},navigationButtons:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`navigationButtons`,required:!1,tags:{},type:{name:`boolean`}},indicator:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`indicator`,required:!1,tags:{},type:{name:`boolean`}},size:{defaultValue:{value:`M`},declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`"S" | "M"`,value:[{value:`"S"`},{value:`"M"`}]}},scrollStep:{defaultValue:{value:`0.75`},declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`scrollStep`,required:!1,tags:{},type:{name:`ScrollStep`}},scrollSnap:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`scrollSnap`,required:!1,tags:{},type:{name:`Readonly<{ type?: ScrollSnapType; align?: ScrollSnapAlign; }> | undefined`}},onScroll:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`onScroll`,required:!1,tags:{},type:{name:`((left: number) => void)`}},onResize:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`onResize`,required:!1,tags:{},type:{name:`((width: number) => void)`}},onScrollStateChange:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`onScrollStateChange`,required:!1,tags:{},type:{name:`((canScroll: boolean) => void)`}},defaultScroll:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`defaultScroll`,required:!1,tags:{},type:{name:`{ align?: ScrollAlign; offset?: number; } | undefined`}},items:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`items`,required:!0,tags:{},type:{name:`CarouselItem[]`}},css:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/type.d.ts`,name:`Attributes`}],description:``,name:`css`,parent:{fileName:`charcoal/packages/react-sandbox/src/type.d.ts`,name:`Attributes`},required:!1,tags:{},type:{name:`CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>`}}},tags:{}}}catch{}})),R,le,z,B,ue,V,H,U,W,G,K,q,J,Y,de,X,Z,Q,$;t((()=>{ce(),R=a(),le=(0,R.jsx)(`img`,{src:`/carousel-sample.png`,alt:`サンプル画像`,style:{width:`100%`,height:`100%`,objectFit:`cover`,display:`block`}}),z=Array.from({length:6},(e,t)=>({id:`item-${t+1}`,children:le})),B=Array.from({length:20},(e,t)=>({id:`num-${t+1}`,children:(0,R.jsx)(`div`,{style:{width:200,height:120,display:`flex`,alignItems:`center`,justifyContent:`center`,background:t%2==0?`#cfe3ff`:`#ffe3cf`,borderRadius:8,font:`bold 32px sans-serif`,color:`#333`},children:t+1})})),ue={title:`react/Carousel`,component:se,parameters:{layout:`padded`},args:{items:z,size:`M`,hasGradient:!1,fullWidth:!1,scrollStep:.75},argTypes:{size:{control:{type:`radio`},options:[`S`,`M`]},hasGradient:{control:`boolean`},fullWidth:{control:`boolean`},navigationButtons:{control:`boolean`},indicator:{control:`boolean`},onScroll:{action:`onScroll`},onResize:{action:`onResize`},onScrollStateChange:{action:`onScrollStateChange`},scrollStep:{control:{type:`range`,min:.1,max:1.5,step:.05}}}},V={args:{size:`M`}},H={args:{size:`S`}},U={args:{size:`M`,hasGradient:!0}},W={args:{size:`M`,fullWidth:!0}},G={args:{size:`S`,navigationButtons:!0}},K={args:{size:`M`,indicator:!0}},q={args:{size:`M`,items:B,defaultScroll:{align:`center`}}},J={args:{size:`M`,items:B,defaultScroll:{align:`right`}}},Y={args:{size:`M`,items:z,defaultScroll:{align:`center`}}},de=Array.from({length:10},(e,t)=>({id:`dark-${t+1}`,children:(0,R.jsx)(`div`,{style:{width:220,height:140,display:`flex`,alignItems:`center`,justifyContent:`center`,background:`#2a3b8f`,color:`#fff`,borderRadius:4,font:`bold 28px sans-serif`},children:t+1})})),X={args:{size:`M`,hasGradient:!0,items:de}},Z={args:{size:`M`,items:B,scrollStep:({clientWidth:e})=>e-48}},Q={args:{size:`M`,items:B,scrollSnap:{type:`mandatory`,align:`start`}}},$={args:{size:`M`,hasGradient:!0,fullWidth:!1,navigationButtons:!0,indicator:!0}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}}}))();export{$ as AllControls,q as DefaultScrollCenter,Y as DefaultScrollCenterAsyncImages,J as DefaultScrollRight,W as FullWidth,X as GradientOnDarkContent,K as IndicatorOnSizeM,G as NavigationButtonsOnSizeS,Q as ScrollSnapPerItem,Z as ScrollStepFunction,V as SizeM,H as SizeS,U as WithGradient,ue as default};