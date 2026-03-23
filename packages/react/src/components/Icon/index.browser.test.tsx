/**
 * Layout shift prevention test
 *
 * pixiv-icon Web Component は connectedCallback で Shadow DOM にサイズを設定する。
 * SSR 時は JS が未実行なので、CSS だけでサイズを確保する必要がある。
 *
 * このテストでは 2 つの describe ブロックで以下を検証する:
 *
 * 1. Web Component upgrade なし (CSS only)
 *    - customElements.define をモンキーパッチして pixiv-icon の登録をブロック
 *    - CSS (.charcoal-icon + --charcoal-icon-ssr-size) だけでサイズが付くことを確認
 *
 * 2. Web Component upgrade あり
 *    - ブロックを解除して pixiv-icon を登録
 *    - upgrade 後も同じサイズであることを確認
 *
 * 両方で同じ期待値が PASS = upgrade 前後でサイズが変わらない = layout shift なし
 */
import iconCss from '@charcoal-ui/icons-css/icon.css?raw'

// ---- Custom Elements の upgrade を阻止する ----
//
// @charcoal-ui/icons の index.ts は import 時に customElements.define('pixiv-icon', PixivIcon) を
// 呼ぶ。define が成功すると、DOM に挿入された <pixiv-icon> は即座に upgrade され、
// connectedCallback → render() → Shadow DOM でサイズが設定される。
//
// これでは「CSS だけでサイズが確保されているか」を検証できない。
// そこで define をモンキーパッチして pixiv-icon の登録をブロックする。
// その後に Icon コンポーネントを dynamic import すれば、<pixiv-icon> は
// upgrade されない生の HTMLElement のまま DOM に挿入される。
//
// この状態で getBoundingClientRect() が正しいサイズを返せば、
// CSS (.charcoal-icon + inline style --charcoal-icon-ssr-size) だけで
// サイズが確保されていることが証明できる = layout shift は発生しない。
const originalDefine = customElements.define.bind(customElements)
customElements.define = function (name: string, ...args: unknown[]) {
  if (name === 'pixiv-icon') return
  return (originalDefine as Function)(name, ...args)
}

// define をブロックした後に import する（import 順序が重要）
const { render } = await import('@testing-library/react')
const { default: Icon } = await import('.')
const { default: HintText } = await import('../HintText')
const { default: TagItem } = await import('../TagItem')

/**
 * CSS のみ (upgrade なし) と Web Component upgrade 後の両方で
 * 同じサイズになることを保証するためのテストケース
 */
const iconSizeTestCases = [
  { name: '24/Add', expected: 24 },
  { name: '24/Add', scale: 2, expected: 48 },
  { name: '24/Add', scale: 3, expected: 72 },
  { name: '24/Add', unsafeNonGuidelineSize: 64, expected: 64 },
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

describe('Icon has correct size WITHOUT Web Component upgrade (CSS only)', () => {
  setupIconCss()

  it('pixiv-icon is NOT a registered custom element', () => {
    expect(customElements.get('pixiv-icon')).toBeUndefined()
  })

  it.each(iconSizeTestCases)(
    'Icon $name (scale=$scale, unsafeNonGuidelineSize=$unsafeNonGuidelineSize) has $expected x $expected',
    ({ name, scale, unsafeNonGuidelineSize, expected }) => {
      const { container } = render(
        <Icon
          name={name}
          scale={scale}
          unsafeNonGuidelineSize={unsafeNonGuidelineSize}
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

describe('Icon has correct size WITH Web Component upgrade', () => {
  // ブロックを解除して pixiv-icon を登録する
  beforeAll(async () => {
    customElements.define = originalDefine
    if (!customElements.get('pixiv-icon')) {
      const { PixivIcon } = await import('@charcoal-ui/icons')
      customElements.define('pixiv-icon', PixivIcon)
    }
  })

  setupIconCss()

  it('pixiv-icon IS a registered custom element', () => {
    expect(customElements.get('pixiv-icon')).toBeDefined()
  })

  it.each(iconSizeTestCases)(
    'Icon $name (scale=$scale, unsafeNonGuidelineSize=$unsafeNonGuidelineSize) has $expected x $expected',
    ({ name, scale, unsafeNonGuidelineSize, expected }) => {
      const { container } = render(
        <Icon
          name={name}
          scale={scale}
          unsafeNonGuidelineSize={unsafeNonGuidelineSize}
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
