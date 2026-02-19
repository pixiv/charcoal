import{j as e}from"./iframe-D-iARKYw.js";import{M as a,a as o}from"./index-B_d1BPec.js";import{M as c}from"./index-CwotSYw9.js";import"./preload-helper-C1FmrZbK.js";import"./index-C9k-t4Kb.js";import"./useClassNames-CRLeh4q8.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,k={title:"react/internals/MenuList",component:a};function u(C,L=0){return[...Array(C)].map((S,j)=>{const s=j+L;return e.jsxs(o,{value:s.toString(),children:["Menu ",s]},s)})}const n={render:()=>e.jsx(e.Fragment,{children:e.jsx(a,{onChange:i("onChange"),children:u(10)})})},r={render:()=>e.jsx(e.Fragment,{children:e.jsxs(a,{onChange:i("onChange"),children:[e.jsx(o,{value:"1",children:"MenuItem"}),e.jsx(o,{value:"2",disabled:!0,children:"Disabled MenuItem"})]})})},t={render:()=>e.jsxs(a,{onChange:i("onChange"),value:"1",children:[e.jsx(c,{text:"Section1",children:u(5)}),e.jsx(c,{text:"Section2",children:u(5,5)})]})};var m,d,l;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <>
        <MenuList onChange={action('onChange')}>{makeList(10)}</MenuList>
      </>;
  }
}`,...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,M,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    return <>
        <MenuList onChange={action('onChange')}>
          <MenuItem value="1">MenuItem</MenuItem>
          <MenuItem value="2" disabled>
            Disabled MenuItem
          </MenuItem>
        </MenuList>
      </>;
  }
}`,...(h=(M=r.parameters)==null?void 0:M.docs)==null?void 0:h.source}}};var g,x,I;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    return <MenuList onChange={action('onChange')} value="1">
        <MenuItemGroup text="Section1">{makeList(5)}</MenuItemGroup>
        <MenuItemGroup text="Section2">{makeList(5, 5)}</MenuItemGroup>
      </MenuList>;
  }
}`,...(I=(x=t.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};export{n as Basic,r as Disabled,t as Group,k as default};
