import charcoalIconFiles from '@charcoal-ui/icon-files'
import type charcoalIconFilesV2 from '@charcoal-ui/icon-files/v2'

export default charcoalIconFiles
export type KnownIconFile = keyof typeof charcoalIconFiles
export type KnownIconFileV2 = keyof typeof charcoalIconFilesV2
export const KNOWN_ICON_FILES = Object.keys(
  charcoalIconFiles
) as KnownIconFile[]

export function isKnownIconFile(name: string): name is KnownIconFile {
  return name in charcoalIconFiles
}
