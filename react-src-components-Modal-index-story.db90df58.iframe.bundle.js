"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[6130],{"./packages/react/src/components/Modal/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BackgroundScroll:()=>BackgroundScroll,BottomSheet:()=>BottomSheet,Default:()=>Default,FullBottomSheet:()=>FullBottomSheet,InternalScroll:()=>InternalScrollStory,NotDismmissableStory:()=>NotDismmissableStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_story});var Modal=__webpack_require__("./packages/react/src/components/Modal/index.tsx"),dist_import=__webpack_require__("./node_modules/@react-aria/overlays/dist/import.mjs"),react=__webpack_require__("./node_modules/react/index.js"),utils_dist_import=__webpack_require__("./node_modules/@react-stately/utils/dist/import.mjs");function $fc909762b330b746$export$61c6a8c84e605fb6(props){let[isOpen,setOpen]=(0,utils_dist_import.zk)(props.isOpen,props.defaultOpen||!1,props.onOpenChange);const open=(0,react.useCallback)((()=>{setOpen(!0)}),[setOpen]),close=(0,react.useCallback)((()=>{setOpen(!1)}),[setOpen]),toggle=(0,react.useCallback)((()=>{setOpen(!isOpen)}),[setOpen,isOpen]);return{isOpen,setOpen,open,close,toggle}}var Button=__webpack_require__("./packages/react/src/components/Button/index.tsx"),ModalPlumbing=__webpack_require__("./packages/react/src/components/Modal/ModalPlumbing.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const theme=(0,__webpack_require__("./packages/styled/dist/index.esm.js").jG)(styled_components_browser_esm.ZP);var TextField=__webpack_require__("./packages/react/src/components/TextField/index.tsx"),DropdownSelector=__webpack_require__("./packages/react/src/components/DropdownSelector/index.tsx"),DropdownMenuItem=__webpack_require__("./packages/react/src/components/DropdownSelector/DropdownMenuItem.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),dist_index_esm=__webpack_require__("./packages/utils/dist/index.esm.js");const InternalScrollStory=args=>{const state=$fc909762b330b746$export$61c6a8c84e605fb6({});return(0,jsx_runtime.jsxs)(dist_import.N3,{children:[(0,jsx_runtime.jsx)(Button.Z,{onClick:()=>state.open(),children:"Open Modal"}),(0,jsx_runtime.jsxs)(Modal.ZP,{...args,isOpen:state.isOpen,onClose:()=>state.close(),children:[(0,jsx_runtime.jsx)(ModalPlumbing.xB,{}),(0,jsx_runtime.jsxs)(ModalPlumbing.fe,{children:[(0,jsx_runtime.jsx)(ModalBodyOverflowDiv,{$offset:56,$bottomSheet:args.bottomSheet,children:(0,jsx_runtime.jsx)("div",{style:{height:1e3,background:"linear-gradient(#e66465, #9198e5)"}})}),(0,jsx_runtime.jsx)(TopBorderButtons,{children:(0,jsx_runtime.jsx)(Button.Z,{fullWidth:!0,onClick:()=>state.close(),children:"Close"})})]})]})]})};InternalScrollStory.displayName="InternalScrollStory";const ModalBodyOverflowDiv=styled_components_browser_esm.ZP.div`
  overflow: auto;
  max-height: calc(
    100vh - ${184}px - ${({$offset})=>$offset}px
  );
  ${({$bottomSheet,$offset})=>(!0===$bottomSheet||"full"===$bottomSheet)&&styled_components_browser_esm.iv`
      @media ${({theme})=>(0,dist_index_esm.kk)(theme.breakpoint.screen1)} {
        max-height: calc(100vh - ${88}px - ${$offset}px);
      }
    `}
`,TopBorderButtons=(0,styled_components_browser_esm.ZP)(ModalPlumbing.Zf)`
  position: relative;
  &::before {
    content: '';
    pointer-events: none;
    border-top: 1px solid ${({theme})=>theme.border.default.color};
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`,index_story={title:"Modal",component:Modal.ZP,args:{title:"Title"},argTypes:{size:{options:["S","M","L"],control:{type:"inline-radio"},defaultValue:"M"},bottomSheet:{options:["full","true","false"],mapping:{full:"full",true:!0,false:!1},control:{type:"inline-radio"},defaultValue:!1}},render:function Render(args){const state=$fc909762b330b746$export$61c6a8c84e605fb6({});return(0,jsx_runtime.jsxs)(dist_import.N3,{children:[(0,jsx_runtime.jsx)(Button.Z,{onClick:()=>state.open(),children:"Open Modal"}),(0,jsx_runtime.jsx)(M,{...args,isDismissable:!0,isOpen:state.isOpen,onClose:()=>state.close()})]})}},M=props=>(0,jsx_runtime.jsxs)(Modal.ZP,{...props,children:[(0,jsx_runtime.jsx)(ModalPlumbing.xB,{}),(0,jsx_runtime.jsxs)(ModalPlumbing.fe,{children:[(0,jsx_runtime.jsxs)(ModalVStack,{children:[(0,jsx_runtime.jsx)(StyledModalText,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod placeat tenetur, necessitatibus laudantium cumque exercitationem provident. Quaerat iure enim, eveniet dolores earum odio quo possimus fugiat aspernatur, numquam, commodi repellat."}),(0,jsx_runtime.jsx)(ModalPlumbing.BT,{children:(0,jsx_runtime.jsx)(TextField.ZP,{showLabel:!0,label:"Name",placeholder:"Nagisa"})}),(0,jsx_runtime.jsx)(ModalPlumbing.BT,{children:(0,jsx_runtime.jsx)(TextField.ZP,{autoFocus:!0,showLabel:!0,label:"Country",placeholder:"Tokyo"})}),(0,jsx_runtime.jsx)(ModalPlumbing.BT,{children:(0,jsx_runtime.jsxs)(DropdownSelector.Z,{onChange:()=>null,value:"10",showLabel:!0,label:"Fruits",placeholder:"Apple",children:[(0,jsx_runtime.jsx)(DropdownMenuItem.Z,{value:"10",children:"Apple"}),(0,jsx_runtime.jsx)(DropdownMenuItem.Z,{value:"20",children:"Banana"}),(0,jsx_runtime.jsx)(DropdownMenuItem.Z,{value:"30",children:"Orange"})]})})]}),(0,jsx_runtime.jsxs)(ModalPlumbing.Zf,{children:[(0,jsx_runtime.jsx)(Button.Z,{variant:"Primary",onClick:()=>props.onClose(),fullWidth:!0,children:"Apply"}),(0,jsx_runtime.jsx)(Button.Z,{onClick:()=>props.onClose(),fullWidth:!0,children:"Cancel"})]})]})]});M.displayName="M";const ModalVStack=styled_components_browser_esm.ZP.div`
  display: grid;
  gap: 24px;
`,StyledModalText=(0,styled_components_browser_esm.ZP)(ModalPlumbing.BT)`
  ${theme((o=>[o.font.text2,o.typography(14)]))}
`,Default={},FullBottomSheet={args:{bottomSheet:"full"},render:function Render(args){const state=$fc909762b330b746$export$61c6a8c84e605fb6({});return(0,jsx_runtime.jsxs)(dist_import.N3,{children:[(0,jsx_runtime.jsx)(Button.Z,{onClick:()=>state.open(),children:"Open Modal"}),(0,jsx_runtime.jsxs)(Modal.ZP,{...args,isDismissable:!0,isOpen:state.isOpen,onClose:()=>state.close(),children:[(0,jsx_runtime.jsx)(ModalPlumbing.xB,{}),(0,jsx_runtime.jsxs)(ModalPlumbing.fe,{children:[(0,jsx_runtime.jsxs)(ModalVStack,{children:[(0,jsx_runtime.jsx)(StyledModalText,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod placeat tenetur, necessitatibus laudantium cumque exercitationem provident. Quaerat iure enim, eveniet dolores earum odio quo possimus fugiat aspernatur, numquam, commodi repellat."}),(0,jsx_runtime.jsx)(ModalPlumbing.BT,{children:(0,jsx_runtime.jsx)(TextField.ZP,{showLabel:!0,label:"Name",placeholder:"Nagisa"})}),(0,jsx_runtime.jsx)(ModalPlumbing.BT,{children:(0,jsx_runtime.jsx)(TextField.ZP,{showLabel:!0,label:"Country",placeholder:"Tokyo"})})]}),(0,jsx_runtime.jsxs)(ModalPlumbing.Zf,{children:[(0,jsx_runtime.jsx)(Button.Z,{variant:"Primary",onClick:()=>state.close(),fullWidth:!0,children:"Apply"}),(0,jsx_runtime.jsx)(Button.Z,{onClick:()=>state.close(),fullWidth:!0,children:"Cancel"})]})]})]})]})}},BottomSheet={render:function Render(args){const state=$fc909762b330b746$export$61c6a8c84e605fb6({});return(0,jsx_runtime.jsxs)(dist_import.N3,{children:[(0,jsx_runtime.jsx)(Button.Z,{onClick:()=>state.open(),children:"Open Modal"}),(0,jsx_runtime.jsxs)(Modal.ZP,{...args,isOpen:state.isOpen,onClose:()=>state.close(),bottomSheet:!0,isDismissable:!0,children:[(0,jsx_runtime.jsx)(ModalPlumbing.xB,{}),(0,jsx_runtime.jsxs)(ModalPlumbing.fe,{children:[(0,jsx_runtime.jsx)(ModalVStack,{children:(0,jsx_runtime.jsx)(StyledModalText,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod placeat tenetur, necessitatibus laudantium cumque exercitationem provident. Quaerat iure enim, eveniet dolores earum odio quo possimus fugiat aspernatur, numquam, commodi repellat."})}),(0,jsx_runtime.jsxs)(ModalPlumbing.Zf,{children:[(0,jsx_runtime.jsx)(Button.Z,{variant:"Danger",onClick:()=>state.close(),fullWidth:!0,children:"削除する"}),(0,jsx_runtime.jsx)(Modal.t5,{children:"キャンセル"})]})]})]})]})}},NotDismmissableStory={render:function Render(args){const state=$fc909762b330b746$export$61c6a8c84e605fb6({});return(0,jsx_runtime.jsxs)(dist_import.N3,{children:[(0,jsx_runtime.jsx)(Button.Z,{onClick:()=>state.open(),children:"Open Modal"}),(0,jsx_runtime.jsxs)(Modal.ZP,{...args,isOpen:state.isOpen,onClose:()=>state.close(),children:[(0,jsx_runtime.jsx)(ModalPlumbing.xB,{}),(0,jsx_runtime.jsxs)(ModalPlumbing.fe,{children:[(0,jsx_runtime.jsx)(ModalVStack,{children:(0,jsx_runtime.jsx)(StyledModalText,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod placeat tenetur, necessitatibus laudantium cumque exercitationem provident. Quaerat iure enim, eveniet dolores earum odio quo possimus fugiat aspernatur, numquam, commodi repellat."})}),(0,jsx_runtime.jsx)(ModalPlumbing.Zf,{children:(0,jsx_runtime.jsx)(Button.Z,{variant:"Primary",onClick:()=>state.close(),fullWidth:!0,children:"OK"})})]})]})]})}},BackgroundScroll={render:function Render(args){const state=$fc909762b330b746$export$61c6a8c84e605fb6({});return(0,jsx_runtime.jsxs)(dist_import.N3,{children:[(0,jsx_runtime.jsx)("div",{style:{height:1024},children:(0,jsx_runtime.jsx)(Button.Z,{onClick:()=>state.open(),children:"Open Modal"})}),(0,jsx_runtime.jsx)(M,{...args,isDismissable:!0,isOpen:state.isOpen,onClose:()=>state.close()})]})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},FullBottomSheet.parameters={...FullBottomSheet.parameters,docs:{...FullBottomSheet.parameters?.docs,source:{originalSource:'{\n  args: {\n    bottomSheet: \'full\'\n  },\n  render: function Render(args) {\n    const state = useOverlayTriggerState({});\n    return (\n      // Application must be wrapped in an OverlayProvider so that it can be\n      // hidden from screen readers when a modal opens.\n      <OverlayProvider>\n        <Button onClick={() => state.open()}>Open Modal</Button>\n\n        <Modal {...args} isDismissable isOpen={state.isOpen} onClose={() => state.close()}>\n          <ModalHeader />\n          <ModalBody>\n            <ModalVStack>\n              <StyledModalText>\n                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod\n                placeat tenetur, necessitatibus laudantium cumque exercitationem\n                provident. Quaerat iure enim, eveniet dolores earum odio quo\n                possimus fugiat aspernatur, numquam, commodi repellat.\n              </StyledModalText>\n              <ModalAlign>\n                <TextField showLabel label="Name" placeholder="Nagisa"></TextField>\n              </ModalAlign>\n              <ModalAlign>\n                <TextField showLabel label="Country" placeholder="Tokyo"></TextField>\n              </ModalAlign>\n            </ModalVStack>\n            <ModalButtons>\n              <Button variant="Primary" onClick={() => state.close()} fullWidth>\n                Apply\n              </Button>\n              <Button onClick={() => state.close()} fullWidth>\n                Cancel\n              </Button>\n            </ModalButtons>\n          </ModalBody>\n        </Modal>\n      </OverlayProvider>\n    );\n  }\n}',...FullBottomSheet.parameters?.docs?.source}}},BottomSheet.parameters={...BottomSheet.parameters,docs:{...BottomSheet.parameters?.docs,source:{originalSource:'{\n  render: function Render(args) {\n    const state = useOverlayTriggerState({});\n    return (\n      // Application must be wrapped in an OverlayProvider so that it can be\n      // hidden from screen readers when a modal opens.\n      <OverlayProvider>\n        <Button onClick={() => state.open()}>Open Modal</Button>\n\n        <Modal {...args} isOpen={state.isOpen} onClose={() => state.close()} bottomSheet isDismissable>\n          <ModalHeader />\n          <ModalBody>\n            <ModalVStack>\n              <StyledModalText>\n                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod\n                placeat tenetur, necessitatibus laudantium cumque exercitationem\n                provident. Quaerat iure enim, eveniet dolores earum odio quo\n                possimus fugiat aspernatur, numquam, commodi repellat.\n              </StyledModalText>\n            </ModalVStack>\n            <ModalButtons>\n              <Button variant="Danger" onClick={() => state.close()} fullWidth>\n                削除する\n              </Button>\n              <ModalDismissButton>キャンセル</ModalDismissButton>\n            </ModalButtons>\n          </ModalBody>\n        </Modal>\n      </OverlayProvider>\n    );\n  }\n}',...BottomSheet.parameters?.docs?.source}}},NotDismmissableStory.parameters={...NotDismmissableStory.parameters,docs:{...NotDismmissableStory.parameters?.docs,source:{originalSource:'{\n  render: function Render(args) {\n    const state = useOverlayTriggerState({});\n    return <OverlayProvider>\n        <Button onClick={() => state.open()}>Open Modal</Button>\n\n        <Modal {...args} isOpen={state.isOpen} onClose={() => state.close()}>\n          <ModalHeader />\n          <ModalBody>\n            <ModalVStack>\n              <StyledModalText>\n                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod\n                placeat tenetur, necessitatibus laudantium cumque exercitationem\n                provident. Quaerat iure enim, eveniet dolores earum odio quo\n                possimus fugiat aspernatur, numquam, commodi repellat.\n              </StyledModalText>\n            </ModalVStack>\n            <ModalButtons>\n              <Button variant="Primary" onClick={() => state.close()} fullWidth>\n                OK\n              </Button>\n            </ModalButtons>\n          </ModalBody>\n        </Modal>\n      </OverlayProvider>;\n  }\n}',...NotDismmissableStory.parameters?.docs?.source}}},BackgroundScroll.parameters={...BackgroundScroll.parameters,docs:{...BackgroundScroll.parameters?.docs,source:{originalSource:"{\n  render: function Render(args) {\n    const state = useOverlayTriggerState({});\n    return <OverlayProvider>\n        <div style={{\n        height: 1024\n      }}>\n          <Button onClick={() => state.open()}>Open Modal</Button>\n        </div>\n        <M {...args} isDismissable isOpen={state.isOpen} onClose={() => state.close()} />\n      </OverlayProvider>;\n  }\n}",...BackgroundScroll.parameters?.docs?.source}}};const __namedExportsOrder=["Default","FullBottomSheet","BottomSheet","NotDismmissableStory","BackgroundScroll","InternalScroll"];try{Story.displayName="Story",Story.__docgenInfo={description:"import { Story } from '@storybook/react/types-6-0'\n\nをするとstyled-componentsが壊れるので代替品を作った\n\nエラー:\nnode_modules/@types/styled-components/ts3.7/index.d.ts\n`Type alias 'Interpolation' circularly references itself. ts(2456)`",displayName:"Story",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Modal/index.story.tsx#Story"]={docgenInfo:Story.__docgenInfo,name:"Story",path:"packages/react/src/components/Modal/index.story.tsx#Story"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=react-src-components-Modal-index-story.db90df58.iframe.bundle.js.map