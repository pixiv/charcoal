"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[5988],{"./packages/react/src/components/Switch/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checked:()=>Checked,Default:()=>Default,Disabled:()=>Disabled,Label:()=>Label,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/components/Switch/index.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"react/Switch",component:___WEBPACK_IMPORTED_MODULE_2__.A,parameters:{layout:"centered"}},Default={argTypes:{checked:{type:"boolean"},children:{type:"string"},disabled:{type:"boolean"}},render:function Render(args){const[checked,setChecked]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{...args,name:"name",onChange:v=>{setChecked(v)},checked:args.checked??checked})})}},Checked={render:function Render(){const[checked,setChecked]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{name:"name",label:"checked",onChange:v=>{setChecked(v)},checked})})}},Label={render:function Render(){const[checked,setChecked]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{name:"label",checked,onChange:setChecked,children:"Label"})})}},Disabled={render:function Render(){const[checked,setChecked]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{name:"disabled",checked,onChange:setChecked,disabled:!0,children:"Label"})})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  argTypes: {\n    checked: {\n      type: 'boolean'\n    },\n    children: {\n      type: 'string'\n    },\n    disabled: {\n      type: 'boolean'\n    }\n  },\n  render: function Render(args) {\n    const [checked, setChecked] = useState(false);\n    return <div>\n        <Switch {...args} name=\"name\" onChange={v => {\n        setChecked(v);\n      }} checked={args.checked ?? checked} />\n      </div>;\n  }\n}",...Default.parameters?.docs?.source}}},Checked.parameters={...Checked.parameters,docs:{...Checked.parameters?.docs,source:{originalSource:'{\n  render: function Render() {\n    const [checked, setChecked] = useState(true);\n    return <div>\n        <Switch name="name" label="checked" onChange={v => {\n        setChecked(v);\n      }} checked={checked} />\n      </div>;\n  }\n}',...Checked.parameters?.docs?.source}}},Label.parameters={...Label.parameters,docs:{...Label.parameters?.docs,source:{originalSource:'{\n  render: function Render() {\n    const [checked, setChecked] = useState(false);\n    return <div>\n        <Switch name="label" checked={checked} onChange={setChecked}>\n          Label\n        </Switch>\n      </div>;\n  }\n}',...Label.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: function Render() {\n    const [checked, setChecked] = useState(false);\n    return <div>\n        <Switch name="disabled" checked={checked} onChange={setChecked} disabled>\n          Label\n        </Switch>\n      </div>;\n  }\n}',...Disabled.parameters?.docs?.source}}}},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1_@swc+core@1.10.16_@swc+helpers@0.5.15__esbuild@0.24.2_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.5.2_typescript@4.9.5_webpack@5.97.1_@swc+core@1.10.16_@s_44067cab36bad345883acf3563389642/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./packages/react/src/components/Switch/SwitchInput/index.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_swc_core_1_10_16_swc_helpers_0_5_15_esbuild_0_24_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1_@swc+core@1.10.16_@swc+helpers@0.5.15__esbuild@0.24.2_/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_swc_core_1_10_16_swc_helpers_0_5_15_esbuild_0_24_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_swc_core_1_10_16_swc_helpers_0_5_15_esbuild_0_24_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_swc_core_1_10_16_swc_helpers_0_5_15_esbuild_0_24_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1_@swc+core@1.10.16_@swc+helpers@0.5.15__esbuild@0.24.2_/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_swc_core_1_10_16_swc_helpers_0_5_15_esbuild_0_24_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_swc_core_1_10_16_swc_helpers_0_5_15_esbuild_0_24_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".charcoal-switch-input {\n  cursor: pointer;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  display: inline-flex;\n  position: relative;\n  box-sizing: border-box;\n  width: 28px;\n  border: 2px solid transparent;\n\n  transition-property: background-color, box-shadow;\n  transition-duration: 0.2s;\n\n  outline: none;\n  border-radius: 16px;\n  height: 16px;\n  margin: 0;\n  background-color: var(--charcoal-text4);\n}\n\n.charcoal-switch-input:disabled,\n.charcoal-switch-input[readonly] {\n  opacity: 0.32;\n  cursor: default;\n}\n\n.charcoal-switch-input::after {\n  content: '';\n  position: absolute;\n  display: block;\n  top: 0;\n  left: 0;\n  width: 12px;\n  height: 12px;\n  transform: translateX(0);\n  transition: transform 0.2s;\n  border-radius: 1024px;\n  background-color: var(--charcoal-text5);\n}\n\n.charcoal-switch-input:checked::after {\n  transform: translateX(12px);\n  transition: transform 0.2s;\n}\n\n.charcoal-switch-input:checked {\n  background-color: var(--charcoal-brand);\n}\n\n.charcoal-switch-input:not(:disabled):hover {\n  background-color: var(--charcoal-text4-hover);\n}\n\n.charcoal-switch-input:not(:disabled):active {\n  background-color: var(--charcoal-text4-press);\n}\n\n.charcoal-switch-input:not(:disabled):focus {\n  outline: none;\n  box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);\n}\n.charcoal-switch-input:not(:disabled):focus-visible {\n  box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);\n}\n.charcoal-switch-input:not(:disabled):focus:not(:focus-visible) {\n  box-shadow: none;\n}\n\n.charcoal-switch-input:not(:disabled)::after:hover {\n  background-color: var(--charcoal-text5-hover);\n}\n\n.charcoal-switch-input:not(:disabled)::after:active {\n  background-color: var(--charcoal-text5-press);\n}\n\n.charcoal-switch-input:not(:disabled):checked:hover {\n  background-color: var(--charcoal-brand-hover);\n}\n\n.charcoal-switch-input:not(:disabled):checked:active {\n  background-color: var(--charcoal-brand-press);\n}\n","",{version:3,sources:["webpack://./packages/react/src/components/Switch/SwitchInput/index.css"],names:[],mappings:"AAAA;EACE,eAAe;EACf,wBAAgB;KAAhB,qBAAgB;UAAhB,gBAAgB;EAChB,oBAAoB;EACpB,kBAAkB;EAClB,sBAAsB;EACtB,WAAW;EACX,6BAA6B;;EAE7B,iDAAiD;EACjD,yBAAyB;;EAEzB,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,SAAS;EACT,uCAAuC;AACzC;;AAEA;;EAEE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,cAAc;EACd,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,wBAAwB;EACxB,0BAA0B;EAC1B,qBAAqB;EACrB,uCAAuC;AACzC;;AAEA;EACE,2BAA2B;EAC3B,0BAA0B;AAC5B;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,6CAA6C;AAC/C;;AAEA;EACE,6CAA6C;AAC/C;;AAEA;EACE,aAAa;EACb,6CAA6C;AAC/C;AACA;EACE,6CAA6C;AAC/C;AACA;EACE,gBAAgB;AAClB;;AAEA;EACE,6CAA6C;AAC/C;;AAEA;EACE,6CAA6C;AAC/C;;AAEA;EACE,6CAA6C;AAC/C;;AAEA;EACE,6CAA6C;AAC/C",sourcesContent:[".charcoal-switch-input {\n  cursor: pointer;\n  appearance: none;\n  display: inline-flex;\n  position: relative;\n  box-sizing: border-box;\n  width: 28px;\n  border: 2px solid transparent;\n\n  transition-property: background-color, box-shadow;\n  transition-duration: 0.2s;\n\n  outline: none;\n  border-radius: 16px;\n  height: 16px;\n  margin: 0;\n  background-color: var(--charcoal-text4);\n}\n\n.charcoal-switch-input:disabled,\n.charcoal-switch-input[readonly] {\n  opacity: 0.32;\n  cursor: default;\n}\n\n.charcoal-switch-input::after {\n  content: '';\n  position: absolute;\n  display: block;\n  top: 0;\n  left: 0;\n  width: 12px;\n  height: 12px;\n  transform: translateX(0);\n  transition: transform 0.2s;\n  border-radius: 1024px;\n  background-color: var(--charcoal-text5);\n}\n\n.charcoal-switch-input:checked::after {\n  transform: translateX(12px);\n  transition: transform 0.2s;\n}\n\n.charcoal-switch-input:checked {\n  background-color: var(--charcoal-brand);\n}\n\n.charcoal-switch-input:not(:disabled):hover {\n  background-color: var(--charcoal-text4-hover);\n}\n\n.charcoal-switch-input:not(:disabled):active {\n  background-color: var(--charcoal-text4-press);\n}\n\n.charcoal-switch-input:not(:disabled):focus {\n  outline: none;\n  box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);\n}\n.charcoal-switch-input:not(:disabled):focus-visible {\n  box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);\n}\n.charcoal-switch-input:not(:disabled):focus:not(:focus-visible) {\n  box-shadow: none;\n}\n\n.charcoal-switch-input:not(:disabled)::after:hover {\n  background-color: var(--charcoal-text5-hover);\n}\n\n.charcoal-switch-input:not(:disabled)::after:active {\n  background-color: var(--charcoal-text5-press);\n}\n\n.charcoal-switch-input:not(:disabled):checked:hover {\n  background-color: var(--charcoal-brand-hover);\n}\n\n.charcoal-switch-input:not(:disabled):checked:active {\n  background-color: var(--charcoal-brand-press);\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1_@swc+core@1.10.16_@swc+helpers@0.5.15__esbuild@0.24.2_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.5.2_typescript@4.9.5_webpack@5.97.1_@swc+core@1.10.16_@s_44067cab36bad345883acf3563389642/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./packages/react/src/components/Switch/index.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_swc_core_1_10_16_swc_helpers_0_5_15_esbuild_0_24_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1_@swc+core@1.10.16_@swc+helpers@0.5.15__esbuild@0.24.2_/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_swc_core_1_10_16_swc_helpers_0_5_15_esbuild_0_24_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_swc_core_1_10_16_swc_helpers_0_5_15_esbuild_0_24_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_swc_core_1_10_16_swc_helpers_0_5_15_esbuild_0_24_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1_@swc+core@1.10.16_@swc+helpers@0.5.15__esbuild@0.24.2_/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_swc_core_1_10_16_swc_helpers_0_5_15_esbuild_0_24_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_swc_core_1_10_16_swc_helpers_0_5_15_esbuild_0_24_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".charcoal-switch__label {\n  display: inline-grid;\n  grid-template-columns: auto 1fr;\n  align-items: center;\n  cursor: pointer;\n  outline: 0;\n  gap: 4px;\n}\n\n.charcoal-switch__label[aria-disabled='true'] {\n  opacity: 0.32;\n  cursor: default;\n}\n\n.charcoal-switch__label[aria-disabled='true'] > input {\n  opacity: 1;\n}\n\n.charcoal-switch__label_div {\n  font-size: 14px;\n  line-height: 22px;\n  color: var(--charcoal-text2);\n}\n","",{version:3,sources:["webpack://./packages/react/src/components/Switch/index.css"],names:[],mappings:"AAAA;EACE,oBAAoB;EACpB,+BAA+B;EAC/B,mBAAmB;EACnB,eAAe;EACf,UAAU;EACV,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,4BAA4B;AAC9B",sourcesContent:[".charcoal-switch__label {\n  display: inline-grid;\n  grid-template-columns: auto 1fr;\n  align-items: center;\n  cursor: pointer;\n  outline: 0;\n  gap: 4px;\n}\n\n.charcoal-switch__label[aria-disabled='true'] {\n  opacity: 0.32;\n  cursor: default;\n}\n\n.charcoal-switch__label[aria-disabled='true'] > input {\n  opacity: 1;\n}\n\n.charcoal-switch__label_div {\n  font-size: 14px;\n  line-height: 22px;\n  color: var(--charcoal-text2);\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./packages/react/src/_lib/useClassNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>useClassNames});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function useClassNames(...classNames){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>classNames.filter((v=>v)).join(" ")),[classNames])}},"./packages/react/src/components/Switch/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>src_components_Switch});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_@swc+core@1.10.16_@swc+helpers@0.5.15__esbuild@0.24.2_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_@swc+core@1.10.16_@swc+helpers@0.5.15__esbuild@0.24.2_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_@swc+core@1.10.16_@swc+helpers@0.5.15__esbuild@0.24.2_/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_@swc+core@1.10.16_@swc+helpers@0.5.15__esbuild@0.24.2_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_@swc+core@1.10.16_@swc+helpers@0.5.15__esbuild@0.24.2_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_@swc+core@1.10.16_@swc+helpers@0.5.15__esbuild@0.24.2_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Switch=__webpack_require__("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1_@swc+core@1.10.16_@swc+helpers@0.5.15__esbuild@0.24.2_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.5.2_typescript@4.9.5_webpack@5.97.1_@swc+core@1.10.16_@s_44067cab36bad345883acf3563389642/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./packages/react/src/components/Switch/index.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Switch.A,options);Switch.A&&Switch.A.locals&&Switch.A.locals;var react=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),useId=__webpack_require__("./node_modules/.pnpm/@react-aria+utils@3.27.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@react-aria/utils/dist/useId.mjs"),SwitchInput=__webpack_require__("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1_@swc+core@1.10.16_@swc+helpers@0.5.15__esbuild@0.24.2_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.5.2_typescript@4.9.5_webpack@5.97.1_@swc+core@1.10.16_@s_44067cab36bad345883acf3563389642/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./packages/react/src/components/Switch/SwitchInput/index.css"),SwitchInput_options={};SwitchInput_options.styleTagTransform=styleTagTransform_default(),SwitchInput_options.setAttributes=setAttributesWithoutAttributes_default(),SwitchInput_options.insert=insertBySelector_default().bind(null,"head"),SwitchInput_options.domAPI=styleDomAPI_default(),SwitchInput_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(SwitchInput.A,SwitchInput_options);SwitchInput.A&&SwitchInput.A.locals&&SwitchInput.A.locals;var useClassNames=__webpack_require__("./packages/react/src/_lib/useClassNames.ts");const SwitchInput_SwitchInput=(0,react.forwardRef)((function SwitchInput({onChange,className,...props},ref){const handleChange=(0,react.useCallback)((e=>{const el=e.currentTarget;onChange?.(el.checked)}),[onChange]),classNames=(0,useClassNames.U)("charcoal-switch-input",className);return(0,jsx_runtime.jsx)("input",{ref,className:classNames,type:"checkbox",onChange:handleChange,...props})})),components_Switch_SwitchInput=SwitchInput_SwitchInput;SwitchInput_SwitchInput.__docgenInfo={description:"",methods:[],displayName:"SwitchInput"};const SwitchWithLabel=react.memo((function SwitchWithLabel({children,className,disabled,id,input}){const classNames=(0,useClassNames.U)("charcoal-switch__label",className);return(0,jsx_runtime.jsxs)("label",{htmlFor:id,className:classNames,"aria-disabled":disabled,children:[input,(0,jsx_runtime.jsx)("div",{className:"charcoal-switch__label_div",children})]})}));SwitchWithLabel.__docgenInfo={description:"",methods:[],displayName:"SwitchWithLabel",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},input:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Switch_Switch=(0,react.forwardRef)((function Switch({children,onChange,disabled,className,id,...props},ref){const htmlId=(0,useId.Bi)(id),noChildren=void 0===children,input=(0,jsx_runtime.jsx)(components_Switch_SwitchInput,{...props,disabled,className:noChildren?className:void 0,id:htmlId,onChange,ref,role:"switch",type:"checkbox"});return noChildren?input:(0,jsx_runtime.jsx)(SwitchWithLabel,{className,disabled,id:htmlId,input,children})})),src_components_Switch=(0,react.memo)(Switch_Switch);Switch_Switch.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""}}}}}]);