import{n as e}from"./chunk-BneVvdWh.js";import{At as t,Dt as n,Ht as r,gt as i,kt as a,nt as o,pt as s}from"./iframe-C9I9vVUi.js";import{n as c,t as l}from"./Base-BaoUOokN.js";import{n as u,t as d}from"./styled-CK9M4wns.js";function f(){return(0,p.jsx)(l,{viewBoxSize:m,size:m,currentColor:!0,path:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`path`,{d:`M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183
           0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16Z`}),(0,p.jsx)(h,{d:`M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629
           4.68629 2 8 2C11.3137 2 14 4.68629 14 8ZM8 6.25C8.69036 6.25 9.25 5.69036
           9.25 5C9.25 4.30964 8.69036 3.75 8 3.75C7.30964 3.75 6.75 4.30964 6.75
           5C6.75 5.69036 7.30964 6.25 8 6.25ZM7 7.75V11.25C7 11.8023 7.44772 12.25
           8 12.25C8.55228 12.25 9 11.8023 9 11.25V7.75C9 7.19772 8.55228 6.75 8
           6.75C7.44772 6.75 7 7.19772 7 7.75Z`})]})})}var p,m,h,g=e((()=>{a(),c(),p=o(),m=16,h=t.path`
  fill: ${({theme:e})=>e.color.surface1};
  fill-rule: evenodd;
`}));function _({children:e,context:t,className:n}){return(0,b.jsxs)(x,{className:n,...v({children:e,context:t,className:n}),children:[(0,b.jsx)(S,{children:(0,b.jsx)(f,{})}),(0,b.jsx)(C,{children:e})]})}function v(e){return{...e,...y(e.context)}}function y(e){switch(e){case`page`:return{default:{horizontal:40,vertical:24},screen1:{horizontal:16,vertical:16}};case`section`:return{default:{horizontal:16,vertical:16},screen1:{horizontal:16,vertical:16}}}}var b,x,S,C,w=e((()=>{r(),a(),d(),g(),i(),b=o(),x=t.div`
  ${e=>u(t=>[t.bg.surface3,t.borderRadius(8),t.padding.vertical(e.default.vertical),t.padding.horizontal(e.default.horizontal)])}

  @media ${({theme:e})=>s(e.breakpoint.screen1)} {
    ${e=>u(t=>[t.padding.vertical(e.screen1.vertical),t.padding.horizontal(e.screen1.horizontal)])}
  }

  display: flex;
  align-items: flex-start;
  ${e=>e.context===`page`&&n`
      justify-content: center;
    `}
`,S=t.div`
  display: flex;
  align-items: center;
  color: ${e=>e.theme.color.text4};
  height: 22px;
  margin: -4px 4px -4px 0;
`,C=t.p`
  ${u(e=>[e.font.text2,e.typography(14)])}
  margin: 0;
  min-width: 0;
  overflow-wrap: break-word;
`;try{_.displayName=`HintText`,_.__docgenInfo={description:``,displayName:`HintText`,filePath:`/home/runner/work/charcoal/charcoal/packages/react-sandbox/src/components/HintText/index.tsx`,methods:[],props:{context:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/HintText/index.tsx`,name:`Props`}],description:``,name:`context`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/HintText/index.tsx`,name:`Props`},required:!0,tags:{},type:{name:`enum`,raw:`Context`,value:[{value:`"section"`},{value:`"page"`}]}},className:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/HintText/index.tsx`,name:`Props`}],description:``,name:`className`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/HintText/index.tsx`,name:`Props`},required:!1,tags:{},type:{name:`string`}}},tags:{deprecated:`use HintText from`,"charcoal-ui":`/react`}}}catch{}})),T,E,D,O;e((()=>{w(),T=o(),E={title:`react-sandbox/HintText`,component:_,parameters:{layout:`centered`},argTypes:{children:{type:`string`},context:{control:{type:`select`,options:[`page`,`section`]}}}},D={args:{children:`HintText`,context:`section`},render:e=>(0,T.jsx)(_,{...e})},O={args:{children:`LongLongLongLongLongLongLongLongLongText`,context:`section`},render:e=>(0,T.jsx)(`div`,{style:{width:200},children:(0,T.jsx)(_,{...e})})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'HintText',
    context: 'section'
  },
  render: props => <HintText {...props} />
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'LongLongLongLongLongLongLongLongLongText',
    context: 'section'
  },
  render: props => <div style={{
    width: 200
  }}>
      <HintText {...props} />
    </div>
}`,...O.parameters?.docs?.source}}}}))();export{D as Default,O as NarrowWidth,E as default};