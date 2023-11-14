import { Story } from '../../../_lib/compat'
import { PopoverProps } from '..'
import { PopoverButton } from './Basic'

export const Scroll: Story<PopoverProps> = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 1000,
      }}
    >
      <PopoverButton />
    </div>
  )
}
