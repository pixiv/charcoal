import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgSubtract = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path d="M18 10a2 2 0 110 4H6a2 2 0 110-4h12z" fill="currentColor"/>
  </svg>);
export const IconSubtract24 = forwardRef(SvgSubtract);
export default IconSubtract24;
