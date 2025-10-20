import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgX = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.175 5.592a1.25 1.25 0 00-1.767-1.767L10 8.233 5.592 3.825a1.25 1.25 0 00-1.768 1.767L8.232 10l-4.408 4.408a1.25 1.25 0 101.768 1.768L10 11.768l4.408 4.408a1.25 1.25 0 101.768-1.768L11.767 10l4.407-4.408z"
      fill="currentColor"
    />
  </svg>
)
export const IconXSolid20: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgX)
export default IconXSolid20
