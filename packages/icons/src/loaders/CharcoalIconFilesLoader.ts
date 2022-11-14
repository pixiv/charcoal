import { PixivIconLoadError } from './PixivIconLoadError'
import { Loadable } from './Loadable'
import charcoalIconFiles, { KnownIconFile } from '../charcoalIconFiles'

/**
 * `@charcoal-ui/icon-files` に収録されているアイコンを取ってくる
 */
export class CharcoalIconFilesLoader implements Loadable {
  private _resultSvg: string | undefined = undefined
  private _promise: Promise<string> | undefined = undefined

  constructor(private name: KnownIconFile) {}

  get importIconFile() {
    return charcoalIconFiles[this.name]
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
      .catch(() => {
        throw new PixivIconLoadError(this.name)
      })
      .finally(() => {
        this._promise = undefined
      })

    return this._promise
  }
}
