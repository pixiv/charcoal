import type { Story } from '../../_lib/compat'
import '@charcoal-ui/icons'
import IconButton from '.'
import type { KnownIconType } from '@charcoal-ui/icons'

export default {
  title: 'IconButton',
  component: IconButton,
  argTypes: {
    variant: {
      control: {
        type: 'inline-radio',
        options: ['Default', 'Overlay'],
      },
    },
    size: {
      control: {
        type: 'inline-radio',
        options: ['M', 'S', 'XS'],
      },
    },
  },
}

type Props = {
  variant?: 'Default' | 'Overlay'
  size?: 'M' | 'S' | 'XS'
}

const Template: Story<Props> = (props) => {
  const { size } = props
  const icon: keyof KnownIconType = {
    XS: '16/Remove' as const,
    S: '24/Close' as const,
    M: '24/Close' as const,
  }[size ?? 'M']
  return <IconButton title="close" {...props} icon={icon} />
}

export const DefaultM: Story<Props> = Template.bind({})
DefaultM.args = {
  variant: 'Default',
  size: 'M',
}

export const OverlayM: Story<Props> = Template.bind({})
OverlayM.args = {
  variant: 'Overlay',
  size: 'M',
}
