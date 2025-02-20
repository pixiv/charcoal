import { useEffect, useState } from 'react'
import { addons } from '@storybook/preview-api'

const DARK_MODE_EVENT_NAME = 'DARK_MODE'

// https://github.com/storybookjs/storybook/issues/28758
export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(
    addons.getChannel().last(DARK_MODE_EVENT_NAME).at(0) ?? false
  )

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
