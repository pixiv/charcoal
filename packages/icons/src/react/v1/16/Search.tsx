import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSearch = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.757 12.172a5 5 0 111.414-1.414l2.036 2.035a1 1 0 01-1.414 1.414l-2.036-2.035zM11 8a3 3 0 11-6 0 3 3 0 016 0z"
      fill="currentColor"
    />
  </svg>
)
export const IconSearch16 = forwardRef(SvgSearch)
export default IconSearch16
