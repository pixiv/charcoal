import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgViewfit = (
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
      d="M2.25 5A2.75 2.75 0 015 2.25h8A2.75 2.75 0 0115.75 5v7.568l-1.5-1.5V5c0-.69-.56-1.25-1.25-1.25H5c-.69 0-1.25.56-1.25 1.25v8c0 .69.56 1.25 1.25 1.25h6.068l1.5 1.5H5A2.75 2.75 0 012.25 13V5zm5 12.25V19A2.75 2.75 0 0010 21.75h9A2.75 2.75 0 0021.75 19v-9A2.75 2.75 0 0019 7.25h-1.75v1.5H19c.69 0 1.25.56 1.25 1.25v9c0 .69-.56 1.25-1.25 1.25h-9c-.69 0-1.25-.56-1.25-1.25v-1.75h-1.5zM9.534 5.7L6.28 5.648a.622.622 0 00-.632.632L5.7 9.534a.622.622 0 001.061.43l1.07-1.07 7.275 7.274-1.07 1.07a.622.622 0 00.43 1.06l3.253.054a.622.622 0 00.632-.631l-.053-3.254a.622.622 0 00-1.061-.43l-1.07 1.07-7.275-7.275 1.07-1.07a.622.622 0 00-.43-1.06z"
      fill="currentColor"
    />
  </svg>
)
export const IconViewFit = forwardRef(SvgViewfit)
export default IconViewFit
