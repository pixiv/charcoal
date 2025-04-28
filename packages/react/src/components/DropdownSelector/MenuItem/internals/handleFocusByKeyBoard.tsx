/**
 * elementをparentのスクロールビューに入るようにスクロールする
 * parentがスクロール可能でなければelementが見えるようにスクロールする
 *
 * @param element
 * @param parent
 */
export function handleFocusByKeyBoard(element: Element, parent: HTMLElement): void {
  const isScrollable = parent.scrollHeight > parent.clientHeight
  if (isScrollable) {
    const rect = element.getBoundingClientRect()
    const parentRect = parent.getBoundingClientRect()
    if (rect.bottom > parentRect.bottom) {
      parent.scrollTo({
        top: parent.scrollTop + rect.bottom - parentRect.bottom,
      })
    } else if (rect.top < parentRect.top) {
      parent.scrollTo({
        top: parent.scrollTop - (parentRect.top - rect.top),
      })
    }
  } else {
    scrollIfNeeded(element)
  }
}

/**
 * 要素が画面外にあればスクロールする、画面内にあればスクロールしない
 * @param element
 */
function scrollIfNeeded(element: Element) {
  const elementRect = element.getBoundingClientRect()
  const isVisible =
    elementRect.top >= 0 &&
    elementRect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight)

  if (!isVisible) {
    element.scrollIntoView({
      block: 'nearest',
    })
  }
}
