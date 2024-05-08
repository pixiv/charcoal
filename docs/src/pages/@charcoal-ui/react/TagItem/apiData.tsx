import { TagItemProps } from '@charcoal-ui/react'
import { ComponentPropsWithRef } from 'react'
import { ApiTableData } from '../_components/ApiTable'

export const apiData: Omit<
  ApiTableData<TagItemProps<'button'>, HTMLButtonElement>,
  keyof Omit<ComponentPropsWithRef<'button'>, 'disabled'>
> = {
  bgColor: {
    default: '',
    description: '背景色、CSSで扱える文字列',
    type: 'string',
  },
  bgImage: {
    default: '',
    description: '背景画像のURL',
    type: 'string',
  },
  label: {
    default: '',
    description: '表示するテキスト',
    required: true,
    type: 'string',
  },
  size: {
    default: '"M"',
    description: '大きさ',
    type: '"S" | "M"',
  },
  status: {
    default: '"default"',
    description: 'タグの状態',
    type: '"default" | "active" | "inactive"',
  },
  target: {
    default: '',
    description: 'a要素のtarget',
    type: 'boolean',
  },
  translatedLabel: {
    default: '',
    description:
      '翻訳されたタグ、labelの代わりに表示され、labelは下に表示される。',
    type: 'string',
  },
  disabled: {
    default: '',
    description: '無効化',
    type: 'boolean',
  },
}
