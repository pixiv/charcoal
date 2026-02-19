import{r as a,j as r,u as q,t as w,q as f,a4 as ce,a5 as ue}from"./iframe-D-iARKYw.js";import{a as de}from"./hooks-jKoP7Tff.js";import{u as ne}from"./utils-DNvo9QYw.js";import{I as fe}from"./Base-oT0pSHrA.js";import"./preload-helper-C1FmrZbK.js";var y;function pe(){if(y!==void 0)return y;y=!1;try{const o=Object.defineProperty({},"passive",{get(){return y=!0}});window.addEventListener("test",e,o),window.removeEventListener("test",e)}catch{}return y;function e(){}}const me=()=>navigator.userAgent.includes("Edge/"),T=typeof window<"u"?a.useLayoutEffect:a.useEffect;var M=(e=>(e.Up="up",e.Down="down",e.Left="left",e.Right="right",e))(M||{});const he="M8.08579 16.5858C7.30474 17.3668 7.30474 18.6332 8.08579 19.4142C8.86684 20.1953 10.1332 20.1953 10.9142 19.4142L18.3284 12L10.9142 4.58579C10.1332 3.80474 8.86684 3.80474 8.08579 4.58579C7.30474 5.36684 7.30474 6.63317 8.08579 7.41421L12.6716 12L8.08579 16.5858Z",K=24;function A({direction:e}){const o=ve(e);return r.jsx(fe,{viewBoxSize:K,size:K,currentColor:!0,path:he,transform:o})}function ve(e){switch(e){case"up":return"rotate(270 12 12)";case"down":return"rotate(90 12 12)";case"left":return"rotate(180 12 12)";case"right":return;default:return ne(e)}}try{A.displayName="NextIcon",A.__docgenInfo={description:"",displayName:"NextIcon",props:{direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"up"'},{value:'"down"'},{value:'"left"'},{value:'"right"'}]}}}}}catch{}var b=(e=>(e.Right="right",e.Left="left",e))(b||{});const ge=w`
  @media (hover: none) and (pointer: coarse) {
    display: none;
  }
`;function g({direction:e,show:o,offset:l=0,padding:p=0,bottomOffset:c=0,gradient:h=!1,onClick:x}){const _=e==="left"?{left:h?l-72:l,paddingLeft:Math.max(p,0),paddingBottom:c}:{right:h?l-72:l,paddingRight:Math.max(p,0),paddingBottom:c};return r.jsx(xe,{type:"button",onClick:x,hide:!o,style:_,css:ge,children:r.jsx(z,{children:r.jsx(A,{direction:e==="right"?M.Right:e==="left"?M.Left:ne()})})})}const Q=40,z=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${Q}px;
  height: ${Q}px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.color.surface4};
  transition:
    0.4s visibility,
    0.4s opacity,
    0.2s background-color,
    0.2s color;
  color: ${({theme:e})=>e.color.text5};
`,xe=f.button`
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

  &:hover ${z} {
    background-color: ${({theme:e})=>q(e.color.surface4,e.effect.hover)};
    color: ${({theme:e})=>q(e.color.text5,e.effect.hover)};
  }

  &:active ${z} {
    background-color: ${({theme:e})=>q(e.color.surface4,e.effect.press)};
    color: ${({theme:e})=>q(e.color.text5,e.effect.press)};
  }

  ${e=>e.hide&&w`
      visibility: hidden;
      opacity: 0;
      pointer-events: none;
    `}
`;try{g.displayName="CarouselButton",g.__docgenInfo={description:"",displayName:"CarouselButton",props:{direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}},show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}},offset:{defaultValue:{value:"0"},description:"",name:"offset",required:!1,type:{name:"number"}},padding:{defaultValue:{value:"0"},description:"",name:"padding",required:!1,type:{name:"number"}},bottomOffset:{defaultValue:null,description:"",name:"bottomOffset",required:!1,type:{name:"number"}},gradient:{defaultValue:{value:"false"},description:"",name:"gradient",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}}}catch{}const C=72,F=.75;function I({buttonOffset:e=0,buttonPadding:o=16,bottomOffset:l=0,defaultScroll:{align:p="left",offset:c=0}={},onScroll:h,onResize:x,children:_,centerItems:D,onScrollStateChange:L,scrollAmountCoef:E=F,...W}){const[s,m]=de(0),u=a.useRef(!1),[d,ae]=a.useState(0),[S,oe]=a.useState(!1),[$,ie]=a.useState(!1),[j,R]=ce(()=>({scroll:0})),i=a.useRef(null),v=a.useRef(null),V=a.useRef(null),Z=a.useCallback(()=>{if(v.current===null)return;const{clientWidth:t}=v.current,n=Math.min(s+t*E,d);m(n,!0),R({scroll:n,from:{scroll:s},reset:!u.current}),u.current=!0},[u,d,s,R,E,m]),H=a.useCallback(()=>{if(v.current===null)return;const{clientWidth:t}=v.current,n=Math.max(s-t*E,0);m(n,!0),R({scroll:n,from:{scroll:s},reset:!u.current}),u.current=!0},[u,s,R,E,m]);a.useEffect(()=>{const t=s>0,n=s<d&&d>0;(t!==S||n!==$)&&(oe(t),ie(n),L==null||L(t||n))},[S,d,L,$,s]);const G=a.useCallback(()=>{if(i.current===null)return;u.current&&(j.scroll.stop(),u.current=!1);const t=i.current.scrollLeft;m(t)},[u,m,j]),O=a.useCallback(()=>{if(i.current===null)return;const{clientWidth:t,scrollWidth:n}=i.current,k=n-t;ae(k),x&&x(t)},[x]);T(()=>{const t=i.current,n=V.current;if(t===null||n===null)return;t.addEventListener("wheel",G,pe()&&{passive:!0});const k=new ResizeObserver(O);k.observe(t);const J=new ResizeObserver(O);return J.observe(n),()=>{t.removeEventListener("wheel",G),k.disconnect(),J.disconnect()}},[O,G]),T(()=>{if(p!=="left"||c!==0){const t=i.current;if(t!==null){const n=Math.max(0,Math.min(p==="left"&&c>0?c:p==="center"?d/2+c:p==="right"&&c<=d?d-c/2:0,d));t.scrollLeft=n,m(n,!0)}}},[i.current]);const P=a.useCallback(()=>{i.current!==null&&h&&h(i.current.scrollLeft)},[h]),[se,le]=a.useState(!1);if(T(()=>{me()&&le(!0)},[]),!se&&W.hasGradient===!0){const t=W.fadeInGradient??!1,n=!t;return r.jsxs(X,{ref:v,children:[r.jsx(ye,{fadeInGradient:t,children:r.jsx(be,{children:r.jsx(we,{show:n||s>0,children:r.jsx(Y,{ref:i,scrollLeft:j.scroll,onScroll:P,children:r.jsx(N,{ref:V,centerItems:D,children:_})})})})}),r.jsxs(U,{children:[r.jsx(g,{direction:b.Left,show:S,offset:e,bottomOffset:l,padding:o,gradient:n,onClick:H}),r.jsx(g,{direction:b.Right,show:$,offset:e,bottomOffset:l,padding:o,gradient:!0,onClick:Z})]})]})}return r.jsxs(X,{ref:v,children:[r.jsx(Y,{ref:i,scrollLeft:j.scroll,onScroll:P,children:r.jsx(N,{ref:V,centerItems:D,children:_})}),r.jsxs(U,{children:[r.jsx(g,{direction:b.Left,show:S,offset:e,bottomOffset:l,padding:o,onClick:H}),r.jsx(g,{direction:b.Right,show:$,offset:e,bottomOffset:l,padding:o,onClick:Z})]})]})}const N=f.ul`
  vertical-align: top;
  overflow: hidden;
  list-style: none;
  padding: 0;

  /* 最小幅を100%にして親要素にぴったりくっつけることで子要素で要素を均等に割り付けるなどを出来るようにしてある */
  min-width: 100%;
  box-sizing: border-box;

  ${({centerItems:e=!1})=>e?w`
          display: flex;
          width: max-content;
          margin: 0 auto;
        `:w`
          display: inline-flex;
          margin: 0;
        `}
`,U=f.div`
  opacity: 0;
  transition: 0.4s opacity;
`,X=f.div`
  &:hover ${U} {
    opacity: 1;
  }

  /* CarouselButtonの中にz-index:1があるのでここでコンテキストを切る */
  position: relative;
  z-index: 0;
`,Y=f(ue.div)`
  overflow-x: auto;
  padding: 0;
  margin: 0;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
`,ye=f.div`
  /* NOTE: LeftGradientがはみ出るためhidden */
  overflow: hidden;
  ${e=>!e.fadeInGradient&&w`
      margin-left: ${-72}px;
      ${N} {
        padding-left: ${C}px;
      }
    `}

  margin-right: ${-72}px;
  /* stylelint-disable-next-line no-duplicate-selectors */
  ${N} {
    padding-right: ${C}px;
  }
`,be=f.div`
  mask-image: linear-gradient(
    to right,
    #000 calc(100% - ${C}px),
    transparent
  );
`,we=f.div`
  /* NOTE: mask-position が left → negative px の時、right → abs(negative px) の位置に表示されるため */
  margin-right: ${-72}px;
  padding-right: ${C}px;
  /* NOTE: mask-position に transition をつけたいが vender prefixes 対策で all につける */
  transition: 0.2s all ease-in;
  mask: linear-gradient(to right, transparent, #000 ${C}px)
    ${e=>e.show?0:-72}px 0;
`;try{I.displayName="Carousel",I.__docgenInfo={description:"",displayName:"Carousel",props:{buttonOffset:{defaultValue:{value:"0"},description:"",name:"buttonOffset",required:!1,type:{name:"number"}},buttonPadding:{defaultValue:{value:"16"},description:"",name:"buttonPadding",required:!1,type:{name:"number"}},bottomOffset:{defaultValue:{value:"0"},description:"",name:"bottomOffset",required:!1,type:{name:"number"}},defaultScroll:{defaultValue:null,description:"",name:"defaultScroll",required:!1,type:{name:"ScrollProps"}},hasGradient:{defaultValue:null,description:"",name:"hasGradient",required:!1,type:{name:"boolean"}},onScroll:{defaultValue:null,description:"",name:"onScroll",required:!1,type:{name:"((left: number) => void)"}},onResize:{defaultValue:null,description:"",name:"onResize",required:!1,type:{name:"((width: number) => void)"}},centerItems:{defaultValue:null,description:"",name:"centerItems",required:!1,type:{name:"boolean"}},onScrollStateChange:{defaultValue:null,description:"",name:"onScrollStateChange",required:!1,type:{name:"((canScroll: boolean) => void)"}},scrollAmountCoef:{defaultValue:{value:"0.75"},description:"",name:"scrollAmountCoef",required:!1,type:{name:"number"}},fadeInGradient:{defaultValue:null,description:"",name:"fadeInGradient",required:!1,type:{name:"boolean"}}}}}catch{}try{F.displayName="SCROLL_AMOUNT_COEF",F.__docgenInfo={description:"カルーセル系のスクロール量の定数",displayName:"SCROLL_AMOUNT_COEF",props:{}}}catch{}const je={title:"react-sandbox/Carousel",component:I,argTypes:{}},Ce=[1,2,3,4,5],B={render:e=>r.jsx(I,{...e,children:r.jsx("div",{style:{display:"flex",gap:"8px"},children:Ce.map(o=>r.jsx("div",{style:{width:"200px",height:"100px",backgroundColor:"var(--charcoal-brand)",filter:`hue-rotate(0.${o}turn)`}},o))})})};var ee,te,re;B.parameters={...B.parameters,docs:{...(ee=B.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(re=(te=B.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};export{B as Default,je as default};
