import { render } from '@testing-library/react'
import Icon from '.'

function queryIcon(container: HTMLElement) {
  const el = container.querySelector('pixiv-icon')
  if (el === null) throw new Error('pixiv-icon not found')
  return el as HTMLElement
}

describe('Icon', () => {
  it('always sets --charcoal-icon-size with calculated size', () => {
    const { container } = render(<Icon name="24/Add" />)
    expect(
      queryIcon(container).style.getPropertyValue('--charcoal-icon-size'),
    ).toBe('24px')
  })

  it('sets --charcoal-icon-size with scale', () => {
    const { container } = render(<Icon name="24/Add" scale={2} />)
    expect(
      queryIcon(container).style.getPropertyValue('--charcoal-icon-size'),
    ).toBe('48px')
  })

  it('sets --charcoal-icon-size with unsafeNonGuidelineScale (deprecated)', () => {
    const { container } = render(
      <Icon name="24/Add" unsafeNonGuidelineScale={1.5} />,
    )
    expect(
      queryIcon(container).style.getPropertyValue('--charcoal-icon-size'),
    ).toBe('36px')
  })

  it('sets --charcoal-icon-size with fixedSize', () => {
    const { container } = render(<Icon name="24/Add" fixedSize={100} />)
    expect(
      queryIcon(container).style.getPropertyValue('--charcoal-icon-size'),
    ).toBe('100px')
  })

  it('passes scale attribute through to pixiv-icon', () => {
    const { container } = render(<Icon name="24/Add" scale={2} />)
    expect(queryIcon(container).getAttribute('scale')).toBe('2')
  })

  it('passes unsafe-non-guideline-scale attribute to pixiv-icon for hydration', () => {
    const { container } = render(
      <Icon name="24/Add" unsafeNonGuidelineScale={1.5} />,
    )
    expect(
      queryIcon(container).getAttribute('unsafe-non-guideline-scale'),
    ).toBe('1.5')
  })

  it('passes fixed-size attribute to pixiv-icon for hydration', () => {
    const { container } = render(<Icon name="24/Add" fixedSize={100} />)
    expect(queryIcon(container).getAttribute('fixed-size')).toBe('100')
  })

  it('adds charcoal-icon class', () => {
    const { container } = render(<Icon name="24/Add" />)
    expect(queryIcon(container).classList.contains('charcoal-icon')).toBe(true)
  })

  it('preserves user className alongside charcoal-icon', () => {
    const { container } = render(<Icon name="24/Add" className="my-icon" />)
    const el = queryIcon(container)
    expect(el.classList.contains('charcoal-icon')).toBe(true)
    expect(el.classList.contains('my-icon')).toBe(true)
  })

  it('merges user style with SSR CSS variable', () => {
    const { container } = render(
      <Icon name="24/Add" style={{ color: 'red' }} />,
    )
    const el = queryIcon(container)
    expect(el.style.getPropertyValue('--charcoal-icon-size')).toBe('24px')
    expect(el.style.color).toBe('red')
  })

  it('handles Inline icons', () => {
    const { container } = render(<Icon name="Inline/Add" />)
    expect(
      queryIcon(container).style.getPropertyValue('--charcoal-icon-size'),
    ).toBe('16px')
  })

  it('handles Inline icons with scale=2', () => {
    const { container } = render(<Icon name="Inline/Add" scale={2} />)
    expect(
      queryIcon(container).style.getPropertyValue('--charcoal-icon-size'),
    ).toBe('32px')
  })
})
