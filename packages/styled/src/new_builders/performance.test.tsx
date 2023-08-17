import { light } from '@charcoal-ui/theme'
import 'jest-styled-components'

import renderder from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import { myTheme } from '../storyHelper'
import { Test1_New, Test1_Old } from './performance.story'

function render(children: JSX.Element) {
  return renderder
    .create(<ThemeProvider theme={myTheme(light)}>{children}</ThemeProvider>)
    .toJSON()
}

const CHILDREN_NUMBER = 100
const PARENT_NUMBER = 100

describe('performance', () => {
  test('old', () => {
    const start = performance.now()
    expect(
      render(
        <>
          {' '}
          {Array.from({ length: PARENT_NUMBER }).map((_, i) => (
            <Test1_Old n={CHILDREN_NUMBER} key={i} />
          ))}{' '}
        </>
      )
    )
    console.log('old', performance.now() - start)
  })
  test('new', () => {
    const start = performance.now()
    expect(
      render(
        <>
          {' '}
          {Array.from({ length: PARENT_NUMBER }).map((_, i) => (
            <Test1_New n={CHILDREN_NUMBER} key={i} />
          ))}{' '}
        </>
      )
    )
    console.log('new', performance.now() - start)
  })
})
