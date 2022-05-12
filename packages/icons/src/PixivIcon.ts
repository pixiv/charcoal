import type React from 'react'
import warning from 'warning'
import { KnownIconFile } from './filenames'
import { loaders as defaultLoaders, Loader } from './loaders'
import { BaseElement, __SERVER__ } from './ssr'
import { sanitize } from 'dompurify'

const { loadFromFile, loadFromRawUrl } = defaultLoaders

const attributes = ['name', 'scale', 'unsafe-non-guideline-scale'] as const

const ROOT_MARGIN = 50

export interface KnownIconType extends Record<KnownIconFile, unknown> {}

export interface Props
  extends Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    'className'
  > {
  name: keyof KnownIconType
  scale?: 1 | 2 | 3 | '1' | '2' | '3'
  'unsafe-non-guideline-scale'?: number | string

  // CustomElements は className が使えない。class と書く必要がある
  // https://ja.reactjs.org/docs/web-components.html#using-web-components-in-react
  class?: string
}

const loaders = new Map<string, Loader>()

type ExtendedIconFile = Exclude<keyof KnownIconType, KnownIconFile>
type Extended = [ExtendedIconFile] extends [never] // NOTE: ExtendedIconFileがneverならKnownIconTypeは拡張されていない
  ? false
  : true

export class PixivIcon extends BaseElement {
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

    Object.entries(map).forEach(([name, url]) => {
      if (!name.includes('/')) {
        throw new TypeError(
          `${name} is not a valid icon name. "name" must be named like [size]/[Name].`
        )
      }

      loaders.set(name, function customLoader() {
        return loadFromRawUrl(url)
      })
    })
  }

  static get observedAttributes() {
    return attributes
  }

  private svgContent?: string
  private observer?: IntersectionObserver

  get props() {
    const partial = Object.fromEntries(
      attributes.map((attribute) => [attribute, this.getAttribute(attribute)])
    ) as Record<typeof attributes[number], string | null>

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

  connectedCallback() {
    this.render()
    this.update()
  }

  disconnectedCallback() {
    this.observer?.disconnect()
    this.observer = undefined
  }

  attributeChangedCallback() {
    this.update()
  }

  render() {
    const size = this.forceResizedSize ?? this.scaledSize

    const style = sanitize(
      `<style>
  :host {
    display: inline-flex;
    --size: ${size}px;
  }

  svg {
    width: var(--size);
    height: var(--size);
  }
</style>`,
      { ALLOWED_TAGS: ['style'], FORCE_BODY: true }
    )

    const svg = sanitize(
      this.svgContent !== undefined
        ? this.svgContent
        : `<svg viewBox="0 0 ${size} ${size}"></svg>`,
      { USE_PROFILES: { svg: true, svgFilters: true } }
    )

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.shadowRoot!.innerHTML = style + svg
  }

  private update() {
    void this.waitUntilVisible().then(async () => {
      const { name } = this.props
      const loader = loaders.get(name) ?? loadFromFile

      this.svgContent = await loader(name)
      this.render()
    })
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
