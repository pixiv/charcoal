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
      d="M15.655 3.415a3.25 3.25 0 114.596 4.596L8.011 20.25h12.817a.75.75 0 010 1.5H3.779a.747.747 0 01-.342-.083 1.752 1.752 0 01-1.425-2l.303-1.902a3.75 3.75 0 011.052-2.063L15.655 3.415z"
      fill="currentColor"
    />
  </svg>
)
export const IconPenSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgPen)
export default IconPenSolid
