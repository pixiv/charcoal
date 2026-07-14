import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Yt as n,lt as r}from"./iframe-C17UB5SL.js";import{n as i,t as a}from"./Clickable-Cu1w2hRI.js";import{n as o,t as s}from"./TextField-6j788tC4.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;t((()=>{i(),o(),c=e(n(),1),l=r(),u={title:`react/TextField`,component:s,parameters:{layout:`centered`}},d={args:{showLabel:!1,assistiveText:``,disabled:!1,required:!1,invalid:!1,readOnly:!1,label:`Label`,requiredText:`*必須`,subLabel:(0,l.jsx)(a,{children:`Text Link`}),placeholder:`TextField`},render(e){return(0,l.jsx)(s,{...e})}},f={render(){return(0,l.jsx)(s,{showLabel:!0,label:`Label`})}},p={render(){return(0,l.jsx)(s,{label:`Label`,placeholder:`Placeholder`})}},m={render(){return(0,l.jsx)(s,{label:`Label`,showLabel:!0,required:!0,requiredText:`*必須`})}},h={render(){return(0,l.jsx)(s,{label:`Label`,assistiveText:`説明が入ります`})}},g={render(){return(0,l.jsx)(s,{label:`Label`,subLabel:(0,l.jsx)(a,{children:`Text Link`})})}},_={render(){return(0,l.jsx)(s,{label:`Label`,showCount:!0,maxLength:100})}},v={render(){return(0,l.jsx)(s,{label:`Label`,disabled:!0})}},y={render(){return(0,l.jsx)(s,{label:`Label`,invalid:!0,assistiveText:`エラーメッセージ`})}},b={parameters:{tokenVersion:`v2`},render(){return(0,l.jsxs)(`div`,{style:{display:`grid`,gap:24,width:320},children:[(0,l.jsx)(s,{label:`Label`,showLabel:!0,required:!0,requiredText:`*必須`,subLabel:(0,l.jsx)(a,{children:`Text Link`}),placeholder:`Placeholder`,assistiveText:`説明が入ります`,showCount:!0,maxLength:100}),(0,l.jsx)(s,{label:`Invalid`,invalid:!0,placeholder:`Placeholder`,assistiveText:`エラーメッセージ`}),(0,l.jsx)(s,{label:`Disabled`,disabled:!0,value:`Disabled value`})]})}},x={render(){return(0,l.jsx)(s,{label:`Label`,readOnly:!0,value:`読み取り専用`})}},S={render(){return(0,l.jsx)(s,{label:`Label`,prefix:`/home/john/`,suffix:`.png`})}},C={render(){return(0,l.jsx)(s,{label:`Label`,prefix:(0,l.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,color:`var(--charcoal-text3)`},children:(0,l.jsx)(`pixiv-icon`,{name:`16/Search`})})})}},w={render:function(e){let[t,n]=(0,c.useState)(0);return(0,l.jsx)(s,{...e,type:`number`,value:t.toString(),onChange:e=>n(parseInt(e)),onWheel:e=>{e.currentTarget.blur(),e.stopPropagation()}})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    showLabel: false,
    assistiveText: '',
    disabled: false,
    required: false,
    invalid: false,
    readOnly: false,
    label: 'Label',
    requiredText: '*必須',
    subLabel: <Clickable>Text Link</Clickable>,
    placeholder: 'TextField'
  },
  render(args) {
    return <TextField {...args} />;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render() {
    return <TextField showLabel label="Label" />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render() {
    return <TextField label="Label" placeholder="Placeholder" />;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render() {
    return <TextField label="Label" showLabel required requiredText="*必須" />;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render() {
    return <TextField label="Label" assistiveText="説明が入ります" />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render() {
    return <TextField label="Label" subLabel={<Clickable>Text Link</Clickable>} />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render() {
    return <TextField label="Label" showCount maxLength={100} />;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render() {
    return <TextField label="Label" disabled />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render() {
    return <TextField label="Label" invalid assistiveText="エラーメッセージ" />;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    tokenVersion: 'v2'
  },
  render() {
    return <div style={{
      display: 'grid',
      gap: 24,
      width: 320
    }}>
        <TextField label="Label" showLabel required requiredText="*必須" subLabel={<Clickable>Text Link</Clickable>} placeholder="Placeholder" assistiveText="説明が入ります" showCount maxLength={100} />
        <TextField label="Invalid" invalid placeholder="Placeholder" assistiveText="エラーメッセージ" />
        <TextField label="Disabled" disabled value="Disabled value" />
      </div>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render() {
    return <TextField label="Label" readOnly value="読み取り専用" />;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render() {
    return <TextField label="Label" prefix="/home/john/" suffix=".png" />;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render() {
    return <TextField label="Label" prefix={<div style={{
      display: 'flex',
      alignItems: 'center',
      color: 'var(--charcoal-text3)'
    }}>
            <pixiv-icon name="16/Search" />
          </div>} />;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [count, setCount] = useState(0);
    return <TextField {...args} type="number" value={count.toString()} onChange={value => setCount(parseInt(value))} onWheel={e => {
      e.currentTarget.blur();
      e.stopPropagation();
    }} />;
  }
}`,...w.parameters?.docs?.source}}}}))();export{S as Affix,h as AssistiveText,d as Default,v as Disabled,y as Invalid,f as Label,w as Number,p as Placeholder,C as Prefix,x as ReadOnly,m as RequiredText,_ as ShowCount,g as SubLabel,b as TokenV2,u as default};