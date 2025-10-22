import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgPullDown = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M8.586 12.586a2 2 0 000 2.828L16 22.828l7.414-7.414a2 2 0 10-2.828-2.828L16 17.172l-4.586-4.586a2 2 0 00-2.828 0z"
      fill="currentColor"
    />
  </svg>
)
export const IconPullDown32: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgPullDown)
export default IconPullDown32
