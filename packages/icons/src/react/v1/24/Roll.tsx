import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgRoll = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M6 13.586V12a6 6 0 018.854-5.28 1 1 0 00.953-1.758A8 8 0 004 12v1.586l-1.293-1.293a1 1 0 00-1.414 1.414L5 17.414l3.707-3.707a1 1 0 00-1.414-1.414L6 13.586zM7.79 17.682a1 1 0 00.403 1.356A8 8 0 0020 12v-1.586l1.293 1.293a1 1 0 101.414-1.414L19 6.586l-3.707 3.707a1 1 0 001.414 1.414L18 10.414V12a6 6 0 01-8.854 5.28 1 1 0 00-1.356.402z"
      fill="currentColor"
    />
  </svg>
)
export const IconRoll24: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgRoll)
export default IconRoll24
