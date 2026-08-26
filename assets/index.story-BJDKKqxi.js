import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n,i as r,n as i,o as a,r as o,s,t as c}from"./useNotificationQueue-DMrI4POK.js";import{M as l,vt as u}from"./iframe-CwXf2Dvo.js";import{n as d,t as f}from"./Button-B43dJ6qo.js";import{n as p,t as m}from"./useClassNames-BFlBzgFC.js";var h=t((()=>{}));function g(e={}){"use memo";let{position:t=`bottom`,dim:r=!1,duration:a,order:s,...c}=e,{state:l,itemRef:u,enqueue:d,close:f,onHoverStart:p,onHoverEnd:m}=i(`snackbar`,{duration:a,order:s,timeoutReason:`timeout`,unmountedReason:`unmounted`});function h(e,t={}){d({message:e,action:t.action},t.onClose)}return[(0,y.jsx)(o,{name:`snackbar`,state:l,position:l.visibleToasts.some(e=>e.content.action!==void 0)?`bottom`:t,...c,children:l.visibleToasts.map(e=>(0,y.jsx)(n,{name:`snackbar`,toast:e,state:l,itemRef:u,onHoverStart:p,onHoverEnd:m,"data-dim":r,"data-with-action":e.content.action!==void 0,children:e.content.action!==void 0&&(0,y.jsx)(`div`,{onClick:()=>f(e.key,`action`),children:(0,y.jsx)(_,{action:e.content.action})})},e.key))}),h]}function _({action:e}){return(0,y.jsx)(`div`,{children:e})}var v,y,b,x,S=t((()=>{s(),h(),v=e(u(),1),m(),a(),r(),c(),y=l(),b=(0,v.forwardRef)(function(e,t){return(0,y.jsx)(x,{...e,ref:t})}),x=(0,v.forwardRef)(function({message:e,action:t,dim:n=!1,className:r,...i},a){let o=p(`charcoal-notification`,`charcoal-snackbar`,r);return(0,y.jsxs)(`div`,{...i,ref:a,className:o,"data-dim":n,"data-with-action":t!==void 0,children:[(0,y.jsx)(`div`,{role:`status`,className:`charcoal-notification-content`,children:(0,y.jsx)(`div`,{className:`charcoal-notification-label`,children:e})}),t!==void 0&&(0,y.jsx)(_,{action:t})]})});try{g.displayName=`useSnackbar`,g.__docgenInfo={description:``,displayName:`useSnackbar`,filePath:`/home/runner/work/charcoal/charcoal/packages/react/src/components/Notification/Snackbar/index.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Notification/types.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},offset:{defaultValue:{value:`16`},declarations:[{fileName:`charcoal/packages/react/src/components/Notification/types.ts`,name:`TypeLiteral`}],description:`画面端からの距離（ピクセル）`,name:`offset`,required:!1,tags:{default:`16`},type:{name:`number | undefined`}},order:{defaultValue:{value:`'queue'`},declarations:[{fileName:`charcoal/packages/react/src/components/Notification/types.ts`,name:`TypeLiteral`}],description:`表示中の通知がある場合の次の通知の表示方法`,name:`order`,required:!1,tags:{default:`'queue'`},type:{name:`NotificationOrder | undefined`}},zIndex:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Notification/types.ts`,name:`TypeLiteral`}],description:``,name:`zIndex`,required:!1,tags:{},type:{name:`number | undefined`}},portalContainer:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Notification/types.ts`,name:`TypeLiteral`}],description:``,name:`portalContainer`,required:!1,tags:{},type:{name:`HTMLElement | undefined`}},duration:{defaultValue:{value:`5000`},declarations:[{fileName:`charcoal/packages/react/src/components/Notification/types.ts`,name:`TypeLiteral`}],description:`通知を表示する時間（ミリ秒）。負の値は 0、数値でない値は 5000 として扱う`,name:`duration`,required:!1,tags:{default:`5000`},type:{name:`number | undefined`}},position:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Notification/Snackbar/index.tsx`,name:`TypeLiteral`}],description:``,name:`position`,required:!1,tags:{},type:{name:`Position | undefined`}},dim:{defaultValue:{value:`false`},declarations:[{fileName:`charcoal/packages/react/src/components/Notification/Snackbar/index.tsx`,name:`TypeLiteral`}],description:``,name:`dim`,required:!1,tags:{},type:{name:`boolean | undefined`}}},tags:{}}}catch{}try{b.displayName=`Snackbar`,b.__docgenInfo={description:``,displayName:`Snackbar`,filePath:`/home/runner/work/charcoal/charcoal/packages/react/src/components/Notification/Snackbar/index.tsx`,methods:[],props:{message:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Notification/Snackbar/index.tsx`,name:`TypeLiteral`}],description:``,name:`message`,required:!0,tags:{},type:{name:`ReactNode`}},dim:{defaultValue:{value:`false`},declarations:[{fileName:`charcoal/packages/react/src/components/Notification/Snackbar/index.tsx`,name:`TypeLiteral`}],description:``,name:`dim`,required:!1,tags:{},type:{name:`boolean | undefined`}},action:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Notification/Snackbar/index.tsx`,name:`TypeLiteral`}],description:`Snackbar の右側に表示するアクション`,name:`action`,required:!0,tags:{},type:{name:`NonNullable<ReactNode>`}},css:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/type.d.ts`,name:`Attributes`}],description:``,name:`css`,parent:{fileName:`charcoal/packages/react-sandbox/src/type.d.ts`,name:`Attributes`},required:!1,tags:{},type:{name:`CSSProp<DefaultTheme> | ThemeProp<DefaultTheme> | undefined`}}},tags:{}}}catch{}}));function C({message:e,actionChildren:t,...n}){let[r,i]=g(n),a=t!==void 0&&t!==``,o=a?{action:(0,T.jsx)(f,{children:t})}:void 0;return(0,w.useEffect)(()=>{},[t,a,e,i]),(0,T.jsxs)(T.Fragment,{children:[r,(0,T.jsx)(f,{onClick:()=>{i(e,o)},children:`show`})]})}var w,T,E,D,O,k,A,j,M;t((()=>{w=e(u(),1),d(),S(),T=l(),E={title:`react/Snackbar`,component:C,parameters:{layout:`centered`,tokenVersion:`v2`,controls:{sort:`requiredFirst`},docs:{description:{component:"`unstable_useSnackbar` を使用すると、表示時間やキューを含む表示制御を利用できます。同時に表示できるスナックバーは1つのみです。表示中に別のスナックバーが発生した場合は、`order` に応じてキューに積むか、表示中のスナックバーを置き換えます。\n\n別々の `unstable_useSnackbar` を呼び出した場合は互いに独立するため、同時表示数は1件に制限されません。\n\n`UnstableSnackbar` は表示専用のコンポーネントです。表示状態や表示時間を制御する機構を持たず、アクションの指定を必須とします。表示の切り替えは利用側で制御してください。"}}},args:{message:`保存しました`,position:`bottom`,offset:16,duration:5e3,order:`queue`,dim:!1,zIndex:20},argTypes:{position:{options:[`top`,`bottom`],control:{type:`inline-radio`},table:{category:`Hook`,defaultValue:{summary:`'bottom'`}}},offset:{control:{type:`number`,min:0,step:1},table:{category:`Hook`,defaultValue:{summary:`16`}}},duration:{control:{type:`number`,min:0,step:500},description:`表示時間（ミリ秒）`,table:{category:`Hook`,defaultValue:{summary:`5000`}}},order:{options:[`queue`,`replace`],control:{type:`inline-radio`},table:{category:`Hook`,defaultValue:{summary:`'queue'`}}},dim:{control:`boolean`,table:{category:`Hook`,defaultValue:{summary:`false`}}},zIndex:{control:{type:`number`,min:0,step:1},table:{category:`Hook`,defaultValue:{summary:`20`}}},className:{control:`text`,table:{category:`Hook`}},portalContainer:{control:!1,table:{category:`Hook`}},css:{table:{disable:!0}},message:{control:`text`,table:{category:`Show`}},actionChildren:{name:`action`,control:`text`,table:{category:`Show`}}},render:e=>(0,T.jsx)(C,{...e})},D={parameters:{docs:{source:{language:`tsx`,code:`import { Button, unstable_useSnackbar } from '@charcoal-ui/react'

export function Example() {
  const [snackbar, showSnackbar] = unstable_useSnackbar()

  return (
    <>
      {snackbar}
      <Button onClick={() => showSnackbar('保存しました')}>
        保存
      </Button>
    </>
  )
}`}}}},O={args:{message:`保存した内容はすべての端末に同期され、あとから設定画面で変更できます。長いメッセージは2行を超えると省略されます`}},k={args:{message:(0,T.jsxs)(T.Fragment,{children:[`保存に失敗しました`,(0,T.jsx)(`br`,{}),`通信環境を確認してください`]})}},A={args:{message:`保存しました`,actionChildren:`取り消す`},parameters:{docs:{source:{language:`tsx`,code:`import { Button, unstable_useSnackbar } from '@charcoal-ui/react'

export function Example() {
  const [snackbar, showSnackbar] = unstable_useSnackbar()

  return (
    <>
      {snackbar}
      <Button
        onClick={() =>
          showSnackbar('保存しました', {
            action: <Button>取り消す</Button>,
          })
        }
      >
        保存
      </Button>
    </>
  )
}`}}}},j={args:{position:`top`,message:`上部に表示します`}},M={args:{dim:!0,message:`Dim の Snackbar`,actionChildren:`閉じる`}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: \`import { Button, unstable_useSnackbar } from '@charcoal-ui/react'

export function Example() {
  const [snackbar, showSnackbar] = unstable_useSnackbar()

  return (
    <>
      {snackbar}
      <Button onClick={() => showSnackbar('保存しました')}>
        保存
      </Button>
    </>
  )
}\`
      }
    }
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    message: '保存した内容はすべての端末に同期され、あとから設定画面で変更できます。長いメッセージは2行を超えると省略されます'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    message: <>
        保存に失敗しました
        <br />
        通信環境を確認してください
      </>
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    message: '保存しました',
    actionChildren: '取り消す'
  },
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: \`import { Button, unstable_useSnackbar } from '@charcoal-ui/react'

export function Example() {
  const [snackbar, showSnackbar] = unstable_useSnackbar()

  return (
    <>
      {snackbar}
      <Button
        onClick={() =>
          showSnackbar('保存しました', {
            action: <Button>取り消す</Button>,
          })
        }
      >
        保存
      </Button>
    </>
  )
}\`
      }
    }
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'top',
    message: '上部に表示します'
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    dim: true,
    message: 'Dim の Snackbar',
    actionChildren: '閉じる'
  }
}`,...M.parameters?.docs?.source}}}}))();export{D as Default,M as Dim,O as LongMessage,j as Top,A as WithAction,k as WithLineBreak,E as default};