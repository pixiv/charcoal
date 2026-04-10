import{a as e,n as t}from"./chunk-BneVvdWh.js";import{C as n,E as r,Ht as i,S as a,T as o,nt as s,w as c}from"./iframe-D1bM0PVq.js";import{n as l,t as u}from"./useClassNames-CL5v1r6S.js";var d,f,p,m,h,g=t((()=>{d=e(i(),1),i(),f=s(),p=(0,d.createContext)(null),m=({value:e,children:t})=>(0,f.jsx)(p.Provider,{value:e,children:t}),h=()=>{let e=(0,d.useContext)(p);if(e===null)throw Error("`<RadioProvider>` is not likely mounted.");return e};try{m.displayName=`RadioProvider`,m.__docgenInfo={description:``,displayName:`RadioProvider`,filePath:`/home/runner/work/charcoal/charcoal/packages/react/src/components/SegmentedControl/RadioGroupContext.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/SegmentedControl/RadioGroupContext.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!0,tags:{},type:{name:`RadioGroupState`}}},tags:{}}}catch{}})),_=t((()=>{})),v,y,b,x,S,C=t((()=>{v=e(i(),1),i(),o(),a(),g(),u(),_(),y=s(),b=(0,v.forwardRef)(function(e,t){let i=l(`charcoal-segmented-control`,e.className),a=(0,v.useMemo)(()=>({...e,isDisabled:e.disabled,isReadOnly:e.readonly,isRequired:e.required,"aria-label":e.name}),[e]),o=r(a),{radioGroupProps:s}=n(a,o),c=(0,v.useMemo)(()=>e.data.map(e=>typeof e==`string`?{value:e,label:e}:e),[e.data]);return(0,y.jsx)(`div`,{ref:t,...s,className:i,"data-uniform-segment-width":e.uniformSegmentWidth,"data-full-width":e.fullWidth,children:(0,y.jsx)(m,{value:o,children:c.map(t=>(0,y.jsx)(S,{value:t.value,disabled:t.disabled,uniformSegmentWidth:e.uniformSegmentWidth,children:t.label},t.value))})})}),x=(0,v.memo)(b),S=e=>{let t=h(),n=(0,v.useRef)(null),{inputProps:r,isDisabled:i,isSelected:a}=c((0,v.useMemo)(()=>({value:e.value,isDisabled:e.disabled,children:e.children}),[e]),t,n);return(0,y.jsxs)(`label`,{className:`charcoal-segmented-control-radio__label`,"aria-disabled":i||t.isReadOnly,"data-checked":a,"data-uniform-segment-width":e.uniformSegmentWidth,"data-full-width":e.fullWidth,children:[(0,y.jsx)(`input`,{className:`charcoal-segmented-control-radio__input`,...r,ref:n}),e.children]})};try{b.displayName=`SegmentedControl`,b.__docgenInfo={description:``,displayName:`SegmentedControl`,filePath:`/home/runner/work/charcoal/charcoal/packages/react/src/components/SegmentedControl/index.tsx`,methods:[],props:{id:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/SegmentedControl/index.tsx`,name:`TypeLiteral`}],description:``,name:`id`,required:!1,tags:{},type:{name:`string`}},name:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/SegmentedControl/index.tsx`,name:`TypeLiteral`}],description:``,name:`name`,required:!1,tags:{},type:{name:`string`}},disabled:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/SegmentedControl/index.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},readonly:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/SegmentedControl/index.tsx`,name:`TypeLiteral`}],description:``,name:`readonly`,required:!1,tags:{},type:{name:`boolean`}},required:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/SegmentedControl/index.tsx`,name:`TypeLiteral`}],description:``,name:`required`,required:!1,tags:{},type:{name:`boolean`}},className:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/SegmentedControl/index.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}},uniformSegmentWidth:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/SegmentedControl/index.tsx`,name:`TypeLiteral`}],description:``,name:`uniformSegmentWidth`,required:!1,tags:{},type:{name:`boolean`}},fullWidth:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/SegmentedControl/index.tsx`,name:`TypeLiteral`}],description:``,name:`fullWidth`,required:!1,tags:{},type:{name:`boolean`}},value:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/SegmentedControl/index.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!1,tags:{},type:{name:`string`}},defaultValue:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/SegmentedControl/index.tsx`,name:`TypeLiteral`}],description:``,name:`defaultValue`,required:!1,tags:{},type:{name:`string`}},data:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/SegmentedControl/index.tsx`,name:`TypeLiteral`}],description:``,name:`data`,required:!0,tags:{},type:{name:`string[] | SegmentedControlItem[]`}},onChange:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react/src/components/SegmentedControl/index.tsx`,name:`TypeLiteral`}],description:``,name:`onChange`,required:!1,tags:{},type:{name:`((value: string) => void)`}},css:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/type.d.ts`,name:`Attributes`}],description:``,name:`css`,parent:{fileName:`charcoal/packages/react-sandbox/src/type.d.ts`,name:`Attributes`},required:!1,tags:{},type:{name:`CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>`}}},tags:{}}}catch{}})),w,T,E,D,O,k,A,j;t((()=>{C(),w={title:`react/SegmentedControl`,component:x},T={args:{name:`test`,data:[`option1`,`option2`,`option3`],disabled:!1,readonly:!1,required:!1,uniformSegmentWidth:!1,fullWidth:!1}},E={args:{name:`test`,data:[{label:`選択肢1`,value:`option1`},{label:`選択肢2`,value:`option2`},{label:`選択肢3`,value:`option3`},{label:`選択肢4`,value:`option4`,disabled:!0}],disabled:!1,readonly:!1,required:!1,uniformSegmentWidth:!1,fullWidth:!1}},D={args:{name:`test`,data:[{label:`なが〜〜い選択肢`,value:`option1`},{label:`選`,value:`option2`},{label:`選択肢`,value:`option3`}],disabled:!1,readonly:!1,required:!1,uniformSegmentWidth:!1,fullWidth:!1}},O={args:{name:`test`,data:[{label:`なが〜〜い選択肢`,value:`option1`},{label:`選`,value:`option2`},{label:`選択肢`,value:`option3`}],disabled:!1,readonly:!1,required:!1,uniformSegmentWidth:!0,fullWidth:!1}},k={args:{name:`test`,data:[{label:`選`,value:`option1`},{label:`択`,value:`option2`},{label:`肢`,value:`option3`}],disabled:!1,readonly:!1,required:!1,uniformSegmentWidth:!0,fullWidth:!1}},A={args:{name:`test`,data:[{label:`選択肢1`,value:`option1`},{label:`選択肢2`,value:`option2`},{label:`選択肢3`,value:`option3`}],disabled:!1,readonly:!1,required:!1,uniformSegmentWidth:!1,fullWidth:!0}},j={args:{name:`test`,data:[{label:`なが〜〜い選択肢`,value:`option1`},{label:`選`,value:`option2`},{label:`選択肢`,value:`option3`}],disabled:!1,readonly:!1,required:!1,uniformSegmentWidth:!0,fullWidth:!0}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'test',
    data: ['option1', 'option2', 'option3'],
    disabled: false,
    readonly: false,
    required: false,
    uniformSegmentWidth: false,
    fullWidth: false
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}}}))();export{A as FullWidthSegments,E as ObjectSegments,D as RandomLengthSegments,T as StringSegments,j as UniformWidthAndFullWidthSegments,O as UniformWidthSegments,k as UniformWidthSegmentsWhenShortLabel,w as default};