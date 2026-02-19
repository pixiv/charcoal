import{r as o,j as n}from"./iframe-D-iARKYw.js";import{S as r}from"./index-DvBOsl6x.js";import"./preload-helper-C1FmrZbK.js";import"./useClassNames-CRLeh4q8.js";const D={title:"react/Switch",component:r,parameters:{layout:"centered"}},t={argTypes:{checked:{type:"boolean"},children:{type:"string"},disabled:{type:"boolean"}},render:function(e){const[c,i]=o.useState(!1);return n.jsx("div",{children:n.jsx(r,{...e,name:"name",onChange:j=>{i(j)},checked:e.checked??c})})}},a={render:function(){const[e,c]=o.useState(!0);return n.jsx("div",{children:n.jsx(r,{name:"name",label:"checked",onChange:i=>{c(i)},checked:e})})}},s={render:function(){const[e,c]=o.useState(!1);return n.jsx("div",{children:n.jsx(r,{name:"label",checked:e,onChange:c,children:"Label"})})}},d={render:function(){const[e,c]=o.useState(!1);return n.jsx("div",{children:n.jsx(r,{name:"disabled",checked:e,onChange:c,disabled:!0,children:"Label"})})}};var l,u,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  argTypes: {
    checked: {
      type: 'boolean'
    },
    children: {
      type: 'string'
    },
    disabled: {
      type: 'boolean'
    }
  },
  render: function Render(args) {
    const [checked, setChecked] = useState(false);
    return <div>
        <Switch {...args} name="name" onChange={v => {
        setChecked(v);
      }} checked={args.checked ?? checked} />
      </div>;
  }
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var k,p,C;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: function Render() {
    const [checked, setChecked] = useState(true);
    return <div>
        <Switch name="name" label="checked" onChange={v => {
        setChecked(v);
      }} checked={checked} />
      </div>;
  }
}`,...(C=(p=a.parameters)==null?void 0:p.docs)==null?void 0:C.source}}};var S,b,f;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: function Render() {
    const [checked, setChecked] = useState(false);
    return <div>
        <Switch name="label" checked={checked} onChange={setChecked}>
          Label
        </Switch>
      </div>;
  }
}`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var g,v,x;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: function Render() {
    const [checked, setChecked] = useState(false);
    return <div>
        <Switch name="disabled" checked={checked} onChange={setChecked} disabled>
          Label
        </Switch>
      </div>;
  }
}`,...(x=(v=d.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};export{a as Checked,t as Default,d as Disabled,s as Label,D as default};
