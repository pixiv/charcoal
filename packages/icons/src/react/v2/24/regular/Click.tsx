import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgClick = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M11.193 1.688a.75.75 0 01.75.75v2.158a.75.75 0 01-1.5 0V2.437a.75.75 0 01.75-.75zM4.53 3.47a.75.75 0 00-1.06 1.06l1.526 1.527a.75.75 0 001.06-1.06L4.53 3.47zM2.25 10.63a.75.75 0 000 1.5h2.159a.75.75 0 100-1.5H2.25zM8.2 8.618a.417.417 0 01.501-.502l10.601 2.502a.417.417 0 01.138.751l-2.933 1.983a.75.75 0 00-.11 1.152l3.296 3.295c.13.13.13.34 0 .47l-1.34 1.34c-.13.13-.34.13-.47 0l-3.296-3.295a.75.75 0 00-1.151.11l-1.983 2.933a.417.417 0 01-.752-.138l-2.502-10.6zm.846-1.962A1.917 1.917 0 006.74 8.963l2.501 10.6c.384 1.626 2.518 2.018 3.454.634l1.474-2.18 2.653 2.653a1.833 1.833 0 002.591 0l1.34-1.34a1.833 1.833 0 000-2.591l-2.652-2.653 2.18-1.474c1.383-.936.991-3.07-.634-3.454L9.046 6.656z"
      fill="currentColor"
    />
  </svg>
)
export const IconClick: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgClick)
export default IconClick
