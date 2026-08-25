export type NotificationName = 'snackbar' | 'toast'
export type Position = 'top' | 'bottom'
export type NotificationOrder = 'queue' | 'replace'

export type UseNotificationOptions = {
  position?: Position
  /**
   * 画面端からの距離（ピクセル）
   * @default 16
   */
  offset?: number
  /**
   * 通知を表示する時間（ミリ秒）。負の値は 0、数値でない値は 5000 として扱う
   * @default 5000
   */
  duration?: number
  /**
   * 表示中の通知がある場合の次の通知の表示方法
   * @default 'queue'
   */
  order?: NotificationOrder
}

export type NotificationProps = UseNotificationOptions & {
  zIndex?: number
  portalContainer?: HTMLElement
  className?: string
}
