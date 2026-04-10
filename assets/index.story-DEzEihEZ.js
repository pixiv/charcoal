import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Ht as n,nt as r}from"./iframe-BT2Ct3aa.js";import{n as i,t as a}from"./Switch-BbKA-Bz2.js";var o,s,c,l,u,d,f;t((()=>{o=e(n(),1),i(),s=r(),c={title:`react/Switch`,component:a,parameters:{layout:`centered`}},l={argTypes:{checked:{type:`boolean`},children:{type:`string`},disabled:{type:`boolean`}},render:function(e){let[t,n]=(0,o.useState)(!1);return(0,s.jsx)(`div`,{children:(0,s.jsx)(a,{...e,name:`name`,onChange:e=>{n(e)},checked:e.checked??t})})}},u={render:function(){let[e,t]=(0,o.useState)(!0);return(0,s.jsx)(`div`,{children:(0,s.jsx)(a,{name:`name`,label:`checked`,onChange:e=>{t(e)},checked:e})})}},d={render:function(){let[e,t]=(0,o.useState)(!1);return(0,s.jsx)(`div`,{children:(0,s.jsx)(a,{name:`label`,checked:e,onChange:t,children:`Label`})})}},f={render:function(){let[e,t]=(0,o.useState)(!1);return(0,s.jsx)(`div`,{children:(0,s.jsx)(a,{name:`disabled`,checked:e,onChange:t,disabled:!0,children:`Label`})})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [checked, setChecked] = useState(true);
    return <div>
        <Switch name="name" label="checked" onChange={v => {
        setChecked(v);
      }} checked={checked} />
      </div>;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [checked, setChecked] = useState(false);
    return <div>
        <Switch name="label" checked={checked} onChange={setChecked}>
          Label
        </Switch>
      </div>;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [checked, setChecked] = useState(false);
    return <div>
        <Switch name="disabled" checked={checked} onChange={setChecked} disabled>
          Label
        </Switch>
      </div>;
  }
}`,...f.parameters?.docs?.source}}}}))();export{u as Checked,l as Default,f as Disabled,d as Label,c as default};