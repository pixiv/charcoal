import 'jest-styled-components'

import React from 'react'
import Button from '.'
import renderder from 'react-test-renderer'
import styled, { ThemeProvider } from 'styled-components'
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
  test('as="a"でaタグが使えるか', () => {
    expect(
      render(
        <Button as="a" href="#">
          Hello
        </Button>
      )
    ).toMatchSnapshot()
  })
})

describe('StyledLink', () => {
  test('as={StyledLink}でスタイルが上書きされたaタグが使えるか', () => {
    expect(
      render(
        <Button as={StyledLink} href="#">
          Hello
        </Button>
      )
    ).toMatchSnapshot()
  })
})

const StyledLink = styled.a`
  color: red;
`
