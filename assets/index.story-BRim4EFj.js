import{n as e}from"./chunk-BneVvdWh.js";import{j as t}from"./iframe-CgvxVNES.js";import{n,t as r}from"./Clickable-CbMjnfJI.js";var i,a,o,s,c,l;e((()=>{n(),i=t(),{action:a}=__STORYBOOK_MODULE_ACTIONS__,o={title:`react/Clickable`,component:r},s={render:()=>(0,i.jsx)(r,{onClick:a(`click`),children:`button`})},c={render:()=>(0,i.jsx)(r,{component:`a`,href:`#`,onClick:a(`click`),children:`link`})},l={parameters:{tokenVersion:`v2`},render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,gap:16},children:[(0,i.jsx)(r,{onClick:a(`click`),children:`button`}),(0,i.jsx)(r,{component:`a`,href:`#`,onClick:a(`click`),children:`link`})]})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Clickable onClick={action('click')}>button</Clickable>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Clickable component="a" href="#" onClick={action('click')}>
      link
    </Clickable>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    tokenVersion: 'v2'
  },
  render: () => <div style={{
    display: 'flex',
    gap: 16
  }}>
      <Clickable onClick={action('click')}>button</Clickable>
      <Clickable component="a" href="#" onClick={action('click')}>
        link
      </Clickable>
    </div>
}`,...l.parameters?.docs?.source}}}}))();export{s as Button,c as Link,l as TokenV2,o as default};