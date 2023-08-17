import { light } from '@charcoal-ui/theme'
import 'jest-styled-components'

import renderder from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import { myTheme } from '../storyHelper'
import { Example, TailwindLike } from './index.story'

function render(children: JSX.Element) {
  return renderder
    .create(<ThemeProvider theme={myTheme(light)}>{children}</ThemeProvider>)
    .toJSON()
}

describe('Story', () => {
  test('<Example />', () => {
    expect(render(<Example />)).toMatchSnapshot()
  })

  test('<TailwindLike />', () => {
    expect(render(<TailwindLike />)).toMatchSnapshot()
  })
})
