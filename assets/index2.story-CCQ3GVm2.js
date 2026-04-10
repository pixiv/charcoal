import{n as e}from"./chunk-BneVvdWh.js";import{nt as t}from"./iframe-C9I9vVUi.js";import{i as n,n as r,r as i,t as a}from"./MenuItem-BrUUU2o6.js";import{n as o,t as s}from"./MenuItemGroup-CNCXtJku.js";function c(e,t=0){return[...Array(e)].map((e,n)=>{let r=n+t;return(0,l.jsxs)(a,{value:r.toString(),children:[`Menu `,r]},r)})}var l,u,d,f,p,m;e((()=>{n(),r(),o(),l=t(),{action:u}=__STORYBOOK_MODULE_ACTIONS__,d={title:`react/internals/MenuList`,component:i},f={render:()=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(i,{onChange:u(`onChange`),children:c(10)})})},p={render:()=>(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(i,{onChange:u(`onChange`),children:[(0,l.jsx)(a,{value:`1`,children:`MenuItem`}),(0,l.jsx)(a,{value:`2`,disabled:!0,children:`Disabled MenuItem`})]})})},m={render:()=>(0,l.jsxs)(i,{onChange:u(`onChange`),value:`1`,children:[(0,l.jsx)(s,{text:`Section1`,children:c(5)}),(0,l.jsx)(s,{text:`Section2`,children:c(5,5)})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <MenuList onChange={action('onChange')}>{makeList(10)}</MenuList>
      </>;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <MenuList onChange={action('onChange')}>
          <MenuItem value="1">MenuItem</MenuItem>
          <MenuItem value="2" disabled>
            Disabled MenuItem
          </MenuItem>
        </MenuList>
      </>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <MenuList onChange={action('onChange')} value="1">
        <MenuItemGroup text="Section1">{makeList(5)}</MenuItemGroup>
        <MenuItemGroup text="Section2">{makeList(5, 5)}</MenuItemGroup>
      </MenuList>;
  }
}`,...m.parameters?.docs?.source}}}}))();export{f as Basic,p as Disabled,m as Group,d as default};