"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[492],{"./packages/tailwind-config/src/docs/colors/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O9:()=>colors});var _config_theme_colors,colors=null!==(_config_theme_colors=__webpack_require__("./packages/tailwind-config/src/index.ts").v.theme.colors)&&void 0!==_config_theme_colors?_config_theme_colors:{}},"./packages/tailwind-config/src/docs/colors/TextBgColor.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,default:()=>TextBgColor_story});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),colors=__webpack_require__("./packages/tailwind-config/src/docs/colors/index.ts"),TextBgColor=function(param){var textColorClass=param.textColorClass,bgColorClass=param.bgColorClass;return(0,jsx_runtime.jsx)("div",{className:"".concat(bgColorClass," p-64 max-w-2xl"),children:(0,jsx_runtime.jsx)("p",{className:"typography-20 ".concat(textColorClass),children:"charcoal はピクシブ株式会社のデザインシステムです。ここでは特に、Web フロントエンドの実装に用いる npm パッケージ集のことを言います。Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at odio bibendum nisl mollis eleifend et quis turpis. Quisque dignissim porta justo ut convallis.dipiscing elit."})})};TextBgColor.__docgenInfo={description:"",methods:[],displayName:"TextBgColor"};const TextBgColor_story={title:"tailwind-config/Colors/Text bg color",component:TextBgColor,argTypes:{textColorClass:{options:Object.keys(colors.O9).map((function(color){return"text-".concat(color)})),control:{type:"select"}},bgColorClass:{options:Object.keys(colors.O9).map((function(color){return"bg-".concat(color)})),control:{type:"select"}}}};var Playground={args:{textColorClass:"text-text1",bgColorClass:"bg-background1"},render:function(param){var bgColorClass=param.bgColorClass,textColorClass=param.textColorClass;return(0,jsx_runtime.jsx)(TextBgColor,{bgColorClass,textColorClass})}};Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  args: {\n    textColorClass: 'text-text1',\n    bgColorClass: 'bg-background1'\n  },\n  render: ({\n    bgColorClass,\n    textColorClass\n  }) => <TextBgColor bgColorClass={bgColorClass} textColorClass={textColorClass} />\n}",...Playground.parameters?.docs?.source}}}}}]);