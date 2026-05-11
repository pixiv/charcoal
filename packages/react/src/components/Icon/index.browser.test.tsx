/**
 * Layout shift prevention test
 *
 * pixiv-icon Web Component は connectedCallback で Shadow DOM にサイズを設定する。
 * SSR 時は JS が未実行なので、CSS だけでサイズを確保する必要がある。
 *
 * このテストでは以下を検証する:
 *
 * 1. CSS メカニズムの検証 (.charcoal-icon クラス)
 *    - plain HTML 要素 に charcoal-icon クラスと --charcoal-icon-ssr-size を設定
 *    - Web Component を介さず CSS だけでサイズが付くことを確認
 *
 * 2. pixiv-icon:not(:defined) の SSR fallback CSS の検証
 *    - iframe (= 子 window では CustomElementRegistry が独立 = pixiv-icon 未登録) を用いて
 *      Web Component 登録前の vanilla HTML SSR 状態を再現
 *
 * 3. React Icon コンポーネントの統合テスト
 *    - Icon コンポーネントが正しい CSS variable を設定し、
 *      WC upgrade 後も同じサイズであることを確認
 *
 * 4. 動的 prop 変更で host + shadow SVG サイズが追従するかの検証
 *    - observedAttributes に含まれない size 系 prop が CSS 変数継承で追従することを確認
 *
 * Icon コンポーネントが '@charcoal-ui/icons/css/icon.css' を side-effect import するため、
 * テスト実行時には Vite が自動的にスタイルを document に注入する (本番と同じ挙動)。
 */
import iconCssRaw from '@charcoal-ui/icons/css/icon.css?raw'
import { render } from '@testing-library/react'
import Icon from '.'
import HintText from '../HintText'
import TagItem from '../TagItem'

// 本番 icon.css の生テキスト (drift 防止のため文字列複製ではなく実ファイル参照)。
// iframe テストで pixiv-icon:not(:defined) を検証するために、子 document に注入する。
const iconCss = iconCssRaw

/**
 * CSS のみと Web Component upgrade 後の両方で
 * 同じサイズになることを保証するためのテストケース
 */
const iconSizeTestCases = [
  { name: '24/Add', expected: 24 },
  { name: '24/Add', scale: 2, expected: 48 },
  { name: '24/Add', scale: 3, expected: 72 },
  { name: '24/Add', unsafeNonGuidelineSize: 64, expected: 64 },
  { name: '24/Add', unsafeNonGuidelineScale: 1.5, expected: 36 },
  { name: 'Inline/Add', expected: 16 },
  { name: 'Inline/Add', scale: 2, expected: 32 },
  { name: '16/Add', expected: 16 },
  { name: '32/BookmarkOff', expected: 32 },
] as const

function getIconSize(container: HTMLElement) {
  const el = container.querySelector('pixiv-icon') as HTMLElement
  const rect = el.getBoundingClientRect()
  return { width: rect.width, height: rect.height }
}

describe('charcoal-icon CSS provides correct sizing without Web Component', () => {
  // CSS メカニズムを plain HTML 要素で直接テストする。
  // Web Component を一切介さないため、SSR 時の CSS-only サイジングと等価。
  // Icon を import した時点で side-effect の icon.css が document に注入される。

  it.each(iconSizeTestCases)(
    'element with --charcoal-icon-ssr-size: $expected px has $expected x $expected',
    ({ expected }) => {
      const el = document.createElement('span')
      el.className = 'charcoal-icon'
      el.style.setProperty('--charcoal-icon-ssr-size', `${expected}px`)
      document.body.appendChild(el)
      try {
        const rect = el.getBoundingClientRect()
        expect(rect.width).toBe(expected)
        expect(rect.height).toBe(expected)
      } finally {
        el.remove()
      }
    },
  )
})

describe('Icon component has correct size with Web Component upgrade', () => {
  it('pixiv-icon IS a registered custom element', () => {
    expect(customElements.get('pixiv-icon')).toBeDefined()
  })

  it.each(iconSizeTestCases)(
    'Icon $name (scale=$scale, unsafeNonGuidelineSize=$unsafeNonGuidelineSize, unsafeNonGuidelineScale=$unsafeNonGuidelineScale) has $expected x $expected',
    ({
      name,
      scale,
      unsafeNonGuidelineSize,
      unsafeNonGuidelineScale,
      expected,
    }) => {
      const { container } = render(
        <Icon
          name={name}
          scale={scale}
          unsafeNonGuidelineSize={unsafeNonGuidelineSize}
          unsafeNonGuidelineScale={unsafeNonGuidelineScale}
        />,
      )
      const { width, height } = getIconSize(container)
      expect(width).toBe(expected)
      expect(height).toBe(expected)
    },
  )

  it('HintText icon has 16x16', () => {
    const { container } = render(<HintText>hint</HintText>)
    const { width, height } = getIconSize(container)
    expect(width).toBe(16)
    expect(height).toBe(16)
  })

  it('TagItem (active) icon has 16x16', () => {
    const { container } = render(<TagItem label="tag" status="active" />)
    const { width, height } = getIconSize(container)
    expect(width).toBe(16)
    expect(height).toBe(16)
  })
})

describe('pixiv-icon:not(:defined) reserves correct size with CSS only (vanilla HTML SSR)', () => {
  // React 経由ではなく vanilla HTML で <pixiv-icon> を SSR したケースを再現する。
  // 親 window では pixiv-icon が定義済みなので、未登録状態を作るために iframe を使う。
  // iframe には実 icon.css のみを注入し、@charcoal-ui/icons の JS は import しない。

  type VanillaCase = {
    title: string
    markup: string
    expected: number
  }

  const vanillaCases: VanillaCase[] = [
    {
      title: '24/Add (no attrs) → 24px',
      markup: `<pixiv-icon name="24/Add"></pixiv-icon>`,
      expected: 24,
    },
    {
      title: '24/Add scale=2 → 48px',
      markup: `<pixiv-icon name="24/Add" scale="2"></pixiv-icon>`,
      expected: 48,
    },
    {
      title: '24/Add scale=3 → 72px',
      markup: `<pixiv-icon name="24/Add" scale="3"></pixiv-icon>`,
      expected: 72,
    },
    {
      title: '16/Add → 16px',
      markup: `<pixiv-icon name="16/Add"></pixiv-icon>`,
      expected: 16,
    },
    {
      title: '32/BookmarkOff → 32px',
      markup: `<pixiv-icon name="32/BookmarkOff"></pixiv-icon>`,
      expected: 32,
    },
    {
      title: 'Inline/Add → 16px',
      markup: `<pixiv-icon name="Inline/Add"></pixiv-icon>`,
      expected: 16,
    },
    {
      title: 'Inline/Add scale=2 → 32px',
      markup: `<pixiv-icon name="Inline/Add" scale="2"></pixiv-icon>`,
      expected: 32,
    },
    {
      title: 'unknown name (no prefix match) → fallback 24px',
      markup: `<pixiv-icon name="24/SomeName"></pixiv-icon>`,
      expected: 24,
    },
    {
      title: 'non-guideline size via data-charcoal-icon-size + CSS var → 20px',
      markup: `<pixiv-icon name="24/Add" data-charcoal-icon-size="20" style="--charcoal-icon-ssr-size: 20px"></pixiv-icon>`,
      expected: 20,
    },
    {
      title: 'non-guideline size for a 20/ prefix (not enumerated in CSS) requires opt-in → 20px',
      markup: `<pixiv-icon name="20/Custom" data-charcoal-icon-size="20" style="--charcoal-icon-ssr-size: 20px"></pixiv-icon>`,
      expected: 20,
    },
  ]

  async function withIframe(
    body: string,
    assert: (doc: Document, host: HTMLElement) => void,
  ): Promise<void> {
    const iframe = document.createElement('iframe')
    iframe.style.cssText = 'border:0;width:200px;height:200px;'
    // srcdoc を appendChild の前にセットすることで、about:blank の暗黙 load を待たずに
    // 単一の load イベントだけで完了させる (load race 防止)。
    iframe.srcdoc = `<!doctype html><html><head><style>${iconCss}</style></head><body>${body}</body></html>`

    try {
      await new Promise<void>((resolve) => {
        iframe.addEventListener('load', () => resolve(), { once: true })
        document.body.appendChild(iframe)
      })

      const doc = iframe.contentDocument
      if (!doc) throw new Error('iframe document missing')
      const host = doc.querySelector('pixiv-icon') as HTMLElement | null
      if (!host) throw new Error('pixiv-icon not found in iframe')
      assert(doc, host)
    } finally {
      iframe.remove()
    }
  }

  it.each(vanillaCases)('$title', async ({ markup, expected }) => {
    await withIframe(markup, (doc, host) => {
      // iframe 内では pixiv-icon は登録されていないことを確認 (= :not(:defined) が効く)
      const iframeWindow = doc.defaultView as Window & typeof globalThis
      expect(iframeWindow.customElements.get('pixiv-icon')).toBeUndefined()

      const rect = host.getBoundingClientRect()
      expect(rect.width).toBe(expected)
      expect(rect.height).toBe(expected)
    })
  })
})

describe('Icon reflects dynamic prop changes (no observed-attribute regression)', () => {
  function getShadowSvgSize(container: HTMLElement) {
    const host = container.querySelector('pixiv-icon') as HTMLElement
    const svg = host.shadowRoot?.querySelector('svg') as SVGElement | null
    if (!svg) return null
    const rect = svg.getBoundingClientRect()
    return { width: rect.width, height: rect.height }
  }

  it('updates host + shadow SVG size when only unsafeNonGuidelineSize changes', async () => {
    const { container, rerender } = render(
      <Icon name="24/Add" unsafeNonGuidelineSize={20} />,
    )

    expect(getIconSize(container)).toEqual({ width: 20, height: 20 })

    rerender(<Icon name="24/Add" unsafeNonGuidelineSize={40} />)

    expect(getIconSize(container)).toEqual({ width: 40, height: 40 })

    const shadowSize = getShadowSvgSize(container)
    if (shadowSize !== null) {
      expect(shadowSize).toEqual({ width: 40, height: 40 })
    }
  })

  it('updates host + shadow SVG size when only unsafeNonGuidelineScale changes', () => {
    const { container, rerender } = render(
      <Icon name="24/Add" unsafeNonGuidelineScale={1.5} />,
    )

    expect(getIconSize(container)).toEqual({ width: 36, height: 36 })

    rerender(<Icon name="24/Add" unsafeNonGuidelineScale={2.5} />)

    expect(getIconSize(container)).toEqual({ width: 60, height: 60 })

    const shadowSize = getShadowSvgSize(container)
    if (shadowSize !== null) {
      expect(shadowSize).toEqual({ width: 60, height: 60 })
    }
  })

  it('updates host + shadow SVG size when only scale changes', () => {
    const { container, rerender } = render(<Icon name="24/Add" scale={1} />)

    expect(getIconSize(container)).toEqual({ width: 24, height: 24 })

    rerender(<Icon name="24/Add" scale={3} />)

    expect(getIconSize(container)).toEqual({ width: 72, height: 72 })

    const shadowSize = getShadowSvgSize(container)
    if (shadowSize !== null) {
      expect(shadowSize).toEqual({ width: 72, height: 72 })
    }
  })
})
