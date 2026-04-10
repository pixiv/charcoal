import{n as e}from"./chunk-BneVvdWh.js";import{nt as t}from"./iframe-DgE2Rlfh.js";import{n,t as r}from"./Clickable-B6I553im.js";var i,a,o,s,c;e((()=>{n(),i=t(),{action:a}=__STORYBOOK_MODULE_ACTIONS__,o={title:`react/Clickable`,component:r},s={render:()=>(0,i.jsx)(r,{onClick:a(`click`),children:`button`})},c={render:()=>(0,i.jsx)(r,{component:`a`,href:`#`,onClick:a(`click`),children:`link`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Clickable onClick={action('click')}>button</Clickable>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Clickable component="a" href="#" onClick={action('click')}>
      link
    </Clickable>
}`,...c.parameters?.docs?.source}}}}))();export{s as Button,c as Link,o as default};