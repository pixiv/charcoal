import { PixivIcon, Props } from './PixivIcon'
import { __SERVER__ } from './ssr'
export { PixivIcon, type KnownIconType, type Props } from './PixivIcon'
export { KNOWN_ICON_FILES } from './filenames'
export { PixivIconLoadError } from './loaders/base'

declare global {
  interface Window {
    PixivIcon: typeof PixivIcon
  }

  // eslint-disable-next-line @typescript-eslint/no-namespace
  export namespace JSX {
    interface IntrinsicElements {
      'pixiv-icon': Props
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
