import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgPose = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path d="M8.928 6.223a3.25 3.25 0 116.144-2.12 3.25 3.25 0 01-6.144 2.12z" fill="#1F1F1F"/>
    <path d="M5.558 4.499a.75.75 0 00-1.116 1.003l4.56 5.07v3.678h-1.98a.75.75 0 00-.69 1.045l1.812 4.237a.75.75 0 101.38-.59L8.158 15.75h5.266v5.483a.75.75 0 001.5 0V10.454l4.623-4.942a.75.75 0 10-1.096-1.024l-4.608 4.925H9.979L5.558 4.5z" fill="#1F1F1F"/>
  </svg>);
export const IconPoseSolid: ReturnType<typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>> = forwardRef(SvgPose);
export default IconPoseSolid;
