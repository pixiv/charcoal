import { useEffect, useMemo, useState } from 'react'

export const LOCAL_STORAGE_KEY = 'charcoal-theme'
export const DEFAULT_ROOT_ATTRIBUTE = 'theme'

const keyStringRegExp = new RegExp(/^(\w|-)+$/)

/**
 * 文字列が英数字_-のみで構成されているか検証する。不正な文字列ならエラーを投げる
 * @param key 検証するキー
 */
export function assertKeyString(key: string): void {
  if (!keyStringRegExp.test(key)) {
    throw new Error(`Unexpected key :${key}, expect: /^(\\w|-)+$/`)
  }
}

/**
 * `<html data-theme="dark">` のような設定を行うデフォルトのセッター
 */
export const themeSetter =
  (attr: string = DEFAULT_ROOT_ATTRIBUTE) =>
  (theme: string | undefined): void => {
    assertKeyString(attr)
    if (theme !== undefined) {
      document.documentElement.dataset[attr] = theme
    } else {
      delete document.documentElement.dataset[attr]
    }
  }

/**
 * `<html data-theme="dark">` にマッチするセレクタを生成する
 */
export function themeSelector<
  T extends string,
  S extends string = typeof DEFAULT_ROOT_ATTRIBUTE
>(theme: T, attr?: S): `:root[data-theme='${T}']` | `:root[data-${S}='${T}']` {
  return `:root[data-${attr ?? DEFAULT_ROOT_ATTRIBUTE}='${theme}']` as const
}

/**
 * prefers-color-scheme を利用する media クエリを生成する
 */
export function prefersColorScheme<T extends 'light' | 'dark'>(
  theme: T
): `@media (prefers-color-scheme: ${T})` {
  return `@media (prefers-color-scheme: ${theme})` as const
}

/**
 * LocalStorageからテーマの情報を取得して、変化時にテーマをセットするhooks
 */
export function useThemeSetter({
  key = LOCAL_STORAGE_KEY,
  setter = themeSetter(),
}: { key?: string; setter?: (theme: string | undefined) => void } = {}): void {
  const [theme, , system] = useTheme(key)

  useEffect(() => {
    if (theme === undefined) {
      return
    }
    // prefers-color-scheme から値を取っている場合にはcssのみで処理したいのでアンセットする
    setter(system ? undefined : theme)
  }, [setter, system, theme])
}

/**
 * 同期的にLocalStorageからテーマを取得するヘルパ
 */
export function getThemeSync(key: string = LOCAL_STORAGE_KEY): string | null {
  const theme = localStorage.getItem(key)
  return theme
}

/**
 * LocalStorage, prefers-color-scheme からテーマの情報を取得して、現在のテーマを返すhooks
 *
 * `dark` `light` という名前だけは特別扱いされていて、prefers-color-schemeにマッチした場合に返ります
 */
export const useTheme = (
  localStorageKey: string = LOCAL_STORAGE_KEY
): readonly [
  'dark' | 'light' | undefined,
  (value: 'dark' | 'light' | undefined) => void,
  boolean
] => {
  assertKeyString(localStorageKey)
  const isDark = useMedia('(prefers-color-scheme: dark)')
  const media = isDark !== undefined ? (isDark ? 'dark' : 'light') : undefined
  const [local, setTheme, ready] =
    useLocalStorage<typeof media>(localStorageKey)
  const theme = !ready || media === undefined ? undefined : local ?? media
  const system = local === undefined
  return [theme, setTheme, system] as const
}

export function useLocalStorage<T>(key: string, defaultValue?: () => T): readonly [T | undefined, (value: T | undefined) => void, boolean] {
  const [ready, setReady] = useState(false)
  const [state, setState] = useState<T>()
  const defaultValueMemo = useMemo(() => defaultValue?.(), [defaultValue])

  useEffect(() => {
    fetch()
    window.addEventListener('storage', handleStorage)
    return () => {
      window.removeEventListener('storage', handleStorage)
    }
  })

  const handleStorage = (e: StorageEvent) => {
    if (e.storageArea !== localStorage) {
      return
    }
    if (e.key !== key) {
      return
    }
    fetch()
  }

  const fetch = () => {
    const raw = localStorage.getItem(key)
    setState((raw !== null ? deserialize(raw) : null) ?? defaultValueMemo)
    setReady(true)
  }

  const set = (value: T | undefined) => {
    if (value === undefined) {
      // undefinedがセットされる場合にはkeyごと削除
      localStorage.removeItem(key)
    } else {
      const raw = serialize(value)
      localStorage.setItem(key, raw)
    }

    // 同一ウィンドウではstorageイベントが発火しないので、手動で発火させる
    const event = new StorageEvent('storage', {
      bubbles: true,
      cancelable: false,
      key,
      url: location.href,
      storageArea: localStorage,
    })
    dispatchEvent(event)
  }

  return [state ?? defaultValueMemo, set, ready] as const
}

function deserialize<T>(raw: string): T {
  try {
    return JSON.parse(raw) as T
  } catch {
    // syntax error はすべて文字列として扱う
    return raw as unknown as T
  }
}

function serialize(value: unknown): string {
  if (typeof value === 'string') {
    return value
  } else {
    return JSON.stringify(value)
  }
}

export function useMedia(query: string): boolean | undefined {
  const [match, setState] = useState<boolean>()

  useEffect(() => {
    const matcher = window.matchMedia(query)

    const onChange = () => {
      setState(matcher.matches)
    }

    matcher.addEventListener('change', onChange)

    setState(matcher.matches)

    return () => {
      matcher.removeEventListener('change', onChange)
    }
  }, [query])

  return match
}
