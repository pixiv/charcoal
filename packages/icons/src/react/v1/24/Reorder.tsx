import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgReorder = (
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
      d="M5 5a1 1 0 000 2h14a1 1 0 100-2H5zM5 9a1 1 0 000 2h14a1 1 0 100-2H5zM4 14a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zM5 17a1 1 0 100 2h14a1 1 0 100-2H5z"
      fill="currentColor"
    />
  </svg>
)
export const IconReorder24: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgReorder)
export default IconReorder24
