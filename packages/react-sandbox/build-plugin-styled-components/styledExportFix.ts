// https://github.com/styled-components/styled-components/issues/3437
// eslint-disable-next-line no-restricted-imports
import styled from 'styled-components'

// eslint-disable-next-line no-restricted-imports
export * from 'styled-components'

// @ts-expect-error https://github.com/styled-components/styled-components/issues/3437#issuecomment-1103085056
// prettier-ignore
const _styled: typeof styled = typeof styled === 'function' ? styled : styled.default

export { _styled as default }
