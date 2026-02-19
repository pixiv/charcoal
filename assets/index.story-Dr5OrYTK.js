import{r as f,j as e,q as o,t as i}from"./iframe-D-iARKYw.js";import{u as v}from"./hooks-jKoP7Tff.js";import"./preload-helper-C1FmrZbK.js";const h=f.memo(function({children:a,icon:r,show:t=!0,prefix:n=!1,width:s,fit:y=!1,fixed:F=!1}){const c=y?s===void 0?e.jsx(b,{show:t,pre:n,children:r}):e.jsx(B,{width:s,show:t,pre:n,children:e.jsx(E,{children:r})}):e.jsx(g,{show:t,pre:n,children:e.jsx(j,{children:r})});return e.jsxs(I,{children:[n&&c,e.jsx(D,{fixed:F,children:a}),!n&&c]})}),I=o.div`
  display: flex;
  align-items: center;
`,D=o.div`
  ${u=>!u.fixed&&i`
      min-width: 0;
      overflow: hidden;
    `}
  white-space: nowrap;
  text-overflow: ellipsis;
`;function b({children:u,show:a,pre:r}){var s;const t=f.useRef(null),n=((s=v(t,[null]))==null?void 0:s.width)??0;return e.jsx(B,{width:n,show:a,pre:r,children:e.jsx(E,{ref:t,children:u})})}const m=i`
  > svg {
    display: block;
  }
`,x=i`
  ${u=>u.show==="collapse"?i`
          display: none;
        `:i`
          visibility: ${u.show?"visible":"hidden"};
        `};
  ${u=>u.pre?i`
          margin-right: 4px;
        `:i`
          margin-left: 4px;
        `}
`,g=o.div`
  display: flex;
  align-items: center;

  ${x}
`,j=o.div`
  display: inline-flex;

  ${m}
`,B=o.div`
  display: flex;
  position: relative;
  /* Iconをline-heightに関与させない */
  height: 0;
  /* 横方向の領域は確保する */
  width: ${u=>u.width}px;

  ${x}
`,E=o.div`
  display: inline-flex;
  position: absolute;
  transform: translateY(-50%);

  ${m}
`;try{WithIcon.displayName="WithIcon",WithIcon.__docgenInfo={description:"",displayName:"WithIcon",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"ReactNode"}},show:{defaultValue:null,description:"アイコンを表示。デフォルトがtrueなので、非表示にするときに使います。 (アイコン自体の幅を維持します)",name:"show",required:!1,type:{name:'boolean | "collapse"'}},prefix:{defaultValue:null,description:"アイコンを前にする",name:"prefix",required:!1,type:{name:"boolean"}},fit:{defaultValue:null,description:"アイコンの高さが文字の高さよりも大きいケースで有効。アイコンの高さをゼロにしてインラインの高さに関与させないようにします。",name:"fit",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"`fit`と併用した時にのみ有効な最適化オプション。アイコンの幅の自動計算を行わず指定した数値を利用します。",name:"width",required:!1,type:{name:"number"}},fixed:{defaultValue:null,description:"親要素のサイズに合わせるのではなく、コンテンツのサイズを優先する",name:"fixed",required:!1,type:{name:"boolean"}}}}}catch{}const $={title:"react-sandbox/WithIcon",component:h,argTypes:{prefix:{type:"boolean"},fit:{type:"boolean"},width:{type:"number"},fixed:{type:"boolean"}}},l={render:u=>e.jsx(h,{...u,icon:e.jsx("pixiv-icon",{name:"16/Like"}),children:"children"})};var d,p,A;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: props => {
    return <WithIcon {...props} icon={<pixiv-icon name="16/Like" />}>
        children
      </WithIcon>;
  }
}`,...(A=(p=l.parameters)==null?void 0:p.docs)==null?void 0:A.source}}};export{l as Default,$ as default};
