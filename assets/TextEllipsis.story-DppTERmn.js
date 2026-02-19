import{j as s}from"./iframe-D-iARKYw.js";import{T as l}from"./index-D0zPDZfO.js";import"./preload-helper-C1FmrZbK.js";const b={title:"react-sandbox/TextEllipsis",component:l,parameters:{layout:"centered"},render(E){return s.jsx("div",{style:{width:200},children:s.jsx(l,{...E})})}},e={args:{lineHeight:24,lineLimit:1,children:"これは非常に長いテキストです。1行で収まらない場合に省略記号（...）で表示が切り詰められます。ホバーすると全文がツールチップで表示されます。"}},i={args:{lineHeight:24,lineLimit:1,children:"Single line ellipsis. This long text will be truncated with an ellipsis at the end."}},t={args:{lineHeight:24,lineLimit:2,children:"複数行の省略表示です。lineLimit で指定した行数まで表示し、それ以降は...で省略されます。"}},r={args:{lineHeight:24,lineLimit:1,title:"カスタムのツールチップ文言",children:"title を渡すとツールチップはその文言になります。"}},n={args:{lineHeight:24,lineLimit:1,title:"",children:'title="" を渡すとツールチップは表示されません。ホバーしても何も出ません。'}};var a,o,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    lineHeight: 24,
    lineLimit: 1,
    children: 'これは非常に長いテキストです。1行で収まらない場合に省略記号（...）で表示が切り詰められます。ホバーすると全文がツールチップで表示されます。'
  }
}`,...(c=(o=e.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var m,d,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    lineHeight: 24,
    lineLimit: 1,
    children: 'Single line ellipsis. This long text will be truncated with an ellipsis at the end.'
  }
}`,...(p=(d=i.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var g,h,u;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    lineHeight: 24,
    lineLimit: 2,
    children: '複数行の省略表示です。lineLimit で指定した行数まで表示し、それ以降は...で省略されます。'
  }
}`,...(u=(h=t.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var L,x,H;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    lineHeight: 24,
    lineLimit: 1,
    title: 'カスタムのツールチップ文言',
    children: 'title を渡すとツールチップはその文言になります。'
  }
}`,...(H=(x=r.parameters)==null?void 0:x.docs)==null?void 0:H.source}}};var S,T,w;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    lineHeight: 24,
    lineLimit: 1,
    title: '',
    children: 'title="" を渡すとツールチップは表示されません。ホバーしても何も出ません。'
  }
}`,...(w=(T=n.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};export{r as CustomTitle,e as Default,n as EmptyTitle,t as MultiLine,i as SingleLine,b as default};
