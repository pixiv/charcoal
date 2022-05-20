export class PixivIconLoadError extends Error {
  constructor(message?: string) {
    super(message)
    Object.setPrototypeOf(this, new.target)
  }
}

/**
 * SVG アイコンを取得するクラス
 *
 * 一度リクエストされたアイコンは（リクエスト中のも含め）何度もリクエストしないようになっている
 */
export class BaseLoader {
  private _promise: Promise<string> | undefined = undefined
  private _resultSvg: string | undefined = undefined

  constructor(private name: string, private getSource: () => Promise<string>) {}

  isLoading() {
    return this._promise !== undefined
  }

  async fetch() {
    if (this._resultSvg !== undefined) {
      return this._resultSvg
    }

    if (this._promise) {
      return this._promise
    }

    this._promise = this.getSource()
      .then((src) => fetch(src))
      .then((response) => {
        if (!response.ok) {
          throw new PixivIconLoadError(
            `Failed to fetch <pixiv-icon name="${this.name}">`
          )
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
}

export interface Loadable {
  fetch(): Promise<string>
  isLoading(): boolean
}
