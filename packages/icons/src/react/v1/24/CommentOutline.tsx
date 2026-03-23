import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCommentOutline = (
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
      d="M4.648 17.192l-.451 3.611 4.252-.531a9 9 0 10-3.801-3.08zM12 19a6.97 6.97 0 01-3.223-.785L6.5 18.5l.236-1.886A7 7 0 1112 19z"
      fill="currentColor"
    />
  </svg>
)
export const IconCommentOutline24: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgCommentOutline)
export default IconCommentOutline24
