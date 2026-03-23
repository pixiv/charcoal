import type React from 'react'
import { KnownIconFile } from './charcoalIconFiles'
import { getIcon, addCustomIcon } from './loaders'
import { addRawFile } from './loaders/CustomRawFileLoader'
import { __SERVER__ } from './ssr'

const attributes = [
  'name',
  'scale',
  'unsafe-non-guideline-scale',
] as const

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

const isPositiveFinite = (value: unknown): value is number =>
  typeof value === 'number' && Number.isFinite(value) && value > 0

const parseIconName = (
  name: string,
): { size: string; baseSize: number } => {
  if (!name.includes('/')) {
    throw new TypeError(
      `"${name}" is not a valid icon name. "name" must be named like [size]/[Name].`
    )
  }

  const [size] = name.split('/')

  if (size === 'Inline') {
    return { size, baseSize: 16 }
  }

  const baseSize = parseInt(size, 10)
  if (Number.isNaN(baseSize) || baseSize <= 0) {
    throw new TypeError(
      `"${name}" has invalid size prefix "${size}". Must be "Inline" or a positive number.`
    )
  }

  return { size, baseSize }
}

export type IconSizing =
  | {
      scale?: 1 | 2 | 3 | '1' | '2' | '3'
      unsafeNonGuidelineScale?: never
      unsafeNonGuidelineSize?: never
    }
  | {
      scale?: never
      unsafeNonGuidelineScale: number
      unsafeNonGuidelineSize?: never
    }
  | {
      scale?: never
      unsafeNonGuidelineScale?: never
      unsafeNonGuidelineSize: number
    }

export const calcActualSize = ({
  name,
  scale,
  unsafeNonGuidelineScale,
  unsafeNonGuidelineSize: overrideSize,
}: { name: string } & IconSizing): number => {
  // size (事前計算済みサイズ) が最優先
  if (isPositiveFinite(overrideSize)) {
    return overrideSize
  }
  if (overrideSize !== undefined) {
    throw new TypeError(
      `size must be a positive finite number, got ${overrideSize}`
    )
  }

  const { size, baseSize } = parseIconName(name)

  // unsafeNonGuidelineScale が次に優先
  if (isPositiveFinite(unsafeNonGuidelineScale)) {
    return baseSize * unsafeNonGuidelineScale
  }
  if (unsafeNonGuidelineScale !== undefined) {
    throw new TypeError(
      `unsafeNonGuidelineScale must be a positive finite number, got ${unsafeNonGuidelineScale}`
    )
  }

  // ガイドライン scale
  const numericScale = parseInt(`${scale ?? '1'}`, 10)
  switch (size) {
    case 'Inline':
      return numericScale === 2 ? 32 : 16
    case '24':
      return 24 * numericScale
    default:
      return baseSize
  }
}

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

  /**
   * @deprecated Use `calcActualSize()` instead. This getter is kept for backward compatibility.
   */
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

  /**
   * @deprecated Use `calcActualSize()` instead. This getter is kept for backward compatibility.
   */
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
    const scaleAttr = this.props.scale ?? undefined
    const nonGuidelineScale =
      this.props['unsafe-non-guideline-scale'] !== null
        ? parseInt(this.props['unsafe-non-guideline-scale'], 10)
        : undefined
    const charcoalIconSize =
      this.dataset.charcoalIconSize !== undefined
        ? parseInt(this.dataset.charcoalIconSize, 10)
        : undefined

    // Web Component 内部では属性から全て読み取るため union の排他制約を緩和する
    const size = calcActualSize({
      name: this.props.name,
      scale: scaleAttr,
      unsafeNonGuidelineScale: nonGuidelineScale,
      unsafeNonGuidelineSize: charcoalIconSize,
    } as { name: string } & IconSizing)

    if (!Number.isFinite(size) || size <= 0) {
      throw new TypeError(
        `icon size must be a positive finite number, got ${size}`
      )
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
