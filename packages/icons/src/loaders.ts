import { Loadable, BaseLoader } from './BaseLoader'

/**
 * オブジェクトプール。Loader のインスタンスは作り次第ここに入れる
 *
 * 同じアイコンへの複数回のリクエストが起きないためには、Loader がこの中でユニークでないと行けない
 */
const pool = new Map<string, Loadable>()

/**
 * アイコンを特定の URL から取得する Loader
 */
export class UrlLoader implements Loadable {
  private fetcher: BaseLoader

  static find(name: string) {
    return pool.get(name)
  }

  static register(name: string, url: string) {
    const loader = new UrlLoader(name, url)

    pool.set(name, loader)
  }

  private constructor(name: string, url: string) {
    this.fetcher = new BaseLoader(name, () => Promise.resolve(url))
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
  private fetcher: BaseLoader

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
    this.fetcher = new BaseLoader(name, () => getSourceFromName(name))
  }

  fetch(): Promise<string> {
    return this.fetcher.fetch()
  }

  isLoading() {
    return this.fetcher.isLoading()
  }
}

interface SvgModule {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  __esModule: true
  default: string
}

async function getSourceFromName(fullName: string) {
  const [size, name] = fullName.split('/')

  const { default: filename } = (await import(
    `../svg/${encodeURIComponent(size)}/${encodeURIComponent(name)}.svg`
  )) as SvgModule

  return filename
}
