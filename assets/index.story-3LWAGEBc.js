import{r,j as a,a0 as J}from"./iframe-D-iARKYw.js";import{u as q}from"./useClassNames-CRLeh4q8.js";import"./preload-helper-C1FmrZbK.js";const F=r.createContext({name:void 0,selected:void 0,disabled:!1,readonly:!1,invalid:!1,onChange(){throw new Error("Cannot find onChange() handler. Perhaps you forgot to wrap with <RadioGroup> ?")}}),D=r.forwardRef(function({onChange:n,invalid:o,className:e,...t},s){const d=r.useCallback(m=>{const y=m.currentTarget;n==null||n(y.value)},[n]),u=q("charcoal-radio-input",e);return a.jsx("input",{className:u,ref:s,type:"radio",onChange:d,"aria-invalid":o,...t})}),K=r.memo(D);try{D.displayName="RadioInput",D.__docgenInfo={description:"",displayName:"RadioInput",props:{invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}}}}}catch{}const G=r.forwardRef(function({value:n,disabled:o=!1,children:e,...t},s){const{name:d,selected:u,disabled:m,readonly:y,invalid:b,onChange:C}=r.useContext(F),N=q("charcoal-radio__label",t.className);J(d!==void 0,'"name" is not Provided for <Radio>. Perhaps you forgot to wrap with <RadioGroup> ?');const v=n===u,R=o||m,h=y&&!v;return a.jsxs("label",{"aria-disabled":R||h,className:N,children:[a.jsx(K,{name:d,value:n,checked:v,"aria-invalid":b,onChange:C,disabled:R||h,ref:s}),e!=null&&a.jsx("div",{className:"charcoal-radio__label_div",children:e})]})}),p=r.memo(G);try{G.displayName="Radio",G.__docgenInfo={description:"",displayName:"Radio",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const c=r.forwardRef(function({value:n,label:o,name:e,onChange:t,disabled:s,readonly:d,invalid:u,children:m,"aria-orientation":y="vertical",...b},C){const N=q("charcoal-radio-group",b.className),v=r.useCallback(h=>{t(h)},[t]),R=r.useMemo(()=>({name:e,selected:n,disabled:s??!1,readonly:d??!1,invalid:u??!1,onChange:v}),[s,v,u,e,d,n]);return a.jsx(F.Provider,{value:R,children:a.jsx("div",{role:"radiogroup","aria-disabled":s,"aria-invalid":u,"aria-label":o,"aria-labelledby":b["aria-labelledby"],"aria-orientation":y,className:N,ref:C,children:m})})});try{c.displayName="RadioGroup",c.__docgenInfo={description:"",displayName:"RadioGroup",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"aria-label of RadioGroup",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(next: Value) => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},readonly:{defaultValue:null,description:"",name:"readonly",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},"aria-labelledby":{defaultValue:null,description:"",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-orientation":{defaultValue:null,description:"",name:"aria-orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}const X={title:"react/Radio",component:p,parameters:{layout:"centered"}},i=["1","2","3"],f=l=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:l.children}),g={render:function(n){const[o,e]=r.useState(i[0]);return a.jsx(f,{children:a.jsx(c,{name:"default_story",label:"default story",...n,value:o,onChange:e,children:i.map(t=>a.jsxs(p,{value:t,children:["Value ",t]},t))})})}},V={render:function(){const[n,o]=r.useState(i[0]);return a.jsx(f,{children:a.jsx(c,{label:"disabled_stroy",name:"disabled story",value:n,onChange:o,disabled:!0,children:i.map(e=>a.jsxs(p,{value:e,disabled:!0,children:["Value ",e]},e))})})}},_={render:function(){const[n,o]=r.useState(i[0]);return a.jsx(f,{children:a.jsx(c,{name:"partial_disabled_story",label:"partial disabled story",value:n,onChange:o,children:i.map(e=>a.jsxs(p,{value:e,disabled:e==="2",children:["Value ",e]},e))})})}},x={render:function(){const[n,o]=r.useState(i[0]);return a.jsx(f,{children:a.jsx(c,{name:"readonly_story",label:"readonly story",value:n,onChange:o,readonly:!0,children:i.map(e=>a.jsxs(p,{value:e,children:["Value ",e]},e))})})}},j={render:function(){const[n,o]=r.useState(i[0]);return a.jsx(f,{children:a.jsx(c,{name:"invalid_story",label:"invalid story",value:n,onChange:o,invalid:!0,children:i.map(e=>a.jsxs(p,{value:e,children:["Value ",e]},e))})})}};var S,L,I;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: function Render(args) {
    const [value, setValue] = useState<Option>(options[0]);
    return <LayoutDiv>
        <RadioGroup<Option> name="default_story" label="default story" {...args} value={value} onChange={setValue}>
          {options.map(option => <Radio key={option} value={option}>
              Value {option}
            </Radio>)}
        </RadioGroup>
      </LayoutDiv>;
  }
}`,...(I=(L=g.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var w,O,k;V.parameters={...V.parameters,docs:{...(w=V.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState<Option>(options[0]);
    return <LayoutDiv>
        <RadioGroup<Option> label="disabled_stroy" name="disabled story" value={value} onChange={setValue} disabled>
          {options.map(option => <Radio key={option} value={option} disabled>
              Value {option}
            </Radio>)}
        </RadioGroup>
      </LayoutDiv>;
  }
}`,...(k=(O=V.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var P,E,M;_.parameters={..._.parameters,docs:{...(P=_.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState<Option>(options[0]);
    return <LayoutDiv>
        <RadioGroup<Option> name={'partial_disabled_story'} label={'partial disabled story'} value={value} onChange={setValue}>
          {options.map(option => <Radio key={option} value={option} disabled={option === '2'}>
              Value {option}
            </Radio>)}
        </RadioGroup>
      </LayoutDiv>;
  }
}`,...(M=(E=_.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var T,$,z;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState<Option>(options[0]);
    return <LayoutDiv>
        <RadioGroup<Option> name="readonly_story" label="readonly story" value={value} onChange={setValue} readonly>
          {options.map(option => <Radio key={option} value={option}>
              Value {option}
            </Radio>)}
        </RadioGroup>
      </LayoutDiv>;
  }
}`,...(z=($=x.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var H,A,B;j.parameters={...j.parameters,docs:{...(H=j.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState<Option>(options[0]);
    return <LayoutDiv>
        <RadioGroup<Option> name="invalid_story" label="invalid story" value={value} onChange={setValue} invalid>
          {options.map(option => <Radio key={option} value={option}>
              Value {option}
            </Radio>)}
        </RadioGroup>
      </LayoutDiv>;
  }
}`,...(B=(A=j.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};export{g as Default,V as Disabled,j as Invalid,_ as PartialDisabled,x as Readonly,X as default};
