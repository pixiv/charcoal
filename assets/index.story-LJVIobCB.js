import{j as l}from"./iframe-NqksIJAp.js";import{C as c}from"./index-Cn0CLFls.js";import"./preload-helper-C1FmrZbK.js";import"./useClassNames-vAgdujRd.js";const{action:m}=__STORYBOOK_MODULE_ACTIONS__,u={title:"react/Clickable",component:c},e={render:()=>l.jsx(c,{onClick:m("click"),children:"button"})},r={render:()=>l.jsx(c,{component:"a",href:"#",onClick:m("click"),children:"link"})};var o,t,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <Clickable onClick={action('click')}>button</Clickable>
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var a,i,s;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <Clickable component="a" href="#" onClick={action('click')}>
      link
    </Clickable>
}`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};export{e as Button,r as Link,u as default};
