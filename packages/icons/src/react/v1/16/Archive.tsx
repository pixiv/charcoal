import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgArchive = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M2 4a1 1 0 011-1h10a1 1 0 110 2H3a1 1 0 01-1-1z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 6a1 1 0 00-1 1v4a2 2 0 002 2h6a2 2 0 002-2V7a1 1 0 00-1-1H4zm2.5 1a.5.5 0 000 1h3a.5.5 0 000-1h-3z"
      fill="currentColor"
    />
  </svg>
)
export const IconArchive16: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgArchive)
export default IconArchive16
