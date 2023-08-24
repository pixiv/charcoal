import { light } from '@charcoal-ui/theme'
import 'jest-styled-components'

import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import { Example, TailwindLike } from './index.story'
import { myTheme } from './storyHelper'

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

  test('<TailwindLike />', () => {
    expect(render(<TailwindLike />)).toMatchSnapshot()
  })
})
