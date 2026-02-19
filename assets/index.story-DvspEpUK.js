import{j as t,q as s,p as h,t as f}from"./iframe-NqksIJAp.js";import{t as i}from"./styled-Dl8ZdJ_C.js";import{I as v}from"./Base-DoYpZaad.js";import"./preload-helper-C1FmrZbK.js";const l=16;function y(){const e=t.jsxs(t.Fragment,{children:[t.jsx("path",{d:`M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183
           0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16Z`}),t.jsx(C,{d:`M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629
           4.68629 2 8 2C11.3137 2 14 4.68629 14 8ZM8 6.25C8.69036 6.25 9.25 5.69036
           9.25 5C9.25 4.30964 8.69036 3.75 8 3.75C7.30964 3.75 6.75 4.30964 6.75
           5C6.75 5.69036 7.30964 6.25 8 6.25ZM7 7.75V11.25C7 11.8023 7.44772 12.25
           8 12.25C8.55228 12.25 9 11.8023 9 11.25V7.75C9 7.19772 8.55228 6.75 8
           6.75C7.44772 6.75 7 7.19772 7 7.75Z`})]});return t.jsx(v,{viewBoxSize:l,size:l,currentColor:!0,path:e})}const C=s.path`
  fill: ${({theme:e})=>e.color.surface1};
  fill-rule: evenodd;
`;function r({children:e,context:n,className:c}){return t.jsxs(L,{className:c,...z({children:e,context:n,className:c}),children:[t.jsx(j,{children:t.jsx(y,{})}),t.jsx(T,{children:e})]})}const L=s.div`
  ${e=>i(n=>[n.bg.surface3,n.borderRadius(8),n.padding.vertical(e.default.vertical),n.padding.horizontal(e.default.horizontal)])}

  @media ${({theme:e})=>h(e.breakpoint.screen1)} {
    ${e=>i(n=>[n.padding.vertical(e.screen1.vertical),n.padding.horizontal(e.screen1.horizontal)])}
  }

  display: flex;
  align-items: flex-start;
  ${e=>e.context==="page"&&f`
      justify-content: center;
    `}
`,j=s.div`
  display: flex;
  align-items: center;
  color: ${e=>e.theme.color.text4};
  height: 22px;
  margin: -4px 4px -4px 0;
`,T=s.p`
  ${i(e=>[e.font.text2,e.typography(14)])}
  margin: 0;
  min-width: 0;
  overflow-wrap: break-word;
`;function z(e){return{...e,...w(e.context)}}function w(e){switch(e){case"page":return{default:{horizontal:40,vertical:24},screen1:{horizontal:16,vertical:16}};case"section":return{default:{horizontal:16,vertical:16},screen1:{horizontal:16,vertical:16}}}}try{r.displayName="HintText",r.__docgenInfo={description:"",displayName:"HintText",props:{context:{defaultValue:null,description:"",name:"context",required:!0,type:{name:"enum",value:[{value:'"page"'},{value:'"section"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const I={title:"react-sandbox/HintText",component:r,parameters:{layout:"centered"},argTypes:{children:{type:"string"},context:{control:{type:"select",options:["page","section"]}}}},o={args:{children:"HintText",context:"section"},render:e=>t.jsx(r,{...e})},a={args:{children:"LongLongLongLongLongLongLongLongLongText",context:"section"},render:e=>t.jsx("div",{style:{width:200},children:t.jsx(r,{...e})})};var d,p,x;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'HintText',
    context: 'section'
  },
  render: props => <HintText {...props} />
}`,...(x=(p=o.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var g,u,m;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'LongLongLongLongLongLongLongLongLongText',
    context: 'section'
  },
  render: props => <div style={{
    width: 200
  }}>
      <HintText {...props} />
    </div>
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};export{o as Default,a as NarrowWidth,I as default};
