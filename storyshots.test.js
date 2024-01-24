import initStoryshots, {
  multiSnapshotWithOptions,
} from '@storybook/addon-storyshots'
import { styleSheetSerializer } from 'jest-styled-components'

initStoryshots({
  test: multiSnapshotWithOptions(),
  snapshotSerializers: [styleSheetSerializer],
  storyKindRegex: /^((?!Icons\/).)*$/,
})
