import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgFormatText = (
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
      d="M18 4a1 1 0 110 2h-5v12.934c0 .589-.448 1.066-1 1.066s-1-.477-1-1.066V6H6a1 1 0 010-2h12z"
      fill="currentColor"
    />
  </svg>
)
export const IconFormatText24: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgFormatText)
export default IconFormatText24
