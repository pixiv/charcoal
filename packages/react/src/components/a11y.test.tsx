import path from 'path'
import glob from 'glob'
import { axe, toHaveNoViolations } from 'jest-axe'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { Story } from '../_lib/compat'
import ComponentAbstraction, { DefaultLink } from '../core/ComponentAbstraction'
import { light, dark } from '@charcoal-ui/theme'

expect.extend(toHaveNoViolations)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface StoryWithMetadata<ArgsType = any> {
  filename: string
  name: string
  story: Story<ArgsType>
  args: ArgsType
}

const stories: StoryWithMetadata[] = glob
  .sync(path.resolve(__dirname, '**/*.story.tsx'))
  .flatMap((filePath) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const exports = require(`./${path.relative(
      __dirname,
      filePath
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    )}`) as Record<string, any>

    return Object.entries(exports)
      .filter(
        ([exportName, exportValue]) =>
          exportName !== 'default' && typeof exportValue === 'function'
      )
      .map(([exportName, exportValue]) => ({
        filename: path.relative(__dirname, filePath),
        name: exportName,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        story: exportValue as Story<any>,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        args: { ...exports.default.args, ...exportValue.args },
      }))
  })

const themes = Object.entries({
  light,
  dark,
})

const links = Object.entries({
  DefaultLink,
})

const div = document.body.appendChild(document.createElement('div'))

beforeEach(() => {
  global.IntersectionObserver = jest.fn().mockImplementation(() => ({
    observe() {
      return null
    },
    disconnect() {
      return null
    },
  }))

  global.matchMedia = jest.fn().mockImplementation(() => ({
    matches: true,
    media: '(max-width: 600px)',
    addEventListener() {
      // Do Nothing
    },
    removeEventListener() {
      // Do Nothing
    },
  }))
})

describe.each(themes)('using %s theme', (_name, theme) => {
  describe.each(links)('using %s component', (_name, link) => {
    describe.each(stories)(
      'storiesOf($filename).add($name)',
      ({ story: Story, args }) => {
        it('has no accessibility violations', async () => {
          expect(() => {
            render(
              <ThemeProvider theme={theme}>
                <ComponentAbstraction components={{ Link: link }}>
                  <Story {...args} />
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
