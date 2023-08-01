import { dark, light } from '@charcoal-ui/theme'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import Checkbox from '.'

function render(children: JSX.Element, theme = light) {
  return renderer
    .create(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
    .toJSON()
}

describe('Checkbox Snapshot Test', () => {
  it('light theme snapshot', () => {
    expect(render(<Checkbox label="test" />, light)).toMatchSnapshot()
  })
  it('dark theme snapshot', () => {
    expect(render(<Checkbox label="test" />, dark)).toMatchSnapshot()
  })
})
