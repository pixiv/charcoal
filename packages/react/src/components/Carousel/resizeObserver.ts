// 全 el で単一の ResizeObserver を共有する singleton。
let observer: ResizeObserver | null = null
const callbacks = new Map<Element, () => void>()

function getObserver(): ResizeObserver | null {
  // window で SSR を弾く。polyfill が global に ResizeObserver を生やしていても
  // サーバー上では observe しない。
  if (typeof window === 'undefined' || typeof ResizeObserver === 'undefined')
    return null
  if (!observer) {
    observer = new ResizeObserver((entries) => {
      for (const e of entries) callbacks.get(e.target)?.()
    })
  }
  return observer
}

/**
 * `el` のサイズ変化で `cb` を呼ぶ。全要素で単一の ResizeObserver を共有する singleton。
 * 返り値で監視解除（最後の1つで disconnect）。SSR / 非対応環境では no-op。
 */
export function observeResize(el: Element, cb: () => void): () => void {
  const obs = getObserver()
  if (!obs) return () => undefined
  callbacks.set(el, cb)
  obs.observe(el)
  return () => {
    callbacks.delete(el)
    obs.unobserve(el)
    if (callbacks.size === 0) {
      obs.disconnect()
      observer = null
    }
  }
}
