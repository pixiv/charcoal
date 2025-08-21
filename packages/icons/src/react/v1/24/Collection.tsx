import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCollection = (
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
      d="M20 7a2 2 0 012 2v6a2 2 0 01-1.796 1.99L20 17h-6l-.204-.01a2 2 0 01-1.785-1.786L12 15V9a2 2 0 012-2h6zm-6 8h6V9h-6v6z"
      fill="currentColor"
    />
    <path
      d="M16 5a2 2 0 00-2-2H5a2 2 0 00-2 2v9l.01.204a2 2 0 001.786 1.785L5 16h1v-2H5V5h9v1h2V5z"
      fill="currentColor"
    />
    <path
      d="M9 11a2 2 0 00-2 2v6l.01.204a2 2 0 001.786 1.785L9 21h6l.204-.01A2.001 2.001 0 0017 19v-1h-2v1H9v-6h2v-2H9z"
      fill="currentColor"
    />
  </svg>
)
export const IconCollection24 = forwardRef(SvgCollection)
export default IconCollection24
