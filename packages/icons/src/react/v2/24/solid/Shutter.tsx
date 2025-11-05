import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgShutter = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
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
      d="M11.892 2l1.684 6.283-2.352-.63L4.291 5.63A9.98 9.98 0 0111.892 2zm1.582.108l1.887 7.042.65 2.426 4.782-4.343a10.009 10.009 0 00-7.319-5.125zm7.96 6.569l-5.311 4.825-1.74 1.739 6.237 1.83A9.954 9.954 0 0022 12c0-1.165-.2-2.284-.566-3.323zm-1.723 9.691l-6.955-2.041-2.35-.63L12.093 22a9.98 9.98 0 007.617-3.632zm-9.2 3.522L8.62 14.83l-.624-2.33-4.53 4.715a10.005 10.005 0 007.046 4.675zm-7.764-6.092l5.088-5.296.005-.006.006-.005 1.75-1.75L3.38 6.927A9.954 9.954 0 002 12a9.97 9.97 0 00.747 3.798zm8.5-6.586l2.777.744.744 2.778-2.033 2.034-2.778-.744-.745-2.778 2.034-2.034z"
      fill="currentColor"
    />
  </svg>
)
export const IconShutterSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgShutter)
export default IconShutterSolid
