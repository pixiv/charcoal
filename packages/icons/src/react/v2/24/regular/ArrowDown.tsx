import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgArrowdown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12.75 4a.75.75 0 00-1.5 0v13.19l-5.72-5.72a.75.75 0 00-1.06 1.06l7 7a.746.746 0 00.53.22c.203 0 .387-.08.522-.212l.01-.009 6.998-6.999a.75.75 0 10-1.06-1.06l-5.72 5.72V4z" fill="currentColor"/>
  </svg>);
export const IconArrowDown = forwardRef(SvgArrowdown);
export default IconArrowDown;
