// 中央検出（左右 50% を除外）。root は item の親（scroller）から導出する。
const CENTER_ROOT_MARGIN = '0px -50% 0px -50%'

type CenterEntry = {
  observer: IntersectionObserver
  callbacks: Map<Element, () => void>
}

// root（= el.parentElement）ごとに observer を1つ共有する。
const byRoot = new Map<Element, CenterEntry>()

/**
 * `el` がその親（= scroller）の中央ラインに重なったら `onEnter` を呼ぶ。同一 root の
 * IntersectionObserver を共有する singleton。返り値で監視解除（最後の1つで disconnect）。
 * SSR / 非対応環境では no-op。
 */
export function observeCenter(
  el: HTMLElement,
  onEnter: () => void,
): () => void {
  // window で SSR を弾く。polyfill が global に IntersectionObserver を生やしていても
  // サーバー上では observe しない。
  if (
    typeof window === 'undefined' ||
    typeof IntersectionObserver === 'undefined'
  )
    return () => undefined
  const root = el.parentElement
  if (!root) return () => undefined

  let entry = byRoot.get(root)
  if (!entry) {
    const callbacks = new Map<Element, () => void>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) callbacks.get(e.target)?.()
        }
      },
      { root, rootMargin: CENTER_ROOT_MARGIN, threshold: 0 },
    )
    entry = { observer, callbacks }
    byRoot.set(root, entry)
  }
  entry.callbacks.set(el, onEnter)
  entry.observer.observe(el)

  return () => {
    const e = byRoot.get(root)
    if (!e) return
    e.callbacks.delete(el)
    e.observer.unobserve(el)
    if (e.callbacks.size === 0) {
      e.observer.disconnect()
      byRoot.delete(root)
    }
  }
}
