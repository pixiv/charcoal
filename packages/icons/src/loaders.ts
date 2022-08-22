import icons from './icons'

/**
 * オブジェクトプール。Loader のインスタンスは作り次第ここに入れる
 *
 * 同じアイコンへの複数回のリクエストが起きないためには、Loader がこの中でユニークでないと行けない
 */
const pool = new Map<string, Loadable>()

export function findLoader(name: string) {
  return pool.get(name)
}

export function registerUrlLoader(name: string, url: string) {
  const loader = new UrlLoader(name, url)

  pool.set(name, loader)
}

export function findLoaderOrRegisterBundled(name: string) {
  const registeredLoader = findLoader(name)
  if (registeredLoader) {
    return registeredLoader
  }

  const iconUrl = (icons as Record<string, string | undefined>)[name]

  const newLoader =
    iconUrl !== undefined
      ? new UrlLoader(name, iconUrl)
      : new NotRegisteredLoader(name)
  pool.set(name, newLoader)

  return newLoader
}

export interface Loadable {
  fetch(): Promise<string>
  isLoading(): boolean
}

export class PixivIconLoadError extends Error {
  constructor(message?: string) {
    super(message)
    Object.setPrototypeOf(this, new.target)
  }
}

/**
 * アイコンを特定の URL から取得する Loader
 *
 * 一度リクエストされたアイコンは（リクエスト中のも含め）何度もリクエストしないようになっている
 */
export class UrlLoader implements Loadable {
  private _name: string
  private _url: string

  private _promise: Promise<string> | undefined = undefined
  private _resultSvg: string | undefined = undefined

  constructor(name: string, url: string) {
    this._name = name
    this._url = url
  }

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

    this._promise = Promise.resolve(this._url)
      .then((src) => fetch(src))
      .then((response) => {
        if (!response.ok) {
          throw new PixivIconLoadError(
            `Failed to fetch <pixiv-icon name="${this._name}">`
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

/**
 * アイコンが登録されていない場合に利用する Loader
 */
export class NotRegisteredLoader implements Loadable {
  private _name: string

  constructor(name: string) {
    this._name = name
  }

  fetch(): Promise<string> {
    return Promise.reject(
      new PixivIconLoadError(`pixiv-icon "${this._name}" is not registered`)
    )
  }

  isLoading() {
    return false
  }
}
