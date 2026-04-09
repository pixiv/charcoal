import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Pt as n,nt as r}from"./iframe-CVQNsQPh.js";import{n as i,t as a}from"./Checkbox-BjmqPX-J.js";var o,s,c,l,u,d,f,p,m;t((()=>{i(),o=e(n(),1),s=r(),c={title:`react/Checkbox`,component:a,parameters:{layout:`centered`}},l={argTypes:{checked:{type:`boolean`},children:{type:`string`},disabled:{type:`boolean`},invalid:{type:`boolean`},readOnly:{type:`boolean`}},render:function(e){let[t,n]=(0,o.useState)(e.checked),r=(0,o.useCallback)(e=>{n(e)},[]);return(0,s.jsx)(a,{...e,checked:e.checked??t,onChange:r})}},u={render:()=>(0,s.jsx)(a,{children:`Checkbox`})},d={render:()=>(0,s.jsx)(a,{checked:!0,children:`Checked`})},f={render:()=>(0,s.jsx)(a,{disabled:!0,children:`Disabled`})},p={render:()=>(0,s.jsx)(a,{checked:!0,name:`labelled`,readOnly:!0,children:`ReadOnly`})},m={render:()=>(0,s.jsx)(a,{name:`labelled`,invalid:!0,children:`Invalid`})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Checkbox>Checkbox</Checkbox>;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Checkbox checked>Checked</Checkbox>;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Checkbox disabled>Disabled</Checkbox>;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Checkbox checked name="labelled" readOnly>
        ReadOnly
      </Checkbox>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Checkbox name="labelled" invalid>
        Invalid
      </Checkbox>;
  }
}`,...m.parameters?.docs?.source}}}}))();export{d as Checked,l as Default,f as Disabled,m as Invalid,u as Label,p as ReadOnly,c as default};