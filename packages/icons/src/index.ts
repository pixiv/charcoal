import { PixivIcon } from './PixivIcon'
import { __SERVER__ } from './ssr'
export { PixivIcon, type KnownIconType, type Props } from './PixivIcon'
export { KNOWN_ICON_FILES } from './charcoalIconFiles'
export { PixivIconLoadError } from './loaders/PixivIconLoadError'
export { calcActualIconSize } from './utils'

declare global {
  interface Window {
    PixivIcon: typeof PixivIcon
  }
}

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  export namespace JSX {
    interface IntrinsicElements {
      'pixiv-icon': import('./PixivIcon').Props
    }
  }
}

if (!__SERVER__) {
  // TODO: HMR対応
  if (!window.customElements.get(PixivIcon.tagName)) {
    window.PixivIcon = PixivIcon
    window.customElements.define(PixivIcon.tagName, PixivIcon)
  }
}
