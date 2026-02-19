import{j as e}from"./iframe-NqksIJAp.js";import{C as J}from"./index-Cn0CLFls.js";import{T as r}from"./index-B2Ne6ZhU.js";import"./preload-helper-C1FmrZbK.js";import"./useClassNames-vAgdujRd.js";import"./useFocusWithClick-C-6g9M6r.js";const{action:Q}=__STORYBOOK_MODULE_ACTIONS__,re={title:"react/TextArea",component:r,parameters:{layout:"centered"}},a={args:{showLabel:!1,label:"Label",requiredText:"*必須",assistiveText:"",disabled:!1,required:!1,invalid:!1,readOnly:!1,subLabel:e.jsx(J,{onClick:Q("label-click"),children:"Text Link"}),placeholder:"Text Area"},render(m){return e.jsx(r,{...m})}},s={render(){return e.jsx(r,{showLabel:!0,label:"Label"})}},n={render(){return e.jsx(r,{placeholder:"Placeholder",label:"Label"})}},t={render(){return e.jsx(r,{required:!0,label:"Label",requiredText:"*必須"})}},l={render(){return e.jsx(r,{label:"Label",assistiveText:"説明が入ります"})}},o={render:function(){return e.jsx(r,{showLabel:!0,label:"Label",subLabel:e.jsx(J,{children:"Text Link"})})}},c={render(){return e.jsx(r,{showCount:!0,maxLength:100,label:"Label"})}},d={render(){return e.jsx(r,{disabled:!0,label:"Label"})}},u={render(){return e.jsx(r,{label:"Label",invalid:!0,assistiveText:"エラーメッセージ"})}},i={render(){return e.jsx(r,{label:"Label",readOnly:!0,value:"読み取り専用"})}},b={render:function(){return e.jsx(r,{autoHeight:!0,label:"Label"})}};var p,x,L;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(L=(x=a.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var T,h,g;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render() {
    return <TextArea showLabel label="Label" />;
  }
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,A,j;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render() {
    return <TextArea placeholder="Placeholder" label="Label" />;
  }
}`,...(j=(A=n.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var S,v,k;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render() {
    return <TextArea required label="Label" requiredText="*必須" />;
  }
}`,...(k=(v=t.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var C,O,q;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render() {
    return <TextArea label="Label" assistiveText="説明が入ります" />;
  }
}`,...(q=(O=l.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var w,R,y;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: function Render() {
    return <TextArea showLabel label="Label" subLabel={<Clickable>Text Link</Clickable>} />;
  }
}`,...(y=(R=o.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};var _,D,H;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render() {
    return <TextArea showCount maxLength={100} label="Label" />;
  }
}`,...(H=(D=c.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var P,E,I;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render() {
    return <TextArea disabled label="Label" />;
  }
}`,...(I=(E=d.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var B,K,M;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render() {
    return <TextArea label="Label" invalid assistiveText="エラーメッセージ" />;
  }
}`,...(M=(K=u.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var N,U,Y;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render() {
    return <TextArea label="Label" readOnly value="読み取り専用" />;
  }
}`,...(Y=(U=i.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var z,F,G;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: function Render() {
    return <TextArea autoHeight label="Label" />;
  }
}`,...(G=(F=b.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};export{l as AssistiveText,b as AutoHeight,a as Default,d as Disabled,u as Invalid,s as Label,n as Placeholder,i as ReadOnly,t as Required,c as ShowCount,o as SubLabel,re as default};
