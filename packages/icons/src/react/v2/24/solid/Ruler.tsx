import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgRuler = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M3.016 6.75A3.75 3.75 0 016.766 3h12.48c.966 0 1.75.784 1.75 1.75v4.339a.75.75 0 01-.75.75h-1.992V7.694a.75.75 0 10-1.5 0v1.395H14.43V7.694a.75.75 0 10-1.5 0v1.395h-2.325V7.694a.75.75 0 00-1.5 0v1.395H7.71a.75.75 0 000 1.5h1.396v2.323H7.71a.75.75 0 100 1.5h1.396v2.324H7.71a.75.75 0 000 1.5h2.146v2.01a.75.75 0 01-.75.75h-4.34a1.75 1.75 0 01-1.75-1.75V6.75z"
      fill="currentColor"
    />
  </svg>
)
export const IconRulerSolid = forwardRef(SvgRuler)
export default IconRulerSolid
