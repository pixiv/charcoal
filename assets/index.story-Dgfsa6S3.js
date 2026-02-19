import{j as e}from"./iframe-Da7rVJAF.js";import{I as x}from"./index-DyabG7Ob.js";import{u}from"./useClassNames-BXHHFAPw.js";import"./preload-helper-C1FmrZbK.js";function t({children:n,context:p="section",className:m}){const g=u("charcoal-hint-text",m);return e.jsxs("div",{className:g,"data-context":p,children:[e.jsx("div",{className:"charcoal-hint-text-icon",children:e.jsx(x,{name:"16/Info"})}),e.jsx("p",{className:"charcoal-hint-text-message",children:n})]})}try{t.displayName="HintText",t.__docgenInfo={description:"",displayName:"HintText",props:{context:{defaultValue:{value:"section"},description:"",name:"context",required:!1,type:{name:"enum",value:[{value:'"page"'},{value:'"section"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const T={title:"react/HintText",component:t,parameters:{layout:"centered"},argTypes:{children:{type:"string"},context:{control:{type:"select",options:["page","section"]}}}},o={args:{children:"HintText",context:"section"},render:n=>e.jsx(t,{...n})},s={args:{children:"LongLongLongLongLongLongLongLongLongText",context:"section"},render:n=>e.jsx("div",{style:{width:200},children:e.jsx(t,{...n})})};var r,a,c;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    children: 'HintText',
    context: 'section'
  },
  render: props => <HintText {...props} />
}`,...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var i,l,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: 'LongLongLongLongLongLongLongLongLongText',
    context: 'section'
  },
  render: props => <div style={{
    width: 200
  }}>
      <HintText {...props} />
    </div>
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};export{o as Default,s as NarrowWidth,T as default};
