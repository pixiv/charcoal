"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[2896],{"./packages/react/src/components/TextField/TextField.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Affix:()=>Affix,AssistiveText:()=>AssistiveText,Default:()=>Default,Disabled:()=>Disabled,Invalid:()=>Invalid,Label:()=>Label,Number:()=>Number,Placeholder:()=>Placeholder,Prefix:()=>Prefix,ReadOnly:()=>ReadOnly,RequiredText:()=>RequiredText,ShowCount:()=>ShowCount,SubLabel:()=>SubLabel,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Clickable__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/components/Clickable/index.tsx"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/components/TextField/index.tsx"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _templateObject(){var data=function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  display: flex;\n  align-items: center;\n  color: ",";\n"]);return _templateObject=function _templateObject(){return data},data}const __WEBPACK_DEFAULT_EXPORT__={title:"react/TextField",component:___WEBPACK_IMPORTED_MODULE_2__.ZP,parameters:{layout:"centered"}};var Default={args:{showLabel:!1,assistiveText:"",disabled:!1,required:!1,invalid:!1,readOnly:!1,label:"Label",requiredText:"*必須",subLabel:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Clickable__WEBPACK_IMPORTED_MODULE_3__.Z,{children:"Text Link"}),placeholder:"TextField"},render:function render(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.ZP,_object_spread({},args))}},Label={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.ZP,{showLabel:!0,label:"Label"})}},Placeholder={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.ZP,{label:"Label",placeholder:"Placeholder"})}},RequiredText={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.ZP,{label:"Label",showLabel:!0,required:!0,requiredText:"*必須"})}},AssistiveText={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.ZP,{label:"Label",assistiveText:"説明が入ります"})}},SubLabel={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.ZP,{label:"Label",subLabel:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Clickable__WEBPACK_IMPORTED_MODULE_3__.Z,{children:"Text Link"})})}},ShowCount={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.ZP,{label:"Label",showCount:!0,maxLength:100})}},Disabled={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.ZP,{label:"Label",disabled:!0})}},Invalid={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.ZP,{label:"Label",invalid:!0,assistiveText:"エラーメッセージ"})}},ReadOnly={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.ZP,{label:"Label",readOnly:!0,value:"読み取り専用"})}},Affix={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.ZP,{label:"Label",prefix:"/home/john/",suffix:".png"})}},PrefixIconWrap=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.div(_templateObject(),(function(param){return param.theme.color.text3})),Prefix={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.ZP,{label:"Label",prefix:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PrefixIconWrap,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pixiv-icon",{name:"16/Search"})})})}},Number={render:function Render(args){var _useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),2),count=_useState[0],setCount=_useState[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.ZP,_object_spread_props(_object_spread({},args),{type:"number",value:count.toString(),onChange:function(value){return setCount(parseInt(value))},onWheel:function(e){e.currentTarget.blur(),e.stopPropagation()}}))}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    showLabel: false,\n    assistiveText: '',\n    disabled: false,\n    required: false,\n    invalid: false,\n    readOnly: false,\n    label: 'Label',\n    requiredText: '*必須',\n    subLabel: <Clickable>Text Link</Clickable>,\n    placeholder: 'TextField'\n  },\n  render(args) {\n    return <TextField {...args} />;\n  }\n}",...Default.parameters?.docs?.source}}},Label.parameters={...Label.parameters,docs:{...Label.parameters?.docs,source:{originalSource:'{\n  render() {\n    return <TextField showLabel label="Label" />;\n  }\n}',...Label.parameters?.docs?.source}}},Placeholder.parameters={...Placeholder.parameters,docs:{...Placeholder.parameters?.docs,source:{originalSource:'{\n  render() {\n    return <TextField label="Label" placeholder="Placeholder" />;\n  }\n}',...Placeholder.parameters?.docs?.source}}},RequiredText.parameters={...RequiredText.parameters,docs:{...RequiredText.parameters?.docs,source:{originalSource:'{\n  render() {\n    return <TextField label="Label" showLabel required requiredText="*必須" />;\n  }\n}',...RequiredText.parameters?.docs?.source}}},AssistiveText.parameters={...AssistiveText.parameters,docs:{...AssistiveText.parameters?.docs,source:{originalSource:'{\n  render() {\n    return <TextField label="Label" assistiveText="説明が入ります" />;\n  }\n}',...AssistiveText.parameters?.docs?.source}}},SubLabel.parameters={...SubLabel.parameters,docs:{...SubLabel.parameters?.docs,source:{originalSource:'{\n  render() {\n    return <TextField label="Label" subLabel={<Clickable>Text Link</Clickable>} />;\n  }\n}',...SubLabel.parameters?.docs?.source}}},ShowCount.parameters={...ShowCount.parameters,docs:{...ShowCount.parameters?.docs,source:{originalSource:'{\n  render() {\n    return <TextField label="Label" showCount maxLength={100} />;\n  }\n}',...ShowCount.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render() {\n    return <TextField label="Label" disabled />;\n  }\n}',...Disabled.parameters?.docs?.source}}},Invalid.parameters={...Invalid.parameters,docs:{...Invalid.parameters?.docs,source:{originalSource:'{\n  render() {\n    return <TextField label="Label" invalid assistiveText="エラーメッセージ" />;\n  }\n}',...Invalid.parameters?.docs?.source}}},ReadOnly.parameters={...ReadOnly.parameters,docs:{...ReadOnly.parameters?.docs,source:{originalSource:'{\n  render() {\n    return <TextField label="Label" readOnly value="読み取り専用" />;\n  }\n}',...ReadOnly.parameters?.docs?.source}}},Affix.parameters={...Affix.parameters,docs:{...Affix.parameters?.docs,source:{originalSource:'{\n  render() {\n    return <TextField label="Label" prefix="/home/john/" suffix=".png" />;\n  }\n}',...Affix.parameters?.docs?.source}}},Prefix.parameters={...Prefix.parameters,docs:{...Prefix.parameters?.docs,source:{originalSource:'{\n  render() {\n    return <TextField label="Label" prefix={<PrefixIconWrap>\n            <pixiv-icon name="16/Search" />\n          </PrefixIconWrap>} />;\n  }\n}',...Prefix.parameters?.docs?.source}}},Number.parameters={...Number.parameters,docs:{...Number.parameters?.docs,source:{originalSource:'{\n  render: function Render(args) {\n    const [count, setCount] = useState(0);\n    return <TextField {...args} type="number" value={count.toString()} onChange={value => setCount(parseInt(value))} onWheel={e => {\n      e.currentTarget.blur();\n      e.stopPropagation();\n    }} />;\n  }\n}',...Number.parameters?.docs?.source}}}}}]);