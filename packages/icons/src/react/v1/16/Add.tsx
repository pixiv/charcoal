import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAdd = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M9 9h3a1 1 0 100-2H9V4a1 1 0 00-2 0v3H4a1 1 0 000 2h3v3a1 1 0 102 0V9z"
      fill="currentColor"
    />
  </svg>
)
export const IconAdd16: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgAdd)
export default IconAdd16
