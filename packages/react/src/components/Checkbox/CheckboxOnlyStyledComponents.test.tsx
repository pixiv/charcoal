import 'jest-styled-components'

import React from 'react'
import CheckboxOnlyStyled from './CheckboxOnlyStyledComponents'
import { render } from './performance.test'

describe('CheckboxOnlyStyled', () => {
  test('<CheckboxOnlyStyled />', () => {
    expect(render(<CheckboxOnlyStyled label="test" />)).toMatchSnapshot()
  })
})
