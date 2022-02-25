import path from 'path'
import glob from 'glob'
import { axe, toHaveNoViolations } from 'jest-axe'
import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { Story } from '../_lib/compat'
import ComponentAbstraction, { DefaultLink } from '../core/ComponentAbstraction'
import createTheme from '@charcoal/styled'
const { light, dark } = createTheme

expect.extend(toHaveNoViolations)

const stories = glob
  .sync(path.resolve(__dirname, '**/*.story.tsx'))
  .flatMap((filename) =>
    Object.entries(
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      require(`./${path.relative(__dirname, filename)}`) as Record<
        string,
        Story<any>
      >
    )
      .filter(
        ([exportName, story]) =>
          exportName !== 'default' && typeof story === 'function'
      )
      .map<[string, string, Story<any>]>(([exportName, story]) => [
        path.relative(__dirname, filename),
        exportName,
        story,
      ])
  )

const themes = Object.entries({
  light,
  dark,
})

const links = Object.entries({
  DefaultLink,
})

const div = document.body.appendChild(document.createElement('div'))

beforeEach(() => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  global.__DEV__ = {}

  global.IntersectionObserver = jest.fn().mockImplementation(() => ({
    observe() {
      return null
    },
    disconnect() {
      return null
    },
  }))
})

describe.each(themes)('using %s theme', (_name, theme) => {
  describe.each(links)('using %s component', (_name, link) => {
    describe.each(stories)(
      'storiesOf(%s).add(%s)',
      (_filename, _exportName, story) => {
        it('has no accessibility violations', async () => {
          expect(() => {
            render(
              <ThemeProvider theme={theme}>
                <ComponentAbstraction components={{ Link: link }}>
                  {story(story.args)}
                </ComponentAbstraction>
              </ThemeProvider>
            )
          }).not.toThrow()

          expect(await axe(div)).toHaveNoViolations()
        })
      }
    )
  })
})
