import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgDotshorizontal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path d="M5.5 14a2 2 0 100-4 2 2 0 000 4zM12 14a2 2 0 100-4 2 2 0 000 4zM18.5 14a2 2 0 100-4 2 2 0 000 4z" fill="currentColor"/>
  </svg>);
export const IconDotsHorizontalSolid: ReturnType<typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>> = forwardRef(SvgDotshorizontal);
export default IconDotsHorizontalSolid;
