"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[9969],{"./packages/react/docs/TokenV2Demo.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Styled:()=>Styled,Tailwind:()=>Tailwind,default:()=>TokenV2Demo_story});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/.pnpm/styled-components@5.3.11_@babel+core@7.26.8_react-dom@18.3.1_react@18.3.1__react-is@18.3.1_react@18.3.1/node_modules/styled-components/dist/styled-components.browser.esm.js");const css_variables_namespaceObject=JSON.parse('{"xe":{"Zp":{"10":"var(--charcoal-space-layout-10)","20":"var(--charcoal-space-layout-20)","30":"var(--charcoal-space-layout-30)"}},"yW":{"kL":{"Rm":{"Ay":"var(--charcoal-color-container-secondary-default)","PT":"var(--charcoal-color-container-secondary-hover)","c$":"var(--charcoal-color-container-secondary-press)"}},"Kk":{"Ay":"var(--charcoal-color-icon-default)","PT":"var(--charcoal-color-icon-hover)","c$":"var(--charcoal-color-icon-press)"},"Qq":{"Ay":"var(--charcoal-color-text-default)","PT":"var(--charcoal-color-text-hover)","c$":"var(--charcoal-color-text-press)","Rm":{"Ay":"var(--charcoal-color-text-secondary-default)"},"Xe":{"Ay":"var(--charcoal-color-text-tertiary-default)","PT":"var(--charcoal-color-text-tertiary-hover)","c$":"var(--charcoal-color-text-tertiary-press)"}},"PQ":{"wH":"var(--charcoal-color-border-selected)"}},"Qq":{"J":{"rf":"var(--charcoal-text-font-size-body)","R_":{"xs":"var(--charcoal-text-font-size-heading-xs)"},"pG":{"m":"var(--charcoal-text-font-size-caption-m)","s":"var(--charcoal-text-font-size-caption-s)"}},"K_":{"rf":"var(--charcoal-text-line-height-body)","R_":{"xs":"var(--charcoal-text-line-height-heading-xs)"},"pG":{"m":"var(--charcoal-text-line-height-caption-m)","s":"var(--charcoal-text-line-height-caption-s)"}}},"r8":{"m":"var(--charcoal-radius-m)","n":"var(--charcoal-radius-oval)"}}');var index_esm=__webpack_require__("./packages/react/dist/index.esm.js");const categories=["Illustration","Comic","Novel","3D","Shopping"],artworks=Array.from({length:3},((_,id)=>({id,title:"Title",thumbnail:`https://loremflickr.com/150/100/animals?random=${id}&lock=${id}`,description:"Description"})));function TokenV2Styled(){const[selected,setSelected]=(0,react.useState)(categories[0]);return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)("nav",{children:(0,jsx_runtime.jsx)("div",{"aria-label":"Categories",role:"tablist",children:categories.map((category=>(0,jsx_runtime.jsx)(Tab,{id:`category-${category}`,role:"tab","aria-selected":category===selected,"aria-controls":`panel-${category}`,onClick:()=>{setSelected(category)},children:category},category)))})}),(0,jsx_runtime.jsx)(H2,{children:"Works from users you follow"}),(0,jsx_runtime.jsxs)(UserCard,{id:`panel-${selected}`,role:"tabpanel","aria-labelledby":`category-${selected}`,children:[(0,jsx_runtime.jsxs)(UserInfo,{children:[(0,jsx_runtime.jsx)(User,{"aria-label":"UserIcon",children:(0,jsx_runtime.jsx)(index_esm.In,{name:"24/FaceEdit"})}),(0,jsx_runtime.jsx)(UserName,{children:"UserName"}),(0,jsx_runtime.jsx)(index_esm.$n,{variant:"Primary",size:"S",children:"Follow"})]}),(0,jsx_runtime.jsx)(ShowAll,{children:"Show all"}),(0,jsx_runtime.jsx)(ArtworkList,{children:artworks.map((a=>(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsxs)(Artwork,{children:[(0,jsx_runtime.jsx)(ArtworkThumbnail,{src:a.thumbnail,alt:a.title}),(0,jsx_runtime.jsx)(ArtworkTitle,{children:a.title}),(0,jsx_runtime.jsx)(ArtworkDescription,{children:a.description})]})},a.id)))},selected)]})]})}const Container=styled_components_browser_esm.Ay.section`
  transition: 0.3s color ease-in-out;
  display: grid;
  gap: 24px;
  max-width: fit-content;
`,H2=styled_components_browser_esm.Ay.h2`
  margin: 0;
  color: ${css_variables_namespaceObject.yW.Qq.Rm.Ay};
  font-size: ${css_variables_namespaceObject.Qq.J.R_.xs};
  line-height: ${css_variables_namespaceObject.Qq.K_.R_.xs};
`,Tab=styled_components_browser_esm.Ay.a`
  cursor: pointer;
  font-weight: bold;
  font-size: ${css_variables_namespaceObject.Qq.J.rf};
  line-height: ${css_variables_namespaceObject.Qq.K_.rf};
  padding: 13px ${css_variables_namespaceObject.xe.Zp[30]};
  border-top: 2px transparent;

  color: ${css_variables_namespaceObject.yW.Qq.Xe.Ay};
  &:hover {
    color: ${css_variables_namespaceObject.yW.Qq.Xe.PT};
  }
  &:active {
    color: ${css_variables_namespaceObject.yW.Qq.Xe.c$};
  }

  &[aria-selected='true'] {
    color: ${css_variables_namespaceObject.yW.Qq.Ay};
    border-top: 2px solid ${css_variables_namespaceObject.yW.PQ.wH};
    &:hover {
      color: ${css_variables_namespaceObject.yW.Qq.PT};
    }
    &:active {
      color: ${css_variables_namespaceObject.yW.Qq.c$};
    }
  }
`,UserCard=styled_components_browser_esm.Ay.div`
  display: grid;
  grid-template-areas:
    'UserInfo     .           ShowAll'
    'ArtworkList  ArtworkList ArtworkList';
`,UserInfo=styled_components_browser_esm.Ay.div`
  grid-area: UserInfo;
  display: grid;
  grid-auto-flow: column;
  justify-content: left;
  align-items: center;
  gap: ${css_variables_namespaceObject.xe.Zp[20]};
`,User=styled_components_browser_esm.Ay.a`
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: ${css_variables_namespaceObject.r8.n};
  cursor: pointer;

  color: ${css_variables_namespaceObject.yW.Kk.Ay};
  background-color: ${css_variables_namespaceObject.yW.kL.Rm.Ay};
  &:hover {
    color: ${css_variables_namespaceObject.yW.Kk.PT};
    background-color: ${css_variables_namespaceObject.yW.kL.Rm.PT};
  }
  &:active {
    color: ${css_variables_namespaceObject.yW.Kk.c$};
    background-color: ${css_variables_namespaceObject.yW.kL.Rm.c$};
  }
`,UserName=styled_components_browser_esm.Ay.span`
  color: ${css_variables_namespaceObject.yW.Qq.Ay};
  font-size: ${css_variables_namespaceObject.Qq.J.pG.m};
  line-height: ${css_variables_namespaceObject.Qq.K_.pG.m};
  font-weight: bold;
`,ShowAll=styled_components_browser_esm.Ay.a`
  grid-area: ShowAll;
  cursor: pointer;
  color: ${css_variables_namespaceObject.yW.Qq.Xe.Ay};
  &:hover {
    color: ${css_variables_namespaceObject.yW.Qq.Xe.PT};
  }
  &:active {
    color: ${css_variables_namespaceObject.yW.Qq.Xe.c$};
  }
  text-align: right;
  align-content: center;
  font-size: ${css_variables_namespaceObject.Qq.J.pG.m};
  line-height: ${css_variables_namespaceObject.Qq.K_.pG.m};
`,ArtworkList=styled_components_browser_esm.Ay.ul`
  grid-area: ArtworkList;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${css_variables_namespaceObject.xe.Zp[20]};
  list-style: none;
  padding: 0;
  max-width: 424px;
`,Artwork=styled_components_browser_esm.Ay.article`
  display: grid;
  gap: ${css_variables_namespaceObject.xe.Zp[10]};
`,ArtworkThumbnail=styled_components_browser_esm.Ay.img`
  width: 100%;
  aspect-ratio: 3 / 2;
  border-radius: ${css_variables_namespaceObject.r8.m};
`,ArtworkTitle=styled_components_browser_esm.Ay.h3`
  color: ${css_variables_namespaceObject.yW.Qq.Ay};
  font-size: ${css_variables_namespaceObject.Qq.J.pG.m};
  line-height: ${css_variables_namespaceObject.Qq.K_.pG.m};
  margin: 0;
`,ArtworkDescription=styled_components_browser_esm.Ay.p`
  margin: 0;
  color: ${css_variables_namespaceObject.yW.Qq.Xe.Ay};
  font-size: ${css_variables_namespaceObject.Qq.J.pG.s};
  line-height: ${css_variables_namespaceObject.Qq.K_.pG.s};
`;TokenV2Styled.__docgenInfo={description:"",methods:[],displayName:"TokenV2Styled"};const TokenV2DemoTailwind_categories=["Illustration","Comic","Novel","3D","Shopping"],TokenV2DemoTailwind_artworks=Array.from({length:3},((_,id)=>({id,title:"Title",thumbnail:`https://loremflickr.com/150/100/animals?random=${id}&lock=${id}`,description:"Description"})));function TokenV2Tailwind(){const[selected,setSelected]=(0,react.useState)(TokenV2DemoTailwind_categories[0]);return(0,jsx_runtime.jsxs)("section",{className:"grid max-w-fit gap-[24px]",children:[(0,jsx_runtime.jsx)("nav",{children:(0,jsx_runtime.jsx)("div",{"aria-label":"Categories",role:"tablist",children:TokenV2DemoTailwind_categories.map((category=>(0,jsx_runtime.jsx)("a",{className:"text-body px-component-30 border-t-l cursor-pointer border-[0px] border-solid py-[13px] font-bold "+(category===selected?"border-selected text-text":"border-[transparent] text-text-tertiary hover:text-text-tertiary-hover active:text-text-tertiary-press"),id:`category-${category}`,role:"tab","aria-selected":category===selected,"aria-controls":`panel-${category}`,onClick:()=>{setSelected(category)},children:category},category)))})}),(0,jsx_runtime.jsx)("h2",{className:"text-text-secondary text-heading-xs m-0",children:"Works from users you follow"}),(0,jsx_runtime.jsxs)("div",{className:"grid [grid-template-areas:'UserInfo_._ShowAll''ArtworkList_ArtworkList_ArtworkList']",id:`panel-${selected}`,role:"tabpanel","aria-labelledby":`category-${selected}`,children:[(0,jsx_runtime.jsxs)("div",{className:"grid grid-flow-col items-center justify-start gap-layout-20 [grid-area:UserInfo]",children:[(0,jsx_runtime.jsx)("a",{className:"rounded-oval text-icon hover:text-icon-hover active:text-icon-press bg-container-secondary hover:bg-container-hover active:bg-container-press grid h-[40px] w-[40px] cursor-pointer place-items-center","aria-label":"UserIcon",children:(0,jsx_runtime.jsx)(index_esm.In,{name:"24/FaceEdit"})}),(0,jsx_runtime.jsx)("span",{className:"text-text text-caption-m font-bold",children:"UserName"}),(0,jsx_runtime.jsx)(index_esm.$n,{variant:"Primary",size:"S",children:"Follow"})]}),(0,jsx_runtime.jsx)("a",{className:"text-text-tertiary hover:text-text-hover active:text-text-press text-caption-m cursor-pointer content-center text-right [grid-area:ShowAll]",children:"Show all"}),(0,jsx_runtime.jsx)("ul",{className:"grid max-w-[424px] list-none grid-cols-3 gap-layout-20 p-0 [grid-area:ArtworkList]",children:TokenV2DemoTailwind_artworks.map((a=>(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsxs)("article",{className:"grid gap-layout-10",children:[(0,jsx_runtime.jsx)("img",{className:"rounded-m aspect-[3/2] w-[100%]",src:a.thumbnail,alt:a.title}),(0,jsx_runtime.jsx)("h3",{className:"text-text text-caption-m m-0",children:a.title}),(0,jsx_runtime.jsx)("p",{className:"text-text-tertiary text-caption-s m-0",children:a.description})]})},a.id)))},selected)]})]})}TokenV2Tailwind.__docgenInfo={description:"",methods:[],displayName:"TokenV2Tailwind"};const TokenV2Demo_story={title:"theme/Token v2 Demo",component:TokenV2Styled},Styled={render:TokenV2Styled},Tailwind={render:TokenV2Tailwind};Styled.parameters={...Styled.parameters,docs:{...Styled.parameters?.docs,source:{originalSource:"{\n  render: TokenV2Styled\n}",...Styled.parameters?.docs?.source}}},Tailwind.parameters={...Tailwind.parameters,docs:{...Tailwind.parameters?.docs,source:{originalSource:"{\n  render: TokenV2Tailwind\n}",...Tailwind.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=react-docs-TokenV2Demo-story.45c8c5b7.iframe.bundle.js.map