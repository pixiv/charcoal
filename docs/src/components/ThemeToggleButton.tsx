import { IconButton } from '@charcoal-ui/react'
import { FC, useEffect } from 'react'
import { useTheme } from '@charcoal-ui/styled'

type ClassNameProps = {
  className?: string
}

export const ThemeToggleButton: FC<ClassNameProps> = ({ className }) => {
  const [theme, setTheme] = useTheme()
  useEffect(() => {
    if (theme === 'light') {
    } else {
    }
  }, [theme])
  return (
    <IconButton
      className={className}
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light')
      }}
      icon="24/Sun"
    />
  )
}
