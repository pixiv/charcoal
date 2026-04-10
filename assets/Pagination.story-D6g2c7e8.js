import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Ht as n,ct as r,nt as i}from"./iframe-BqMtNU_q.js";import{n as a,t as o}from"./useClassNames-DmjGRPZ8.js";import{n as s,t as c}from"./IconButton-DLRxKLwW.js";var l=t((()=>{}));function u(e,t,n=7){"use memo";let r=Math.min(t,Math.max(e+Math.floor(n/2),n)),i=(()=>{if(r<=n)return Array.from({length:1+r-1},(e,t)=>1+t);{let e=r-(n-1)+2;return[1,`...`,...Array.from({length:1+r-e},(t,n)=>e+n)]}})();return(0,d.useDebugValue)(i),i}var d,f=t((()=>{d=e(n(),1),r()}));function p(){let e=(0,m.useContext)(h);if(e==null)throw Error(`Pagination components must be used within a Pagination component`);return e}var m,h,g=t((()=>{m=e(n(),1),h=(0,m.createContext)(null)}));function _({direction:e,ariaLabel:t}){"use memo";let{page:n,pageCount:r,size:i,isLinkMode:o,makeUrl:s,LinkComponent:l,makeClickHandler:u,linkProps:d}=p(),f=e===`prev`,m=f?Math.max(1,n-1):Math.min(r,n+1),h=f?n<=1:n>=r,g=a(`charcoal-pagination-nav-button`,d?.className);return(0,b.jsx)(c,{icon:f?`24/Prev`:`24/Next`,size:i,hidden:h,"aria-label":t,...o&&s?{component:l,href:s(m),"aria-disabled":h,...d,className:g}:{disabled:h,onClick:u(m),className:g}})}function v({value:e}){"use memo";let{page:t,size:n,isLinkMode:r,makeUrl:i,LinkComponent:o,makeClickHandler:s,linkProps:l}=p(),u=a(`charcoal-pagination-button`,l?.className);return e===`...`?(0,b.jsx)(c,{icon:`24/Dot`,size:n,disabled:!0,className:`charcoal-pagination-spacer`,"aria-hidden":!0}):e===t?(0,b.jsx)(`span`,{className:`charcoal-pagination-button`,"aria-current":`page`,children:e}):typeof e==`number`?r&&i?(0,b.jsx)(o,{href:i(e),...l,className:u,children:e}):(0,b.jsx)(`button`,{type:`button`,className:`charcoal-pagination-button`,onClick:s(e),children:e}):null}function y({page:e,pageCount:t,pageRangeDisplayed:n,size:r=`M`,onChange:i,makeUrl:o,component:s=`a`,linkProps:c,className:l,ariaLabelNext:d=`Next`,ariaLabelPrev:f=`Previous`,...p}){"use memo";let m=u(e,t,n),g=o!==void 0,y=e=>()=>i?.(e),x=a(`charcoal-pagination`,l),S={page:e,pageCount:t,size:r,isLinkMode:g,makeUrl:o,LinkComponent:s,makeClickHandler:y,linkProps:c};return(0,b.jsx)(h.Provider,{value:S,children:(0,b.jsxs)(`nav`,{"data-size":r,"aria-label":`Pagination`,...p,className:x,children:[(0,b.jsx)(_,{direction:`prev`,ariaLabel:f}),m.map(e=>(0,b.jsx)(v,{value:e},e)),(0,b.jsx)(_,{direction:`next`,ariaLabel:d})]})})}var b,x=t((()=>{l(),f(),o(),s(),g(),b=i();try{y.displayName=`Pagination`,y.__docgenInfo={description:``,displayName:`Pagination`,filePath:`/home/runner/work/charcoal/charcoal/packages/react/src/components/Pagination/index.tsx`,methods:[],props:{page:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Pagination/index.tsx`,name:`PaginationCommonProps`}],description:``,name:`page`,parent:{fileName:`charcoal/packages/react/src/components/Pagination/index.tsx`,name:`PaginationCommonProps`},required:!0,tags:{},type:{name:`number`}},pageCount:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Pagination/index.tsx`,name:`PaginationCommonProps`}],description:``,name:`pageCount`,parent:{fileName:`charcoal/packages/react/src/components/Pagination/index.tsx`,name:`PaginationCommonProps`},required:!0,tags:{},type:{name:`number`}},pageRangeDisplayed:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Pagination/index.tsx`,name:`PaginationCommonProps`}],description:``,name:`pageRangeDisplayed`,parent:{fileName:`charcoal/packages/react/src/components/Pagination/index.tsx`,name:`PaginationCommonProps`},required:!1,tags:{},type:{name:`enum`,raw:`PageRangeDisplayed`,value:[{value:`5`},{value:`7`}]}},size:{defaultValue:{value:`M`},declarations:[{fileName:`charcoal/packages/react/src/components/Pagination/index.tsx`,name:`PaginationCommonProps`}],description:``,name:`size`,parent:{fileName:`charcoal/packages/react/src/components/Pagination/index.tsx`,name:`PaginationCommonProps`},required:!1,tags:{},type:{name:`enum`,raw:`Size`,value:[{value:`"S"`},{value:`"M"`}]}},ariaLabelPrev:{defaultValue:{value:`Previous`},declarations:[{fileName:`charcoal/packages/react/src/components/Pagination/index.tsx`,name:`PaginationCommonProps`}],description:``,name:`ariaLabelPrev`,parent:{fileName:`charcoal/packages/react/src/components/Pagination/index.tsx`,name:`PaginationCommonProps`},required:!1,tags:{},type:{name:`string`}},ariaLabelNext:{defaultValue:{value:`Next`},declarations:[{fileName:`charcoal/packages/react/src/components/Pagination/index.tsx`,name:`PaginationCommonProps`}],description:``,name:`ariaLabelNext`,parent:{fileName:`charcoal/packages/react/src/components/Pagination/index.tsx`,name:`PaginationCommonProps`},required:!1,tags:{},type:{name:`string`}},css:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/type.d.ts`,name:`Attributes`}],description:``,name:`css`,parent:{fileName:`charcoal/packages/react-sandbox/src/type.d.ts`,name:`Attributes`},required:!1,tags:{},type:{name:`CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>`}},onChange:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Pagination/index.tsx`,name:`TypeLiteral`},{fileName:`charcoal/packages/react/src/components/Pagination/index.tsx`,name:`TypeLiteral`}],description:``,name:`onChange`,required:!1,tags:{},type:{name:`((newPage: number) => void)`}},makeUrl:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Pagination/index.tsx`,name:`TypeLiteral`},{fileName:`charcoal/packages/react/src/components/Pagination/index.tsx`,name:`TypeLiteral`}],description:``,name:`makeUrl`,required:!1,tags:{},type:{name:`((page: number) => string)`}},component:{defaultValue:{value:`'a'`},declarations:[{fileName:`charcoal/packages/react/src/components/Pagination/index.tsx`,name:`TypeLiteral`},{fileName:`charcoal/packages/react/src/components/Pagination/index.tsx`,name:`TypeLiteral`}],description:"The component used for link elements. Receives `href`, `className`, and `children`.",name:`component`,required:!1,tags:{default:`'a'`},type:{name:`ElementType<any, keyof IntrinsicElements>`}},linkProps:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Pagination/index.tsx`,name:`TypeLiteral`},{fileName:`charcoal/packages/react/src/components/Pagination/index.tsx`,name:`TypeLiteral`}],description:`Additional props passed to all link elements (e.g. Next.js Link's scroll, prefetch).`,name:`linkProps`,required:!1,tags:{},type:{name:`Omit<PropsWithoutRef<ComponentProps<T>>, "children" | "href">`}}},tags:{}}}catch{}}));function S(e){let[t,n]=(0,T.useState)(e.page);return(0,E.jsx)(y,{page:t,pageCount:e.pageCount,pageRangeDisplayed:e.pageRangeDisplayed,size:e.size,onChange:n})}function C(e){let t=window.location.hash.match(/^#page-(\d+)$/);return t?parseInt(t[1],10):e}function w(e){let[t,n]=(0,T.useState)(()=>C(e.page));return(0,T.useEffect)(()=>{let t=()=>n(C(e.page));return window.addEventListener(`hashchange`,t),()=>window.removeEventListener(`hashchange`,t)},[e.page]),(0,E.jsxs)(`div`,{children:[(0,E.jsxs)(`p`,{style:{marginBottom:8,fontSize:14,color:`#666`},children:[`Current page: `,t]}),(0,E.jsx)(y,{page:t,pageCount:e.pageCount,pageRangeDisplayed:e.pageRangeDisplayed,size:e.size,makeUrl:e=>`#page-${e}`,linkProps:e.linkProps})]})}var T,E,D,O,k,A,j,M,N,P,F,I;t((()=>{T=e(n(),1),x(),E=i(),D={title:`react/Pagination`,component:y,parameters:{layout:`centered`},render:e=>(0,E.jsx)(S,{...e})},O={args:{page:5,pageCount:10}},k={args:{page:1,pageCount:10}},A={args:{page:10,pageCount:10}},j={args:{page:50,pageCount:103}},M={args:{page:5,pageCount:10,size:`S`}},N={args:{page:5,pageCount:10,pageRangeDisplayed:5,size:`S`}},P={args:{page:5,pageCount:10},render:e=>(0,E.jsx)(w,{...e})},F={args:{page:5,pageCount:10,linkProps:{scroll:`marker`}},render:e=>(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`p`,{style:{marginBottom:8,fontSize:14,color:`#666`},children:`linkProps を渡した例（scroll: 'marker' は Next.js Link 用）`}),(0,E.jsx)(w,{...e})]})},I={render:()=>(0,E.jsx)(y,{page:5,pageCount:100,component:`a`,makeUrl:e=>`https://example.com?page=${e}`})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    page: 5,
    pageCount: 10
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    page: 1,
    pageCount: 10
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    page: 10,
    pageCount: 10
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    page: 50,
    pageCount: 103
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    page: 5,
    pageCount: 10,
    size: 'S'
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    page: 5,
    pageCount: 10,
    pageRangeDisplayed: 5,
    size: 'S'
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    page: 5,
    pageCount: 10
  },
  render: args => <LinkPaginationWithState {...args} />
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    page: 5,
    pageCount: 10,
    linkProps: {
      scroll: 'marker'
    }
  },
  render: args => <div>
      <p style={{
      marginBottom: 8,
      fontSize: 14,
      color: '#666'
    }}>
        linkProps を渡した例（scroll: &apos;marker&apos; は Next.js Link 用）
      </p>
      <LinkPaginationWithState {...args} />
    </div>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Pagination page={5} pageCount={100} component="a" makeUrl={p => \`https://example.com?page=\${p}\`} />;
  }
}`,...I.parameters?.docs?.source}}}}))();export{I as ComponentAStory,O as Default,k as FirstPage,A as LastPage,P as LinkPaginationStory,F as LinkPaginationWithLinkProps,j as ManyPages,N as PageRange5,M as SizeS,D as default};