"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[98117],{"./packages/react-sandbox/src/components/SwitchCheckbox/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>index_story});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/.pnpm/styled-components@5.3.11_@babel+core@7.26.10_react-dom@18.3.1_react@18.3.1__react-is@18.3.1_react@18.3.1/node_modules/styled-components/dist/styled-components.browser.esm.js"),dist=__webpack_require__("./packages/utils/dist/index.js");const SwitchCheckbox=react.forwardRef((function SwitchCheckbox({gtmClass,flex=!1,rowReverse=!1,children,disabled,...props},ref){return(0,jsx_runtime.jsxs)(Label,{className:void 0!==gtmClass?`gtm-${gtmClass}`:"",flex,rowReverse,"aria-disabled":disabled,children:[(0,jsx_runtime.jsxs)(SwitchOuter,{children:[(0,jsx_runtime.jsx)(SwitchInput,{...props,disabled,ref}),(0,jsx_runtime.jsx)(SwitchInner,{children:(0,jsx_runtime.jsx)(SwitchInnerKnob,{})})]}),null!=children&&(0,jsx_runtime.jsx)(Children,{rowReverse,children})]})})),Children=styled_components_browser_esm.Ay.span`
  ${p=>p.rowReverse?styled_components_browser_esm.AH`
          margin-right: 8px;
        `:styled_components_browser_esm.AH`
          margin-left: 8px;
        `}
`,Label=styled_components_browser_esm.Ay.label`
  display: inline-flex;
  align-items: center;
  ${({flex})=>flex&&styled_components_browser_esm.AH`
      display: flex;
      justify-content: space-between;
    `}
  ${({rowReverse})=>styled_components_browser_esm.AH`
    flex-direction: ${rowReverse?"row-reverse":"row"};
  `}
  cursor: pointer;
  outline: 0;

  &[aria-disabled='true'] {
    cursor: auto;
  }
`,SwitchOuter=styled_components_browser_esm.Ay.span`
  display: inline-flex;
  position: relative;
  z-index: 0;
`,SwitchInner=styled_components_browser_esm.Ay.div`
  position: relative;
  box-sizing: border-box;
  width: 28px;
  height: 16px;
  border-radius: 16px;
  border: 2px solid transparent;
  background: ${({theme})=>theme.color.text4};
  transition:
    box-shadow 0.2s,
    background-color 0.2s;
`,SwitchInnerKnob=styled_components_browser_esm.Ay.div`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 12px;
  height: 12px;
  background-color: ${({theme})=>theme.color.text5};
  border-radius: 50%;
  transform: translateX(0);
  transition: transform 0.2s;
`,SwitchInput=styled_components_browser_esm.Ay.input.attrs({type:"checkbox"})`
  position: absolute;
  /* NOTE: this is contained by the GraphicCheckboxOuter */
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* just to control the clickable area if used standalone */
  border-radius: 16px;
  opacity: 0;
  appearance: none;
  outline: none;
  cursor: pointer;

  &:checked {
    ~ ${SwitchInner} {
      background-color: ${({theme})=>theme.color.brand};

      ${SwitchInnerKnob} {
        transform: translateX(12px);
      }
    }
  }

  &:disabled {
    cursor: auto;

    ~ ${SwitchInner} {
      opacity: ${({theme})=>theme.elementEffect.disabled.opacity};
    }
  }

  &:not(:disabled):focus {
    ~ ${SwitchInner} {
      box-shadow: 0 0 0 4px
        ${({theme})=>(0,dist.Cf)(theme.color.brand,theme.elementEffect.disabled)};
    }
  }
`,index_story={title:"react-sandbox/SwitchCheckbox",component:SwitchCheckbox},Default={render:props=>(0,jsx_runtime.jsx)(SwitchCheckbox,{...props,children:"children"})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: props => {\n    return <SwitchCheckbox {...props}>children</SwitchCheckbox>;\n  }\n}",...Default.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=react-sandbox-src-components-SwitchCheckbox-index-story.90ac0ca2.iframe.bundle.js.map