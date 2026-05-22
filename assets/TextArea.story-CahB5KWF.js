import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Ht as n,nt as r}from"./iframe-DCll3SK1.js";import{n as i,t as a}from"./Clickable-D-Kir1yi.js";import{n as o,t as s}from"./TextArea-CRgFGaID.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;t((()=>{i(),o(),c=e(n(),1),l=r(),{action:u}=__STORYBOOK_MODULE_ACTIONS__,d={title:`react/TextArea`,component:s,parameters:{layout:`centered`}},f={args:{showLabel:!1,label:`Label`,requiredText:`*必須`,assistiveText:``,disabled:!1,required:!1,invalid:!1,readOnly:!1,subLabel:(0,l.jsx)(a,{onClick:u(`label-click`),children:`Text Link`}),placeholder:`Text Area`},render(e){return(0,l.jsx)(s,{...e})}},p={render(){return(0,l.jsx)(s,{showLabel:!0,label:`Label`})}},m={render(){return(0,l.jsx)(s,{placeholder:`Placeholder`,label:`Label`})}},h={render(){return(0,l.jsx)(s,{required:!0,label:`Label`,requiredText:`*必須`})}},g={render(){return(0,l.jsx)(s,{label:`Label`,assistiveText:`説明が入ります`})}},_={render:function(){return(0,l.jsx)(s,{showLabel:!0,label:`Label`,subLabel:(0,l.jsx)(a,{children:`Text Link`})})}},v={render(){return(0,l.jsx)(s,{showCount:!0,maxLength:100,label:`Label`})}},y={render(){return(0,l.jsx)(s,{disabled:!0,label:`Label`})}},b={render(){return(0,l.jsx)(s,{label:`Label`,invalid:!0,assistiveText:`エラーメッセージ`})}},x={render(){return(0,l.jsx)(s,{label:`Label`,readOnly:!0,value:`読み取り専用`})}},S={render:function(){return(0,l.jsx)(s,{label:`Label`,defaultValue:`テスト用テキスト`,showCount:!0})}},C={render:function(){return(0,l.jsx)(s,{autoHeight:!0,label:`Label`})}},w={render:function(){return(0,l.jsx)(s,{rows:3,autoHeight:!0,label:`label`})}},T={render:function(){return(0,l.jsx)(s,{rows:3,autoHeight:!0,label:`label`,showCount:!0,defaultValue:`デフォルトの入力内容
デフォルトの入力内容
デフォルトの入力内容
デフォルトの入力内容
デフォルトの入力内容
デフォルトの入力内容
デフォルトの入力内容
デフォルトの入力内容`})}},E={render:function(){return(0,l.jsx)(s,{maxRows:6,label:`label`,showCount:!0})}},D={render:function(){return(0,l.jsx)(s,{rows:3,maxRows:6,label:`label`,showCount:!0})}},O={render:function(){return(0,l.jsx)(s,{rows:3,maxRows:6,label:`label`,showCount:!0,defaultValue:`デフォルトの入力内容
デフォルトの入力内容
デフォルトの入力内容
デフォルトの入力内容
デフォルトの入力内容
デフォルトの入力内容
デフォルトの入力内容
デフォルトの入力内容`})}},k={render:function(){let[e,t]=(0,c.useState)(``),n=(0,c.useCallback)(()=>{t(`test
test
test
test
test
test
test
test
test
test
test`)},[]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`button`,{onClick:()=>{n()},children:`insert value`}),(0,l.jsx)(s,{rows:1,autoHeight:!0,label:`label`,value:e,showCount:!0})]})}},A={render:function(){let e=(0,c.useRef)(null),t=(0,c.useCallback)(()=>{e.current?.setValue(`test
test
test
test
test
test
test
test
test
test
test`)},[]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`button`,{onClick:()=>{t()},children:`insert value`}),(0,l.jsx)(s,{rows:1,label:`label`,showCount:!0,autoHeight:!0,imperativeRef:e})]})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    showLabel: false,
    label: 'Label',
    requiredText: '*必須',
    assistiveText: '',
    disabled: false,
    required: false,
    invalid: false,
    readOnly: false,
    subLabel: <Clickable onClick={action('label-click')}>Text Link</Clickable>,
    placeholder: 'Text Area'
  },
  render(args) {
    return <TextArea {...args} />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render() {
    return <TextArea showLabel label="Label" />;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render() {
    return <TextArea placeholder="Placeholder" label="Label" />;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render() {
    return <TextArea required label="Label" requiredText="*必須" />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render() {
    return <TextArea label="Label" assistiveText="説明が入ります" />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <TextArea showLabel label="Label" subLabel={<Clickable>Text Link</Clickable>} />;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render() {
    return <TextArea showCount maxLength={100} label="Label" />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render() {
    return <TextArea disabled label="Label" />;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render() {
    return <TextArea label="Label" invalid assistiveText="エラーメッセージ" />;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render() {
    return <TextArea label="Label" readOnly value="読み取り専用" />;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <TextArea label="Label" defaultValue={'テスト用テキスト'} showCount />;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <TextArea autoHeight label="Label" />;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <TextArea rows={3} autoHeight label="label" />;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <TextArea rows={3} autoHeight label="label" showCount defaultValue={'デフォルトの入力内容\\nデフォルトの入力内容\\nデフォルトの入力内容\\nデフォルトの入力内容\\nデフォルトの入力内容\\nデフォルトの入力内容\\nデフォルトの入力内容\\nデフォルトの入力内容'} />;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <TextArea maxRows={6} label="label" showCount />;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <TextArea rows={3} maxRows={6} label="label" showCount />;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <TextArea rows={3} maxRows={6} label="label" showCount defaultValue={'デフォルトの入力内容\\nデフォルトの入力内容\\nデフォルトの入力内容\\nデフォルトの入力内容\\nデフォルトの入力内容\\nデフォルトの入力内容\\nデフォルトの入力内容\\nデフォルトの入力内容'} />;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState('');
    const handleClick = useCallback(() => {
      setValue('test\\ntest\\ntest\\ntest\\ntest\\ntest\\ntest\\ntest\\ntest\\ntest\\ntest');
    }, []);
    return <>
        <button onClick={() => {
        handleClick();
      }}>
          insert value
        </button>
        <TextArea rows={1} autoHeight label="label" value={value} showCount />
      </>;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const imperativeRef = useRef<TextAreaImperativeHandle>(null);
    const handleClick = useCallback(() => {
      imperativeRef.current?.setValue('test\\ntest\\ntest\\ntest\\ntest\\ntest\\ntest\\ntest\\ntest\\ntest\\ntest');
    }, []);
    return <>
        <button onClick={() => {
        handleClick();
      }}>
          insert value
        </button>
        <TextArea rows={1} label="label" showCount autoHeight imperativeRef={imperativeRef} />
      </>;
  }
}`,...A.parameters?.docs?.source}}}}))();export{g as AssistiveText,C as AutoHeight,T as AutoHeightAndDefaultValue,w as AutoHeightAndRows,f as Default,S as DefaultValue,y as Disabled,b as Invalid,p as Label,k as MaxRowWorkingChangingValue,A as MaxRowWorkingChangingValueInRef,E as MaxRows,D as MaxRowsAndRows,O as MaxRowsOverInitialRow,m as Placeholder,x as ReadOnly,h as Required,v as ShowCount,_ as SubLabel,d as default};