import { Story } from '../../../_lib/compat'
import { Placement, PopoverProps } from '..'
import { PopoverButton } from './Basic'

export const Dir: Story<PopoverProps> = () => {
  return (
    <div
      style={{
        width: 'calc(100vw - 2rem)',
        height: 'calc(100vh - 2rem)',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
      }}
    >
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          gap: '24px',
        }}
      >
        {['top right', 'top', 'top left'].map((style, i) => (
          <PopoverButton key={i} placement={style as Placement} text={style} />
        ))}
      </div>
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          gap: '24px',
        }}
      >
        {['bottom right', 'bottom', 'bottom left'].map((style, i) => (
          <PopoverButton key={i} placement={style as Placement} text={style} />
        ))}
      </div>
    </div>
  )
}
