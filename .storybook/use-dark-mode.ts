import { useState, useEffect } from 'react'
import { addons } from '@storybook/preview-api'

const DARK_MODE_EVENT_NAME = 'DARK_MODE'

// https://github.com/storybookjs/storybook/issues/28758
export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains('dark')
  )

  // document の class 属性の変化を監視してダークモード状態を更新
  useEffect(() => {
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.attributeName === 'class') {
          setIsDark(document.documentElement.classList.contains('dark'))
          break
        }
      }
    })
    observer.observe(document.documentElement, { attributes: true })
    return () => observer.disconnect()
  }, [])

  // Storybook の DARK_MODE イベントを監視
  useEffect(() => {
    const chan = addons.getChannel()
    chan.on(DARK_MODE_EVENT_NAME, setIsDark)
    return () => {
      chan.off(DARK_MODE_EVENT_NAME, setIsDark)
    }
  }, [])

  return isDark
}
