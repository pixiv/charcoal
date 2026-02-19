import{r,a0 as H,j as l}from"./iframe-Czr9xm4W.js";import{I as K}from"./index-CxCL4p1X.js";import{u as U}from"./useClassNames-D5KySjxO.js";import"./preload-helper-C1FmrZbK.js";const D=r.createContext({name:void 0,selected:[],disabled:!1,readonly:!1,invalid:!1,onChange(){throw new Error("Cannot find `onChange()` handler. Perhaps you forgot to wrap it with `<MultiSelectGroup />` ?")}}),C=r.forwardRef(function({value:a,disabled:n=!1,onChange:e,variant:t="default",className:o,children:u},v){const{name:p,selected:h,disabled:b,readonly:c,invalid:i,onChange:k}=r.useContext(D);H(p!==void 0,'"name" is not Provided for <MultiSelect>. Perhaps you forgot to wrap with <MultiSelectGroup> ?');const $=h.includes(a),G=n||b||c,A=r.useCallback(M=>{M.currentTarget instanceof HTMLInputElement&&(e&&e({value:a,selected:M.currentTarget.checked}),k({value:a,selected:M.currentTarget.checked}))},[e,k,a]),L=U("charcoal-multi-select",o);return l.jsxs("label",{"aria-disabled":G,className:L,children:[l.jsx("input",{className:"charcoal-multi-select-input",name:p,value:a,type:"checkbox",checked:$,disabled:G,onChange:A,"data-overlay":t==="overlay","aria-invalid":i,ref:v}),l.jsx("div",{className:"charcoal-multi-select-overlay","data-overlay":t==="overlay","aria-invalid":i,"aria-hidden":!0,children:l.jsx(K,{name:"24/Check","unsafe-non-guideline-scale":16/24})}),!!u&&l.jsx("div",{className:"charcoal-multi-select-label",children:u})]})}),d=r.memo(C);function x({className:s,style:a,name:n,label:e,selected:t,onChange:o,disabled:u=!1,readonly:v=!1,invalid:p=!1,children:h}){const b=r.useCallback(c=>{const i=t.indexOf(c.value);c.selected?i<0&&o([...t,c.value]):i>=0&&o([...t.slice(0,i),...t.slice(i+1)])},[o,t]);return l.jsx(D.Provider,{value:{name:n,selected:Array.from(new Set(t)),disabled:u,readonly:v,invalid:p,onChange:b},children:l.jsx("div",{className:s,style:a,"aria-label":e,"data-testid":"SelectGroup",children:h})})}try{x.displayName="MultiSelectGroup",x.__docgenInfo={description:"",displayName:"MultiSelectGroup",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},selected:{defaultValue:null,description:"",name:"selected",required:!0,type:{name:"string[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(selected: string[]) => void"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},readonly:{defaultValue:{value:"false"},description:"",name:"readonly",required:!1,type:{name:"boolean"}},invalid:{defaultValue:{value:"false"},description:"",name:"invalid",required:!1,type:{name:"boolean"}}}}}catch{}try{C.displayName="MultiSelect",C.__docgenInfo={description:"",displayName:"MultiSelect",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"overlay"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((payload: { value: string; selected: boolean; }) => void)"}}}}}catch{}const{action:_}=__STORYBOOK_MODULE_ACTIONS__,S=s=>l.jsx(x,{style:{display:"grid",gridTemplateColumns:"1fr",gap:"8px"},...s}),Q={title:"react/MultiSelect",component:d,argTypes:{variant:{control:{type:"inline-radio",options:["default","overlay"]}}},args:{variant:"default"}},m={render:function(a){const n=["選択肢1","選択肢2","選択肢3","選択肢4"];return l.jsx(S,{name:"name",label:"label",onChange:_("click"),selected:["選択肢1","選択肢3"],children:n.map(e=>r.createElement(d,{...a,value:e,key:e},e))})}},f={render:function(a){const n=["選択肢1","選択肢2","選択肢3","選択肢4"];return l.jsx(S,{name:"name",label:"label",onChange:_("click"),selected:[],invalid:!0,children:n.map(e=>r.createElement(d,{...a,value:e,key:e},e))})}},y={render:function(a){const n=["選択肢1","選択肢2","選択肢3","選択肢4"];return l.jsx(S,{name:"name",label:"label",onChange:_("click"),selected:[],children:n.map(e=>r.createElement(d,{...a,value:e,key:e},e))})},args:{variant:"overlay"}},g={render:function(a){const[n,e]=r.useState([]);return l.jsx(S,{name:"",label:"",onChange:e,selected:n,children:[1,2,3,4].map(t=>r.createElement(d,{...a,value:`選択肢${t}`,key:t},"選択肢",t))})}};var N,j,q;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = ['選択肢1', '選択肢2', '選択肢3', '選択肢4'];
    return <StyledMultiSelectGroup name="name" label="label" onChange={action('click')} selected={['選択肢1', '選択肢3']}>
        {options.map(option => <MultiSelect {...args} value={option} key={option}>
            {option}
          </MultiSelect>)}
      </StyledMultiSelectGroup>;
  }
}`,...(q=(j=m.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var V,R,w;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = ['選択肢1', '選択肢2', '選択肢3', '選択肢4'];
    return <StyledMultiSelectGroup name="name" label="label" onChange={action('click')} selected={[]} invalid>
        {options.map(option => <MultiSelect {...args} value={option} key={option}>
            {option}
          </MultiSelect>)}
      </StyledMultiSelectGroup>;
  }
}`,...(w=(R=f.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var E,I,O;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = ['選択肢1', '選択肢2', '選択肢3', '選択肢4'];
    return <StyledMultiSelectGroup name="name" label="label" onChange={action('click')} selected={[]}>
        {options.map(option => <MultiSelect {...args} value={option} key={option}>
            {option}
          </MultiSelect>)}
      </StyledMultiSelectGroup>;
  },
  args: {
    variant: 'overlay'
  }
}`,...(O=(I=y.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var T,P,B;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: function Render(args) {
    const [selected, setSelected] = useState<string[]>([]);
    return <StyledMultiSelectGroup name="" label="" onChange={setSelected} selected={selected}>
        {[1, 2, 3, 4].map(idx => <MultiSelect {...args} value={\`選択肢\${idx}\`} key={idx}>
            選択肢{idx}
          </MultiSelect>)}
      </StyledMultiSelectGroup>;
  }
}`,...(B=(P=g.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};export{m as Basic,f as Invalid,y as Overlay,g as Playground,Q as default};
