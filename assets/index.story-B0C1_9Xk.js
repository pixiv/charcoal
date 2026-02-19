import{j as n,r as b,q as a,O as N,t as E}from"./iframe-ruKs1uur.js";import{t as $}from"./styled-CU8AevXK.js";import{T as x}from"./index-BVe-cSS8.js";import{u as I}from"./ComponentAbstraction-D7RrevhY.js";import"./preload-helper-C1FmrZbK.js";const H=b.createContext({padding:24});function o({primary:e,secondary:t,onClick:r,disabled:i=!1,noHover:l=!1,gtmClass:s,children:p}){const{padding:m}=b.useContext(H);return n.jsxs(T,{hasSubLabel:t!==void 0,onClick:f=>!i&&r&&r(f),sidePadding:m,noHover:l,noClick:r===void 0,"aria-disabled":i,role:r!==void 0?"button":void 0,className:s!==void 0?`gtm-${s}`:void 0,children:[n.jsxs(D,{children:[n.jsx(R,{children:n.jsx(x,{lineHeight:22,lineLimit:1,children:e})}),t!==void 0&&n.jsx(w,{children:n.jsx(x,{lineHeight:22,lineLimit:1,children:t})})]}),p]})}const T=a.div`
  display: flex;
  height: ${e=>e.hasSubLabel?56:40}px;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${e=>e.sidePadding}px;
  user-select: none;
  cursor: ${e=>e.noClick?"default":"pointer"};
  transition: 0.2s background-color;

  &:hover {
    ${e=>!e.noHover&&E`
        background-color: ${({theme:t})=>t.color.surface3};
      `}
  }

  ${$(e=>e.disabled)}

  ${N} {
    cursor: default;
    pointer-events: none;

    &:hover {
      background-color: unset;
    }
  }
`,D=a.div`
  display: flex;
  flex-direction: column;
`,R=a.div`
  color: ${e=>e.theme.color.text2};
  line-height: 22px;
  font-size: 14px;
  display: grid;
`,w=a.div`
  color: ${e=>e.theme.color.text3};
  line-height: 18px;
  font-size: 10px;
`;function u({link:e,onClick:t,disabled:r=!1,primary:i,secondary:l,gtmClass:s,noHover:p,children:m,...f}){const{Link:C}=I(),y={disabled:r,primary:i,secondary:l,gtmClass:s,noHover:p,children:m};return r?n.jsx("span",{onClick:t,children:n.jsx(o,{...y})}):n.jsx(A,{as:C,to:e,onClick:t,...f,children:n.jsx(o,{onClick:()=>{},...y})})}const A=a.a`
  display: block;
`;function g({icon:e,primary:t,...r}){const i=n.jsxs(k,{children:[n.jsx(j,{children:e}),t]});return n.jsx(u,{primary:i,...r})}function h({icon:e,primary:t,...r}){const i=n.jsxs(k,{children:[n.jsx(j,{children:e}),t]});return n.jsx(o,{primary:i,...r})}const k=a.div`
  display: grid;
  gap: 8px;
  grid-auto-flow: column;
  align-items: center;
`,j=a.div`
  color: ${({theme:e})=>e.color.text3};
  display: flex;
`,_=a.div`
  height: 24px;
`,v=a.div`
  padding: 0 16px;
  font-size: 12px;
  line-height: 16px;
  color: ${({theme:e})=>e.color.text3};
  margin-top: -2px;
  margin-bottom: 6px;
`;try{o.displayName="MenuListItem",o.__docgenInfo={description:"",displayName:"MenuListItem",props:{primary:{defaultValue:null,description:"",name:"primary",required:!0,type:{name:"ReactNode"}},secondary:{defaultValue:null,description:"",name:"secondary",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},gtmClass:{defaultValue:null,description:"",name:"gtmClass",required:!1,type:{name:"string"}},noHover:{defaultValue:{value:"false"},description:"",name:"noHover",required:!1,type:{name:"boolean"}}}}}catch{}try{u.displayName="MenuListLinkItem",u.__docgenInfo={description:"",displayName:"MenuListLinkItem",props:{link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},primary:{defaultValue:null,description:"",name:"primary",required:!0,type:{name:"ReactNode"}},secondary:{defaultValue:null,description:"",name:"secondary",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},gtmClass:{defaultValue:null,description:"",name:"gtmClass",required:!1,type:{name:"string"}},noHover:{defaultValue:null,description:"",name:"noHover",required:!1,type:{name:"boolean"}}}}}catch{}try{g.displayName="MenuListLinkItemWithIcon",g.__docgenInfo={description:"",displayName:"MenuListLinkItemWithIcon",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"ReactNode"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},primary:{defaultValue:null,description:"",name:"primary",required:!0,type:{name:"ReactNode"}},secondary:{defaultValue:null,description:"",name:"secondary",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},gtmClass:{defaultValue:null,description:"",name:"gtmClass",required:!1,type:{name:"string"}},noHover:{defaultValue:null,description:"",name:"noHover",required:!1,type:{name:"boolean"}}}}}catch{}try{h.displayName="MenuListItemWithIcon",h.__docgenInfo={description:"",displayName:"MenuListItemWithIcon",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"ReactNode"}},primary:{defaultValue:null,description:"",name:"primary",required:!0,type:{name:"ReactNode"}},secondary:{defaultValue:null,description:"",name:"secondary",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},gtmClass:{defaultValue:null,description:"",name:"gtmClass",required:!1,type:{name:"string"}},noHover:{defaultValue:null,description:"",name:"noHover",required:!1,type:{name:"boolean"}}}}}catch{}try{_.displayName="MenuListSpacer",_.__docgenInfo={description:"",displayName:"MenuListSpacer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{v.displayName="MenuListLabel",v.__docgenInfo={description:"",displayName:"MenuListLabel",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}function c({links:e,active:t}){const{Link:r}=I();return n.jsx(S,{children:e.map((i,l)=>n.jsx(r,{to:i.to,children:n.jsx(W,{"aria-current":i.id===t||void 0,children:i.text})},l))})}function L({links:e}){return n.jsx(n.Fragment,{children:e.map((t,r)=>n.jsx(u,{link:t.to,primary:t.text},r))})}const S=a.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,W=a.div`
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.color.text3};
  border-radius: 24px;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  padding: 0 16px;
  height: 40px;
  transition: 0.2s color;
  &:hover {
    transition: 0.2s color;
    color: ${({theme:e})=>e.color.text2};
  }
  &[aria-current] {
    color: ${({theme:e})=>e.color.text2};
    background-color: ${({theme:e})=>e.color.surface3};
  }
`;try{c.displayName="LeftMenu",c.__docgenInfo={description:"",displayName:"LeftMenu",props:{links:{defaultValue:null,description:"",name:"links",required:!0,type:{name:"readonly { text: string; to: string; id: ID; }[]"}},active:{defaultValue:null,description:"",name:"active",required:!0,type:{name:"string"}}}}}catch{}try{L.displayName="LeftMenuContent",L.__docgenInfo={description:"",displayName:"LeftMenuContent",props:{links:{defaultValue:null,description:"",name:"links",required:!0,type:{name:"readonly { text: string; to: string; id: ID; }[]"}},active:{defaultValue:null,description:"",name:"active",required:!0,type:{name:"string"}}}}}catch{}const J={title:"react-sandbox/LeftMenu",component:c},z=[{text:"text1",to:"",id:"1"},{text:"text2",to:"",id:"2"},{text:"text3",to:"",id:"3"}],d={render:e=>n.jsx(c,{...e,links:z,active:"1",children:"children"})};var q,M,V;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: props => {
    return <LeftMenu {...props} links={links} active="1">
        children
      </LeftMenu>;
  }
}`,...(V=(M=d.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};export{d as Default,J as default};
