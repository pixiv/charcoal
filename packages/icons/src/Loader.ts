const cache = new Map<string, string>()

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
  private _isLoading = false

  constructor(protected attributeName: string) {}

  abstract getPath(attributeName: string): Promise<string>

  isLoading() {
    return this._isLoading
  }

  async call() {
    const { attributeName } = this

    if (cache.has(attributeName)) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return cache.get(attributeName)!
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

      cache.set(attributeName, rawSvg)

      return rawSvg
    } finally {
      this._isLoading = false
    }
  }
}

export class UrlLoader extends Loader {
  getPath(attributeName: string) {
    return Promise.resolve(attributeName)
  }
}

export class FileLoader extends Loader {
  async getPath(attributeName: string) {
    const [size, name] = attributeName.split('/')

    const { default: filename } = (await import(
      `../svg/${encodeURIComponent(size)}/${encodeURIComponent(name)}.svg`
    )) as SvgModule

    return filename
  }
}
