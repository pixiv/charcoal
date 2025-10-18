import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgPen = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M20.248 3.415a3.25 3.25 0 00-4.596 0L3.364 15.703a3.75 3.75 0 00-1.052 2.064l-.302 1.902c-.153.963.5 1.817 1.386 1.992a.746.746 0 00.354.089H21a.75.75 0 000-1.5H8.01L20.247 8.011a3.25 3.25 0 000-4.596zm-3.535 1.06a1.75 1.75 0 112.475 2.476L6.89 19.247a2.25 2.25 0 01-1.222.629l-1.89.314a.25.25 0 01-.288-.286l.302-1.902a2.25 2.25 0 01.631-1.238L16.713 4.476z"
      fill="currentColor"
    />
  </svg>
)
export const IconPen: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgPen)
export default IconPen
