"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[7629],{"./node_modules/.pnpm/@storybook+addon-actions@8.5.5_storybook@8.5.5_prettier@3.5.0_/node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./packages/react/src/components/MultiSelect/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Invalid:()=>Invalid,Overlay:()=>Overlay,Playground:()=>Playground,default:()=>index_story});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),warning=__webpack_require__("./node_modules/.pnpm/warning@4.0.3/node_modules/warning/warning.js"),warning_default=__webpack_require__.n(warning);const MultiSelectGroupContext=(0,react.createContext)({name:void 0,selected:[],disabled:!1,readonly:!1,invalid:!1,onChange(){throw new Error("Cannot find `onChange()` handler. Perhaps you forgot to wrap it with `<MultiSelectGroup />` ?")}});var Icon=__webpack_require__("./packages/react/src/components/Icon/index.tsx"),useClassNames=__webpack_require__("./packages/react/src/_lib/useClassNames.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_@swc+core@1.10.16_@swc+helpers@0.5.15__esbuild@0.24.2_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_@swc+core@1.10.16_@swc+helpers@0.5.15__esbuild@0.24.2_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_@swc+core@1.10.16_@swc+helpers@0.5.15__esbuild@0.24.2_/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_@swc+core@1.10.16_@swc+helpers@0.5.15__esbuild@0.24.2_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_@swc+core@1.10.16_@swc+helpers@0.5.15__esbuild@0.24.2_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_@swc+core@1.10.16_@swc+helpers@0.5.15__esbuild@0.24.2_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),MultiSelect=__webpack_require__("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1_@swc+core@1.10.16_@swc+helpers@0.5.15__esbuild@0.24.2_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.5.2_typescript@4.9.5_webpack@5.97.1_@swc+core@1.10.16_@s_44067cab36bad345883acf3563389642/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./packages/react/src/components/MultiSelect/index.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(MultiSelect.A,options);MultiSelect.A&&MultiSelect.A.locals&&MultiSelect.A.locals;const MultiSelect_MultiSelect=(0,react.forwardRef)((function MultiSelectInner({value,disabled=!1,onChange,variant="default",className,children},ref){const{name,selected,disabled:parentDisabled,readonly,invalid,onChange:parentOnChange}=(0,react.useContext)(MultiSelectGroupContext);warning_default()(void 0!==name,'"name" is not Provided for <MultiSelect>. Perhaps you forgot to wrap with <MultiSelectGroup> ?');const isSelected=selected.includes(value),isDisabled=disabled||parentDisabled||readonly,handleChange=(0,react.useCallback)((event=>{event.currentTarget instanceof HTMLInputElement&&(onChange&&onChange({value,selected:event.currentTarget.checked}),parentOnChange({value,selected:event.currentTarget.checked}))}),[onChange,parentOnChange,value]),classNames=(0,useClassNames.U)("charcoal-multi-select",className);return(0,jsx_runtime.jsxs)("label",{"aria-disabled":isDisabled,className:classNames,children:[(0,jsx_runtime.jsx)("input",{className:"charcoal-multi-select-input",name,value,type:"checkbox",checked:isSelected,disabled:isDisabled,onChange:handleChange,"data-overlay":"overlay"===variant,"aria-invalid":invalid,ref}),(0,jsx_runtime.jsx)("div",{className:"charcoal-multi-select-overlay","data-overlay":"overlay"===variant,"aria-invalid":invalid,"aria-hidden":!0,children:(0,jsx_runtime.jsx)(Icon.A,{name:"24/Check","unsafe-non-guideline-scale":16/24})}),Boolean(children)&&(0,jsx_runtime.jsx)("div",{className:"charcoal-multi-select-label",children})]})})),src_components_MultiSelect=(0,react.memo)(MultiSelect_MultiSelect);function MultiSelectGroup({className,style,name,label,selected,onChange,disabled=!1,readonly=!1,invalid=!1,children}){const handleChange=(0,react.useCallback)((payload=>{const index=selected.indexOf(payload.value);payload.selected?index<0&&onChange([...selected,payload.value]):index>=0&&onChange([...selected.slice(0,index),...selected.slice(index+1)])}),[onChange,selected]);return(0,jsx_runtime.jsx)(MultiSelectGroupContext.Provider,{value:{name,selected:Array.from(new Set(selected)),disabled,readonly,invalid,onChange:handleChange},children:(0,jsx_runtime.jsx)("div",{className,style,"aria-label":label,"data-testid":"SelectGroup",children})})}MultiSelect_MultiSelect.__docgenInfo={description:"",methods:[],displayName:"MultiSelect",props:{disabled:{defaultValue:{value:"false",computed:!1},required:!1},variant:{defaultValue:{value:"'default'",computed:!1},required:!1}}},MultiSelectGroup.__docgenInfo={description:"",methods:[],displayName:"MultiSelectGroup",props:{disabled:{defaultValue:{value:"false",computed:!1},required:!1},readonly:{defaultValue:{value:"false",computed:!1},required:!1},invalid:{defaultValue:{value:"false",computed:!1},required:!1}}};var dist=__webpack_require__("./node_modules/.pnpm/@storybook+addon-actions@8.5.5_storybook@8.5.5_prettier@3.5.0_/node_modules/@storybook/addon-actions/dist/index.mjs");const StyledMultiSelectGroup=props=>(0,jsx_runtime.jsx)(MultiSelectGroup,{style:{display:"grid",gridTemplateColumns:"1fr",gap:"8px"},...props}),index_story={title:"react/MultiSelect",component:src_components_MultiSelect,argTypes:{variant:{control:{type:"inline-radio",options:["default","overlay"]}}},args:{variant:"default"}},Basic={render:function Render(args){return(0,jsx_runtime.jsx)(StyledMultiSelectGroup,{name:"name",label:"label",onChange:(0,dist.XI)("click"),selected:["選択肢1","選択肢3"],children:["選択肢1","選択肢2","選択肢3","選択肢4"].map((option=>(0,react.createElement)(src_components_MultiSelect,{...args,value:option,key:option},option)))})}},Invalid={render:function Render(args){return(0,jsx_runtime.jsx)(StyledMultiSelectGroup,{name:"name",label:"label",onChange:(0,dist.XI)("click"),selected:[],invalid:!0,children:["選択肢1","選択肢2","選択肢3","選択肢4"].map((option=>(0,react.createElement)(src_components_MultiSelect,{...args,value:option,key:option},option)))})}},Overlay={render:function Render(args){return(0,jsx_runtime.jsx)(StyledMultiSelectGroup,{name:"name",label:"label",onChange:(0,dist.XI)("click"),selected:[],children:["選択肢1","選択肢2","選択肢3","選択肢4"].map((option=>(0,react.createElement)(src_components_MultiSelect,{...args,value:option,key:option},option)))})},args:{variant:"overlay"}},Playground={render:function Render(args){const[selected,setSelected]=(0,react.useState)([]);return(0,jsx_runtime.jsx)(StyledMultiSelectGroup,{name:"",label:"",onChange:setSelected,selected,children:[1,2,3,4].map((idx=>(0,react.createElement)(src_components_MultiSelect,{...args,value:`選択肢${idx}`,key:idx,children:["選択肢",idx]})))})}};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  render: function Render(args) {\n    const options = ['選択肢1', '選択肢2', '選択肢3', '選択肢4'];\n    return <StyledMultiSelectGroup name=\"name\" label=\"label\" onChange={action('click')} selected={['選択肢1', '選択肢3']}>\n        {options.map(option => <MultiSelect {...args} value={option} key={option}>\n            {option}\n          </MultiSelect>)}\n      </StyledMultiSelectGroup>;\n  }\n}",...Basic.parameters?.docs?.source}}},Invalid.parameters={...Invalid.parameters,docs:{...Invalid.parameters?.docs,source:{originalSource:"{\n  render: function Render(args) {\n    const options = ['選択肢1', '選択肢2', '選択肢3', '選択肢4'];\n    return <StyledMultiSelectGroup name=\"name\" label=\"label\" onChange={action('click')} selected={[]} invalid>\n        {options.map(option => <MultiSelect {...args} value={option} key={option}>\n            {option}\n          </MultiSelect>)}\n      </StyledMultiSelectGroup>;\n  }\n}",...Invalid.parameters?.docs?.source}}},Overlay.parameters={...Overlay.parameters,docs:{...Overlay.parameters?.docs,source:{originalSource:"{\n  render: function Render(args) {\n    const options = ['選択肢1', '選択肢2', '選択肢3', '選択肢4'];\n    return <StyledMultiSelectGroup name=\"name\" label=\"label\" onChange={action('click')} selected={[]}>\n        {options.map(option => <MultiSelect {...args} value={option} key={option}>\n            {option}\n          </MultiSelect>)}\n      </StyledMultiSelectGroup>;\n  },\n  args: {\n    variant: 'overlay'\n  }\n}",...Overlay.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: function Render(args) {\n    const [selected, setSelected] = useState<string[]>([]);\n    return <StyledMultiSelectGroup name="" label="" onChange={setSelected} selected={selected}>\n        {[1, 2, 3, 4].map(idx => <MultiSelect {...args} value={`選択肢${idx}`} key={idx}>\n            選択肢{idx}\n          </MultiSelect>)}\n      </StyledMultiSelectGroup>;\n  }\n}',...Playground.parameters?.docs?.source}}}},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1_@swc+core@1.10.16_@swc+helpers@0.5.15__esbuild@0.24.2_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.5.2_typescript@4.9.5_webpack@5.97.1_@swc+core@1.10.16_@s_44067cab36bad345883acf3563389642/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./packages/react/src/components/MultiSelect/index.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_swc_core_1_10_16_swc_helpers_0_5_15_esbuild_0_24_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1_@swc+core@1.10.16_@swc+helpers@0.5.15__esbuild@0.24.2_/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_swc_core_1_10_16_swc_helpers_0_5_15_esbuild_0_24_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_swc_core_1_10_16_swc_helpers_0_5_15_esbuild_0_24_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_swc_core_1_10_16_swc_helpers_0_5_15_esbuild_0_24_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1_@swc+core@1.10.16_@swc+helpers@0.5.15__esbuild@0.24.2_/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_swc_core_1_10_16_swc_helpers_0_5_15_esbuild_0_24_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_swc_core_1_10_16_swc_helpers_0_5_15_esbuild_0_24_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".charcoal-multi-select {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n  gap: 4px;\n}\n\n.charcoal-multi-select:disabled,\n.charcoal-multi-select[aria-disabled]:not([aria-disabled='false']) {\n  opacity: 0.32;\n  cursor: default;\n}\n\n.charcoal-multi-select-label {\n  display: flow-root;\n  align-items: center;\n  font-size: 14px;\n  line-height: 22px;\n  color: var(--charcoal-text2);\n}\n\n.charcoal-multi-select-label::before {\n  display: block;\n  width: 0;\n  height: 0;\n  content: '';\n  margin-top: -4px;\n}\n\n.charcoal-multi-select-label::after {\n  display: block;\n  width: 0;\n  height: 0;\n  content: '';\n  margin-bottom: -4px;\n}\n\n.charcoal-multi-select-input[type='checkbox'] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  display: block;\n  width: 20px;\n  height: 20px;\n  margin: 0;\n  background-color: var(--charcoal-text3);\n  border-radius: 999999px;\n  transition: 0.2s background-color, 0.2s box-shadow;\n}\n\n.charcoal-multi-select-input[type='checkbox']:checked {\n  background-color: var(--charcoal-brand);\n}\n\n.charcoal-multi-select-input[type='checkbox']:focus {\n  outline: none;\n  box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);\n}\n\n.charcoal-multi-select-input[type='checkbox']:focus-visible {\n  box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);\n}\n\n.charcoal-multi-select-input[type='checkbox']:focus:not(:focus-visible) {\n  box-shadow: none;\n}\n\n.charcoal-multi-select-input[type='checkbox']:hover:not(:disabled):not(\n    [aria-disabled]\n  ),\n.charcoal-multi-select-input[type='checkbox']:hover[aria-disabled='false'] {\n  background-color: var(--charcoal-text3-hover);\n}\n\n.charcoal-multi-select-input[type='checkbox']:active:not(:disabled):not(\n    [aria-disabled]\n  ),\n.charcoal-multi-select-input[type='checkbox']:active[aria-disabled='false'] {\n  background-color: var(--charcoal-text3-press);\n}\n\n.charcoal-multi-select-input[type='checkbox']:checked:hover:not(:disabled):not(\n    [aria-disabled]\n  ),\n.charcoal-multi-select-input[type='checkbox']:checked:hover[aria-disabled='false'] {\n  background-color: var(--charcoal-brand-hover);\n}\n\n.charcoal-multi-select-input[type='checkbox']:checked:active:not(:disabled):not(\n    [aria-disabled]\n  ),\n.charcoal-multi-select-input[type='checkbox']:checked:active[aria-disabled='false'] {\n  background-color: var(--charcoal-brand-press);\n}\n\n.charcoal-multi-select-input[aria-invalid='true'][data-overlay='false']:not(\n    :disabled\n  ):not([aria-disabled]) {\n  box-shadow: 0 0 0 4px rgba(255, 43, 0, 0.32);\n}\n\n.charcoal-multi-select-input[aria-invalid='true'][data-overlay='false'][aria-disabled='false'] {\n  box-shadow: 0 0 0 4px rgba(255, 43, 0, 0.32);\n}\n\n.charcoal-multi-select-input[data-overlay='true'] {\n  background-color: var(--charcoal-surface4);\n}\n\n.charcoal-multi-select-overlay {\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  border-radius: 999999px;\n  color: var(--charcoal-text5);\n  transition: 0.2s box-shadow;\n}\n\n.charcoal-multi-select-overlay[aria-invalid='true'][data-overlay='true']:not(\n    :disabled\n  ):not([aria-disabled]) {\n  box-shadow: 0 0 0 4px rgba(255, 43, 0, 0.32);\n}\n\n.charcoal-multi-select-overlay[aria-invalid='true'][data-overlay='true'][aria-disabled='false'] {\n  box-shadow: 0 0 0 4px rgba(255, 43, 0, 0.32);\n}\n\n.charcoal-multi-select-overlay[data-overlay='true'] {\n  border-color: var(--charcoal-text5);\n  border-width: 2px;\n  border-style: solid;\n}\n","",{version:3,sources:["webpack://./packages/react/src/components/MultiSelect/index.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,+BAA+B;EAC/B,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,QAAQ;AACV;;AAEA;;EAEE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,4BAA4B;AAC9B;;AAEA;EACE,cAAc;EACd,QAAQ;EACR,SAAS;EACT,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,QAAQ;EACR,SAAS;EACT,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,wBAAgB;KAAhB,qBAAgB;UAAhB,gBAAgB;EAChB,cAAc;EACd,WAAW;EACX,YAAY;EACZ,SAAS;EACT,uCAAuC;EACvC,uBAAuB;EACvB,kDAAkD;AACpD;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,aAAa;EACb,6CAA6C;AAC/C;;AAEA;EACE,6CAA6C;AAC/C;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;;;EAIE,6CAA6C;AAC/C;;AAEA;;;;EAIE,6CAA6C;AAC/C;;AAEA;;;;EAIE,6CAA6C;AAC/C;;AAEA;;;;EAIE,6CAA6C;AAC/C;;AAEA;;;EAGE,4CAA4C;AAC9C;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,4BAA4B;EAC5B,2BAA2B;AAC7B;;AAEA;;;EAGE,4CAA4C;AAC9C;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,mCAAmC;EACnC,iBAAiB;EACjB,mBAAmB;AACrB",sourcesContent:[".charcoal-multi-select {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n  gap: 4px;\n}\n\n.charcoal-multi-select:disabled,\n.charcoal-multi-select[aria-disabled]:not([aria-disabled='false']) {\n  opacity: 0.32;\n  cursor: default;\n}\n\n.charcoal-multi-select-label {\n  display: flow-root;\n  align-items: center;\n  font-size: 14px;\n  line-height: 22px;\n  color: var(--charcoal-text2);\n}\n\n.charcoal-multi-select-label::before {\n  display: block;\n  width: 0;\n  height: 0;\n  content: '';\n  margin-top: -4px;\n}\n\n.charcoal-multi-select-label::after {\n  display: block;\n  width: 0;\n  height: 0;\n  content: '';\n  margin-bottom: -4px;\n}\n\n.charcoal-multi-select-input[type='checkbox'] {\n  appearance: none;\n  display: block;\n  width: 20px;\n  height: 20px;\n  margin: 0;\n  background-color: var(--charcoal-text3);\n  border-radius: 999999px;\n  transition: 0.2s background-color, 0.2s box-shadow;\n}\n\n.charcoal-multi-select-input[type='checkbox']:checked {\n  background-color: var(--charcoal-brand);\n}\n\n.charcoal-multi-select-input[type='checkbox']:focus {\n  outline: none;\n  box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);\n}\n\n.charcoal-multi-select-input[type='checkbox']:focus-visible {\n  box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);\n}\n\n.charcoal-multi-select-input[type='checkbox']:focus:not(:focus-visible) {\n  box-shadow: none;\n}\n\n.charcoal-multi-select-input[type='checkbox']:hover:not(:disabled):not(\n    [aria-disabled]\n  ),\n.charcoal-multi-select-input[type='checkbox']:hover[aria-disabled='false'] {\n  background-color: var(--charcoal-text3-hover);\n}\n\n.charcoal-multi-select-input[type='checkbox']:active:not(:disabled):not(\n    [aria-disabled]\n  ),\n.charcoal-multi-select-input[type='checkbox']:active[aria-disabled='false'] {\n  background-color: var(--charcoal-text3-press);\n}\n\n.charcoal-multi-select-input[type='checkbox']:checked:hover:not(:disabled):not(\n    [aria-disabled]\n  ),\n.charcoal-multi-select-input[type='checkbox']:checked:hover[aria-disabled='false'] {\n  background-color: var(--charcoal-brand-hover);\n}\n\n.charcoal-multi-select-input[type='checkbox']:checked:active:not(:disabled):not(\n    [aria-disabled]\n  ),\n.charcoal-multi-select-input[type='checkbox']:checked:active[aria-disabled='false'] {\n  background-color: var(--charcoal-brand-press);\n}\n\n.charcoal-multi-select-input[aria-invalid='true'][data-overlay='false']:not(\n    :disabled\n  ):not([aria-disabled]) {\n  box-shadow: 0 0 0 4px rgba(255, 43, 0, 0.32);\n}\n\n.charcoal-multi-select-input[aria-invalid='true'][data-overlay='false'][aria-disabled='false'] {\n  box-shadow: 0 0 0 4px rgba(255, 43, 0, 0.32);\n}\n\n.charcoal-multi-select-input[data-overlay='true'] {\n  background-color: var(--charcoal-surface4);\n}\n\n.charcoal-multi-select-overlay {\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  border-radius: 999999px;\n  color: var(--charcoal-text5);\n  transition: 0.2s box-shadow;\n}\n\n.charcoal-multi-select-overlay[aria-invalid='true'][data-overlay='true']:not(\n    :disabled\n  ):not([aria-disabled]) {\n  box-shadow: 0 0 0 4px rgba(255, 43, 0, 0.32);\n}\n\n.charcoal-multi-select-overlay[aria-invalid='true'][data-overlay='true'][aria-disabled='false'] {\n  box-shadow: 0 0 0 4px rgba(255, 43, 0, 0.32);\n}\n\n.charcoal-multi-select-overlay[data-overlay='true'] {\n  border-color: var(--charcoal-text5);\n  border-width: 2px;\n  border-style: solid;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./packages/react/src/_lib/useClassNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>useClassNames});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function useClassNames(...classNames){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>classNames.filter((v=>v)).join(" ")),[classNames])}},"./packages/react/src/components/Icon/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");__webpack_require__("./packages/icons/dist/index.esm.js");const Icon=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function IconInner({name,scale,unsafeNonGuidelineScale,className,...rest},ref){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pixiv-icon",{ref,name,scale,"unsafe-non-guideline-scale":unsafeNonGuidelineScale,class:className,...rest})})),__WEBPACK_DEFAULT_EXPORT__=Icon;Icon.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{unsafeNonGuidelineScale:{required:!1,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}}}}]);