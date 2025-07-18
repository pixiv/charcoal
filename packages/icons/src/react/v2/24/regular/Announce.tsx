import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAnnounce = (
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
      d="M16.25 4.511a.25.25 0 00-.348-.23l-6.075 2.58v7.394l6.078 2.487a.25.25 0 00.345-.232V4.511zm-7.923 9.416v-6.73l-2.715.28a1.25 1.25 0 00-1.121 1.244v3.682c0 .64.484 1.177 1.121 1.243l2.715.28zm.56-8.296l6.429-2.73a1.75 1.75 0 012.434 1.61v2.814a3.751 3.751 0 010 7.35v1.835a1.75 1.75 0 01-2.413 1.62l-4.643-1.9.691 1.607a2.75 2.75 0 01-1.478 3.63l-.057.024a2.75 2.75 0 01-3.579-1.468L3.905 14.45a2.746 2.746 0 01-.914-2.048V8.72a2.75 2.75 0 012.467-2.735l3.43-.355zm8.863 7.491a2.251 2.251 0 000-4.244v4.244zM5.844 15.178l2.892.3 1.272 2.952a1.25 1.25 0 01-.672 1.65l-.058.024a1.25 1.25 0 01-1.626-.667l-1.808-4.26z"
      fill="currentColor"
    />
  </svg>
)
export const IconAnnounce = forwardRef(SvgAnnounce)
export default IconAnnounce
