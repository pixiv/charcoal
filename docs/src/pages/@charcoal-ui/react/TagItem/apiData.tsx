import { TagItemProps } from '@charcoal-ui/react'
import { ApiTableData } from '../_components/ApiTable'

export const apiData: Partial<ApiTableData<TagItemProps, HTMLInputElement>> = {
  bgColor: {
    default: '',
    description: '背景色、CSSで扱える文字列',
    required: false,
    type: 'string',
  },
  bgImage: {
    default: '',
    description: '背景画像のURL',
    required: false,
    type: 'string',
  },
  href: {
    default: '',
    description: 'a要素のhref',
    required: false,
    type: 'string',
  },
  label: {
    default: '',
    description: '表示するテキスト',
    required: true,
    type: 'string',
  },
  rel: {
    default: '',
    description: 'a要素のrel',
    required: false,
    type: 'boolean',
  },
  size: {
    default: '"M"',
    description: '大きさ',
    required: false,
    type: '"S" | "M"',
  },
  status: {
    default: '"default"',
    description: 'タグの状態',
    required: false,
    type: '"default" | "active" | "inactive"',
  },
  target: {
    default: '',
    description: 'a要素のtarget',
    required: false,
    type: 'boolean',
  },
  translatedLabel: {
    default: '',
    description:
      '翻訳されたタグ、labelの代わりに表示され、labelは下に表示される。',
    required: false,
    type: 'string',
  },
  disabled: {
    default: '',
    description: '無効かどうか',
    required: false,
    type: 'boolean',
  },
}
