import type React from 'react'
import warning from 'warning'
import { KnownIconFile } from './charcoalIconFiles'
import { getIcon, addCustomIcon } from './loaders'
import { __SERVER__ } from './ssr'

const attributes = ['name', 'scale', 'unsafe-non-guideline-scale'] as const

const ROOT_MARGIN = 50

export interface KnownIconType extends Record<KnownIconFile, unknown> {}

export interface Props
  extends Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    'className' | 'css'
  > {
  name: keyof KnownIconType
  scale?: 1 | 2 | 3 | '1' | '2' | '3'
  'unsafe-non-guideline-scale'?: number | string

  // CustomElements は className が使えない。class と書く必要がある
  // https://ja.reactjs.org/docs/web-components.html#using-web-components-in-react
  class?: string
}

type ExtendedIconFile = Exclude<keyof KnownIconType, KnownIconFile>
type Extended = [ExtendedIconFile] extends [never] // NOTE: ExtendedIconFileがneverならKnownIconTypeは拡張されていない
  ? false
  : true

export class PixivIcon extends HTMLElement {
  static readonly tagName = 'pixiv-icon'

  static extend(
    map: Extended extends true
      ? Record<ExtendedIconFile, string>
      : Record<string, string>
  ) {
    warning(!__SERVER__, 'Using `PixivIcon.extend()` on server has no effect')
    if (__SERVER__) {
      return
    }

    Object.entries(map).forEach(([name, filePathOrUrl]) => {
      if (!name.includes('/')) {
        throw new TypeError(
          `${name} is not a valid icon name. "name" must be named like [size]/[Name].`
        )
      }

      addCustomIcon(name, filePathOrUrl)
    })
  }

  static get observedAttributes() {
    return attributes
  }

  private svgContent?: string
  private observer?: IntersectionObserver
  private isVisible = false

  get props() {
    const partial = Object.fromEntries(
      attributes.map((attribute) => [attribute, this.getAttribute(attribute)])
    ) as Record<(typeof attributes)[number], string | null>

    const name = partial.name

    if (name === null) {
      throw new TypeError('property "name" is required.')
    }

    if (!name.includes('/')) {
      throw new TypeError(
        `${name} is not a valid icon name. "name" must be named like [size]/[Name].`
      )
    }

    return {
      ...partial,
      name,
    }
  }

  get forceResizedSize() {
    if (this.props['unsafe-non-guideline-scale'] === null) {
      return null
    }

    const [size] = this.props.name.split('/')
    const scale = Number(this.props['unsafe-non-guideline-scale'])

    switch (size) {
      case 'Inline': {
        return 16 * scale
      }

      default: {
        return Number(size) * scale
      }
    }
  }

  get scaledSize() {
    const [size] = this.props.name.split('/')

    const scale = Number(this.props.scale ?? '1')

    switch (size) {
      case 'Inline': {
        switch (scale) {
          case 2: {
            return 32
          }

          default: {
            return 16
          }
        }
      }

      case '24': {
        return Number(size) * scale
      }

      default: {
        return Number(size)
      }
    }
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  async connectedCallback() {
    this.render()
    await this.waitUntilVisible()
    this.isVisible = true
    await this.loadSvg(this.props.name)
  }

  disconnectedCallback() {
    this.observer?.disconnect()
    this.observer = undefined
    this.isVisible = false
  }

  attributeChangedCallback(
    attr: string,
    _oldValue: string | null,
    newValue: string
  ) {
    // 非表示の場合はロードしない
    if (!this.isVisible) {
      return
    }

    // name が変更された場合必ず再読み込みを試みる
    if (attr === 'name') {
      void this.loadSvg(newValue)
      return
    }

    // SVG が読み込み済み && scale などの変更だけならそこだけ反映すればいい
    if (this.svgContent !== undefined) {
      this.render()
      return
    }

    // まだ SVG が読み込めてないなら load
    void this.loadSvg(this.props.name)
  }

  render() {
    const size = this.forceResizedSize ?? this.scaledSize

    if (typeof size !== 'number') {
      throw new TypeError(`icon size must be number but found ${typeof size}`)
    }
    if (Number.isNaN(size)) {
      throw new TypeError(`icon size must not be NaN`)
    }

    const style = `<style>
  :host {
    display: inline-flex;
    --size: ${size}px;
  }

  svg {
    width: var(--size);
    height: var(--size);
  }
</style>`

    const svg =
      this.svgContent !== undefined
        ? this.svgContent
        : `<svg viewBox="0 0 ${size} ${size}"></svg>`

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.shadowRoot!.innerHTML = style + svg
  }

  private async loadSvg(name: string) {
    const iconResult = await getIcon(name)

    if (iconResult.trusted) {
      this.svgContent = iconResult.svgContent
    } else {
      const { default: DOMPurify } = await import('dompurify')
      this.svgContent = DOMPurify.sanitize(iconResult.svgContent, {
        USE_PROFILES: { svg: true, svgFilters: true },
      })
    }
    this.render()
  }

  private waitUntilVisible() {
    return new Promise<void>((resolve) => {
      this.observer = new IntersectionObserver(
        ([first]) => {
          if (first.isIntersecting) {
            this.observer?.disconnect()
            this.observer = undefined
            resolve()
          }
        },
        { rootMargin: `${ROOT_MARGIN}px` }
      )

      this.observer.observe(this)
    })
  }
}
