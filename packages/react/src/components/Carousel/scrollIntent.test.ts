import { describe, expect, it } from 'vitest'
import {
  canAutoAdvance,
  INITIAL_INTENT,
  intentReducer,
  scrollOrigin,
  type IntentAction,
  type IntentState,
} from './scrollIntent'

const run = (actions: readonly IntentAction[]): IntentState =>
  actions.reduce(intentReducer, INITIAL_INTENT)

describe('intentReducer', () => {
  it('drive → scroll → settle で landed に source が移り、target が消える', () => {
    const state = run([
      { type: 'drive', source: 'navigation', target: 400 },
      { type: 'scroll' },
      { type: 'settle' },
    ])
    expect(state).toMatchObject({
      phase: 'idle',
      source: null,
      landed: 'navigation',
      target: null,
    })
  })

  it('drive で target が積まれ、scroll 中は phase が moving になる', () => {
    const state = run([
      { type: 'drive', source: 'keyboard', target: 400 },
      { type: 'scroll' },
    ])
    expect(state).toMatchObject({
      phase: 'moving',
      source: 'keyboard',
      target: 400,
    })
  })

  it('pointer 入力は次の scroll で pointer に昇格し、release → settle で idle に戻る', () => {
    const afterInput = run([{ type: 'input', kind: 'pointer' }])
    expect(afterInput).toMatchObject({
      candidate: true,
      pointerDown: true,
      source: null,
    })

    const state = run([
      { type: 'input', kind: 'pointer' },
      { type: 'scroll' },
      { type: 'release' },
      { type: 'settle' },
    ])
    expect(state).toMatchObject({
      phase: 'idle',
      pointerDown: false,
      candidate: false,
      landed: 'pointer',
    })
  })

  it('指が触れている間の settle は保留され、release で settle 相当の遷移を行う', () => {
    const held = run([
      { type: 'input', kind: 'pointer' },
      { type: 'scroll' },
      { type: 'settle' },
    ])
    expect(held).toMatchObject({
      phase: 'moving',
      settlePending: true,
      pointerDown: true,
    })

    const released = intentReducer(held, { type: 'release' })
    expect(released).toMatchObject({
      phase: 'idle',
      settlePending: false,
      pointerDown: false,
      landed: 'pointer',
      source: null,
    })
  })

  it('走行中の自動送りに pointer が割り込むと、次の scroll で pointer に昇格する', () => {
    const state = run([
      { type: 'drive', source: 'auto', target: 400 },
      { type: 'scroll' },
      { type: 'input', kind: 'pointer' },
      { type: 'scroll' },
      { type: 'release' },
      { type: 'settle' },
    ])
    expect(state.landed).toBe('pointer')
  })

  it('動かない wheel 入力の痕跡は次の drive が消し、auto に帰属する', () => {
    const state = run([
      { type: 'input', kind: 'wheel' },
      { type: 'drive', source: 'auto', target: 400 },
      { type: 'scroll' },
      { type: 'settle' },
    ])
    expect(state.landed).toBe('auto')
    expect(state.pointerDown).toBe(false)
  })

  it('input は走行中の target を破棄する', () => {
    const state = run([
      { type: 'drive', source: 'navigation', target: 400 },
      { type: 'scroll' },
      { type: 'input', kind: 'wheel' },
    ])
    expect(state.target).toBeNull()
  })

  it('静止後の teleport は直前の移動の source を引き継ぐ', () => {
    const state = run([
      { type: 'drive', source: 'auto', target: 400 },
      { type: 'scroll' },
      { type: 'settle' },
      { type: 'teleport' },
      { type: 'scroll' },
      { type: 'settle' },
    ])
    expect(state.landed).toBe('auto')
  })

  it('走行中の teleport（壁エスケープ）は source を維持し target だけ消す', () => {
    const state = run([
      { type: 'drive', source: 'navigation', target: 400 },
      { type: 'scroll' },
      { type: 'teleport' },
    ])
    expect(state).toMatchObject({
      phase: 'moving',
      source: 'navigation',
      target: null,
    })
  })

  it('reset は source / landed / candidate / target を消し、phase と pointerDown は維持する', () => {
    const state = run([
      { type: 'drive', source: 'navigation', target: 400 },
      { type: 'scroll' },
      { type: 'settle' },
      { type: 'input', kind: 'pointer' },
      { type: 'scroll' },
      { type: 'reset' },
    ])
    expect(state).toMatchObject({
      phase: 'moving',
      pointerDown: true,
      source: null,
      landed: null,
      candidate: false,
      target: null,
    })
  })

  it('帰属できない移動（drive も input も無い scroll）は landed が null になる', () => {
    const state = run([
      { type: 'drive', source: 'navigation', target: 400 },
      { type: 'scroll' },
      { type: 'settle' },
      { type: 'reported' },
      { type: 'scroll' },
      { type: 'settle' },
    ])
    expect(state.landed).toBeNull()
  })

  it('reported は landed だけを消す', () => {
    const state = run([
      { type: 'drive', source: 'indicator', target: null },
      { type: 'scroll' },
      { type: 'settle' },
      { type: 'reported' },
    ])
    expect(state).toMatchObject({ phase: 'idle', landed: null })
  })
})

describe('canAutoAdvance', () => {
  it.each([
    [{ phase: 'idle', pointerDown: false }, true],
    [{ phase: 'moving', pointerDown: false }, false],
    [{ phase: 'idle', pointerDown: true }, false],
    [{ phase: 'moving', pointerDown: true }, false],
  ] as const)('%o → %s', (partial, expected) => {
    expect(canAutoAdvance({ ...INITIAL_INTENT, ...partial })).toBe(expected)
  })
})

describe('scrollOrigin', () => {
  it('走行中の target があればそれを、無ければ scrollLeft を返す', () => {
    expect(scrollOrigin({ ...INITIAL_INTENT, target: 400 }, 120)).toBe(400)
    expect(scrollOrigin(INITIAL_INTENT, 120)).toBe(120)
  })
})
