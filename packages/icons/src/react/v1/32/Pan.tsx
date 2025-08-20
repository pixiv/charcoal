import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgPan = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M16 5.586l3.707 3.707a1 1 0 01-1.414 1.414L17 9.414V15h5.586l-1.293-1.293a1 1 0 111.414-1.414L26.414 16l-3.707 3.707a1 1 0 01-1.414-1.414L22.586 17H17v5.586l1.293-1.293a1 1 0 011.414 1.414L16 26.414l-3.707-3.707a1 1 0 011.414-1.414L15 22.586V17H9.414l1.293 1.293a1 1 0 01-1.414 1.414L5.586 16l3.707-3.707a1 1 0 011.414 1.414L9.414 15H15V9.414l-1.293 1.293a1 1 0 01-1.414-1.414L16 5.586z"
      fill="currentColor"
    />
  </svg>
)
export const IconPan32 = forwardRef(SvgPan)
export default IconPan32
