import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgLineSpacing = (
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
      d="M6.986 6.992A1 1 0 108.413 5.59l-2.2-2.24a1 1 0 00-1.427 0l-2.2 2.24a1 1 0 001.427 1.401l.237-.241v10.39l-.237-.24a1 1 0 00-1.427 1.4l1.664 1.695V20h.005l.53.54a1 1 0 001.428 0l.53-.54h.007v-.006L8.413 18.3a1 1 0 10-1.427-1.402l-.236.24V6.751l.236.24zM11.75 4.25a1.25 1.25 0 100 2.5h9.5a1.25 1.25 0 000-2.5h-9.5zm0 6.5a1.25 1.25 0 000 2.5h9.5a1.25 1.25 0 000-2.5h-9.5zM10.5 18.5c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 010 2.5h-9.5c-.69 0-1.25-.56-1.25-1.25z"
      fill="currentColor"
    />
  </svg>
)
export const IconLineSpacingSolid = forwardRef(SvgLineSpacing)
export default IconLineSpacingSolid
