import{j as n,r as h}from"./iframe-ruKs1uur.js";import{C as c}from"./index-bZxhACJT.js";import"./preload-helper-C1FmrZbK.js";import"./useClassNames-_IQndGJm.js";const q={title:"react/internals/CheckboxInput",component:c,parameters:{layout:"centered"}},s={render:function(e){return n.jsx(c,{...e})}},o={render:function(){const[e,r]=h.useState(!0);return n.jsx(c,{checked:e,onChange:r})}},a={render:function(){const[e,r]=h.useState(!1);return n.jsx(c,{checked:e,onChange:r,disabled:!0})}},d={render:function(){const[e,r]=h.useState(!1);return n.jsx(c,{checked:e,onChange:r,invalid:!0})}},u={render:function(){const[e,r]=h.useState(!1);return n.jsx("div",{style:{padding:8,backgroundColor:"var(--charcoal-background2)"},children:n.jsx(c,{checked:e,onChange:r,rounded:!0})})}};var i,k,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: function Render(args) {
    return <CheckboxInput {...args} />;
  }
}`,...(p=(k=s.parameters)==null?void 0:k.docs)==null?void 0:p.source}}};var C,l,m;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: function Render() {
    const [checked, setChecked] = useState(true);
    return <CheckboxInput checked={checked} onChange={setChecked} />;
  }
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var g,f,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: function Render() {
    const [checked, setChecked] = useState(false);
    return <CheckboxInput checked={checked} onChange={setChecked} disabled />;
  }
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var b,S,R;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: function Render() {
    const [checked, setChecked] = useState(false);
    return <CheckboxInput checked={checked} onChange={setChecked} invalid />;
  }
}`,...(R=(S=d.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var j,v,I;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: function Render() {
    const [checked, setChecked] = useState(false);
    return <div style={{
      padding: 8,
      backgroundColor: 'var(--charcoal-background2)'
    }}>
        <CheckboxInput checked={checked} onChange={setChecked} rounded />
      </div>;
  }
}`,...(I=(v=u.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};export{o as Checked,s as Default,a as Disabled,d as Invalid,u as Rounded,q as default};
