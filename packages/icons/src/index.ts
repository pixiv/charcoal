import { PixivIcon, Props } from './PixivIcon'
export { PixivIcon, type KnownIconType, type Props } from './PixivIcon'
export { PixivIconLoadError } from './loaders'

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

// TODO: HMR対応
if (!window.customElements.get(PixivIcon.tagName)) {
  window.PixivIcon = PixivIcon
  window.customElements.define(PixivIcon.tagName, PixivIcon)
}
