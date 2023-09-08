import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots';
import { styleSheetSerializer } from 'jest-styled-components';
import { join } from 'path';

initStoryshots({
  snapshotSerializers: [styleSheetSerializer],
  integrityOptions: {
    cwd: join(__dirname, "src", "components")
  },
  test: multiSnapshotWithOptions()
})
