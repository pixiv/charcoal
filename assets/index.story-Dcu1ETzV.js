import{a as e,n as t}from"./chunk-BneVvdWh.js";import{T as n,ot as r,qt as i,st as a,w as o}from"./iframe-CB_BGZv4.js";import{n as s,t as c}from"./Button-SzbDbUP4.js";import{n as l,t as u}from"./Checkbox-C_yOkL4O.js";import{a as d,c as f,d as p,f as m,i as h,l as g,n as _,o as v,r as y,s as b,t as x,u as S}from"./ModalPlumbing-B5zwR64e.js";import{n as C,t as w}from"./TextField-CnBEgoZf.js";function T(e){let{children:t}=e,n=(0,k.useContext)(A),[r,i]=(0,k.useState)(0),a=(0,k.useMemo)(()=>({parent:n,modalCount:r,addModal(){i(e=>e+1),n&&n.addModal()},removeModal(){i(e=>e-1),n&&n.removeModal()}}),[n,r]);return k.createElement(A.Provider,{value:a},t)}function E(){let e=(0,k.useContext)(A);return{modalProviderProps:{"aria-hidden":e&&e.modalCount>0?!0:void 0}}}function D(e){let{modalProviderProps:t}=E();return k.createElement(`div`,{"data-overlay-container":!0,...e,...t})}function O(e){return k.createElement(T,null,k.createElement(D,e))}var k,A,j=t((()=>{k=e(i(),1),r(),A=k.createContext(null)}));function M(e){let[t,n]=o(e.isOpen,e.defaultOpen||!1,e.onOpenChange);return{isOpen:t,setOpen:n,open:(0,N.useCallback)(()=>{n(!0)},[n]),close:(0,N.useCallback)(()=>{n(!1)},[n]),toggle:(0,N.useCallback)(()=>{n(!t)},[n,t])}}var N,P=t((()=>{n(),N=e(i(),1)})),F=t((()=>{P()})),I=t((()=>{j()})),L,R,z,B,V,H,U,W,G,K,q;t((()=>{f(),F(),s(),d(),C(),m(),l(),S(),I(),L=a(),R=!1,z={title:`react/Modal`,component:b,args:{title:`react/Title`},argTypes:{size:{options:[`S`,`M`,`L`],control:{type:`inline-radio`},defaultValue:`M`},bottomSheet:{options:[`full`,`true`,`false`],mapping:{full:`full`,true:!0,false:!1},control:{type:`inline-radio`},defaultValue:!1}},render:function(e){let t=M({defaultOpen:R});return(0,L.jsxs)(O,{children:[(0,L.jsx)(c,{onClick:()=>t.open(),children:`Open Modal`}),(0,L.jsx)(B,{...e,isDismissable:!0,isOpen:t.isOpen,onClose:()=>t.close()})]})}},B=e=>(0,L.jsxs)(b,{...e,children:[(0,L.jsx)(h,{}),(0,L.jsxs)(_,{children:[(0,L.jsxs)(V,{children:[(0,L.jsx)(H,{children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod placeat tenetur, necessitatibus laudantium cumque exercitationem provident. Quaerat iure enim, eveniet dolores earum odio quo possimus fugiat aspernatur, numquam, commodi repellat.`}),(0,L.jsx)(x,{children:(0,L.jsx)(w,{showLabel:!0,label:`Name`,placeholder:`Nagisa`})}),(0,L.jsx)(x,{children:(0,L.jsx)(w,{autoFocus:!0,showLabel:!0,label:`Country`,placeholder:`Tokyo`})}),(0,L.jsx)(x,{children:(0,L.jsxs)(p,{onChange:()=>null,value:`10`,showLabel:!0,label:`Fruits`,placeholder:`Apple`,children:[(0,L.jsx)(g,{value:`10`,children:`Apple`}),(0,L.jsx)(g,{value:`20`,children:`Banana`}),(0,L.jsx)(g,{value:`30`,children:`Orange`})]})})]}),(0,L.jsxs)(y,{children:[(0,L.jsx)(c,{variant:`Primary`,onClick:()=>e.onClose(),fullWidth:!0,children:`Apply`}),(0,L.jsx)(c,{onClick:()=>e.onClose(),fullWidth:!0,children:`Cancel`})]})]})]}),V=e=>(0,L.jsx)(`div`,{style:{display:`grid`,gap:24},...e}),H=e=>(0,L.jsx)(`div`,{style:{fontSize:14,lineHeight:`22px`,padding:`0 16px`,color:`var(--charcoal-text2)`},...e}),U={},W={args:{bottomSheet:`full`},render:function(e){let t=M({defaultOpen:R});return(0,L.jsxs)(O,{children:[(0,L.jsx)(c,{onClick:()=>t.open(),children:`Open Modal`}),(0,L.jsxs)(b,{...e,isDismissable:!0,isOpen:t.isOpen,onClose:()=>t.close(),children:[(0,L.jsx)(h,{}),(0,L.jsxs)(_,{children:[(0,L.jsxs)(V,{children:[(0,L.jsx)(H,{children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod placeat tenetur, necessitatibus laudantium cumque exercitationem provident. Quaerat iure enim, eveniet dolores earum odio quo possimus fugiat aspernatur, numquam, commodi repellat.`}),(0,L.jsx)(x,{children:(0,L.jsx)(w,{showLabel:!0,label:`Name`,placeholder:`Nagisa`})}),(0,L.jsx)(x,{children:(0,L.jsx)(w,{showLabel:!0,label:`Country`,placeholder:`Tokyo`})})]}),(0,L.jsxs)(y,{children:[(0,L.jsx)(c,{variant:`Primary`,onClick:()=>t.close(),fullWidth:!0,children:`Apply`}),(0,L.jsx)(c,{onClick:()=>t.close(),fullWidth:!0,children:`Cancel`})]})]})]})]})}},G={render:function(e){let t=M({defaultOpen:R});return(0,L.jsxs)(O,{children:[(0,L.jsx)(c,{onClick:()=>t.open(),children:`Open Modal`}),(0,L.jsxs)(b,{...e,isOpen:t.isOpen,onClose:()=>t.close(),bottomSheet:!0,isDismissable:!0,children:[(0,L.jsx)(h,{}),(0,L.jsxs)(_,{children:[(0,L.jsx)(V,{children:(0,L.jsx)(H,{children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod placeat tenetur, necessitatibus laudantium cumque exercitationem provident. Quaerat iure enim, eveniet dolores earum odio quo possimus fugiat aspernatur, numquam, commodi repellat.`})}),(0,L.jsxs)(y,{children:[(0,L.jsx)(u,{checked:!0,children:`test checkbox`}),(0,L.jsx)(c,{variant:`Danger`,onClick:()=>t.close(),fullWidth:!0,children:`削除する`}),(0,L.jsx)(v,{children:`キャンセル`})]})]})]})]})}},K={render:function(e){let t=M({defaultOpen:R});return(0,L.jsxs)(O,{children:[(0,L.jsx)(c,{onClick:()=>t.open(),children:`Open Modal`}),(0,L.jsxs)(b,{...e,isOpen:t.isOpen,onClose:()=>t.close(),children:[(0,L.jsx)(h,{}),(0,L.jsxs)(_,{children:[(0,L.jsx)(V,{children:(0,L.jsx)(H,{children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod placeat tenetur, necessitatibus laudantium cumque exercitationem provident. Quaerat iure enim, eveniet dolores earum odio quo possimus fugiat aspernatur, numquam, commodi repellat.`})}),(0,L.jsx)(y,{children:(0,L.jsx)(c,{variant:`Primary`,onClick:()=>t.close(),fullWidth:!0,children:`OK`})})]})]})]})}},q={render:function(e){let t=M({defaultOpen:R});return(0,L.jsxs)(O,{children:[(0,L.jsx)(`div`,{style:{height:1024},children:(0,L.jsx)(c,{onClick:()=>t.open(),children:`Open Modal`})}),(0,L.jsx)(B,{...e,isDismissable:!0,isOpen:t.isOpen,onClose:()=>t.close()})]})}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    bottomSheet: 'full'
  },
  render: function Render(args) {
    const state = useOverlayTriggerState({
      defaultOpen
    });
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const state = useOverlayTriggerState({
      defaultOpen
    });
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const state = useOverlayTriggerState({
      defaultOpen
    });
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const state = useOverlayTriggerState({
      defaultOpen
    });
    return <OverlayProvider>
        <div style={{
        height: 1024
      }}>
          <Button onClick={() => state.open()}>Open Modal</Button>
        </div>
        <M {...args} isDismissable isOpen={state.isOpen} onClose={() => state.close()} />
      </OverlayProvider>;
  }
}`,...q.parameters?.docs?.source}}}}))();export{q as BackgroundScroll,G as BottomSheet,U as Default,W as FullBottomSheet,K as NotDismmissableStory,z as default};