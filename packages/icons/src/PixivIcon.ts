import type React from 'react'
import { KnownIconFile } from './charcoalIconFiles'
import { getIcon, addCustomIcon } from './loaders'
import { addRawFile } from './loaders/CustomRawFileLoader'
import { __SERVER__ } from './ssr'
import { calcActualSize } from './calcActualSize'

const attributes = [
  'name',
  'scale',
  'unsafe-non-guideline-scale',
  'fixed-size',
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
  /**
   * @deprecated `fixed-size` を利用してください。
   * `attr()` の数値解釈サポートが限定的なため、リセット CSS だけではレイアウトシフトが防げません。
   */
  'unsafe-non-guideline-scale'?: number | string
  /**
   * 固定 px サイズで描画します。ガイドライン外のサイズを利用する場合に推奨される指定方法で、
   * 他のサイズ指定 (`scale` / `unsafe-non-guideline-scale`) よりも常に優先されます。
   *
   * Web Component の upgrade 前 (= SSR 直後の CSS-only 状態) でも CLS を防ぐには、
   * 同じ値を `style="--charcoal-icon-ssr-size: Npx"` としてインラインに指定してください。
   * React の `<Icon fixedSize>` 経由で利用する場合はインラインスタイルが自動的に付与されます。
   */
  'fixed-size'?: number | string

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
    const { name, scale, ...rest } = this.props
    const unsafeNonGuidelineScale = rest['unsafe-non-guideline-scale']
    const fixedSize = rest['fixed-size']

    const size = calcActualSize({
      name,
      ...(fixedSize !== null
        ? { fixedSize: parseFloat(fixedSize) }
        : unsafeNonGuidelineScale !== null
          ? { unsafeNonGuidelineScale: parseFloat(unsafeNonGuidelineScale) }
          : { scale: scale ?? undefined }),
    } as Parameters<typeof calcActualSize>[0])

    if (!Number.isFinite(size) || size <= 0) {
      throw new TypeError(
        `icon size must be a positive finite number, got ${size}`,
      )
    }

    // icon.css の pixiv-icon:not(:defined) ルールと同じ CSS variable に
    // 計算結果を流し込むことで、hydrate 前後で width / height が揺れないようにする
    this.style.setProperty('--charcoal-icon-ssr-size', `${size}px`)

    const style = `<style>
  :host {
    display: inline-flex;
  }

  svg {
    width: var(--charcoal-icon-ssr-size);
    height: var(--charcoal-icon-ssr-size);
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
