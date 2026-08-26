import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n,i as r,n as i,o as a,r as o,s,t as c}from"./useNotificationQueue-Dqshp0VD.js";import{M as l,vt as u}from"./iframe-CjyWEF8n.js";import{n as d,t as f}from"./Button-Z7TSnxn3.js";var p=t((()=>{}));function m(e={}){"use memo";let t=(0,h.useRef)(null),n=(0,g.jsx)(_,{ref:t,...e});function r(e,n){t.current?.show(e,n)}return[n,r]}var h,g,_,v=t((()=>{s(),p(),h=e(u(),1),a(),r(),c(),g=l(),_=(0,h.forwardRef)(function({position:e=`top`,duration:t,order:r,...a},s){"use memo";let{state:c,itemRef:l,enqueue:u,onHoverStart:d,onHoverEnd:f}=i(`toast`,{duration:t,order:r});function p(e,t){u({message:e,type:t.type})}return(0,h.useImperativeHandle)(s,()=>({show:p})),(0,g.jsx)(o,{name:`toast`,state:c,position:e,...a,children:c.visibleToasts.map(e=>(0,g.jsx)(n,{name:`toast`,toast:e,state:c,itemRef:l,onHoverStart:d,onHoverEnd:f,"data-type":e.content.type},e.key))})});try{m.displayName=`useToast`,m.__docgenInfo={description:``,displayName:`useToast`,filePath:`/home/runner/work/charcoal/charcoal/packages/react/src/components/Notification/Toast/index.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Notification/types.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},offset:{defaultValue:{value:`16`},declarations:[{fileName:`charcoal/packages/react/src/components/Notification/types.ts`,name:`TypeLiteral`}],description:`画面端からの距離（ピクセル）`,name:`offset`,required:!1,tags:{default:`16`},type:{name:`number | undefined`}},order:{defaultValue:{value:`'queue'`},declarations:[{fileName:`charcoal/packages/react/src/components/Notification/types.ts`,name:`TypeLiteral`}],description:`表示中の通知がある場合の次の通知の表示方法`,name:`order`,required:!1,tags:{default:`'queue'`},type:{name:`NotificationOrder | undefined`}},zIndex:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Notification/types.ts`,name:`TypeLiteral`}],description:``,name:`zIndex`,required:!1,tags:{},type:{name:`number | undefined`}},portalContainer:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Notification/types.ts`,name:`TypeLiteral`}],description:``,name:`portalContainer`,required:!1,tags:{},type:{name:`HTMLElement | undefined`}},duration:{defaultValue:{value:`5000`},declarations:[{fileName:`charcoal/packages/react/src/components/Notification/types.ts`,name:`TypeLiteral`}],description:`通知を表示する時間（ミリ秒）。負の値は 0、数値でない値は 5000 として扱う`,name:`duration`,required:!1,tags:{default:`5000`},type:{name:`number | undefined`}},position:{defaultValue:{value:`top`},declarations:[{fileName:`charcoal/packages/react/src/components/Notification/Toast/index.tsx`,name:`TypeLiteral`}],description:`Toast の表示位置`,name:`position`,required:!1,tags:{default:`'top'`},type:{name:`Position | undefined`}}},tags:{}}}catch{}try{_.displayName=`Toast`,_.__docgenInfo={description:``,displayName:`Toast`,filePath:`/home/runner/work/charcoal/charcoal/packages/react/src/components/Notification/Toast/index.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Notification/types.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},offset:{defaultValue:{value:`16`},declarations:[{fileName:`charcoal/packages/react/src/components/Notification/types.ts`,name:`TypeLiteral`}],description:`画面端からの距離（ピクセル）`,name:`offset`,required:!1,tags:{default:`16`},type:{name:`number | undefined`}},order:{defaultValue:{value:`'queue'`},declarations:[{fileName:`charcoal/packages/react/src/components/Notification/types.ts`,name:`TypeLiteral`}],description:`表示中の通知がある場合の次の通知の表示方法`,name:`order`,required:!1,tags:{default:`'queue'`},type:{name:`NotificationOrder | undefined`}},zIndex:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Notification/types.ts`,name:`TypeLiteral`}],description:``,name:`zIndex`,required:!1,tags:{},type:{name:`number | undefined`}},portalContainer:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Notification/types.ts`,name:`TypeLiteral`}],description:``,name:`portalContainer`,required:!1,tags:{},type:{name:`HTMLElement | undefined`}},duration:{defaultValue:{value:`5000`},declarations:[{fileName:`charcoal/packages/react/src/components/Notification/types.ts`,name:`TypeLiteral`}],description:`通知を表示する時間（ミリ秒）。負の値は 0、数値でない値は 5000 として扱う`,name:`duration`,required:!1,tags:{default:`5000`},type:{name:`number | undefined`}},position:{defaultValue:{value:`top`},declarations:[{fileName:`charcoal/packages/react/src/components/Notification/Toast/index.tsx`,name:`TypeLiteral`}],description:`Toast の表示位置`,name:`position`,required:!1,tags:{default:`'top'`},type:{name:`Position | undefined`}},css:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/type.d.ts`,name:`Attributes`}],description:``,name:`css`,parent:{fileName:`charcoal/packages/react-sandbox/src/type.d.ts`,name:`Attributes`},required:!1,tags:{},type:{name:`CSSProp<DefaultTheme> | ThemeProp<DefaultTheme> | undefined`}}},tags:{}}}catch{}}));function y({message:e,type:t,...n}){let[r,i]=m(n),a={type:t};return(0,b.useEffect)(()=>{},[e,i,t]),(0,x.jsxs)(x.Fragment,{children:[r,(0,x.jsx)(f,{onClick:()=>{i(e,a)},children:`show`})]})}var b,x,S,C,w,T,E,D;t((()=>{b=e(u(),1),d(),v(),x=l(),S={title:`react/Toast`,component:_,parameters:{layout:`centered`,tokenVersion:`v2`,controls:{sort:`requiredFirst`},docs:{description:{component:"同時に表示できるトーストは1つのみです。表示中に別のトーストが発生した場合は、`order` に応じてキューに積むか、表示中のトーストを置き換えます。\n\n別々の `useToast` を呼び出した場合は互いに独立するため、同時表示数は1件に制限されません。"}}},args:{message:`保存しました`,position:`top`,offset:16,duration:5e3,order:`queue`,zIndex:20,type:`success`},argTypes:{position:{options:[`top`,`bottom`],control:{type:`inline-radio`},table:{category:`Hook`,defaultValue:{summary:`'top'`}}},offset:{control:{type:`number`,min:0,step:1},table:{category:`Hook`,defaultValue:{summary:`16`}}},duration:{control:{type:`number`,min:0,step:500},description:`表示時間（ミリ秒）`,table:{category:`Hook`,defaultValue:{summary:`5000`}}},order:{options:[`queue`,`replace`],control:{type:`inline-radio`},table:{category:`Hook`,defaultValue:{summary:`'queue'`}}},zIndex:{control:{type:`number`,min:0,step:1},table:{category:`Hook`,defaultValue:{summary:`20`}}},className:{control:`text`,table:{category:`Hook`}},portalContainer:{control:!1,table:{category:`Hook`}},css:{table:{disable:!0}},type:{options:[`success`,`error`],control:{type:`inline-radio`},table:{category:`Show`}},message:{control:`text`,table:{category:`Show`}}},render:e=>(0,x.jsx)(y,{...e})},C={parameters:{docs:{source:{language:`tsx`,code:`import { Button, unstable_useToast } from '@charcoal-ui/react'

export function Example() {
  const [toast, showToast] = unstable_useToast()

  return (
    <>
      {toast}
      <Button
        onClick={() => showToast('保存しました', { type: 'success' })}
      >
        保存
      </Button>
    </>
  )
}`}}}},w={args:{type:`error`,message:`保存に失敗しました`}},T={args:{message:`保存した内容はすべての端末に同期され、あとから設定画面で変更できます。長いメッセージは2行を超えると省略されます`}},E={args:{message:(0,x.jsxs)(x.Fragment,{children:[`保存に失敗しました`,(0,x.jsx)(`br`,{}),`通信環境を確認してください`]})}},D={args:{position:`bottom`,message:`下部に表示します`}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
        onClick={() => showToast('保存しました', { type: 'success' })}
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
    type: 'error',
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