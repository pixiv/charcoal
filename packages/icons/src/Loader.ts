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

  abstract getPath(_attributeName: string): Promise<string>

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
    const { attributeName, _svg } = this

    if (_svg !== undefined) {
      return _svg
    }

    try {
      this._isLoading = true

      const rawSvg = await this.getPath(attributeName)
        .then((path) => fetch(path))
        .then((response) => {
          if (!response.ok) {
            throw new PixivIconLoadError(
              `Failed to fetch <pixiv-icon name="${attributeName}">`
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
  static find(attributeName: string) {
    return pool.get(attributeName)
  }

  static create(attributeName: string, url: string) {
    const loader = new UrlLoader(attributeName, url)

    return pool.set(attributeName, loader)
  }

  constructor(public attributeName: string, public url: string) {
    super()
  }

  override getPath(_attributeName: string) {
    return Promise.resolve(this.url)
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

  constructor(public attributeName: string) {
    super()
  }

  override async getPath(attributeName: string) {
    const [size, name] = attributeName.split('/')

    const { default: filename } = (await import(
      `../svg/${encodeURIComponent(size)}/${encodeURIComponent(name)}.svg`
    )) as SvgModule

    return filename
  }
}
