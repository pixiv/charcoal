import type { CarouselChangeSource } from '../index'
import { createStore, type Store } from '../store'

// スクロールの「意図」。DOM イベントと送りの入口はここへ action を投げるだけで、
// 発生源の帰属はすべてこの reducer の遷移規則で決まる。時刻は一切持たない。
export type IntentState = Readonly<{
  phase: 'idle' | 'moving'
  // 今の移動を起こした入口
  source: CarouselChangeSource | null
  // pointer / touch / wheel の入力後、最初の scroll イベント待ち
  candidate: boolean
  // 直前に静止した移動の source（IntersectionObserver が遅れて来ても報告できる）
  landed: CarouselChangeSource | null
  // 走行中の目標位置（連打の積算用）
  target: number | null
  pointerDown: boolean
  // pointerDown の間に settle が来た
  settlePending: boolean
}>

export type IntentAction =
  | { type: 'drive'; source: CarouselChangeSource; target: number | null }
  | { type: 'input'; kind: 'pointer' | 'wheel' }
  | { type: 'release' }
  | { type: 'scroll' }
  | { type: 'settle' }
  | { type: 'teleport' }
  | { type: 'reset' }
  | { type: 'reported' }

export type ScrollIntentStore = Store<IntentState, IntentAction>

export const INITIAL_INTENT: IntentState = {
  phase: 'idle',
  source: null,
  candidate: false,
  landed: null,
  target: null,
  pointerDown: false,
  settlePending: false,
}

const settled = (state: IntentState): IntentState => ({
  ...state,
  phase: 'idle',
  landed: state.source,
  source: null,
  target: null,
  settlePending: false,
})

export const intentReducer = (
  state: IntentState,
  action: IntentAction,
): IntentState => {
  switch (action.type) {
    case 'drive':
      return {
        ...state,
        source: action.source,
        candidate: false,
        target: action.target,
      }
    case 'input':
      return {
        ...state,
        candidate: true,
        target: null,
        pointerDown: state.pointerDown || action.kind === 'pointer',
      }
    case 'release': {
      if (!state.pointerDown) return state
      const released = { ...state, pointerDown: false }
      return state.settlePending ? settled(released) : released
    }
    case 'scroll':
      return {
        ...state,
        phase: 'moving',
        source: state.candidate ? 'pointer' : state.source,
        candidate: false,
      }
    case 'settle':
      return state.pointerDown
        ? { ...state, settlePending: true }
        : settled(state)
    case 'teleport':
      // 静止後のテレポートは直前の移動の続きとして帰属する
      return {
        ...state,
        source: state.phase === 'idle' ? state.landed : state.source,
        target: null,
      }
    case 'reset':
      return {
        ...state,
        source: null,
        landed: null,
        candidate: false,
        target: null,
      }
    case 'reported':
      return { ...state, landed: null }
  }
}

export const createScrollIntent = (): ScrollIntentStore =>
  createStore(intentReducer, INITIAL_INTENT)

export const canAutoAdvance = (state: IntentState): boolean =>
  state.phase === 'idle' && !state.pointerDown

// 送りの起点。走行中は実座標ではなく「まだ到達していない目標」から積む。
export const scrollOrigin = (state: IntentState, scrollLeft: number): number =>
  state.target ?? scrollLeft
