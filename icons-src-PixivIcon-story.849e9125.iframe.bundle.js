"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[8608],{"./packages/icons/src/PixivIcon.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,RawIconFile:()=>RawIconFile,WithAttributes:()=>WithAttributes,WithUnsafe:()=>WithUnsafe,default:()=>PixivIcon_story});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),styled_components_browser_esm=__webpack_require__("./node_modules/.pnpm/styled-components@5.3.11_@babel+core@7.26.10_react-dom@18.3.1_react@18.3.1__react-is@18.3.1_react@18.3.1/node_modules/styled-components/dist/styled-components.browser.esm.js");const TestIconThatNeverExists_namespaceObject=__webpack_require__.p+"static/media/TestIconThatNeverExists.9a1974a9.svg";var index_esm=__webpack_require__("./packages/icons/dist/index.esm.js"),src=__webpack_require__("./packages/icon-files/src/index.js");const KNOWN_ICON_FILES=Object.keys(src.A);index_esm.mq.extend({"16/TestIconThatNeverExists":TestIconThatNeverExists_namespaceObject,"16/TestIconFileThatNeverExists":()=>__webpack_require__.e(4739).then(__webpack_require__.bind(__webpack_require__,"./packages/icons/src/16/TestIconThatNeverExists.js")).then((m=>m.default))});const PixivIcon_story={title:"Icons/PixivIcon (<pixiv-icon>)",argTypes:{color:{control:{type:"color"}},name:{control:{type:"select",options:[...KNOWN_ICON_FILES,"16/TestIconThatNeverExists"]}},scale:{control:{type:"select",options:[1,2,3]}}},parameters:{storyshots:{disable:!0}},render:({scale,color})=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object.entries(groupedIcons).map((([groupName,icons])=>(0,jsx_runtime.jsxs)(Group,{children:[(0,jsx_runtime.jsxs)(Heading,{children:[groupName," (scale: ",scale,")"]}),(0,jsx_runtime.jsx)(Grid,{children:icons.map((name=>(0,jsx_runtime.jsxs)(IconDef,{color,children:[(0,jsx_runtime.jsx)("pixiv-icon",{name,scale},scale),(0,jsx_runtime.jsx)("div",{children:name})]},name)))})]},groupName))),(0,jsx_runtime.jsx)(Global,{})]})},groupedIcons=KNOWN_ICON_FILES.reduce(((map,icon)=>{const[prefix]=icon.split("/");return prefix in map?map[prefix].push(icon):map[prefix]=[icon],map}),{}),Global=styled_components_browser_esm.DU`
  :root {
    font-family: Helvetica, Arial, sans-serif;
    color: rgba(#000, 0.88);
  }

  .icon-class {
    transform: rotate(45deg);
  }
`,Grid=styled_components_browser_esm.Ay.div`
  display: grid;
  gap: 8px;
  grid-template-columns: 1fr 1fr 1fr;
`,Group=styled_components_browser_esm.Ay.div`
  & + & {
    margin-top: 64px;
  }
`,IconDef=styled_components_browser_esm.Ay.div`
  color: ${({color})=>color??"#000000"};
  display: inline-flex;
  align-items: center;
  min-height: 32px;

  pixiv-icon {
    display: block;
    flex-shrink: 0;

    & + div {
      flex: 1 0;
      margin-left: 8px;
      font-size: 14px;
      line-height: 22px;
    }
  }
`,Heading=styled_components_browser_esm.Ay.h2`
  font-size: 20px;
  line-height: 28px;
  font-weight: bold;
  margin: 16px 0;
`,Default={args:{scale:1,color:"#000000"}},WithAttributes={render:({color,name,scale})=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)(IconDef,{color,children:[(0,jsx_runtime.jsx)("pixiv-icon",{class:"icon-class",name,scale}),(0,jsx_runtime.jsx)("div",{children:"アイコンと文字"})]}),(0,jsx_runtime.jsx)(Global,{})]}),args:{name:"16/Add",scale:1,color:"#000000"}},WithUnsafe={render:({color,name,scale,...args})=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(IconDef,{color,children:[(0,jsx_runtime.jsx)("pixiv-icon",{"unsafe-non-guideline-scale":args["unsafe-non-guideline-scale"],name,scale}),"アイコンと文字"]}),(0,jsx_runtime.jsx)(Global,{})]}),args:{name:"16/Add","unsafe-non-guideline-scale":"3.75",color:"#000000"}},RawIconFile={render:({color,name,scale})=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(IconDef,{color,children:[(0,jsx_runtime.jsx)("pixiv-icon",{name,scale}),"アイコンと文字"]}),(0,jsx_runtime.jsx)(Global,{})]}),args:{name:"16/TestIconFileThatNeverExists",scale:1,color:"#000000"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    scale: 1,\n    color: '#000000'\n  }\n}",...Default.parameters?.docs?.source}}},WithAttributes.parameters={...WithAttributes.parameters,docs:{...WithAttributes.parameters?.docs,source:{originalSource:"{\n  render: ({\n    color,\n    name,\n    scale\n  }) => <div>\n      <IconDef color={color}>\n        <pixiv-icon class=\"icon-class\" name={name} scale={scale} />\n        <div>アイコンと文字</div>\n      </IconDef>\n      <Global />\n    </div>,\n  args: {\n    name: '16/Add',\n    scale: 1,\n    color: '#000000'\n  }\n}",...WithAttributes.parameters?.docs?.source}}},WithUnsafe.parameters={...WithUnsafe.parameters,docs:{...WithUnsafe.parameters?.docs,source:{originalSource:"{\n  render: ({\n    color,\n    name,\n    scale,\n    ...args\n  }) => {\n    return <>\n        <IconDef color={color}>\n          <pixiv-icon unsafe-non-guideline-scale={args['unsafe-non-guideline-scale']} name={name} scale={scale} />\n          アイコンと文字\n        </IconDef>\n        <Global />\n      </>;\n  },\n  args: {\n    name: '16/Add',\n    'unsafe-non-guideline-scale': '3.75',\n    color: '#000000'\n  }\n}",...WithUnsafe.parameters?.docs?.source}}},RawIconFile.parameters={...RawIconFile.parameters,docs:{...RawIconFile.parameters?.docs,source:{originalSource:"{\n  render: ({\n    color,\n    name,\n    scale\n  }) => {\n    return <>\n        <IconDef color={color}>\n          <pixiv-icon name={name} scale={scale} />\n          アイコンと文字\n        </IconDef>\n        <Global />\n      </>;\n  },\n  args: {\n    name: '16/TestIconFileThatNeverExists',\n    scale: 1,\n    color: '#000000'\n  }\n}",...RawIconFile.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=icons-src-PixivIcon-story.849e9125.iframe.bundle.js.map