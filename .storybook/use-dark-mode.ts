import { useEffect, useState } from 'react'
import { addons } from 'storybook/preview-api'

const DARK_MODE_EVENT_NAME = 'DARK_MODE'

const parseBoolean = (value: unknown): boolean | undefined => {
  if (typeof value === 'boolean') {
    return value
  }
  if (typeof value === 'string') {
    if (value === 'dark') {
      return true
    }
    if (value === 'light') {
      return false
    }
  }
  return undefined
}

export const resolveIsDarkMode = (
  globals?: Record<string, unknown>,
): boolean => {
  const byDarkMode = parseBoolean(globals?.darkMode)
  if (typeof byDarkMode !== 'undefined') {
    return byDarkMode
  }
  const byTheme = parseBoolean(globals?.theme)
  if (typeof byTheme !== 'undefined') {
    return byTheme
  }
  const byColorScheme = parseBoolean(globals?.colorScheme)
  if (typeof byColorScheme !== 'undefined') {
    return byColorScheme
  }
  return false
}

// https://github.com/storybookjs/storybook/issues/28758
export const useDarkMode = (globals?: Record<string, unknown>): boolean => {
  const [isDark, setIsDark] = useState(() => {
    const fromGlobals = resolveIsDarkMode(globals)
    if (fromGlobals) {
      return true
    }
    // vitest 用に optional chaining を追加
    return addons.getChannel().last(DARK_MODE_EVENT_NAME)?.at(0) ?? false
  })

  useEffect(() => {
    setIsDark(resolveIsDarkMode(globals))
  }, [globals])

  useEffect(() => {
    const chan = addons.getChannel()
    const handler = (isDark: boolean) => {
      setIsDark(isDark)
    }

    chan.on(DARK_MODE_EVENT_NAME, handler)
    return () => {
      chan.off(DARK_MODE_EVENT_NAME, handler)
    }
  }, [])

  return isDark
}
