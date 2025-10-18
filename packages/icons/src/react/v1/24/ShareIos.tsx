import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgShareIos = (
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
      d="M12 2.586L7.293 7.293a1 1 0 001.414 1.414L11 6.414V13a1 1 0 102 0V6.414l2.293 2.293a1 1 0 101.414-1.414L12 2.586z"
      fill="currentColor"
    />
    <path
      d="M6 18v-6H4v6a3 3 0 003 3h10a3 3 0 003-3v-6h-2v6a1 1 0 01-1 1H7a1 1 0 01-1-1z"
      fill="currentColor"
    />
  </svg>
)
export const IconShareIos24: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgShareIos)
export default IconShareIos24
