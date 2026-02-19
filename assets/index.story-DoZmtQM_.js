import{R as l,r,Q as z,j as e}from"./iframe-NqksIJAp.js";import{M as i,b as g,c as j,d as s,e as b,f as K,D as I,a as B}from"./ModalPlumbing-CI5kLE5c.js";import{B as a}from"./index-LvObDe0q.js";import{T as v}from"./index-DkOk3F1y.js";import{C as _}from"./index-ieda_kNL.js";import"./preload-helper-C1FmrZbK.js";import"./index-bLnmO1Iw.js";import"./useFocusWithClick-C-6g9M6r.js";import"./useClassNames-vAgdujRd.js";import"./index-ndRftttd.js";import"./index-r21qv9j1.js";import"./index-e4vsW3In.js";import"./index-BANaXArz.js";import"./index-BwoOKc1c.js";const S=l.createContext(null);function G(o){let{children:n}=o,t=r.useContext(S),[u,m]=r.useState(0),O=r.useMemo(()=>({parent:t,modalCount:u,addModal(){m(k=>k+1),t&&t.addModal()},removeModal(){m(k=>k-1),t&&t.removeModal()}}),[t,u]);return l.createElement(S.Provider,{value:O},n)}function J(){let o=r.useContext(S);return{modalProviderProps:{"aria-hidden":o&&o.modalCount>0?!0:void 0}}}function U(o){let{modalProviderProps:n}=J();return l.createElement("div",{"data-overlay-container":!0,...o,...n})}function d(o){return l.createElement(G,null,l.createElement(U,o))}function c(o){let[n,t]=z(o.isOpen,o.defaultOpen||!1,o.onOpenChange);const u=r.useCallback(()=>{t(!0)},[t]),m=r.useCallback(()=>{t(!1)},[t]),O=r.useCallback(()=>{t(!n)},[t,n]);return{isOpen:n,setOpen:t,open:u,close:m,toggle:O}}const ue={title:"react/Modal",component:i,args:{title:"react/Title"},argTypes:{size:{options:["S","M","L"],control:{type:"inline-radio"},defaultValue:"M"},bottomSheet:{options:["full","true","false"],mapping:{full:"full",true:!0,false:!1},control:{type:"inline-radio"},defaultValue:!1}},render:function(n){const t=c({});return e.jsxs(d,{children:[e.jsx(a,{onClick:()=>t.open(),children:"Open Modal"}),e.jsx(H,{...n,isDismissable:!0,isOpen:t.isOpen,onClose:()=>t.close()})]})}},H=o=>e.jsxs(i,{...o,children:[e.jsx(g,{}),e.jsxs(j,{children:[e.jsxs(y,{children:[e.jsx(C,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod placeat tenetur, necessitatibus laudantium cumque exercitationem provident. Quaerat iure enim, eveniet dolores earum odio quo possimus fugiat aspernatur, numquam, commodi repellat."}),e.jsx(s,{children:e.jsx(v,{showLabel:!0,label:"Name",placeholder:"Nagisa"})}),e.jsx(s,{children:e.jsx(v,{autoFocus:!0,showLabel:!0,label:"Country",placeholder:"Tokyo"})}),e.jsx(s,{children:e.jsxs(I,{onChange:()=>null,value:"10",showLabel:!0,label:"Fruits",placeholder:"Apple",children:[e.jsx(B,{value:"10",children:"Apple"}),e.jsx(B,{value:"20",children:"Banana"}),e.jsx(B,{value:"30",children:"Orange"})]})})]}),e.jsxs(b,{children:[e.jsx(a,{variant:"Primary",onClick:()=>o.onClose(),fullWidth:!0,children:"Apply"}),e.jsx(a,{onClick:()=>o.onClose(),fullWidth:!0,children:"Cancel"})]})]})]}),y=o=>e.jsx("div",{style:{display:"grid",gap:24},...o}),C=o=>e.jsx("div",{style:{fontSize:14,lineHeight:"22px",padding:"0 16px",color:"var(--charcoal-text2)"},...o}),p={},h={args:{bottomSheet:"full"},render:function(n){const t=c({});return e.jsxs(d,{children:[e.jsx(a,{onClick:()=>t.open(),children:"Open Modal"}),e.jsxs(i,{...n,isDismissable:!0,isOpen:t.isOpen,onClose:()=>t.close(),children:[e.jsx(g,{}),e.jsxs(j,{children:[e.jsxs(y,{children:[e.jsx(C,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod placeat tenetur, necessitatibus laudantium cumque exercitationem provident. Quaerat iure enim, eveniet dolores earum odio quo possimus fugiat aspernatur, numquam, commodi repellat."}),e.jsx(s,{children:e.jsx(v,{showLabel:!0,label:"Name",placeholder:"Nagisa"})}),e.jsx(s,{children:e.jsx(v,{showLabel:!0,label:"Country",placeholder:"Tokyo"})})]}),e.jsxs(b,{children:[e.jsx(a,{variant:"Primary",onClick:()=>t.close(),fullWidth:!0,children:"Apply"}),e.jsx(a,{onClick:()=>t.close(),fullWidth:!0,children:"Cancel"})]})]})]})]})}},x={render:function(n){const t=c({});return e.jsxs(d,{children:[e.jsx(a,{onClick:()=>t.open(),children:"Open Modal"}),e.jsxs(i,{...n,isOpen:t.isOpen,onClose:()=>t.close(),bottomSheet:!0,isDismissable:!0,children:[e.jsx(g,{}),e.jsxs(j,{children:[e.jsx(y,{children:e.jsx(C,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod placeat tenetur, necessitatibus laudantium cumque exercitationem provident. Quaerat iure enim, eveniet dolores earum odio quo possimus fugiat aspernatur, numquam, commodi repellat."})}),e.jsxs(b,{children:[e.jsx(_,{checked:!0,children:"test checkbox"}),e.jsx(a,{variant:"Danger",onClick:()=>t.close(),fullWidth:!0,children:"削除する"}),e.jsx(K,{children:"キャンセル"})]})]})]})]})}},f={render:function(n){const t=c({});return e.jsxs(d,{children:[e.jsx(a,{onClick:()=>t.open(),children:"Open Modal"}),e.jsxs(i,{...n,isOpen:t.isOpen,onClose:()=>t.close(),children:[e.jsx(g,{}),e.jsxs(j,{children:[e.jsx(y,{children:e.jsx(C,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod placeat tenetur, necessitatibus laudantium cumque exercitationem provident. Quaerat iure enim, eveniet dolores earum odio quo possimus fugiat aspernatur, numquam, commodi repellat."})}),e.jsx(b,{children:e.jsx(a,{variant:"Primary",onClick:()=>t.close(),fullWidth:!0,children:"OK"})})]})]})]})}},M={render:function(n){const t=c({});return e.jsxs(d,{children:[e.jsx("div",{style:{height:1024},children:e.jsx(a,{onClick:()=>t.open(),children:"Open Modal"})}),e.jsx(H,{...n,isDismissable:!0,isOpen:t.isOpen,onClose:()=>t.close()})]})}};var P,q,$;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:"{}",...($=(q=p.parameters)==null?void 0:q.docs)==null?void 0:$.source}}};var T,D,L;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    bottomSheet: 'full'
  },
  render: function Render(args) {
    const state = useOverlayTriggerState({});
    return (
      // Application must be wrapped in an OverlayProvider so that it can be
      // hidden from screen readers when a modal opens.
      <OverlayProvider>
        <Button onClick={() => state.open()}>Open Modal</Button>

        <Modal {...args} isDismissable isOpen={state.isOpen} onClose={() => state.close()}>
          <ModalHeader />
          <ModalBody>
            <ModalVStack>
              <StyledModalText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                placeat tenetur, necessitatibus laudantium cumque exercitationem
                provident. Quaerat iure enim, eveniet dolores earum odio quo
                possimus fugiat aspernatur, numquam, commodi repellat.
              </StyledModalText>
              <ModalAlign>
                <TextField showLabel label="Name" placeholder="Nagisa" />
              </ModalAlign>
              <ModalAlign>
                <TextField showLabel label="Country" placeholder="Tokyo" />
              </ModalAlign>
            </ModalVStack>
            <ModalButtons>
              <Button variant="Primary" onClick={() => state.close()} fullWidth>
                Apply
              </Button>
              <Button onClick={() => state.close()} fullWidth>
                Cancel
              </Button>
            </ModalButtons>
          </ModalBody>
        </Modal>
      </OverlayProvider>
    );
  }
}`,...(L=(D=h.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var Q,w,A;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: function Render(args) {
    const state = useOverlayTriggerState({});
    return (
      // Application must be wrapped in an OverlayProvider so that it can be
      // hidden from screen readers when a modal opens.
      <OverlayProvider>
        <Button onClick={() => state.open()}>Open Modal</Button>

        <Modal {...args} isOpen={state.isOpen} onClose={() => state.close()} bottomSheet isDismissable>
          <ModalHeader />
          <ModalBody>
            <ModalVStack>
              <StyledModalText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                placeat tenetur, necessitatibus laudantium cumque exercitationem
                provident. Quaerat iure enim, eveniet dolores earum odio quo
                possimus fugiat aspernatur, numquam, commodi repellat.
              </StyledModalText>
            </ModalVStack>
            <ModalButtons>
              <Checkbox checked>test checkbox</Checkbox>
              <Button variant="Danger" onClick={() => state.close()} fullWidth>
                削除する
              </Button>
              <ModalDismissButton>キャンセル</ModalDismissButton>
            </ModalButtons>
          </ModalBody>
        </Modal>
      </OverlayProvider>
    );
  }
}`,...(A=(w=x.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var R,W,V;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: function Render(args) {
    const state = useOverlayTriggerState({});
    return <OverlayProvider>
        <Button onClick={() => state.open()}>Open Modal</Button>

        <Modal {...args} isOpen={state.isOpen} onClose={() => state.close()}>
          <ModalHeader />
          <ModalBody>
            <ModalVStack>
              <StyledModalText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                placeat tenetur, necessitatibus laudantium cumque exercitationem
                provident. Quaerat iure enim, eveniet dolores earum odio quo
                possimus fugiat aspernatur, numquam, commodi repellat.
              </StyledModalText>
            </ModalVStack>
            <ModalButtons>
              <Button variant="Primary" onClick={() => state.close()} fullWidth>
                OK
              </Button>
            </ModalButtons>
          </ModalBody>
        </Modal>
      </OverlayProvider>;
  }
}`,...(V=(W=f.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var N,E,F;M.parameters={...M.parameters,docs:{...(N=M.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: function Render(args) {
    const state = useOverlayTriggerState({});
    return <OverlayProvider>
        <div style={{
        height: 1024
      }}>
          <Button onClick={() => state.open()}>Open Modal</Button>
        </div>
        <M {...args} isDismissable isOpen={state.isOpen} onClose={() => state.close()} />
      </OverlayProvider>;
  }
}`,...(F=(E=M.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};export{M as BackgroundScroll,x as BottomSheet,p as Default,h as FullBottomSheet,f as NotDismmissableStory,ue as default};
