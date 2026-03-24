import{j as l}from"./iframe-DmW6L60v.js";import{C as c}from"./index-DS1IK1Np.js";import"./preload-helper-C1FmrZbK.js";import"./useClassNames-3Ce9s_ap.js";const{action:m}=__STORYBOOK_MODULE_ACTIONS__,u={title:"react/Clickable",component:c},e={render:()=>l.jsx(c,{onClick:m("click"),children:"button"})},r={render:()=>l.jsx(c,{component:"a",href:"#",onClick:m("click"),children:"link"})};var o,t,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <Clickable onClick={action('click')}>button</Clickable>
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var a,i,s;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <Clickable component="a" href="#" onClick={action('click')}>
      link
    </Clickable>
}`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};export{e as Button,r as Link,u as default};
