import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgPendraw = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M15.653 3.416a3.25 3.25 0 014.595 4.595L8.01 20.251H21a.75.75 0 010 1.5H3.75a.745.745 0 01-.344-.088 1.751 1.751 0 01-1.397-1.993l.303-1.903a3.751 3.751 0 011.052-2.063L15.653 3.416zm3.535 1.06a1.75 1.75 0 00-2.475 0L4.424 16.764c-.335.336-.556.77-.63 1.239l-.303 1.902a.25.25 0 00.288.285l1.89-.314a2.25 2.25 0 001.222-.628L19.188 6.95a1.75 1.75 0 000-2.475z" fill="#1F1F1F"/>
  </svg>);
export const IconPenDraw: ReturnType<typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>> = forwardRef(SvgPendraw);
export default IconPenDraw;
