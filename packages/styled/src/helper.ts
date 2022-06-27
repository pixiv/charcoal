import { useEffect, useMemo, useState } from 'react'

const AVAILABLE_THEME = ['light', 'dark'] as const
type AvailableTheme = typeof AVAILABLE_THEME[number]

const LOCAL_STORAGE_KEY = 'theme'

export function initialThemeSetter(
  setter: (theme: AvailableTheme) => void = themeSetter
) {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, @typescript-eslint/strict-boolean-expressions
  if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
      const theme = getThemeSync()
      if (theme !== null) {
        setter(theme)
      }
    })
  }
}

export function themeSetter(theme: AvailableTheme) {
  document.documentElement.dataset.theme = theme
}

export function useThemeSetter(
  setter: (theme: AvailableTheme) => void = themeSetter
) {
  const [theme] = useTheme()

  useEffect(() => {
    if (theme === undefined) {
      return
    }
    setter(theme)
  }, [setter, theme])
}

export function getThemeSync() {
  const theme = localStorage.getItem(LOCAL_STORAGE_KEY)
  return theme !== null && AVAILABLE_THEME.includes(theme as AvailableTheme)
    ? (theme as AvailableTheme)
    : null
}

export const useTheme = () => {
  const isDark = useMedia('(prefers-color-scheme: dark)')
  const media = isDark !== undefined ? (isDark ? 'dark' : 'light') : undefined
  const [local, setTheme, ready] =
    useLocalStorage<AvailableTheme>(LOCAL_STORAGE_KEY)
  const theme = !ready || media === undefined ? undefined : local ?? media
  return [theme, setTheme, local === undefined] as const
}

export function useLocalStorage<T>(key: string, defaultValue?: () => T) {
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
    const event = document.createEvent('StorageEvent')
    event.initStorageEvent(
      'storage',
      true,
      false,
      key,
      null,
      null,
      location.href,
      localStorage
    )
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

export function useMedia(query: string) {
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
