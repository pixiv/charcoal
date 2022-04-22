import React from 'react'
import Icon, { OwnProps } from '.'
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

const Template: Story<OwnProps> = (props) => <Icon {...props} />

export const Default: Story<OwnProps> = Template.bind({})

Default.args = { name: KNOWN_ICON_FILES[0], scale: 1 }
