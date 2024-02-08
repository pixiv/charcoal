import { action } from '@storybook/addon-actions'
import styled from 'styled-components'
import TagItem from '.'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'TagItem',
  component: TagItem,
  argTypes: {
    bgColor: {
      control: {
        type: 'color',
      },
    },
  },
  render: function Render(args) {
    return <TagItem {...args} />
  },
} as Meta<typeof TagItem>

export const Default: StoryObj<typeof TagItem> = {
  args: {
    label: '#女の子',
    bgColor: '#7ACCB1',
  },
}

export const Playground: StoryObj<typeof TagItem> = {
  render: function Render({ bgColor, label, translatedLabel }) {
    return (
      <div>
        <Container>
          <div>
            <TagItem
              label={label}
              size="M"
              status="default"
              bgColor={bgColor}
              onClick={action('click')}
            />
          </div>
          <div />
          <div>
            <TagItem
              label={label}
              translatedLabel={translatedLabel}
              size="M"
              status="default"
              bgColor={bgColor}
              onClick={action('click')}
            />
          </div>
          <div />
        </Container>
        <Container>
          <div>
            <TagItem
              label={label}
              size="M"
              status="active"
              bgColor={bgColor}
              onClick={action('click')}
            />
          </div>
          <div />
          <div>
            <TagItem
              label={label}
              translatedLabel={translatedLabel}
              size="M"
              status="active"
              bgColor={bgColor}
              onClick={action('click')}
            />
          </div>
          <div />
        </Container>
        <Container>
          <div>
            <TagItem
              label={label}
              size="M"
              status="inactive"
              bgColor={bgColor}
              onClick={action('click')}
            />
          </div>
          <div>
            <TagItem
              label={label}
              size="M"
              status="inactive"
              disabled
              bgColor={bgColor}
              onClick={action('click')}
            />
          </div>
          <div>
            <TagItem
              label={label}
              translatedLabel={translatedLabel}
              size="M"
              status="inactive"
              bgColor={bgColor}
              onClick={action('click')}
            />
          </div>
          <div>
            <TagItem
              label={label}
              translatedLabel={translatedLabel}
              size="M"
              status="inactive"
              disabled
              bgColor={bgColor}
              onClick={action('click')}
            />
          </div>
        </Container>
        <Container>
          <div>
            <TagItem
              label={label}
              size="S"
              status="default"
              bgColor={bgColor}
              onClick={action('click')}
            />
          </div>
        </Container>
        <Container>
          <div>
            <TagItem
              label={label}
              size="S"
              status="active"
              bgColor={bgColor}
              onClick={action('click')}
            />
          </div>
        </Container>
        <Container>
          <div>
            <TagItem
              label={label}
              size="S"
              status="inactive"
              bgColor={bgColor}
              onClick={action('click')}
            />
          </div>
          <div>
            <TagItem
              label={label}
              size="S"
              status="inactive"
              disabled
              bgColor={bgColor}
              onClick={action('click')}
            />
          </div>
        </Container>
      </div>
    )
  },
  args: {
    label: '#女の子',
    translatedLabel: 'girl',
    bgColor: '#7ACCB1',
  },
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
  }
`
