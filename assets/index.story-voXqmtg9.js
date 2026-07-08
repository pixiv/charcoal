import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Ct as n,It as r,Lt as i,Pt as a,Yt as o,lt as s,xt as c}from"./iframe-34wsKMqw.js";var l,u,d,f,p,m,h,g,_,v=t((()=>{l=e(o(),1),r(),n(),u=s(),d=l.forwardRef(function({gtmClass:e,flex:t=!1,rowReverse:n=!1,children:r,disabled:i,...a},o){return(0,u.jsxs)(p,{className:e===void 0?``:`gtm-${e}`,flex:t,rowReverse:n,"aria-disabled":i,children:[(0,u.jsxs)(m,{children:[(0,u.jsx)(_,{...a,disabled:i,ref:o}),(0,u.jsx)(h,{children:(0,u.jsx)(g,{})})]}),r!=null&&(0,u.jsx)(f,{rowReverse:n,children:r})]})}),f=i.span`
  ${e=>e.rowReverse?a`
          margin-right: 8px;
        `:a`
          margin-left: 8px;
        `}
`,p=i.label`
  display: inline-flex;
  align-items: center;
  ${({flex:e})=>e&&a`
      display: flex;
      justify-content: space-between;
    `}
  ${({rowReverse:e})=>a`
    flex-direction: ${e?`row-reverse`:`row`};
  `}
  cursor: pointer;
  outline: 0;

  &[aria-disabled='true'] {
    cursor: auto;
  }
`,m=i.span`
  display: inline-flex;
  position: relative;
  z-index: 0;
`,h=i.div`
  position: relative;
  box-sizing: border-box;
  width: 28px;
  height: 16px;
  border-radius: 16px;
  border: 2px solid transparent;
  background: ${({theme:e})=>e.color.text4};
  transition:
    box-shadow 0.2s,
    background-color 0.2s;
`,g=i.div`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 12px;
  height: 12px;
  background-color: ${({theme:e})=>e.color.text5};
  border-radius: 50%;
  transform: translateX(0);
  transition: transform 0.2s;
`,_=i.input.attrs({type:`checkbox`})`
  position: absolute;
  /* NOTE: this is contained by the GraphicCheckboxOuter */
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* just to control the clickable area if used standalone */
  border-radius: 16px;
  opacity: 0;
  appearance: none;
  outline: none;
  cursor: pointer;

  &:checked {
    ~ ${h} {
      background-color: ${({theme:e})=>e.color.brand};

      ${g} {
        transform: translateX(12px);
      }
    }
  }

  &:disabled {
    cursor: auto;

    ~ ${h} {
      opacity: ${({theme:e})=>e.elementEffect.disabled.opacity};
    }
  }

  &:not(:disabled):focus {
    ~ ${h} {
      box-shadow: 0 0 0 4px
        ${({theme:e})=>c(e.color.brand,e.elementEffect.disabled)};
    }
  }
`})),y,b,x;t((()=>{v(),y=s(),b={title:`react-sandbox/SwitchCheckbox`,component:d},x={render:e=>(0,y.jsx)(d,{...e,children:`children`})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <SwitchCheckbox {...props}>children</SwitchCheckbox>;
  }
}`,...x.parameters?.docs?.source}}}}))();export{x as Default,b as default};