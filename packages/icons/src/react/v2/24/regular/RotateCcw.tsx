import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgRotateccw = (
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
      d="M11.004 1.285a.75.75 0 011.178.93l-.793 1.005 1.46-.392a6.75 6.75 0 018.267 4.773l.858 3.205a.75.75 0 01-1.449.388l-.858-3.204a5.25 5.25 0 00-6.43-3.713l-1.681.45 1.017.804a.75.75 0 11-.93 1.177L9.201 4.781a.75.75 0 01-.124-1.053l1.927-2.443zm4.441 9.419a3.75 3.75 0 00-4.593-2.652L5.057 9.605a3.75 3.75 0 00-2.652 4.593l1.553 5.795a3.75 3.75 0 004.593 2.652l5.795-1.553a3.75 3.75 0 002.652-4.593l-1.553-5.795zM11.24 9.5a2.25 2.25 0 012.756 1.591l1.553 5.795a2.25 2.25 0 01-1.591 2.756l-5.796 1.553a2.25 2.25 0 01-2.755-1.59L3.854 13.81a2.25 2.25 0 011.59-2.756L11.24 9.5z"
      fill="currentColor"
    />
  </svg>
)
export const IconRotateCcw: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgRotateccw)
export default IconRotateCcw
