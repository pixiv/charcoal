import { PixivIconLoadError } from './PixivIconLoadError'
import { Loadable } from './Loadable'
import charcoalIconFiles, { KnownIconFile } from '../charcoalIconFiles'
import { IconFiles } from '@charcoal-ui/icon-types'

export class CustomFilePackageLoader implements Loadable {
  private _name: KnownIconFile
  private _resultSvg: string | undefined = undefined
  private _promise: Promise<string> | undefined = undefined

  constructor(name: KnownIconFile) {
    this._name = name
  }

  get importIconFile() {
    return charcoalIconFiles[this._name]
  }

  async fetch(): Promise<string> {
    if (this._resultSvg !== undefined) {
      return this._resultSvg
    }

    if (this._promise) {
      return this._promise
    }

    this._promise = this.importIconFile()
      .then((svg) => {
        this._resultSvg = svg
        return this._resultSvg
      })
      .catch((e) => {
        throw new PixivIconLoadError(this._name, e)
      })
      .finally(() => {
        this._promise = undefined
      })

    return this._promise
  }
}

/**
 * icons-filesと同じ型のパッケージをしまっとくところ
 */
const filePackages = new Map<string, IconFiles>()

export function addIconFilePackage(prefix: string, files: IconFiles) {
  filePackages.set(prefix, files)
}

/**
 * prefixの一致するfile packageが登録されているか
 */
export function isKnownIconFilePackage(prefix: string) {
  return filePackages.has(prefix)
}

/**
 * 登録されているfile packagesにiconがあればtrue
 */
export function isKnownIconFileInCustomFilePackage(
  prefix: string,
  name: string
): name is KnownIconFile {
  const files = filePackages.get(prefix)
  if (files == undefined) return false
  return name in files
}
