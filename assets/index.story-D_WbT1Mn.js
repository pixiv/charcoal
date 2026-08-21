import{a as e,n as t}from"./chunk-BneVvdWh.js";import{o as n}from"./DismissButton-JZLJ29PH.js";import{t as r}from"./Overlay-DSYymWqK.js";import{i,n as a,r as o,t as s}from"./useToastRegion-CPGJpO_d.js";import{M as c,S as l,vt as u}from"./iframe-Bh54JjPi.js";import{n as d,t as f}from"./Button-D74hClx9.js";import{n as p,t as m}from"./useClassNames-C1qjpWYD.js";var h=t((()=>{i(),a()}));function g(e={}){let{maxVisibleToasts:t=1,wrapUpdate:n}=e;return _((0,v.useMemo)(()=>new b({maxVisibleToasts:t,wrapUpdate:n}),[t,n]))}function _(e){let t=(0,v.useCallback)(t=>e.subscribe(t),[e]),n=(0,v.useCallback)(()=>e.visibleToasts,[e]);return{visibleToasts:(0,y.useSyncExternalStore)(t,n,n),add:(t,n)=>e.add(t,n),close:t=>e.close(t),pauseAll:()=>e.pauseAll(),resumeAll:()=>e.resumeAll()}}var v,y,b,x,S=t((()=>{v=e(u(),1),y=l(),b=class{constructor(e){this.queue=[],this.subscriptions=new Set,this.visibleToasts=[],this.maxVisibleToasts=e?.maxVisibleToasts??1/0,this.wrapUpdate=e?.wrapUpdate}runWithWrapUpdate(e,t){this.wrapUpdate?this.wrapUpdate(e,t):e()}subscribe(e){return this.subscriptions.add(e),()=>this.subscriptions.delete(e)}add(e,t={}){let n=`_`+Math.random().toString(36).slice(2),r={...t,content:e,key:n,timer:t.timeout?new x(()=>this.close(n),t.timeout):void 0};return this.queue.unshift(r),this.updateVisibleToasts(`add`),n}close(e){let t=this.queue.findIndex(t=>t.key===e);t>=0&&(this.queue[t].onClose?.(),this.queue.splice(t,1)),this.updateVisibleToasts(`remove`)}updateVisibleToasts(e){this.visibleToasts=this.queue.slice(0,this.maxVisibleToasts),this.runWithWrapUpdate(()=>{for(let e of this.subscriptions)e()},e)}pauseAll(){for(let e of this.visibleToasts)e.timer&&e.timer.pause()}resumeAll(){for(let e of this.visibleToasts)e.timer&&e.timer.resume()}clear(){this.queue=[],this.updateVisibleToasts(`clear`)}},x=class{constructor(e,t){this.startTime=null,this.remaining=t,this.callback=e}reset(e){this.remaining=e,this.resume()}pause(){this.timerId!=null&&(clearTimeout(this.timerId),this.timerId=null,this.remaining-=Date.now()-this.startTime)}resume(){this.remaining<=0||(this.startTime=Date.now(),this.timerId=setTimeout(()=>{this.timerId=null,this.remaining=0,this.callback()},this.remaining))}}})),C=t((()=>{S()})),w=t((()=>{}));function T(e={}){"use memo";let{position:t,offset:n,dim:r,zIndex:i,portalContainer:a,className:o}=e,s=(0,A.useRef)(null),c=(0,j.jsx)(I,{ref:s,position:t,offset:n,dim:r,zIndex:i,portalContainer:a,className:o});function l(e,t){s.current?.show(e,t)}return[c,l]}function E({state:e,position:t,offset:r,dim:i,zIndex:a,portalContainer:o,className:c,snackbarRef:l,onHoverStart:u,onHoverEnd:d,onActionClose:f}){let m=(0,A.useRef)(null),h=(0,A.useRef)(!1),{regionProps:g}=s({},{...e,pauseAll(){m.current?.contains(document.activeElement)&&(h.current=!0,e.pauseAll())},resumeAll(){h.current&&(h.current=!1,e.resumeAll())}},m),_=p(`charcoal-snackbar-region`,c);if(e.visibleToasts.length===0)return null;let v=e.visibleToasts.some(e=>e.content.button!==void 0)?`bottom`:t;return(0,j.jsx)(n,{disableFocusManagement:!0,portalContainer:o,children:(0,j.jsx)(`div`,{...g,ref:m,className:_,"data-position":v,style:{zIndex:a,"--charcoal-snackbar-offset":`${r}px`},children:e.visibleToasts.map(t=>(0,j.jsx)(D,{toast:t,state:e,dim:i,snackbarRef:l,onHoverStart:u,onHoverEnd:d,onActionClose:()=>{f(),e.close(t.key)}},t.key))})})}function D({toast:e,state:t,dim:n,snackbarRef:r,onHoverStart:i,onHoverEnd:a,onActionClose:s}){let{toastProps:c,contentProps:l,titleProps:u}=o({toast:e},t,r),{message:d,button:f}=e.content;return(0,j.jsxs)(`div`,{...c,ref:r,className:`charcoal-snackbar`,"data-dim":n,"data-with-button":f!==void 0,onPointerEnter:i,onPointerLeave:a,children:[(0,j.jsx)(`div`,{...l,role:`status`,className:`charcoal-snackbar-content`,children:(0,j.jsx)(`div`,{...u,className:`charcoal-snackbar-label`,children:d})}),f!==void 0&&(0,j.jsx)(O,{button:f,dim:n,onClose:s})]})}function O({button:e,dim:t,onClose:n}){let{onClick:r,variant:i,children:a,...o}=e;function s(e){r?.(e),n()}return(0,j.jsx)(k,{...o,size:`S`,variant:i??(t?`Navigation`:void 0),onClick:s,children:a})}function k({component:e,...t}){return e===void 0||e===`button`?(0,j.jsx)(f,{...t}):(0,j.jsx)(f,{...t,component:e})}var A,j,M,N,P,F,I,L=t((()=>{w(),A=e(u(),1),r(),h(),C(),m(),d(),j=c(),M=5e3,N=20,P=300,F=300,I=(0,A.forwardRef)(function({position:e=`bottom`,offset:t=16,dim:n=!1,zIndex:r=N,portalContainer:i,className:a},o){"use memo";let s=(0,A.useRef)(null),c=(0,A.useRef)([]),l=(0,A.useRef)(!1),u=(0,A.useRef)({active:!1,pending:void 0}),d=(0,A.useRef)(void 0),f=g({maxVisibleToasts:1,wrapUpdate:(0,A.useCallback)(function e(t,n){if(n!==`remove`){t();return}function r(){t(),d.current?.()}if(u.current.active){u.current.pending=()=>e(t,`remove`);return}if(s.current===null){r();return}let i=s.current;i.dataset.exiting=`true`;let a=!1,o=0;function c(e){e.target===i&&e.animationName===`charcoal-snackbar-exit`&&l()}function l(){a||(a=!0,i.removeEventListener(`animationend`,c),window.clearTimeout(o),r())}i.addEventListener(`animationend`,c),o=window.setTimeout(l,F+100),window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches&&l()},[])});(0,A.useEffect)(()=>()=>{c.current=[],l.current=!1},[]);function p(){let e=c.current.shift();if(e===void 0){l.current=!1;return}let{duration:t,...n}=e;l.current=!0;let r=window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches?0:P;f.add(n,{timeout:Math.max(1,t+r)})}d.current=p;function m(e,t={}){let{duration:n=M,button:r}=t,i=typeof n==`number`&&Number.isFinite(n)?Math.max(0,n):M;c.current.push({message:e,button:r,duration:i}),l.current||p()}return(0,A.useImperativeHandle)(o,()=>({show:m})),(0,j.jsx)(E,{state:f,position:e,offset:t,dim:n,zIndex:r,portalContainer:i,className:a,snackbarRef:s,onHoverStart:()=>{u.current.active=!0},onHoverEnd:()=>{u.current.active=!1;let e=u.current.pending;u.current.pending=void 0,e?.()},onActionClose:()=>{u.current.active=!1,u.current.pending=void 0}})});try{T.displayName=`useSnackbar`,T.__docgenInfo={description:``,displayName:`useSnackbar`,filePath:`/home/runner/work/charcoal/charcoal/packages/react/src/components/Snackbar/index.tsx`,methods:[],props:{position:{defaultValue:{value:`bottom`},declarations:[{fileName:`charcoal/packages/react/src/components/Snackbar/index.tsx`,name:`TypeLiteral`}],description:"Snackbar の表示位置。ボタン付きの場合は `bottom` に固定される",name:`position`,required:!1,tags:{default:`'bottom'`},type:{name:`enum`,raw:`SnackbarPosition`,value:[{value:`"top"`},{value:`"bottom"`}]}},offset:{defaultValue:{value:`16`},declarations:[{fileName:`charcoal/packages/react/src/components/Snackbar/index.tsx`,name:`TypeLiteral`}],description:`画面端からの距離（ピクセル）`,name:`offset`,required:!1,tags:{default:`16`},type:{name:`number`}},dim:{defaultValue:{value:`false`},declarations:[{fileName:`charcoal/packages/react/src/components/Snackbar/index.tsx`,name:`TypeLiteral`}],description:`暗い背景色`,name:`dim`,required:!1,tags:{default:`false`},type:{name:`boolean`}},zIndex:{defaultValue:{value:`20`},declarations:[{fileName:`charcoal/packages/react/src/components/Snackbar/index.tsx`,name:`TypeLiteral`}],description:``,name:`zIndex`,required:!1,tags:{},type:{name:`number`}},portalContainer:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Snackbar/index.tsx`,name:`TypeLiteral`}],description:``,name:`portalContainer`,required:!1,tags:{},type:{name:`HTMLElement`}},className:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Snackbar/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{I.displayName=`Snackbar`,I.__docgenInfo={description:``,displayName:`Snackbar`,filePath:`/home/runner/work/charcoal/charcoal/packages/react/src/components/Snackbar/index.tsx`,methods:[],props:{position:{defaultValue:{value:`bottom`},declarations:[{fileName:`charcoal/packages/react/src/components/Snackbar/index.tsx`,name:`TypeLiteral`}],description:"Snackbar の表示位置。ボタン付きの場合は `bottom` に固定される",name:`position`,required:!1,tags:{default:`'bottom'`},type:{name:`enum`,raw:`SnackbarPosition`,value:[{value:`"top"`},{value:`"bottom"`}]}},offset:{defaultValue:{value:`16`},declarations:[{fileName:`charcoal/packages/react/src/components/Snackbar/index.tsx`,name:`TypeLiteral`}],description:`画面端からの距離（ピクセル）`,name:`offset`,required:!1,tags:{default:`16`},type:{name:`number`}},dim:{defaultValue:{value:`false`},declarations:[{fileName:`charcoal/packages/react/src/components/Snackbar/index.tsx`,name:`TypeLiteral`}],description:`暗い背景色`,name:`dim`,required:!1,tags:{default:`false`},type:{name:`boolean`}},zIndex:{defaultValue:{value:`20`},declarations:[{fileName:`charcoal/packages/react/src/components/Snackbar/index.tsx`,name:`TypeLiteral`}],description:``,name:`zIndex`,required:!1,tags:{},type:{name:`number`}},portalContainer:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Snackbar/index.tsx`,name:`TypeLiteral`}],description:``,name:`portalContainer`,required:!1,tags:{},type:{name:`HTMLElement`}},className:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/Snackbar/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}},css:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/type.d.ts`,name:`Attributes`}],description:``,name:`css`,parent:{fileName:`charcoal/packages/react-sandbox/src/type.d.ts`,name:`Attributes`},required:!1,tags:{},type:{name:`CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>`}}},tags:{}}}catch{}}));function R({message:e,buttonChildren:t,duration:n,...r}){let[i,a]=T(r),o=t!==void 0&&t!==``,s={duration:n,...o?{button:{children:t}}:{}};return(0,z.useEffect)(()=>{},[t,o,e,a]),(0,B.jsxs)(B.Fragment,{children:[i,(0,B.jsx)(f,{onClick:()=>{a(e,s)},children:`show`})]})}var z,B,V,H,U,W,G,K,q;t((()=>{z=e(u(),1),d(),L(),B=c(),V={title:`react/unstable_Snackbar`,component:I,parameters:{layout:`centered`,tokenVersion:`v2`,docs:{description:{component:`同時に表示できるスナックバーは1つのみです。表示中に別のスナックバーが発生した場合はキューに積み、前のスナックバーが消えてから表示します。

別々の \`useSnackbar\` を呼び出した場合は互いに独立するため、同時表示数は1件に制限されません。`}}},args:{message:`保存しました`,duration:5e3},argTypes:{position:{options:[`top`,`bottom`],control:{type:`inline-radio`}},message:{control:`text`},duration:{control:{type:`number`,min:0,step:500},description:`表示時間（ミリ秒）`},buttonChildren:{name:`button.children`,control:`text`}},render:e=>(0,B.jsx)(R,{...e})},H={parameters:{docs:{source:{language:`tsx`,code:`import { Button, unstable_useSnackbar } from '@charcoal-ui/react'

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
}`}}}},U={args:{message:`保存した内容はすべての端末に同期され、あとから設定画面で変更できます。長いメッセージは2行を超えると省略されます`}},W={args:{message:(0,B.jsxs)(B.Fragment,{children:[`保存に失敗しました`,(0,B.jsx)(`br`,{}),`通信環境を確認してください`]})}},G={args:{message:`保存しました`,buttonChildren:`取り消す`},parameters:{docs:{source:{language:`tsx`,code:`import { Button, unstable_useSnackbar } from '@charcoal-ui/react'

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
}`}}}},K={args:{position:`top`,message:`上部に表示します`}},q={args:{dim:!0,message:`Dim の Snackbar`,buttonChildren:`閉じる`}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    message: '保存した内容はすべての端末に同期され、あとから設定画面で変更できます。長いメッセージは2行を超えると省略されます'
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    message: <>
        保存に失敗しました
        <br />
        通信環境を確認してください
      </>
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'top',
    message: '上部に表示します'
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    dim: true,
    message: 'Dim の Snackbar',
    buttonChildren: '閉じる'
  }
}`,...q.parameters?.docs?.source}}}}))();export{H as Default,q as Dim,U as LongMessage,K as Top,G as WithButton,W as WithLineBreak,V as default};