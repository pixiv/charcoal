import { Meta, StoryObj } from '@storybook/react'
import Layout from '.'

export default {
  title: 'react-sandbox/Layout',
  component: Layout,
} satisfies Meta<typeof Layout>

export const Default: StoryObj<typeof Layout> = {
  render: (props) => {
    return (
      <Layout {...props} menu={<>menu</>} header={<>header</>}>
        children
      </Layout>
    )
  },
}
