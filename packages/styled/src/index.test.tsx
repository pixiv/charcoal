import { light } from '@charcoal-ui/theme'
import 'jest-styled-components'

import renderer from 'react-test-renderer'
import styled, { ThemeProvider } from 'styled-components'
import { Example } from './index.story'
import { MyTheme, myTheme } from './storyHelper'

function render(children: JSX.Element) {
  return renderer
    .create(<ThemeProvider theme={myTheme(light)}>{children}</ThemeProvider>)
    .toJSON()
}

// TODO: もう少し theme() 関数に対する丁寧なユニットテストが欲しい
describe('Story', () => {
  test('<Example />', () => {
    expect(render(<Example />)).toMatchSnapshot()
  })
})

describe('ThemeUtilsTest', () => {
  test('<ThemeUtilsTest />', () => {
    expect(
      render(
        <ThemeUtilsTest>
          <Typography12 />
          <Typography14True />
          <Typography16TrueTrue />
        </ThemeUtilsTest>
      )
    ).toMatchSnapshot()
  })
})

declare module 'styled-components' {
  export interface DefaultTheme extends MyTheme {}
}

const ThemeUtilsTest = styled.div`
  ${({ theme }) => theme.utils.margin(0)}
  ${({ theme }) => theme.utils.margin(0, 'auto')}
  ${({ theme }) => theme.utils.margin('auto', 4, 8)}
  ${({ theme }) => theme.utils.margin(0, 4, 8, 'auto')}
  ${({ theme }) => theme.utils.marginTop(0)}
  ${({ theme }) => theme.utils.marginRight(4)}
  ${({ theme }) => theme.utils.marginBottom(8)}
  ${({ theme }) => theme.utils.marginRight(16)}
  ${({ theme }) => theme.utils.padding(0)}
  ${({ theme }) => theme.utils.padding(0, 4)}
  ${({ theme }) => theme.utils.padding(0, 4, 8)}
  ${({ theme }) => theme.utils.padding(0, 4, 8, 16)}
  ${({ theme }) => theme.utils.paddingTop(0)}
  ${({ theme }) => theme.utils.paddingRight(4)}
  ${({ theme }) => theme.utils.paddingBottom(8)}
  ${({ theme }) => theme.utils.paddingRight(16)}
  ${({ theme }) => theme.utils.gap(0)}
  ${({ theme }) => theme.utils.gap(0, 4)}
  ${({ theme }) => theme.utils.rowGap(0)}
  ${({ theme }) => theme.utils.columnGap(4)}
  ${({ theme }) => theme.utils.focusVisibleFocusRingCss}
  ${({ theme }) => theme.utils.assertiveRingCss}
  ${({ theme }) => theme.utils.disabledCss}
`

const Typography12 = styled.div`
  ${({ theme }) => theme.utils.typography(12)}
`
const Typography14True = styled.div`
  ${({ theme }) => theme.utils.typography(14, true)}
`
const Typography16TrueTrue = styled.div`
  ${({ theme }) => theme.utils.typography(16, true, true)}
`
