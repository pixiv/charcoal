import{r as n,t as l,q as p}from"./iframe-ruKs1uur.js";const a=e=>n.isValidElement(e)&&!!e.props.children,u=e=>typeof e>"u"||e===null||typeof e=="boolean"||JSON.stringify(e)==="{}"?"":e.toString(),o=e=>!Array.isArray(e)&&!n.isValidElement(e)?u(e):n.Children.toArray(e).reduce((t,r)=>{let i="";return n.isValidElement(r)&&a(r)?i=o(r.props.children):n.isValidElement(r)&&!a(r)?i="":i=u(r),t.concat(i)},""),s=p.div.attrs(({children:e,title:t=o(e)})=>({title:t!==""?t:void 0}))`
  overflow: hidden;
  line-height: ${e=>e.lineHeight}px;
  /* For english */
  overflow-wrap: break-word;

  ${({lineLimit:e=1,lineHeight:t})=>e===1?l`
          text-overflow: ellipsis;
          white-space: nowrap;
        `:l`
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: ${e};
          /* Fallback for -webkit-line-clamp */
          max-height: ${t*e}px;
        `}
`;try{s.displayName="TextEllipsis",s.__docgenInfo={description:"複数行のテキストに表示行数制限を設けて`...`で省略する",displayName:"TextEllipsis",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},lineLimit:{defaultValue:null,description:"",name:"lineLimit",required:!1,type:{name:"number"}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!0,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}export{s as T};
