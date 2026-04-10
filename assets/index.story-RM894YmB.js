import{a as e,n as t}from"./chunk-BneVvdWh.js";import{At as n,Dt as r,Ht as i,kt as a,nt as o}from"./iframe-BqMtNU_q.js";import{r as s,t as c}from"./hooks-DVxYJWQP.js";function l({children:e,show:t,pre:n}){let r=(0,u.useRef)(null);return(0,f.jsx)(b,{width:s(r,[null])?.width??0,show:t,pre:n,children:(0,f.jsx)(x,{ref:r,children:e})})}var u,d,f,p,m,h,g,_,v,y,b,x,S=t((()=>{u=e(i(),1),d=e(i(),1),a(),c(),f=o(),p=d.memo(function({children:e,icon:t,show:n=!0,prefix:r=!1,width:i,fit:a=!1,fixed:o=!1}){let s=a?i===void 0?(0,f.jsx)(l,{show:n,pre:r,children:t}):(0,f.jsx)(b,{width:i,show:n,pre:r,children:(0,f.jsx)(x,{children:t})}):(0,f.jsx)(v,{show:n,pre:r,children:(0,f.jsx)(y,{children:t})});return(0,f.jsxs)(m,{children:[r&&s,(0,f.jsx)(h,{fixed:o,children:e}),!r&&s]})}),m=n.div`
  display: flex;
  align-items: center;
`,h=n.div`
  ${e=>!e.fixed&&r`
      min-width: 0;
      overflow: hidden;
    `}
  white-space: nowrap;
  text-overflow: ellipsis;
`,g=r`
  > svg {
    display: block;
  }
`,_=r`
  ${e=>e.show===`collapse`?r`
          display: none;
        `:r`
          visibility: ${e.show?`visible`:`hidden`};
        `};
  ${e=>e.pre?r`
          margin-right: 4px;
        `:r`
          margin-left: 4px;
        `}
`,v=n.div`
  display: flex;
  align-items: center;

  ${_}
`,y=n.div`
  display: inline-flex;

  ${g}
`,b=n.div`
  display: flex;
  position: relative;
  /* Iconをline-heightに関与させない */
  height: 0;
  /* 横方向の領域は確保する */
  width: ${e=>e.width}px;

  ${_}
`,x=n.div`
  display: inline-flex;
  position: absolute;
  transform: translateY(-50%);

  ${g}
`})),C,w,T;t((()=>{S(),C=o(),w={title:`react-sandbox/WithIcon`,component:p,argTypes:{prefix:{type:`boolean`},fit:{type:`boolean`},width:{type:`number`},fixed:{type:`boolean`}}},T={render:e=>(0,C.jsx)(p,{...e,icon:(0,C.jsx)(`pixiv-icon`,{name:`16/Like`}),children:`children`})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <WithIcon {...props} icon={<pixiv-icon name="16/Like" />}>
        children
      </WithIcon>;
  }
}`,...T.parameters?.docs?.source}}}}))();export{T as Default,w as default};