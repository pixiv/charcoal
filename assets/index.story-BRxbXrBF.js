import{a as e,n as t}from"./chunk-BneVvdWh.js";import{i as n,t as r}from"./exports-CHuG29mE.js";import{a as i,c as a,d as o,f as s,i as c,l,n as u,o as d,r as f,s as p,t as m,u as h}from"./ModalPlumbing-Bsw2qlkJ.js";import{n as g,t as _}from"./useControlledState-yHtbEgdQ.js";import{_t as v,j as y}from"./iframe-DQozDSR-.js";import{n as b,t as x}from"./Button-B9IYfXXu.js";import{n as S,t as C}from"./Checkbox-Bh6f_6GO.js";import{n as w,t as T}from"./TextField-s6NtWlpI.js";function E(e){let[t,n]=_(e.isOpen,e.defaultOpen||!1,e.onOpenChange);return{isOpen:t,setOpen:n,open:(0,D.useCallback)(()=>{n(!0)},[n]),close:(0,D.useCallback)(()=>{n(!1)},[n]),toggle:(0,D.useCallback)(()=>{n(!t)},[n,t])}}var D,O=t((()=>{g(),D=e(v(),1)})),k=t((()=>{O()})),A,j,M,N,P,F,I,L,R,z,B,V;t((()=>{a(),k(),b(),i(),w(),s(),S(),h(),r(),A=y(),j=!1,M={title:`react/Modal`,component:p,args:{title:`react/Title`},argTypes:{size:{options:[`S`,`M`,`L`],control:{type:`inline-radio`},defaultValue:`M`},bottomSheet:{options:[`full`,`true`,`false`],mapping:{full:`full`,true:!0,false:!1},control:{type:`inline-radio`},defaultValue:!1}},render:function(e){let t=E({defaultOpen:j});return(0,A.jsxs)(n,{children:[(0,A.jsx)(x,{onClick:()=>t.open(),children:`Open Modal`}),(0,A.jsx)(N,{...e,isDismissable:!0,isOpen:t.isOpen,onClose:()=>t.close()})]})}},N=e=>(0,A.jsxs)(p,{...e,children:[(0,A.jsx)(c,{}),(0,A.jsxs)(u,{children:[(0,A.jsxs)(P,{children:[(0,A.jsx)(F,{children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod placeat tenetur, necessitatibus laudantium cumque exercitationem provident. Quaerat iure enim, eveniet dolores earum odio quo possimus fugiat aspernatur, numquam, commodi repellat.`}),(0,A.jsx)(m,{children:(0,A.jsx)(T,{showLabel:!0,label:`Name`,placeholder:`Nagisa`})}),(0,A.jsx)(m,{children:(0,A.jsx)(T,{autoFocus:!0,showLabel:!0,label:`Country`,placeholder:`Tokyo`})}),(0,A.jsx)(m,{children:(0,A.jsxs)(o,{onChange:()=>null,value:`10`,showLabel:!0,label:`Fruits`,placeholder:`Apple`,children:[(0,A.jsx)(l,{value:`10`,children:`Apple`}),(0,A.jsx)(l,{value:`20`,children:`Banana`}),(0,A.jsx)(l,{value:`30`,children:`Orange`})]})})]}),(0,A.jsxs)(f,{children:[(0,A.jsx)(x,{variant:`Primary`,onClick:()=>e.onClose(),fullWidth:!0,children:`Apply`}),(0,A.jsx)(x,{onClick:()=>e.onClose(),fullWidth:!0,children:`Cancel`})]})]})]}),P=e=>(0,A.jsx)(`div`,{style:{display:`grid`,gap:24},...e}),F=e=>(0,A.jsx)(`div`,{style:{fontSize:14,lineHeight:`22px`,padding:`0 16px`,color:`var(--charcoal-text2)`},...e}),I={},L={parameters:{tokenVersion:`v2`},render:function(e){let t=E({defaultOpen:!0});return(0,A.jsxs)(n,{children:[(0,A.jsx)(x,{onClick:()=>t.open(),children:`Open Modal`}),(0,A.jsx)(N,{...e,isDismissable:!0,isOpen:t.isOpen,onClose:()=>t.close()})]})}},R={args:{bottomSheet:`full`},render:function(e){let t=E({defaultOpen:j});return(0,A.jsxs)(n,{children:[(0,A.jsx)(x,{onClick:()=>t.open(),children:`Open Modal`}),(0,A.jsxs)(p,{...e,isDismissable:!0,isOpen:t.isOpen,onClose:()=>t.close(),children:[(0,A.jsx)(c,{}),(0,A.jsxs)(u,{children:[(0,A.jsxs)(P,{children:[(0,A.jsx)(F,{children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod placeat tenetur, necessitatibus laudantium cumque exercitationem provident. Quaerat iure enim, eveniet dolores earum odio quo possimus fugiat aspernatur, numquam, commodi repellat.`}),(0,A.jsx)(m,{children:(0,A.jsx)(T,{showLabel:!0,label:`Name`,placeholder:`Nagisa`})}),(0,A.jsx)(m,{children:(0,A.jsx)(T,{showLabel:!0,label:`Country`,placeholder:`Tokyo`})})]}),(0,A.jsxs)(f,{children:[(0,A.jsx)(x,{variant:`Primary`,onClick:()=>t.close(),fullWidth:!0,children:`Apply`}),(0,A.jsx)(x,{onClick:()=>t.close(),fullWidth:!0,children:`Cancel`})]})]})]})]})}},z={render:function(e){let t=E({defaultOpen:j});return(0,A.jsxs)(n,{children:[(0,A.jsx)(x,{onClick:()=>t.open(),children:`Open Modal`}),(0,A.jsxs)(p,{...e,isOpen:t.isOpen,onClose:()=>t.close(),bottomSheet:!0,isDismissable:!0,children:[(0,A.jsx)(c,{}),(0,A.jsxs)(u,{children:[(0,A.jsx)(P,{children:(0,A.jsx)(F,{children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod placeat tenetur, necessitatibus laudantium cumque exercitationem provident. Quaerat iure enim, eveniet dolores earum odio quo possimus fugiat aspernatur, numquam, commodi repellat.`})}),(0,A.jsxs)(f,{children:[(0,A.jsx)(C,{checked:!0,children:`test checkbox`}),(0,A.jsx)(x,{variant:`Danger`,onClick:()=>t.close(),fullWidth:!0,children:`削除する`}),(0,A.jsx)(d,{children:`キャンセル`})]})]})]})]})}},B={render:function(e){let t=E({defaultOpen:j});return(0,A.jsxs)(n,{children:[(0,A.jsx)(x,{onClick:()=>t.open(),children:`Open Modal`}),(0,A.jsxs)(p,{...e,isOpen:t.isOpen,onClose:()=>t.close(),children:[(0,A.jsx)(c,{}),(0,A.jsxs)(u,{children:[(0,A.jsx)(P,{children:(0,A.jsx)(F,{children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod placeat tenetur, necessitatibus laudantium cumque exercitationem provident. Quaerat iure enim, eveniet dolores earum odio quo possimus fugiat aspernatur, numquam, commodi repellat.`})}),(0,A.jsx)(f,{children:(0,A.jsx)(x,{variant:`Primary`,onClick:()=>t.close(),fullWidth:!0,children:`OK`})})]})]})]})}},V={render:function(e){let t=E({defaultOpen:j});return(0,A.jsxs)(n,{children:[(0,A.jsx)(`div`,{style:{height:1024},children:(0,A.jsx)(x,{onClick:()=>t.open(),children:`Open Modal`})}),(0,A.jsx)(N,{...e,isDismissable:!0,isOpen:t.isOpen,onClose:()=>t.close()})]})}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    tokenVersion: 'v2'
  },
  render: function Render(args) {
    const state = useOverlayTriggerState({
      defaultOpen: true
    });
    return <OverlayProvider>
        <Button onClick={() => state.open()}>Open Modal</Button>
        <M {...args} isDismissable isOpen={state.isOpen} onClose={() => state.close()} />
      </OverlayProvider>;
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}}}))();export{V as BackgroundScroll,z as BottomSheet,I as Default,R as FullBottomSheet,B as NotDismmissableStory,L as TokenV2,M as default};