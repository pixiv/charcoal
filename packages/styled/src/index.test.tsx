import { light } from '@charcoal-ui/theme'
import 'jest-styled-components'

import React from 'react'
import renderder from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import { Example, myTheme, TailwindLike } from './index.story'

function render(children: JSX.Element) {
  return renderder
    .create(<ThemeProvider theme={myTheme(light)}>{children}</ThemeProvider>)
    .toJSON()
}

describe('theme()', () => {
  test('<Example />', () => {
    expect(render(<Example />)).toMatchSnapshot()
  })

  test('<TailwindLike />', () => {
    expect(render(<TailwindLike />)).toMatchSnapshot()
  })
})
