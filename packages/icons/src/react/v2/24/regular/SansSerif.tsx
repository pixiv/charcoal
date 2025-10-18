import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSansSerif = (
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
      d="M8.25 4.688a.75.75 0 01.702.485l3.296 8.735 1.704 4.515a.75.75 0 11-1.404.53l-1.52-4.03H5.472l-1.52 4.03a.75.75 0 01-1.404-.53l1.704-4.515 3.296-8.735a.75.75 0 01.702-.486zm2.212 8.735L8.25 7.562l-2.212 5.86h4.424zm10.284-1.847a.75.75 0 01.75.75v6.355a.75.75 0 01-1.497.07 3.234 3.234 0 01-1.753.512H18a3.25 3.25 0 01-3.25-3.25v-1.187a3.25 3.25 0 013.25-3.25h.246c.658 0 1.27.195 1.782.531a.75.75 0 01.718-.531zm-.75 3.25a1.75 1.75 0 00-1.75-1.75H18a1.75 1.75 0 00-1.75 1.75v1.187c0 .967.783 1.75 1.75 1.75h.246a1.75 1.75 0 001.75-1.75v-1.187z"
      fill="currentColor"
    />
  </svg>
)
export const IconSansSerif: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgSansSerif)
export default IconSansSerif
