import initStoryshots, {
  multiSnapshotWithOptions,
} from '@storybook/addon-storyshots'
import { styleSheetSerializer } from 'jest-styled-components'

initStoryshots({
  snapshotSerializers: [styleSheetSerializer],
  test: multiSnapshotWithOptions(),
})
