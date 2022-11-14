import charcoalUiIconFiles, { KnownIconFile } from './charcoalUiIconFiles'

/**
 * オブジェクトプール。Loader のインスタンスは作り次第ここに入れる
 *
 * 同じアイコンへの複数回のリクエストが起きないためには、Loader がこの中でユニークでないと行けない
 */
const loaders = new Map<string, Loadable>()

export function addCustomIcon(name: string, filePathOrUrl: string) {
  loaders.set(name, new CustomIconLoader(name, filePathOrUrl))
}

export function getIcon(name: string) {
  const loader = _getIconLoader(name)

  return loader.fetch()
}

function _getIconLoader(name: string) {
  // 登録済みの場合
  // PixivIcon.extend() で登録された CustomIconLoader は常にこっちを通る
  const registeredLoader = loaders.get(name)
  if (registeredLoader) {
    return registeredLoader
  }

  // ない
  if (!(name in charcoalUiIconFiles)) {
    const nullLoader = new NullLoader(name)
    loaders.set(name, nullLoader)

    return nullLoader
  }

  const charcoalUiIconLoader = new CharcoalIconFilesLoader(
    name,
    charcoalUiIconFiles[name as KnownIconFile]
  )

  loaders.set(name, charcoalUiIconLoader)
  return charcoalUiIconLoader
}

export interface Loadable {
  fetch(): Promise<string>
  isLoading(): boolean
}

export class PixivIconLoadError extends Error {
  constructor(name: string) {
    super(`Failed to fetch <pixiv-icon name="${name}">`)
    Object.setPrototypeOf(this, new.target)
  }
}

/**
 * PixivIcon.extend() で登録されたカスタムのアイコンを取得する
 */
export class CustomIconLoader implements Loadable {
  private _resultSvg: string | undefined = undefined
  private _promise: Promise<string> | undefined = undefined

  constructor(private name: string, private url: string) {}

  async fetch(): Promise<string> {
    if (this._resultSvg !== undefined) {
      return this._resultSvg
    }

    if (this._promise) {
      return this._promise
    }

    this._promise = fetch(this.url)
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

/**
 * @charcoal-ui/icon-files に収録されているアイコンを取ってくる
 */
export class CharcoalIconFilesLoader implements Loadable {
  private _resultSvg: string | undefined = undefined
  private _promise: Promise<string> | undefined = undefined

  constructor(
    private name: string,
    private getCharcoalUiIconFile: () => Promise<string>
  ) {}

  async fetch(): Promise<string> {
    if (this._resultSvg !== undefined) {
      return this._resultSvg
    }

    if (this._promise) {
      return this._promise
    }

    this._promise = this.getCharcoalUiIconFile()
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

  isLoading() {
    return this._promise !== undefined
  }
}

/**
 * アイコンが登録されていない場合に利用する Loader
 */
export class NullLoader implements Loadable {
  constructor(private name: string) {}

  // eslint-disable-next-line @typescript-eslint/require-await
  async fetch(): Promise<string> {
    throw new PixivIconLoadError(this.name)
  }

  isLoading() {
    return false
  }
}
