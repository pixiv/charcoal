import 'jest-styled-components'

import Button from '.'
import renderder from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import { light } from '@charcoal-ui/theme'

export function render(children: JSX.Element) {
  return renderder
    .create(<ThemeProvider theme={light}>{children}</ThemeProvider>)
    .toJSON()
}

describe('Basic', () => {
  test('<Button>Hello</Button>', () => {
    expect(render(<Button>Hello</Button>)).toMatchSnapshot()
  })
})

describe('Link', () => {
  test('<Button to="#">Hello</Button>', () => {
    expect(render(<Button to="#">Hello</Button>)).toMatchSnapshot()
  })
})
