import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSubtract = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
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
      d="M3.25 12c0-.69.56-1.25 1.25-1.25h15a1.25 1.25 0 110 2.5h-15c-.69 0-1.25-.56-1.25-1.25z"
      fill="currentColor"
    />
  </svg>
)
export const IconSubtractSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgSubtract)
export default IconSubtractSolid
