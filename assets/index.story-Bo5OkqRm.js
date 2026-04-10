import{a as e,n as t}from"./chunk-BneVvdWh.js";import{At as n,Dt as r,Ht as i,gt as a,kt as o,nt as s,pt as c}from"./iframe-BqMtNU_q.js";import{n as l,t as u}from"./ComponentAbstraction-BsNy0nbC.js";var d,f,p,m,h,g,_,v,y,b,x,S=t((()=>{d=e(i(),1),o(),a(),u(),f=s(),p=d.forwardRef(function({onClick:e,children:t,active:n=!1,hover:r,reactive:i=!1},a){return(0,f.jsx)(v,{active:n,reactive:i,hover:r,onClick:n&&!i?void 0:e,ref:a,children:t})}),m=d.forwardRef(function({onClick:e,children:t,active:n=!1,hover:r,reactive:i=!1,width:a,height:o},s){return(0,f.jsx)(b,{active:n,reactive:i,hover:r,onClick:n&&!i?void 0:e,ref:s,buttonWidth:a,buttonHeight:o,children:t})}),h=d.forwardRef(function({onClick:e,children:t,active:n=!1,hover:r,reactive:i=!1,...a},o){let{Link:s}=l();return n&&!i?(0,f.jsx)(y,{active:!0,hover:r,ref:o,children:t}):(0,f.jsx)(s,{...a,onClick:e,children:(0,f.jsx)(y,{active:n,reactive:i,hover:r,ref:o,children:t})})}),g=r`
  display: block;
  outline: none;
  border: none;
  padding: 9px 24px;
  font-size: 14px;
  line-height: 22px;
  font-weight: bold;
  border-radius: /* absurd radius, but ensures rounded corners */ 2000px;
  transition: color 0.2s;
  color: ${({theme:e})=>e.color.text3};
  cursor: pointer;
  user-select: none;
  background-color: transparent;

  &:hover {
    color: ${({theme:e})=>e.color.text2};
  }

  ${({hover:e=!1})=>e&&r`
      color: ${({theme:e})=>e.color.text2};
    `}

  ${({active:e=!1})=>e&&r`
      background-color: ${({theme:e})=>e.color.surface3};
      color: ${({theme:e})=>e.color.text2};
    `}

  ${({active:e=!1,reactive:t=!1})=>e&&!t&&r`
      cursor: default;
    `}

  @media ${({theme:e})=>c(e.breakpoint.screen1)} {
    padding: 5px 16px;
  }
`,_=r`
  padding: 0;

  @media ${({theme:e})=>c(e.breakpoint.screen1)} {
    padding: 0;
  }
`,v=n.button`
  ${g}
`,y=n.span`
  ${g}
`,b=n(v)`
  ${_};
  ${e=>e.buttonWidth!==void 0&&`width: ${e.buttonWidth}px;`}
  ${e=>e.buttonHeight!==void 0&&`height: ${e.buttonHeight}px;`}
`,x=n.div`
  display: flex;
`;try{p.displayName=`FilterButton`,p.__docgenInfo={description:``,displayName:`FilterButton`,filePath:`/home/runner/work/charcoal/charcoal/packages/react-sandbox/src/components/Filter/index.tsx`,methods:[],props:{active:{defaultValue:{value:`false`},declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Filter/index.tsx`,name:`Props`}],description:``,name:`active`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/Filter/index.tsx`,name:`Props`},required:!1,tags:{},type:{name:`boolean`}},hover:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Filter/index.tsx`,name:`Props`}],description:``,name:`hover`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/Filter/index.tsx`,name:`Props`},required:!1,tags:{},type:{name:`boolean`}},reactive:{defaultValue:{value:`false`},declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Filter/index.tsx`,name:`Props`}],description:``,name:`reactive`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/Filter/index.tsx`,name:`Props`},required:!1,tags:{},type:{name:`boolean`}},onClick:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Filter/index.tsx`,name:`Props`}],description:``,name:`onClick`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/Filter/index.tsx`,name:`Props`},required:!1,tags:{},type:{name:`MouseEventHandler<HTMLButtonElement>`}},css:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/type.d.ts`,name:`Attributes`}],description:``,name:`css`,parent:{fileName:`charcoal/packages/react-sandbox/src/type.d.ts`,name:`Attributes`},required:!1,tags:{},type:{name:`CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>`}}},tags:{}}}catch{}try{m.displayName=`FilterIconButton`,m.__docgenInfo={description:``,displayName:`FilterIconButton`,filePath:`/home/runner/work/charcoal/charcoal/packages/react-sandbox/src/components/Filter/index.tsx`,methods:[],props:{width:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Filter/index.tsx`,name:`FilterIconButtonProps`}],description:``,name:`width`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/Filter/index.tsx`,name:`FilterIconButtonProps`},required:!1,tags:{},type:{name:`number`}},height:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Filter/index.tsx`,name:`FilterIconButtonProps`}],description:``,name:`height`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/Filter/index.tsx`,name:`FilterIconButtonProps`},required:!1,tags:{},type:{name:`number`}},active:{defaultValue:{value:`false`},declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Filter/index.tsx`,name:`Props`}],description:``,name:`active`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/Filter/index.tsx`,name:`Props`},required:!1,tags:{},type:{name:`boolean`}},hover:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Filter/index.tsx`,name:`Props`}],description:``,name:`hover`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/Filter/index.tsx`,name:`Props`},required:!1,tags:{},type:{name:`boolean`}},reactive:{defaultValue:{value:`false`},declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Filter/index.tsx`,name:`Props`}],description:``,name:`reactive`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/Filter/index.tsx`,name:`Props`},required:!1,tags:{},type:{name:`boolean`}},onClick:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Filter/index.tsx`,name:`Props`}],description:``,name:`onClick`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/Filter/index.tsx`,name:`Props`},required:!1,tags:{},type:{name:`MouseEventHandler<HTMLButtonElement>`}},css:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/type.d.ts`,name:`Attributes`}],description:``,name:`css`,parent:{fileName:`charcoal/packages/react-sandbox/src/type.d.ts`,name:`Attributes`},required:!1,tags:{},type:{name:`CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>`}}},tags:{}}}catch{}try{h.displayName=`FilterLink`,h.__docgenInfo={description:``,displayName:`FilterLink`,filePath:`/home/runner/work/charcoal/charcoal/packages/react-sandbox/src/components/Filter/index.tsx`,methods:[],props:{active:{defaultValue:{value:`false`},declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Filter/index.tsx`,name:`Props`}],description:``,name:`active`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/Filter/index.tsx`,name:`Props`},required:!1,tags:{},type:{name:`boolean`}},hover:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Filter/index.tsx`,name:`Props`}],description:``,name:`hover`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/Filter/index.tsx`,name:`Props`},required:!1,tags:{},type:{name:`boolean`}},reactive:{defaultValue:{value:`false`},declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Filter/index.tsx`,name:`Props`}],description:``,name:`reactive`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/Filter/index.tsx`,name:`Props`},required:!1,tags:{},type:{name:`boolean`}},onClick:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/components/Filter/index.tsx`,name:`Props`},{fileName:`charcoal/node_modules/.pnpm/@types+react@18.3.20/node_modules/@types/react/index.d.ts`,name:`DOMAttributes`}],description:``,name:`onClick`,parent:{fileName:`charcoal/packages/react-sandbox/src/components/Filter/index.tsx`,name:`Props`},required:!1,tags:{},type:{name:`MouseEventHandler<HTMLAnchorElement>`}},to:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/_lib/ComponentAbstraction.tsx`,name:`TypeLiteral`}],description:`リンクのURL`,name:`to`,required:!0,tags:{},type:{name:`string`}},css:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/type.d.ts`,name:`Attributes`},{fileName:`charcoal/packages/react-sandbox/src/type.d.ts`,name:`Attributes`}],description:``,name:`css`,parent:{fileName:`charcoal/packages/react-sandbox/src/type.d.ts`,name:`Attributes`},required:!1,tags:{},type:{name:`CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>`}}},tags:{}}}catch{}try{x.displayName=`Filter`,x.__docgenInfo={description:``,displayName:`Filter`,filePath:`/home/runner/work/charcoal/charcoal/packages/react-sandbox/src/components/Filter/index.tsx`,methods:[],props:{ref:{defaultValue:null,declarations:[{fileName:`charcoal/node_modules/.pnpm/@types+react@18.3.20/node_modules/@types/react/index.d.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null`}},css:{defaultValue:null,declarations:[{fileName:`charcoal/packages/react-sandbox/src/type.d.ts`,name:`Attributes`}],description:``,name:`css`,parent:{fileName:`charcoal/packages/react-sandbox/src/type.d.ts`,name:`Attributes`},required:!1,tags:{},type:{name:`CSSProp<DefaultTheme> | ThemeProp<DefaultTheme>`}},theme:{defaultValue:null,declarations:[{fileName:`charcoal/node_modules/.pnpm/@types+styled-components@5.1.34/node_modules/@types/styled-components/index.d.ts`,name:`TypeLiteral`}],description:``,name:`theme`,required:!1,tags:{},type:{name:`DefaultTheme`}},as:{defaultValue:null,declarations:[{fileName:`charcoal/node_modules/.pnpm/@types+styled-components@5.1.34/node_modules/@types/styled-components/index.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`undefined`}},forwardedAs:{defaultValue:null,declarations:[{fileName:`charcoal/node_modules/.pnpm/@types+styled-components@5.1.34/node_modules/@types/styled-components/index.d.ts`,name:`TypeLiteral`}],description:``,name:`forwardedAs`,required:!1,tags:{},type:{name:`undefined`}}},tags:{}}}catch{}})),C,w,T;t((()=>{S(),C=s(),w={title:`react-sandbox/Filter`,component:p},T={render:e=>(0,C.jsxs)(C.Fragment,{children:[`FilterButton: `,(0,C.jsx)(p,{...e,children:`test`}),`FilterLink: `,(0,C.jsx)(h,{...e,children:`test`}),`FilterIconButton:`,` `,(0,C.jsx)(m,{width:40,height:40,...e,children:`test`})]})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <>
        FilterButton: <FilterButton {...props}>test</FilterButton>
        FilterLink: <FilterLink {...props}>test</FilterLink>
        FilterIconButton:{' '}
        <FilterIconButton width={40} height={40} {...props}>
          test
        </FilterIconButton>
      </>;
  }
}`,...T.parameters?.docs?.source}}}}))();export{T as Default,w as default};