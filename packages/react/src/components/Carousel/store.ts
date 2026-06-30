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
      for (const listener of listeners) listener()
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
