import{r as s,j as r}from"./iframe-Czr9xm4W.js";import{u as re}from"./useClassNames-D5KySjxO.js";import"./preload-helper-C1FmrZbK.js";const te=(e,t,i)=>{if(!e)return;const n=t??Y(i);if(n)return n},v=e=>s.isValidElement(e)&&!!e.props.children,x=e=>typeof e>"u"||e===null||typeof e=="boolean"||JSON.stringify(e)==="{}"?"":e.toString(),Y=e=>!Array.isArray(e)&&!s.isValidElement(e)?x(e):s.Children.toArray(e).reduce((t,i)=>{let n="";return s.isValidElement(i)&&v(i)?n=Y(i.props.children):s.isValidElement(i)&&!v(i)?n="":n=x(i),t.concat(n)},"");function a({lineHeight:e,lineLimit:t=1,children:i,title:n,hyphens:Z="auto",showTooltip:ee=!0,...f}){const ie=te(ee,n,i),ne=re("charcoal-text-ellipsis",f.className),L=e!==void 0;return r.jsx("div",{...f,className:ne,"data-line-limit":t,"data-has-line-height":L,style:{...L&&{"--charcoal-text-ellipsis-line-height":`${e}px`},"--charcoal-text-ellipsis-line-limit":t,hyphens:Z,...f.style},title:ie,children:i})}try{a.displayName="TextEllipsis",a.__docgenInfo={description:"複数行のテキストに表示行数制限を設けて`...`で省略する",displayName:"TextEllipsis",props:{lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:"number"}},lineLimit:{defaultValue:{value:"1"},description:"",name:"lineLimit",required:!1,type:{name:"number"}},hyphens:{defaultValue:{value:"auto"},description:"",name:"hyphens",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"inherit"'},{value:'"auto"'},{value:'"initial"'},{value:'"-moz-initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"manual"'}]}},showTooltip:{defaultValue:{value:"true"},description:"html title属性を付与。false のときは付与せず、空文字のときは表示しない",name:"showTooltip",required:!1,type:{name:"boolean"}}}}}catch{}const oe={title:"react/TextEllipsis",component:a,parameters:{layout:"centered"},render(e){return r.jsx("div",{style:{width:200},children:r.jsx(a,{...e})})}},l={args:{lineHeight:24,lineLimit:1,children:"これは非常に長いテキストです。1行で収まらない場合に省略記号（...）で表示が切り詰められます。ホバーすると全文がツールチップで表示されます。"}},o={args:{lineHeight:24,lineLimit:1,children:"Single line ellipsis. This long text will be truncated with an ellipsis at the end."}},u={args:{lineHeight:24,lineLimit:2,children:"複数行の省略表示です。lineLimit で指定した行数まで表示し、それ以降は...で省略されます。"}},c={args:{lineHeight:24,lineLimit:1,title:"カスタムのツールチップ文言",children:"title を渡すとツールチップはその文言になります。"}},d={args:{lineHeight:24,lineLimit:1,title:"",children:'title="" を渡すとツールチップは表示されません。ホバーしても何も出ません。'}},H=e=>r.jsx("div",{style:{width:80},lang:"en",children:r.jsx(a,{...e})}),m={args:{lineHeight:24,lineLimit:2,hyphens:"auto",children:"internationalization"},render:H},p={args:{lineHeight:24,lineLimit:2,hyphens:"manual",children:"inter­national­ization"},render:H},h={args:{lineHeight:24,lineLimit:2,hyphens:"none",children:"internationalization"},render:H},g={args:{lineLimit:2,children:"lineHeight を指定しない場合、親の line-height を継承します。"},render:e=>r.jsx("div",{style:{lineHeight:1.8,width:200},children:r.jsx(a,{...e})})},y={args:{lineHeight:24,lineLimit:1,showTooltip:!1,children:"showTooltip=false の場合、ホバーしてもツールチップは表示されません。"}};var E,T,w;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    lineHeight: 24,
    lineLimit: 1,
    children: 'これは非常に長いテキストです。1行で収まらない場合に省略記号（...）で表示が切り詰められます。ホバーすると全文がツールチップで表示されます。'
  }
}`,...(w=(T=l.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var S,A,j;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    lineHeight: 24,
    lineLimit: 1,
    children: 'Single line ellipsis. This long text will be truncated with an ellipsis at the end.'
  }
}`,...(j=(A=o.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var C,D,_;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    lineHeight: 24,
    lineLimit: 2,
    children: '複数行の省略表示です。lineLimit で指定した行数まで表示し、それ以降は...で省略されます。'
  }
}`,...(_=(D=u.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var N,V,z;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    lineHeight: 24,
    lineLimit: 1,
    title: 'カスタムのツールチップ文言',
    children: 'title を渡すとツールチップはその文言になります。'
  }
}`,...(z=(V=c.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var b,B,R;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    lineHeight: 24,
    lineLimit: 1,
    title: '',
    children: 'title="" を渡すとツールチップは表示されません。ホバーしても何も出ません。'
  }
}`,...(R=(B=d.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var q,F,I;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    lineHeight: 24,
    lineLimit: 2,
    hyphens: 'auto',
    children: 'internationalization'
  },
  render: narrowRender
}`,...(I=(F=m.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var M,J,O;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    lineHeight: 24,
    lineLimit: 2,
    hyphens: 'manual',
    children: 'inter\\u00ADnational\\u00ADization'
  },
  render: narrowRender
}`,...(O=(J=p.parameters)==null?void 0:J.docs)==null?void 0:O.source}}};var $,k,G;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    lineHeight: 24,
    lineLimit: 2,
    hyphens: 'none',
    children: 'internationalization'
  },
  render: narrowRender
}`,...(G=(k=h.parameters)==null?void 0:k.docs)==null?void 0:G.source}}};var K,P,Q;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    lineLimit: 2,
    children: 'lineHeight を指定しない場合、親の line-height を継承します。'
  },
  render: args => <div style={{
    lineHeight: 1.8,
    width: 200
  }}>
      <TextEllipsis {...args} />
    </div>
}`,...(Q=(P=g.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var U,W,X;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    lineHeight: 24,
    lineLimit: 1,
    showTooltip: false,
    children: 'showTooltip=false の場合、ホバーしてもツールチップは表示されません。'
  }
}`,...(X=(W=y.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};export{c as CustomTitle,l as Default,d as EmptyTitle,m as HyphensAuto,p as HyphensManual,h as HyphensNone,g as LineHeightInherit,u as MultiLine,y as ShowTooltipFalse,o as SingleLine,oe as default};
