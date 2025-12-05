import React, { ComponentPropsWithoutRef, FC } from 'react'
import { DocsContainer as BaseContainer } from '@storybook/addon-docs/blocks'
import { themes } from 'storybook/theming'
import { useDarkMode } from './use-dark-mode'

export const DocsContainer: FC<
  ComponentPropsWithoutRef<typeof BaseContainer>
> = ({ children, ...rest }) => {
  const isDarkMode = useDarkMode()

  return (
    <BaseContainer {...rest} theme={isDarkMode ? themes.dark : themes.light}>
      {children}
    </BaseContainer>
  )
}
