import { dark, light } from '@charcoal-ui/theme'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import { Story } from '../../_lib/compat'
import path from 'path'
import glob from 'glob'

import 'jest-styled-components'

function render(children: JSX.Element) {
  return renderer.create(children).toJSON()
}

const themes = Object.entries({
  light,
  dark,
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface StoryWithMetadata<ArgsType = any> {
  filename: string
  name: string
  story: Story<ArgsType>
  args: ArgsType
}
const stories: StoryWithMetadata[] = glob
  .sync(path.resolve(__dirname, '*.story.tsx'))
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

describe.each(themes)('using %s theme', (_name, theme) => {
  describe.each(stories)(
    'storiesOf($filename).add($name)',
    ({ story: Story, args }) => {
      it('snapshot', () => {
        expect(
          render(
            <ThemeProvider theme={theme}>
              <Story {...args} />
            </ThemeProvider>
          )
        ).toMatchSnapshot()
      })
    }
  )
})
