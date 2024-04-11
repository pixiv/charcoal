import { CheckboxProps } from '@charcoal-ui/react'
import { ComponentPropsWithRef } from 'react'
import { ApiTableData } from '../_components/ApiTable'

export const apiData: Omit<
  ApiTableData<CheckboxProps, HTMLInputElement>,
  keyof ComponentPropsWithRef<'input'>
> = {
  invalid: {
    description: '入力の不正化',
    default: 'false',
    type: 'boolean',
  },
}
