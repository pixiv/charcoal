import 'jest-styled-components'

import React from 'react'
import Checkbox from '.'
import { render } from './performance.test'

describe('Checkbox', () => {
  test('<Checkbox />', () => {
    expect(render(<Checkbox label="test" />)).toMatchSnapshot()
  })
})
