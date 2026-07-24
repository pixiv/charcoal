import{a as e,n as t}from"./chunk-BneVvdWh.js";import{i as n,n as r,r as i,t as a}from"./useRadioGroup-HYUvz_5k.js";import{n as o,t as s}from"./useControlledState-yHtbEgdQ.js";import{_t as c,j as l}from"./iframe-DQozDSR-.js";import{n as u,t as d}from"./useClassNames-kMCFQFjq.js";var f=t((()=>{n(),r()}));function p(e){if(e.__reactAriaFormValidationState){let{realtimeValidation:t,displayValidation:n,updateValidation:r,resetValidation:i,commitValidation:a}=e[w];return{realtimeValidation:t,displayValidation:n,updateValidation:r,resetValidation:i,commitValidation:a}}return m(e)}function m(e){let{isInvalid:t,validationState:n,name:r,value:i,builtinValidation:a,validate:o,validationBehavior:s=`aria`}=e;n&&(t||=n===`invalid`);let c=t===void 0?null:{isInvalid:t,validationErrors:[],validationDetails:x},l=(0,y.useMemo)(()=>!o||i==null?null:_(g(o,i)),[o,i]);a?.validationDetails.valid&&(a=void 0);let u=(0,y.useContext)(C),d=(0,y.useMemo)(()=>r?Array.isArray(r)?r.flatMap(e=>h(u[e])):h(u[r]):[],[u,r]),[f,p]=(0,y.useState)(u),[m,b]=(0,y.useState)(!1);u!==f&&(p(u),b(!1));let w=(0,y.useMemo)(()=>_(m?[]:d),[m,d]),T=(0,y.useRef)(S),[E,D]=(0,y.useState)(S),O=(0,y.useRef)(S),k=()=>{if(!A)return;j(!1);let e=l||a||T.current;v(e,O.current)||(O.current=e,D(e))},[A,j]=(0,y.useState)(!1);return(0,y.useEffect)(k),{realtimeValidation:c||w||l||a||S,displayValidation:s===`native`?c||w||E:c||w||l||a||E,updateValidation(e){s===`aria`&&!v(E,e)?D(e):T.current=e},resetValidation(){let e=S;v(e,O.current)||(O.current=e,D(e)),s===`native`&&j(!1),b(!0)},commitValidation(){s===`native`&&j(!0),b(!0)}}}function h(e){return e?Array.isArray(e)?e:[e]:[]}function g(e,t){if(typeof e==`function`){let n=e(t);if(n&&typeof n!=`boolean`)return h(n)}return[]}function _(e){return e.length?{isInvalid:!0,validationErrors:e,validationDetails:x}:null}function v(e,t){return e===t?!0:!!e&&!!t&&e.isInvalid===t.isInvalid&&e.validationErrors.length===t.validationErrors.length&&e.validationErrors.every((e,n)=>e===t.validationErrors[n])&&Object.entries(e.validationDetails).every(([e,n])=>t.validationDetails[e]===n)}var y,b,x,S,C,w,T=t((()=>{y=e(c(),1),b={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},x={...b,customError:!0,valid:!1},S={isInvalid:!1,validationDetails:b,validationErrors:[]},C=(0,y.createContext)({}),w=`__reactAriaFormValidationState`}));function E(e){let t=(0,D.useMemo)(()=>e.name||`radio-group-${O}-${++k}`,[e.name]),[n,r]=s(e.value,e.defaultValue??null,e.onChange),[i]=(0,D.useState)(n),[a,o]=(0,D.useState)(null),c=p({...e,value:n}),l=t=>{!e.isReadOnly&&!e.isDisabled&&(r(t),c.commitValidation())},u=c.displayValidation.isInvalid;return{...c,name:t,selectedValue:n,defaultSelectedValue:e.value===void 0?e.defaultValue??null:i,setSelectedValue:l,lastFocusedValue:a,setLastFocusedValue:o,isDisabled:e.isDisabled||!1,isReadOnly:e.isReadOnly||!1,isRequired:e.isRequired||!1,validationState:e.validationState||(u?`invalid`:null),isInvalid:u}}var D,O,k,A=t((()=>{T(),o(),D=e(c(),1),O=Math.round(Math.random()*1e10),k=0})),j=t((()=>{A()})),M,N,P,F,I,L=t((()=>{M=e(c(),1),c(),N=l(),P=(0,M.createContext)(null),F=({value:e,children:t})=>(0,N.jsx)(P.Provider,{value:e,children:t}),I=()=>{let e=(0,M.useContext)(P);if(e===null)throw Error("`<RadioProvider>` is not likely mounted.");return e};try{F.displayName=`RadioProvider`,F.__docgenInfo={description:``,displayName:`RadioProvider`,filePath:`/home/runner/work/charcoal/charcoal/packages/react/src/components/SegmentedControl/RadioGroupContext.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/SegmentedControl/RadioGroupContext.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!0,tags:{},type:{name:`RadioGroupState`}}},tags:{}}}catch{}})),R=t((()=>{})),z,B,V,H,U,W=t((()=>{z=e(c(),1),c(),L(),d(),R(),f(),j(),B=l(),V=(0,z.forwardRef)(function(e,t){let n=u(`charcoal-segmented-control`,e.className),r=(0,z.useMemo)(()=>({...e,isDisabled:e.disabled,isReadOnly:e.readonly,isRequired:e.required,"aria-label":e.name}),[e]),i=E(r),{radioGroupProps:o}=a(r,i),s=(0,z.useMemo)(()=>e.data.map(e=>typeof e==`string`?{value:e,label:e}:e),[e.data]);return(0,B.jsx)(`div`,{ref:t,...o,className:n,"data-uniform-segment-width":e.uniformSegmentWidth,"data-full-width":e.fullWidth,children:(0,B.jsx)(F,{value:i,children:s.map(t=>(0,B.jsx)(U,{value:t.value,disabled:t.disabled,uniformSegmentWidth:e.uniformSegmentWidth,children:t.label},t.value))})})}),H=(0,z.memo)(V),U=e=>{let t=I(),n=(0,z.useRef)(null),{inputProps:r,isDisabled:a,isSelected:o}=i((0,z.useMemo)(()=>({value:e.value,isDisabled:e.disabled,children:e.children}),[e]),t,n);return(0,B.jsxs)(`label`,{className:`charcoal-segmented-control-radio__label`,"aria-disabled":a||t.isReadOnly,"data-checked":o,"data-uniform-segment-width":e.uniformSegmentWidth,"data-full-width":e.fullWidth,children:[(0,B.jsx)(`input`,{className:`charcoal-segmented-control-radio__input`,...r,ref:n}),e.children]})};try{V.displayName=`SegmentedControl`,V.__docgenInfo={description:``,displayName:`SegmentedControl`,filePath:`/home/runner/work/charcoal/charcoal/packages/react/src/components/SegmentedControl/index.tsx`,methods:[],props:{id:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/SegmentedControl/index.tsx`,name:`TypeLiteral`}],description:``,name:`id`,required:!1,tags:{},type:{name:`string`}},name:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/SegmentedControl/index.tsx`,name:`TypeLiteral`}],description:``,name:`name`,required:!1,tags:{},type:{name:`string`}},disabled:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/SegmentedControl/index.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},readonly:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/SegmentedControl/index.tsx`,name:`TypeLiteral`}],description:``,name:`readonly`,required:!1,tags:{},type:{name:`boolean`}},required:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/SegmentedControl/index.tsx`,name:`TypeLiteral`}],description:``,name:`required`,required:!1,tags:{},type:{name:`boolean`}},className:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/SegmentedControl/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}},uniformSegmentWidth:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/SegmentedControl/index.tsx`,name:`TypeLiteral`}],description:``,name:`uniformSegmentWidth`,required:!1,tags:{},type:{name:`boolean`}},fullWidth:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/SegmentedControl/index.tsx`,name:`TypeLiteral`}],description:``,name:`fullWidth`,required:!1,tags:{},type:{name:`boolean`}},value:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/SegmentedControl/index.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!1,tags:{},type:{name:`string`}},defaultValue:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/SegmentedControl/index.tsx`,name:`TypeLiteral`}],description:``,name:`defaultValue`,required:!1,tags:{},type:{name:`string`}},data:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/SegmentedControl/index.tsx`,name:`TypeLiteral`}],description:``,name:`data`,required:!0,tags:{},type:{name:`string[] | SegmentedControlItem[]`}},onChange:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/SegmentedControl/index.tsx`,name:`TypeLiteral`}],description:``,name:`onChange`,required:!1,tags:{},type:{name:`((value: string) => void)`}},css:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/type.d.ts`,name:`Attributes`}],description:``,name:`css`,parent:{fileName:`charcoal/packages/react-sandbox/src/type.d.ts`,name:`Attributes`},required:!1,tags:{},type:{name:`CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>`}}},tags:{}}}catch{}})),G,K,q,J,Y,X,Z,Q,$;t((()=>{W(),G={title:`react/SegmentedControl`,component:H},K={args:{name:`test`,data:[`option1`,`option2`,`option3`],disabled:!1,readonly:!1,required:!1,uniformSegmentWidth:!1,fullWidth:!1}},q={args:{name:`test`,data:[{label:`選択肢1`,value:`option1`},{label:`選択肢2`,value:`option2`},{label:`選択肢3`,value:`option3`},{label:`選択肢4`,value:`option4`,disabled:!0}],disabled:!1,readonly:!1,required:!1,uniformSegmentWidth:!1,fullWidth:!1}},J={args:{name:`test`,data:[{label:`なが〜〜い選択肢`,value:`option1`},{label:`選`,value:`option2`},{label:`選択肢`,value:`option3`}],disabled:!1,readonly:!1,required:!1,uniformSegmentWidth:!1,fullWidth:!1}},Y={args:{name:`test`,data:[{label:`なが〜〜い選択肢`,value:`option1`},{label:`選`,value:`option2`},{label:`選択肢`,value:`option3`}],disabled:!1,readonly:!1,required:!1,uniformSegmentWidth:!0,fullWidth:!1}},X={args:{name:`test`,data:[{label:`選`,value:`option1`},{label:`択`,value:`option2`},{label:`肢`,value:`option3`}],disabled:!1,readonly:!1,required:!1,uniformSegmentWidth:!0,fullWidth:!1}},Z={args:{name:`test`,data:[{label:`選択肢1`,value:`option1`},{label:`選択肢2`,value:`option2`},{label:`選択肢3`,value:`option3`}],disabled:!1,readonly:!1,required:!1,uniformSegmentWidth:!1,fullWidth:!0}},Q={args:{name:`test`,data:[{label:`なが〜〜い選択肢`,value:`option1`},{label:`選`,value:`option2`},{label:`選択肢`,value:`option3`}],disabled:!1,readonly:!1,required:!1,uniformSegmentWidth:!0,fullWidth:!0}},$={parameters:{tokenVersion:`v2`},args:{name:`token-v2`,data:[{label:`選択肢1`,value:`option1`},{label:`選択肢2`,value:`option2`},{label:`選択肢3`,value:`option3`},{label:`Disabled`,value:`option4`,disabled:!0}],disabled:!1,readonly:!1,required:!1,uniformSegmentWidth:!0,fullWidth:!1}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'test',
    data: ['option1', 'option2', 'option3'],
    disabled: false,
    readonly: false,
    required: false,
    uniformSegmentWidth: false,
    fullWidth: false
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'test',
    data: [{
      label: '選択肢1',
      value: 'option1'
    }, {
      label: '選択肢2',
      value: 'option2'
    }, {
      label: '選択肢3',
      value: 'option3'
    }, {
      label: '選択肢4',
      value: 'option4',
      disabled: true
    }],
    disabled: false,
    readonly: false,
    required: false,
    uniformSegmentWidth: false,
    fullWidth: false
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'test',
    data: [{
      label: 'なが〜〜い選択肢',
      value: 'option1'
    }, {
      label: '選',
      value: 'option2'
    }, {
      label: '選択肢',
      value: 'option3'
    }],
    disabled: false,
    readonly: false,
    required: false,
    uniformSegmentWidth: false,
    fullWidth: false
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'test',
    data: [{
      label: 'なが〜〜い選択肢',
      value: 'option1'
    }, {
      label: '選',
      value: 'option2'
    }, {
      label: '選択肢',
      value: 'option3'
    }],
    disabled: false,
    readonly: false,
    required: false,
    uniformSegmentWidth: true,
    fullWidth: false
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'test',
    data: [{
      label: '選',
      value: 'option1'
    }, {
      label: '択',
      value: 'option2'
    }, {
      label: '肢',
      value: 'option3'
    }],
    disabled: false,
    readonly: false,
    required: false,
    uniformSegmentWidth: true,
    fullWidth: false
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'test',
    data: [{
      label: '選択肢1',
      value: 'option1'
    }, {
      label: '選択肢2',
      value: 'option2'
    }, {
      label: '選択肢3',
      value: 'option3'
    }],
    disabled: false,
    readonly: false,
    required: false,
    uniformSegmentWidth: false,
    fullWidth: true
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'test',
    data: [{
      label: 'なが〜〜い選択肢',
      value: 'option1'
    }, {
      label: '選',
      value: 'option2'
    }, {
      label: '選択肢',
      value: 'option3'
    }],
    disabled: false,
    readonly: false,
    required: false,
    uniformSegmentWidth: true,
    fullWidth: true
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  parameters: {
    tokenVersion: 'v2'
  },
  args: {
    name: 'token-v2',
    data: [{
      label: '選択肢1',
      value: 'option1'
    }, {
      label: '選択肢2',
      value: 'option2'
    }, {
      label: '選択肢3',
      value: 'option3'
    }, {
      label: 'Disabled',
      value: 'option4',
      disabled: true
    }],
    disabled: false,
    readonly: false,
    required: false,
    uniformSegmentWidth: true,
    fullWidth: false
  }
}`,...$.parameters?.docs?.source}}}}))();export{Z as FullWidthSegments,q as ObjectSegments,J as RandomLengthSegments,K as StringSegments,$ as TokenV2,Q as UniformWidthAndFullWidthSegments,Y as UniformWidthSegments,X as UniformWidthSegmentsWhenShortLabel,G as default};