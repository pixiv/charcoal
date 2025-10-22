import { render } from '@testing-library/react'
import TokenV2DemoStyled from './TokenV2DemoStyled'
import TokenV2Tailwind from './TokenV2DemoTailwind'

import { bench } from 'vitest'

describe.each([
  ['styled', TokenV2DemoStyled],
  ['tailwind', TokenV2Tailwind],
] as const)('render test: %s', (_description, Demo) => {
  bench('benchmarks token object creation for the theme', () => {
    render(
      <>
        {new Array<null>(200).fill(null).map((_, i) => (
          <Demo key={i} />
        ))}
      </>,
    )
  })
})
