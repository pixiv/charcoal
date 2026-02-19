import{r as l,j as r}from"./iframe-Czr9xm4W.js";import{C as e}from"./index-4A9-rA3M.js";import"./preload-helper-C1FmrZbK.js";import"./index-8nzKpkOc.js";import"./useClassNames-D5KySjxO.js";const F={title:"react/Checkbox",component:e,parameters:{layout:"centered"}},n={argTypes:{checked:{type:"boolean"},children:{type:"string"},disabled:{type:"boolean"},invalid:{type:"boolean"},readOnly:{type:"boolean"}},render:function(t){const[I,E]=l.useState(t.checked),T=l.useCallback(L=>{E(L)},[]);return r.jsx(e,{...t,checked:t.checked??I,onChange:T})}},a={render:()=>r.jsx(e,{children:"Checkbox"})},c={render:()=>r.jsx(e,{checked:!0,children:"Checked"})},o={render:()=>r.jsx(e,{disabled:!0,children:"Disabled"})},s={render:()=>r.jsx(e,{checked:!0,name:"labelled",readOnly:!0,children:"ReadOnly"})},d={render:()=>r.jsx(e,{name:"labelled",invalid:!0,children:"Invalid"})};var h,i,p;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  argTypes: {
    checked: {
      type: 'boolean'
    },
    children: {
      type: 'string'
    },
    disabled: {
      type: 'boolean'
    },
    invalid: {
      type: 'boolean'
    },
    readOnly: {
      type: 'boolean'
    }
  },
  render: function Render(props) {
    const [checked, setChecked] = useState(props.checked);
    const handleChange = useCallback((isSelected: boolean) => {
      setChecked(isSelected);
    }, []);
    return <Checkbox {...props} checked={props.checked ?? checked} onChange={handleChange} />;
  }
}`,...(p=(i=n.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var u,b,k;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    return <Checkbox>Checkbox</Checkbox>;
  }
}`,...(k=(b=a.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var m,C,x;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <Checkbox checked>Checked</Checkbox>;
  }
}`,...(x=(C=c.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var y,g,S;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    return <Checkbox disabled>Disabled</Checkbox>;
  }
}`,...(S=(g=o.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var j,v,O;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    return <Checkbox checked name="labelled" readOnly>
        ReadOnly
      </Checkbox>;
  }
}`,...(O=(v=s.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};var f,R,D;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    return <Checkbox name="labelled" invalid>
        Invalid
      </Checkbox>;
  }
}`,...(D=(R=d.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};export{c as Checked,n as Default,o as Disabled,d as Invalid,a as Label,s as ReadOnly,F as default};
