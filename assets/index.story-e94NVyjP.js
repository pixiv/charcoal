import{j as t,r as l,a1 as L,a2 as A,a3 as z}from"./iframe-Da7rVJAF.js";import{u as B}from"./useClassNames-BXHHFAPw.js";import"./preload-helper-C1FmrZbK.js";const k=l.createContext(null),h=({value:a,children:e})=>t.jsx(k.Provider,{value:a,children:e}),H=()=>{const a=l.useContext(k);if(a===null)throw new Error("`<RadioProvider>` is not likely mounted.");return a};try{h.displayName="RadioProvider",h.__docgenInfo={description:"",displayName:"RadioProvider",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"RadioGroupState"}}}}}catch{}const v=l.forwardRef(function(e,r){const b=B("charcoal-segmented-control",e.className),o=l.useMemo(()=>({...e,isDisabled:e.disabled,isReadOnly:e.readonly,isRequired:e.required,"aria-label":e.name}),[e]),s=L(o),{radioGroupProps:g}=A(o,s),F=l.useMemo(()=>e.data.map(n=>typeof n=="string"?{value:n,label:n}:n),[e.data]);return t.jsx("div",{ref:r,...g,className:b,"data-uniform-segment-width":e.uniformSegmentWidth,"data-full-width":e.fullWidth,children:t.jsx(h,{value:s,children:F.map(n=>t.jsx(K,{value:n.value,disabled:n.disabled,uniformSegmentWidth:e.uniformSegmentWidth,children:n.label},n.value))})})}),J=l.memo(v),K=a=>{const e=H(),r=l.useRef(null),b=l.useMemo(()=>({value:a.value,isDisabled:a.disabled,children:a.children}),[a]),{inputProps:o,isDisabled:s,isSelected:g}=z(b,e,r);return t.jsxs("label",{className:"charcoal-segmented-control-radio__label","aria-disabled":s||e.isReadOnly,"data-checked":g,"data-uniform-segment-width":a.uniformSegmentWidth,"data-full-width":a.fullWidth,children:[t.jsx("input",{className:"charcoal-segmented-control-radio__input",...o,ref:r}),a.children]})};try{v.displayName="SegmentedControl",v.__docgenInfo={description:"",displayName:"SegmentedControl",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},readonly:{defaultValue:null,description:"",name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},uniformSegmentWidth:{defaultValue:null,description:"",name:"uniformSegmentWidth",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"string[] | SegmentedControlItem[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}}}}}catch{}const Y={title:"react/SegmentedControl",component:J},d={args:{name:"test",data:["option1","option2","option3"],disabled:!1,readonly:!1,required:!1,uniformSegmentWidth:!1,fullWidth:!1}},i={args:{name:"test",data:[{label:"選択肢1",value:"option1"},{label:"選択肢2",value:"option2"},{label:"選択肢3",value:"option3"},{label:"選択肢4",value:"option4",disabled:!0}],disabled:!1,readonly:!1,required:!1,uniformSegmentWidth:!1,fullWidth:!1}},u={args:{name:"test",data:[{label:"なが〜〜い選択肢",value:"option1"},{label:"選",value:"option2"},{label:"選択肢",value:"option3"}],disabled:!1,readonly:!1,required:!1,uniformSegmentWidth:!1,fullWidth:!1}},m={args:{name:"test",data:[{label:"なが〜〜い選択肢",value:"option1"},{label:"選",value:"option2"},{label:"選択肢",value:"option3"}],disabled:!1,readonly:!1,required:!1,uniformSegmentWidth:!0,fullWidth:!1}},f={args:{name:"test",data:[{label:"選",value:"option1"},{label:"択",value:"option2"},{label:"肢",value:"option3"}],disabled:!1,readonly:!1,required:!1,uniformSegmentWidth:!0,fullWidth:!1}},c={args:{name:"test",data:[{label:"選択肢1",value:"option1"},{label:"選択肢2",value:"option2"},{label:"選択肢3",value:"option3"}],disabled:!1,readonly:!1,required:!1,uniformSegmentWidth:!1,fullWidth:!0}},p={args:{name:"test",data:[{label:"なが〜〜い選択肢",value:"option1"},{label:"選",value:"option2"},{label:"選択肢",value:"option3"}],disabled:!1,readonly:!1,required:!1,uniformSegmentWidth:!0,fullWidth:!0}};var S,W,y;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    name: 'test',
    data: ['option1', 'option2', 'option3'],
    disabled: false,
    readonly: false,
    required: false,
    uniformSegmentWidth: false,
    fullWidth: false
  }
}`,...(y=(W=d.parameters)==null?void 0:W.docs)==null?void 0:y.source}}};var q,_,x;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(x=(_=i.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var R,C,V;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(V=(C=u.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var N,$,j;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(j=($=m.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var P,w,I;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(I=(w=f.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var D,E,G;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(G=(E=c.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var M,O,U;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(U=(O=p.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};export{c as FullWidthSegments,i as ObjectSegments,u as RandomLengthSegments,d as StringSegments,p as UniformWidthAndFullWidthSegments,m as UniformWidthSegments,f as UniformWidthSegmentsWhenShortLabel,Y as default};
