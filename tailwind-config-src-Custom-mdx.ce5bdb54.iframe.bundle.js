"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[3883],{"./node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./packages/tailwind-config/src/Custom.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),_home_runner_work_charcoal_charcoal_node_modules_pnpm_storybook_addon_docs_8_5_5_types_react_18_3_18_storybook_8_5_5_prettier_2_8_8_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@storybook+addon-docs@8.5.5_@types+react@18.3.18_storybook@8.5.5_prettier@2.8.8_/node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){const _components={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,_home_runner_work_charcoal_charcoal_node_modules_pnpm_storybook_addon_docs_8_5_5_types_react_18_3_18_storybook_8_5_5_prettier_2_8_8_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.W8,{title:"tailwind-config/Custom"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"カスタマイズする",children:"カスタマイズする"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"createTailwindConfig"})," を利用することでお使いの環境、色などに適応させることができます。"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-js",children:"const { light, dark } = require('@charcoal-ui/theme')\nconst { createTailwindConfig } = require('@charcoal-ui/tailwind-config')\n\n/**\n * @type {import('tailwindcss').Config}\n */\nmodule.exports = {\n  darkMode: false,\n  content: ['./src/**/*.tsx', './src/**/*.html'],\n  presets: [\n    createTailwindConfig({\n      version: 'v3',\n      theme: {\n        ':root': light,\n        '@media (prefers-color-scheme: dark)': dark,\n      },\n    }),\n  ],\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"createTailwindConfig"})," には以下のオプションを渡すことができます。"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.table,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.thead,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th,{children:"name"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th,{children:"type"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th,{children:"description"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tbody,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"theme"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Record<string, Theme>"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"条件ごとの色の値のマッピングを渡します。 :root は必須のキーです。"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"version"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"v1 | v2 | v3"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"Tailwind.css のバージョン系統を指定します。色のキー名に使われる DEFAULT と default などの違いを内部で吸収します。"})]})]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"themamap-について",children:"ThemaMap について"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["charcoal は Tailwind.css の通常のダークモード (",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"dark:○○"}),"のようなクラス) をサポートしません。\nなぜなら charcoal における「色」は、見にくい事もなく light テーマと dark テーマで違うカラーコードであり得るからです。\nそこで登場するのが ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"@charcoal-ui/tailwind-config"})," で使える ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"theme"})," というオプションを受け取ります。"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["以下の例は ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:":root"})," （つまり通常ケース）では light テーマで、システムの設定がダークモードである場合は dark テーマを使用するものです。"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-js",children:"createTailwindConfig({\n  version: 'v3',\n  theme: {\n    ':root': light,\n    '@media (prefers-color-scheme: dark)': dark,\n  },\n})\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"theme"})," オプションを渡す設定の場合、ダークテーマ対応されないサービスであっても ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:":root"})," に必ず自身のプロダクトのカラーテーマを渡す必要があります。"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"theme"})," でこのように書くと、このような CSS Variables を生成します。"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-css",children:"/* 以下はイメージです */\n\n:root {\n  --tailwind-color-background1: #fff;\n  --tailwind-color-background2: #f5f5f5;\n  /* ... */\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --tailwind-color-background1: #1f1f1f;\n    --tailwind-color-background2: #000000;\n    /* ... */\n  }\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["このとき、以下のように置く必要はありません。\nキーが ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"@media"})," で始まる場合はビルド時に ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:":root"})," が補われます。"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-js",children:"{\n  theme: {\n    // これは間違い！！\n    '@media (prefers-color-scheme: dark)': {\n        ':root': dark\n    },\n\n    // 正しくはこう\n    '@media (prefers-color-scheme: dark)': dark\n  }\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"theme"})," のキーとして通常のセレクタを指定することもできます。\nこれによりダークモードの切り替えが DOM の状態に依存するケースにも対応します。",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"localStorage"})," などで JS での切り替えを実装しているアプリケーションはこのような手法が好ましいでしょう。"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-js",children:"createTailwindConfig({\n  version: 'v3',\n  theme: {\n    ':root': light,\n    'html[data-theme=\"dark\"]': dark,\n  },\n})\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-css",children:"/* 以下はイメージです */\n\n:root {\n  --tailwind-color-background1: #fff;\n  --tailwind-color-background2: #f5f5f5;\n  /* ... */\n}\n\nhtml[data-theme='dark'] {\n  --tailwind-color-background1: #1f1f1f;\n  --tailwind-color-background2: #000000;\n  /* ... */\n}\n"})})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_charcoal_charcoal_node_modules_pnpm_storybook_addon_docs_8_5_5_types_react_18_3_18_storybook_8_5_5_prettier_2_8_8_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}]);