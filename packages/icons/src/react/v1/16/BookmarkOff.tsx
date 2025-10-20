import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBookmarkOff = (
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
      d="M8 11.5l5 2.5V4a2 2 0 00-2-2H5a2 2 0 00-2 2v10l5-2.5zm-4 .882l4-2 4 2V4a1 1 0 00-1-1H5a1 1 0 00-1 1v8.382z"
      fill="currentColor"
    />
  </svg>
)
export const IconBookmarkOff16: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgBookmarkOff)
export default IconBookmarkOff16
