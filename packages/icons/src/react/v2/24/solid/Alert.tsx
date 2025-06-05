import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgAlert = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M19.746 10.755a7.75 7.75 0 10-15.5 0v4.79c.17-.03.343-.045.52-.045h14.48c.17 0 .338.014.5.041v-4.786zm-.5 6.245c.966 0 1.75.784 1.75 1.75v.5a1.75 1.75 0 01-1.75 1.75H4.766a1.75 1.75 0 01-1.75-1.75v-.5c0-.966.784-1.75 1.75-1.75h14.48zM11.175 6.25a.75.75 0 010 1.5 2.595 2.595 0 00-2.595 2.594.75.75 0 01-1.5 0 4.095 4.095 0 014.095-4.095z" fill="currentColor"/>
  </svg>);
export const IconAlertSolid = forwardRef(SvgAlert);
export default IconAlertSolid;
