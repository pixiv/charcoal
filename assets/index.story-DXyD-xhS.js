import{a as e,n as t}from"./chunk-BneVvdWh.js";import{At as n,Dt as r,Et as i,Ht as a,at as o,gt as s,it as c,kt as l,nt as u,pt as d}from"./iframe-A6E4gP06.js";var f,p,m=t((()=>{c(),f=o(2,80,24)+24,p=o(12,80,24)}));function h({menu:e,children:t,header:n,center:r=!1,wide:i,isHeaderTopMenu:a=!1}){let o={center:r,wide:r?!0:i??!1,withLeft:e!=null&&!a};return(0,x.jsxs)(T,{children:[(0,x.jsxs)(S.Provider,{value:o,children:[o.withLeft&&(0,x.jsx)(E,{children:e}),(0,x.jsxs)(D,{center:r,children:[n!=null&&(0,x.jsx)(O,{children:n}),a&&(0,x.jsx)(C,{children:e}),(0,x.jsx)(k,{children:t})]})]}),(0,x.jsx)(w,{})]})}function g({children:e}){let{wide:t,center:n}=(0,y.useContext)(S);return(0,x.jsx)(M,{wide:t,center:n,children:e})}function _({children:e,horizontal:t=!1,narrow:n=!1}){let{wide:r}=(0,y.useContext)(S);return(0,x.jsx)(P,{wide:r,horizontal:t,narrow:n,children:e})}function v({children:e,cancelTop:t}){let{wide:n}=(0,y.useContext)(S);return(0,x.jsx)(F,{wide:n,cancelTop:t,children:e})}var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I=t((()=>{y=e(a(),1),b=e(a(),1),l(),m(),c(),s(),x=u(),S=b.createContext({wide:!1,center:!1,withLeft:!1}),C=n.div`
  margin-bottom: 40px;
  overflow-x: auto;
  word-break: keep-all;

  @media ${({theme:e})=>d(e.breakpoint.screen1)} {
    margin-bottom: 0;
    padding-left: 16px;
    padding-bottom: 16px;
    background-color: ${({theme:e})=>e.color.surface2};
  }
`,w=i`
  :root {
    background-color: ${({theme:e})=>e.color.background2};

    @media ${({theme:e})=>d(e.breakpoint.screen1)} {
      background-color: ${({theme:e})=>e.color.background1};
    }
  }
`,T=n.div`
  display: flex;
  background-color: ${({theme:e})=>e.color.background2};

  @media ${({theme:e})=>d(e.breakpoint.screen1)} {
    background-color: ${({theme:e})=>e.color.background1};
  }
`,E=n.div`
  min-width: ${f}px;
  padding: 40px 0 40px ${24}px;
  box-sizing: border-box;

  @media ${({theme:e})=>e.breakpoint.screen3} {
    display: none;
  }
`,D=n.div`
  flex-grow: 1;
  /* https://www.w3.org/TR/css-flexbox-1/#min-size-auto */
  min-width: 0;
  max-width: ${e=>e.center?o(6,80,24):p}px;
  padding: 40px ${72}px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media ${({theme:e})=>d(e.breakpoint.screen1)} {
    padding: 0;
  }
`,O=n.div`
  font-weight: bold;
  margin-bottom: 12px;
  font-size: 20px;
  line-height: 28px;
  color: ${({theme:e})=>e.color.text2};

  @media ${({theme:e})=>d(e.breakpoint.screen1)} {
    margin-bottom: 0;
    padding: 12px;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    justify-content: center;
    background-color: ${({theme:e})=>e.color.surface2};
  }
`,k=n.div`
  display: grid;
  gap: ${24}px;
  grid-template-columns: 1fr;
  grid-auto-columns: 1fr;
  grid-auto-rows: auto;

  @media ${({theme:e})=>d(e.breakpoint.screen1)} {
    gap: 0;
    background-color: ${({theme:e})=>e.color.background1};
    padding-bottom: 60px;
  }
`,A=b.forwardRef(function({span:e,children:t},n){let{withLeft:r}=(0,y.useContext)(S);return(0,x.jsx)(j,{span:e,withLeft:r,ref:n,children:t})}),j=n.div`
  grid-column-start: auto;
  grid-column-end: span ${e=>e.span};
  border-radius: 24px;
  color: ${({theme:e})=>e.color.text2};
  background-color: ${({theme:e})=>e.color.background1};
  /* https://www.w3.org/TR/css-grid-1/#min-size-auto */
  min-width: 0;

  @media ${e=>e.withLeft?e.theme.breakpoint.screen4:e.theme.breakpoint.screen3} {
    ${e=>e.span>2&&r`
        grid-column-end: span 2;
      `}
  }

  @media ${({theme:e})=>d(e.breakpoint.screen1)} {
    ${e=>e.span>1&&r`
        grid-column-end: span 1;
      `}

    border-radius: 0;
    padding-bottom: 40px;
  }
`,M=n.div`
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
  ${e=>e.center&&r`
      justify-content: center;
    `}

  @media ${({theme:e})=>d(e.breakpoint.screen1)} {
    margin-top: 4px;
    padding: 0 16px;
    background: none;
    overflow-x: auto;
    border-radius: unset;
    ${e=>e.wide&&r`
        height: 48px;
        margin-top: 0;
      `}
  }
`,N={wide:{x:40,y:40},default:{x:24,y:24},column1:{x:16,y:16},narrow:{x:24,yTop:12,yBottom:20},narrowColumn1:{x:16,yTop:4,yBottom:0}},P=n.div`
  padding: ${e=>e.narrow?`${N.narrow.yTop}px ${e.horizontal?0:N.narrow.x}px ${N.narrow.yBottom}px`:e.wide?`${e.horizontal?0:N.wide.y}px ${N.wide.x}px`:`${e.horizontal?0:N.default.y}px ${N.default.x}px`};

  @media ${({theme:e})=>d(e.breakpoint.screen1)} {
    padding: ${e=>e.narrow?`${N.narrowColumn1.yTop}px ${e.horizontal?0:N.narrowColumn1.x}px ${N.narrowColumn1.yBottom}px`:`${N.column1.y}px ${N.column1.x}px 0`};
  }

  width: 100%;
  box-sizing: border-box;
`,F=n.div`
  margin: 0 -${e=>e.wide?N.wide.x:N.default.x}px;
  margin-top: -${({cancelTop:e=!1,wide:t})=>e?t?N.wide.y:N.default.y:0}px;

  @media ${({theme:e})=>d(e.breakpoint.screen1)} {
    margin: 0 -${N.column1.x}px;
    margin-top: -${({cancelTop:e=!1})=>e?N.column1.x:0}px;
  }
`;try{h.displayName=`Layout`,h.__docgenInfo={description:``,displayName:`Layout`,filePath:`/home/runner/work/charcoal/charcoal/packages/react-sandbox/src/components/Layout/index.tsx`,methods:[],props:{menu:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Layout/index.tsx`,name:`Props`}],description:``,name:`menu`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/Layout/index.tsx`,name:`Props`},required:!1,tags:{},type:{name:`ReactNode`}},isHeaderTopMenu:{defaultValue:{value:`false`},declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Layout/index.tsx`,name:`Props`}],description:``,name:`isHeaderTopMenu`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/Layout/index.tsx`,name:`Props`},required:!1,tags:{},type:{name:`boolean`}},header:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Layout/index.tsx`,name:`Props`}],description:``,name:`header`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/Layout/index.tsx`,name:`Props`},required:!1,tags:{},type:{name:`ReactNode`}},wide:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Layout/index.tsx`,name:`Props`}],description:``,name:`wide`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/Layout/index.tsx`,name:`Props`},required:!1,tags:{},type:{name:`boolean`}},center:{defaultValue:{value:`false`},declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Layout/index.tsx`,name:`Props`}],description:``,name:`center`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/Layout/index.tsx`,name:`Props`},required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{g.displayName=`LayoutItemHeader`,g.__docgenInfo={description:``,displayName:`LayoutItemHeader`,filePath:`/home/runner/work/charcoal/charcoal/packages/react-sandbox/src/components/Layout/index.tsx`,methods:[],props:{},tags:{}}}catch{}try{_.displayName=`LayoutItemBody`,_.__docgenInfo={description:``,displayName:`LayoutItemBody`,filePath:`/home/runner/work/charcoal/charcoal/packages/react-sandbox/src/components/Layout/index.tsx`,methods:[],props:{horizontal:{defaultValue:{value:`false`},declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Layout/index.tsx`,name:`TypeLiteral`}],description:``,name:`horizontal`,required:!1,tags:{},type:{name:`boolean`}},narrow:{defaultValue:{value:`false`},declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Layout/index.tsx`,name:`TypeLiteral`}],description:``,name:`narrow`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{v.displayName=`CancelLayoutItemBodyPadding`,v.__docgenInfo={description:``,displayName:`CancelLayoutItemBodyPadding`,filePath:`/home/runner/work/charcoal/charcoal/packages/react-sandbox/src/components/Layout/index.tsx`,methods:[],props:{cancelTop:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Layout/index.tsx`,name:`TypeLiteral`}],description:``,name:`cancelTop`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{A.displayName=`LayoutItem`,A.__docgenInfo={description:``,displayName:`LayoutItem`,filePath:`/home/runner/work/charcoal/charcoal/packages/react-sandbox/src/components/Layout/index.tsx`,methods:[],props:{span:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Layout/index.tsx`,name:`LayoutItemProps`}],description:``,name:`span`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/Layout/index.tsx`,name:`LayoutItemProps`},required:!0,tags:{},type:{name:`number`}},css:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/type.d.ts`,name:`Attributes`}],description:``,name:`css`,parent:{fileName:`charcoal/packages/react-sandbox/src/type.d.ts`,name:`Attributes`},required:!1,tags:{},type:{name:`CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>`}}},tags:{}}}catch{}try{P.displayName=`StyledLayoutItemBody`,P.__docgenInfo={description:``,displayName:`StyledLayoutItemBody`,filePath:`/home/runner/work/charcoal/charcoal/packages/react-sandbox/src/components/Layout/index.tsx`,methods:[],props:{ref:{defaultValue:null,declarations:[{fileName:`charcoal/node_modules/.pnpm/@types+react@18.3.20/node_modules/@types/react/index.d.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null`}},css:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/type.d.ts`,name:`Attributes`}],description:``,name:`css`,parent:{fileName:`charcoal/packages/react-sandbox/src/type.d.ts`,name:`Attributes`},required:!1,tags:{},type:{name:`CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>`}},horizontal:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Layout/index.tsx`,name:`StyledLayoutItemBodyProps`}],description:``,name:`horizontal`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/Layout/index.tsx`,name:`StyledLayoutItemBodyProps`},required:!0,tags:{},type:{name:`boolean`}},wide:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Layout/index.tsx`,name:`StyledLayoutItemBodyProps`}],description:``,name:`wide`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/Layout/index.tsx`,name:`StyledLayoutItemBodyProps`},required:!0,tags:{},type:{name:`boolean`}},narrow:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Layout/index.tsx`,name:`StyledLayoutItemBodyProps`}],description:``,name:`narrow`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/Layout/index.tsx`,name:`StyledLayoutItemBodyProps`},required:!0,tags:{},type:{name:`boolean`}},theme:{defaultValue:null,declarations:[{fileName:`charcoal/node_modules/.pnpm/@types+styled-components@5.1.34/node_modules/@types/styled-components/index.d.ts`,name:`TypeLiteral`}],description:``,name:`theme`,required:!1,tags:{},type:{name:`DefaultTheme`}},as:{defaultValue:null,declarations:[{fileName:`charcoal/node_modules/.pnpm/@types+styled-components@5.1.34/node_modules/@types/styled-components/index.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`undefined`}},forwardedAs:{defaultValue:null,declarations:[{fileName:`charcoal/node_modules/.pnpm/@types+styled-components@5.1.34/node_modules/@types/styled-components/index.d.ts`,name:`TypeLiteral`}],description:``,name:`forwardedAs`,required:!1,tags:{},type:{name:`undefined`}}},tags:{}}}catch{}try{F.displayName=`StyledCancelLayoutItemBodyPadding`,F.__docgenInfo={description:``,displayName:`StyledCancelLayoutItemBodyPadding`,filePath:`/home/runner/work/charcoal/charcoal/packages/react-sandbox/src/components/Layout/index.tsx`,methods:[],props:{ref:{defaultValue:null,declarations:[{fileName:`charcoal/node_modules/.pnpm/@types+react@18.3.20/node_modules/@types/react/index.d.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null`}},css:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/type.d.ts`,name:`Attributes`}],description:``,name:`css`,parent:{fileName:`charcoal/packages/react-sandbox/src/type.d.ts`,name:`Attributes`},required:!1,tags:{},type:{name:`CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>`}},wide:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Layout/index.tsx`,name:`StyledCancelLayoutItemBodyPaddingProps`}],description:``,name:`wide`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/Layout/index.tsx`,name:`StyledCancelLayoutItemBodyPaddingProps`},required:!0,tags:{},type:{name:`boolean`}},cancelTop:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Layout/index.tsx`,name:`StyledCancelLayoutItemBodyPaddingProps`}],description:``,name:`cancelTop`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/Layout/index.tsx`,name:`StyledCancelLayoutItemBodyPaddingProps`},required:!1,tags:{},type:{name:`boolean`}},theme:{defaultValue:null,declarations:[{fileName:`charcoal/node_modules/.pnpm/@types+styled-components@5.1.34/node_modules/@types/styled-components/index.d.ts`,name:`TypeLiteral`}],description:``,name:`theme`,required:!1,tags:{},type:{name:`DefaultTheme`}},as:{defaultValue:null,declarations:[{fileName:`charcoal/node_modules/.pnpm/@types+styled-components@5.1.34/node_modules/@types/styled-components/index.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`undefined`}},forwardedAs:{defaultValue:null,declarations:[{fileName:`charcoal/node_modules/.pnpm/@types+styled-components@5.1.34/node_modules/@types/styled-components/index.d.ts`,name:`TypeLiteral`}],description:``,name:`forwardedAs`,required:!1,tags:{},type:{name:`undefined`}}},tags:{}}}catch{}})),L,R,z;t((()=>{I(),L=u(),R={title:`react-sandbox/Layout`,component:h},z={render:e=>(0,L.jsx)(h,{...e,menu:(0,L.jsx)(L.Fragment,{children:`menu`}),header:(0,L.jsx)(L.Fragment,{children:`header`}),children:`children`})},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <Layout {...props} menu={<>menu</>} header={<>header</>}>
        children
      </Layout>;
  }
}`,...z.parameters?.docs?.source}}}}))();export{z as Default,R as default};