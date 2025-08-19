import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgDot = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path d="M5 14a2 2 0 100-4 2 2 0 000 4zM12 14a2 2 0 100-4 2 2 0 000 4zM21 12a2 2 0 11-4 0 2 2 0 014 0z" fill="currentColor"/>
  </svg>);
export const IconDot24 = forwardRef(SvgDot);
export default IconDot24;
