import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgBringforward = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M13.453 2.67a2.714 2.714 0 00-2.906 0L2.801 7.58a1.727 1.727 0 000 2.918l3.468 2.2a2.24 2.24 0 01.64-1.289l3.5-3.5a2.25 2.25 0 013.181 0l3.5 3.5c.362.362.575.817.639 1.288l3.468-2.199a1.727 1.727 0 000-2.917L13.453 2.67zM9.75 14.904l-.025-.016.025-.017v.033zm0 3.346v-1.558l-.012-.008-5.976-3.79-.96.608a1.727 1.727 0 000 2.917l7.745 4.912c.887.562 2.02.562 2.906 0l7.745-4.912a1.727 1.727 0 000-2.917l-.96-.608-5.976 3.79-.012.007v1.559a2.25 2.25 0 01-4.5 0zm4.5-3.379v.033l.025-.016-.025-.017zm1.78-1.34a.75.75 0 01-1.06 0l-2.22-2.22v6.939a.75.75 0 01-1.5 0v-6.94l-2.22 2.22a.75.75 0 01-1.06-1.06l3.5-3.5a.75.75 0 011.06 0l3.5 3.5a.75.75 0 010 1.06z" fill="currentColor"/>
  </svg>);
export const IconBringForwardSolid = forwardRef(SvgBringforward);
export default IconBringForwardSolid;
