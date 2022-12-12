import { action } from '@storybook/addon-actions'
import React from 'react'
import styled from 'styled-components'
import TagItem, { TagItemProps } from '.'
import { Story } from '../../_lib/compat'

export default {
  title: 'TagItem',
  component: TagItem,
  argTypes: {
    color: {
      control: {
        type: 'color',
      },
    },
    bgColor: {
      control: {
        type: 'color',
      },
    },
  },
}

export const Default: Story<TagItemProps> = (props) => {
  return <TagItem {...props} onClick={action("click")} onClose={action("close")}/>
}
Default.args = {
  label: '#女の子',
  color: '#F5F5F5',
  bgColor: '#7ACCB1',
  href: "",
  rel: "",
  target: ""
}

export const Playground: Story<TagItemProps> = ({ color, bgColor, label, translatedLabel }) => {
  return (
    <div>
      <Container>
        <div>
          <TagItem
            label={label}
            size="M"
            status="default"
            color={color}
            bgColor={bgColor}
            onClick={action('click')}
            onClose={action('close')}
          />
        </div>
        <div />
        <div>
          <TagItem
            label={label}
            translatedLabel={translatedLabel}
            size="M"
            status="default"
            color={color}
            bgColor={bgColor}
            onClick={action('click')}
            onClose={action('close')}
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
            color={color}
            bgColor={bgColor}
            onClick={action('click')}
            onClose={action('close')}
          />
        </div>
        <div />
        <div>
          <TagItem
            label={label}
            translatedLabel={translatedLabel}
            size="M"
            status="active"
            color={color}
            bgColor={bgColor}
            onClick={action('click')}
            onClose={action('close')}
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
            color={color}
            bgColor={bgColor}
            onClick={action('click')}
            onClose={action('close')}
          />
        </div>
        <div>
          <TagItem
            label={label}
            size="M"
            status="inactive"
            disabled
            color={color}
            bgColor={bgColor}
            onClick={action('click')}
            onClose={action('close')}
          />
        </div>
        <div>
          <TagItem
            label={label}
            translatedLabel={translatedLabel}
            size="M"
            status="inactive"
            color={color}
            bgColor={bgColor}
            onClick={action('click')}
            onClose={action('close')}
          />
        </div>
        <div>
          <TagItem
            label={label}
            translatedLabel={translatedLabel}
            size="M"
            status="inactive"
            disabled
            color={color}
            bgColor={bgColor}
            onClick={action('click')}
            onClose={action('close')}
          />
        </div>
      </Container>
      <Container>
        <div>
          <TagItem
            label={label}
            size="S"
            status="default"
            color={color}
            bgColor={bgColor}
            onClick={action('click')}
            onClose={action('close')}
          />
        </div>
      </Container>
      <Container>
        <div>
          <TagItem
            label={label}
            size="S"
            status="active"
            color={color}
            bgColor={bgColor}
            onClick={action('click')}
            onClose={action('close')}
          />
        </div>
      </Container>
      <Container>
        <div>
          <TagItem
            label={label}
            size="S"
            status="inactive"
            color={color}
            bgColor={bgColor}
            onClick={action('click')}
            onClose={action('close')}
          />
        </div>
        <div>
          <TagItem
            label={label}
            size="S"
            status="inactive"
            disabled
            color={color}
            bgColor={bgColor}
            onClick={action('click')}
            onClose={action('close')}
          />
        </div>
      </Container>
    </div>
  )
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

Playground.args = {
  label: '#女の子',
  translatedLabel: "girl",
  color: '#F5F5F5',
  bgColor: '#7ACCB1',
}
