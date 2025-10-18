import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSynccircle = (
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
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-6.887-6.148a.741.741 0 01.79-.236.754.754 0 01.525.643l.28 2.702a.758.758 0 01-.17.562.743.743 0 01-.52.267l-2.682.19a.747.747 0 01-.718-.41.759.759 0 01.092-.826l.613-.738a4.152 4.152 0 00-1.34-.22c-1.758 0-3.27 1.092-3.895 2.653a.75.75 0 11-1.392-.558c.843-2.104 2.889-3.596 5.286-3.596.838 0 1.633.182 2.348.51l.783-.943zm-6.26 12.296a.741.741 0 01-.791.236.754.754 0 01-.524-.643l-.28-2.702a.757.757 0 01.17-.562.743.743 0 01.519-.267l2.682-.19a.746.746 0 01.719.41.76.76 0 01-.093.826l-.613.738c.422.143.873.22 1.341.22 1.757 0 3.269-1.092 3.894-2.653a.75.75 0 111.393.558c-.843 2.104-2.89 3.596-5.287 3.596a5.638 5.638 0 01-2.348-.51l-.783.943z"
      fill="currentColor"
    />
  </svg>
)
export const IconSyncCircleSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgSynccircle)
export default IconSyncCircleSolid
