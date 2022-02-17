import React from 'react'

/**
 * import { Story } from '@storybook/react/types-6-0'
 *
 * をするとstyled-componentsが壊れるので代替品を作った
 *
 * エラー:
 * node_modules/@types/styled-components/ts3.7/index.d.ts
 * `Type alias 'Interpolation' circularly references itself. ts(2456)`
 */
export interface Story<P> {
  (args: P): React.ReactNode
  args?: P
}
