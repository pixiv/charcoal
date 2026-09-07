import { render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { CarouselChangeProvider } from './CarouselChangeProvider'
import { createCarouselStore } from './carouselStore'
import { createScrollIntent } from './scrollIntent'

const setup = (initialActiveIndex = 0) => {
  const store = createCarouselStore()
  store.dispatch({ type: 'setActive', index: initialActiveIndex })
  const intent = createScrollIntent()
  const onChange = vi.fn()
  render(
    <CarouselChangeProvider store={store} intent={intent} onChange={onChange}>
      {null}
    </CarouselChangeProvider>,
  )
  return { store, intent, onChange }
}

describe('CarouselChangeProvider', () => {
  it('settle → activeIndex の順でも 1 回だけ発火する', () => {
    const { store, intent, onChange } = setup()
    intent.dispatch({ type: 'drive', source: 'navigation', target: 400 })
    intent.dispatch({ type: 'scroll' })
    intent.dispatch({ type: 'settle' })
    expect(onChange).not.toHaveBeenCalled()

    store.dispatch({ type: 'setActive', index: 1 })
    expect(onChange).toHaveBeenCalledExactlyOnceWith({
      index: 1,
      source: 'navigation',
    })
  })

  it('activeIndex → settle の順でも 1 回だけ発火する', () => {
    const { store, intent, onChange } = setup()
    intent.dispatch({ type: 'drive', source: 'keyboard', target: 400 })
    intent.dispatch({ type: 'scroll' })
    store.dispatch({ type: 'setActive', index: 1 })
    expect(onChange).not.toHaveBeenCalled()

    intent.dispatch({ type: 'settle' })
    expect(onChange).toHaveBeenCalledExactlyOnceWith({
      index: 1,
      source: 'keyboard',
    })
  })

  it('帰属できない移動は発火せず、基準だけ進める', () => {
    const { store, intent, onChange } = setup()
    intent.dispatch({ type: 'scroll' })
    intent.dispatch({ type: 'settle' })
    store.dispatch({ type: 'setActive', index: 2 })
    expect(onChange).not.toHaveBeenCalled()

    // 同じ index への正当な着地は「変化」ではないので発火しない
    intent.dispatch({ type: 'drive', source: 'navigation', target: 800 })
    intent.dispatch({ type: 'scroll' })
    intent.dispatch({ type: 'settle' })
    store.dispatch({ type: 'setActive', index: 2 })
    expect(onChange).not.toHaveBeenCalled()

    store.dispatch({ type: 'setActive', index: 3 })
    expect(onChange).toHaveBeenCalledExactlyOnceWith({
      index: 3,
      source: 'navigation',
    })
  })

  it('同じ静止で 2 回発火しない（reported で landed が消える）', () => {
    const { store, intent, onChange } = setup()
    intent.dispatch({ type: 'drive', source: 'auto', target: 400 })
    intent.dispatch({ type: 'scroll' })
    intent.dispatch({ type: 'settle' })
    store.dispatch({ type: 'setActive', index: 1 })
    expect(intent.getSnapshot().landed).toBeNull()

    store.dispatch({ type: 'setActive', index: 2 })
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('onChange が例外を投げても landed は消費済みになる', () => {
    const store = createCarouselStore()
    const intent = createScrollIntent()
    const onChange = vi.fn(() => {
      throw new Error('boom')
    })
    render(
      <CarouselChangeProvider store={store} intent={intent} onChange={onChange}>
        {null}
      </CarouselChangeProvider>,
    )
    intent.dispatch({ type: 'drive', source: 'navigation', target: 400 })
    intent.dispatch({ type: 'scroll' })
    intent.dispatch({ type: 'settle' })

    expect(() => store.dispatch({ type: 'setActive', index: 1 })).toThrow(
      'boom',
    )
    expect(intent.getSnapshot().landed).toBeNull()
  })

  it('mount 時の activeIndex を基準にする', () => {
    const { store, intent, onChange } = setup(2)
    intent.dispatch({ type: 'drive', source: 'navigation', target: 800 })
    intent.dispatch({ type: 'scroll' })
    intent.dispatch({ type: 'settle' })
    store.dispatch({ type: 'setActive', index: 2 })
    expect(onChange).not.toHaveBeenCalled()
  })

  it('onChange 未指定でも落ちず、基準は進む', () => {
    const store = createCarouselStore()
    const intent = createScrollIntent()
    render(
      <CarouselChangeProvider store={store} intent={intent}>
        {null}
      </CarouselChangeProvider>,
    )
    intent.dispatch({ type: 'drive', source: 'navigation', target: 400 })
    intent.dispatch({ type: 'scroll' })
    intent.dispatch({ type: 'settle' })
    expect(() => store.dispatch({ type: 'setActive', index: 1 })).not.toThrow()
    expect(intent.getSnapshot().landed).toBeNull()
  })
})
