import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots';
import { styleSheetSerializer } from 'jest-styled-components';
import { join } from 'path';

initStoryshots({
  integrityOptions: { cwd: join("..", "..", __dirname) },
  snapshotExtension: ".snap",
  snapshotSerializers: [styleSheetSerializer],
  test: multiSnapshotWithOptions(),
  getStoryshotFile() {

  }
})
