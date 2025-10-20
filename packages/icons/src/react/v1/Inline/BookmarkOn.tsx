import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBookmarkOn = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={10}
    height={14}
    viewBox="0 0 10 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M8 1H2a2 2 0 00-2 2v10.5L5 11l5 2.5V3a2 2 0 00-2-2z"
      fill="currentColor"
    />
  </svg>
)
export const IconBookmarkOnInline: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgBookmarkOn)
export default IconBookmarkOnInline
