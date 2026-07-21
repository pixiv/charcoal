import{n as e}from"./chunk-BneVvdWh.js";import{it as t,lt as n}from"./iframe--1btTK6a.js";import{n as r,t as i}from"./IconButton-By2Inwnf.js";var a,o,s,c,l,u;e((()=>{t(),r(),a=n(),o={title:`react/IconButton`,component:i,parameters:{layout:`centered`}},s={args:{icon:`16/Add`},render:e=>{let t=e.icon.split(`/`).at(1)?.toLocaleLowerCase();return(0,a.jsx)(i,{title:t,...e})}},c={render:()=>(0,a.jsx)(i,{icon:`16/Add`,isActive:!0})},l={render:()=>(0,a.jsx)(i,{icon:`16/Add`,variant:`Overlay`})},u={parameters:{tokenVersion:`v2`},render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,a.jsx)(i,{icon:`16/Add`,title:`add`}),(0,a.jsx)(i,{icon:`16/Add`,title:`active`,isActive:!0}),(0,a.jsx)(i,{icon:`16/Add`,title:`overlay`,variant:`Overlay`})]})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    icon: '16/Add'
  },
  render: props => {
    const title = props.icon.split('/').at(1)?.toLocaleLowerCase();
    return <IconButton title={title} {...props} />;
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IconButton icon="16/Add" isActive />;
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <IconButton icon="16/Add" variant="Overlay" />;
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    tokenVersion: 'v2'
  },
  render: () => {
    return <div style={{
      display: 'flex',
      gap: 8
    }}>
        <IconButton icon="16/Add" title="add" />
        <IconButton icon="16/Add" title="active" isActive />
        <IconButton icon="16/Add" title="overlay" variant="Overlay" />
      </div>;
  }
}`,...u.parameters?.docs?.source}}}}))();export{s as Default,c as IsActive,l as Overlay,u as TokenV2,o as default};