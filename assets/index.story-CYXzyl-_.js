import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n,i as r,n as i,o as a,r as o,s,t as c}from"./useNotificationQueue-CiDaY1MF.js";import{M as l,vt as u}from"./iframe-X81A_ItP.js";import{n as d,t as f}from"./Button-BFhLVLxs.js";var p=t((()=>{}));function m(e={}){"use memo";let t=(0,_.useRef)(null),n=(0,v.jsx)(y,{ref:t,...e});function r(e,n){t.current?.show(e,n)}return[n,r]}function h({button:e,dim:t,onClose:n}){let{onClick:r,variant:i,children:a,...o}=e;function s(e){r?.(e),n()}return(0,v.jsx)(g,{...o,size:`S`,variant:i??(t?`Navigation`:void 0),onClick:s,children:a})}function g({component:e,...t}){return e===void 0||e===`button`?(0,v.jsx)(f,{...t}):(0,v.jsx)(f,{...t,component:e})}var _,v,y,b=t((()=>{s(),p(),_=e(u(),1),a(),r(),c(),d(),v=l(),y=(0,_.forwardRef)(function({position:e=`bottom`,dim:t=!1,...r},a){"use memo";let{state:s,itemRef:c,enqueue:l,onHoverStart:u,onHoverEnd:d,clearHover:f}=i(`snackbar`);function p(e,t={}){l({message:e,button:t.button},t.duration)}return(0,_.useImperativeHandle)(a,()=>({show:p})),(0,v.jsx)(o,{name:`snackbar`,state:s,position:s.visibleToasts.some(e=>e.content.button!==void 0)?`bottom`:e,...r,children:s.visibleToasts.map(e=>(0,v.jsx)(n,{name:`snackbar`,toast:e,state:s,itemRef:c,onHoverStart:u,onHoverEnd:d,"data-dim":t,"data-with-button":e.content.button!==void 0,children:e.content.button!==void 0&&(0,v.jsx)(h,{button:e.content.button,dim:t,onClose:()=>{f(),s.close(e.key)}})},e.key))})});try{m.displayName=`useSnackbar`,m.__docgenInfo={description:``,displayName:`useSnackbar`,filePath:`/home/runner/work/charcoal/charcoal/packages/react/src/components/Notification/Snackbar/index.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Notification/types.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}},offset:{defaultValue:{value:`16`},declarations:[{fileName:`charcoal/packages/react/src/components/Notification/types.ts`,name:`TypeLiteral`}],description:`画面端からの距離（ピクセル）`,name:`offset`,required:!1,tags:{default:`16`},type:{name:`number`}},zIndex:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Notification/types.ts`,name:`TypeLiteral`}],description:``,name:`zIndex`,required:!1,tags:{},type:{name:`number`}},portalContainer:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Notification/types.ts`,name:`TypeLiteral`}],description:``,name:`portalContainer`,required:!1,tags:{},type:{name:`HTMLElement`}},position:{defaultValue:{value:`bottom`},declarations:[{fileName:`charcoal/packages/react/src/components/Notification/Snackbar/index.tsx`,name:`TypeLiteral`}],description:"Snackbar の表示位置。ボタン付きの場合は `bottom` に固定される",name:`position`,required:!1,tags:{default:`'bottom'`},type:{name:`enum`,raw:`Position`,value:[{value:`"top"`},{value:`"bottom"`}]}},dim:{defaultValue:{value:`false`},declarations:[{fileName:`charcoal/packages/react/src/components/Notification/Snackbar/index.tsx`,name:`TypeLiteral`}],description:`暗い背景色`,name:`dim`,required:!1,tags:{default:`false`},type:{name:`boolean`}}},tags:{}}}catch{}try{y.displayName=`Snackbar`,y.__docgenInfo={description:``,displayName:`Snackbar`,filePath:`/home/runner/work/charcoal/charcoal/packages/react/src/components/Notification/Snackbar/index.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Notification/types.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}},offset:{defaultValue:{value:`16`},declarations:[{fileName:`charcoal/packages/react/src/components/Notification/types.ts`,name:`TypeLiteral`}],description:`画面端からの距離（ピクセル）`,name:`offset`,required:!1,tags:{default:`16`},type:{name:`number`}},zIndex:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Notification/types.ts`,name:`TypeLiteral`}],description:``,name:`zIndex`,required:!1,tags:{},type:{name:`number`}},portalContainer:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Notification/types.ts`,name:`TypeLiteral`}],description:``,name:`portalContainer`,required:!1,tags:{},type:{name:`HTMLElement`}},position:{defaultValue:{value:`bottom`},declarations:[{fileName:`charcoal/packages/react/src/components/Notification/Snackbar/index.tsx`,name:`TypeLiteral`}],description:"Snackbar の表示位置。ボタン付きの場合は `bottom` に固定される",name:`position`,required:!1,tags:{default:`'bottom'`},type:{name:`enum`,raw:`Position`,value:[{value:`"top"`},{value:`"bottom"`}]}},dim:{defaultValue:{value:`false`},declarations:[{fileName:`charcoal/packages/react/src/components/Notification/Snackbar/index.tsx`,name:`TypeLiteral`}],description:`暗い背景色`,name:`dim`,required:!1,tags:{default:`false`},type:{name:`boolean`}},css:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/type.d.ts`,name:`Attributes`}],description:``,name:`css`,parent:{fileName:`charcoal/packages/react-sandbox/src/type.d.ts`,name:`Attributes`},required:!1,tags:{},type:{name:`CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>`}}},tags:{}}}catch{}}));function x({message:e,buttonChildren:t,duration:n,...r}){let[i,a]=m(r),o=t!==void 0&&t!==``,s={duration:n,...o?{button:{children:t}}:{}};return(0,S.useEffect)(()=>{},[t,o,e,a]),(0,C.jsxs)(C.Fragment,{children:[i,(0,C.jsx)(f,{onClick:()=>{a(e,s)},children:`show`})]})}var S,C,w,T,E,D,O,k,A;t((()=>{S=e(u(),1),d(),b(),C=l(),w={title:`react/unstable_Snackbar`,component:y,parameters:{layout:`centered`,tokenVersion:`v2`,docs:{description:{component:`同時に表示できるスナックバーは1つのみです。表示中に別のスナックバーが発生した場合はキューに積み、前のスナックバーが消えてから表示します。

別々の \`useSnackbar\` を呼び出した場合は互いに独立するため、同時表示数は1件に制限されません。`}}},args:{message:`保存しました`,duration:5e3},argTypes:{position:{options:[`top`,`bottom`],control:{type:`inline-radio`}},message:{control:`text`},duration:{control:{type:`number`,min:0,step:500},description:`表示時間（ミリ秒）`},buttonChildren:{name:`button.children`,control:`text`}},render:e=>(0,C.jsx)(x,{...e})},T={parameters:{docs:{source:{language:`tsx`,code:`import { Button, unstable_useSnackbar } from '@charcoal-ui/react'

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
}`}}}},E={args:{message:`保存した内容はすべての端末に同期され、あとから設定画面で変更できます。長いメッセージは2行を超えると省略されます`}},D={args:{message:(0,C.jsxs)(C.Fragment,{children:[`保存に失敗しました`,(0,C.jsx)(`br`,{}),`通信環境を確認してください`]})}},O={args:{message:`保存しました`,buttonChildren:`取り消す`},parameters:{docs:{source:{language:`tsx`,code:`import { Button, unstable_useSnackbar } from '@charcoal-ui/react'

export function Example() {
  const [snackbar, showSnackbar] = unstable_useSnackbar()

  return (
    <>
      {snackbar}
      <Button
        onClick={() =>
          showSnackbar('保存しました', {
            button: {
              children: '取り消す',
            },
          })
        }
      >
        保存
      </Button>
    </>
  )
}`}}}},k={args:{position:`top`,message:`上部に表示します`}},A={args:{dim:!0,message:`Dim の Snackbar`,buttonChildren:`閉じる`}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    message: '保存した内容はすべての端末に同期され、あとから設定画面で変更できます。長いメッセージは2行を超えると省略されます'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    message: <>
        保存に失敗しました
        <br />
        通信環境を確認してください
      </>
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    message: '保存しました',
    buttonChildren: '取り消す'
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
            button: {
              children: '取り消す',
            },
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'top',
    message: '上部に表示します'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    dim: true,
    message: 'Dim の Snackbar',
    buttonChildren: '閉じる'
  }
}`,...A.parameters?.docs?.source}}}}))();export{T as Default,A as Dim,E as LongMessage,k as Top,O as WithButton,D as WithLineBreak,w as default};