import { light } from '@charcoal-ui/theme'
import 'jest-styled-components'

import React from 'react'
import renderder from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

export function render(children: JSX.Element) {
  return renderder
    .create(<ThemeProvider theme={light}>{children}</ThemeProvider>)
    .toJSON()
}
