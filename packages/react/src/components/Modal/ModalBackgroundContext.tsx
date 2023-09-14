import * as React from 'react'

/**
 * ModalBackgroundのElementを取得、設定するコンテキスト
 * Modal内でPopoverを利用する際のportalContainerとして利用する
 */
export const ModalBackgroundContext = React.createContext<{
  element: HTMLElement | null
  setElement: (el: HTMLElement) => void
}>({
  element: null,
  setElement: () => null,
})
