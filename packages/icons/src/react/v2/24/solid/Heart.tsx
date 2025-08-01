import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgHeart = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 5.473C10.813 4.225 9.26 3.655 7.723 3.79c-1.677.15-3.248 1.132-4.247 2.81-1.61 2.71-1.199 6.407 1.02 8.555l5.128 4.966.007.007.373.352a2.916 2.916 0 003.992 0l.366-.346.007-.006 5.135-4.973-.49-.506.49.506c2.218-2.148 2.63-5.845 1.02-8.554-.999-1.68-2.57-2.661-4.247-2.81-1.537-.137-3.09.433-4.277 1.68z"
      fill="currentColor"
    />
  </svg>
)
export const IconHeartSolid = forwardRef(SvgHeart)
export default IconHeartSolid
