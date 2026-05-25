import { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'react/FocusRing',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

function FocusRingExample() {
  return (
    <div
      className="charcoal-focus-ring"
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
