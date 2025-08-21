import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgFilter = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M10.5 13.468L3.574 6.4C2.335 5.133 3.232 3 5.005 3h13.99c1.773 0 2.67 2.133 1.43 3.4L13.5 13.467V19a3 3 0 01-3.002 3v-8.532z"
      fill="currentColor"
    />
  </svg>
)
export const IconFilter24 = forwardRef(SvgFilter)
export default IconFilter24
