import{n as e}from"./chunk-BneVvdWh.js";import{nt as t}from"./iframe-C5p5bqOx.js";import{n,t as r}from"./TextEllipsis-4RvCrEYn.js";var i,a,o,s,c,l,u;e((()=>{n(),i=t(),a={title:`react-sandbox/TextEllipsis`,component:r,parameters:{layout:`centered`},render(e){return(0,i.jsx)(`div`,{style:{width:200},children:(0,i.jsx)(r,{...e})})}},o={args:{lineHeight:24,lineLimit:1,children:`これは非常に長いテキストです。1行で収まらない場合に省略記号（...）で表示が切り詰められます。ホバーすると全文がツールチップで表示されます。`}},s={args:{lineHeight:24,lineLimit:1,children:`Single line ellipsis. This long text will be truncated with an ellipsis at the end.`}},c={args:{lineHeight:24,lineLimit:2,children:`複数行の省略表示です。lineLimit で指定した行数まで表示し、それ以降は...で省略されます。`}},l={args:{lineHeight:24,lineLimit:1,title:`カスタムのツールチップ文言`,children:`title を渡すとツールチップはその文言になります。`}},u={args:{lineHeight:24,lineLimit:1,title:``,children:`title="" を渡すとツールチップは表示されません。ホバーしても何も出ません。`}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    lineHeight: 24,
    lineLimit: 1,
    children: 'これは非常に長いテキストです。1行で収まらない場合に省略記号（...）で表示が切り詰められます。ホバーすると全文がツールチップで表示されます。'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    lineHeight: 24,
    lineLimit: 1,
    children: 'Single line ellipsis. This long text will be truncated with an ellipsis at the end.'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    lineHeight: 24,
    lineLimit: 2,
    children: '複数行の省略表示です。lineLimit で指定した行数まで表示し、それ以降は...で省略されます。'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    lineHeight: 24,
    lineLimit: 1,
    title: 'カスタムのツールチップ文言',
    children: 'title を渡すとツールチップはその文言になります。'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    lineHeight: 24,
    lineLimit: 1,
    title: '',
    children: 'title="" を渡すとツールチップは表示されません。ホバーしても何も出ません。'
  }
}`,...u.parameters?.docs?.source}}}}))();export{l as CustomTitle,o as Default,u as EmptyTitle,c as MultiLine,s as SingleLine,a as default};