import{n as e}from"./chunk-BneVvdWh.js";import{j as t}from"./iframe-DrTBVNfQ.js";import{n,t as r}from"./useClassNames-CfeYxrZp.js";import{n as i,t as a}from"./Icon-ClFGDCaQ.js";var o=e((()=>{}));function s({children:e,context:t=`section`,className:r}){return(0,c.jsxs)(`div`,{className:n(`charcoal-hint-text`,r),"data-context":t,children:[(0,c.jsx)(`div`,{className:`charcoal-hint-text-icon`,children:(0,c.jsx)(a,{name:`16/Info`})}),(0,c.jsx)(`p`,{className:`charcoal-hint-text-message`,children:e})]})}var c,l=e((()=>{i(),o(),r(),c=t();try{s.displayName=`HintText`,s.__docgenInfo={description:``,displayName:`HintText`,filePath:`/home/runner/work/charcoal/charcoal/packages/react/src/components/HintText/index.tsx`,methods:[],props:{context:{defaultValue:{value:`section`},declarations:[{fileName:`charcoal/packages/react/src/components/HintText/index.tsx`,name:`HintTextProps`}],description:``,name:`context`,parent:{fileName:`charcoal/packages/react/src/components/HintText/index.tsx`,name:`HintTextProps`},required:!1,tags:{},type:{name:`enum`,raw:`HintTextContext`,value:[{value:`"page"`},{value:`"section"`}]}},className:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/HintText/index.tsx`,name:`HintTextProps`}],description:``,name:`className`,parent:{fileName:`charcoal/packages/react/src/components/HintText/index.tsx`,name:`HintTextProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),u,d,f,p,m;e((()=>{l(),u=t(),d={title:`react/HintText`,component:s,parameters:{layout:`centered`},argTypes:{children:{type:`string`},context:{control:{type:`select`,options:[`page`,`section`]}}}},f={args:{children:`HintText`,context:`section`},render:e=>(0,u.jsx)(s,{...e})},p={args:{children:`LongLongLongLongLongLongLongLongLongText`,context:`section`},render:e=>(0,u.jsx)(`div`,{style:{width:200},children:(0,u.jsx)(s,{...e})})},m={parameters:{tokenVersion:`v2`},render:()=>(0,u.jsxs)(`div`,{style:{display:`grid`,gap:16,width:320},children:[(0,u.jsx)(s,{context:`section`,children:`Section hint text`}),(0,u.jsx)(s,{context:`page`,children:`Page hint text`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'HintText',
    context: 'section'
  },
  render: props => <HintText {...props} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'LongLongLongLongLongLongLongLongLongText',
    context: 'section'
  },
  render: props => <div style={{
    width: 200
  }}>
      <HintText {...props} />
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    tokenVersion: 'v2'
  },
  render: () => <div style={{
    display: 'grid',
    gap: 16,
    width: 320
  }}>
      <HintText context="section">Section hint text</HintText>
      <HintText context="page">Page hint text</HintText>
    </div>
}`,...m.parameters?.docs?.source}}}}))();export{f as Default,p as NarrowWidth,m as TokenV2,d as default};