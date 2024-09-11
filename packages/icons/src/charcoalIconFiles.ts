import type charcoalIconFiles from '@charcoal-ui/icon-files'

export default charcoalIconFiles
export type KnownIconFile = keyof typeof charcoalIconFiles
export const KNOWN_ICON_FILES: KnownIconFile[] = []

export function isKnownIconFile(name: string): name is KnownIconFile {
  return true
}
