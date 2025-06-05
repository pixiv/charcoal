import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgZoomOut = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M11 4.25a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.75 11a8.25 8.25 0 1114.59 5.28l3.69 3.69a.75.75 0 11-1.06 1.06l-3.69-3.69A8.25 8.25 0 012.75 11zM8 10.25a.75.75 0 000 1.5h6a.75.75 0 000-1.5H8z" fill="currentColor"/>
  </svg>);
export const IconZoomOut = forwardRef(SvgZoomOut);
export default IconZoomOut;
