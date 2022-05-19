const pool = new Map<string, Loader>()

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

export abstract class Loader {
  private _promise: Promise<string> | undefined = undefined
  private _resultSvg: string | undefined = undefined

  abstract getAttributeName(): string
  abstract getPath(): Promise<string>

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

    this._promise = this.getPath()
      .then((path) => fetch(path))
      .then((response) => {
        if (!response.ok) {
          throw new PixivIconLoadError(
            `Failed to fetch <pixiv-icon name="${this.getAttributeName()}">`
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

export class UrlLoader extends Loader {
  static find(attributeName: string) {
    return pool.get(attributeName)
  }

  static create(attributeName: string, url: string) {
    const loader = new UrlLoader(attributeName, url)

    pool.set(attributeName, loader)
  }

  constructor(private attributeName: string, private url: string) {
    super()
  }

  override getPath() {
    return Promise.resolve(this.url)
  }

  override getAttributeName() {
    return this.attributeName
  }
}

export class FileLoader extends Loader {
  static findOrCreate(attributeName: string) {
    const existing = pool.get(attributeName)
    if (existing) {
      return existing
    }

    const loader = new FileLoader(attributeName)
    pool.set(attributeName, loader)

    return loader
  }

  constructor(private attributeName: string) {
    super()
  }

  override async getPath() {
    const [size, name] = this.getAttributeName().split('/')

    const { default: filename } = (await import(
      `../svg/${encodeURIComponent(size)}/${encodeURIComponent(name)}.svg`
    )) as SvgModule

    return filename
  }

  override getAttributeName() {
    return this.attributeName
  }
}
