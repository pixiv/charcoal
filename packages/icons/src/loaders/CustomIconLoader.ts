import { PixivIconLoadError } from './PixivIconLoadError'
import { Loadable } from './Loadable'

/**
 * PixivIcon.extend() で登録されたカスタムのアイコンを取得する
 */
export class CustomIconLoader implements Loadable {
  private _resultSvg: string | undefined = undefined
  private _promise: Promise<string> | undefined = undefined

  constructor(private name: string, private filePathOrUrl: string) {}

  async fetch(): Promise<string> {
    if (this._resultSvg !== undefined) {
      return this._resultSvg
    }

    if (this._promise) {
      return this._promise
    }

    this._promise = fetch(this.filePathOrUrl)
      .then((response) => {
        if (!response.ok) {
          throw new PixivIconLoadError(this.name)
        }

        return response.text()
      })
      .then((svg) => {
        this._resultSvg = svg
        return this._resultSvg
      })
      .finally(() => {
        this._promise = undefined
      })

    return this._promise
  }

  isLoading() {
    return this._promise !== undefined
  }
}
