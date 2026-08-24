import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n,i as r,n as i,o as a,r as o,s,t as c}from"./useNotificationQueue-CiDaY1MF.js";import{M as l,vt as u}from"./iframe-X81A_ItP.js";import{n as d,t as f}from"./Button-BFhLVLxs.js";var p=t((()=>{}));function m(e={}){"use memo";let t=(0,h.useRef)(null),n=(0,g.jsx)(_,{ref:t,...e});function r(e,n){t.current?.show(e,n)}return[n,r]}var h,g,_,v=t((()=>{s(),p(),h=e(u(),1),a(),r(),c(),g=l(),_=(0,h.forwardRef)(function({position:e=`top`,...t},r){"use memo";let{state:a,itemRef:s,enqueue:c,onHoverStart:l,onHoverEnd:u}=i(`toast`);function d(e,t){c({message:e,variant:t.variant},t.duration)}return(0,h.useImperativeHandle)(r,()=>({show:d})),(0,g.jsx)(o,{name:`toast`,state:a,position:e,...t,children:a.visibleToasts.map(e=>(0,g.jsx)(n,{name:`toast`,toast:e,state:a,itemRef:s,onHoverStart:l,onHoverEnd:u,"data-variant":e.content.variant},e.key))})});try{m.displayName=`useToast`,m.__docgenInfo={description:``,displayName:`useToast`,filePath:`/home/runner/work/charcoal/charcoal/packages/react/src/components/Notification/Toast/index.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Notification/types.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}},offset:{defaultValue:{value:`16`},declarations:[{fileName:`charcoal/packages/react/src/components/Notification/types.ts`,name:`TypeLiteral`}],description:`画面端からの距離（ピクセル）`,name:`offset`,required:!1,tags:{default:`16`},type:{name:`number`}},zIndex:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Notification/types.ts`,name:`TypeLiteral`}],description:``,name:`zIndex`,required:!1,tags:{},type:{name:`number`}},portalContainer:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Notification/types.ts`,name:`TypeLiteral`}],description:``,name:`portalContainer`,required:!1,tags:{},type:{name:`HTMLElement`}},position:{defaultValue:{value:`top`},declarations:[{fileName:`charcoal/packages/react/src/components/Notification/Toast/index.tsx`,name:`TypeLiteral`}],description:`Toast の表示位置`,name:`position`,required:!1,tags:{default:`'top'`},type:{name:`enum`,raw:`Position`,value:[{value:`"top"`},{value:`"bottom"`}]}}},tags:{}}}catch{}try{_.displayName=`Toast`,_.__docgenInfo={description:``,displayName:`Toast`,filePath:`/home/runner/work/charcoal/charcoal/packages/react/src/components/Notification/Toast/index.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Notification/types.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}},offset:{defaultValue:{value:`16`},declarations:[{fileName:`charcoal/packages/react/src/components/Notification/types.ts`,name:`TypeLiteral`}],description:`画面端からの距離（ピクセル）`,name:`offset`,required:!1,tags:{default:`16`},type:{name:`number`}},zIndex:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Notification/types.ts`,name:`TypeLiteral`}],description:``,name:`zIndex`,required:!1,tags:{},type:{name:`number`}},portalContainer:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Notification/types.ts`,name:`TypeLiteral`}],description:``,name:`portalContainer`,required:!1,tags:{},type:{name:`HTMLElement`}},position:{defaultValue:{value:`top`},declarations:[{fileName:`charcoal/packages/react/src/components/Notification/Toast/index.tsx`,name:`TypeLiteral`}],description:`Toast の表示位置`,name:`position`,required:!1,tags:{default:`'top'`},type:{name:`enum`,raw:`Position`,value:[{value:`"top"`},{value:`"bottom"`}]}},css:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/type.d.ts`,name:`Attributes`}],description:``,name:`css`,parent:{fileName:`charcoal/packages/react-sandbox/src/type.d.ts`,name:`Attributes`},required:!1,tags:{},type:{name:`CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>`}}},tags:{}}}catch{}}));function y({message:e,duration:t,variant:n,...r}){let[i,a]=m(r),o={duration:t,variant:n};return(0,b.useEffect)(()=>{},[e,a,n]),(0,x.jsxs)(x.Fragment,{children:[i,(0,x.jsx)(f,{onClick:()=>{a(e,o)},children:`show`})]})}var b,x,S,C,w,T,E,D;t((()=>{b=e(u(),1),d(),v(),x=l(),S={title:`react/unstable_Toast`,component:_,parameters:{layout:`centered`,tokenVersion:`v2`,docs:{description:{component:`同時に表示できるトーストは1つのみです。表示中に別のトーストが発生した場合はキューに積み、前のトーストが消えてから表示します。

別々の \`useToast\` を呼び出した場合は互いに独立するため、同時表示数は1件に制限されません。`}}},args:{message:`保存しました`,duration:5e3,variant:`success`},argTypes:{position:{options:[`top`,`bottom`],control:{type:`inline-radio`}},variant:{options:[`success`,`error`],control:{type:`inline-radio`}},message:{control:`text`},duration:{control:{type:`number`,min:0,step:500},description:`表示時間（ミリ秒）`}},render:e=>(0,x.jsx)(y,{...e})},C={parameters:{docs:{source:{language:`tsx`,code:`import { Button, unstable_useToast } from '@charcoal-ui/react'

export function Example() {
  const [toast, showToast] = unstable_useToast()

  return (
    <>
      {toast}
      <Button
        onClick={() => showToast('保存しました', { variant: 'success' })}
      >
        保存
      </Button>
    </>
  )
}`}}}},w={args:{variant:`error`,message:`保存に失敗しました`}},T={args:{message:`保存した内容はすべての端末に同期され、あとから設定画面で変更できます。長いメッセージは2行を超えると省略されます`}},E={args:{message:(0,x.jsxs)(x.Fragment,{children:[`保存に失敗しました`,(0,x.jsx)(`br`,{}),`通信環境を確認してください`]})}},D={args:{position:`bottom`,message:`下部に表示します`}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: \`import { Button, unstable_useToast } from '@charcoal-ui/react'

export function Example() {
  const [toast, showToast] = unstable_useToast()

  return (
    <>
      {toast}
      <Button
        onClick={() => showToast('保存しました', { variant: 'success' })}
      >
        保存
      </Button>
    </>
  )
}\`
      }
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    message: '保存に失敗しました'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    message: '保存した内容はすべての端末に同期され、あとから設定画面で変更できます。長いメッセージは2行を超えると省略されます'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    message: <>
        保存に失敗しました
        <br />
        通信環境を確認してください
      </>
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'bottom',
    message: '下部に表示します'
  }
}`,...D.parameters?.docs?.source}}}}))();export{D as Bottom,C as Default,w as Error,T as LongMessage,E as WithLineBreak,S as default};