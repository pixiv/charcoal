import{a as e,n as t}from"./chunk-BneVvdWh.js";import{n,t as r}from"./exports-Dl1xnqxH.js";import{E as i}from"./useFocusWithin-D9QmYOi-.js";import{l as a}from"./useRadioGroup-BlsU7oFH.js";import{_t as o,j as s}from"./iframe-B6zEy4lh.js";import{n as c,t as l}from"./useClassNames-Bi8CWFYS.js";import{n as u,t as d}from"./IconButton-1eaqawLS.js";import{n as f,t as p}from"./useIsomorphicLayoutEffect-BUwG3vew.js";var m=t((()=>{}));function h(e,t){if(typeof window>`u`||typeof IntersectionObserver>`u`)return()=>void 0;let n=e.parentElement;if(!n)return()=>void 0;let r=_.get(n);if(!r){let e=new Map;r={observer:new IntersectionObserver(t=>{for(let n of t)n.isIntersecting&&e.get(n.target)?.()},{root:n,rootMargin:g,threshold:0}),callbacks:e},_.set(n,r)}return r.callbacks.set(e,t),r.observer.observe(e),()=>{let t=_.get(n);t&&(t.callbacks.delete(e),t.observer.unobserve(e),t.callbacks.size===0&&(t.observer.disconnect(),_.delete(n)))}}var g,_,ee=t((()=>{g=`0px -50% 0px -50%`,_=new Map}));function te(){return typeof window>`u`||typeof ResizeObserver>`u`?null:(v||=new ResizeObserver(e=>{for(let t of e)y.get(t.target)?.()}),v)}function ne(e,t){let n=te();return n?(y.set(e,t),n.observe(e),()=>{y.delete(e),n.unobserve(e),y.size===0&&(n.disconnect(),v=null)}):()=>void 0}var v,y,re=t((()=>{v=null,y=new Map})),b,x,S,C=t((()=>{b=e(o(),1),ee(),re(),x=s(),S=({index:e,store:t,onResize:n,children:r})=>{let i=(0,b.useRef)(null);return(0,b.useEffect)(()=>{let n=i.current;if(n)return h(n,()=>t.dispatch({type:`setActive`,index:e}))},[e,t]),(0,b.useEffect)(()=>{let n=t.getSnapshot().scroll?.nonce??0;return t.subscribe(()=>{let r=t.getSnapshot().scroll;!r||r.index!==e||r.nonce===n||(n=r.nonce,i.current?.scrollIntoView({behavior:`smooth`,inline:`center`,block:`nearest`}))})},[e,t]),(0,b.useEffect)(()=>{let e=i.current;if(e)return ne(e,n)},[n]),(0,x.jsx)(`div`,{ref:i,className:`charcoal-carousel__item`,children:r})};try{S.displayName=`CarouselItem`,S.__docgenInfo={description:``,displayName:`CarouselItem`,filePath:`/home/runner/work/charcoal/charcoal/packages/react/src/components/Carousel/CarouselItem.tsx`,methods:[],props:{index:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/CarouselItem.tsx`,name:`TypeLiteral`}],description:``,name:`index`,required:!0,tags:{},type:{name:`number`}},store:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/CarouselItem.tsx`,name:`TypeLiteral`}],description:``,name:`store`,required:!0,tags:{},type:{name:`Readonly<{ dispatch: (action: CarouselAction) => void; subscribe: (listener: () => void) => () => void; getSnapshot: () => Readonly<{ activeIndex: number; canPrev: boolean; canNext: boolean; scroll: { ...; } | null; }>; }>`}},onResize:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/CarouselItem.tsx`,name:`TypeLiteral`}],description:``,name:`onResize`,required:!0,tags:{},type:{name:`() => void`}}},tags:{}}}catch{}}));function ie(e,t){let n=t,r=new Set;return{dispatch(t){n=e(n,t);for(let e of r)e()},subscribe(e){return r.add(e),()=>{r.delete(e)}},getSnapshot:()=>n}}var w=t((()=>{}));function ae(){return ie(E,T)}var T,E,D=t((()=>{w(),T={activeIndex:0,canPrev:!1,canNext:!1,scroll:null},E=(e,t)=>{switch(t.type){case`setActive`:return e.activeIndex===t.index?e:{...e,activeIndex:t.index};case`setScrollState`:return e.canPrev===t.canPrev&&e.canNext===t.canNext?e:{...e,canPrev:t.canPrev,canNext:t.canNext};case`requestScroll`:return{...e,scroll:{index:t.index,nonce:(e.scroll?.nonce??0)+1}}}}}));function oe(e,t,n,r){let{align:i,offset:a,scrollStep:o,onScroll:s,onResize:c,onScrollStateChange:l}=r,u=(0,O.useRef)(!0),d=(0,O.useRef)({onScroll:s,onResize:c,onScrollStateChange:l});(0,O.useEffect)(()=>{d.current={onScroll:s,onResize:c,onScrollStateChange:l}});let p=(0,O.useRef)(null),m=(0,O.useCallback)(()=>{let n=e.current;if(!n)return;let{scrollLeft:r,scrollWidth:i,clientWidth:a}=n,o=r>1,s=r<i-a-1;t.dispatch({type:`setScrollState`,canPrev:o,canNext:s});let c=o||s;p.current!==c&&(p.current=c,d.current.onScrollStateChange?.(c))},[e,t]),h=(0,O.useCallback)(()=>{let t=e.current;if(!t||!u.current)return;let n=t.scrollWidth-t.clientWidth,r=a;switch(i){case`center`:r=n/2+a;break;case`right`:r=n+a;break}t.scrollTo({left:Math.max(0,Math.min(r,n)),behavior:`instant`})},[e,i,a]);f(()=>{let t=e.current;if(!t)return;m();let n=()=>{m(),d.current.onScroll?.(t.scrollLeft)};return t.addEventListener(`scroll`,n,{passive:!0}),()=>t.removeEventListener(`scroll`,n)},[e,m,n]),f(()=>{let t=e.current;if(!t||typeof ResizeObserver>`u`)return;let n=new ResizeObserver(()=>{h(),m(),d.current.onResize?.(t.clientWidth)});return n.observe(t),()=>n.disconnect()},[e,h,m]),f(()=>{u.current=!0,h(),m();let t=e.current;if(!t)return;let n=()=>{u.current=!1};for(let e of k)t.addEventListener(e,n,!0);return()=>{for(let e of k)t.removeEventListener(e,n,!0)}},[e,h,m,n]);let g=(0,O.useCallback)(()=>{h(),m()},[h,m]),_=(0,O.useCallback)(()=>{u.current=!0,h(),m()},[h,m]);return{scrollByStep:(0,O.useCallback)(t=>{let n=e.current;if(!n)return;u.current=!1;let{clientWidth:r,scrollWidth:i,scrollLeft:a}=n,s=typeof o==`function`?o({clientWidth:r,scrollWidth:i,scrollLeft:a,direction:t}):r*o;n.scrollBy({left:t===`next`?s:-s,behavior:`smooth`})},[e,o]),onItemResize:g,resetScroll:_}}var O,k,A=t((()=>{O=e(o(),1),p(),k=[`pointerdown`,`wheel`,`touchstart`]})),j,M,se,ce,N,P,le,F,ue,de=t((()=>{m(),j=e(o(),1),r(),l(),u(),C(),D(),A(),M=s(),se=()=>T,ce=.75,N={prev:`24/Prev`,next:`24/Next`},P=({direction:e,canScroll:t,onScroll:n})=>{let r=(0,j.useCallback)(()=>{n(e)},[n,e]);return(0,M.jsx)(d,{variant:`Overlay`,size:`S`,icon:N[e],"aria-label":e===`prev`?`Previous`:`Next`,disabled:!t,onClick:r,className:`charcoal-carousel__navigation__item`,"data-direction":e,"data-hidden":!t})},le=({index:e,isActive:t,onSelect:n})=>{let r=(0,j.useCallback)(()=>{n(e)},[n,e]);return(0,M.jsx)(`button`,{className:`charcoal-carousel__indicator__item`,"data-active":t,"aria-current":t||void 0,"aria-label":`Go to slide ${e+1}`,onClick:r})},F=(0,j.forwardRef)(function({size:e=`M`,navigationButtons:t,indicator:r,hasGradient:o=!1,fullWidth:s=!1,scrollStep:l=ce,scrollSnap:u,onScroll:d,onResize:f,onScrollStateChange:p,defaultScroll:{align:m=`left`,offset:h=0}={},gap:g,children:_,...ee},te){let ne=c(`charcoal-carousel`,ee.className),v=t??e===`M`,y=r??e===`S`,re=u?.type??(e===`S`?`mandatory`:`none`),b=u?.align??`center`,x=j.Children.toArray(_),C=x.map((e,t)=>(0,j.isValidElement)(e)&&e.key!=null?e.key:t),ie=(0,j.useRef)(null),[w]=(0,j.useState)(ae),{scrollByStep:T,onItemResize:E,resetScroll:D}=oe(ie,w,x.length,{align:m,offset:h,scrollStep:l,onScroll:d,onResize:f,onScrollStateChange:p});(0,j.useImperativeHandle)(te,()=>({resetScroll:D}),[D]);let{activeIndex:O,canPrev:k,canNext:A}=(0,j.useSyncExternalStore)(w.subscribe,w.getSnapshot,se),N=(0,j.useCallback)(e=>w.dispatch({type:`requestScroll`,index:e}),[w]),{keyboardProps:F}=a({onKeyDown:e=>{e.key===`ArrowRight`?(e.preventDefault(),T(`next`)):e.key===`ArrowLeft`?(e.preventDefault(),T(`prev`)):e.continuePropagation()}}),{focusProps:ue,isFocusVisible:de}=n(),{focusProps:I,isFocusVisible:L}=n({within:!0}),R=(0,j.useMemo)(()=>({...g!=null&&{"--charcoal-carousel-gap":typeof g==`number`?`${g}px`:g}}),[g]);return(0,M.jsxs)(`div`,{...I,className:ne,style:R,"data-size":e,"data-has-gradient":o,"data-full-width":s,"data-indicator":y,"data-scroll-snap-type":re,"data-scroll-snap-align":b,"data-can-prev":k,"data-can-next":A,"data-focus-visible-within":L||void 0,role:`region`,"aria-roledescription":`carousel`,"aria-label":`Carousel`,children:[(0,M.jsxs)(`div`,{className:`charcoal-carousel__viewport`,"data-focus-visible":de||void 0,children:[(0,M.jsx)(`div`,{...i(ue,F),ref:ie,className:`charcoal-carousel__scroller`,tabIndex:0,children:x.map((e,t)=>(0,M.jsx)(S,{index:t,store:w,onResize:E,children:e},C[t]))}),(0,M.jsxs)(`div`,{className:`charcoal-carousel__navigation`,"data-visible":v,"aria-hidden":!v,children:[(0,M.jsx)(P,{direction:`prev`,canScroll:k,onScroll:T}),(0,M.jsx)(P,{direction:`next`,canScroll:A,onScroll:T})]})]}),(0,M.jsx)(`div`,{className:`charcoal-carousel__indicator`,"data-visible":y,"aria-hidden":!y,children:x.map((e,t)=>(0,M.jsx)(le,{index:t,isActive:t===O,onSelect:N},C[t]))})]})}),F.displayName=`Carousel`,ue=(0,j.memo)(F);try{F.displayName=`Carousel`,F.__docgenInfo={description:``,displayName:`Carousel`,filePath:`/home/runner/work/charcoal/charcoal/packages/react/src/components/Carousel/index.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}},hasGradient:{defaultValue:{value:`false`},declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`hasGradient`,required:!1,tags:{},type:{name:`boolean`}},fullWidth:{defaultValue:{value:`false`},declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`fullWidth`,required:!1,tags:{},type:{name:`boolean`}},navigationButtons:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`navigationButtons`,required:!1,tags:{},type:{name:`boolean`}},indicator:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`indicator`,required:!1,tags:{},type:{name:`boolean`}},size:{defaultValue:{value:`M`},declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`"S" | "M"`,value:[{value:`"S"`},{value:`"M"`}]}},scrollStep:{defaultValue:{value:`0.75`},declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`scrollStep`,required:!1,tags:{},type:{name:`ScrollStep`}},scrollSnap:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`scrollSnap`,required:!1,tags:{},type:{name:`Readonly<{ type?: ScrollSnapType; align?: ScrollSnapAlign; }> | undefined`}},onScroll:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`onScroll`,required:!1,tags:{},type:{name:`((left: number) => void)`}},onResize:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`onResize`,required:!1,tags:{},type:{name:`((width: number) => void)`}},onScrollStateChange:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`onScrollStateChange`,required:!1,tags:{},type:{name:`((canScroll: boolean) => void)`}},defaultScroll:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`defaultScroll`,required:!1,tags:{},type:{name:`{ align?: ScrollAlign; offset?: number; } | undefined`}},gap:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Carousel/index.tsx`,name:`TypeLiteral`}],description:``,name:`gap`,required:!1,tags:{},type:{name:`string | number`}},css:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/type.d.ts`,name:`Attributes`}],description:``,name:`css`,parent:{fileName:`charcoal/packages/react-sandbox/src/type.d.ts`,name:`Attributes`},required:!1,tags:{},type:{name:`CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>`}}},tags:{}}}catch{}})),I,L,R,z,B,fe,V,H,U,W,G,K,q,J,Y,pe,X,Z,Q,$;t((()=>{de(),I=s(),L=e=>Array.from({length:6},(t,n)=>(0,I.jsx)(`img`,{src:`/carousel-sample.png`,alt:`サンプル画像`,style:{objectFit:`cover`,display:`block`,...e}},`item-${n+1}`)),R=L({width:280,height:210}),z=L({width:`100%`,height:`100%`}),B=Array.from({length:20},(e,t)=>(0,I.jsx)(`div`,{style:{width:200,height:120,display:`flex`,alignItems:`center`,justifyContent:`center`,background:t%2==0?`#cfe3ff`:`#ffe3cf`,borderRadius:8,font:`bold 32px sans-serif`,color:`#333`},children:t+1},`num-${t+1}`)),fe={title:`react/Carousel`,component:ue,parameters:{layout:`padded`},args:{children:R,size:`M`,hasGradient:!1,fullWidth:!1,scrollStep:.75,gap:24},argTypes:{children:{control:!1},size:{control:{type:`radio`},options:[`S`,`M`]},hasGradient:{control:`boolean`},fullWidth:{control:`boolean`},navigationButtons:{control:`boolean`},indicator:{control:`boolean`},onScroll:{action:`onScroll`},onResize:{action:`onResize`},onScrollStateChange:{action:`onScrollStateChange`},scrollStep:{control:{type:`range`,min:.1,max:1.5,step:.05}},gap:{control:{type:`number`}}}},V={args:{size:`M`}},H={args:{size:`S`,children:z,gap:0}},U={args:{size:`M`,hasGradient:!0}},W={args:{size:`M`,fullWidth:!0}},G={args:{size:`S`,navigationButtons:!0,children:z,gap:0}},K={args:{size:`M`,indicator:!0}},q={args:{size:`M`,children:B,defaultScroll:{align:`center`}}},J={args:{size:`M`,children:B,defaultScroll:{align:`right`}}},Y={args:{size:`M`,children:R,defaultScroll:{align:`center`}}},pe=Array.from({length:10},(e,t)=>(0,I.jsx)(`div`,{style:{width:220,height:140,display:`flex`,alignItems:`center`,justifyContent:`center`,background:`#2a3b8f`,color:`#fff`,borderRadius:4,font:`bold 28px sans-serif`},children:t+1},`dark-${t+1}`)),X={args:{size:`M`,hasGradient:!0,children:pe}},Z={args:{size:`M`,children:B,scrollStep:({clientWidth:e})=>e-48}},Q={args:{size:`M`,children:B,scrollSnap:{type:`mandatory`,align:`start`}}},$={args:{size:`M`,hasGradient:!0,fullWidth:!1,navigationButtons:!0,indicator:!0}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M'
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'S',
    children: fullWidthImages,
    gap: 0
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
    navigationButtons: true,
    children: fullWidthImages,
    gap: 0
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M',
    indicator: true
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M',
    children: numberedSlides,
    defaultScroll: {
      align: 'center'
    }
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M',
    children: numberedSlides,
    defaultScroll: {
      align: 'right'
    }
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M',
    children: spacedImages,
    defaultScroll: {
      align: 'center'
    }
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M',
    hasGradient: true,
    children: darkTiles
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M',
    children: numberedSlides,
    scrollStep: ({
      clientWidth
    }) => clientWidth - 48
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M',
    children: numberedSlides,
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
}`,...$.parameters?.docs?.source}}}}))();export{$ as AllControls,q as DefaultScrollCenter,Y as DefaultScrollCenterAsyncImages,J as DefaultScrollRight,W as FullWidth,X as GradientOnDarkContent,K as IndicatorOnSizeM,G as NavigationButtonsOnSizeS,Q as ScrollSnapPerItem,Z as ScrollStepFunction,V as SizeM,H as SizeS,U as WithGradient,fe as default};