"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[6983],{"./packages/react/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BB:()=>useComponentAbstraction,h$:()=>ComponentAbstraction});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_charcoal_ui_styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/styled/dist/index.esm.js"),_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/utils/dist/index.esm.js"),react_spring__WEBPACK_IMPORTED_MODULE_7__=(__webpack_require__("./node_modules/warning/warning.js"),__webpack_require__("./packages/icons/dist/index.esm.js"),__webpack_require__("./node_modules/react-spring/dist/react-spring.esm.js")),DefaultValue={Link:react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function DefaultLink2({to,children,...rest},ref){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{href:to,ref,...rest,children})}))},ComponentAbstractionContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(DefaultValue);function ComponentAbstraction({children,components}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ComponentAbstractionContext.Provider,{value:{...DefaultValue,...components},children})}function useComponentAbstraction(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ComponentAbstractionContext)}function unreachable(value){throw new Error(0===arguments.length?"unreachable":`unreachable (${JSON.stringify(value)})`)}var theme=(0,_charcoal_ui_styled__WEBPACK_IMPORTED_MODULE_2__.jG)(styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP),Clickable_default=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function Clickable2(props,ref){const{Link}=useComponentAbstraction();if("to"in props){const{onClick,disabled=!1,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(A,{...rest,as:disabled?void 0:Link,onClick:disabled?void 0:onClick,"aria-disabled":disabled,ref})}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Button,{...props,ref})})),clickableCss=styled_components__WEBPACK_IMPORTED_MODULE_3__.iv`
  /* Clickable style */
  cursor: pointer;

  ${_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_4__.t0} {
    cursor: default;
  }
`,Button=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.button`
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

  ${clickableCss}
`,A=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.span`
  /* Reset a-tag appearance */
  color: inherit;

  &:focus {
    outline: none;
  }

  .text {
    top: calc(1em + 2em);
  }

  ${clickableCss}
`;(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP)(Clickable_default)`
  width: ${p=>p.$fullWidth?"stretch":"min-content"};
  display: inline-grid;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;

  ${p=>theme((o=>[o.font[variantToFont(p.$variant)].hover.press,o.bg[variantToBackground(p.$variant)].hover.press,o.typography(14).bold.preserveHalfLeading,o.padding.horizontal("M"===p.$size?24:16),o.disabled,o.borderRadius("oval"),o.outline.default.focus]))}

  /* よく考えたらheight=32って定義が存在しないな... */
  height: ${p=>"M"===p.$size?40:32}px;
`;function variantToBackground(variant){switch(variant){case"Overlay":return"surface4";case"Default":return"surface3";case"Primary":return"brand";case"Navigation":return"surface6";case"Danger":return"assertive";default:return unreachable(variant)}}function variantToFont(variant){switch(variant){case"Overlay":case"Primary":case"Navigation":case"Danger":return"text5";case"Default":return"text2";default:return unreachable(variant)}}var IconButton_default=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function IconButtonInner({variant="Default",size="M",icon,...rest},ref){return function validateIconSize(size,icon){let requiredIconSize;switch(size){case"XS":requiredIconSize="16";break;case"S":case"M":requiredIconSize="24"}const result=/^\d*/u.exec(icon);if(null==result)throw new Error("Invalid icon name");const[iconSize]=result;iconSize!==requiredIconSize&&console.warn(`IconButton with size "${size}" expect icon size "${requiredIconSize}, but got "${iconSize}"`)}(size,icon),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledIconButton,{...rest,ref,variant,size,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("pixiv-icon",{name:icon})})})),StyledIconButton=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP)(Clickable_default).attrs((function styledProps(props){return{...props,...variantToProps(props.variant),...sizeToProps(props.size)}}))`
  user-select: none;

  width: ${p=>p.width}px;
  height: ${p=>p.height}px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({font,background})=>theme((o=>[o.font[font],o.bg[background].hover.press,o.disabled,o.borderRadius("oval"),o.outline.default.focus]))}
`;function variantToProps(variant){switch(variant){case"Default":return{font:"text3",background:"transparent"};case"Overlay":return{font:"text5",background:"surface4"}}}function sizeToProps(size){switch(size){case"XS":return{width:20,height:20};case"S":return{width:32,height:32};case"M":return{width:40,height:40}}}styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.label`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: ${({theme:theme3})=>(0,_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_4__.px)(theme3.spacing[4])};
  align-items: center;
  cursor: pointer;

  ${theme((o=>[o.disabled]))}
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.input.attrs({type:"radio"})`
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
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  ${theme((o=>[o.typography(14),o.font.text2]))}
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${({theme:theme3})=>(0,_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_4__.px)(theme3.spacing[8])};
`;styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.label`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  position: relative;
  cursor: pointer;
  ${_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_4__.t0} {
    cursor: default;
  }
  gap: ${({theme:theme3})=>(0,_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_4__.px)(theme3.spacing[4])};
  ${theme((o=>o.disabled))}
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  display: flex;
  align-items: center;
  ${theme((o=>[o.typography(14),o.font.text2]))}
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.input.attrs({type:"checkbox"})`
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
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  position: absolute;
  top: -2px;
  left: -2px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({invalid,overlay})=>theme((o=>[o.width.px(24),o.height.px(24),o.borderRadius("oval"),o.font.text5,invalid&&overlay&&o.outline.assertive]))}

  ${({overlay})=>overlay&&styled_components__WEBPACK_IMPORTED_MODULE_3__.iv`
      border-color: ${({theme:theme3})=>theme3.color.text5};
      border-width: 2px;
      border-style: solid;
    `}
`;styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.label`
  display: inline-grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  cursor: pointer;
  outline: 0;

  ${theme((o=>o.disabled))}

  :active > input {
    box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);
  }

  ${_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_4__.t0} {
    cursor: default;
  }
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  ${theme((o=>[o.typography(14).preserveHalfLeading,o.font.text2,o.margin.left(4)]))}
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.input.attrs({type:"checkbox"})`
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
`;var FieldLabel_default=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function FieldLabel2({style,className,label,required=!1,requiredText,subLabel,...labelProps},ref){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FieldLabelWrapper,{style,className,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Label2,{ref,...labelProps,children:label}),required&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RequiredText,{children:requiredText}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SubLabelClickable,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{children:subLabel})})]})})),theme2=(0,_charcoal_ui_styled__WEBPACK_IMPORTED_MODULE_2__.jG)(styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP),Label2=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.label`
  ${theme2((o=>[o.typography(14).bold,o.font.text1]))}
`,RequiredText=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.span`
  ${theme2((o=>[o.typography(14),o.font.text2]))}
`,SubLabelClickable=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  ${theme2((o=>[o.typography(14),o.font.text3.hover.press,o.outline.default.focus]))}
`,FieldLabelWrapper=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  display: inline-flex;
  align-items: center;

  > ${RequiredText} {
    ${theme2((o=>o.margin.left(4)))}
  }

  > ${SubLabelClickable} {
    ${theme2((o=>o.margin.left("auto")))}
  }
`,Icon_default=(styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  display: flex;
  flex-direction: column;

  ${p=>p.isDisabled&&{opacity:p.theme.elementEffect.disabled.opacity}}
`,(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP)(FieldLabel_default)`
  ${theme((o=>o.margin.bottom(8)))}
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  height: 40px;
  display: grid;
  position: relative;
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.span`
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
  z-index: 1;
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.span`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);

  display: flex;
  gap: 8px;
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.span`
  user-select: none;

  ${theme((o=>[o.typography(14).preserveHalfLeading,o.font.text2]))}
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.input`
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
  padding-left: calc((8px + ${p=>p.extraLeftPadding}px) / 0.875);
  padding-right: calc((8px + ${p=>p.extraRightPadding}px) / 0.875);
  border-radius: calc(4px / 0.875);

  /* Display box-shadow for iOS Safari */
  appearance: none;

  ${p=>theme((o=>[o.bg.surface3.hover,o.outline.default.focus,p.invalid&&o.outline.assertive,o.font.text2]))}

  &::placeholder {
    ${theme((o=>o.font.text3))}
  }
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.span`
  ${theme((o=>[o.typography(14).preserveHalfLeading,o.font.text3]))}
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.p`
  ${p=>theme((o=>[o.typography(14),o.margin.top(8),o.margin.bottom(0),o.font[p.invalid?"assertive":"text1"]]))}
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  display: flex;
  flex-direction: column;

  ${p=>p.isDisabled&&{opacity:p.theme.elementEffect.disabled.opacity}}
`,(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP)(FieldLabel_default)`
  ${theme((o=>o.margin.bottom(8)))}
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  position: relative;
  overflow: hidden;
  padding: 0 8px;

  ${p=>theme((o=>[o.bg.surface3.hover,o.outline.default.focus,p.invalid&&o.outline.assertive,o.font.text2,o.borderRadius(4)]))}

  &:focus-within {
    ${p=>theme((o=>p.invalid?o.outline.assertive:o.outline.default))}
  }

  ${({rows})=>styled_components__WEBPACK_IMPORTED_MODULE_3__.iv`
    height: calc(22px * ${rows} + 18px);
  `};
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.textarea`
  border: none;
  outline: none;
  resize: none;
  font-family: inherit;
  color: inherit;

  /* Prevent zooming for iOS Safari */
  transform-origin: top left;
  transform: scale(0.875);
  width: calc(100% / 0.875);
  font-size: calc(14px / 0.875);
  line-height: calc(22px / 0.875);
  padding: calc(9px / 0.875) 0 ${p=>p.noBottomPadding?0:""};

  ${({rows=1})=>styled_components__WEBPACK_IMPORTED_MODULE_3__.iv`
    height: calc(22px / 0.875 * ${rows});
  `};

  /* Display box-shadow for iOS Safari */
  appearance: none;

  background: none;

  &::placeholder {
    ${theme((o=>o.font.text3))}
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.span`
  position: absolute;
  bottom: 9px;
  right: 8px;

  ${theme((o=>[o.typography(14).preserveHalfLeading,o.font.text3]))}
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.p`
  ${p=>theme((o=>[o.typography(14),o.margin.top(8),o.margin.bottom(0),o.font[p.invalid?"assertive":"text1"]]))}
`,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function IconInner({name,scale,unsafeNonGuidelineScale,className,...rest},ref){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("pixiv-icon",{ref,name,scale,"unsafe-non-guideline-scale":unsafeNonGuidelineScale,class:className,...rest})})));function columnSystem(span,column,gutter){return span*column+(span-1)*gutter}(0,react_spring__WEBPACK_IMPORTED_MODULE_7__.animated)(styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  margin: auto;
  position: relative;
  height: fit-content;
  width: ${p=>{switch(p.size){case"S":return columnSystem(3,80,24)+48;case"M":return columnSystem(4,80,24)+48;case"L":return columnSystem(6,80,24)+48;default:return unreachable(p.size)}}}px;

  background-color: ${({theme:theme3})=>theme3.color.background1};
  border-radius: 24px;

  @media ${({theme:theme3})=>(0,_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_4__.kk)(theme3.breakpoint.screen1)} {
    max-width: 440px;
    width: calc(100% - 48px);
    ${p=>!1!==p.bottomSheet&&styled_components__WEBPACK_IMPORTED_MODULE_3__.iv`
        max-width: unset;
        width: 100%;
        border-radius: 0;
        margin: auto 0 0 0;
        ${"full"===p.bottomSheet&&styled_components__WEBPACK_IMPORTED_MODULE_3__.iv`
          min-height: 100%;
        `}
      `}
  }
  :focus {
    outline: none;
  }
`);var ModalContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({titleProps:{},title:"",close:void 0,showDismiss:!0,bottomSheet:!1});(0,react_spring__WEBPACK_IMPORTED_MODULE_7__.animated)(styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
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

  @media ${({theme:theme3})=>(0,_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_4__.kk)(theme3.breakpoint.screen1)} {
    ${p=>!1!==p.$bottomSheet&&styled_components__WEBPACK_IMPORTED_MODULE_3__.iv`
        padding: 0;
      `}
  }
`),(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP)(IconButton_default)`
  position: absolute;
  top: 8px;
  right: 8px;

  ${theme((o=>[o.font.text3.hover.press]))}
`;var ModalHeading=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.h3`
  margin: 0;
  font-weight: inherit;
  font-size: inherit;
`;styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  height: 64px;
  display: grid;
  align-content: center;
  justify-content: center;
  @media ${({theme:theme3})=>(0,_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_4__.kk)(theme3.breakpoint.screen1)} {
    ${p=>!1!==p.$bottomSheet&&styled_components__WEBPACK_IMPORTED_MODULE_3__.iv`
        height: 48px;
      `}
  }
`,(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP)((function ModalTitle(props){const{titleProps,title}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ModalContext);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ModalHeading,{...titleProps,...props,children:title})}))`
  ${theme((o=>[o.font.text1,o.typography(16).bold]))}
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  ${theme((o=>[o.padding.horizontal(16)]))}
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  ${theme((o=>[o.padding.bottom(40)]))}
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 8px;

  ${theme((o=>[o.padding.horizontal(16).top(16)]))}
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div.attrs({role:"progressbar"})`
  box-sizing: content-box;
  margin: auto;
  padding: ${props=>props.padding}px;
  border-radius: 8px;
  font-size: ${props=>props.size}px;
  width: ${props=>props.size}px;
  height: ${props=>props.size}px;
  opacity: 0.84;
  ${({transparent})=>theme((o=>[o.font.text4,transparent?o.bg.transparent:o.bg.background1]))}
`;var scaleOut=styled_components__WEBPACK_IMPORTED_MODULE_3__.F4`
  from {
    transform: scale(0);
    opacity: 1;
  }

  to {
    transform: scale(1);
    opacity: 0;
  }
`;styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div.attrs({role:"presentation"})`
  width: 1em;
  height: 1em;
  border-radius: 1em;
  background-color: currentColor;
  animation: ${scaleOut} 1s both ease-out;
  animation-iteration-count: ${p=>p.once?1:"infinite"};

  &[data-reset-animation] {
    animation: none;
  }
`;styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  margin: 4px 0;
  list-style: none;
  overflow: auto;
  max-height: inherit;

  ${theme((o=>[o.bg.background1,o.border.default,o.borderRadius(8),o.padding.vertical(8)]))}
`;styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.ul`
  padding: 0;
  margin: 0;
`;styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  display: inline-block;
  width: 100%;

  ${_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_4__.t0} {
    cursor: default;
    ${theme((o=>o.disabled))}
  }
`,(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP)(FieldLabel_default)`
  width: 100%;

  ${theme((o=>o.margin.bottom(8)))}
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 40px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  cursor: pointer;

  ${_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_4__.t0} {
    cursor: default;
  }

  ${({invalid})=>theme((o=>[o.padding.horizontal(8),o.outline.default.focus,o.bg.surface3,o.borderRadius(4),!0===invalid&&o.outline.assertive]))}
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.span`
  text-align: left;

  ${theme((o=>[o.typography(14),o.font.text2]))}
`,(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP)(Icon_default)`
  ${theme((o=>[o.font.text2]))}
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  ${({invalid})=>theme((o=>[o.typography(14),o.margin.top(8),!0===invalid?o.font.assertive:o.font.text2]))}
`;styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.li`
  list-style: none;
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
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
`;styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.span`
  ${theme((o=>[o.typography(14),o.font.text2]))};
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: ${({isSelected})=>!0===isSelected?0:20}px;
`,(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP)(Icon_default)`
  ${theme((o=>[o.font.text2]))}
  padding-right: 4px;
`;styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.span`
  display: block;
  color: ${({theme:theme3})=>theme3.color.text3};
  font-size: 12px;
  font-weight: bold;
  padding: 12px 0 8px 16px;
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.ul`
  padding-left: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  overflow: hidden;
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.li`
  display: block;
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  display: inline-flex;
  align-items: center;

  ${theme((o=>[o.bg.surface3,o.borderRadius(16)]))}
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.label`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 32px;

  ${_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_4__.t0} {
    cursor: default;
  }

  ${({checked})=>theme((o=>[o.padding.horizontal(16),o.borderRadius(16),o.disabled,!0===checked&&o.bg.brand,!0===checked?o.font.text5:o.font.text2]))}
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.input`
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
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  background: transparent;
  display: flex;
  align-items: center;
  height: 22px;
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  ${theme((o=>[o.typography(14)]))}
`;var hiddenCss=styled_components__WEBPACK_IMPORTED_MODULE_3__.iv`
  visibility: hidden;
`,sizeMap=(styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.label`
  position: relative;
  display: flex;

  cursor: pointer;
  ${_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_4__.t0} {
    cursor: default;
  }

  gap: ${({theme:theme3})=>(0,_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_4__.px)(theme3.spacing[4])};
  ${theme((o=>[o.disabled]))}
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  position: relative;
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.input`
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
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  position: absolute;
  top: -2px;
  left: -2px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  ${theme((o=>[o.width.px(24),o.height.px(24),o.font.text5]))}

  ${({checked})=>!0!==checked&&hiddenCss};
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  ${theme((o=>[o.font.text2]))}

  font-size: 14px;
  /** checkbox の height が 20px なのでcheckbox と text が揃っているように見せるために行ボックスの高さを 20px にしている */
  line-height: 20px;
`,{S:32,M:40}),labelCSS=(styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.a`
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

  ${_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_4__.t0} {
    ${theme((o=>[o.disabled]))}
    cursor: default;
  }
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: ${({bgColor})=>bgColor};
  ${({status})=>"inactive"===status&&theme((o=>o.bg.surface3))}

  ${({bgImage})=>void 0!==bgImage&&styled_components__WEBPACK_IMPORTED_MODULE_3__.iv`
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
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  display: inline-flex;
  gap: ${({theme:theme3})=>(0,_charcoal_ui_utils__WEBPACK_IMPORTED_MODULE_4__.px)(theme3.spacing[8])};
  align-items: center;
  z-index: 2;
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv`
  ${theme((o=>[o.typography(14).bold]))}
`),translateLabelCSS=styled_components__WEBPACK_IMPORTED_MODULE_3__.iv`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 10px;
`;styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  ${({isTranslate})=>isTranslate?translateLabelCSS:labelCSS}
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.span`
  max-width: 152px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: inherit;
  color: inherit;
  line-height: inherit;
`,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  ${theme((o=>[o.typography(12).bold]))}
`}}]);
//# sourceMappingURL=6983.d1d3b8bb.iframe.bundle.js.map