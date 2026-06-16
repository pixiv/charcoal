import { createStore, type Store } from './store'

export type CarouselState = Readonly<{
  activeIndex: number
  canPrev: boolean
  canNext: boolean
  scroll: { index: number; nonce: number } | null
}>

export type CarouselAction =
  | { type: 'setActive'; index: number }
  | { type: 'setScrollState'; canPrev: boolean; canNext: boolean }
  | { type: 'requestScroll'; index: number }

export type CarouselStore = Store<CarouselState, CarouselAction>

export const INITIAL_CAROUSEL_STATE: CarouselState = {
  activeIndex: 0,
  canPrev: false,
  canNext: false,
  scroll: null,
}

const reducer = (
  state: CarouselState,
  action: CarouselAction,
): CarouselState => {
  switch (action.type) {
    case 'setActive':
      return state.activeIndex === action.index
        ? state
        : { ...state, activeIndex: action.index }
    case 'setScrollState':
      return state.canPrev === action.canPrev &&
        state.canNext === action.canNext
        ? state
        : { ...state, canPrev: action.canPrev, canNext: action.canNext }
    case 'requestScroll':
      return {
        ...state,
        scroll: { index: action.index, nonce: (state.scroll?.nonce ?? 0) + 1 },
      }
  }
}

export function createCarouselStore(): CarouselStore {
  return createStore(reducer, INITIAL_CAROUSEL_STATE)
}
