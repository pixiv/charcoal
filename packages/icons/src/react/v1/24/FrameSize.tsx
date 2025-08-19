import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgFrameSize = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path d="M2 2v5a1 1 0 002 0V4h3a1 1 0 000-2H2zM22 2h-5a1 1 0 100 2h3v3a1 1 0 102 0V2zM22 22h-5a1 1 0 110-2h3v-3a1 1 0 112 0v5zM2 22h5a1 1 0 100-2H4v-3a1 1 0 10-2 0v5z" fill="currentColor"/>
  </svg>);
export const IconFrameSize24 = forwardRef(SvgFrameSize);
export default IconFrameSize24;
