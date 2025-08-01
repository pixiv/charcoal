import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSoftEdge = (
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
      d="M10.155 2.5a.75.75 0 100 1.5h.046l.046-.001.046.001h.046c.428 0 .85.028 1.262.082a.75.75 0 00.194-1.488 11.257 11.257 0 00-1.456-.094h-.046l-.046.001a.756.756 0 00-.046-.001h-.046zm4.455.847a.75.75 0 00-.575 1.385 9.647 9.647 0 012.182 1.263.75.75 0 00.914-1.19 11.145 11.145 0 00-2.521-1.458zm4.58 3.517a.75.75 0 00-1.19.914c.512.665.938 1.398 1.263 2.183a.75.75 0 001.386-.575 11.146 11.146 0 00-1.459-2.522zm2.211 5.337a.75.75 0 10-1.487.194c.054.413.082.834.082 1.262a.75.75 0 101.5 0c0-.493-.032-.98-.095-1.456zM3.016 7.299a.75.75 0 01.75-.75h6.673a6.75 6.75 0 016.75 6.75v6.947a.75.75 0 01-.75.75H3.766a.75.75 0 01-.75-.75V7.3z"
      fill="currentColor"
    />
  </svg>
)
export const IconSoftEdgeSolid = forwardRef(SvgSoftEdge)
export default IconSoftEdgeSolid
