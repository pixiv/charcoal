import { createStore, type Store } from './store'

/** 現在のスクロール対象 index。未指定なら null。 */
type CarouselState = number | null

type CarouselAction = { type: 'scrollTo'; index: number }

/**
 * 抽象 store（`createStore`）を wrap し、カルーセルのスクロール「コマンド」という
 * 意味を action / reducer 側で与える。
 *
 * 各 item は `subscribe` のコールバック内で `getSnapshot()` を見て、自分が対象なら
 * 自分自身の要素に `scrollIntoView` を発行する（副作用なので render には反映しない＝
 * 再レンダーは発生しない）。`subscribe` は dispatch ごとに発火するため、同じ index を
 * 連続で指定しても再発火する（nonce は不要）。
 */
export type CarouselStore = Store<CarouselState, CarouselAction>

const reducer = (
  _state: CarouselState,
  action: CarouselAction,
): CarouselState => {
  switch (action.type) {
    case 'scrollTo':
      return action.index
  }
}

export function createCarouselStore(): CarouselStore {
  return createStore(reducer, null)
}
