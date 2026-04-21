import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Ht as n,nt as r}from"./iframe-Bwbo-EqB.js";import{n as i,t as a}from"./CheckboxInput-N2iHPgcu.js";var o,s,c,l,u,d,f,p;t((()=>{i(),o=e(n(),1),s=r(),c={title:`react/internals/CheckboxInput`,component:a,parameters:{layout:`centered`}},l={render:function(e){return(0,s.jsx)(a,{...e})}},u={render:function(){let[e,t]=(0,o.useState)(!0);return(0,s.jsx)(a,{checked:e,onChange:t})}},d={render:function(){let[e,t]=(0,o.useState)(!1);return(0,s.jsx)(a,{checked:e,onChange:t,disabled:!0})}},f={render:function(){let[e,t]=(0,o.useState)(!1);return(0,s.jsx)(a,{checked:e,onChange:t,invalid:!0})}},p={render:function(){let[e,t]=(0,o.useState)(!1);return(0,s.jsx)(`div`,{style:{padding:8,backgroundColor:`var(--charcoal-background2)`},children:(0,s.jsx)(a,{checked:e,onChange:t,rounded:!0})})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    return <CheckboxInput {...args} />;
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [checked, setChecked] = useState(true);
    return <CheckboxInput checked={checked} onChange={setChecked} />;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [checked, setChecked] = useState(false);
    return <CheckboxInput checked={checked} onChange={setChecked} disabled />;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [checked, setChecked] = useState(false);
    return <CheckboxInput checked={checked} onChange={setChecked} invalid />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [checked, setChecked] = useState(false);
    return <div style={{
      padding: 8,
      backgroundColor: 'var(--charcoal-background2)'
    }}>
        <CheckboxInput checked={checked} onChange={setChecked} rounded />
      </div>;
  }
}`,...p.parameters?.docs?.source}}}}))();export{u as Checked,l as Default,d as Disabled,f as Invalid,p as Rounded,c as default};