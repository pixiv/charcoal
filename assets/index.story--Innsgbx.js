import{a as e,n as t}from"./chunk-BneVvdWh.js";import{At as n,Dt as r,Pt as i,gt as a,kt as o,nt as s,xt as c}from"./iframe-CVQNsQPh.js";import{n as l,t as u}from"./ComponentAbstraction-C2rN7D7O.js";import{n as d,t as f}from"./styled-a89-iXFs.js";import{n as p,t as m}from"./TextEllipsis-B76bZKXn.js";function h({primary:e,secondary:t,onClick:n,disabled:r=!1,noHover:i=!1,gtmClass:a,children:o}){let{padding:s}=(0,y.useContext)(S);return(0,x.jsxs)(C,{hasSubLabel:t!==void 0,onClick:e=>!r&&n&&n(e),sidePadding:s,noHover:i,noClick:n===void 0,"aria-disabled":r,role:n===void 0?void 0:`button`,className:a===void 0?void 0:`gtm-${a}`,children:[(0,x.jsxs)(w,{children:[(0,x.jsx)(T,{children:(0,x.jsx)(m,{lineHeight:22,lineLimit:1,children:e})}),t!==void 0&&(0,x.jsx)(E,{children:(0,x.jsx)(m,{lineHeight:22,lineLimit:1,children:t})})]}),o]})}function g({link:e,onClick:t,disabled:n=!1,primary:r,secondary:i,gtmClass:a,noHover:o,children:s,...c}){let{Link:u}=l(),d={disabled:n,primary:r,secondary:i,gtmClass:a,noHover:o,children:s};return n?(0,x.jsx)(`span`,{onClick:t,children:(0,x.jsx)(h,{...d})}):(0,x.jsx)(D,{as:u,to:e,onClick:t,...c,children:(0,x.jsx)(h,{onClick:()=>void 0,...d})})}function _({icon:e,primary:t,...n}){return(0,x.jsx)(g,{primary:(0,x.jsxs)(O,{children:[(0,x.jsx)(k,{children:e}),t]}),...n})}function v({icon:e,primary:t,...n}){return(0,x.jsx)(h,{primary:(0,x.jsxs)(O,{children:[(0,x.jsx)(k,{children:e}),t]}),...n})}var y,b,x,S,C,w,T,E,D,O,k,A,j,M=t((()=>{y=e(i(),1),b=e(i(),1),o(),f(),p(),u(),a(),x=s(),S=b.createContext({padding:24}),C=n.div`
  display: flex;
  height: ${e=>e.hasSubLabel?56:40}px;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${e=>e.sidePadding}px;
  user-select: none;
  cursor: ${e=>e.noClick?`default`:`pointer`};
  transition: 0.2s background-color;

  &:hover {
    ${e=>!e.noHover&&r`
        background-color: ${({theme:e})=>e.color.surface3};
      `}
  }

  ${d(e=>e.disabled)}

  ${c} {
    cursor: default;
    pointer-events: none;

    &:hover {
      background-color: unset;
    }
  }
`,w=n.div`
  display: flex;
  flex-direction: column;
`,T=n.div`
  color: ${e=>e.theme.color.text2};
  line-height: 22px;
  font-size: 14px;
  display: grid;
`,E=n.div`
  color: ${e=>e.theme.color.text3};
  line-height: 18px;
  font-size: 10px;
`,D=n.a`
  display: block;
`,O=n.div`
  display: grid;
  gap: 8px;
  grid-auto-flow: column;
  align-items: center;
`,k=n.div`
  color: ${({theme:e})=>e.color.text3};
  display: flex;
`,A=n.div`
  height: 24px;
`,j=n.div`
  padding: 0 16px;
  font-size: 12px;
  line-height: 16px;
  color: ${({theme:e})=>e.color.text3};
  margin-top: -2px;
  margin-bottom: 6px;
`;try{h.displayName=`MenuListItem`,h.__docgenInfo={description:``,displayName:`MenuListItem`,props:{primary:{defaultValue:null,description:``,name:`primary`,required:!0,type:{name:`ReactNode`}},secondary:{defaultValue:null,description:``,name:`secondary`,required:!1,type:{name:`string`}},onClick:{defaultValue:null,description:``,name:`onClick`,required:!1,type:{name:`((e: MouseEvent<Element, MouseEvent>) => void)`}},disabled:{defaultValue:{value:`false`},description:``,name:`disabled`,required:!1,type:{name:`boolean`}},gtmClass:{defaultValue:null,description:``,name:`gtmClass`,required:!1,type:{name:`string`}},noHover:{defaultValue:{value:`false`},description:``,name:`noHover`,required:!1,type:{name:`boolean`}}}}}catch{}try{g.displayName=`MenuListLinkItem`,g.__docgenInfo={description:``,displayName:`MenuListLinkItem`,props:{link:{defaultValue:null,description:``,name:`link`,required:!0,type:{name:`string`}},primary:{defaultValue:null,description:``,name:`primary`,required:!0,type:{name:`ReactNode`}},secondary:{defaultValue:null,description:``,name:`secondary`,required:!1,type:{name:`string`}},onClick:{defaultValue:null,description:``,name:`onClick`,required:!1,type:{name:`((e: MouseEvent<Element, MouseEvent>) => void)`}},disabled:{defaultValue:{value:`false`},description:``,name:`disabled`,required:!1,type:{name:`boolean`}},gtmClass:{defaultValue:null,description:``,name:`gtmClass`,required:!1,type:{name:`string`}},noHover:{defaultValue:null,description:``,name:`noHover`,required:!1,type:{name:`boolean`}}}}}catch{}try{_.displayName=`MenuListLinkItemWithIcon`,_.__docgenInfo={description:``,displayName:`MenuListLinkItemWithIcon`,props:{icon:{defaultValue:null,description:``,name:`icon`,required:!0,type:{name:`ReactNode`}},link:{defaultValue:null,description:``,name:`link`,required:!0,type:{name:`string`}},primary:{defaultValue:null,description:``,name:`primary`,required:!0,type:{name:`ReactNode`}},secondary:{defaultValue:null,description:``,name:`secondary`,required:!1,type:{name:`string`}},onClick:{defaultValue:null,description:``,name:`onClick`,required:!1,type:{name:`((e: MouseEvent<Element, MouseEvent>) => void)`}},disabled:{defaultValue:null,description:``,name:`disabled`,required:!1,type:{name:`boolean`}},gtmClass:{defaultValue:null,description:``,name:`gtmClass`,required:!1,type:{name:`string`}},noHover:{defaultValue:null,description:``,name:`noHover`,required:!1,type:{name:`boolean`}}}}}catch{}try{v.displayName=`MenuListItemWithIcon`,v.__docgenInfo={description:``,displayName:`MenuListItemWithIcon`,props:{icon:{defaultValue:null,description:``,name:`icon`,required:!0,type:{name:`ReactNode`}},primary:{defaultValue:null,description:``,name:`primary`,required:!0,type:{name:`ReactNode`}},secondary:{defaultValue:null,description:``,name:`secondary`,required:!1,type:{name:`string`}},onClick:{defaultValue:null,description:``,name:`onClick`,required:!1,type:{name:`((e: MouseEvent<Element, MouseEvent>) => void)`}},disabled:{defaultValue:null,description:``,name:`disabled`,required:!1,type:{name:`boolean`}},gtmClass:{defaultValue:null,description:``,name:`gtmClass`,required:!1,type:{name:`string`}},noHover:{defaultValue:null,description:``,name:`noHover`,required:!1,type:{name:`boolean`}}}}}catch{}try{A.displayName=`MenuListSpacer`,A.__docgenInfo={description:``,displayName:`MenuListSpacer`,props:{ref:{defaultValue:null,description:``,name:`ref`,required:!1,type:{name:`((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null`}},theme:{defaultValue:null,description:``,name:`theme`,required:!1,type:{name:`DefaultTheme`}},as:{defaultValue:null,description:``,name:`as`,required:!1,type:{name:`undefined`}},forwardedAs:{defaultValue:null,description:``,name:`forwardedAs`,required:!1,type:{name:`undefined`}}}}}catch{}try{j.displayName=`MenuListLabel`,j.__docgenInfo={description:``,displayName:`MenuListLabel`,props:{ref:{defaultValue:null,description:``,name:`ref`,required:!1,type:{name:`((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null`}},theme:{defaultValue:null,description:``,name:`theme`,required:!1,type:{name:`DefaultTheme`}},as:{defaultValue:null,description:``,name:`as`,required:!1,type:{name:`undefined`}},forwardedAs:{defaultValue:null,description:``,name:`forwardedAs`,required:!1,type:{name:`undefined`}}}}}catch{}}));function N({links:e,active:t}){let{Link:n}=l();return(0,F.jsx)(I,{children:e.map((e,r)=>(0,F.jsx)(n,{to:e.to,children:(0,F.jsx)(L,{"aria-current":e.id===t||void 0,children:e.text})},r))})}function P({links:e}){return(0,F.jsx)(F.Fragment,{children:e.map((e,t)=>(0,F.jsx)(g,{link:e.to,primary:e.text},t))})}var F,I,L,R=t((()=>{o(),M(),u(),F=s(),I=n.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,L=n.div`
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
`;try{N.displayName=`LeftMenu`,N.__docgenInfo={description:``,displayName:`LeftMenu`,props:{links:{defaultValue:null,description:``,name:`links`,required:!0,type:{name:`readonly { text: string; to: string; id: ID; }[]`}},active:{defaultValue:null,description:``,name:`active`,required:!0,type:{name:`string`}}}}}catch{}try{P.displayName=`LeftMenuContent`,P.__docgenInfo={description:``,displayName:`LeftMenuContent`,props:{links:{defaultValue:null,description:``,name:`links`,required:!0,type:{name:`readonly { text: string; to: string; id: ID; }[]`}},active:{defaultValue:null,description:``,name:`active`,required:!0,type:{name:`string`}}}}}catch{}})),z,B,V,H;t((()=>{R(),z=s(),B={title:`react-sandbox/LeftMenu`,component:N},V=[{text:`text1`,to:``,id:`1`},{text:`text2`,to:``,id:`2`},{text:`text3`,to:``,id:`3`}],H={render:e=>(0,z.jsx)(N,{...e,links:V,active:`1`,children:`children`})},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <LeftMenu {...props} links={links} active="1">
        children
      </LeftMenu>;
  }
}`,...H.parameters?.docs?.source}}}}))();export{H as Default,B as default};