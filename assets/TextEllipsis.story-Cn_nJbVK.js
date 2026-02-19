import{r as a,j as i}from"./iframe-Da7rVJAF.js";import{u as oe}from"./useClassNames-BXHHFAPw.js";import"./preload-helper-C1FmrZbK.js";const ue=(e,s,n)=>{if(!e)return;const r=s??re(n);if(r)return r},L=e=>a.isValidElement(e)&&!!e.props.children,E=e=>typeof e>"u"||e===null||typeof e=="boolean"||JSON.stringify(e)==="{}"?"":e.toString(),re=e=>!Array.isArray(e)&&!a.isValidElement(e)?E(e):a.Children.toArray(e).reduce((s,n)=>{let r="";return a.isValidElement(n)&&L(n)?r=re(n.props.children):a.isValidElement(n)&&!L(n)?r="":r=E(n),s.concat(r)},"");function t({lineHeight:e,lineLimit:s=1,children:n,title:r,hyphens:te="auto",showTooltip:se=!0,useNowrap:w=!1,...x}){"use memo";const ae=ue(se,r,n),le=oe("charcoal-text-ellipsis",x.className),H=e!==void 0;return i.jsx("div",{...x,className:le,"data-line-limit":s,"data-has-line-height":H,...w?{"data-use-nowrap":w}:{},style:{...H&&{"--charcoal-text-ellipsis-line-height":`${e}px`},"--charcoal-text-ellipsis-line-limit":s,hyphens:te,...x.style},title:ae,children:n})}try{t.displayName="TextEllipsis",t.__docgenInfo={description:"複数行のテキストに表示行数制限を設けて`...`で省略する",displayName:"TextEllipsis",props:{lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:"number"}},lineLimit:{defaultValue:{value:"1"},description:"",name:"lineLimit",required:!1,type:{name:"number"}},hyphens:{defaultValue:{value:"auto"},description:"",name:"hyphens",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"inherit"'},{value:'"auto"'},{value:'"initial"'},{value:'"-moz-initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"manual"'}]}},showTooltip:{defaultValue:{value:"true"},description:"html title属性を付与。false のときは付与せず、空文字のときは表示しない",name:"showTooltip",required:!1,type:{name:"boolean"}},useNowrap:{defaultValue:{value:"false"},description:"",name:"useNowrap",required:!1,type:{name:"boolean"}}}}}catch{}const he={title:"react/TextEllipsis",component:t,parameters:{layout:"centered"},render(e){return i.jsx("div",{style:{width:200},children:i.jsx(t,{...e})})}},l={args:{lineHeight:24,lineLimit:1,children:"これは非常に長いテキストです。1行で収まらない場合に省略記号（...）で表示が切り詰められます。ホバーすると全文がツールチップで表示されます。"}},o={args:{lineHeight:24,lineLimit:1,children:"Single line ellipsis. This long text will be truncated with an ellipsis at the end."}},u={args:{lineHeight:24,lineLimit:2,children:"複数行の省略表示です。lineLimit で指定した行数まで表示し、それ以降は...で省略されます。"}},d={args:{lineHeight:24,lineLimit:1,title:"カスタムのツールチップ文言",children:"title を渡すとツールチップはその文言になります。"}},c={args:{lineHeight:24,lineLimit:1,title:"",children:'title="" を渡すとツールチップは表示されません。ホバーしても何も出ません。'}},f=e=>i.jsx("div",{style:{width:80},lang:"en",children:i.jsx(t,{...e})}),p={args:{lineHeight:24,lineLimit:2,hyphens:"auto",children:"internationalization"},render:f},h={args:{lineHeight:24,lineLimit:2,hyphens:"manual",children:"inter­national­ization"},render:f},m={args:{lineHeight:24,lineLimit:2,hyphens:"none",children:"internationalization"},render:f},g={args:{lineLimit:2,children:"lineHeight を指定しない場合、親の line-height を継承します。"},render:e=>i.jsx("div",{style:{lineHeight:1.8,width:200},children:i.jsx(t,{...e})})},v={args:{lineHeight:24,lineLimit:1,showTooltip:!1,children:"showTooltip=false の場合、ホバーしてもツールチップは表示されません。"}},y={render(){return i.jsxs("div",{style:{width:240,borderInline:"2px solid var(--charcoal-border)"},children:[i.jsxs("div",{style:{width:"100%",display:"flex",gap:8},children:[i.jsx("div",{children:i.jsx(t,{children:"これは非常に長いテキストです。"})}),i.jsx("div",{children:"useNowrap={false}"})]}),i.jsxs("div",{style:{width:"100%",display:"flex",gap:8},children:[i.jsx("div",{children:i.jsx(t,{useNowrap:!0,children:"これは非常に長いテキストです。"})}),i.jsx("div",{children:"useNowrap={true}"})]})]})}};var T,j,S;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    lineHeight: 24,
    lineLimit: 1,
    children: 'これは非常に長いテキストです。1行で収まらない場合に省略記号（...）で表示が切り詰められます。ホバーすると全文がツールチップで表示されます。'
  }
}`,...(S=(j=l.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var N,A,b;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    lineHeight: 24,
    lineLimit: 1,
    children: 'Single line ellipsis. This long text will be truncated with an ellipsis at the end.'
  }
}`,...(b=(A=o.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var C,D,V;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    lineHeight: 24,
    lineLimit: 2,
    children: '複数行の省略表示です。lineLimit で指定した行数まで表示し、それ以降は...で省略されます。'
  }
}`,...(V=(D=u.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var _,z,B;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    lineHeight: 24,
    lineLimit: 1,
    title: 'カスタムのツールチップ文言',
    children: 'title を渡すとツールチップはその文言になります。'
  }
}`,...(B=(z=d.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var q,R,F;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    lineHeight: 24,
    lineLimit: 1,
    title: '',
    children: 'title="" を渡すとツールチップは表示されません。ホバーしても何も出ません。'
  }
}`,...(F=(R=c.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var I,M,J;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    lineHeight: 24,
    lineLimit: 2,
    hyphens: 'auto',
    children: 'internationalization'
  },
  render: narrowRender
}`,...(J=(M=p.parameters)==null?void 0:M.docs)==null?void 0:J.source}}};var O,$,k;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    lineHeight: 24,
    lineLimit: 2,
    hyphens: 'manual',
    children: 'inter\\u00ADnational\\u00ADization'
  },
  render: narrowRender
}`,...(k=($=h.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var G,K,P;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    lineHeight: 24,
    lineLimit: 2,
    hyphens: 'none',
    children: 'internationalization'
  },
  render: narrowRender
}`,...(P=(K=m.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var Q,U,W;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(W=(U=g.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,Y,Z;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    lineHeight: 24,
    lineLimit: 1,
    showTooltip: false,
    children: 'showTooltip=false の場合、ホバーしてもツールチップは表示されません。'
  }
}`,...(Z=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ie,ne;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render() {
    return <div style={{
      width: 240,
      borderInline: '2px solid var(--charcoal-border)'
    }}>
        <div style={{
        width: '100%',
        display: 'flex',
        gap: 8
      }}>
          <div>
            <TextEllipsis>これは非常に長いテキストです。</TextEllipsis>
          </div>
          <div>{'useNowrap={false}'}</div>
        </div>

        <div style={{
        width: '100%',
        display: 'flex',
        gap: 8
      }}>
          <div>
            <TextEllipsis useNowrap>
              これは非常に長いテキストです。
            </TextEllipsis>
          </div>
          <div>{'useNowrap={true}'}</div>
        </div>
      </div>;
  }
}`,...(ne=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:ne.source}}};export{d as CustomTitle,l as Default,c as EmptyTitle,p as HyphensAuto,h as HyphensManual,m as HyphensNone,g as LineHeightInherit,u as MultiLine,v as ShowTooltipFalse,o as SingleLine,he as default,y as useLineClamp};
