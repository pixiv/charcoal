import { PixivIconLoadError } from './PixivIconLoadError'
import { Loadable } from './Loadable'
import { KnownIconFile } from '../charcoalIconFiles'
import { IconFiles } from '@charcoal-ui/icon-types'

declare global {
  interface Window {
    filePackages: Map<string, () => Promise<string>>
  }
}

/**
 * icons-filesと同じ型のパッケージをしまっとくところ
 */
window.filePackages = new Map<string, () => Promise<string>>()

export class CustomFilePackageLoader implements Loadable {
  private _name: KnownIconFile
  private _resultSvg: string | undefined = undefined
  private _promise: Promise<string> | undefined = undefined

  constructor(name: KnownIconFile) {
    this._name = name
  }

  get importIconFile() {
    const icon = window.filePackages.get(this._name)
    if (icon !== undefined) return icon

    throw new Error('Custom icon file was not found')
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

export function addIconFilePackage(files: IconFiles) {
  Object.entries(files).forEach(([key, value]) => {
    if (!key.includes('/')) {
      throw new TypeError(
        `${key} is not a valid icon name. "name" must be named like [size]/[Name].`
      )
    }

    window.filePackages.set(key, value)
  })
}

/**
 * 登録されているfile packagesにiconがあればtrue
 */
export function isKnownIconFileInCustomFilePackage(
  name: string
): name is KnownIconFile {
  return window.filePackages.has(name)
}
