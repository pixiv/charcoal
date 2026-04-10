import{a as e,n as t}from"./chunk-BneVvdWh.js";import{At as n,Dt as r,Pt as i,gt as a,kt as o,nt as s,pt as c}from"./iframe-D15TZ-Lk.js";import{n as l,t as u}from"./ComponentAbstraction-CPYrJkJr.js";var d,f,p,m,h,g,_,v,y,b,x,S=t((()=>{d=e(i(),1),o(),a(),u(),f=s(),p=d.forwardRef(function({onClick:e,children:t,active:n=!1,hover:r,reactive:i=!1},a){return(0,f.jsx)(v,{active:n,reactive:i,hover:r,onClick:n&&!i?void 0:e,ref:a,children:t})}),m=d.forwardRef(function({onClick:e,children:t,active:n=!1,hover:r,reactive:i=!1,width:a,height:o},s){return(0,f.jsx)(b,{active:n,reactive:i,hover:r,onClick:n&&!i?void 0:e,ref:s,buttonWidth:a,buttonHeight:o,children:t})}),h=d.forwardRef(function({onClick:e,children:t,active:n=!1,hover:r,reactive:i=!1,...a},o){let{Link:s}=l();return n&&!i?(0,f.jsx)(y,{active:!0,hover:r,ref:o,children:t}):(0,f.jsx)(s,{...a,onClick:e,children:(0,f.jsx)(y,{active:n,reactive:i,hover:r,ref:o,children:t})})}),g=r`
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
`;try{p.displayName=`FilterButton`,p.__docgenInfo={description:``,displayName:`FilterButton`,props:{active:{defaultValue:{value:`false`},description:``,name:`active`,required:!1,type:{name:`boolean`}},hover:{defaultValue:null,description:``,name:`hover`,required:!1,type:{name:`boolean`}},reactive:{defaultValue:{value:`false`},description:``,name:`reactive`,required:!1,type:{name:`boolean`}},onClick:{defaultValue:null,description:``,name:`onClick`,required:!1,type:{name:`MouseEventHandler<HTMLButtonElement>`}}}}}catch{}try{m.displayName=`FilterIconButton`,m.__docgenInfo={description:``,displayName:`FilterIconButton`,props:{width:{defaultValue:null,description:``,name:`width`,required:!1,type:{name:`number`}},height:{defaultValue:null,description:``,name:`height`,required:!1,type:{name:`number`}},active:{defaultValue:{value:`false`},description:``,name:`active`,required:!1,type:{name:`boolean`}},hover:{defaultValue:null,description:``,name:`hover`,required:!1,type:{name:`boolean`}},reactive:{defaultValue:{value:`false`},description:``,name:`reactive`,required:!1,type:{name:`boolean`}},onClick:{defaultValue:null,description:``,name:`onClick`,required:!1,type:{name:`MouseEventHandler<HTMLButtonElement>`}}}}}catch{}try{h.displayName=`FilterLink`,h.__docgenInfo={description:``,displayName:`FilterLink`,props:{active:{defaultValue:{value:`false`},description:``,name:`active`,required:!1,type:{name:`boolean`}},hover:{defaultValue:null,description:``,name:`hover`,required:!1,type:{name:`boolean`}},reactive:{defaultValue:{value:`false`},description:``,name:`reactive`,required:!1,type:{name:`boolean`}},onClick:{defaultValue:null,description:``,name:`onClick`,required:!1,type:{name:`MouseEventHandler<HTMLAnchorElement>`}},to:{defaultValue:null,description:`リンクのURL`,name:`to`,required:!0,type:{name:`string`}}}}}catch{}try{x.displayName=`Filter`,x.__docgenInfo={description:``,displayName:`Filter`,props:{ref:{defaultValue:null,description:``,name:`ref`,required:!1,type:{name:`((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null`}},theme:{defaultValue:null,description:``,name:`theme`,required:!1,type:{name:`DefaultTheme`}},as:{defaultValue:null,description:``,name:`as`,required:!1,type:{name:`undefined`}},forwardedAs:{defaultValue:null,description:``,name:`forwardedAs`,required:!1,type:{name:`undefined`}}}}}catch{}})),C,w,T;t((()=>{S(),C=s(),w={title:`react-sandbox/Filter`,component:p},T={render:e=>(0,C.jsxs)(C.Fragment,{children:[`FilterButton: `,(0,C.jsx)(p,{...e,children:`test`}),`FilterLink: `,(0,C.jsx)(h,{...e,children:`test`}),`FilterIconButton:`,` `,(0,C.jsx)(m,{width:40,height:40,...e,children:`test`})]})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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