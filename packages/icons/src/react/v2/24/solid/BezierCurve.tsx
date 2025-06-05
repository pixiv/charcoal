import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgBezierCurve = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 4.5c-1.12 0-2.067.736-2.386 1.75h-5.37a1.498 1.498 0 00-2.744.838 1.5 1.5 0 002.847.662H7.33a8.848 8.848 0 00-4.173 7.145 2.501 2.501 0 101.504-.056 7.351 7.351 0 015.17-6.594 2.499 2.499 0 004.337 0 7.352 7.352 0 015.17 6.593 2.501 2.501 0 101.506.058A8.851 8.851 0 0016.67 7.75h2.98a1.5 1.5 0 10.102-1.5h-5.367A2.501 2.501 0 0012 4.5z" fill="currentColor"/>
  </svg>);
export const IconBezierCurveSolid = forwardRef(SvgBezierCurve);
export default IconBezierCurveSolid;
