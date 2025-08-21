import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgError = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 4a2 2 0 00-2 2v6.5a2 2 0 104 0V6a2 2 0 00-2-2zm2.25 13.75a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
      fill="currentColor"
    />
  </svg>
)
export const IconError24 = forwardRef(SvgError)
export default IconError24
