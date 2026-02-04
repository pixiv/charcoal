import type React from 'react'
import { KnownIconFile } from './charcoalIconFiles'
import { getIcon, addCustomIcon } from './loaders'
import { addRawFile } from './loaders/CustomRawFileLoader'
import { __SERVER__ } from './ssr'

const attributes = ['name', 'scale', 'unsafe-non-guideline-scale', 'fixed-size'] as const

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
  'fixed-size'?: 16 | 24 | 32 | 'Inline'

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

  /**
   * NOTE: icon content should be sanitized before pass to extend()
   *
   * XSSに注意すること。
   * 登録したファイルの中身が直接domに反映されるため、XSSに繋がる可能性があります。
   * 信用していないソースからアイコンを追加する場合dom-purifyなどを経由してください。
   */
  static extend(
    map: Extended extends true
      ? Record<ExtendedIconFile, string | (() => Promise<string>)>
      : Record<string, string | (() => Promise<string>)>,
  ): void {
    if (__SERVER__) {
      return
    }

    Object.entries(map).forEach(([name, filePathOrUrlOrImportFn]) => {
      if (!name.includes('/')) {
        throw new TypeError(
          `${name} is not a valid icon name. "name" must be named like [size]/[Name].`,
        )
      }

      if (typeof filePathOrUrlOrImportFn === 'string') {
        addCustomIcon(name, filePathOrUrlOrImportFn)
      }

      if (typeof filePathOrUrlOrImportFn === 'function') {
        addRawFile(name, filePathOrUrlOrImportFn)
      }
    })
  }

  static get observedAttributes(): typeof attributes {
    return attributes
  }

  private svgContent?: string
  private observer?: IntersectionObserver
  private isVisible = false

  get props(): {
    name: string
    scale: string | null
    'unsafe-non-guideline-scale': string | null
    'fixed-size': string | null
  } {
    const partial = Object.fromEntries(
      attributes.map((attribute) => [attribute, this.getAttribute(attribute)]),
    ) as Record<(typeof attributes)[number], string | null>

    const name = partial.name

    if (name === null) {
      throw new TypeError('property "name" is required.')
    }

    if (!name.includes('/')) {
      throw new TypeError(
        `${name} is not a valid icon name. "name" must be named like [size]/[Name].`,
      )
    }

    return {
      ...partial,
      name,
    }
  }

  get forceResizedSize(): number | null {
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

  get fixedSize(): number | null {
    const fixedSize = this.props['fixed-size']
    if (fixedSize === null) {
      return null
    }

    switch (fixedSize) {
      case 'Inline': {
        return 16
      }

      case '16':
      case '24':
      case '32': {
        return Number(fixedSize)
      }

      default: {
        return Number(fixedSize)
      }
    }
  }

  get scaledSize(): number {
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

  async connectedCallback(): Promise<void> {
    this.render()
    await this.waitUntilVisible()
    this.isVisible = true
    await this.loadSvg(this.props.name)
  }

  disconnectedCallback(): void {
    this.observer?.disconnect()
    this.observer = undefined
    this.isVisible = false
  }

  attributeChangedCallback(
    attr: string,
    _oldValue: string | null,
    newValue: string,
  ): void {
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

  render(): void {
    const size = this.fixedSize ?? this.forceResizedSize ?? this.scaledSize

    if (!Number.isFinite(size)) {
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

    // NOTE: User should sanitize the svg content before passing to charcoal.
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.shadowRoot!.innerHTML = style + svg
  }

  private async loadSvg(name: string) {
    this.svgContent = await getIcon(name)
    this.render()
  }

  private waitUntilVisible() {
    return new Promise<void>((resolve) => {
      this.observer = new IntersectionObserver(
        (entries) => {
          // In Chromium based browsers, multiple entries can be returned even only observe once.
          // Here, we don't care about the entry time but only if isIntersecting happened.
          const isIntersecting = entries.some((entry) => entry.isIntersecting)
          if (isIntersecting) {
            this.observer?.disconnect()
            this.observer = undefined
            resolve()
          }
        },
        { rootMargin: `${ROOT_MARGIN}px` },
      )

      this.observer.observe(this)
    })
  }
}
