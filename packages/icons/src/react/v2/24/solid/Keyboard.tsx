import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgKeyboard = (
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
      d="M5.75 4A3.75 3.75 0 002 7.75v8.5A3.75 3.75 0 005.75 20h12.5A3.75 3.75 0 0022 16.25v-8.5A3.75 3.75 0 0018.25 4H5.75zm9.553 12.57H8.697a.75.75 0 110-1.5h6.604a.75.75 0 010 1.5zM6.6 8.624a1 1 0 100 2 1 1 0 100-2zm2.7 0a1 1 0 100 2 1 1 0 100-2zm2.7 0a1 1 0 100 2 1 1 0 100-2zm2.7 0a1 1 0 100 2 1 1 0 000-2zm2.7 0a1 1 0 100 2 1 1 0 100-2zm-8.1 2.589a1 1 0 100 2 1 1 0 000-2zm-2.7 0a1 1 0 000 2 1 1 0 100-2zm5.4 0a1 1 0 000 2 1 1 0 100-2zm2.7 0a1 1 0 000 2 1 1 0 000-2zm2.7 0a1 1 0 000 2 1 1 0 100-2z"
      fill="currentColor"
    />
  </svg>
)
export const IconKeyboardSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgKeyboard)
export default IconKeyboardSolid
