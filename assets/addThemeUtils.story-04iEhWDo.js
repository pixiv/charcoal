import{t as n,j as i,a6 as m,q as e}from"./iframe-ruKs1uur.js";import"./preload-helper-C1FmrZbK.js";function t(o){return o===void 0?"":typeof o=="number"?`${o}px`:o}function h(o,r,s,a){return n`
    margin: ${t(o)} ${t(r)} ${t(s)} ${t(a)};
  `}function b(o){return n`
    margin-top: ${t(o)};
  `}function f(o){return n`
    margin-bottom: ${t(o)};
  `}function x(o){return n`
    margin-left: ${t(o)};
  `}function $(o){return n`
    margin-right: ${t(o)};
  `}function v(o,r,s,a){return n`
    padding: ${o}px ${t(r)} ${t(s)} ${t(a)};
  `}function y(o){return n`
    padding-top: ${o}px;
  `}function C(o){return n`
    padding-bottom: ${o}px;
  `}function D(o){return n`
    padding-left: ${o}px;
  `}function R(o){return n`
    padding-right: ${o}px;
  `}function w(o,r){return n`
    gap: ${o}px ${t(r)};
  `}function j(o){return n`
    row-gap: ${o}px;
  `}function B(o){return n`
    column-gap: ${o}px;
  `}const T=n`
  &:disabled,
  &[aria-disabled]:not([aria-disabled='false']) {
    opacity: 0.32;
    cursor: default;
  }
`,M=n`
  font-weight: bold;
`,k=n`
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
`;function S(o,r=!1,s=!1){return n`
    font-size: ${o}px;
    line-height: ${o+8}px;
    display: flow-root;
    ${r===!0&&M}
    ${s!==!0&&k}
  `}const F=n`
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
`,L=n`
  box-shadow: 0 0 0 4px rgba(255, 43, 0, 0.32);
`;function P(o){return{...o,utils:{margin:h,marginTop:b,marginLeft:x,marginBottom:f,marginRight:$,padding:v,paddingTop:y,paddingLeft:D,paddingBottom:C,paddingRight:R,gap:w,rowGap:j,columnGap:B,typography:S,focusVisibleFocusRingCss:F,assertiveRingCss:L,disabledCss:T}}}function A(o){return{...P(o),color:{...o.color,mycolor:"#ff9e8c"}}}const H={title:"styled/addThemeUtils"},d=()=>i.jsx(m,{theme:A,children:i.jsxs(V,{children:[i.jsx(l,{children:i.jsx(q,{children:"${({ theme }) => theme.utils.typography(14, true)}"})}),i.jsx(l,{children:i.jsx(E,{children:i.jsx(N,{children:i.jsx(U,{children:`\${({ theme }) => [
    theme.utils.margin(16, 'auto'),
    theme.utils.padding(4, 8, 16, 24),
  ]}`})})})}),i.jsx(l,{children:i.jsx(G,{children:"theme.utils.assertiveRingCss"})}),i.jsxs(l,{children:[i.jsx(u,{children:"theme.utils.focusVisibleFocusRingCss"}),i.jsx(u,{disabled:!0,children:"theme.utils.disabledCss"})]})]})}),V=e.div`
  ${({theme:o})=>o.utils.gap(40)}
  color: ${({theme:o})=>o.color.text1};
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  font-family:
    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
`,N=e.pre`
  margin: 0;
`,U=e.code`
  font-family:
    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
`,q=e.div`
  ${({theme:o})=>o.utils.typography(14,!0)}
`,E=e.div`
  color: ${({theme:o})=>o.color.text1};
  background-color: ${({theme:o})=>o.color.background2};
  border: 1px solid ${({theme:o})=>o.color.border};
  ${({theme:o})=>[o.utils.margin(16,"auto"),o.utils.padding(4,8,16,24)]}
`,l=e.div`
  box-sizing: border-box;
  display: flex;
  background-color: ${({theme:o})=>o.color.background1};
  border: 1px solid ${({theme:o})=>o.color.border};
  overflow-x: auto;
  overflow-y: hidden;
`,G=e.div`
  ${({theme:o})=>[o.utils.assertiveRingCss,o.utils.margin(8)]}
  transition: 0.2s box-shadow;
`,u=e.button`
  ${({theme:o})=>[o.utils.focusVisibleFocusRingCss,o.utils.disabledCss,o.utils.padding(0,16),o.utils.margin(16)]}
  transition: 0.2s box-shadow;

  cursor: pointer;
  height: 40px;
  background-color: ${({theme:o})=>o.color.brand};
  color: ${({theme:o})=>o.color.text5};
  border: none;
  border-radius: 9999px;

  :not(:disabled):active {
    background-color: var(--charcoal-brand-press);
  }
`;var c,g,p;d.parameters={...d.parameters,docs:{...(c=d.parameters)==null?void 0:c.docs,source:{originalSource:`() => <ThemeProvider theme={myTheme}>
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
  </ThemeProvider>`,...(p=(g=d.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};export{d as Example,H as default};
