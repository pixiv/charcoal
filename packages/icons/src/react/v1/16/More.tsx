import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgMore = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path d="M6.043 4.957a1 1 0 011.414-1.414L11.914 8l-4.457 4.457a1 1 0 01-1.414-1.414L9.086 8 6.043 4.957z" fill="currentColor"/>
  </svg>);
export const IconMore16 = forwardRef(SvgMore);
export default IconMore16;
