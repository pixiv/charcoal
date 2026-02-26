import{r as l,j as a}from"./iframe-HsBtWllP.js";import{u as N}from"./useClassNames-CScJd2FU.js";import{I as ne}from"./index-D3lDYVb8.js";import"./preload-helper-C1FmrZbK.js";function ce(e,n,r=7){"use memo";const t=Math.min(n,Math.max(e+Math.floor(r/2),r)),i=(()=>{if(t<=r)return Array.from({length:1+t-1},(p,o)=>1+o);{const p=t-(r-1)+2;return[1,"...",...Array.from({length:1+t-p},(o,c)=>p+c)]}})();return l.useDebugValue(i),i}const re=l.createContext(null);function te(){const e=l.useContext(re);if(e==null)throw new Error("Pagination components must be used within a Pagination component");return e}function L({direction:e}){"use memo";const{page:n,pageCount:r,size:s,isLinkMode:t,makeUrl:i,LinkComponent:p,makeClickHandler:o,linkProps:c}=te(),m=e==="prev",d=m?Math.max(1,n-1):Math.min(r,n+1),g=m?n<=1:n>=r,h=N("charcoal-pagination-nav-button",c==null?void 0:c.className);return a.jsx(ne,{icon:m?"24/Prev":"24/Next",size:s,hidden:g,...t&&i?{component:p,href:i(d),"aria-disabled":g,...c,className:h}:{disabled:g,onClick:o(d),className:h}})}function pe({value:e}){"use memo";const{page:n,size:r,isLinkMode:s,makeUrl:t,LinkComponent:i,makeClickHandler:p,linkProps:o}=te(),c=N("charcoal-pagination-button",o==null?void 0:o.className);return e==="..."?a.jsx(ne,{icon:"24/Dot",size:r,disabled:!0,className:"charcoal-pagination-spacer","aria-hidden":!0}):e===n?a.jsx("span",{className:"charcoal-pagination-button","aria-current":"page",children:e}):typeof e!="number"?null:s&&t?a.jsx(i,{href:t(e),...o,className:c,children:e}):a.jsx("button",{type:"button",className:"charcoal-pagination-button",onClick:p(e),children:e})}function u({page:e,pageCount:n,pageRangeDisplayed:r,size:s="M",onChange:t,makeUrl:i,component:p="a",linkProps:o,className:c,...m}){"use memo";const d=ce(e,n,r),g=i!==void 0,h=f=>()=>t==null?void 0:t(f),oe=N("charcoal-pagination",c),ie={page:e,pageCount:n,size:s,isLinkMode:g,makeUrl:i,LinkComponent:p,makeClickHandler:h,linkProps:o};return a.jsx(re.Provider,{value:ie,children:a.jsxs("nav",{"data-size":s,"aria-label":"Pagination",...m,className:oe,children:[a.jsx(L,{direction:"prev"}),d.map(f=>a.jsx(pe,{value:f},f)),a.jsx(L,{direction:"next"})]})})}try{u.displayName="Pagination",u.__docgenInfo={description:"",displayName:"Pagination",props:{page:{defaultValue:null,description:"",name:"page",required:!0,type:{name:"number"}},pageCount:{defaultValue:null,description:"",name:"pageCount",required:!0,type:{name:"number"}},pageRangeDisplayed:{defaultValue:null,description:"",name:"pageRangeDisplayed",required:!1,type:{name:"enum",value:[{value:"5"},{value:"7"}]}},size:{defaultValue:{value:"M"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"S"'},{value:'"M"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((newPage: number) => void)"}},makeUrl:{defaultValue:null,description:"",name:"makeUrl",required:!1,type:{name:"((page: number) => string)"}},component:{defaultValue:{value:"'a'"},description:"The component used for link elements. Receives `href`, `className`, and `children`.",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},linkProps:{defaultValue:null,description:"Additional props passed to all link elements (e.g. Next.js Link's scroll, prefetch).",name:"linkProps",required:!1,type:{name:'Omit<PropsWithoutRef<ComponentProps<T>>, "children" | "href">'}}}}}catch{}function le(e){const[n,r]=l.useState(e.page);return a.jsx(u,{page:n,pageCount:e.pageCount,pageRangeDisplayed:e.pageRangeDisplayed,size:e.size,onChange:r})}function z(e){const n=window.location.hash.match(/^#page-(\d+)$/);return n?parseInt(n[1],10):e}function se(e){const[n,r]=l.useState(()=>z(e.page));return l.useEffect(()=>{const s=()=>r(z(e.page));return window.addEventListener("hashchange",s),()=>window.removeEventListener("hashchange",s)},[e.page]),a.jsxs("div",{children:[a.jsxs("p",{style:{marginBottom:8,fontSize:14,color:"#666"},children:["Current page: ",n]}),a.jsx(u,{page:n,pageCount:e.pageCount,pageRangeDisplayed:e.pageRangeDisplayed,size:e.size,makeUrl:s=>`#page-${s}`,linkProps:e.linkProps})]})}const he={title:"react/Pagination",component:u,parameters:{layout:"centered"},render:e=>a.jsx(le,{...e})},P={args:{page:5,pageCount:10}},k={args:{page:1,pageCount:10}},C={args:{page:10,pageCount:10}},x={args:{page:50,pageCount:103}},y={args:{page:5,pageCount:10,size:"S"}},v={args:{page:5,pageCount:10,pageRangeDisplayed:5,size:"S"}},S={args:{page:5,pageCount:10},render:e=>a.jsx(se,{...e})},j={args:{page:5,pageCount:10,linkProps:{scroll:"marker"}},render:e=>a.jsxs("div",{children:[a.jsx("p",{style:{marginBottom:8,fontSize:14,color:"#666"},children:"linkProps を渡した例（scroll: 'marker' は Next.js Link 用）"}),a.jsx(se,{...e})]})},b={render:()=>a.jsx(u,{page:5,pageCount:100,component:"a",makeUrl:e=>`https://example.com?page=${e}`})};var w,M,_;P.parameters={...P.parameters,docs:{...(w=P.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    page: 5,
    pageCount: 10
  }
}`,...(_=(M=P.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var V,R,q;k.parameters={...k.parameters,docs:{...(V=k.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    page: 1,
    pageCount: 10
  }
}`,...(q=(R=k.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var D,E,I;C.parameters={...C.parameters,docs:{...(D=C.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    page: 10,
    pageCount: 10
  }
}`,...(I=(E=C.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var W,B,F;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    page: 50,
    pageCount: 103
  }
}`,...(F=(B=x.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var U,H,A;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    page: 5,
    pageCount: 10,
    size: 'S'
  }
}`,...(A=(H=y.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var $,T,O;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    page: 5,
    pageCount: 10,
    pageRangeDisplayed: 5,
    size: 'S'
  }
}`,...(O=(T=v.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var G,J,K;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    page: 5,
    pageCount: 10
  },
  render: args => <LinkPaginationWithState {...args} />
}`,...(K=(J=S.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;j.parameters={...j.parameters,docs:{...(Q=j.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(X=j.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    return <Pagination page={5} pageCount={100} component="a" makeUrl={p => \`https://example.com?page=\${p}\`} />;
  }
}`,...(ae=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};export{b as ComponentAStory,P as Default,k as FirstPage,C as LastPage,S as LinkPaginationStory,j as LinkPaginationWithLinkProps,x as ManyPages,v as PageRange5,y as SizeS,he as default};
