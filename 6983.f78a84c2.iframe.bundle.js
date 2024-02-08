"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[6983],{"./packages/react/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BB:()=>useComponentAbstraction,h$:()=>ComponentAbstraction});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/utils/dist/index.esm.js"),_charcoal_ui_styled__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/styled/dist/index.esm.js"),react_spring__WEBPACK_IMPORTED_MODULE_7__=(__webpack_require__("./node_modules/warning/warning.js"),__webpack_require__("./packages/icons/dist/index.esm.js"),__webpack_require__("./node_modules/react-spring/dist/react-spring.esm.js")),DefaultValue={Link:react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function DefaultLink2({to,children,...rest},ref){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{href:to,ref,...rest,children})}))},ComponentAbstractionContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(DefaultValue);function ComponentAbstraction({children,components}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ComponentAbstractionContext.Provider,{value:{...DefaultValue,...components},children})}function useComponentAbstraction(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ComponentAbstractionContext)}function unreachable(value){throw new Error(0===arguments.length?"unreachable":`unreachable (${JSON.stringify(value)})`)}var Clickable_default=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function Clickable2(props,ref){const{Link}=useComponentAbstraction(),isLink="to"in props,as=isLink?Link:"button",ariaDisabled=!(!isLink||!0!==props.disabled)||void 0;let rest=props;if(isLink){const{disabled,..._rest}=props;rest=_rest}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledClickableDiv,{...rest,ref,as,"aria-disabled":ariaDisabled})})),StyledClickableDiv=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  cursor: pointer;

  ${_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_3__.t0} {
    cursor: default;
  }

  /* Reset button appearance */
  appearance: none;
  background: transparent;
  padding: 0;
  border-style: none;
  outline: none;
  color: inherit;
  text-rendering: inherit;
  letter-spacing: inherit;
  word-spacing: inherit;
  text-decoration: none;

  &:focus {
    outline: none;
  }

  /* Change the font styles in all browsers. */
  font: inherit;

  /* Remove the margin in Firefox and Safari. */
  margin: 0;

  /* Show the overflow in Edge. */
  overflow: visible;

  /* Remove the inheritance of text transform in Firefox. */
  text-transform: none;

  /* Remove the inner border and padding in Firefox. */
  &::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
`,horizontalPaddingSmall=styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
  padding-right: 16px;
  padding-left: 16px;
`,horizontalPaddingMedium=styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
  padding-right: 24px;
  padding-left: 24px;
`,IconButton_default=((0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(Clickable_default)`
  width: ${p=>p.$fullWidth?"stretch":"min-content"};
  display: inline-grid;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  border-radius: 999999px;
  font-size: 14px;
  line-height: 22px;
  font-weight: bold;

  ${p=>"M"===p.$size?horizontalPaddingMedium:horizontalPaddingSmall}
  color: var(--charcoal-${p=>p.$color});
  background-color: var(--charcoal-${p=>p.$background});
  transition: 0.2s color, 0.2s background-color, 0.2s box-shadow;

  &:not(:disabled):not([aria-disabled]),
  &[aria-disabled='false'] {
    ${_charcoal_ui_styled__WEBPACK_IMPORTED_MODULE_4__.L_}

    &:hover {
      color: var(--charcoal-${p=>p.$color}-hover);
      background-color: var(--charcoal-${p=>p.$background}-hover);
    }
    &:active {
      color: var(--charcoal-${p=>p.$color}-press);
      background-color: var(--charcoal-${p=>p.$background}-press);
    }
  }

  &:disabled,
  &[aria-disabled]:not([aria-disabled='false']) {
    opacity: 0.32;
  }
  height: ${p=>"M"===p.$size?40:32}px;
`,(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function IconButtonInner({variant="Default",size="M",icon,...rest},ref){return function validateIconSize(size,icon){let requiredIconSize;switch(size){case"XS":requiredIconSize="16";break;case"S":case"M":requiredIconSize="24"}const result=/^\d*/u.exec(icon);if(null==result)throw new Error("Invalid icon name");const[iconSize]=result;iconSize!==requiredIconSize&&console.warn(`IconButton with size "${size}" expect icon size "${requiredIconSize}, but got "${iconSize}"`)}(size,icon),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledIconButton,{...rest,ref,$size:size,$variant:variant,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("pixiv-icon",{name:icon})})}))),StyledIconButton=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(Clickable_default).attrs((function styledProps({$size,$variant}){return{...variantToProps($variant),...sizeToProps($size)}}))`
  user-select: none;

  width: ${p=>p.$width}px;
  height: ${p=>p.$height}px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(${({$font})=>`--charcoal-${$font}`});
  background-color: var(${({$background})=>`--charcoal-${$background}`});
  border-radius: 999999px;
  transition: 0.2s background-color, 0.2s box-shadow;

  &:not(:disabled):not([aria-disabled]),
  &[aria-disabled='false'] {
    &:hover {
      background-color: var(
        ${({$background})=>`--charcoal-${$background}-hover`}
      );
    }
    &:active {
      background-color: var(
        ${({$background})=>`--charcoal-${$background}-press`}
      );
    }
    ${_charcoal_ui_styled__WEBPACK_IMPORTED_MODULE_4__.L_}
  }

  &:disabled,
  &[aria-disabled]:not([aria-disabled='false']) {
    opacity: 0.32;
  }
`;function variantToProps(variant){switch(variant){case"Default":return{$font:"text3",$background:"transparent"};case"Overlay":return{$font:"text5",$background:"surface4"}}}function sizeToProps(size){switch(size){case"XS":return{$width:20,$height:20};case"S":return{$width:32,$height:32};case"M":return{$width:40,$height:40}}}styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.label`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 4px;
  align-items: center;
  cursor: pointer;

  &:disabled,
  &[aria-disabled]:not([aria-disabled='false']) {
    opacity: 0.32;
  }
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.input.attrs({type:"radio"})`
  /** Make prior to browser default style */
  &[type='radio'] {
    appearance: none;
    display: block;
    box-sizing: border-box;

    margin: 0;
    padding: 6px;

    width: 20px;
    height: 20px;
    cursor: pointer;
    border-radius: 999999px;
    background-color: var(--charcoal-surface1);
    transition: 0.2s background-color, 0.2s box-shadow;

    &:not(:disabled):not([aria-disabled]),
    &[aria-disabled='false'] {
      &:hover {
        background-color: var(--charcoal-surface1-hover);
      }
      &:active {
        background-color: var(--charcoal-surface1-press);
      }
      ${_charcoal_ui_styled__WEBPACK_IMPORTED_MODULE_4__.L_}
      &[aria-invalid='true'] {
        box-shadow: 0 0 0 4px rgba(255, 43, 0, 0.32);
        &:focus {
          box-shadow: 0 0 0 4px rgba(255, 43, 0, 0.32);
        }
      }
    }

    &:not(:checked) {
      border-width: 2px;
      border-style: solid;
      border-color: var(--charcoal-text3);
    }

    &:checked {
      background-color: var(--charcoal-brand);
      &::after {
        content: '';
        display: block;
        width: 8px;
        height: 8px;
        pointer-events: none;
        background-color: var(--charcoal-text5);
        border-radius: 999999px;
        transition: 0.2s background-color, 0.2s box-shadow;
      }

      &:not(:disabled):not([aria-disabled]),
      &[aria-disabled='false'] {
        &:hover {
          background-color: var(--charcoal-brand-hover);
          &::after {
            background-color: var(--charcoal-text5-hover);
          }
        }
        &:active {
          background-color: var(--charcoal-brand-press);
          &::after {
            background-color: var(--charcoal-text5-press);
          }
        }
      }
    }
  }
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  font-size: 14px;
  line-height: 22px;
  display: flow-root;
  color: var(--charcoal-text2);

  &::before {
    display: block;
    width: 0;
    height: 0;
    content: '';
    margin-top: -4px;
  }
  &::after {
    display: block;
    width: 0;
    height: 0;
    content: '';
    margin-bottom: -4px;
  }
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;
`;styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.label`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  position: relative;
  cursor: pointer;
  gap: ${({theme})=>(0,_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_3__.px)(theme.spacing[4])};
  &:disabled,
  &[aria-disabled]:not([aria-disabled='false']) {
    opacity: 0.32;
    cursor: default;
  }
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 22px;
  display: flow-root;
  color: var(--charcoal-text2);

  &::before {
    display: block;
    width: 0;
    height: 0;
    content: '';
    margin-top: -4px;
  }
  &::after {
    display: block;
    width: 0;
    height: 0;
    content: '';
    margin-bottom: -4px;
  }
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.input.attrs({type:"checkbox"})`
  &[type='checkbox'] {
    appearance: none;
    display: block;
    width: 20px;
    height: 20px;
    margin: 0;
    background-color: var(--charcoal-text3);
    border-radius: 999999px;
    transition: 0.2s background-color, 0.2s box-shadow;

    &:checked {
      background-color: var(--charcoal-brand);
      &:hover {
        &:not(:disabled):not([aria-disabled]),
        &[aria-disabled='false'] {
          background-color: var(--charcoal-brand-hover);
        }
      }

      &:active {
        &:not(:disabled):not([aria-disabled]),
        &[aria-disabled='false'] {
          background-color: var(--charcoal-brand-press);
        }
      }
    }

    &:hover {
      &:not(:disabled):not([aria-disabled]),
      &[aria-disabled='false'] {
        background-color: var(--charcoal-text3-hover);
      }
    }

    &:active {
      &:not(:disabled):not([aria-disabled]),
      &[aria-disabled='false'] {
        background-color: var(--charcoal-text3-press);
      }
    }

    ${_charcoal_ui_styled__WEBPACK_IMPORTED_MODULE_4__.L_}

    ${({invalid,overlay})=>invalid&&!overlay&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
        &:not(:disabled):not([aria-disabled]),
        &[aria-disabled='false'] {
          box-shadow: 0 0 0 4px rgba(255, 43, 0, 0.32);
        }
      `}
    ${({overlay})=>overlay&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
        background-color: var(--charcoal-surface4);
      `}
  }
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  position: absolute;
  top: -2px;
  left: -2px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 999999px;
  color: var(--charcoal-text5);
  transition: 0.2s box-shadow;
  ${({invalid,overlay})=>invalid&&overlay&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      &:not(:disabled):not([aria-disabled]),
      &[aria-disabled='false'] {
        box-shadow: 0 0 0 4px rgba(255, 43, 0, 0.32);
      }
    `}

  ${({overlay})=>overlay&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      border-color: var(--charcoal-text5);
      border-width: 2px;
      border-style: solid;
    `}
`;styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.label`
  display: inline-grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  cursor: pointer;
  outline: 0;

  &:disabled,
  &[aria-disabled]:not([aria-disabled='false']) {
    opacity: 0.32;
    cursor: default;
  }
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  font-size: 14px;
  line-height: 22px;
  color: var(--charcoal-text2);
  margin-left: 4px;
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.input.attrs({type:"checkbox"})`
  appearance: none;
  display: inline-flex;
  position: relative;
  box-sizing: border-box;
  width: 28px;
  border: 2px solid transparent;

  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  cursor: inherit;

  outline: none;
  border-radius: 16px;
  height: 16px;
  margin: 0;
  background-color: var(--charcoal-text4);
  :hover {
    background-color: var(--charcoal-text4-hover);
  }
  :active {
    background-color: var(--charcoal-text4-press);
  }
  ${_charcoal_ui_styled__WEBPACK_IMPORTED_MODULE_4__.L_}

  &::after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 12px;
    height: 12px;
    transform: translateX(0);
    transition: transform 0.2s;
    border-radius: 1024px;
    background-color: var(--charcoal-text5);
    :hover {
      background-color: var(--charcoal-text5-hover);
    }
    :active {
      background-color: var(--charcoal-text5-press);
    }
  }

  &:checked {
    background-color: var(--charcoal-brand);
    :hover {
      background-color: var(--charcoal-brand-hover);
    }
    :active {
      background-color: var(--charcoal-brand-press);
    }
    &::after {
      transform: translateX(12px);
      transition: transform 0.2s;
    }
  }
`;var FieldLabel_default=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function FieldLabel2({style,className,label,required=!1,requiredText,subLabel,...labelProps},ref){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FieldLabelWrapper,{style,className,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Label2,{ref,...labelProps,children:label}),required&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RequiredText,{children:requiredText}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SubLabelClickable,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{children:subLabel})})]})})),Label2=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.label`
  font-size: 14px;
  line-height: 22px;
  font-weight: bold;
  display: flow-root;
  color: var(--charcoal-text1);

  &::before {
    display: block;
    width: 0;
    height: 0;
    content: '';
    margin-top: -4px;
  }
  &::after {
    display: block;
    width: 0;
    height: 0;
    content: '';
    margin-bottom: -4px;
  }
`,RequiredText=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.span`
  font-size: 14px;
  line-height: 22px;
  display: flow-root;
  color: var(--charcoal-text2);

  &::before {
    display: block;
    width: 0;
    height: 0;
    content: '';
    margin-top: -4px;
  }
  &::after {
    display: block;
    width: 0;
    height: 0;
    content: '';
    margin-bottom: -4px;
  }
`,SubLabelClickable=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  font-size: 14px;
  line-height: 22px;
  display: flow-root;
  color: var(--charcoal-text3);
  transition: 0.2s color, 0.2s box-shadow;

  &::before {
    display: block;
    width: 0;
    height: 0;
    content: '';
    margin-top: -4px;
  }
  &::after {
    display: block;
    width: 0;
    height: 0;
    content: '';
    margin-bottom: -4px;
  }

  &:not(:disabled):not([aria-disabled]),
  &[aria-disabled='false'] {
    &:hover {
      color: var(--charcoal-text3-hover);
    }
    &:active {
      color: var(--charcoal-text3-press);
    }
    &:active,
    &:focus,
    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);
    }
  }
`,FieldLabelWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  display: inline-flex;
  align-items: center;

  > ${RequiredText} {
    margin-left: 4px;
  }

  > ${SubLabelClickable} {
    margin-left: auto;
  }
`;styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  display: flex;
  flex-direction: column;

  ${p=>p.isDisabled&&{opacity:p.theme.elementEffect.disabled.opacity}}
`,(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(FieldLabel_default)`
  margin-bottom: 8px;
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  display: grid;
  grid-template-columns: ${p=>[p.hasPrefix&&"auto","1fr",p.hasSuffix&&"auto"].filter(Boolean).join(" ")};
  height: 40px;
  transition: 0.2s background-color, 0.2s box-shadow;
  color: var(--charcoal-text2);
  background-color: var(--charcoal-surface3);
  border-radius: 4px;
  gap: 4px;
  padding: 0 8px;
  line-height: 22px;
  font-size: 14px;

  :not(:disabled):not([aria-disabled]):hover,
  [aria-disabled='false']:hover {
    background-color: var(--charcoal-surface3-hover);
  }

  :focus-within {
    outline: none;
    box-shadow: 0 0 0 4px
      ${p=>p.invalid?"rgba(255,43,0,0.32)":"rgba(0, 150, 250, 0.32);"};
  }

  ${p=>p.invalid&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      box-shadow: 0 0 0 4px rgba(255, 43, 0, 0.32);
    `}
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  display: flex;
  align-items: center;
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.span`
  display: flex;
  align-items: center;
  gap: 8px;
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.input`
  border: none;
  box-sizing: border-box;
  outline: none;
  font-family: inherit;

  /* Prevent zooming for iOS Safari */
  transform-origin: top left;
  transform: scale(0.875);
  width: calc(100% / 0.875);
  height: calc(100% / 0.875);
  font-size: calc(14px / 0.875);
  line-height: calc(22px / 0.875);
  padding-left: 0;
  padding-right: 0;
  border-radius: calc(4px / 0.875);

  /* Display box-shadow for iOS Safari */
  appearance: none;
  background: transparent;

  color: var(--charcoal-text2);
  &::placeholder {
    color: var(--charcoal-text3);
  }
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.span`
  line-height: 22px;
  font-size: 14px;
  color: var(--charcoal-text3);
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.p`
  font-size: 14px;
  line-height: 22px;
  margin-top: 4px;
  margin-bottom: -4px;
  color: ${p=>`var(--charcoal-${p.invalid?"assertive":"text2"})`};
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  display: flex;
  flex-direction: column;

  ${p=>p.isDisabled&&{opacity:p.theme.elementEffect.disabled.opacity}}
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  position: relative;
  overflow: hidden;

  color: var(--charcoal-text2);
  background-color: var(--charcoal-surface3);
  border-radius: 4px;
  transition: 0.2s background-color, 0.2s box-shadow;

  ${({rows})=>styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
    height: calc(22px * ${rows} + 18px);
  `};

  :not([aria-disabled]):hover,
  [aria-disabled='false']:hover {
    background-color: var(--charcoal-surface3-hover);
  }
  :focus-within {
    outline: none;
    box-shadow: 0 0 0 4px
      ${p=>p.invalid?"rgba(255,43,0,0.32)":"rgba(0, 150, 250, 0.32);"};
  }

  ${p=>p.invalid&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      box-shadow: 0 0 0 4px rgba(255, 43, 0, 0.32);
    `}
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.textarea`
  border: none;
  outline: none;
  resize: none;
  font-family: inherit;
  color: inherit;
  box-sizing: border-box;

  /* Prevent zooming for iOS Safari */
  transform-origin: top left;
  transform: scale(0.875);
  width: calc(100% / 0.875);
  font-size: calc(14px / 0.875);
  line-height: calc(22px / 0.875);
  padding: calc(9px / 0.875) calc(8px / 0.875)
    ${p=>p.noBottomPadding?0:""};

  ${({rows=1,noBottomPadding})=>styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
    height: calc(22px / 0.875 * ${rows} + ${noBottomPadding?9:20}px);
  `};

  /* Display box-shadow for iOS Safari */
  appearance: none;

  background: none;

  &::placeholder {
    color: var(--charcoal-text3);
  }
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.span`
  position: absolute;
  bottom: 9px;
  right: 8px;

  line-height: 22px;
  font-size: 14px;
  color: var(--charcoal-text3);
`;var Icon_default=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function IconInner({name,scale,unsafeNonGuidelineScale,className,...rest},ref){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("pixiv-icon",{ref,name,scale,"unsafe-non-guideline-scale":unsafeNonGuidelineScale,class:className,...rest})}));function columnSystem(span,column,gutter){return span*column+(span-1)*gutter}(0,react_spring__WEBPACK_IMPORTED_MODULE_7__.animated)(styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  margin: auto;
  position: relative;
  height: fit-content;
  width: ${p=>{switch(p.size){case"S":return columnSystem(3,80,24)+48;case"M":return columnSystem(4,80,24)+48;case"L":return columnSystem(6,80,24)+48;default:return unreachable(p.size)}}}px;

  background-color: var(--charcoal-surface1);
  border-radius: 24px;

  @media ${({theme})=>(0,_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_3__.kk)(theme.breakpoint.screen1)} {
    max-width: 440px;
    width: calc(100% - 48px);
    ${p=>!1!==p.bottomSheet&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
        max-width: unset;
        width: 100%;
        border-radius: 0;
        margin: auto 0 0 0;
        ${"full"===p.bottomSheet&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
          min-height: 100%;
        `}
      `}
  }
  :focus {
    outline: none;
  }
`);var ModalContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({titleProps:{},title:"",close:void 0,showDismiss:!0,bottomSheet:!1});(0,react_spring__WEBPACK_IMPORTED_MODULE_7__.animated)(styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  z-index: ${({zIndex})=>zIndex};
  overflow: auto;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: -webkit-fill-available;
  width: -moz-available;
  height: 100%;
  justify-content: center;
  padding: 40px 0;
  box-sizing: border-box;

  background-color: var(--charcoal-surface4);

  @media ${({theme})=>(0,_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_3__.kk)(theme.breakpoint.screen1)} {
    ${p=>!1!==p.$bottomSheet&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
        padding: 0;
      `}
  }
`),(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(IconButton_default)`
  position: absolute;
  top: 8px;
  right: 8px;

  color: var(--charcoal-text3);
  transition: 0.2s color;

  &:not(:disabled):not([aria-disabled]),
  &[aria-disabled='false'] {
    &:hover {
      color: var(--charcoal-text3-hover);
    }
    &:active {
      color: var(--charcoal-text3-press);
    }
  }
`;var ModalHeading=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.h3`
  margin: 0;
  font-weight: inherit;
  font-size: inherit;
`;styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  height: 64px;
  display: grid;
  align-content: center;
  justify-content: center;
  @media ${({theme})=>(0,_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_3__.kk)(theme.breakpoint.screen1)} {
    ${p=>!1!==p.$bottomSheet&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
        height: 48px;
      `}
  }
`,(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)((function ModalTitle(props){const{titleProps,title}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ModalContext);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ModalHeading,{...titleProps,...props,children:title})}))`
  color: var(--charcoal-text1);
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  display: flow-root;

  &::before {
    display: block;
    width: 0;
    height: 0;
    content: '';
    margin-top: -4px;
  }
  &::after {
    display: block;
    width: 0;
    height: 0;
    content: '';
    margin-bottom: -4px;
  }
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  padding-left: 16px;
  padding-right: 16px;
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  padding-bottom: 40px;
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 8px;

  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div.attrs({role:"progressbar"})`
  box-sizing: content-box;
  margin: auto;
  padding: ${props=>props.padding}px;
  border-radius: 8px;
  font-size: ${props=>props.size}px;
  width: ${props=>props.size}px;
  height: ${props=>props.size}px;
  opacity: 0.84;
  color: var(--charcoal-text4);
  background-color: ${({transparent})=>`var(--charcoal-${transparent?"transparent":"background1"})`};
`;var scaleOut=styled_components__WEBPACK_IMPORTED_MODULE_2__.F4`
  from {
    transform: scale(0);
    opacity: 1;
  }

  to {
    transform: scale(1);
    opacity: 0;
  }
`;styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div.attrs({role:"presentation"})`
  width: 1em;
  height: 1em;
  border-radius: 1em;
  background-color: currentColor;
  animation: ${scaleOut} 1s both ease-out;
  animation-iteration-count: ${p=>p.once?1:"infinite"};

  &[data-reset-animation] {
    animation: none;
  }
`;styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  margin: 4px 0;
  list-style: none;
  overflow: auto;
  max-height: inherit;
  background-color: var(--charcoal-background1);
  border: solid 1px var(--charcoal-border-default);
  border-radius: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
`;styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.ul`
  padding: 0;
  margin: 0;
`;styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  display: inline-block;
  width: 100%;

  ${_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_3__.t0} {
    cursor: default;
    opacity: 0.32;
  }
`,(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(FieldLabel_default)`
  width: 100%;
  margin-bottom: 8px;
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 40px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  cursor: pointer;
  gap: 4px;

  ${_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_3__.t0} {
    cursor: default;
  }

  padding-right: 8px;
  padding-left: 8px;
  background-color: var(--charcoal-surface3);
  border-radius: 4px;

  transition: 0.2s box-shadow, 0.2s background-color;

  &:not(:disabled):not([aria-disabled]),
  &[aria-disabled='false'] {
    ${_charcoal_ui_styled__WEBPACK_IMPORTED_MODULE_4__.L_}
    &:hover {
      background-color: var(--charcoal-surface3-hover);
    }
  }

  ${({invalid})=>!0===invalid&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      &:not(:disabled):not([aria-disabled]),
      &[aria-disabled='false'] {
        box-shadow: 0 0 0 4px rgba(255, 43, 0, 0.32);
      }
    `}
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.span`
  text-align: left;
  font-size: 14px;
  line-height: 22px;
  display: flow-root;
  color: var(--charcoal-text2);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(Icon_default)`
  color: var(--charcoal-text2);
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  margin-top: 8px;
  font-size: 14px;
  color: var(--charcoal-text2);
  line-height: 22px;
  display: flow-root;
  &::before {
    display: block;
    width: 0;
    height: 0;
    content: '';
    margin-top: -4px;
  }
  &::after {
    display: block;
    width: 0;
    height: 0;
    content: '';
    margin-bottom: -4px;
  }

  ${({invalid})=>!0===invalid&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      color: var(--charcoal-assertive);
    `}
`;styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.li`
  list-style: none;
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  display: flex;
  align-items: center;
  min-height: 40px;
  cursor: pointer;
  outline: none;

  padding-right: 16px;
  padding-left: 16px;

  &:disabled,
  &[aria-disabled]:not([aria-disabled='false']) {
    opacity: 0.32;
    cursor: default;
  }

  :hover,
  :focus,
  :focus-within {
    background-color: var(--charcoal-surface3);
  }
`;styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.span`
  font-size: 14px;
  line-height: 22px;
  color: var(--charcoal-text2);
  padding: 9px 0;

  display: flex;
  align-items: center;
  width: 100%;
  margin-left: ${({isSelected})=>!0===isSelected?0:20}px;
`,(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(Icon_default)`
  color: var(--charcoal-text2);
  padding-right: 4px;
`;styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.span`
  display: block;
  color: var(--charcoal-text3);
  font-size: 12px;
  font-weight: bold;
  padding: 12px 0 8px 16px;
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.ul`
  padding-left: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  overflow: hidden;
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.li`
  display: block;
`;var $e5be200c675c3b3a$export$aca958c65c314e6c={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0};(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({}),Date.now();Math.round(1e10*Math.random());styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  display: inline-flex;
  align-items: center;

  background-color: var(--charcoal-surface3);
  border-radius: 16px;
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.label`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 32px;

  padding-right: 16px;
  padding-left: 16px;
  border-radius: 16px;
  &:disabled,
  &[aria-disabled]:not([aria-disabled='false']) {
    cursor: default;
    opacity: 0.32;
  }
  color: var(--charcoal-text2);

  ${({checked=!1})=>checked&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      background-color: var(--charcoal-brand);
      color: var(--charcoal-text5);
    `}
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.input`
  position: absolute;

  height: 0px;
  width: 0px;
  padding: 0;
  margin: 0;

  appearance: none;
  box-sizing: border-box;
  overflow: hidden;
  white-space: nowrap;
  opacity: 0;
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  background: transparent;
  display: flex;
  align-items: center;
  height: 22px;
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  font-size: 14px;
  line-height: 22px;
  display: flow-root;

  &::before {
    display: block;
    width: 0;
    height: 0;
    content: '';
    margin-top: -4px;
  }
  &::after {
    display: block;
    width: 0;
    height: 0;
    content: '';
    margin-bottom: -4px;
  }
`;var hiddenCss=styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
  visibility: hidden;
`,sizeMap=(styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.label`
  position: relative;
  display: flex;

  cursor: pointer;
  ${_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_3__.t0} {
    cursor: default;
  }

  gap: 4px;
  &:disabled,
  &[aria-disabled]:not([aria-disabled='false']) {
    opacity: 0.32;
  }
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  position: relative;
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.input`
  &[type='checkbox'] {
    appearance: none;
    display: block;
    cursor: pointer;
    margin: 0;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    transition: 0.2s box-shadow, 0.2s background-color;

    &:checked {
      background-color: var(--charcoal-brand);

      &:not(:disabled):not([aria-disabled]),
      &[aria-disabled='false'] {
        &:hover {
          background-color: var(--charcoal-brand-hover);
        }
        &:active {
          background-color: var(--charcoal-brand-press);
        }
      }
    }

    &:not(:disabled):not([aria-disabled]),
    &[aria-disabled='false'] {
      ${_charcoal_ui_styled__WEBPACK_IMPORTED_MODULE_4__.L_}
      &[aria-invalid='true'] {
        box-shadow: 0 0 0 4px rgba(255, 43, 0, 0.32);
      }
    }

    &:not(:checked) {
      border-width: 2px;
      border-style: solid;
      border-color: var(--charcoal-text4);
    }
  }
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  position: absolute;
  top: -2px;
  left: -2px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: var(--charcoal-text5);

  ${({checked})=>!0!==checked&&hiddenCss};
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  color: var(--charcoal-text2);
  font-size: 14px;
  /** checkbox の height が 20px なのでcheckbox と text が揃っているように見せるために行ボックスの高さを 20px にしている */
  line-height: 20px;
`,{S:32,M:40}),horizontalPadding=({left,right})=>styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
  padding-right: ${(0,_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_3__.px)(right)};
  padding-left: ${(0,_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_3__.px)(left)};
`,activeTagItemRoot=horizontalPadding({left:16,right:8}),labelCSS=(styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.a`
  isolation: isolate;
  position: relative;
  height: ${({size})=>sizeMap[size]}px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
  border-radius: 4px;
  ${({size,status})=>"active"!==status&&(size=>{switch(size){case"M":return horizontalPadding({left:24,right:24});case"S":return horizontalPadding({left:16,right:16})}})(size)}
  ${({status})=>"active"===status&&activeTagItemRoot}
  color: ${({status})=>"inactive"===status?"var(--charcoal-text2)":"var(--charcoal-text5)"};

  transition: 0.2s box-shadow;

  &:not(:disabled):not([aria-disabled]),
  &[aria-disabled='false'] {
    ${_charcoal_ui_styled__WEBPACK_IMPORTED_MODULE_4__.L_}
  }

  &:disabled,
  &[aria-disabled]:not([aria-disabled='false']) {
    opacity: 0.32;
    cursor: default;
  }
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: ${({bgColor})=>bgColor};
  ${({status})=>"inactive"===status&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      background-color: var(--charcoal-surface3);
    `}

  ${({bgImage})=>void 0!==bgImage&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      background-color: var(--charcoal-surface4);

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
        background-image: url(${bgImage});
        mix-blend-mode: overlay;
      }
    `}
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  z-index: 2;
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
  font-size: 14px;
  line-height: 22px;
  font-weight: bold;
  display: flow-root;

  &::before {
    display: block;
    width: 0;
    height: 0;
    content: '';
    margin-top: -4px;
  }
  &::after {
    display: block;
    width: 0;
    height: 0;
    content: '';
    margin-bottom: -4px;
  }
`),translateLabelCSS=styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 10px;
`;styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  ${({isTranslate})=>isTranslate?translateLabelCSS:labelCSS}
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.span`
  max-width: 152px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: inherit;
  color: inherit;
  line-height: inherit;
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  font-size: 12px;
  line-height: 20px;
  font-weight: bold;
  display: flow-root;
  &::before {
    display: block;
    width: 0;
    height: 0;
    content: '';
    margin-top: -4px;
  }
  &::after {
    display: block;
    width: 0;
    height: 0;
    content: '';
    margin-bottom: -4px;
  }
`}}]);
//# sourceMappingURL=6983.f78a84c2.iframe.bundle.js.map