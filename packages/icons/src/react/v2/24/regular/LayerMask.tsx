import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgLayerMask = (
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
      d="M6.45 3A3.45 3.45 0 003 6.45v11.1A3.45 3.45 0 006.45 21h11.1A3.45 3.45 0 0021 17.55V6.45A3.45 3.45 0 0017.55 3H6.45zM12 17.8a5.8 5.8 0 100-11.6 5.8 5.8 0 000 11.6z"
      fill="currentColor"
    />
  </svg>
)
export const IconLayerMask: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgLayerMask)
export default IconLayerMask
