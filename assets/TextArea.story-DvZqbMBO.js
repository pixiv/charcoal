import{n as e}from"./chunk-BneVvdWh.js";import{nt as t}from"./iframe-CVQNsQPh.js";import{n,t as r}from"./Clickable-Dug65fPt.js";import{n as i,t as a}from"./TextArea-BwAtATDT.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{n(),i(),o=t(),{action:s}=__STORYBOOK_MODULE_ACTIONS__,c={title:`react/TextArea`,component:a,parameters:{layout:`centered`}},l={args:{showLabel:!1,label:`Label`,requiredText:`*必須`,assistiveText:``,disabled:!1,required:!1,invalid:!1,readOnly:!1,subLabel:(0,o.jsx)(r,{onClick:s(`label-click`),children:`Text Link`}),placeholder:`Text Area`},render(e){return(0,o.jsx)(a,{...e})}},u={render(){return(0,o.jsx)(a,{showLabel:!0,label:`Label`})}},d={render(){return(0,o.jsx)(a,{placeholder:`Placeholder`,label:`Label`})}},f={render(){return(0,o.jsx)(a,{required:!0,label:`Label`,requiredText:`*必須`})}},p={render(){return(0,o.jsx)(a,{label:`Label`,assistiveText:`説明が入ります`})}},m={render:function(){return(0,o.jsx)(a,{showLabel:!0,label:`Label`,subLabel:(0,o.jsx)(r,{children:`Text Link`})})}},h={render(){return(0,o.jsx)(a,{showCount:!0,maxLength:100,label:`Label`})}},g={render(){return(0,o.jsx)(a,{disabled:!0,label:`Label`})}},_={render(){return(0,o.jsx)(a,{label:`Label`,invalid:!0,assistiveText:`エラーメッセージ`})}},v={render(){return(0,o.jsx)(a,{label:`Label`,readOnly:!0,value:`読み取り専用`})}},y={render:function(){return(0,o.jsx)(a,{autoHeight:!0,label:`Label`})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render() {
    return <TextArea showLabel label="Label" />;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render() {
    return <TextArea placeholder="Placeholder" label="Label" />;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render() {
    return <TextArea required label="Label" requiredText="*必須" />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render() {
    return <TextArea label="Label" assistiveText="説明が入ります" />;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <TextArea showLabel label="Label" subLabel={<Clickable>Text Link</Clickable>} />;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render() {
    return <TextArea showCount maxLength={100} label="Label" />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render() {
    return <TextArea disabled label="Label" />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render() {
    return <TextArea label="Label" invalid assistiveText="エラーメッセージ" />;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render() {
    return <TextArea label="Label" readOnly value="読み取り専用" />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <TextArea autoHeight label="Label" />;
  }
}`,...y.parameters?.docs?.source}}}}))();export{p as AssistiveText,y as AutoHeight,l as Default,g as Disabled,_ as Invalid,u as Label,d as Placeholder,v as ReadOnly,f as Required,h as ShowCount,m as SubLabel,c as default};