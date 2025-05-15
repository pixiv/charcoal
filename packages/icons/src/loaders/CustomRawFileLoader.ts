import { KnownIconFile } from '../charcoalIconFiles'
import { CharcoalIconFilesLoader } from './CharcoalIconFilesLoader'

export class CustomRawFileLoader extends CharcoalIconFilesLoader {
  /**
   * icons-filesと同じ型のアイコンをしまっとくところ
   */
  static filePackages = new Map<string, () => Promise<string>>()

  get importIconFile() {
    const icon = CustomRawFileLoader.filePackages.get(this._name)
    if (icon !== undefined) return icon

    throw new Error('Custom icon file was not found')
  }
}

export function addRawFile(name: string, importFn: () => Promise<string>) {
  CustomRawFileLoader.filePackages.set(name, importFn)
}

/**
 * 登録されているfile packagesにiconがあればtrue
 */
export function isKnownRawIconFile(
  name: string
): name is KnownIconFile {
  return CustomRawFileLoader.filePackages.has(name)
}
