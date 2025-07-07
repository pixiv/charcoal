import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgText = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M3.75 6.25A2.25 2.25 0 016 4h12a2.25 2.25 0 012.25 2.25V7.5a1.25 1.25 0 11-2.5 0v-1h-4.5v13H15a1.25 1.25 0 110 2.5H9a1.25 1.25 0 110-2.5h1.75v-13h-4.5v1a1.25 1.25 0 11-2.5 0V6.25z"
      fill="currentColor"
    />
  </svg>
)
export const IconTextSolid = forwardRef(SvgText)
export default IconTextSolid
