/**
 * `useSyncExternalStore` 互換の、ドメインに依存しない最小の reducer ストア。
 * `dispatch`（action を流す）/ `subscribe`（変更購読）/ `getSnapshot`（現在値取得）
 * だけを提供する抽象プリミティブ。ドメインの意味は reducer と action 側で持たせる。
 */
export type Store<State, Action> = Readonly<{
  dispatch: (action: Action) => void
  subscribe: (listener: () => void) => () => void
  getSnapshot: () => State
}>

export function createStore<State, Action>(
  reducer: (state: State, action: Action) => State,
  initialState: State,
): Store<State, Action> {
  let state = initialState
  const listeners = new Set<() => void>()

  return {
    dispatch(action) {
      state = reducer(state, action)
      for (const listener of listeners) {
        listener()
      }
    },
    subscribe(listener) {
      listeners.add(listener)
      return () => {
        listeners.delete(listener)
      }
    },
    getSnapshot: () => state,
  }
}
