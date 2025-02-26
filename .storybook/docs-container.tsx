import React, { ComponentPropsWithoutRef, FC } from 'react'
import { DocsContainer as BaseContainer } from '@storybook/addon-docs'
import { useDarkMode } from 'storybook-dark-mode'
import { themes } from '@storybook/theming'

export const DocsContainer: FC<
  ComponentPropsWithoutRef<typeof BaseContainer>
> = ({ children, ...rest }) => {
  const dark = useDarkMode()

  return (
    <BaseContainer {...rest} theme={dark ? themes.dark : themes.light}>
      {children}
    </BaseContainer>
  )
}
