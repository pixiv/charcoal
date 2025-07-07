import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgTexture = (
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
      d="M6.75 3A3.75 3.75 0 003 6.75v10.5A3.75 3.75 0 006.75 21h10.5A3.75 3.75 0 0021 17.25V6.75A3.75 3.75 0 0017.25 3H6.75zM4.5 6.75A2.25 2.25 0 016.75 4.5h5.964v2.733l-2.232-.004H4.5V6.75zm0 1.98v2.538a.79.79 0 01.04-.001h2.405l2.792.005-.005-2.543H4.5zm0 4.036v2.514h1.694v-2.513H4.541a.79.79 0 01-.041-.001zm0 4.014v.47a2.25 2.25 0 002.25 2.25h3.019v-2.72H4.5zm6.769 2.72h5.981a2.25 2.25 0 002.25-2.25v-.465h-6.036l-2.195-.004V19.5zm8.231-4.215v-2.507a.75.75 0 01-.114.009H17.007l-2.798-.006.005 2.504H19.5zm0-3.99v-2.56h-1.741v2.551h1.627c.039 0 .077.004.114.01zm0-4.06V6.75a2.25 2.25 0 00-2.25-2.25h-3.036v2.735H19.5zm-8.264 4.04l-.004-2.545 2.23.005H16.26v2.55l-2.8-.005-2.223-.005zm-3.542 1.493l2.795.006 2.22.004.005 2.506-2.194-.004H7.694v-2.512z"
      fill="currentColor"
    />
  </svg>
)
export const IconTexture = forwardRef(SvgTexture)
export default IconTexture
