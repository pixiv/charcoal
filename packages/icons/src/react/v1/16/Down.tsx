import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M5.496 3a1 1 0 011-1h3.002a1 1 0 011 1v4.5H13.5a.5.5 0 01.347.86L7.999 14 2.154 8.36A.5.5 0 012.5 7.5h2.995V3z"
      fill="currentColor"
    />
  </svg>
)
export const IconDown16: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgDown)
export default IconDown16
