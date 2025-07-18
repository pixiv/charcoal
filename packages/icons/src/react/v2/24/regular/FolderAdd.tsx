import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgFolderadd = (
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
      d="M5.765 18.5a2.25 2.25 0 01-2.25-2.25V7.751a2.25 2.25 0 012.25-2.25h3.313c.35 0 .684.147.92.404l.874.95a2.75 2.75 0 002.024.889h5.339a2.25 2.25 0 012.25 2.25v5.756H21.7c.097 0 .192.006.285.018V9.994a3.75 3.75 0 00-3.75-3.75h-5.339a1.25 1.25 0 01-.92-.404l-.873-.95a2.75 2.75 0 00-2.025-.889H5.765a3.75 3.75 0 00-3.75 3.75v8.5A3.75 3.75 0 005.765 20h7.503a2.254 2.254 0 01-1.162-1.5H5.765zM18 22.45a.75.75 0 01-.75-.75v-2.95H14.3a.75.75 0 110-1.5h2.95V14.3a.75.75 0 011.5 0v2.95h2.95a.75.75 0 110 1.5h-2.95v2.95a.75.75 0 01-.75.75z"
      fill="currentColor"
    />
  </svg>
)
export const IconFolderAdd = forwardRef(SvgFolderadd)
export default IconFolderAdd
