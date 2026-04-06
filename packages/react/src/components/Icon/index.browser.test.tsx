/**
 * Layout shift prevention test
 *
 * pixiv-icon Web Component は connectedCallback で Shadow DOM にサイズを設定する。
 * SSR 時は JS が未実行なので、CSS だけでサイズを確保する必要がある。
 *
 * このテストでは 2 つの describe ブロックで以下を検証する:
 *
 * 1. CSS メカニズムの検証
 *    - plain HTML 要素 に charcoal-icon クラスと --charcoal-icon-ssr-size を設定
 *    - Web Component を介さず CSS だけでサイズが付くことを確認
 *    (ブラウザ環境では Vite が依存モジュールを事前バンドルするため、
 *     customElements.define のモンキーパッチで WC 登録をブロックできない)
 *
 * 2. React Icon コンポーネントの統合テスト
 *    - Icon コンポーネントが正しい CSS variable を設定し、
 *      WC upgrade 後も同じサイズであることを確認
 *
 * 1 の CSS テスト + unit test (index.test.tsx) で Icon が正しい CSS variable を
 * 設定することが保証される = SSR 時に CSS だけでサイズが確保される = layout shift なし
 */
import { render } from '@testing-library/react'
import Icon from '.'
import HintText from '../HintText'
import TagItem from '../TagItem'

// packages/icons/css/icon.css と同じ内容
// ブラウザ環境のため fs は使えず、virtual module は過剰なので直接定義する
const iconCss = `.charcoal-icon {
  display: inline-flex;
  width: var(--charcoal-icon-ssr-size);
  height: var(--charcoal-icon-ssr-size);
}`

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

function setupIconCss() {
  let styleEl: HTMLStyleElement

  beforeEach(() => {
    styleEl = document.createElement('style')
    styleEl.textContent = iconCss
    document.head.appendChild(styleEl)
  })

  afterEach(() => {
    styleEl.remove()
  })
}

describe('charcoal-icon CSS provides correct sizing without Web Component', () => {
  // CSS メカニズムを plain HTML 要素で直接テストする。
  // Web Component を一切介さないため、SSR 時の CSS-only サイジングと等価。
  setupIconCss()

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
  setupIconCss()

  it('pixiv-icon IS a registered custom element', () => {
    expect(customElements.get('pixiv-icon')).toBeDefined()
  })

  it.each(iconSizeTestCases)(
    'Icon $name (scale=$scale, unsafeNonGuidelineSize=$unsafeNonGuidelineSize, unsafeNonGuidelineScale=$unsafeNonGuidelineScale) has $expected x $expected',
    ({ name, scale, unsafeNonGuidelineSize, unsafeNonGuidelineScale, expected }) => {
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
