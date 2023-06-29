import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import SwitchCheckbox from '.'

export default {
  title: 'Sandbox/Selection Control/SwitchCheckbox',
  component: SwitchCheckbox,
}

export const Default = () => {
  const checked = boolean('checked', false)
  const disabled = boolean('disabled', false)
  const flex = boolean('flex', false)
  const rowReverse = boolean('rowReverse', false)

  return (
    <SwitchCheckbox
      defaultChecked={checked}
      flex={flex}
      disabled={disabled}
      rowReverse={rowReverse}
      onChange={action('onChange')}
    >
      label
    </SwitchCheckbox>
  )
}

export const On = () => <SwitchCheckbox checked />
export const Off = () => <SwitchCheckbox checked={false} />
export const Disabled = () => <SwitchCheckbox checked disabled />
