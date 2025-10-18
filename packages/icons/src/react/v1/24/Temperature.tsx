import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgTemperature = (
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
      d="M15 15.354V5a3 3 0 10-6 0v10.354a4 4 0 106 0zM12 4a1 1 0 00-1 1v7h2V5a1 1 0 00-1-1z"
      fill="currentColor"
    />
  </svg>
)
export const IconTemperature24: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgTemperature)
export default IconTemperature24
