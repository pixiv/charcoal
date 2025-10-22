import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgHorizontalWriting = (
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
      d="M6.667 6.667a1.333 1.333 0 100 2.666h18.666a1.333 1.333 0 000-2.666H6.667zM6.667 12a1.333 1.333 0 100 2.667h10.666a1.333 1.333 0 000-2.667H6.667zM5.333 18.667c0-.737.597-1.334 1.334-1.334h18.666a1.333 1.333 0 010 2.667H6.667a1.333 1.333 0 01-1.334-1.333zM6.667 22.667a1.333 1.333 0 000 2.666h10.666a1.333 1.333 0 000-2.666H6.667z"
      fill="currentColor"
    />
  </svg>
)
export const IconHorizontalWriting32: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgHorizontalWriting)
export default IconHorizontalWriting32
