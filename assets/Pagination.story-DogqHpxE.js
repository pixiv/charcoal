import{r as u,j as a}from"./iframe-Ds72AxBl.js";import{u as L}from"./useClassNames-B44euzBR.js";import{I as re}from"./index-WXHXgwB5.js";import"./preload-helper-C1FmrZbK.js";function le(e,r,n=7){"use memo";const s=Math.min(r,Math.max(e+Math.floor(n/2),n)),p=(()=>{if(s<=n)return Array.from({length:1+s-1},(i,o)=>1+o);{const i=s-(n-1)+2;return[1,"...",...Array.from({length:1+s-i},(o,c)=>i+c)]}})();return u.useDebugValue(p),p}const te=u.createContext(null);function se(){const e=u.useContext(te);if(e==null)throw new Error("Pagination components must be used within a Pagination component");return e}function z({direction:e,ariaLabel:r}){"use memo";const{page:n,pageCount:t,size:s,isLinkMode:p,makeUrl:i,LinkComponent:o,makeClickHandler:c,linkProps:l}=se(),g=e==="prev",h=g?Math.max(1,n-1):Math.min(t,n+1),d=g?n<=1:n>=t,f=L("charcoal-pagination-nav-button",l==null?void 0:l.className);return a.jsx(re,{icon:g?"24/Prev":"24/Next",size:s,hidden:d,"aria-label":r,...p&&i?{component:o,href:i(h),"aria-disabled":d,...l,className:f}:{disabled:d,onClick:c(h),className:f}})}function ue({value:e}){"use memo";const{page:r,size:n,isLinkMode:t,makeUrl:s,LinkComponent:p,makeClickHandler:i,linkProps:o}=se(),c=L("charcoal-pagination-button",o==null?void 0:o.className);return e==="..."?a.jsx(re,{icon:"24/Dot",size:n,disabled:!0,className:"charcoal-pagination-spacer","aria-hidden":!0}):e===r?a.jsx("span",{className:"charcoal-pagination-button","aria-current":"page",children:e}):typeof e!="number"?null:t&&s?a.jsx(p,{href:s(e),...o,className:c,children:e}):a.jsx("button",{type:"button",className:"charcoal-pagination-button",onClick:i(e),children:e})}function m({page:e,pageCount:r,pageRangeDisplayed:n,size:t="M",onChange:s,makeUrl:p,component:i="a",linkProps:o,className:c,ariaLabelNext:l="Next",ariaLabelPrev:g="Previous",...h}){"use memo";const d=le(e,r,n),f=p!==void 0,ie=P=>()=>s==null?void 0:s(P),pe=L("charcoal-pagination",c),ce={page:e,pageCount:r,size:t,isLinkMode:f,makeUrl:p,LinkComponent:i,makeClickHandler:ie,linkProps:o};return a.jsx(te.Provider,{value:ce,children:a.jsxs("nav",{"data-size":t,"aria-label":"Pagination",...h,className:pe,children:[a.jsx(z,{direction:"prev",ariaLabel:g}),d.map(P=>a.jsx(ue,{value:P},P)),a.jsx(z,{direction:"next",ariaLabel:l})]})})}try{m.displayName="Pagination",m.__docgenInfo={description:"",displayName:"Pagination",props:{page:{defaultValue:null,description:"",name:"page",required:!0,type:{name:"number"}},pageCount:{defaultValue:null,description:"",name:"pageCount",required:!0,type:{name:"number"}},pageRangeDisplayed:{defaultValue:null,description:"",name:"pageRangeDisplayed",required:!1,type:{name:"enum",value:[{value:"5"},{value:"7"}]}},size:{defaultValue:{value:"M"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"S"'},{value:'"M"'}]}},ariaLabelPrev:{defaultValue:{value:"Previous"},description:"",name:"ariaLabelPrev",required:!1,type:{name:"string"}},ariaLabelNext:{defaultValue:{value:"Next"},description:"",name:"ariaLabelNext",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((newPage: number) => void)"}},makeUrl:{defaultValue:null,description:"",name:"makeUrl",required:!1,type:{name:"((page: number) => string)"}},component:{defaultValue:{value:"'a'"},description:"The component used for link elements. Receives `href`, `className`, and `children`.",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},linkProps:{defaultValue:null,description:"Additional props passed to all link elements (e.g. Next.js Link's scroll, prefetch).",name:"linkProps",required:!1,type:{name:'Omit<PropsWithoutRef<ComponentProps<T>>, "children" | "href">'}}}}}catch{}function me(e){const[r,n]=u.useState(e.page);return a.jsx(m,{page:r,pageCount:e.pageCount,pageRangeDisplayed:e.pageRangeDisplayed,size:e.size,onChange:n})}function w(e){const r=window.location.hash.match(/^#page-(\d+)$/);return r?parseInt(r[1],10):e}function oe(e){const[r,n]=u.useState(()=>w(e.page));return u.useEffect(()=>{const t=()=>n(w(e.page));return window.addEventListener("hashchange",t),()=>window.removeEventListener("hashchange",t)},[e.page]),a.jsxs("div",{children:[a.jsxs("p",{style:{marginBottom:8,fontSize:14,color:"#666"},children:["Current page: ",r]}),a.jsx(m,{page:r,pageCount:e.pageCount,pageRangeDisplayed:e.pageRangeDisplayed,size:e.size,makeUrl:t=>`#page-${t}`,linkProps:e.linkProps})]})}const Pe={title:"react/Pagination",component:m,parameters:{layout:"centered"},render:e=>a.jsx(me,{...e})},x={args:{page:5,pageCount:10}},k={args:{page:1,pageCount:10}},C={args:{page:10,pageCount:10}},y={args:{page:50,pageCount:103}},v={args:{page:5,pageCount:10,size:"S"}},b={args:{page:5,pageCount:10,pageRangeDisplayed:5,size:"S"}},S={args:{page:5,pageCount:10},render:e=>a.jsx(oe,{...e})},j={args:{page:5,pageCount:10,linkProps:{scroll:"marker"}},render:e=>a.jsxs("div",{children:[a.jsx("p",{style:{marginBottom:8,fontSize:14,color:"#666"},children:"linkProps を渡した例（scroll: 'marker' は Next.js Link 用）"}),a.jsx(oe,{...e})]})},N={render:()=>a.jsx(m,{page:5,pageCount:100,component:"a",makeUrl:e=>`https://example.com?page=${e}`})};var M,V,_;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    page: 5,
    pageCount: 10
  }
}`,...(_=(V=x.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var q,R,D;k.parameters={...k.parameters,docs:{...(q=k.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    page: 1,
    pageCount: 10
  }
}`,...(D=(R=k.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var E,I,W;C.parameters={...C.parameters,docs:{...(E=C.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    page: 10,
    pageCount: 10
  }
}`,...(W=(I=C.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var B,F,U;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    page: 50,
    pageCount: 103
  }
}`,...(U=(F=y.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var H,A,$;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    page: 5,
    pageCount: 10,
    size: 'S'
  }
}`,...($=(A=v.parameters)==null?void 0:A.docs)==null?void 0:$.source}}};var T,O,G;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    page: 5,
    pageCount: 10,
    pageRangeDisplayed: 5,
    size: 'S'
  }
}`,...(G=(O=b.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var J,K,Q;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    page: 5,
    pageCount: 10
  },
  render: args => <LinkPaginationWithState {...args} />
}`,...(Q=(K=S.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=j.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,ne;N.parameters={...N.parameters,docs:{...(ee=N.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    return <Pagination page={5} pageCount={100} component="a" makeUrl={p => \`https://example.com?page=\${p}\`} />;
  }
}`,...(ne=(ae=N.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};export{N as ComponentAStory,x as Default,k as FirstPage,C as LastPage,S as LinkPaginationStory,j as LinkPaginationWithLinkProps,y as ManyPages,b as PageRange5,v as SizeS,Pe as default};
