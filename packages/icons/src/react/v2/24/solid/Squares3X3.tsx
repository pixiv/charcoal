import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSquares3X3 = (
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
      d="M4.754 3.003a1.75 1.75 0 00-1.75 1.75V6.25c0 .966.784 1.75 1.75 1.75h1.5a1.75 1.75 0 001.75-1.75V4.753a1.75 1.75 0 00-1.75-1.75h-1.5zm6.496 0a1.75 1.75 0 00-1.75 1.75V6.25c0 .966.784 1.75 1.75 1.75h1.5a1.75 1.75 0 001.75-1.75V4.753a1.75 1.75 0 00-1.75-1.75h-1.5zm4.746 1.75c0-.967.783-1.75 1.75-1.75h1.5c.966 0 1.75.783 1.75 1.75V6.25A1.75 1.75 0 0119.246 8h-1.5a1.75 1.75 0 01-1.75-1.75V4.753zM4.754 9.5a1.75 1.75 0 00-1.75 1.75v1.497c0 .967.784 1.75 1.75 1.75h1.5a1.75 1.75 0 001.75-1.75v-1.496a1.75 1.75 0 00-1.75-1.75h-1.5zm4.746 1.75c0-.966.784-1.75 1.75-1.75h1.5c.967 0 1.75.784 1.75 1.75v1.497a1.75 1.75 0 01-1.75 1.75h-1.5a1.75 1.75 0 01-1.75-1.75v-1.496zm8.246-1.75a1.75 1.75 0 00-1.75 1.75v1.497c0 .967.783 1.75 1.75 1.75h1.5a1.75 1.75 0 001.75-1.75v-1.496a1.75 1.75 0 00-1.75-1.75h-1.5zM3.004 17.75c0-.967.784-1.75 1.75-1.75h1.5c.967 0 1.75.783 1.75 1.75v1.496a1.75 1.75 0 01-1.75 1.75h-1.5a1.75 1.75 0 01-1.75-1.75V17.75zM11.25 16a1.75 1.75 0 00-1.75 1.75v1.496c0 .967.784 1.75 1.75 1.75h1.5a1.75 1.75 0 001.75-1.75V17.75A1.75 1.75 0 0012.75 16h-1.5zm4.746 1.75c0-.967.783-1.75 1.75-1.75h1.5c.966 0 1.75.783 1.75 1.75v1.496a1.75 1.75 0 01-1.75 1.75h-1.5a1.75 1.75 0 01-1.75-1.75V17.75z"
      fill="currentColor"
    />
  </svg>
)
export const IconSquares3X3Solid = forwardRef(SvgSquares3X3)
export default IconSquares3X3Solid
