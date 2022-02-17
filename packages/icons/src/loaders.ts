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

function createLoader(getPath: (attributeName: string) => Promise<string>) {
  return async function getSvgString(attributeName: string): Promise<string> {
    if (cache.has(attributeName)) {
      return cache.get(attributeName)!
    }

    const rawSvg = await getPath(attributeName)
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
  }
}

export type Loader = ReturnType<typeof createLoader>

const loadFromRawUrl: Loader = createLoader((attributeName) =>
  Promise.resolve(attributeName)
)

const loadFromFile: Loader = createLoader(async (attributeName) => {
  const [size, name] = attributeName.split('/')

  const { default: filename } = (await import(
    `../svg/${encodeURIComponent(size)}/${encodeURIComponent(name)}.svg`
  )) as SvgModule

  return filename
})

export const loaders = { loadFromRawUrl, loadFromFile }
