import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgMessage = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.45 4A4.45 4.45 0 002 8.45v7.1A4.45 4.45 0 006.45 20h11.1A4.45 4.45 0 0022 15.55v-7.1A4.45 4.45 0 0017.55 4H6.45zM3.5 8.45A2.95 2.95 0 016.45 5.5h11.1a2.95 2.95 0 012.95 2.95v.961l-7.494 3.747a2.25 2.25 0 01-2.012 0L3.5 9.411V8.45zm0 2.639v4.461a2.95 2.95 0 002.95 2.95h11.1a2.95 2.95 0 002.95-2.95v-4.462L13.677 14.5a3.75 3.75 0 01-3.354 0L3.5 11.088z"
      fill="currentColor"
    />
  </svg>
)
export const IconMessage = forwardRef(SvgMessage)
export default IconMessage
