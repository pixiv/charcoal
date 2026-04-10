import{n as e}from"./chunk-BneVvdWh.js";import{At as t,Dt as n,Ot as r,kt as i,nt as a}from"./iframe-C9I9vVUi.js";function o(e){return e===void 0?``:typeof e==`number`?`${e}px`:e}var s=e((()=>{}));function c(e,t,r,i){return n`
    margin: ${o(e)} ${o(t)} ${o(r)} ${o(i)};
  `}function l(e){return n`
    margin-top: ${o(e)};
  `}function u(e){return n`
    margin-bottom: ${o(e)};
  `}function d(e){return n`
    margin-left: ${o(e)};
  `}function f(e){return n`
    margin-right: ${o(e)};
  `}var p=e((()=>{i(),s()}));function m(e,t,r,i){return n`
    padding: ${e}px ${o(t)} ${o(r)} ${o(i)};
  `}function h(e){return n`
    padding-top: ${e}px;
  `}function g(e){return n`
    padding-bottom: ${e}px;
  `}function _(e){return n`
    padding-left: ${e}px;
  `}function v(e){return n`
    padding-right: ${e}px;
  `}var y=e((()=>{i(),s()}));function b(e,t){return n`
    gap: ${e}px ${o(t)};
  `}function x(e){return n`
    row-gap: ${e}px;
  `}function S(e){return n`
    column-gap: ${e}px;
  `}var C=e((()=>{i(),s()})),w,T=e((()=>{i(),w=n`
  &:disabled,
  &[aria-disabled]:not([aria-disabled='false']) {
    opacity: 0.32;
    cursor: default;
  }
`}));function E(e,t=!1,r=!1){return n`
    font-size: ${e}px;
    line-height: ${e+8}px;
    display: flow-root;
    ${t===!0&&D}
    ${r!==!0&&O}
  `}var D,O,k=e((()=>{i(),D=n`
  font-weight: bold;
`,O=n`
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
`})),A,j=e((()=>{i(),A=n`
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
`})),M,N=e((()=>{i(),M=n`
  box-shadow: 0 0 0 4px rgba(255, 43, 0, 0.32);
`}));function P(e){return{...e,utils:{margin:c,marginTop:l,marginLeft:d,marginBottom:u,marginRight:f,padding:m,paddingTop:h,paddingLeft:_,paddingBottom:g,paddingRight:v,gap:b,rowGap:x,columnGap:S,typography:E,focusVisibleFocusRingCss:A,assertiveRingCss:M,disabledCss:w}}}var F=e((()=>{p(),y(),C(),T(),k(),j(),N()}));function I(e){return{...P(e),color:{...e.color,mycolor:`#ff9e8c`}}}var L=e((()=>{F()})),R,z,B,V,H,U,W,G,K,q,J,Y=e((()=>{i(),L(),R=a(),z={title:`styled/addThemeUtils`},B=()=>(0,R.jsx)(r,{theme:I,children:(0,R.jsxs)(V,{children:[(0,R.jsx)(K,{children:(0,R.jsx)(W,{children:"${({ theme }) => theme.utils.typography(14, true)}"})}),(0,R.jsx)(K,{children:(0,R.jsx)(G,{children:(0,R.jsx)(H,{children:(0,R.jsx)(U,{children:`\${({ theme }) => [
    theme.utils.margin(16, 'auto'),
    theme.utils.padding(4, 8, 16, 24),
  ]}`})})})}),(0,R.jsx)(K,{children:(0,R.jsx)(q,{children:`theme.utils.assertiveRingCss`})}),(0,R.jsxs)(K,{children:[(0,R.jsx)(J,{children:`theme.utils.focusVisibleFocusRingCss`}),(0,R.jsx)(J,{disabled:!0,children:`theme.utils.disabledCss`})]})]})}),V=t.div`
  ${({theme:e})=>e.utils.gap(40)}
  color: ${({theme:e})=>e.color.text1};
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  font-family:
    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
`,H=t.pre`
  margin: 0;
`,U=t.code`
  font-family:
    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
`,W=t.div`
  ${({theme:e})=>e.utils.typography(14,!0)}
`,G=t.div`
  color: ${({theme:e})=>e.color.text1};
  background-color: ${({theme:e})=>e.color.background2};
  border: 1px solid ${({theme:e})=>e.color.border};
  ${({theme:e})=>[e.utils.margin(16,`auto`),e.utils.padding(4,8,16,24)]}
`,K=t.div`
  box-sizing: border-box;
  display: flex;
  background-color: ${({theme:e})=>e.color.background1};
  border: 1px solid ${({theme:e})=>e.color.border};
  overflow-x: auto;
  overflow-y: hidden;
`,q=t.div`
  ${({theme:e})=>[e.utils.assertiveRingCss,e.utils.margin(8)]}
  transition: 0.2s box-shadow;
`,J=t.button`
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