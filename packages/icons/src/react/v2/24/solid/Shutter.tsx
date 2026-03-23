import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgShutter = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path d="M11.892 2l1.684 6.283-2.352-.63L4.291 5.63A9.98 9.98 0 0111.892 2zM13.474 2.108l2.537 9.468 4.782-4.343a10.009 10.009 0 00-7.319-5.125zM21.434 8.677l-5.311 4.825-1.74 1.739 6.237 1.83A9.954 9.954 0 0022 12c0-1.165-.2-2.284-.566-3.323zM19.71 18.368l-6.954-2.041-2.35-.63L12.093 22a9.98 9.98 0 007.617-3.632zM10.512 21.89L7.996 12.5l-4.53 4.715a10.005 10.005 0 007.046 4.675zM2.747 15.798l5.093-5.302 1.756-1.755L3.38 6.927A9.954 9.954 0 002 12a9.97 9.97 0 00.747 3.798zM11.246 9.212l2.778.744.744 2.778-2.033 2.034-2.778-.744-.745-2.778 2.034-2.034z" fill="currentColor"/>
  </svg>);
export const IconShutterSolid: ReturnType<typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>> = forwardRef(SvgShutter);
export default IconShutterSolid;
