import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgLikeOff = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
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
      d="M11 7.5a5 5 0 00-5 5c0 4.834 3.114 9.15 9.756 12.865a.5.5 0 00.488 0C22.886 21.65 26 17.335 26 12.5a5 5 0 00-5-5c-1.455 0-3.06.935-4.198 2.465L16 11.043l-.802-1.078C14.06 8.435 12.455 7.5 11 7.5z"
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 7.5a5 5 0 00-5 5c0 4.834 3.114 9.15 9.756 12.865a.5.5 0 00.488 0C22.886 21.65 26 17.335 26 12.5a5 5 0 00-5-5c-1.455 0-3.06.935-4.198 2.465L16 11.043l-.802-1.078C14.06 8.435 12.455 7.5 11 7.5zm-7 5a7 7 0 017-7c1.869 0 3.652.95 5 2.33 1.348-1.38 3.131-2.33 5-2.33a7 7 0 017 7c0 5.874-3.84 10.729-10.78 14.61a2.5 2.5 0 01-2.44 0C7.84 23.23 4 18.374 4 12.5z"
      fill="currentColor"
    />
  </svg>
)
export const IconLikeOff32: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgLikeOff)
export default IconLikeOff32
