import charcoalUiIconFiles from '@charcoal-ui/icon-files'

export default charcoalUiIconFiles
export type KnownIconFile = keyof typeof charcoalUiIconFiles
export const KNOWN_ICON_FILES = Object.keys(
  charcoalUiIconFiles
) as KnownIconFile[]
