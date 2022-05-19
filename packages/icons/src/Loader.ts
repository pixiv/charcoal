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
  abstract attributeName: string

  private _promise: Promise<string> | undefined = undefined
  private _svg: string | undefined = undefined

  abstract getPath(): Promise<string>

  isLoading() {
    return this._promise !== undefined
  }

  async fetch() {
    if (this._svg !== undefined) {
      return this._svg
    }

    if (this._promise) {
      return this._promise
    }

    this._promise = this.getPath()
      .then((path) => fetch(path))
      .then((response) => {
        if (!response.ok) {
          throw new PixivIconLoadError(
            `Failed to fetch <pixiv-icon name="${this.attributeName}">`
          )
        }

        return response.text()
      })
      .then((svg) => {
        this._svg = svg
        return this._svg
      })
      .finally(() => {
        this._promise = undefined
      })

    return this._promise
  }
}

export class UrlLoader extends Loader {
  attributeName: string
  url: string

  static find(attributeName: string) {
    return pool.get(attributeName)
  }

  static create(attributeName: string, url: string) {
    const loader = new UrlLoader(attributeName, url)

    return pool.set(attributeName, loader)
  }

  constructor(attributeName: string, url: string) {
    super()
    this.attributeName = attributeName
    this.url = url
  }

  override getPath() {
    return Promise.resolve(this.url)
  }
}

export class FileLoader extends Loader {
  attributeName: string

  static findOrCreate(attributeName: string) {
    const existing = pool.get(attributeName)
    if (existing) {
      return existing
    }

    const loader = new FileLoader(attributeName)
    pool.set(attributeName, loader)

    return loader
  }

  constructor(attributeName: string) {
    super()
    this.attributeName = attributeName
  }

  override async getPath() {
    const [size, name] = this.attributeName.split('/')

    const { default: filename } = (await import(
      `../svg/${encodeURIComponent(size)}/${encodeURIComponent(name)}.svg`
    )) as SvgModule

    return filename
  }
}
