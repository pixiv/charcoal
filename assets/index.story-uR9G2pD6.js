import{j as r,q as m,r as x,t as q}from"./iframe-Da7rVJAF.js";import{u as V}from"./utils-DNvo9QYw.js";import{u as L}from"./ComponentAbstraction-CTW6VCm8.js";import"./preload-helper-C1FmrZbK.js";function g({size:e=16}){return r.jsx(M,{viewBox:"0 0 20 6",width:e,height:e,children:r.jsx("path",{fillRule:"evenodd",d:`M5,14.5 C3.61928813,14.5 2.5,13.3807119 2.5,12 C2.5,10.6192881 3.61928813,9.5 5,9.5
          C6.38071187,9.5 7.5,10.6192881 7.5,12 C7.5,13.3807119 6.38071187,14.5 5,14.5 Z M12,14.5
          C10.6192881,14.5 9.5,13.3807119 9.5,12 C9.5,10.6192881 10.6192881,9.5 12,9.5
          C13.3807119,9.5 14.5,10.6192881 14.5,12 C14.5,13.3807119 13.3807119,14.5 12,14.5 Z M19,14.5
          C17.6192881,14.5 16.5,13.3807119 16.5,12 C16.5,10.6192881 17.6192881,9.5 19,9.5
          C20.3807119,9.5 21.5,10.6192881 21.5,12 C21.5,13.3807119 20.3807119,14.5 19,14.5 Z`,transform:"translate(-2 -9)"})})}const M=m.svg`
  fill: currentColor;
`;try{g.displayName="DotsIcon",g.__docgenInfo={description:"",displayName:"DotsIcon",props:{size:{defaultValue:{value:"16"},description:"",name:"size",required:!1,type:{name:"string | number"}},subLink:{defaultValue:null,description:"",name:"subLink",required:!1,type:{name:"boolean"}}}}}catch{}var h=(e=>(e.Up="up",e.Down="down",e.Left="left",e.Right="right",e))(h||{});function p({size:e=16,direction:t}){return r.jsx("svg",{viewBox:"0 0 10 8",width:e,height:e,children:r.jsx(I,{strokeWidth:"2",points:"1,2 5,6 9,2",transform:z(t)})})}function z(e){switch(e){case"up":return"rotate(180 5 4)";case"down":return;case"left":return"rotate(90 5 4)";case"right":return"rotate(-90 5 4)";default:return V(e)}}const I=m.polyline`
  fill: none;
  stroke-linejoin: round;
  stroke-linecap: round;
  stroke: currentColor;
`;try{p.displayName="WedgeIcon",p.__docgenInfo={description:"",displayName:"WedgeIcon",props:{size:{defaultValue:{value:"16"},description:"",name:"size",required:!1,type:{name:"string | number"}},direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"up"'},{value:'"down"'},{value:'"left"'},{value:'"right"'}]}}}}}catch{}function v(e,t,o=7){const l=x.useMemo(()=>{const c=Math.min(t,Math.max(e+Math.floor(o/2),o));if(c<=o)return Array.from({length:1+c-1},(a,d)=>1+d);{const a=c-(o-1)+2;return[1,"...",...Array.from({length:1+c-a},(d,n)=>a+n)]}},[e,t,o]);return x.useDebugValue(l),l}const C=x.memo(function({page:t,pageCount:o,pageRangeDisplayed:l,onChange:u}){const c=v(t,o,l),a=x.useCallback(i=>()=>{u(i)},[u]),d=t<o,n=t>1;return r.jsxs(w,{children:[r.jsx(s,{type:"button",hidden:!n,disabled:!n,onClick:a(Math.max(1,t-1)),noBackground:!0,children:r.jsx(p,{size:16,direction:h.Left})}),c.map(i=>i==="..."?r.jsx(P,{children:r.jsx(g,{size:20})},i):i===t?r.jsx(s,{type:"button","aria-current":!0,children:r.jsx(b,{children:i})},i):r.jsx(s,{type:"button",onClick:a(i),children:r.jsx(b,{children:i})},i)),r.jsx(s,{type:"button",hidden:!d,disabled:!d,onClick:a(Math.min(o,t+1)),noBackground:!0,children:r.jsx(p,{size:16,direction:h.Right})})]})});function y({page:e,pageCount:t,pageRangeDisplayed:o,makeUrl:l}){const{Link:u}=L(),c=v(e,t,o),a=e<t,d=e>1;return r.jsxs(w,{children:[r.jsx(u,{to:l(Math.max(1,e-1)),children:r.jsx(s,{hidden:!d,"aria-disabled":!d,noBackground:!0,children:r.jsx(p,{size:16,direction:h.Left})})}),c.map(n=>n==="..."?r.jsx(P,{children:r.jsx(g,{size:20,subLink:!0})},n):n===e?r.jsx(s,{type:"button","aria-current":!0,children:r.jsx(b,{children:n})},n):r.jsx(u,{to:l(n),children:r.jsx(s,{type:"button",children:r.jsx(b,{children:n})})},n)),r.jsx(u,{to:l(Math.min(t,e+1)),children:r.jsx(s,{hidden:!a,"aria-disabled":!a,noBackground:!0,children:r.jsx(p,{size:16,direction:h.Right})})})]})}const w=m.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`,s=m.button`
  font-size: 1rem;
  line-height: calc(1em + 8px);
  text-decoration: none;
  border: none;
  outline: none;
  touch-action: manipulation;
  user-select: none;
  transition:
    box-shadow 0.2s ease 0s,
    color 0.2s ease 0s,
    background 0.2s ease 0s,
    opacity 0.2s ease 0s;

  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: content-box;
  min-width: 24px;
  min-height: 24px;
  padding: 8px;
  cursor: pointer;
  font-weight: bold;
  /* HACK:
   * Safari doesn't correctly repaint the elements when they're reordered in response to interaction.
   * This forces it to repaint them. This doesn't work if put on the parents either, has to be here.
   */
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-transform: translateZ(0);

  &[hidden] {
    visibility: hidden;
    display: block;
  }

  border-radius: 48px;

  background: transparent;
  color: ${({theme:e})=>e.color.text3};

  &:hover {
    background: ${({theme:e})=>e.color.surface3};
    color: ${({theme:e})=>e.color.text2};
  }

  &[aria-current] {
    background-color: ${({theme:e})=>e.color.surface6};
    color: ${({theme:e})=>e.color.text5};
  }

  &[aria-current]:hover {
    background-color: ${({theme:e})=>e.color.surface6};
    color: ${({theme:e})=>e.color.text5};
  }

  ${({noBackground:e=!1})=>e&&q`
      /* stylelint-disable-next-line no-duplicate-selectors */
      &:hover {
        background: transparent;
      }
    `}
`,P=m(s).attrs({type:"button",disabled:!0})`
  && {
    color: ${({theme:e})=>e.color.text3};
    background: none;
  }
`,b="span";try{y.displayName="LinkPager",y.__docgenInfo={description:"",displayName:"LinkPager",props:{makeUrl:{defaultValue:null,description:"",name:"makeUrl",required:!0,type:{name:"(page: number) => string"}},page:{defaultValue:null,description:"",name:"page",required:!0,type:{name:"number"}},pageCount:{defaultValue:null,description:"",name:"pageCount",required:!0,type:{name:"number"}},pageRangeDisplayed:{defaultValue:null,description:"",name:"pageRangeDisplayed",required:!1,type:{name:"number"}}}}}catch{}try{Pager.displayName="Pager",Pager.__docgenInfo={description:"",displayName:"Pager",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(newPage: number) => void"}},page:{defaultValue:null,description:"",name:"page",required:!0,type:{name:"number"}},pageCount:{defaultValue:null,description:"",name:"pageCount",required:!0,type:{name:"number"}},pageRangeDisplayed:{defaultValue:null,description:"",name:"pageRangeDisplayed",required:!1,type:{name:"number"}}}}}catch{}const A={title:"react-sandbox/Pager",component:C,args:{page:5,pageCount:10}},f={render:e=>r.jsx(C,{...e,children:"children"})};var j,_,k;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: props => {
    return <Pager {...props}>children</Pager>;
  }
}`,...(k=(_=f.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};export{f as Default,A as default};
