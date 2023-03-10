/**
 * スクロールスクロール領域に見えるように親要素をスクロールする
 * @param element
 */

export function handleFocusByKeyBoard(element: HTMLElement) {
  const parent = element.parentElement;
  if (!parent)
    return;
  const rect = element.getBoundingClientRect();
  const parentRect = parent.getBoundingClientRect();
  if (rect.bottom > parentRect.bottom) {
    parent.scrollTo({
      top: parent.scrollTop + rect.bottom - parentRect.bottom,
    });
  } else if (rect.top < parentRect.top) {
    parent.scrollTo({
      top: parent.scrollTop - (parentRect.top - rect.top),
    });
  }
}
