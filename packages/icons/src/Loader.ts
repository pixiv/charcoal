/**
 * オブジェクトプール。Loader のインスタンスは作り次第ここに入れる
 *
 * 同じアイコンへの複数回のリクエストが起きないためには、Loader がこの中でユニークでないと行けない
 */
const pool = new Map<string, Loadable>()

interface SvgModule {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  __esModule: true
  default: string
}

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
export class SvgFetcher {
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

interface Loadable {
  fetch(): Promise<string>
  isLoading(): boolean
}

/**
 * アイコンを特定の URL から取得する Loader
 */
export class UrlLoader implements Loadable {
  private fetcher: SvgFetcher

  static find(name: string) {
    return pool.get(name)
  }

  static register(name: string, url: string) {
    const loader = new UrlLoader(name, url)

    pool.set(name, loader)
  }

  private constructor(name: string, url: string) {
    this.fetcher = new SvgFetcher(name, () => Promise.resolve(url))
  }

  fetch(): Promise<string> {
    return this.fetcher.fetch()
  }

  isLoading() {
    return this.fetcher.isLoading()
  }
}

/**
 * アイコン名から import すべきファイル名（ このパッケージ内にある ）を解決してくる Loader
 */
export class FileLoader implements Loadable {
  private fetcher: SvgFetcher

  static findOrRegister(name: string) {
    const registeredLoader = pool.get(name)
    if (registeredLoader) {
      return registeredLoader
    }

    const newLoader = new FileLoader(name)
    pool.set(name, newLoader)

    return newLoader
  }

  private constructor(name: string) {
    this.fetcher = new SvgFetcher(name, () => getSourceFromName(name))
  }

  fetch(): Promise<string> {
    return this.fetcher.fetch()
  }

  isLoading() {
    return this.fetcher.isLoading()
  }
}

async function getSourceFromName(fullName: string) {
  const [size, name] = fullName.split('/')

  const { default: filename } = (await import(
    `../svg/${encodeURIComponent(size)}/${encodeURIComponent(name)}.svg`
  )) as SvgModule

  return filename
}
