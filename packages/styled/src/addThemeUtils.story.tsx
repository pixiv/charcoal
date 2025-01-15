import styled, { ThemeProvider } from 'styled-components'
import { MyTheme, myTheme } from './storyHelper'

export default {
  title: 'styled/addThemeUtils',
}

declare module 'styled-components' {
  export interface DefaultTheme extends MyTheme {}
}

export const Example = () => (
  <ThemeProvider theme={myTheme}>
    <RootDiv>
      <Bg1Div>
        <TypographyDiv>
          {'${({ theme }) => theme.utils.typography(14, true)}'}
        </TypographyDiv>
      </Bg1Div>

      <Bg1Div>
        <MarginDiv>
          <Pre>
            <Code>
              {`\${({ theme }) => [
    theme.utils.margin(16, 'auto'),
    theme.utils.padding(4, 8, 16, 24),
  ]}`}
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
  </ThemeProvider>
)

const RootDiv = styled.div`
  ${({ theme }) => theme.utils.gap(40)}
  color: ${({ theme }) => theme.color.text1};
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    'Liberation Mono', 'Courier New', monospace;
`

const Pre = styled.pre`
  margin: 0;
`

const Code = styled.code`
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    'Liberation Mono', 'Courier New', monospace;
`

const TypographyDiv = styled.div`
  ${({ theme }) => theme.utils.typography(14, true)}
`

const MarginDiv = styled.div`
  color: ${({ theme }) => theme.color.text1};
  background-color: ${({ theme }) => theme.color.background2};
  border: 1px solid ${({ theme }) => theme.color.border};
  ${({ theme }) => [
    theme.utils.margin(16, 'auto'),
    theme.utils.padding(4, 8, 16, 24),
  ]}
`

const Bg1Div = styled.div`
  box-sizing: border-box;
  display: flex;
  background-color: ${({ theme }) => theme.color.background1};
  border: 1px solid ${({ theme }) => theme.color.border};
  overflow-x: auto;
  overflow-y: hidden;
`

const AssertiveRingDiv = styled.div`
  ${({ theme }) => [theme.utils.assertiveRingCss, theme.utils.margin(8)]}
  transition: 0.2s box-shadow;
`

const StyledButton = styled.button`
  ${({ theme }) => [
    theme.utils.focusVisibleFocusRingCss,
    theme.utils.disabledCss,
    theme.utils.padding(0, 16),
    theme.utils.margin(16),
  ]}
  transition: 0.2s box-shadow;

  cursor: pointer;
  height: 40px;
  background-color: ${({ theme }) => theme.color.brand};
  color: ${({ theme }) => theme.color.text5};
  border: none;
  border-radius: 9999px;

  :not(:disabled):active {
    background-color: var(--charcoal-brand-press);
  }
`
