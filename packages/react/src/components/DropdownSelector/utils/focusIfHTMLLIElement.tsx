import { handleFocusByKeyBoard } from "./handleFocusByKeyBoard";

/**
 * li要素ならフォーカスしてスクロールスクロール領域に見えるように親要素をスクロールする
 * @param element
 */
export function focusIfHTMLLIElement(element: Node | null | undefined) {
  if (element instanceof HTMLLIElement) {
    element.focus({ preventScroll: true });
    handleFocusByKeyBoard(element);
  }
}
