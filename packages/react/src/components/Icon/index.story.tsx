import React from 'react'
import Icon, { IconProps } from '.'
import { KNOWN_ICON_FILES } from '@charcoal-ui/icons'
import { Story } from '../../_lib/compat'

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {
    name: {
      control: {
        type: 'select',
        options: KNOWN_ICON_FILES,
      },
    },
    scale: {
      control: {
        type: 'select',
        options: [1, 2, 3],
      },
    },
  },
}

// NOTICE: コード生成のタイミングで不当に型エラーが出ることがあるので name を any にする
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template: Story<IconProps & { name: any }> = (props) => (
  <Icon {...props} />
)

export const Default = Template.bind({})

Default.args = { name: KNOWN_ICON_FILES[0], scale: 1 }
