import React from 'react'
import Icon, { IconProps } from '.'
import { KNOWN_ICON_FILES } from '../../../../icons/src/filenames'
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

const Template: Story<IconProps> = (props) => <Icon {...props} />

export const Default: Story<IconProps> = Template.bind({})

Default.args = { name: KNOWN_ICON_FILES[0], scale: 1 }
