import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgArrowDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path d="M9 9.586l2.293-2.293a1 1 0 111.414 1.414L8 13.414 3.293 8.707a1 1 0 011.414-1.414L7 9.586V3.5a1 1 0 012 0v6.086z" fill="currentColor"/>
  </svg>);
export const IconArrowDown16 = forwardRef(SvgArrowDown);
export default IconArrowDown16;
