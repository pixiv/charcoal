import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgTransform = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M18.5 4.5a1 1 0 112 0 1 1 0 01-2 0zm-1.366.81c.256.749.859 1.338 1.616 1.576v10.229a2.506 2.506 0 00-1.616 1.575L7.25 17.278v-.028a2.5 2.5 0 00-2-2.45V9.2a2.5 2.5 0 002-2.45v-.028l9.884-1.412zM3.75 14.958V9.042a2.5 2.5 0 113.025-3.758.755.755 0 01.119-.026L17.099 3.8a2.501 2.501 0 113.151 3.086v10.229A2.501 2.501 0 1117.1 20.2L6.893 18.743a.764.764 0 01-.119-.027 2.5 2.5 0 11-3.025-3.758zm0-8.208a1 1 0 112 0 1 1 0 01-2 0zM19.5 18.5a1 1 0 100 2 1 1 0 000-2zM3.75 17.25a1 1 0 112 0 1 1 0 01-2 0z" fill="currentColor"/>
  </svg>);
export const IconTransform = forwardRef(SvgTransform);
export default IconTransform;
