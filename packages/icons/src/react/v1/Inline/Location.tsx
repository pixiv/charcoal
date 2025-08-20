import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgLocation = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={10}
    height={12}
    viewBox="0 0 10 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 5c0 2.761-5 7-5 7S0 7.761 0 5a5 5 0 0110 0zM7 5a2 2 0 11-4 0 2 2 0 014 0z"
      fill="currentColor"
    />
  </svg>
)
export const IconLocationInline = forwardRef(SvgLocation)
export default IconLocationInline
