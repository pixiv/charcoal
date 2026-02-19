import{j as e,r as o}from"./iframe-NqksIJAp.js";import{D as l,a as t,M as ve,b as he,c as we}from"./ModalPlumbing-CI5kLE5c.js";import{M as g}from"./index-Zj7Jichx.js";import{T as xe}from"./index-DkOk3F1y.js";import{T as De}from"./index-B2Ne6ZhU.js";import{B as Se}from"./index-LvObDe0q.js";import"./preload-helper-C1FmrZbK.js";import"./index-bLnmO1Iw.js";import"./useFocusWithClick-C-6g9M6r.js";import"./useClassNames-vAgdujRd.js";import"./index-ndRftttd.js";import"./index-r21qv9j1.js";import"./index-e4vsW3In.js";import"./index-BANaXArz.js";function be(){return e.jsx("div",{role:"separator",className:"charcoal-menu-group-divider"})}const Fe={title:"react/DropdownSelector",component:l},i={render:function(n){const[r,a]=o.useState("");return e.jsx("div",{style:{width:288},children:e.jsxs(l,{...n,onChange:a,value:n.value?n.value:r,children:[e.jsx(t,{value:"1",children:"Option 1"}),e.jsx(t,{value:"2",children:"Option 2"}),e.jsx(t,{value:"3",children:"Option 3"})]})})}},u={render:function(){const[n,r]=o.useState("1");return e.jsx("div",{style:{width:288},children:e.jsxs(l,{value:n,onChange:r,label:"Label",showLabel:!0,children:[e.jsx(t,{value:"1",children:"Option 1"}),e.jsx(t,{value:"2",children:"Option 2"}),e.jsx(t,{value:"3",children:"Option 3"})]})})}},c={render:function(){const[n,r]=o.useState("1");return e.jsx("div",{style:{width:288},children:e.jsxs(l,{value:n,disabled:!0,onChange:r,label:"Label",children:[e.jsx(t,{value:"1",children:"Option 1"}),e.jsx(t,{value:"2",children:"Option 2"}),e.jsx(t,{value:"3",children:"Option 3"})]})})}},p={render:function(){const[n,r]=o.useState("2");return e.jsx("div",{style:{width:288},children:e.jsxs(l,{value:n,onChange:r,label:"Label",children:[e.jsx(t,{value:"1",children:"Option 1"}),e.jsx(t,{value:"2",disabled:!0,children:"Option 2 (disabled)"}),e.jsx(t,{value:"3",children:"Option 3"}),e.jsx(t,{value:"4",children:"Option 4"}),e.jsx(t,{value:"5",children:"Option 5"})]})})}},m={render:function(){const[n,r]=o.useState("1");return e.jsx("div",{style:{width:288},children:e.jsxs(l,{value:n,invalid:!0,onChange:r,label:"Label",children:[e.jsx(t,{value:"1",children:"Option 1"}),e.jsx(t,{value:"2",children:"Option 2"}),e.jsx(t,{value:"3",children:"Option 3"})]})})}},v={render:function(){const[n,r]=o.useState("1");return e.jsx("div",{style:{width:288},children:e.jsxs(l,{value:n,onChange:r,label:"Label",assistiveText:"assistiveText",children:[e.jsx(t,{value:"1",children:"Option 1"}),e.jsx(t,{value:"2",children:"Option 2"}),e.jsx(t,{value:"3",children:"Option 3"})]})})}},h={render:function(){const[n,r]=o.useState("1");return e.jsx("div",{style:{width:288},children:e.jsxs(l,{value:n,onChange:r,label:"Label",invalid:!0,assistiveText:"assistiveText",children:[e.jsx(t,{value:"1",children:"Option 1"}),e.jsx(t,{value:"2",children:"Option 2"}),e.jsx(t,{value:"3",children:"Option 3"})]})})}},w={render:function(){const[n,r]=o.useState("1");return e.jsx("div",{style:{width:288},children:e.jsxs(l,{value:n,onChange:r,label:"Label",showLabel:!0,required:!0,requiredText:"required",children:[e.jsx(t,{value:"1",children:"Option 1"}),e.jsx(t,{value:"2",children:"Option 2"}),e.jsx(t,{value:"3",children:"Option 3"})]})})}},x={render:function(){const[n,r]=o.useState("1");return e.jsx("div",{style:{width:288},children:e.jsxs(l,{value:n,onChange:r,label:"Label",showLabel:!0,subLabel:"SubLabel",children:[e.jsx(t,{value:"1",children:"Option 1"}),e.jsx(t,{value:"2",children:"Option 2"}),e.jsx(t,{value:"3",children:"Option 3"})]})})}},D={render:function(n){const[r,a]=o.useState("1");return e.jsx("div",{style:{width:288},children:e.jsxs(l,{...n,onChange:d=>{a(d)},value:r,label:"label",children:[e.jsx(t,{value:"1",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit,"}),e.jsx(t,{value:"2",children:"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),e.jsx(t,{value:"3",children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})})}},S={render:function(){const[n,r]=o.useState(!1),[a,d]=o.useState("1"),[O,j]=o.useState("2");return e.jsxs("div",{style:{height:"10px"},children:[e.jsx("button",{onClick:()=>r(!0),children:"open"}),e.jsxs(ve,{bottomSheet:"full",title:"modal",isOpen:n,isDismissable:!0,onClose:()=>{r(!1)},children:[e.jsx(he,{}),e.jsx(we,{children:e.jsxs("div",{style:{padding:16,display:"grid",gap:40},children:[e.jsxs(l,{value:a,onChange:d,label:"DropdownSelector1",showLabel:!0,required:!0,requiredText:"required",placeholder:"placeholder",assistiveText:"assistiveText",children:[e.jsx(t,{value:"1",children:"Option 1"}),e.jsx(t,{value:"2",children:"Option 2"}),e.jsx(t,{value:"3",children:"Option 3"})]}),e.jsx(xe,{label:"TextField",showLabel:!0,required:!0,requiredText:"required",placeholder:"placeholder",assistiveText:"assistiveText"}),e.jsx(De,{label:"TextArea",showLabel:!0,required:!0,requiredText:"required",placeholder:"placeholder",assistiveText:"assistiveText"}),e.jsxs(l,{value:O,onChange:j,label:"DropdownSelector2",showLabel:!0,required:!0,requiredText:"required",placeholder:"placeholder",assistiveText:"assistiveText",children:[e.jsx(t,{value:"1",children:"Option 1"}),e.jsx(t,{value:"2",children:"Option 2"}),e.jsx(t,{value:"3",children:"Option 3"})]})]})})]})]})}},b={render:function(n){const[r,a]=o.useState("1");return e.jsxs("form",{style:{width:288,display:"flex"},onSubmit:d=>{const j=d.target.elements.namedItem("exampleOption");alert(`selected value: Option ${j.value}`),d.preventDefault()},children:[e.jsxs(l,{...n,onChange:d=>{a(d)},value:r,label:"label",name:"exampleOption",children:[e.jsx(t,{value:"1",children:"Option 1"}),e.jsx(t,{value:"2",children:"Option 2"}),e.jsx(t,{value:"3",children:"Option 3"})]}),e.jsx(Se,{variant:"Primary",type:"submit",style:{marginLeft:16},children:"submit"})]})}},M={render:function(n){const[r,a]=o.useState("bold");return e.jsx("div",{style:{width:288},children:e.jsxs(l,{...n,onChange:d=>{a(d)},value:r,label:"label",children:[e.jsx(t,{value:"normal",children:"Normal"}),e.jsx(t,{value:"bold",children:e.jsx("div",{style:{fontWeight:"bold"},children:"Bold"})}),e.jsx(t,{value:"italic",children:e.jsx("div",{style:{fontStyle:"italic"},children:"Italic"})})]})})}},I={render:function(n){const[r,a]=o.useState("banana");return e.jsx("div",{style:{width:288},children:e.jsxs(l,{...n,onChange:d=>{a(d)},value:r,label:"label",children:[e.jsxs(g,{text:"fruits",children:[e.jsx(t,{value:"apple",children:"Apple"}),e.jsx(t,{value:"banana",children:"Banana"}),e.jsx(t,{value:"orange",children:"Orange"})]}),e.jsx(be,{}),e.jsxs(g,{text:"vehicle",children:[e.jsx(t,{value:"bicycle",children:"bicycle"}),e.jsx(t,{value:"car",children:"car"}),e.jsx(t,{value:"train",children:"train"})]})]})})}};var f,y,T;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: function Render(args) {
    const [selected, setSelected] = useState('');
    return <div style={{
      width: 288
    }}>
        <DropdownSelector {...args} onChange={setSelected} value={args.value ? args.value : selected}>
          <DropdownMenuItem value="1">Option 1</DropdownMenuItem>
          <DropdownMenuItem value="2">Option 2</DropdownMenuItem>
          <DropdownMenuItem value="3">Option 3</DropdownMenuItem>
        </DropdownSelector>
      </div>;
  }
}`,...(T=(y=i.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var L,q,C;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: function Render() {
    const [selected, setSelected] = useState('1');
    return <div style={{
      width: 288
    }}>
        <DropdownSelector value={selected} onChange={setSelected} label="Label" showLabel>
          <DropdownMenuItem value="1">Option 1</DropdownMenuItem>
          <DropdownMenuItem value="2">Option 2</DropdownMenuItem>
          <DropdownMenuItem value="3">Option 3</DropdownMenuItem>
        </DropdownSelector>
      </div>;
  }
}`,...(C=(q=u.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};var R,B,A;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: function Render() {
    const [selected, setSelected] = useState('1');
    return <div style={{
      width: 288
    }}>
        <DropdownSelector value={selected} disabled onChange={setSelected} label="Label">
          <DropdownMenuItem value="1">Option 1</DropdownMenuItem>
          <DropdownMenuItem value="2">Option 2</DropdownMenuItem>
          <DropdownMenuItem value="3">Option 3</DropdownMenuItem>
        </DropdownSelector>
      </div>;
  }
}`,...(A=(B=c.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var F,G,E;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: function Render() {
    const [selected, setSelected] = useState('2');
    return <div style={{
      width: 288
    }}>
        <DropdownSelector value={selected} onChange={setSelected} label="Label">
          <DropdownMenuItem value="1">Option 1</DropdownMenuItem>
          <DropdownMenuItem value="2" disabled>
            Option 2 (disabled)
          </DropdownMenuItem>
          <DropdownMenuItem value="3">Option 3</DropdownMenuItem>
          <DropdownMenuItem value="4">Option 4</DropdownMenuItem>
          <DropdownMenuItem value="5">Option 5</DropdownMenuItem>
        </DropdownSelector>
      </div>;
  }
}`,...(E=(G=p.parameters)==null?void 0:G.docs)==null?void 0:E.source}}};var H,N,k;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: function Render() {
    const [selected, setSelected] = useState('1');
    return <div style={{
      width: 288
    }}>
        <DropdownSelector value={selected} invalid onChange={setSelected} label="Label">
          <DropdownMenuItem value="1">Option 1</DropdownMenuItem>
          <DropdownMenuItem value="2">Option 2</DropdownMenuItem>
          <DropdownMenuItem value="3">Option 3</DropdownMenuItem>
        </DropdownSelector>
      </div>;
  }
}`,...(k=(N=m.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var P,U,W;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: function Render() {
    const [selected, setSelected] = useState('1');
    return <div style={{
      width: 288
    }}>
        <DropdownSelector value={selected} onChange={setSelected} label="Label" assistiveText="assistiveText">
          <DropdownMenuItem value="1">Option 1</DropdownMenuItem>
          <DropdownMenuItem value="2">Option 2</DropdownMenuItem>
          <DropdownMenuItem value="3">Option 3</DropdownMenuItem>
        </DropdownSelector>
      </div>;
  }
}`,...(W=(U=v.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var $,_,z;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: function Render() {
    const [selected, setSelected] = useState('1');
    return <div style={{
      width: 288
    }}>
        <DropdownSelector value={selected} onChange={setSelected} label="Label" invalid assistiveText="assistiveText">
          <DropdownMenuItem value="1">Option 1</DropdownMenuItem>
          <DropdownMenuItem value="2">Option 2</DropdownMenuItem>
          <DropdownMenuItem value="3">Option 3</DropdownMenuItem>
        </DropdownSelector>
      </div>;
  }
}`,...(z=(_=h.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var J,K,Q;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: function Render() {
    const [selected, setSelected] = useState('1');
    return <div style={{
      width: 288
    }}>
        <DropdownSelector value={selected} onChange={setSelected} label="Label" showLabel required requiredText="required">
          <DropdownMenuItem value="1">Option 1</DropdownMenuItem>
          <DropdownMenuItem value="2">Option 2</DropdownMenuItem>
          <DropdownMenuItem value="3">Option 3</DropdownMenuItem>
        </DropdownSelector>
      </div>;
  }
}`,...(Q=(K=w.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var V,X,Y;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: function Render() {
    const [selected, setSelected] = useState('1');
    return <div style={{
      width: 288
    }}>
        <DropdownSelector value={selected} onChange={setSelected} label="Label" showLabel subLabel="SubLabel">
          <DropdownMenuItem value="1">Option 1</DropdownMenuItem>
          <DropdownMenuItem value="2">Option 2</DropdownMenuItem>
          <DropdownMenuItem value="3">Option 3</DropdownMenuItem>
        </DropdownSelector>
      </div>;
  }
}`,...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;D.parameters={...D.parameters,docs:{...(Z=D.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: function Render(args) {
    const [selected, setSelected] = useState('1');
    return <div style={{
      width: 288
    }}>
        <DropdownSelector {...args} onChange={value => {
        setSelected(value);
      }} value={selected} label="label">
          <DropdownMenuItem value={'1'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          </DropdownMenuItem>
          <DropdownMenuItem value={'2'}>
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </DropdownMenuItem>
          <DropdownMenuItem value={'3'}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </DropdownMenuItem>
        </DropdownSelector>
      </div>;
  }
}`,...(te=(ee=D.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,re,oe;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    const [selected1, setSelected1] = useState('1');
    const [selected2, setSelected2] = useState('2');
    return <div style={{
      height: '10px'
    }}>
        <button onClick={() => setOpen(true)}>open</button>
        <Modal bottomSheet="full" title="modal" isOpen={open} isDismissable onClose={() => {
        setOpen(false);
      }}>
          <ModalHeader />
          <ModalBody>
            <div style={{
            padding: 16,
            display: 'grid',
            gap: 40
          }}>
              <DropdownSelector value={selected1} onChange={setSelected1} label="DropdownSelector1" showLabel required requiredText="required" placeholder="placeholder" assistiveText="assistiveText">
                <DropdownMenuItem value="1">Option 1</DropdownMenuItem>
                <DropdownMenuItem value="2">Option 2</DropdownMenuItem>
                <DropdownMenuItem value="3">Option 3</DropdownMenuItem>
              </DropdownSelector>

              <TextField label="TextField" showLabel required requiredText="required" placeholder="placeholder" assistiveText="assistiveText" />
              <TextArea label="TextArea" showLabel required requiredText="required" placeholder="placeholder" assistiveText="assistiveText" />

              <DropdownSelector value={selected2} onChange={setSelected2} label="DropdownSelector2" showLabel required requiredText="required" placeholder="placeholder" assistiveText="assistiveText">
                <DropdownMenuItem value="1">Option 1</DropdownMenuItem>
                <DropdownMenuItem value="2">Option 2</DropdownMenuItem>
                <DropdownMenuItem value="3">Option 3</DropdownMenuItem>
              </DropdownSelector>
            </div>
          </ModalBody>
        </Modal>
      </div>;
  }
}`,...(oe=(re=S.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var le,se,de;b.parameters={...b.parameters,docs:{...(le=b.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: function Render(props) {
    const [selected, setSelected] = useState('1');
    return <form style={{
      width: 288,
      display: 'flex'
    }} onSubmit={e => {
      const target = e.target as HTMLFormElement;
      const select = target.elements.namedItem('exampleOption') as HTMLSelectElement;
      alert(\`selected value: Option \${select.value}\`);
      e.preventDefault();
    }}>
        <DropdownSelector {...props} onChange={value => {
        setSelected(value);
      }} value={selected} label="label" name="exampleOption">
          <DropdownMenuItem value="1">Option 1</DropdownMenuItem>
          <DropdownMenuItem value="2">Option 2</DropdownMenuItem>
          <DropdownMenuItem value="3">Option 3</DropdownMenuItem>
        </DropdownSelector>
        <Button variant="Primary" type="submit" style={{
        marginLeft: 16
      }}>
          submit
        </Button>
      </form>;
  }
}`,...(de=(se=b.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var ae,ie,ue;M.parameters={...M.parameters,docs:{...(ae=M.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: function Render(props) {
    const [selected, setSelected] = useState('bold');
    return <div style={{
      width: 288
    }}>
        <DropdownSelector {...props} onChange={value => {
        setSelected(value);
      }} value={selected} label="label">
          <DropdownMenuItem value={'normal'}>Normal</DropdownMenuItem>
          <DropdownMenuItem value={'bold'}>
            <div style={{
            fontWeight: 'bold'
          }}>
              Bold
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem value={'italic'}>
            <div style={{
            fontStyle: 'italic'
          }}>
              Italic
            </div>
          </DropdownMenuItem>
        </DropdownSelector>
      </div>;
  }
}`,...(ue=(ie=M.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};var ce,pe,me;I.parameters={...I.parameters,docs:{...(ce=I.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: function Render(props) {
    const [selected, setSelected] = useState('banana');
    return <div style={{
      width: 288
    }}>
        <DropdownSelector {...props} onChange={value => {
        setSelected(value);
      }} value={selected} label="label">
          <MenuItemGroup text="fruits">
            <DropdownMenuItem value={'apple'}>Apple</DropdownMenuItem>
            <DropdownMenuItem value={'banana'}>Banana</DropdownMenuItem>
            <DropdownMenuItem value={'orange'}>Orange</DropdownMenuItem>
          </MenuItemGroup>
          <Divider />
          <MenuItemGroup text="vehicle">
            <DropdownMenuItem value={'bicycle'}>bicycle</DropdownMenuItem>
            <DropdownMenuItem value={'car'}>car</DropdownMenuItem>
            <DropdownMenuItem value={'train'}>train</DropdownMenuItem>
          </MenuItemGroup>
        </DropdownSelector>
      </div>;
  }
}`,...(me=(pe=I.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};export{v as AssistiveText,M as CustomChildren,i as Default,c as Disabled,p as DisabledItem,b as InFormTag,S as InModal,m as Invalid,h as InvalidAssistiveText,u as Label,D as LongNames,w as RequiredText,I as Section,x as SubLabel,Fe as default};
