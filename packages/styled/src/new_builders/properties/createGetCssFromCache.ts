import { CSS } from '../type'

export function createGetCssFromCache() {
  const cacheMap: Map<string, CSS> = new Map()
  return function getCss(key: string, f: () => CSS) {
    let obj = cacheMap.get(key)
    if (obj) {
      return obj
    }
    obj = f()
    cacheMap.set(key, obj)
    return obj
  }
}
