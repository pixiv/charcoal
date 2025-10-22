import { isKnownIconFile } from '../charcoalIconFiles'
import { CharcoalIconFilesLoader } from './CharcoalIconFilesLoader'
import { CustomRawFileLoader, isKnownRawIconFile } from './CustomRawFileLoader'
import { CustomIconLoader } from './CustomIconLoader'
import { Loadable } from './Loadable'
import { PixivIconLoadError } from './PixivIconLoadError'

/**
 * icon をロードするオブジェクトのプール。Loader のインスタンスは作り次第ここに入れる
 *
 * 同じアイコンへの複数回のリクエストが起きないためには、Loader がこの中でユニークでないと行けない
 */
const loaders = new Map<string, Loadable>()

export function addCustomIcon(name: string, filePathOrUrl: string): void {
  loaders.set(name, new CustomIconLoader(name, filePathOrUrl))
}

export async function getIcon(name: string): Promise<string> {
  const loader = resolveIconLoader(name)
  if (loader == null) {
    throw new PixivIconLoadError(name, 'Loader was not found')
  }

  try {
    const svg = await loader.fetch()
    if (typeof svg !== 'string') {
      // eslint-disable-next-line no-console
      console.warn(
        `${name}: Expected load result to be a string, but received an unexpected type.`,
      )
    }

    return svg
  } catch (e) {
    if (e instanceof PixivIconLoadError) {
      throw e
    }
    throw new PixivIconLoadError(name, e)
  }
}

function resolveIconLoader(name: string) {
  // 登録済み or キャッシュ済みの場合
  // addCustomIcon で登録された CustomIconLoader は常にこっちを通る
  const registeredLoader = loaders.get(name)
  if (registeredLoader) {
    return registeredLoader
  }

  // addRawFile で登録されたもの
  if (isKnownRawIconFile(name)) {
    const customFilePackageLoader = new CustomRawFileLoader(name)
    loaders.set(name, customFilePackageLoader)
    return customFilePackageLoader
  }

  if (isKnownIconFile(name)) {
    // `@charcoal-ui/icon-files` に収録されているアイコンにはこれを返す
    const charcoalIconFilesLoader = new CharcoalIconFilesLoader(name)
    loaders.set(name, charcoalIconFilesLoader)
    return charcoalIconFilesLoader
  }

  // 存在しないアイコンにはこれを返す
  return null
}
