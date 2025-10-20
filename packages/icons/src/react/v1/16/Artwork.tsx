import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgArtwork = (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 3a2 2 0 00-2 2v6a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2H4zm4 2H4v6h4V5z"
      fill="currentColor"
    />
  </svg>
)
export const IconArtwork16: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgArtwork)
export default IconArtwork16
