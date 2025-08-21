import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgPencilDraw = (
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
      d="M4.44 14.29l-.766 3.833a1 1 0 001.177 1.176l3.832-.766 7.248-7.248-4.242-4.242L4.44 14.29zM13.103 5.628l4.242 4.243 1.415-1.414a2 2 0 000-2.829l-1.415-1.414a2 2 0 00-2.828 0l-1.414 1.414zM11 18a1 1 0 000 2h10a1 1 0 100-2H11z"
      fill="currentColor"
    />
  </svg>
)
export const IconPencilDraw24 = forwardRef(SvgPencilDraw)
export default IconPencilDraw24
