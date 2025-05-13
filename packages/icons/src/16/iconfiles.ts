import { IconFiles } from '@charcoal-ui/icon-types'

const files: IconFiles = {
  '16/TestIconFileThatNeverExists': () =>
    import('./TestIconThatNeverExists.js').then((m) => m.default),
}
export default files
