export type NotificationName = 'snackbar' | 'toast'
export type Position = 'top' | 'bottom'

export type NotificationProps = {
  position?: Position
  /**
   * 画面端からの距離（ピクセル）
   * @default 16
   */
  offset?: number
  zIndex?: number
  portalContainer?: HTMLElement
  className?: string
}
