import { CheckboxProps } from '@charcoal-ui/react'
import { ApiTableData } from '../_components/ApiTable'

export const apiData: Omit<
  ApiTableData<CheckboxProps, HTMLInputElement>,
  keyof React.HTMLProps<HTMLInputElement>
> = {
  invalid: {
    description: '入力の不正化',
    default: 'false',
    type: 'boolean',
  },
  rounded: {
    description: '角丸の有効化',
    default: 'false',
    type: 'boolean',
  },
}
