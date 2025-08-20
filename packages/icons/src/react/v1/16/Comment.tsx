import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgComment = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M5.4 13.409l-2.64.377.333-2.332a6 6 0 112.306 1.955z"
      fill="currentColor"
    />
  </svg>
)
export const IconComment16 = forwardRef(SvgComment)
export default IconComment16
