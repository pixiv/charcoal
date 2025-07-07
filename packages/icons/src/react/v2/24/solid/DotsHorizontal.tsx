import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgDotshorizontal = (
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
      d="M5.5 14a2 2 0 100-4 2 2 0 000 4zm6.5 0a2 2 0 100-4 2 2 0 000 4zm6.5 0a2 2 0 100-4 2 2 0 000 4z"
      fill="currentColor"
    />
  </svg>
)
export const IconDotsHorizontalSolid = forwardRef(SvgDotshorizontal)
export default IconDotsHorizontalSolid
