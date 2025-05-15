import { IconFiles } from '../types.js'

const files: IconFiles = {
  '16/TestIconFileThatNeverExists': () =>
    import('./TestIconThatNeverExists.js').then((m) => m.default),
}
export default files
