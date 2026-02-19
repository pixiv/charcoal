import{r as w,j as r,t as a,q as t,u as g}from"./iframe-ruKs1uur.js";import"./preload-helper-C1FmrZbK.js";const x=w.forwardRef(function({gtmClass:i,flex:b=!1,rowReverse:s=!1,children:c,disabled:l,...f},m){return r.jsxs(y,{className:i!==void 0?`gtm-${i}`:"",flex:b,rowReverse:s,"aria-disabled":l,children:[r.jsxs($,{children:[r.jsx(S,{...f,disabled:l,ref:m}),r.jsx(n,{children:r.jsx(h,{})})]}),c!=null&&r.jsx(k,{rowReverse:s,children:c})]})}),k=t.span`
  ${e=>e.rowReverse?a`
          margin-right: 8px;
        `:a`
          margin-left: 8px;
        `}
`,y=t.label`
  display: inline-flex;
  align-items: center;
  ${({flex:e})=>e&&a`
      display: flex;
      justify-content: space-between;
    `}
  ${({rowReverse:e})=>a`
    flex-direction: ${e?"row-reverse":"row"};
  `}
  cursor: pointer;
  outline: 0;

  &[aria-disabled='true'] {
    cursor: auto;
  }
`,$=t.span`
  display: inline-flex;
  position: relative;
  z-index: 0;
`,n=t.div`
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
`,h=t.div`
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
`,S=t.input.attrs({type:"checkbox"})`
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
    ~ ${n} {
      background-color: ${({theme:e})=>e.color.brand};

      ${h} {
        transform: translateX(12px);
      }
    }
  }

  &:disabled {
    cursor: auto;

    ~ ${n} {
      opacity: ${({theme:e})=>e.elementEffect.disabled.opacity};
    }
  }

  &:not(:disabled):focus {
    ~ ${n} {
      box-shadow: 0 0 0 4px
        ${({theme:e})=>g(e.color.brand,e.elementEffect.disabled)};
    }
  }
`;try{SwitchCheckbox.displayName="SwitchCheckbox",SwitchCheckbox.__docgenInfo={description:"",displayName:"SwitchCheckbox",props:{gtmClass:{defaultValue:null,description:"",name:"gtmClass",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"boolean"}},rowReverse:{defaultValue:null,description:"",name:"rowReverse",required:!1,type:{name:"boolean"}}}}}catch{}const _={title:"react-sandbox/SwitchCheckbox",component:x},o={render:e=>r.jsx(x,{...e,children:"children"})};var d,p,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: props => {
    return <SwitchCheckbox {...props}>children</SwitchCheckbox>;
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};export{o as Default,_ as default};
