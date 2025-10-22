import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSquares2X2 = (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 5.75A2.75 2.75 0 015.75 3H8.5a2.75 2.75 0 012.75 2.75V8.5a2.75 2.75 0 01-2.75 2.75H5.75A2.75 2.75 0 013 8.5V5.75zm0 9.75a2.75 2.75 0 012.75-2.75H8.5a2.75 2.75 0 012.75 2.75v2.75A2.75 2.75 0 018.5 21H5.75A2.75 2.75 0 013 18.25V15.5zM15.5 3a2.75 2.75 0 00-2.75 2.75V8.5a2.75 2.75 0 002.75 2.75h2.75A2.75 2.75 0 0021 8.5V5.75A2.75 2.75 0 0018.25 3H15.5zm-2.75 12.5a2.75 2.75 0 012.75-2.75h2.75A2.75 2.75 0 0121 15.5v2.75A2.75 2.75 0 0118.25 21H15.5a2.75 2.75 0 01-2.75-2.75V15.5z"
      fill="currentColor"
    />
  </svg>
)
export const IconSquares2X2Solid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgSquares2X2)
export default IconSquares2X2Solid
