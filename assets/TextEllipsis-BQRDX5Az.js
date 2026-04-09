import{a as e,n as t}from"./chunk-BneVvdWh.js";import{At as n,Dt as r,Pt as i,kt as a}from"./iframe-BIP2GiWG.js";var o,s,c,l,u=t((()=>{o=e(i(),1),s=e=>(0,o.isValidElement)(e)&&!!e.props.children,c=e=>e==null||typeof e==`boolean`||JSON.stringify(e)===`{}`?``:e.toString(),l=e=>!Array.isArray(e)&&!(0,o.isValidElement)(e)?c(e):o.Children.toArray(e).reduce((e,t)=>{let n=``;return n=(0,o.isValidElement)(t)&&s(t)?l(t.props.children):(0,o.isValidElement)(t)&&!s(t)?``:c(t),e.concat(n)},``)})),d,f=t((()=>{a(),u(),d=n.div.attrs(({children:e,title:t=l(e)})=>({title:t===``?void 0:t}))`
  overflow: hidden;
  line-height: ${e=>e.lineHeight}px;
  /* For english */
  overflow-wrap: break-word;

  ${({lineLimit:e=1,lineHeight:t})=>e===1?r`
          text-overflow: ellipsis;
          white-space: nowrap;
        `:r`
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: ${e};
          /* Fallback for -webkit-line-clamp */
          max-height: ${t*e}px;
        `}
`;try{d.displayName=`TextEllipsis`,d.__docgenInfo={description:"複数行のテキストに表示行数制限を設けて`...`で省略する",displayName:`TextEllipsis`,props:{ref:{defaultValue:null,description:``,name:`ref`,required:!1,type:{name:`((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null`}},lineHeight:{defaultValue:null,description:``,name:`lineHeight`,required:!0,type:{name:`number`}},lineLimit:{defaultValue:null,description:``,name:`lineLimit`,required:!1,type:{name:`number`}},theme:{defaultValue:null,description:``,name:`theme`,required:!1,type:{name:`DefaultTheme`}},as:{defaultValue:null,description:``,name:`as`,required:!1,type:{name:`undefined`}},forwardedAs:{defaultValue:null,description:``,name:`forwardedAs`,required:!1,type:{name:`undefined`}}}}}catch{}}));export{f as n,d as t};