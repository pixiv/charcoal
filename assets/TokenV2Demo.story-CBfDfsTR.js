import{r as g,j as t,Y as v,Z as f,q as o}from"./iframe-ruKs1uur.js";import"./preload-helper-C1FmrZbK.js";const $={border:{selected:"var(--charcoal-color-border-selected)"},container:{secondary:{default:"var(--charcoal-color-container-secondary-default)",hover:"var(--charcoal-color-container-secondary-hover)",press:"var(--charcoal-color-container-secondary-press)"}},icon:{default:"var(--charcoal-color-icon-default)",hover:"var(--charcoal-color-icon-hover)",press:"var(--charcoal-color-icon-press)"},text:{default:"var(--charcoal-color-text-default)",hover:"var(--charcoal-color-text-hover)",press:"var(--charcoal-color-text-press)",secondary:{default:"var(--charcoal-color-text-secondary-default)"},tertiary:{default:"var(--charcoal-color-text-tertiary-default)",hover:"var(--charcoal-color-text-tertiary-hover)",press:"var(--charcoal-color-text-tertiary-press)"}}},b={m:"var(--charcoal-radius-m)",oval:"var(--charcoal-radius-oval)"},w={layout:{10:"var(--charcoal-space-layout-10)",20:"var(--charcoal-space-layout-20)",30:"var(--charcoal-space-layout-30)"}},j={fontSize:{body:"var(--charcoal-text-font-size-body)",caption:{m:"var(--charcoal-text-font-size-caption-m)",s:"var(--charcoal-text-font-size-caption-s)"},heading:{xs:"var(--charcoal-text-font-size-heading-xs)"}},lineHeight:{body:"var(--charcoal-text-line-height-body)",caption:{m:"var(--charcoal-text-line-height-caption-m)",s:"var(--charcoal-text-line-height-caption-s)"},heading:{xs:"var(--charcoal-text-line-height-heading-xs)"}}},e={color:$,radius:b,space:w,text:j},s=["Illustration","Comic","Novel","3D","Shopping"],k=Array.from({length:3},(a,i)=>({id:i,title:"Title",thumbnail:`https://loremflickr.com/150/100/animals?random=${i}&lock=${i}`,description:"Description"}));function y(){const[a,i]=g.useState(s[0]);return t.jsxs(S,{children:[t.jsx("nav",{children:t.jsx("div",{"aria-label":"Categories",role:"tablist",children:s.map(r=>t.jsx(z,{id:`category-${r}`,role:"tab","aria-selected":r===a,"aria-controls":`panel-${r}`,onClick:()=>{i(r)},children:r},r))})}),t.jsx(A,{children:"Works from users you follow"}),t.jsxs(N,{id:`panel-${a}`,role:"tabpanel","aria-labelledby":`category-${a}`,children:[t.jsxs(T,{children:[t.jsx(U,{"aria-label":"UserIcon",children:t.jsx(v,{name:"24/FaceEdit"})}),t.jsx(I,{children:"UserName"}),t.jsx(f,{variant:"Primary",size:"S",children:"Follow"})]}),t.jsx(L,{children:"Show all"}),t.jsx(C,{children:k.map(r=>t.jsx("li",{children:t.jsxs(H,{children:[t.jsx(D,{src:r.thumbnail,alt:r.title}),t.jsx(_,{children:r.title}),t.jsx(V,{children:r.description})]})},r.id))},a)]})]})}const S=o.section`
  transition: 0.3s color ease-in-out;
  display: grid;
  gap: 24px;
  max-width: fit-content;
`,A=o.h2`
  margin: 0;
  color: ${e.color.text.secondary.default};
  font-size: ${e.text.fontSize.heading.xs};
  line-height: ${e.text.lineHeight.heading.xs};
`,z=o.a`
  cursor: pointer;
  font-weight: bold;
  font-size: ${e.text.fontSize.body};
  line-height: ${e.text.lineHeight.body};
  padding: 13px ${e.space.layout[30]};
  border-top: 2px transparent;

  color: ${e.color.text.tertiary.default};
  &:hover {
    color: ${e.color.text.tertiary.hover};
  }
  &:active {
    color: ${e.color.text.tertiary.press};
  }

  &[aria-selected='true'] {
    color: ${e.color.text.default};
    border-top: 2px solid ${e.color.border.selected};
    &:hover {
      color: ${e.color.text.hover};
    }
    &:active {
      color: ${e.color.text.press};
    }
  }
`,N=o.div`
  display: grid;
  grid-template-areas:
    'UserInfo     .           ShowAll'
    'ArtworkList  ArtworkList ArtworkList';
`,T=o.div`
  grid-area: UserInfo;
  display: grid;
  grid-auto-flow: column;
  justify-content: left;
  align-items: center;
  gap: ${e.space.layout[20]};
`,U=o.a`
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: ${e.radius.oval};
  cursor: pointer;

  color: ${e.color.icon.default};
  background-color: ${e.color.container.secondary.default};
  &:hover {
    color: ${e.color.icon.hover};
    background-color: ${e.color.container.secondary.hover};
  }
  &:active {
    color: ${e.color.icon.press};
    background-color: ${e.color.container.secondary.press};
  }
`,I=o.span`
  color: ${e.color.text.default};
  font-size: ${e.text.fontSize.caption.m};
  line-height: ${e.text.lineHeight.caption.m};
  font-weight: bold;
`,L=o.a`
  grid-area: ShowAll;
  cursor: pointer;
  color: ${e.color.text.tertiary.default};
  &:hover {
    color: ${e.color.text.tertiary.hover};
  }
  &:active {
    color: ${e.color.text.tertiary.press};
  }
  text-align: right;
  align-content: center;
  font-size: ${e.text.fontSize.caption.m};
  line-height: ${e.text.lineHeight.caption.m};
`,C=o.ul`
  grid-area: ArtworkList;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${e.space.layout[20]};
  list-style: none;
  padding: 0;
  max-width: 424px;
`,H=o.article`
  display: grid;
  gap: ${e.space.layout[10]};
`,D=o.img`
  width: 100%;
  aspect-ratio: 3 / 2;
  border-radius: ${e.radius.m};
`,_=o.h3`
  color: ${e.color.text.default};
  font-size: ${e.text.fontSize.caption.m};
  line-height: ${e.text.lineHeight.caption.m};
  margin: 0;
`,V=o.p`
  margin: 0;
  color: ${e.color.text.tertiary.default};
  font-size: ${e.text.fontSize.caption.s};
  line-height: ${e.text.lineHeight.caption.s};
`,n=["Illustration","Comic","Novel","3D","Shopping"],E=Array.from({length:3},(a,i)=>({id:i,title:"Title",thumbnail:`https://loremflickr.com/150/100/animals?random=${i}&lock=${i}`,description:"Description"}));function F(){const[a,i]=g.useState(n[0]);return t.jsxs("section",{className:"grid max-w-fit gap-[24px]",children:[t.jsx("nav",{children:t.jsx("div",{"aria-label":"Categories",role:"tablist",children:n.map(r=>t.jsx("a",{className:`text-body px-component-30 border-t-l cursor-pointer border-[0px] border-solid py-[13px] font-bold ${r===a?"border-selected text-text":"border-[transparent] text-text-tertiary hover:text-text-tertiary-hover active:text-text-tertiary-press"}`,id:`category-${r}`,role:"tab","aria-selected":r===a,"aria-controls":`panel-${r}`,onClick:()=>{i(r)},children:r},r))})}),t.jsx("h2",{className:"text-text-secondary text-heading-xs m-0",children:"Works from users you follow"}),t.jsxs("div",{className:"grid [grid-template-areas:'UserInfo_._ShowAll''ArtworkList_ArtworkList_ArtworkList']",id:`panel-${a}`,role:"tabpanel","aria-labelledby":`category-${a}`,children:[t.jsxs("div",{className:"grid grid-flow-col items-center justify-start gap-layout-20 [grid-area:UserInfo]",children:[t.jsx("a",{className:"rounded-oval text-icon hover:text-icon-hover active:text-icon-press bg-container-secondary hover:bg-container-hover active:bg-container-press grid h-[40px] w-[40px] cursor-pointer place-items-center","aria-label":"UserIcon",children:t.jsx(v,{name:"24/FaceEdit"})}),t.jsx("span",{className:"text-text text-caption-m font-bold",children:"UserName"}),t.jsx(f,{variant:"Primary",size:"S",children:"Follow"})]}),t.jsx("a",{className:"text-text-tertiary hover:text-text-hover active:text-text-press text-caption-m cursor-pointer content-center text-right [grid-area:ShowAll]",children:"Show all"}),t.jsx("ul",{className:"grid max-w-[424px] list-none grid-cols-3 gap-layout-20 p-0 [grid-area:ArtworkList]",children:E.map(r=>t.jsx("li",{children:t.jsxs("article",{className:"grid gap-layout-10",children:[t.jsx("img",{className:"rounded-m aspect-[3/2] w-[100%]",src:r.thumbnail,alt:r.title}),t.jsx("h3",{className:"text-text text-caption-m m-0",children:r.title}),t.jsx("p",{className:"text-text-tertiary text-caption-s m-0",children:r.description})]})},r.id))},a)]})]})}const W={title:"theme/Token v2 Demo",component:y},c={render:y},l={render:F};var d,h,x;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: TokenV2Styled
}`,...(x=(h=c.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var p,m,u;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: TokenV2Tailwind
}`,...(u=(m=l.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};export{c as Styled,l as Tailwind,W as default};
