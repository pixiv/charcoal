import { action } from '@storybook/addon-actions'
import styled from 'styled-components'
import TagItem, { TagItemProps } from '.'
import { Story } from '../../_lib/compat'

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
}

export const Default: Story<TagItemProps> = (props) => {
  return <TagItem {...props} onClick={action('click')} />
}
Default.args = {
  label: '#女の子',
  bgColor: '#7ACCB1',
  href: '',
  rel: '',
  target: '',
  className: '',
}

export const Playground: Story<TagItemProps> = ({
  bgColor,
  label,
  translatedLabel,
}) => {
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
  translatedLabel: 'girl',
  bgColor: '#7ACCB1',
}
