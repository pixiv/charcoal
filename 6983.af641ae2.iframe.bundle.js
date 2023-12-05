"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[6983],{"./packages/react/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BB:()=>useComponentAbstraction,h$:()=>ComponentAbstraction});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/utils/dist/index.esm.js"),_charcoal_ui_styled__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("./node_modules/warning/warning.js"),__webpack_require__("./packages/styled/dist/index.esm.js")),react_spring__WEBPACK_IMPORTED_MODULE_7__=(__webpack_require__("./packages/icons/dist/index.esm.js"),__webpack_require__("./node_modules/react-spring/dist/react-spring.esm.js")),DefaultValue={Link:react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function DefaultLink2({to,children,...rest},ref){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{href:to,ref,...rest,children})}))},ComponentAbstractionContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(DefaultValue);function ComponentAbstraction({children,components}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ComponentAbstractionContext.Provider,{value:{...DefaultValue,...components},children})}function useComponentAbstraction(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ComponentAbstractionContext)}function unreachable(value){throw new Error(0===arguments.length?"unreachable":`unreachable (${JSON.stringify(value)})`)}var Clickable_default=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function Clickable2(props,ref){const{Link}=useComponentAbstraction(),isLink="to"in props,as=isLink?Link:"button",ariaDisabled=!(!isLink||!0!==props.disabled)||void 0;let rest=props;if(isLink){const{disabled,..._rest}=props;rest=_rest}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledClickableDiv,{...rest,ref,as,"aria-disabled":ariaDisabled})})),StyledClickableDiv=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
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
`;(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(Clickable_default)`
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
    &:active,
    &:focus,
    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);
    }

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

  /* よく考えたらheight=32って定義が存在しないな... */
  height: ${p=>"M"===p.$size?40:32}px;
`;var IconButton_default=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function IconButtonInner({variant="Default",size="M",icon,...rest},ref){return function validateIconSize(size,icon){let requiredIconSize;switch(size){case"XS":requiredIconSize="16";break;case"S":case"M":requiredIconSize="24"}const result=/^\d*/u.exec(icon);if(null==result)throw new Error("Invalid icon name");const[iconSize]=result;iconSize!==requiredIconSize&&console.warn(`IconButton with size "${size}" expect icon size "${requiredIconSize}, but got "${iconSize}"`)}(size,icon),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledIconButton,{...rest,ref,$size:size,$variant:variant,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("pixiv-icon",{name:icon})})})),StyledIconButton=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(Clickable_default).attrs((function styledProps({$size,$variant}){return{...variantToProps($variant),...sizeToProps($size)}}))`
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
    &:focus,
    &:active,
    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);
    }
  }

  &:disabled,
  &[aria-disabled]:not([aria-disabled='false']) {
    opacity: 0.32;
  }
`;function variantToProps(variant){switch(variant){case"Default":return{$font:"text3",$background:"transparent"};case"Overlay":return{$font:"text5",$background:"surface4"}}}function sizeToProps(size){switch(size){case"XS":return{$width:20,$height:20};case"S":return{$width:32,$height:32};case"M":return{$width:40,$height:40}}}var theme=(0,_charcoal_ui_styled__WEBPACK_IMPORTED_MODULE_5__.jG)(styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP);styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.label`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: ${({theme:theme3})=>(0,_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_3__.px)(theme3.spacing[4])};
  align-items: center;
  cursor: pointer;

  ${theme((o=>[o.disabled]))}
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

    ${({invalid=!1})=>theme((o=>[o.borderRadius("oval"),o.bg.surface1.hover.press,invalid&&o.outline.assertive]))};

    &:not(:checked) {
      border-width: 2px;
      border-style: solid;
      border-color: ${({theme:theme3})=>theme3.color.text3};
    }

    &:checked {
      ${theme((o=>o.bg.brand.hover.press))}

      &::after {
        content: '';
        display: block;
        width: 8px;
        height: 8px;
        pointer-events: none;

        ${theme((o=>[o.bg.text5.hover.press,o.borderRadius("oval")]))}
      }
    }

    ${theme((o=>o.outline.default.focus))}

    /* FIXME: o.outline.default.focus の transition に o.bg.brand の transition が打ち消されてしまう */
    transition: all 0.2s !important;
  }
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  ${theme((o=>[o.typography(14),o.font.text2]))}
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${({theme:theme3})=>(0,_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_3__.px)(theme3.spacing[8])};
`;styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.label`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  position: relative;
  cursor: pointer;
  ${_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_3__.t0} {
    cursor: default;
  }
  gap: ${({theme:theme3})=>(0,_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_3__.px)(theme3.spacing[4])};
  ${theme((o=>o.disabled))}
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  display: flex;
  align-items: center;
  ${theme((o=>[o.typography(14),o.font.text2]))}
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.input.attrs({type:"checkbox"})`
  &[type='checkbox'] {
    appearance: none;
    display: block;
    width: 20px;
    height: 20px;
    margin: 0;

    &:checked {
      ${theme((o=>o.bg.brand.hover.press))}
    }

    ${({invalid,overlay})=>theme((o=>[o.bg.text3.hover.press,o.borderRadius("oval"),invalid&&!overlay&&o.outline.assertive,overlay&&o.bg.surface4]))};
  }
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  position: absolute;
  top: -2px;
  left: -2px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({invalid,overlay})=>theme((o=>[o.width.px(24),o.height.px(24),o.borderRadius("oval"),o.font.text5,invalid&&overlay&&o.outline.assertive]))}

  ${({overlay})=>overlay&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      border-color: ${({theme:theme3})=>theme3.color.text5};
      border-width: 2px;
      border-style: solid;
    `}
`;styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.label`
  display: inline-grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  cursor: pointer;
  outline: 0;

  ${theme((o=>o.disabled))}

  :active > input {
    box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);
  }

  ${_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_3__.t0} {
    cursor: default;
  }
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  ${theme((o=>[o.typography(14).preserveHalfLeading,o.font.text2,o.margin.left(4)]))}
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
  :focus {
    box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);
  }

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
`;var FieldLabel_default=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function FieldLabel2({style,className,label,required=!1,requiredText,subLabel,...labelProps},ref){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FieldLabelWrapper,{style,className,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Label2,{ref,...labelProps,children:label}),required&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RequiredText,{children:requiredText}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SubLabelClickable,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{children:subLabel})})]})})),theme2=(0,_charcoal_ui_styled__WEBPACK_IMPORTED_MODULE_5__.jG)(styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP),Label2=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.label`
  ${theme2((o=>[o.typography(14).bold,o.font.text1]))}
`,RequiredText=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.span`
  ${theme2((o=>[o.typography(14),o.font.text2]))}
`,SubLabelClickable=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  ${theme2((o=>[o.typography(14),o.font.text3.hover.press,o.outline.default.focus]))}
`,FieldLabelWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  display: inline-flex;
  align-items: center;

  > ${RequiredText} {
    ${theme2((o=>o.margin.left(4)))}
  }

  > ${SubLabelClickable} {
    ${theme2((o=>o.margin.left("auto")))}
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

  :not(:disabled):not([aria-disabled]):active,
  [aria-disabled='false']:active {
    outline: none;
    box-shadow: 0 0 0 4px
      ${p=>p.invalid?"rgba(255,43,0,0.32)":"rgba(0, 150, 250, 0.32);"};
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

  background-color: ${({theme:theme3})=>theme3.color.background1};
  border-radius: 24px;

  @media ${({theme:theme3})=>(0,_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_3__.kk)(theme3.breakpoint.screen1)} {
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

  background-color: ${({theme:theme3})=>theme3.color.surface4};

  @media ${({theme:theme3})=>(0,_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_3__.kk)(theme3.breakpoint.screen1)} {
    ${p=>!1!==p.$bottomSheet&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
        padding: 0;
      `}
  }
`),(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(IconButton_default)`
  position: absolute;
  top: 8px;
  right: 8px;

  ${theme((o=>[o.font.text3.hover.press]))}
`;var ModalHeading=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.h3`
  margin: 0;
  font-weight: inherit;
  font-size: inherit;
`;styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  height: 64px;
  display: grid;
  align-content: center;
  justify-content: center;
  @media ${({theme:theme3})=>(0,_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_3__.kk)(theme3.breakpoint.screen1)} {
    ${p=>!1!==p.$bottomSheet&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
        height: 48px;
      `}
  }
`,(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)((function ModalTitle(props){const{titleProps,title}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ModalContext);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ModalHeading,{...titleProps,...props,children:title})}))`
  ${theme((o=>[o.font.text1,o.typography(16).bold]))}
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  ${theme((o=>[o.padding.horizontal(16)]))}
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  ${theme((o=>[o.padding.bottom(40)]))}
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 8px;

  ${theme((o=>[o.padding.horizontal(16).top(16)]))}
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

  ${theme((o=>[o.bg.background1,o.border.default,o.borderRadius(8),o.padding.vertical(8)]))}
`;styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.ul`
  padding: 0;
  margin: 0;
`;styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  display: inline-block;
  width: 100%;

  ${_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_3__.t0} {
    cursor: default;
    ${theme((o=>o.disabled))}
  }
`,(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(FieldLabel_default)`
  width: 100%;

  ${theme((o=>o.margin.bottom(8)))}
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 40px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  cursor: pointer;

  ${_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_3__.t0} {
    cursor: default;
  }

  ${({invalid})=>theme((o=>[o.padding.horizontal(8),o.outline.default.focus,o.bg.surface3,o.borderRadius(4),!0===invalid&&o.outline.assertive]))}
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.span`
  text-align: left;

  ${theme((o=>[o.typography(14),o.font.text2]))}
`,(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(Icon_default)`
  ${theme((o=>[o.font.text2]))}
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  ${({invalid})=>theme((o=>[o.typography(14),o.margin.top(8),!0===invalid?o.font.assertive:o.font.text2]))}
`;styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.li`
  list-style: none;
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  display: flex;
  align-items: center;
  min-height: 40px;
  cursor: pointer;
  outline: none;

  ${theme((o=>[o.padding.horizontal(16),o.disabled]))}

  &[aria-disabled="true"] {
    cursor: default;
  }

  :hover,
  :focus,
  :focus-within {
    ${theme((o=>[o.bg.surface3]))}
  }
`;styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.span`
  ${theme((o=>[o.typography(14),o.font.text2]))};
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: ${({isSelected})=>!0===isSelected?0:20}px;
`,(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(Icon_default)`
  ${theme((o=>[o.font.text2]))}
  padding-right: 4px;
`;styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.span`
  display: block;
  color: ${({theme:theme3})=>theme3.color.text3};
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
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  display: inline-flex;
  align-items: center;

  ${theme((o=>[o.bg.surface3,o.borderRadius(16)]))}
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.label`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 32px;

  ${_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_3__.t0} {
    cursor: default;
  }

  ${({checked})=>theme((o=>[o.padding.horizontal(16),o.borderRadius(16),o.disabled,!0===checked&&o.bg.brand,!0===checked?o.font.text5:o.font.text2]))}
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
  ${theme((o=>[o.typography(14)]))}
`;var hiddenCss=styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
  visibility: hidden;
`,sizeMap=(styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.label`
  position: relative;
  display: flex;

  cursor: pointer;
  ${_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_3__.t0} {
    cursor: default;
  }

  gap: ${({theme:theme3})=>(0,_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_3__.px)(theme3.spacing[4])};
  ${theme((o=>[o.disabled]))}
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

    &:checked {
      ${theme((o=>o.bg.brand.hover.press))}
    }
    &:not(:checked) {
      border-width: 2px;
      border-style: solid;
      border-color: ${({theme:theme3})=>theme3.color.text4};
    }
    ${theme((o=>[o.outline.default.focus,o.borderRadius(4)]))}
    ${p=>p.invalid&&theme((o=>[o.outline.assertive]))}

    /* FIXME: o.outline.default.focus の transition に o.bg.brand の transition が打ち消されてしまう */
    transition: all 0.2s !important;
  }
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  position: absolute;
  top: -2px;
  left: -2px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  ${theme((o=>[o.width.px(24),o.height.px(24),o.font.text5]))}

  ${({checked})=>!0!==checked&&hiddenCss};
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  ${theme((o=>[o.font.text2]))}

  font-size: 14px;
  /** checkbox の height が 20px なのでcheckbox と text が揃っているように見せるために行ボックスの高さを 20px にしている */
  line-height: 20px;
`,{S:32,M:40}),labelCSS=(styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.a`
  isolation: isolate;
  position: relative;
  height: ${({size})=>sizeMap[size]}px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;

  ${({size,status})=>theme((o=>[o.outline.default.focus,o.borderRadius(4),"active"!==status&&"M"===size&&o.padding.horizontal(24),"active"!==status&&"S"===size&&o.padding.horizontal(16),"inactive"===status?o.font.text2:o.font.text5,..."active"===status?[o.padding.left(16),o.padding.right(8)]:[]]))}

  ${_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_3__.t0} {
    ${theme((o=>[o.disabled]))}
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
  ${({status})=>"inactive"===status&&theme((o=>o.bg.surface3))}

  ${({bgImage})=>void 0!==bgImage&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      ${theme((o=>[o.bg.surface4]))}
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
  gap: ${({theme:theme3})=>(0,_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_3__.px)(theme3.spacing[8])};
  align-items: center;
  z-index: 2;
`,styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
  ${theme((o=>[o.typography(14).bold]))}
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
  ${theme((o=>[o.typography(12).bold]))}
`}}]);
//# sourceMappingURL=6983.af641ae2.iframe.bundle.js.map