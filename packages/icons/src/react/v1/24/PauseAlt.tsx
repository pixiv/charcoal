import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgPauseAlt = (
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
      d="M6 7a1 1 0 011-1h3a1 1 0 011 1v10a1 1 0 01-1 1H7a1 1 0 01-1-1V7zM13 7a1 1 0 011-1h3a1 1 0 011 1v10a1 1 0 01-1 1h-3a1 1 0 01-1-1V7z"
      fill="currentColor"
    />
  </svg>
)
export const IconPauseAlt24: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgPauseAlt)
export default IconPauseAlt24
