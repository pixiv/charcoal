import { light } from '@charcoal-ui/theme'
import 'jest-styled-components'

import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import Checkbox from '.'

export function render(children: JSX.Element) {
  return renderer
    .create(<ThemeProvider theme={light}>{children}</ThemeProvider>)
    .toJSON()
}

const array = [...Array<undefined>(1000)].map((_, i) => i)

describe('Checkbox', () => {
  test('<Checkbox />', () => {
    function ManyCheckbox() {
      return (
        <>
          {array.map((i) => (
            <Checkbox key={i} label="test" />
          ))}
        </>
      )
    }
    render(<ManyCheckbox />)
  })
})
