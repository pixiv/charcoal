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

  private _isLoading = false
  private _svg: string | undefined = undefined

  abstract getPath(): Promise<string>

  isLoading() {
    return this._isLoading
  }

  unwrapToSVG() {
    if (this._svg === undefined) {
      throw new Error(
        `SVG for <pixiv-icon name="${this.attributeName}"> is not loaded yet`
      )
    }

    return this._svg
  }

  async call() {
    if (this._svg !== undefined) {
      return this._svg
    }

    try {
      this._isLoading = true

      const rawSvg = await this.getPath()
        .then((path) => fetch(path))
        .then((response) => {
          if (!response.ok) {
            throw new PixivIconLoadError(
              `Failed to fetch <pixiv-icon name="${this.attributeName}">`
            )
          }

          return response.text()
        })

      return rawSvg
    } finally {
      this._isLoading = false
    }
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
