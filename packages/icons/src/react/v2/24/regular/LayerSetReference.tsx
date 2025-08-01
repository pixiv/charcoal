import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgLayersetReference = (
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
      d="M11.344 3.928c.4-.254.911-.254 1.311 0L20.4 8.84a.237.237 0 010 .4l-7.745 4.911a1.224 1.224 0 01-.905.165V9A2.75 2.75 0 009 6.25H7.683l3.661-2.322zM10.25 9v4.456L3.6 9.24a.237.237 0 010-.4l1.718-1.09H9c.69 0 1.25.56 1.25 1.25zm3.209-6.339a2.724 2.724 0 00-2.918 0L2.797 7.572a1.737 1.737 0 000 2.934l7.744 4.911c.89.565 2.027.565 2.918 0l7.744-4.91a1.737 1.737 0 000-2.935l-7.744-4.91zM2.796 13.494l1.213-.77 1.4.889L3.6 14.76a.237.237 0 000 .4l7.744 4.91c.4.255.911.255 1.311 0l7.745-4.91a.237.237 0 000-.4l-1.81-1.148 1.4-.888 1.213.769a1.737 1.737 0 010 2.933l-7.744 4.912a2.724 2.724 0 01-2.918 0l-7.744-4.912a1.737 1.737 0 010-2.933zM16.16 7.882a1.533 1.533 0 00-.848-.244c-.272 0-.58.068-.848.247-.273.183-.51.5-.51.913.001.413.24.728.514.91.267.179.576.245.848.245.271 0 .58-.068.847-.248.273-.183.51-.5.51-.912 0-.413-.24-.728-.513-.91z"
      fill="currentColor"
    />
  </svg>
)
export const IconLayerSetReference = forwardRef(SvgLayersetReference)
export default IconLayerSetReference
