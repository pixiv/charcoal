import{n as e}from"./chunk-BneVvdWh.js";import{Bt as t,Ht as n,Vt as r,mt as i,zt as a}from"./iframe-CxB8iIxV.js";function o(e){return e===void 0?``:typeof e==`number`?`${e}px`:e}var s=e((()=>{}));function c(e,t,n,r){return a`
    margin: ${o(e)} ${o(t)} ${o(n)} ${o(r)};
  `}function l(e){return a`
    margin-top: ${o(e)};
  `}function u(e){return a`
    margin-bottom: ${o(e)};
  `}function d(e){return a`
    margin-left: ${o(e)};
  `}function f(e){return a`
    margin-right: ${o(e)};
  `}var p=e((()=>{r(),s()}));function m(e,t,n,r){return a`
    padding: ${e}px ${o(t)} ${o(n)} ${o(r)};
  `}function h(e){return a`
    padding-top: ${e}px;
  `}function g(e){return a`
    padding-bottom: ${e}px;
  `}function _(e){return a`
    padding-left: ${e}px;
  `}function v(e){return a`
    padding-right: ${e}px;
  `}var y=e((()=>{r(),s()}));function b(e,t){return a`
    gap: ${e}px ${o(t)};
  `}function x(e){return a`
    row-gap: ${e}px;
  `}function S(e){return a`
    column-gap: ${e}px;
  `}var C=e((()=>{r(),s()})),w,T=e((()=>{r(),w=a`
  &:disabled,
  &[aria-disabled]:not([aria-disabled='false']) {
    opacity: 0.32;
    cursor: default;
  }
`}));function E(e,t=!1,n=!1){return a`
    font-size: ${e}px;
    line-height: ${e+8}px;
    display: flow-root;
    ${t===!0&&D}
    ${n!==!0&&O}
  `}var D,O,k=e((()=>{r(),D=a`
  font-weight: bold;
`,O=a`
  &::before {
    display: block;
    width: 0;
    height: 0;
    content: '';
    margin-top: -4px;
  }

  &::after {
    display: block;
    width: 0;
    height: 0;
    content: '';
    margin-bottom: -4px;
  }
`})),A,j=e((()=>{r(),A=a`
  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);
  }
  &:focus:not(:focus-visible) {
    box-shadow: none;
  }
  &:focus-visible {
    box-shadow: 0 0 0 4px rgba(0, 150, 250, 0.32);
  }
`})),M,N=e((()=>{r(),M=a`
  box-shadow: 0 0 0 4px rgba(255, 43, 0, 0.32);
`}));function P(e){return{...e,utils:{margin:c,marginTop:l,marginLeft:d,marginBottom:u,marginRight:f,padding:m,paddingTop:h,paddingLeft:_,paddingBottom:g,paddingRight:v,gap:b,rowGap:x,columnGap:S,typography:E,focusVisibleFocusRingCss:A,assertiveRingCss:M,disabledCss:w}}}var F=e((()=>{p(),y(),C(),T(),k(),j(),N()}));function I(e){return{...P(e),color:{...e.color,mycolor:`#ff9e8c`}}}var L=e((()=>{F()})),R,z,B,V,H,U,W,G,K,q,J,Y=e((()=>{r(),L(),R=i(),z={title:`styled/addThemeUtils`},B=()=>(0,R.jsx)(t,{theme:I,children:(0,R.jsxs)(V,{children:[(0,R.jsx)(K,{children:(0,R.jsx)(W,{children:"${({ theme }) => theme.utils.typography(14, true)}"})}),(0,R.jsx)(K,{children:(0,R.jsx)(G,{children:(0,R.jsx)(H,{children:(0,R.jsx)(U,{children:`\${({ theme }) => [
    theme.utils.margin(16, 'auto'),
    theme.utils.padding(4, 8, 16, 24),
  ]}`})})})}),(0,R.jsx)(K,{children:(0,R.jsx)(q,{children:`theme.utils.assertiveRingCss`})}),(0,R.jsxs)(K,{children:[(0,R.jsx)(J,{children:`theme.utils.focusVisibleFocusRingCss`}),(0,R.jsx)(J,{disabled:!0,children:`theme.utils.disabledCss`})]})]})}),V=n.div`
  ${({theme:e})=>e.utils.gap(40)}
  color: ${({theme:e})=>e.color.text1};
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  font-family:
    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
`,H=n.pre`
  margin: 0;
`,U=n.code`
  font-family:
    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
`,W=n.div`
  ${({theme:e})=>e.utils.typography(14,!0)}
`,G=n.div`
  color: ${({theme:e})=>e.color.text1};
  background-color: ${({theme:e})=>e.color.background2};
  border: 1px solid ${({theme:e})=>e.color.border};
  ${({theme:e})=>[e.utils.margin(16,`auto`),e.utils.padding(4,8,16,24)]}
`,K=n.div`
  box-sizing: border-box;
  display: flex;
  background-color: ${({theme:e})=>e.color.background1};
  border: 1px solid ${({theme:e})=>e.color.border};
  overflow-x: auto;
  overflow-y: hidden;
`,q=n.div`
  ${({theme:e})=>[e.utils.assertiveRingCss,e.utils.margin(8)]}
  transition: 0.2s box-shadow;
`,J=n.button`
  ${({theme:e})=>[e.utils.focusVisibleFocusRingCss,e.utils.disabledCss,e.utils.padding(0,16),e.utils.margin(16)]}
  transition: 0.2s box-shadow;

  cursor: pointer;
  height: 40px;
  background-color: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.text5};
  border: none;
  border-radius: 9999px;

  :not(:disabled):active {
    background-color: var(--charcoal-brand-press);
  }
`,B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => <ThemeProvider theme={myTheme}>
    <RootDiv>
      <Bg1Div>
        <TypographyDiv>
          {'\${({ theme }) => theme.utils.typography(14, true)}'}
        </TypographyDiv>
      </Bg1Div>

      <Bg1Div>
        <MarginDiv>
          <Pre>
            <Code>
              {\`\\\${({ theme }) => [
    theme.utils.margin(16, 'auto'),
    theme.utils.padding(4, 8, 16, 24),
  ]}\`}
            </Code>
          </Pre>
        </MarginDiv>
      </Bg1Div>

      <Bg1Div>
        <AssertiveRingDiv>{'theme.utils.assertiveRingCss'}</AssertiveRingDiv>
      </Bg1Div>

      <Bg1Div>
        <StyledButton>{'theme.utils.focusVisibleFocusRingCss'}</StyledButton>

        <StyledButton disabled>{'theme.utils.disabledCss'}</StyledButton>
      </Bg1Div>
    </RootDiv>
  </ThemeProvider>`,...B.parameters?.docs?.source}}}}));Y();export{B as Example,z as default,Y as t};