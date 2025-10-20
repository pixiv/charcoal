import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgLayersetting = (
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
      d="M13.454 2.67a2.714 2.714 0 00-2.907 0L2.802 7.581a1.727 1.727 0 000 2.917l7.745 4.911c.406.258.863.397 1.325.42a6.503 6.503 0 017.513-4.181l1.813-1.15a1.727 1.727 0 000-2.917L13.454 2.67zM9.886 16.451c.52.33 1.096.526 1.684.59-.046.313-.07.633-.07.96 0 1.364.42 2.63 1.139 3.676-.704.17-1.46.055-2.092-.346L2.802 16.42a1.727 1.727 0 010-2.917l1.217-.772 5.867 3.72zM18 23.001a5 5 0 100-10 5 5 0 000 10zm-.904-7.084a.403.403 0 10.404.404.404.404 0 00-.404-.404zm0-1c.6 0 1.11.375 1.312.903h2.378a.5.5 0 010 1h-2.378a1.404 1.404 0 01-2.623 0h-.57a.5.5 0 110-1h.57a1.404 1.404 0 011.311-.903zm1.808 4.36a.403.403 0 100 .807.403.403 0 000-.807zm-3.69-.096h2.378a1.404 1.404 0 012.623 0h.57a.5.5 0 110 1h-.57a1.404 1.404 0 01-2.623 0h-2.378a.5.5 0 110-1z"
      fill="currentColor"
    />
  </svg>
)
export const IconLayerSettingSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgLayersetting)
export default IconLayerSettingSolid
