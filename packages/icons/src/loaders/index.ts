import { isKnownIconFile } from '../charcoalUiIconFiles'
import { CharcoalIconFilesLoader } from './CharcoalIconFilesLoader'
import { CustomIconLoader } from './CustomIconLoader'
import { Loadable } from './Loadable'
import { NullLoader } from './NullLoader'

/**
 * icon をロードするオブジェクトのプール。Loader のインスタンスは作り次第ここに入れる
 *
 * 同じアイコンへの複数回のリクエストが起きないためには、Loader がこの中でユニークでないと行けない
 */
const loaders = new Map<string, Loadable>()

export function addCustomIcon(name: string, filePathOrUrl: string) {
  loaders.set(name, new CustomIconLoader(name, filePathOrUrl))
}

export function getIcon(name: string) {
  const loader = resolveIconLoader(name)

  return loader.fetch()
}

function resolveIconLoader(name: string) {
  // 登録済み or キャッシュ済みの場合
  // addCustomIcon で登録された CustomIconLoader は常にこっちを通る
  const registeredLoader = loaders.get(name)
  if (registeredLoader) {
    return registeredLoader
  }

  // @charcoal-ui/icon-files に収録されているアイコンにはこれを返す
  if (isKnownIconFile(name)) {
    const charcoalUiIconLoader = new CharcoalIconFilesLoader(name)

    loaders.set(name, charcoalUiIconLoader)
    return charcoalUiIconLoader
  }

  // 存在しないアイコンにはこれを返す
  return new NullLoader(name)
}
