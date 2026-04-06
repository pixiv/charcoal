import { render } from '@testing-library/react'
import Icon from '.'

function queryIcon(container: HTMLElement) {
  const el = container.querySelector('pixiv-icon')
  if (el === null) throw new Error('pixiv-icon not found')
  return el as HTMLElement
}

describe('Icon', () => {
  it('always sets data-charcoal-icon-size with calculated size', () => {
    const { container } = render(<Icon name="24/Add" />)
    expect(queryIcon(container).getAttribute('data-charcoal-icon-size')).toBe(
      '24',
    )
  })

  it('sets data-charcoal-icon-size with scale', () => {
    const { container } = render(<Icon name="24/Add" scale={2} />)
    expect(queryIcon(container).getAttribute('data-charcoal-icon-size')).toBe(
      '48',
    )
  })

  it('sets data-charcoal-icon-size with unsafeNonGuidelineScale', () => {
    const { container } = render(
      <Icon name="24/Add" unsafeNonGuidelineScale={1.5} />,
    )
    expect(queryIcon(container).getAttribute('data-charcoal-icon-size')).toBe(
      '36',
    )
  })

  it('sets data-charcoal-icon-size with unsafeNonGuidelineSize', () => {
    const { container } = render(
      <Icon name="24/Add" unsafeNonGuidelineSize={100} />,
    )
    expect(queryIcon(container).getAttribute('data-charcoal-icon-size')).toBe(
      '100',
    )
  })

  it('passes scale attribute through to pixiv-icon', () => {
    const { container } = render(<Icon name="24/Add" scale={2} />)
    expect(queryIcon(container).getAttribute('scale')).toBe('2')
  })

  it('does not pass unsafe-non-guideline-scale attribute to pixiv-icon', () => {
    const { container } = render(
      <Icon name="24/Add" unsafeNonGuidelineScale={1.5} />,
    )
    expect(
      queryIcon(container).getAttribute('unsafe-non-guideline-scale'),
    ).toBeNull()
  })

  it('sets --charcoal-icon-ssr-size CSS variable', () => {
    const { container } = render(<Icon name="24/Add" />)
    expect(
      queryIcon(container).style.getPropertyValue('--charcoal-icon-ssr-size'),
    ).toBe('24px')
  })

  it('sets --charcoal-icon-unsafe-scale CSS variable for unsafeNonGuidelineScale', () => {
    const { container } = render(
      <Icon name="24/Add" unsafeNonGuidelineScale={1.5} />,
    )
    expect(
      queryIcon(container).style.getPropertyValue(
        '--charcoal-icon-unsafe-scale',
      ),
    ).toBe('1.5')
  })

  it('does not set --charcoal-icon-unsafe-scale for normal icons', () => {
    const { container } = render(<Icon name="24/Add" />)
    expect(
      queryIcon(container).style.getPropertyValue(
        '--charcoal-icon-unsafe-scale',
      ),
    ).toBe('')
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
    expect(el.style.getPropertyValue('--charcoal-icon-ssr-size')).toBe('24px')
    expect(el.style.color).toBe('red')
  })

  it('handles Inline icons', () => {
    const { container } = render(<Icon name="Inline/Add" />)
    expect(
      queryIcon(container).style.getPropertyValue('--charcoal-icon-ssr-size'),
    ).toBe('16px')
  })

  it('handles Inline icons with scale=2', () => {
    const { container } = render(<Icon name="Inline/Add" scale={2} />)
    expect(
      queryIcon(container).style.getPropertyValue('--charcoal-icon-ssr-size'),
    ).toBe('32px')
  })
})
