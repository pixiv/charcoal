import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgFlame = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12.704 3.487a.75.75 0 00-1.407 0L9.789 7.562a4.25 4.25 0 01-2.216 2.39l-2.977 1.363a.75.75 0 000 1.364l2.977 1.364A4.25 4.25 0 019.79 16.43l1.508 4.076a.75.75 0 001.407 0l1.508-4.076a4.25 4.25 0 012.215-2.388l2.977-1.364a.75.75 0 000-1.364l-2.977-1.364a4.25 4.25 0 01-2.215-2.389l-1.508-4.075zm-1.509 4.596L12 5.908l.805 2.175a5.75 5.75 0 002.998 3.232l1.488.682-1.489.682a5.75 5.75 0 00-2.997 3.232L12 18.086l-.805-2.175a5.75 5.75 0 00-2.997-3.232l-1.489-.682 1.489-.682a5.75 5.75 0 002.997-3.232zm-7.563-3.19a.75.75 0 00-.906 1.196l.951.721a.75.75 0 10.906-1.195l-.951-.721zM21.274 6.09a.75.75 0 10-.906-1.195l-.951.72a.75.75 0 10.906 1.196l.951-.721zM1.5 11.213a.75.75 0 000 1.5h.693a.75.75 0 000-1.5H1.5zm20.307 0a.75.75 0 000 1.5h.693a.75.75 0 000-1.5h-.693zM4.583 18.955a.75.75 0 10-.906-1.195l-.761.577a.75.75 0 00.906 1.195l.761-.577zm15.74-1.195a.75.75 0 10-.906 1.195l.76.577a.75.75 0 00.907-1.195l-.761-.577z"
      fill="currentColor"
    />
  </svg>
)
export const IconFlame = forwardRef(SvgFlame)
export default IconFlame
