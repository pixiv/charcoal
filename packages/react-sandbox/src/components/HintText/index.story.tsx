import { Story } from '../../_lib/compat'
import HintText from '.'

export default {
  title: 'Sandbox/HintText',
  component: HintText,
}

const Template: Story<{ hintText: string; context: 'page' | 'section' }> = (
  args
) => <HintText context={args.context}>{args.hintText}</HintText>

export const Default = Template.bind({})
Default.args = {
  hintText:
    'ヒントテキストだよおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおお',
  context: 'section',
}
