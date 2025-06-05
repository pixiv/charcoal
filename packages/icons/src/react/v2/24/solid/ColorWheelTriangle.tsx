import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgColorWheeltriangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM8.625 18.712L19.5 12.433a.5.5 0 000-.866L8.625 5.288a.5.5 0 00-.75.433V18.28a.5.5 0 00.75.433z" fill="currentColor"/>
  </svg>);
export const IconColorWheelTriangleSolid = forwardRef(SvgColorWheeltriangle);
export default IconColorWheelTriangleSolid;
