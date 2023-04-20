import { light } from '@charcoal-ui/theme'
import 'jest-styled-components'

import React from 'react'
import renderder from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import Checkbox from '.'
import CheckboxOnlyStyledComponents from './CheckboxOnlyStyledComponents'
import CheckboxWithAria from './CheckboxWithAria'
import CheckboxWithoutAria from './CheckboxWithoutAria'

export function render(children: JSX.Element) {
  return renderder
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

describe('CheckboxWithoutAria', () => {
  test('<CheckboxWithoutAria />', () => {
    function ManyCheckboxWithoutAria() {
      return (
        <>
          {array.map((i) => (
            <CheckboxWithoutAria key={i} label="test" />
          ))}
        </>
      )
    }
    render(<ManyCheckboxWithoutAria />)
  })
})

describe('CheckboxOnlyStyledComponents', () => {
  function ManyCheckboxOnlyStyledComponents() {
    return (
      <>
        {array.map((i) => (
          <CheckboxOnlyStyledComponents key={i} label="test" />
        ))}
      </>
    )
  }
  test('<CheckboxOnlyStyledComponents />', () => {
    render(<ManyCheckboxOnlyStyledComponents />)
  })
})

describe('CheckboxWithAria (without @charcoal-ui/styled)', () => {
  function ManyCheckboxWithAria() {
    return (
      <>
        {array.map((i) => (
          <CheckboxWithAria key={i} label="test" />
        ))}
      </>
    )
  }
  test('<CheckboxOnlyStyledComponents />', () => {
    render(<ManyCheckboxWithAria />)
  })
})
