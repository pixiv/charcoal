import{n as e}from"./chunk-BneVvdWh.js";import{Ft as t,It as n,Lt as r,Pt as i,lt as a}from"./iframe-sQnDtw9m.js";function o(e){return e===void 0?``:typeof e==`number`?`${e}px`:e}var s=e((()=>{}));function c(e,t,n,r){return i`
    margin: ${o(e)} ${o(t)} ${o(n)} ${o(r)};
  `}function l(e){return i`
    margin-top: ${o(e)};
  `}function u(e){return i`
    margin-bottom: ${o(e)};
  `}function d(e){return i`
    margin-left: ${o(e)};
  `}function f(e){return i`
    margin-right: ${o(e)};
  `}var p=e((()=>{n(),s()}));function m(e,t,n,r){return i`
    padding: ${e}px ${o(t)} ${o(n)} ${o(r)};
  `}function h(e){return i`
    padding-top: ${e}px;
  `}function g(e){return i`
    padding-bottom: ${e}px;
  `}function _(e){return i`
    padding-left: ${e}px;
  `}function v(e){return i`
    padding-right: ${e}px;
  `}var y=e((()=>{n(),s()}));function b(e,t){return i`
    gap: ${e}px ${o(t)};
  `}function x(e){return i`
    row-gap: ${e}px;
  `}function S(e){return i`
    column-gap: ${e}px;
  `}var C=e((()=>{n(),s()})),w,T=e((()=>{n(),w=i`
  &:disabled,
  &[aria-disabled]:not([aria-disabled='false']) {
    opacity: 0.32;
    cursor: default;
  }
`}));function E(e,t=!1,n=!1){return i`
    font-size: ${e}px;
    line-height: ${e+8}px;
    display: flow-root;
    ${t===!0&&D}
    ${n!==!0&&O}
  `}var D,O,k=e((()=>{n(),D=i`
  font-weight: bold;
`,O=i`
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
`})),A,j=e((()=>{n(),A=i`
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
`})),M,N=e((()=>{n(),M=i`
  box-shadow: 0 0 0 4px rgba(255, 43, 0, 0.32);
`}));function P(e){return{...e,utils:{margin:c,marginTop:l,marginLeft:d,marginBottom:u,marginRight:f,padding:m,paddingTop:h,paddingLeft:_,paddingBottom:g,paddingRight:v,gap:b,rowGap:x,columnGap:S,typography:E,focusVisibleFocusRingCss:A,assertiveRingCss:M,disabledCss:w}}}var F=e((()=>{p(),y(),C(),T(),k(),j(),N()}));function I(e){return{...P(e),color:{...e.color,mycolor:`#ff9e8c`}}}var L=e((()=>{F()})),R,z,B,V,H,U,W,G,K,q,J,Y=e((()=>{n(),L(),R=a(),z={title:`styled/addThemeUtils`},B=()=>(0,R.jsx)(t,{theme:I,children:(0,R.jsxs)(V,{children:[(0,R.jsx)(K,{children:(0,R.jsx)(W,{children:"${({ theme }) => theme.utils.typography(14, true)}"})}),(0,R.jsx)(K,{children:(0,R.jsx)(G,{children:(0,R.jsx)(H,{children:(0,R.jsx)(U,{children:`\${({ theme }) => [
    theme.utils.margin(16, 'auto'),
    theme.utils.padding(4, 8, 16, 24),
  ]}`})})})}),(0,R.jsx)(K,{children:(0,R.jsx)(q,{children:`theme.utils.assertiveRingCss`})}),(0,R.jsxs)(K,{children:[(0,R.jsx)(J,{children:`theme.utils.focusVisibleFocusRingCss`}),(0,R.jsx)(J,{disabled:!0,children:`theme.utils.disabledCss`})]})]})}),V=r.div`
  ${({theme:e})=>e.utils.gap(40)}
  color: ${({theme:e})=>e.color.text1};
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  font-family:
    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
`,H=r.pre`
  margin: 0;
`,U=r.code`
  font-family:
    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
`,W=r.div`
  ${({theme:e})=>e.utils.typography(14,!0)}
`,G=r.div`
  color: ${({theme:e})=>e.color.text1};
  background-color: ${({theme:e})=>e.color.background2};
  border: 1px solid ${({theme:e})=>e.color.border};
  ${({theme:e})=>[e.utils.margin(16,`auto`),e.utils.padding(4,8,16,24)]}
`,K=r.div`
  box-sizing: border-box;
  display: flex;
  background-color: ${({theme:e})=>e.color.background1};
  border: 1px solid ${({theme:e})=>e.color.border};
  overflow-x: auto;
  overflow-y: hidden;
`,q=r.div`
  ${({theme:e})=>[e.utils.assertiveRingCss,e.utils.margin(8)]}
  transition: 0.2s box-shadow;
`,J=r.button`
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