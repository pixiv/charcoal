// React に依存しない headless ストア。
// command (set) / query (getValue) を分離した最小 API: set / subscribe / getValue。
// useSyncExternalStore とそのまま接続できる形にしてある。

type Listener = () => void;

export type PageCounter = Readonly<{
  /** 現在ページの取得 (query) */
  getValue: () => number;
  /** 変更通知の購読 (unsubscribe を返す) */
  subscribe: (listener: Listener) => () => void;
  /** ページの設定 (command)。同値なら no-op で通知も出さない。 */
  set: (page: number) => void;
}>;

export const createPageCounter = (initial = 0): PageCounter => {
  let value = initial;
  const listeners = new Set<Listener>();

  const getValue = () => value;

  const subscribe = (listener: Listener) => {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  };

  const set = (page: number) => {
    if (page === value) return;
    value = page;
    for (const listener of listeners) {
      listener();
    }
  };

  return { getValue, subscribe, set };
};
