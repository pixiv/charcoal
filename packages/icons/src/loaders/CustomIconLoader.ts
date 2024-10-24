import { PixivIconLoadError } from './PixivIconLoadError'
import { Loadable } from './Loadable'

/**
 * `PixivIcon.extend()` で登録されたカスタムのアイコンを取得する
 */
export class CustomIconLoader implements Loadable {
  private _name: string
  private _filePathOrUrl: string
  private _resultSvg: string | undefined = undefined
  private _promise: Promise<string> | undefined = undefined

  constructor(name: string, filePathOrUrl: string) {
    this._name = name
    this._filePathOrUrl = filePathOrUrl
  }

  get trusted() {
    return false
  }

  async fetch(): Promise<string> {
    if (this._resultSvg !== undefined) {
      return this._resultSvg
    }

    if (this._promise) {
      return this._promise
    }

    this._promise = fetch(this._filePathOrUrl)
      .then((response) => {
        if (!response.ok) {
          throw new PixivIconLoadError(this._name, 'Response is not ok')
        }

        return response.text()
      })
      .then((svg) => {
        this._resultSvg = svg
        return this._resultSvg
      })
      .catch((e) => {
        if (e instanceof PixivIconLoadError) {
          throw e
        }
        throw new PixivIconLoadError(this._name, e)
      })
      .finally(() => {
        this._promise = undefined
      })

    return this._promise
  }
}
