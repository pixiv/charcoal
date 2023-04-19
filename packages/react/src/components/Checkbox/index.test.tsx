import 'jest-styled-components'

import React from 'react'
import Checkbox from '.'
import { render } from '../test_util'

describe('Checkbox', () => {
  test('<Checkbox />', () => {
    expect(render(<Checkbox label="test" />)).toMatchSnapshot()
  })
})
