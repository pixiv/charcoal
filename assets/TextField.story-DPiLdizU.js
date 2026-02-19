import{j as e,r as le}from"./iframe-D-iARKYw.js";import{C as ae}from"./index-BG8YI-Qt.js";import{T as r}from"./index-CYbtlv1h.js";import"./preload-helper-C1FmrZbK.js";import"./useClassNames-CRLeh4q8.js";import"./useFocusWithClick-BSbJ3Cid.js";const be={title:"react/TextField",component:r,parameters:{layout:"centered"}},s={args:{showLabel:!1,assistiveText:"",disabled:!1,required:!1,invalid:!1,readOnly:!1,label:"Label",requiredText:"*必須",subLabel:e.jsx(ae,{children:"Text Link"}),placeholder:"TextField"},render(L){return e.jsx(r,{...L})}},n={render(){return e.jsx(r,{showLabel:!0,label:"Label"})}},t={render(){return e.jsx(r,{label:"Label",placeholder:"Placeholder"})}},l={render(){return e.jsx(r,{label:"Label",showLabel:!0,required:!0,requiredText:"*必須"})}},o={render(){return e.jsx(r,{label:"Label",assistiveText:"説明が入ります"})}},c={render(){return e.jsx(r,{label:"Label",subLabel:e.jsx(ae,{children:"Text Link"})})}},d={render(){return e.jsx(r,{label:"Label",showCount:!0,maxLength:100})}},i={render(){return e.jsx(r,{label:"Label",disabled:!0})}},u={render(){return e.jsx(r,{label:"Label",invalid:!0,assistiveText:"エラーメッセージ"})}},p={render(){return e.jsx(r,{label:"Label",readOnly:!0,value:"読み取り専用"})}},b={render(){return e.jsx(r,{label:"Label",prefix:"/home/john/",suffix:".png"})}},m={render(){return e.jsx(r,{label:"Label",prefix:e.jsx("div",{style:{display:"flex",alignItems:"center",color:"var(--charcoal-text3)"},children:e.jsx("pixiv-icon",{name:"16/Search"})})})}},x={render:function(se){const[ne,te]=le.useState(0);return e.jsx(r,{...se,type:"number",value:ne.toString(),onChange:a=>te(parseInt(a)),onWheel:a=>{a.currentTarget.blur(),a.stopPropagation()}})}};var T,g,h;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,v,j;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render() {
    return <TextField showLabel label="Label" />;
  }
}`,...(j=(v=n.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var S,F,C;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render() {
    return <TextField label="Label" placeholder="Placeholder" />;
  }
}`,...(C=(F=t.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};var y,k,q;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render() {
    return <TextField label="Label" showLabel required requiredText="*必須" />;
  }
}`,...(q=(k=l.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var w,P,I;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render() {
    return <TextField label="Label" assistiveText="説明が入ります" />;
  }
}`,...(I=(P=o.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var O,R,A;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render() {
    return <TextField label="Label" subLabel={<Clickable>Text Link</Clickable>} />;
  }
}`,...(A=(R=c.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var D,E,W;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render() {
    return <TextField label="Label" showCount maxLength={100} />;
  }
}`,...(W=(E=d.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var N,_,z;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render() {
    return <TextField label="Label" disabled />;
  }
}`,...(z=(_=i.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var B,G,H;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render() {
    return <TextField label="Label" invalid assistiveText="エラーメッセージ" />;
  }
}`,...(H=(G=u.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,M;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render() {
    return <TextField label="Label" readOnly value="読み取り専用" />;
  }
}`,...(M=(K=p.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var Q,U,V;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render() {
    return <TextField label="Label" prefix="/home/john/" suffix=".png" />;
  }
}`,...(V=(U=b.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var X,Y,Z;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render() {
    return <TextField label="Label" prefix={<div style={{
      display: 'flex',
      alignItems: 'center',
      color: 'var(--charcoal-text3)'
    }}>
            <pixiv-icon name="16/Search" />
          </div>} />;
  }
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: function Render(args) {
    const [count, setCount] = useState(0);
    return <TextField {...args} type="number" value={count.toString()} onChange={value => setCount(parseInt(value))} onWheel={e => {
      e.currentTarget.blur();
      e.stopPropagation();
    }} />;
  }
}`,...(re=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};export{b as Affix,o as AssistiveText,s as Default,i as Disabled,u as Invalid,n as Label,x as Number,t as Placeholder,m as Prefix,p as ReadOnly,l as RequiredText,d as ShowCount,c as SubLabel,be as default};
