import{a as e,n as t}from"./chunk-BneVvdWh.js";import{At as n,Dt as r,Ht as i,ct as a,kt as o,nt as s}from"./iframe-A6E4gP06.js";import{n as c,t as l}from"./utils-jkDBq4TW.js";import{n as u,t as d}from"./ComponentAbstraction-DoRRNA9o.js";function f({size:e=16}){return(0,p.jsx)(m,{viewBox:`0 0 20 6`,width:e,height:e,children:(0,p.jsx)(`path`,{fillRule:`evenodd`,d:`M5,14.5 C3.61928813,14.5 2.5,13.3807119 2.5,12 C2.5,10.6192881 3.61928813,9.5 5,9.5
          C6.38071187,9.5 7.5,10.6192881 7.5,12 C7.5,13.3807119 6.38071187,14.5 5,14.5 Z M12,14.5
          C10.6192881,14.5 9.5,13.3807119 9.5,12 C9.5,10.6192881 10.6192881,9.5 12,9.5
          C13.3807119,9.5 14.5,10.6192881 14.5,12 C14.5,13.3807119 13.3807119,14.5 12,14.5 Z M19,14.5
          C17.6192881,14.5 16.5,13.3807119 16.5,12 C16.5,10.6192881 17.6192881,9.5 19,9.5
          C20.3807119,9.5 21.5,10.6192881 21.5,12 C21.5,13.3807119 20.3807119,14.5 19,14.5 Z`,transform:`translate(-2 -9)`})})}var p,m,h=t((()=>{o(),p=s(),m=n.svg`
  fill: currentColor;
`;try{f.displayName=`DotsIcon`,f.__docgenInfo={description:``,displayName:`DotsIcon`,filePath:`/home/runner/work/charcoal/charcoal/packages/react-sandbox/src/components/icons/DotsIcon.tsx`,methods:[],props:{size:{defaultValue:{value:`16`},declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/icons/DotsIcon.tsx`,name:`Props`}],description:``,name:`size`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/icons/DotsIcon.tsx`,name:`Props`},required:!1,tags:{},type:{name:`string | number`}},subLink:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/icons/DotsIcon.tsx`,name:`Props`}],description:``,name:`subLink`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/icons/DotsIcon.tsx`,name:`Props`},required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}}));function g({size:e=16,direction:t}){return(0,v.jsx)(`svg`,{viewBox:`0 0 10 8`,width:e,height:e,children:(0,v.jsx)(b,{strokeWidth:`2`,points:`1,2 5,6 9,2`,transform:_(t)})})}function _(e){switch(e){case y.Up:return`rotate(180 5 4)`;case y.Down:return;case y.Left:return`rotate(90 5 4)`;case y.Right:return`rotate(-90 5 4)`;default:return c(e)}}var v,y,b,x=t((()=>{o(),l(),v=s(),y=function(e){return e.Up=`up`,e.Down=`down`,e.Left=`left`,e.Right=`right`,e}({}),b=n.polyline`
  fill: none;
  stroke-linejoin: round;
  stroke-linecap: round;
  stroke: currentColor;
`;try{g.displayName=`WedgeIcon`,g.__docgenInfo={description:``,displayName:`WedgeIcon`,filePath:`/home/runner/work/charcoal/charcoal/packages/react-sandbox/src/components/icons/WedgeIcon.tsx`,methods:[],props:{size:{defaultValue:{value:`16`},declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/icons/WedgeIcon.tsx`,name:`Props`}],description:``,name:`size`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/icons/WedgeIcon.tsx`,name:`Props`},required:!1,tags:{},type:{name:`string | number`}},direction:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/icons/WedgeIcon.tsx`,name:`Props`}],description:``,name:`direction`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/icons/WedgeIcon.tsx`,name:`Props`},required:!0,tags:{},type:{name:`enum`,raw:`WedgeDirection`,value:[{value:`"up"`,description:``,fullComment:``,tags:{}},{value:`"down"`,description:``,fullComment:``,tags:{}},{value:`"left"`,description:``,fullComment:``,tags:{}},{value:`"right"`,description:``,fullComment:``,tags:{}}]}}},tags:{}}}catch{}}));function S(e,t,n=7){let r=(0,w.useMemo)(()=>{let r=Math.min(t,Math.max(e+Math.floor(n/2),n));if(r<=n)return Array.from({length:1+r-1},(e,t)=>1+t);{let e=r-(n-1)+2;return[1,`...`,...Array.from({length:1+r-e},(t,n)=>e+n)]}},[e,t,n]);return(0,w.useDebugValue)(r),r}function C({page:e,pageCount:t,pageRangeDisplayed:n,makeUrl:r}){let{Link:i}=u(),a=S(e,t,n),o=e<t,s=e>1;return(0,T.jsxs)(D,{children:[(0,T.jsx)(i,{to:r(Math.max(1,e-1)),children:(0,T.jsx)(O,{hidden:!s,"aria-disabled":!s,noBackground:!0,children:(0,T.jsx)(g,{size:16,direction:y.Left})})}),a.map(t=>t===`...`?(0,T.jsx)(k,{children:(0,T.jsx)(f,{size:20,subLink:!0})},t):t===e?(0,T.jsx)(O,{type:`button`,"aria-current":!0,children:(0,T.jsx)(A,{children:t})},t):(0,T.jsx)(i,{to:r(t),children:(0,T.jsx)(O,{type:`button`,children:(0,T.jsx)(A,{children:t})})},t)),(0,T.jsx)(i,{to:r(Math.min(t,e+1)),children:(0,T.jsx)(O,{hidden:!o,"aria-disabled":!o,noBackground:!0,children:(0,T.jsx)(g,{size:16,direction:y.Right})})})]})}var w,T,E,D,O,k,A,j=t((()=>{w=e(i(),1),o(),a(),h(),x(),d(),T=s(),E=(0,w.memo)(function({page:e,pageCount:t,pageRangeDisplayed:n,onChange:r}){let i=S(e,t,n),a=(0,w.useCallback)(e=>()=>{r(e)},[r]),o=e<t,s=e>1;return(0,T.jsxs)(D,{children:[(0,T.jsx)(O,{type:`button`,hidden:!s,disabled:!s,onClick:a(Math.max(1,e-1)),noBackground:!0,children:(0,T.jsx)(g,{size:16,direction:y.Left})}),i.map(t=>t===`...`?(0,T.jsx)(k,{children:(0,T.jsx)(f,{size:20})},t):t===e?(0,T.jsx)(O,{type:`button`,"aria-current":!0,children:(0,T.jsx)(A,{children:t})},t):(0,T.jsx)(O,{type:`button`,onClick:a(t),children:(0,T.jsx)(A,{children:t})},t)),(0,T.jsx)(O,{type:`button`,hidden:!o,disabled:!o,onClick:a(Math.min(t,e+1)),noBackground:!0,children:(0,T.jsx)(g,{size:16,direction:y.Right})})]})}),D=n.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`,O=n.button`
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

  ${({noBackground:e=!1})=>e&&r`
      /* stylelint-disable-next-line no-duplicate-selectors */
      &:hover {
        background: transparent;
      }
    `}
`,k=n(O).attrs({type:`button`,disabled:!0})`
  && {
    color: ${({theme:e})=>e.color.text3};
    background: none;
  }
`,A=`span`;try{C.displayName=`LinkPager`,C.__docgenInfo={description:``,displayName:`LinkPager`,filePath:`/home/runner/work/charcoal/charcoal/packages/react-sandbox/src/components/Pager/index.tsx`,methods:[],props:{makeUrl:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Pager/index.tsx`,name:`LinkPagerProps`}],description:``,name:`makeUrl`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/Pager/index.tsx`,name:`LinkPagerProps`},required:!0,tags:{},type:{name:`(page: number) => string`}},page:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Pager/index.tsx`,name:`CommonProps`}],description:``,name:`page`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/Pager/index.tsx`,name:`CommonProps`},required:!0,tags:{},type:{name:`number`}},pageCount:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Pager/index.tsx`,name:`CommonProps`}],description:``,name:`pageCount`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/Pager/index.tsx`,name:`CommonProps`},required:!0,tags:{},type:{name:`number`}},pageRangeDisplayed:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Pager/index.tsx`,name:`CommonProps`}],description:``,name:`pageRangeDisplayed`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/Pager/index.tsx`,name:`CommonProps`},required:!1,tags:{},type:{name:`number`}}},tags:{}}}catch{}}));function M(e){let[t,n]=(0,N.useState)(e.page);return(0,P.jsx)(E,{...e,page:t,onChange:n})}var N,P,F,I;t((()=>{j(),N=e(i(),1),P=s(),F={title:`react-sandbox/Pager`,component:E,parameters:{layout:`centered`}},I={args:{page:5,pageCount:10},render:e=>(0,P.jsx)(M,{...e})},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    page: 5,
    pageCount: 10
  },
  render: args => <PagerWithState {...args} />
}`,...I.parameters?.docs?.source}}}}))();export{I as Default,F as default};