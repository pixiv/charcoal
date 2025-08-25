import Button from '.'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'react/Button',
  component: Button,
} as Meta<typeof Button>

export const Default: StoryObj<typeof Button> = {
  render: (args) => <Button {...args}>Button</Button>,
}

export const Primary: StoryObj<typeof Button> = {
  render: () => <Button variant="Primary">Primary</Button>,
}

export const Navigation: StoryObj<typeof Button> = {
  render: () => <Button variant="Navigation">Navigation</Button>,
}

export const Overlay: StoryObj<typeof Button> = {
  render: () => <Button variant="Overlay">Overlay</Button>,
}

export const Danger: StoryObj<typeof Button> = {
  render: () => <Button variant="Danger">Danger</Button>,
}

export const Small: StoryObj<typeof Button> = {
  render: () => <Button size="S">Small</Button>,
}

export const FullWidth: StoryObj<typeof Button> = {
  render: () => <Button fullWidth>Full width</Button>,
}

export const Disabled: StoryObj<typeof Button> = {
  render: () => <Button disabled>Disabled</Button>,
}

export const IsActive: StoryObj<typeof Button> = {
  render: () => <Button isActive>Active</Button>,
}

export const ComponentA: StoryObj<typeof Button> = {
  render: () => (
    <Button component="a" href="#">
      Button
    </Button>
  ),
}

export const ComponentADisabled: StoryObj<typeof Button> = {
  render: () => (
    <Button component="a" href="#" aria-disabled>
      Button
    </Button>
  ),
}

export const ComponentAPrimaryDisabled: StoryObj<typeof Button> = {
  render: () => (
    <Button component="a" href="#" variant="Primary" aria-disabled>
      Button
    </Button>
  ),
}

export const ComponentAOverlayDisabled: StoryObj<typeof Button> = {
  render: () => (
    <Button component="a" href="#" variant="Overlay" aria-disabled>
      Button
    </Button>
  ),
}

export const ComponentADangerDisabled: StoryObj<typeof Button> = {
  render: () => (
    <Button component="a" href="#" variant="Danger" aria-disabled>
      Button
    </Button>
  ),
}

export const ComponentANavigationDisabled: StoryObj<typeof Button> = {
  render: () => (
    <Button component="a" href="#" variant="Navigation" aria-disabled>
      Button
    </Button>
  ),
}

export const ComponentASmallDisabled: StoryObj<typeof Button> = {
  render: () => (
    <Button component="a" href="#" size="S" aria-disabled>
      Button
    </Button>
  ),
}
export const AriaDisabled: StoryObj<typeof Button> = {
  render: () => (
    <>
      <h2>disabled指定なし</h2>
      <div style={{ display: 'flex', gap: '8px' }}>
        <div>
          <Button>属性なし</Button>
        </div>
        <div>
          <Button aria-disabled>aria-disabled</Button>
        </div>
        <div>
          <Button aria-disabled="true">{`aria-disabled="true"`}</Button>
        </div>
        <div>
          <Button aria-disabled="false">{`aria-disabled="false"`}</Button>
        </div>
      </div>

      <h2>{`disabled={false}`}</h2>
      <div style={{ display: 'flex', gap: '8px' }}>
        <div>
          <Button disabled={false}>属性なし</Button>
        </div>
        <div>
          <Button aria-disabled disabled={false}>
            aria-disabled
          </Button>
        </div>
        <div>
          <Button
            aria-disabled="true"
            disabled={false}
          >{`aria-disabled="true"`}</Button>
        </div>
        <div>
          <Button
            aria-disabled="false"
            disabled={false}
          >{`aria-disabled="false"`}</Button>
        </div>
      </div>

      <h2>{`disabled={true}`}</h2>
      <div style={{ display: 'flex', gap: '8px' }}>
        <div>
          <Button disabled={true}>属性なし</Button>
        </div>
        <div>
          <Button aria-disabled disabled={true}>
            aria-disabled
          </Button>
        </div>
        <div>
          <Button
            aria-disabled="true"
            disabled={true}
          >{`aria-disabled="true"`}</Button>
        </div>
        <div>
          <Button
            aria-disabled="false"
            disabled={true}
          >{`aria-disabled="false"`}</Button>
        </div>
      </div>
    </>
  ),
}
