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

  abstract getIconName(): string
  abstract getIconSource(): Promise<string>

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

    this._promise = this.getIconSource()
      .then((path) => fetch(path))
      .then((response) => {
        if (!response.ok) {
          throw new PixivIconLoadError(
            `Failed to fetch <pixiv-icon name="${this.getIconName()}">`
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
  static find(name: string) {
    return pool.get(name)
  }

  static create(name: string, url: string) {
    const loader = new UrlLoader(name, url)

    pool.set(name, loader)
  }

  constructor(private name: string, private url: string) {
    super()
  }

  override getIconSource() {
    return Promise.resolve(this.url)
  }

  override getIconName() {
    return this.name
  }
}

export class FileLoader extends Loader {
  static findOrCreate(name: string) {
    const existing = pool.get(name)
    if (existing) {
      return existing
    }

    const loader = new FileLoader(name)
    pool.set(name, loader)

    return loader
  }

  constructor(private name: string) {
    super()
  }

  override async getIconSource() {
    const [size, name] = this.getIconName().split('/')

    const { default: filename } = (await import(
      `../svg/${encodeURIComponent(size)}/${encodeURIComponent(name)}.svg`
    )) as SvgModule

    return filename
  }

  override getIconName() {
    return this.name
  }
}
