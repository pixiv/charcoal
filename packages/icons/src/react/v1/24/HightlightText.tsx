import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgHightlightText = (
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
      d="M4 16a1 1 0 011 1v2h2a1 1 0 110 2H3v-4a1 1 0 011-1zM20 16a1 1 0 011 1v4h-4a1 1 0 110-2h2v-2a1 1 0 011-1z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 6a1 1 0 01.914.594l4 9 .036.096a1 1 0 01-1.817.807l-.047-.09L14.016 14H9.984l-1.069 2.406a1 1 0 01-1.828-.812l4-9 .07-.13A1 1 0 0112 6zm-1.128 6h2.256L12 9.462 10.872 12z"
      fill="currentColor"
    />
    <path
      d="M7 3a1 1 0 010 2H5v2a1 1 0 01-2 0V3h4zM21 7a1 1 0 11-2 0V5h-2a1 1 0 110-2h4v4z"
      fill="currentColor"
    />
  </svg>
)
export const IconHightlightText24: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgHightlightText)
export default IconHightlightText24
