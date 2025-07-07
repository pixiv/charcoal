import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgLayeradd = (
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
      d="M11.345 3.928c.4-.254.91-.254 1.31 0L20.4 8.839a.237.237 0 010 .4l-3.804 2.413a6.522 6.522 0 012.803-.001l1.804-1.145a1.737 1.737 0 000-2.934l-7.744-4.91a2.724 2.724 0 00-2.917 0l-7.745 4.91a1.737 1.737 0 000 2.934l7.745 4.911a2.72 2.72 0 001.326.42c.233-.66.57-1.272.991-1.816l-.203.13c-.4.253-.91.253-1.311 0L3.601 9.238a.237.237 0 010-.4l7.744-4.911zm1.3 17.757a6.483 6.483 0 01-.742-1.427 1.224 1.224 0 01-.558-.186L3.601 15.16a.237.237 0 010-.4l1.81-1.148-1.4-.888-1.214.769a1.737 1.737 0 000 2.933l7.745 4.911a2.724 2.724 0 002.103.347zM18 23a5 5 0 100-10 5 5 0 000 10zm.5-2.25V18.5h2.25a.5.5 0 100-1H18.5v-2.25a.5.5 0 00-1 0v2.25h-2.25a.5.5 0 100 1h2.25v2.25a.5.5 0 101 0z"
      fill="currentColor"
    />
  </svg>
)
export const IconLayerAdd = forwardRef(SvgLayeradd)
export default IconLayerAdd
