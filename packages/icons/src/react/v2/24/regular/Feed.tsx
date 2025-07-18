import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgFeed = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M4.876 2.906a1.97 1.97 0 00-1.97 1.97v3.748a1.97 1.97 0 001.97 1.97h3.748a1.97 1.97 0 001.97-1.97V4.876a1.97 1.97 0 00-1.97-1.97H4.876zm-.282 1.97c0-.156.126-.282.282-.282h3.748c.156 0 .282.126.282.282v3.748a.281.281 0 01-.282.282H4.876a.281.281 0 01-.282-.282V4.876zm.282 8.624C3.84 13.5 3 14.34 3 15.376v3.749C3 20.16 3.84 21 4.876 21h3.748c1.036 0 1.876-.84 1.876-1.875v-3.75c0-1.035-.84-1.875-1.876-1.875H4.876zM4.5 15.376c0-.208.168-.376.376-.376h3.748c.208 0 .376.168.376.376v3.749a.376.376 0 01-.376.375H4.876a.376.376 0 01-.376-.375v-3.75zM12.25 5.25A.75.75 0 0113 4.5h7A.75.75 0 0120 6h-7a.75.75 0 01-.75-.75zM13 15a.75.75 0 000 1.5h7a.75.75 0 000-1.5h-7zm-.75-6.75A.75.75 0 0113 7.5h3.5a.75.75 0 010 1.5H13a.75.75 0 01-.75-.75zM13 18a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5H13z"
      fill="currentColor"
    />
  </svg>
)
export const IconFeed = forwardRef(SvgFeed)
export default IconFeed
