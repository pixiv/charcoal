import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCommentOn = (
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
      d="M11.232 25.916l-4.839.691.61-4.276A10.95 10.95 0 015 16C5 9.925 9.925 5 16 5s11 4.925 11 11-4.925 11-11 11c-1.708 0-3.326-.39-4.768-1.084z"
      fill="currentColor"
    />
  </svg>
)
export const IconCommentOn32: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgCommentOn)
export default IconCommentOn32
