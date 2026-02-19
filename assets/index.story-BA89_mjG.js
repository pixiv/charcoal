import{I as g,J as l,L as _,j as o,r as s,p as t,q as d,N as v,t as p}from"./iframe-ruKs1uur.js";import"./preload-helper-C1FmrZbK.js";const T=72,V=g(2,_,l)+l,j=g(12,_,l),c=s.createContext({wide:!1,center:!1,withLeft:!1});function m({menu:e,children:n,header:r,center:i=!1,wide:y,isHeaderTopMenu:b=!1}){const w={center:i,wide:i?!0:y??!1,withLeft:e!=null&&!b};return o.jsxs(z,{children:[o.jsxs(c.Provider,{value:w,children:[w.withLeft&&o.jsx(A,{children:e}),o.jsxs(H,{center:i,children:[r!=null&&o.jsx(M,{children:r}),b&&o.jsx(C,{children:e}),o.jsx(S,{children:n})]})]}),o.jsx(B,{})]})}const C=d.div`
  margin-bottom: 40px;
  overflow-x: auto;
  word-break: keep-all;

  @media ${({theme:e})=>t(e.breakpoint.screen1)} {
    margin-bottom: 0;
    padding-left: 16px;
    padding-bottom: 16px;
    background-color: ${({theme:e})=>e.color.surface2};
  }
`,B=v`
  :root {
    background-color: ${({theme:e})=>e.color.background2};

    @media ${({theme:e})=>t(e.breakpoint.screen1)} {
      background-color: ${({theme:e})=>e.color.background1};
    }
  }
`,z=d.div`
  display: flex;
  background-color: ${({theme:e})=>e.color.background2};

  @media ${({theme:e})=>t(e.breakpoint.screen1)} {
    background-color: ${({theme:e})=>e.color.background1};
  }
`,A=d.div`
  min-width: ${V}px;
  padding: 40px 0 40px ${l}px;
  box-sizing: border-box;

  @media ${({theme:e})=>e.breakpoint.screen3} {
    display: none;
  }
`,H=d.div`
  flex-grow: 1;
  /* https://www.w3.org/TR/css-flexbox-1/#min-size-auto */
  min-width: 0;
  max-width: ${e=>e.center?g(6,_,l):j}px;
  padding: 40px ${T}px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media ${({theme:e})=>t(e.breakpoint.screen1)} {
    padding: 0;
  }
`,M=d.div`
  font-weight: bold;
  margin-bottom: 12px;
  font-size: 20px;
  line-height: 28px;
  color: ${({theme:e})=>e.color.text2};

  @media ${({theme:e})=>t(e.breakpoint.screen1)} {
    margin-bottom: 0;
    padding: 12px;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    justify-content: center;
    background-color: ${({theme:e})=>e.color.surface2};
  }
`,S=d.div`
  display: grid;
  gap: ${l}px;
  grid-template-columns: 1fr;
  grid-auto-columns: 1fr;
  grid-auto-rows: auto;

  @media ${({theme:e})=>t(e.breakpoint.screen1)} {
    gap: 0;
    background-color: ${({theme:e})=>e.color.background1};
    padding-bottom: 60px;
  }
`,h=s.forwardRef(function({span:n,children:r},i){const{withLeft:y}=s.useContext(c);return o.jsx(R,{span:n,withLeft:y,ref:i,children:r})}),R=d.div`
  grid-column-start: auto;
  grid-column-end: span ${e=>e.span};
  border-radius: 24px;
  color: ${({theme:e})=>e.color.text2};
  background-color: ${({theme:e})=>e.color.background1};
  /* https://www.w3.org/TR/css-grid-1/#min-size-auto */
  min-width: 0;

  @media ${e=>e.withLeft?e.theme.breakpoint.screen4:e.theme.breakpoint.screen3} {
    ${e=>e.span>2&&p`
        grid-column-end: span 2;
      `}
  }

  @media ${({theme:e})=>t(e.breakpoint.screen1)} {
    ${e=>e.span>1&&p`
        grid-column-end: span 1;
      `}

    border-radius: 0;
    padding-bottom: 40px;
  }
`;function $({children:e}){const{wide:n,center:r}=s.useContext(c);return o.jsx(D,{wide:n,center:r,children:e})}const D=d.div`
  padding: 0 ${e=>e.wide?40:24}px;
  height: ${e=>e.wide?64:48}px;
  display: grid;
  align-items: center;
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  background-color: ${({theme:e})=>e.color.surface2};
  color: ${({theme:e})=>e.color.text2};
  border-radius: 24px 24px 0 0;
  ${e=>e.center&&p`
      justify-content: center;
    `}

  @media ${({theme:e})=>t(e.breakpoint.screen1)} {
    margin-top: 4px;
    padding: 0 16px;
    background: none;
    overflow-x: auto;
    border-radius: unset;
    ${e=>e.wide&&p`
        height: 48px;
        margin-top: 0;
      `}
  }
`,a={wide:{x:40,y:40},default:{x:24,y:24},column1:{x:16,y:16},narrow:{x:24,yTop:12,yBottom:20},narrowColumn1:{x:16,yTop:4,yBottom:0}};function L({children:e,horizontal:n=!1,narrow:r=!1}){const{wide:i}=s.useContext(c);return o.jsx(f,{wide:i,horizontal:n,narrow:r,children:e})}const f=d.div`
  padding: ${e=>e.narrow?`${a.narrow.yTop}px ${e.horizontal?0:a.narrow.x}px ${a.narrow.yBottom}px`:e.wide?`${e.horizontal?0:a.wide.y}px ${a.wide.x}px`:`${e.horizontal?0:a.default.y}px ${a.default.x}px`};

  @media ${({theme:e})=>t(e.breakpoint.screen1)} {
    padding: ${e=>e.narrow?`${a.narrowColumn1.yTop}px ${e.horizontal?0:a.narrowColumn1.x}px ${a.narrowColumn1.yBottom}px`:`${a.column1.y}px ${a.column1.x}px 0`};
  }

  width: 100%;
  box-sizing: border-box;
`;function I({children:e,cancelTop:n}){const{wide:r}=s.useContext(c);return o.jsx(x,{wide:r,cancelTop:n,children:e})}const x=d.div`
  margin: 0 -${e=>e.wide?a.wide.x:a.default.x}px;
  margin-top: -${({cancelTop:e=!1,wide:n})=>e?n?a.wide.y:a.default.y:0}px;

  @media ${({theme:e})=>t(e.breakpoint.screen1)} {
    margin: 0 -${a.column1.x}px;
    margin-top: -${({cancelTop:e=!1})=>e?a.column1.x:0}px;
  }
`;try{m.displayName="Layout",m.__docgenInfo={description:"",displayName:"Layout",props:{menu:{defaultValue:null,description:"",name:"menu",required:!1,type:{name:"ReactNode"}},isHeaderTopMenu:{defaultValue:{value:"false"},description:"",name:"isHeaderTopMenu",required:!1,type:{name:"boolean"}},header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"ReactNode"}},wide:{defaultValue:null,description:"",name:"wide",required:!1,type:{name:"boolean"}},center:{defaultValue:{value:"false"},description:"",name:"center",required:!1,type:{name:"boolean"}}}}}catch{}try{$.displayName="LayoutItemHeader",$.__docgenInfo={description:"",displayName:"LayoutItemHeader",props:{}}}catch{}try{L.displayName="LayoutItemBody",L.__docgenInfo={description:"",displayName:"LayoutItemBody",props:{horizontal:{defaultValue:{value:"false"},description:"",name:"horizontal",required:!1,type:{name:"boolean"}},narrow:{defaultValue:{value:"false"},description:"",name:"narrow",required:!1,type:{name:"boolean"}}}}}catch{}try{I.displayName="CancelLayoutItemBodyPadding",I.__docgenInfo={description:"",displayName:"CancelLayoutItemBodyPadding",props:{cancelTop:{defaultValue:null,description:"",name:"cancelTop",required:!1,type:{name:"boolean"}}}}}catch{}try{h.displayName="LayoutItem",h.__docgenInfo={description:"",displayName:"LayoutItem",props:{span:{defaultValue:null,description:"",name:"span",required:!0,type:{name:"number"}}}}}catch{}try{f.displayName="StyledLayoutItemBody",f.__docgenInfo={description:"",displayName:"StyledLayoutItemBody",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},horizontal:{defaultValue:null,description:"",name:"horizontal",required:!0,type:{name:"boolean"}},wide:{defaultValue:null,description:"",name:"wide",required:!0,type:{name:"boolean"}},narrow:{defaultValue:null,description:"",name:"narrow",required:!0,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{x.displayName="StyledCancelLayoutItemBodyPadding",x.__docgenInfo={description:"",displayName:"StyledCancelLayoutItemBodyPadding",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},wide:{defaultValue:null,description:"",name:"wide",required:!0,type:{name:"boolean"}},cancelTop:{defaultValue:null,description:"",name:"cancelTop",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const O={title:"react-sandbox/Layout",component:m},u={render:e=>o.jsx(m,{...e,menu:o.jsx(o.Fragment,{children:"menu"}),header:o.jsx(o.Fragment,{children:"header"}),children:"children"})};var k,N,q;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: props => {
    return <Layout {...props} menu={<>menu</>} header={<>header</>}>
        children
      </Layout>;
  }
}`,...(q=(N=u.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};export{u as Default,O as default};
