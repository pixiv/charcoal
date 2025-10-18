import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCommandscircle = (
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
      d="M3.5 12a8.5 8.5 0 1117 0 8.5 8.5 0 01-17 0zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM8.5 9.5a1 1 0 110-2 1 1 0 010 2zm4.5-1a1 1 0 11-2 0 1 1 0 012 0zm0 3.5a1 1 0 11-2 0 1 1 0 012 0zm-1 4.5a1 1 0 100-2 1 1 0 000 2zM7.5 12a1 1 0 102 0 1 1 0 00-2 0zm1 4.5a1 1 0 110-2 1 1 0 010 2zm6-8a1 1 0 102 0 1 1 0 00-2 0zm1 4.5a1 1 0 110-2 1 1 0 010 2zm-1 2.5a1 1 0 102 0 1 1 0 00-2 0z"
      fill="currentColor"
    />
  </svg>
)
export const IconCommandsCircle: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgCommandscircle)
export default IconCommandsCircle
