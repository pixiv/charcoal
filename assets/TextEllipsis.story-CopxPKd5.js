import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Ht as n,nt as r}from"./iframe-CKoxdw4A.js";import{n as i,t as a}from"./useClassNames-yOcqPuiB.js";var o=t((()=>{})),s,c,l,u,d,f=t((()=>{s=e(n(),1),c=(e,t,n)=>{if(!e)return;let r=t??d(n);if(r)return r},l=e=>(0,s.isValidElement)(e)&&!!e.props.children,u=e=>e==null||typeof e==`boolean`||JSON.stringify(e)===`{}`?``:e.toString(),d=e=>!Array.isArray(e)&&!(0,s.isValidElement)(e)?u(e):s.Children.toArray(e).reduce((e,t)=>{let n=``;return n=(0,s.isValidElement)(t)&&l(t)?d(t.props.children):(0,s.isValidElement)(t)&&!l(t)?``:u(t),e.concat(n)},``)}));function p({lineHeight:e,lineLimit:t=1,children:n,title:r,hyphens:a=`auto`,showTooltip:o=!0,useNowrap:s=!1,...l}){"use memo";let u=c(o,r,n),d=i(`charcoal-text-ellipsis`,l.className),f=e!==void 0;return(0,m.jsx)(`div`,{...l,className:d,"data-line-limit":t,"data-has-line-height":f,...s?{"data-use-nowrap":s}:{},style:{...f&&{"--charcoal-text-ellipsis-line-height":`${e}px`},"--charcoal-text-ellipsis-line-limit":t,hyphens:a,...l.style},title:u,children:n})}var m,h=t((()=>{o(),f(),a(),m=r();try{p.displayName=`TextEllipsis`,p.__docgenInfo={description:"複数行のテキストに表示行数制限を設けて`...`で省略する",displayName:`TextEllipsis`,filePath:`/home/runner/work/charcoal/charcoal/packages/react/src/components/TextEllipsis/index.tsx`,methods:[],props:{lineHeight:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/TextEllipsis/index.tsx`,name:`TypeLiteral`}],description:``,name:`lineHeight`,required:!1,tags:{},type:{name:`number`}},lineLimit:{defaultValue:{value:`1`},declarations:[{fileName:`charcoal/packages/react/src/components/TextEllipsis/index.tsx`,name:`TypeLiteral`}],description:``,name:`lineLimit`,required:!1,tags:{},type:{name:`number`}},hyphens:{defaultValue:{value:`auto`},declarations:[{fileName:`charcoal/packages/react/src/components/TextEllipsis/index.tsx`,name:`TypeLiteral`}],description:``,name:`hyphens`,required:!1,tags:{default:`'auto'`},type:{name:`enum`,raw:`Hyphens`,value:[{value:`"none"`},{value:`"inherit"`},{value:`"auto"`},{value:`"initial"`},{value:`"-moz-initial"`},{value:`"revert"`},{value:`"revert-layer"`},{value:`"unset"`},{value:`"manual"`}]}},showTooltip:{defaultValue:{value:`true`},declarations:[{fileName:`charcoal/packages/react/src/components/TextEllipsis/index.tsx`,name:`TypeLiteral`}],description:`html title属性を付与。false のときは付与せず、空文字のときは表示しない`,name:`showTooltip`,required:!1,tags:{default:`true`},type:{name:`boolean`}},useNowrap:{defaultValue:{value:`false`},declarations:[{fileName:`charcoal/packages/react/src/components/TextEllipsis/index.tsx`,name:`TypeLiteral`}],description:``,name:`useNowrap`,required:!1,tags:{default:`false
true: use white-space: nowrap if lineLimit is 1
false: use -webkit-line-clamp if lineLimit is 1`},type:{name:`boolean`}},css:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/type.d.ts`,name:`Attributes`}],description:``,name:`css`,parent:{fileName:`charcoal/packages/react-sandbox/src/type.d.ts`,name:`Attributes`},required:!1,tags:{},type:{name:`CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>`}}},tags:{}}}catch{}})),g,_,v,y,b,x,S,C,w,T,E,D,O,k;t((()=>{h(),g=r(),_={title:`react/TextEllipsis`,component:p,parameters:{layout:`centered`},render(e){return(0,g.jsx)(`div`,{style:{width:200},children:(0,g.jsx)(p,{...e})})}},v={args:{lineHeight:24,lineLimit:1,children:`これは非常に長いテキストです。1行で収まらない場合に省略記号（...）で表示が切り詰められます。ホバーすると全文がツールチップで表示されます。`}},y={args:{lineHeight:24,lineLimit:1,children:`Single line ellipsis. This long text will be truncated with an ellipsis at the end.`}},b={args:{lineHeight:24,lineLimit:2,children:`複数行の省略表示です。lineLimit で指定した行数まで表示し、それ以降は...で省略されます。`}},x={args:{lineHeight:24,lineLimit:1,title:`カスタムのツールチップ文言`,children:`title を渡すとツールチップはその文言になります。`}},S={args:{lineHeight:24,lineLimit:1,title:``,children:`title="" を渡すとツールチップは表示されません。ホバーしても何も出ません。`}},C=e=>(0,g.jsx)(`div`,{style:{width:80},lang:`en`,children:(0,g.jsx)(p,{...e})}),w={args:{lineHeight:24,lineLimit:2,hyphens:`auto`,children:`internationalization`},render:C},T={args:{lineHeight:24,lineLimit:2,hyphens:`manual`,children:`inter­national­ization`},render:C},E={args:{lineHeight:24,lineLimit:2,hyphens:`none`,children:`internationalization`},render:C},D={args:{lineLimit:2,children:`lineHeight を指定しない場合、親の line-height を継承します。`},render:e=>(0,g.jsx)(`div`,{style:{lineHeight:1.8,width:200},children:(0,g.jsx)(p,{...e})})},O={args:{lineHeight:24,lineLimit:1,showTooltip:!1,children:`showTooltip=false の場合、ホバーしてもツールチップは表示されません。`}},k={render(){return(0,g.jsxs)(`div`,{style:{width:240,borderInline:`2px solid var(--charcoal-border)`},children:[(0,g.jsxs)(`div`,{style:{width:`100%`,display:`flex`,gap:8},children:[(0,g.jsx)(`div`,{children:(0,g.jsx)(p,{children:`これは非常に長いテキストです。`})}),(0,g.jsx)(`div`,{children:`useNowrap={false}`})]}),(0,g.jsxs)(`div`,{style:{width:`100%`,display:`flex`,gap:8},children:[(0,g.jsx)(`div`,{children:(0,g.jsx)(p,{useNowrap:!0,children:`これは非常に長いテキストです。`})}),(0,g.jsx)(`div`,{children:`useNowrap={true}`})]})]})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    lineHeight: 24,
    lineLimit: 1,
    children: 'これは非常に長いテキストです。1行で収まらない場合に省略記号（...）で表示が切り詰められます。ホバーすると全文がツールチップで表示されます。'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    lineHeight: 24,
    lineLimit: 1,
    children: 'Single line ellipsis. This long text will be truncated with an ellipsis at the end.'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    lineHeight: 24,
    lineLimit: 2,
    children: '複数行の省略表示です。lineLimit で指定した行数まで表示し、それ以降は...で省略されます。'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    lineHeight: 24,
    lineLimit: 1,
    title: 'カスタムのツールチップ文言',
    children: 'title を渡すとツールチップはその文言になります。'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    lineHeight: 24,
    lineLimit: 1,
    title: '',
    children: 'title="" を渡すとツールチップは表示されません。ホバーしても何も出ません。'
  }
}`,...S.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    lineHeight: 24,
    lineLimit: 2,
    hyphens: 'auto',
    children: 'internationalization'
  },
  render: narrowRender
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    lineHeight: 24,
    lineLimit: 2,
    hyphens: 'manual',
    children: 'inter\\u00ADnational\\u00ADization'
  },
  render: narrowRender
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    lineHeight: 24,
    lineLimit: 2,
    hyphens: 'none',
    children: 'internationalization'
  },
  render: narrowRender
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    lineHeight: 24,
    lineLimit: 1,
    showTooltip: false,
    children: 'showTooltip=false の場合、ホバーしてもツールチップは表示されません。'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}}}))();export{x as CustomTitle,v as Default,S as EmptyTitle,w as HyphensAuto,T as HyphensManual,E as HyphensNone,D as LineHeightInherit,b as MultiLine,O as ShowTooltipFalse,y as SingleLine,_ as default,k as useLineClamp};