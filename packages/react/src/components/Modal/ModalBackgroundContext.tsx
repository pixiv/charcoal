import * as React from 'react'

/**
 * ModalBackgroundのElementが入ったコンテキスト
 */
export const ModalBackgroundContext: React.Context<HTMLElement | null> = React.createContext<HTMLElement | null>(
  null
)
