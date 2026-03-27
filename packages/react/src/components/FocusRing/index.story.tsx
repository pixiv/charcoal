import { Meta, StoryObj } from '@storybook/react-vite'

import { useClassNames } from '../../_lib/useClassNames'

const meta = {
  title: 'react/FocusRing',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

function FocusRingExample() {
  const classNames = useClassNames('charcoal-focus-ring')

  return (
    <div
      className={classNames}
      style={{
        backgroundColor: 'var(--charcoal-surface3)',
        borderRadius: 8,
        color: 'var(--charcoal-text2)',
        padding: '16px 24px',
      }}
      tabIndex={0}
    >
      FocusRing
    </div>
  )
}

export const Default: Story = {
  render: () => <FocusRingExample />,
}
