import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgEmoji = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-3.75 9.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zm.358 2.4a.75.75 0 00-1.072 1.05A6.233 6.233 0 0012 16.825c1.748 0 3.33-.719 4.463-1.875a.75.75 0 00-1.071-1.05A4.733 4.733 0 0112 15.325 4.733 4.733 0 018.608 13.9zM17 10.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"
      fill="currentColor"
    />
  </svg>
)
export const IconEmojiSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgEmoji)
export default IconEmojiSolid
