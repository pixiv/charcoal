import{j as t,r}from"./iframe-D-iARKYw.js";import{P as p}from"./index-D0fRfCmv.js";import{B as u}from"./index-CX7H0yDE.js";import"./preload-helper-C1FmrZbK.js";import"./useClassNames-CRLeh4q8.js";const f={title:"react/internals/Popover",component:p};function s(c){const[m,o]=r.useState(!1),n=r.useRef(null);return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:()=>{o(!0)},style:c.style,ref:n,children:"button"}),t.jsx(p,{isOpen:m,onClose:()=>o(!1),triggerRef:n,children:t.jsx("div",{style:{margin:"8px 16px"},children:"Hello"})})]})}const e={render:()=>t.jsxs(t.Fragment,{children:[t.jsx(s,{style:{position:"absolute"}}),t.jsx(s,{style:{position:"absolute",right:8}}),t.jsx(s,{style:{position:"absolute",bottom:8}}),t.jsx(s,{style:{position:"absolute",right:8,bottom:8}})]})};var i,a,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <>
      <Base style={{
      position: 'absolute'
    }} />
      <Base style={{
      position: 'absolute',
      right: 8
    }} />
      <Base style={{
      position: 'absolute',
      bottom: 8
    }} />
      <Base style={{
      position: 'absolute',
      right: 8,
      bottom: 8
    }} />
    </>
}`,...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};export{e as Basic,f as default};
