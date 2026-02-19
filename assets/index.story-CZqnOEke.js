import{r as y,j as n,q as p,p as g,t as s}from"./iframe-NqksIJAp.js";import{u as B}from"./ComponentAbstraction-4ZbBmWkD.js";import"./preload-helper-C1FmrZbK.js";const c=y.forwardRef(function({onClick:t,children:o,active:r=!1,hover:l,reactive:a=!1},i){return n.jsx(q,{active:r,reactive:a,hover:l,onClick:r&&!a?void 0:t,ref:i,children:o})}),m=y.forwardRef(function({onClick:t,children:o,active:r=!1,hover:l,reactive:a=!1,width:i,height:u},f){return n.jsx(L,{active:r,reactive:a,hover:l,onClick:r&&!a?void 0:t,ref:f,buttonWidth:i,buttonHeight:u,children:o})}),h=y.forwardRef(function({onClick:t,children:o,active:r=!1,hover:l,reactive:a=!1,...i},u){const{Link:f}=B();return r&&!a?n.jsx(b,{active:!0,hover:l,ref:u,children:o}):n.jsx(f,{...i,onClick:t,children:n.jsx(b,{active:r,reactive:a,hover:l,ref:u,children:o})})}),k=s`
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

  ${({hover:e=!1})=>e&&s`
      color: ${({theme:t})=>t.color.text2};
    `}

  ${({active:e=!1})=>e&&s`
      background-color: ${({theme:t})=>t.color.surface3};
      color: ${({theme:t})=>t.color.text2};
    `}

  ${({active:e=!1,reactive:t=!1})=>e&&!t&&s`
      cursor: default;
    `}

  @media ${({theme:e})=>g(e.breakpoint.screen1)} {
    padding: 5px 16px;
  }
`,V=s`
  padding: 0;

  @media ${({theme:e})=>g(e.breakpoint.screen1)} {
    padding: 0;
  }
`,q=p.button`
  ${k}
`,b=p.span`
  ${k}
`,L=p(q)`
  ${V};
  ${e=>e.buttonWidth!==void 0&&`width: ${e.buttonWidth}px;`}
  ${e=>e.buttonHeight!==void 0&&`height: ${e.buttonHeight}px;`}
`,_=p.div`
  display: flex;
`;try{c.displayName="FilterButton",c.__docgenInfo={description:"",displayName:"FilterButton",props:{active:{defaultValue:{value:"false"},description:"",name:"active",required:!1,type:{name:"boolean"}},hover:{defaultValue:null,description:"",name:"hover",required:!1,type:{name:"boolean"}},reactive:{defaultValue:{value:"false"},description:"",name:"reactive",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}}}catch{}try{m.displayName="FilterIconButton",m.__docgenInfo={description:"",displayName:"FilterIconButton",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},active:{defaultValue:{value:"false"},description:"",name:"active",required:!1,type:{name:"boolean"}},hover:{defaultValue:null,description:"",name:"hover",required:!1,type:{name:"boolean"}},reactive:{defaultValue:{value:"false"},description:"",name:"reactive",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}}}catch{}try{h.displayName="FilterLink",h.__docgenInfo={description:"",displayName:"FilterLink",props:{active:{defaultValue:{value:"false"},description:"",name:"active",required:!1,type:{name:"boolean"}},hover:{defaultValue:null,description:"",name:"hover",required:!1,type:{name:"boolean"}},reactive:{defaultValue:{value:"false"},description:"",name:"reactive",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement>"}},to:{defaultValue:null,description:"リンクのURL",name:"to",required:!0,type:{name:"string"}}}}}catch{}try{_.displayName="Filter",_.__docgenInfo={description:"",displayName:"Filter",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const I={title:"react-sandbox/Filter",component:c},d={render:e=>n.jsxs(n.Fragment,{children:["FilterButton: ",n.jsx(c,{...e,children:"test"}),"FilterLink: ",n.jsx(h,{...e,children:"test"}),"FilterIconButton:"," ",n.jsx(m,{width:40,height:40,...e,children:"test"})]})};var F,v,x;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(x=(v=d.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};export{d as Default,I as default};
