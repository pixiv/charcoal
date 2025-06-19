import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgGroup = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M6.45 4A4.45 4.45 0 002 8.45v7.1A4.45 4.45 0 006.45 20h11.1A4.45 4.45 0 0022 15.55v-7.1A4.45 4.45 0 0017.55 4H6.45zm2.588 3.729a1.778 1.778 0 100 3.556 1.778 1.778 0 000-3.556zm-.41 4.952A2.629 2.629 0 006 15.309c0 .743.602 1.344 1.344 1.344h3.387c.742 0 1.344-.601 1.344-1.344a2.629 2.629 0 00-2.628-2.628h-.818zm4.89 3.972h3.213c.742 0 1.344-.601 1.344-1.344a2.628 2.628 0 00-2.628-2.628h-.818c-.518 0-1 .15-1.408.408.384.65.604 1.41.604 2.22 0 .482-.11.938-.306 1.344zm-.259-7.146a1.778 1.778 0 113.557 0 1.778 1.778 0 01-3.557 0z" fill="currentColor"/>
  </svg>);
export const IconGroupSolid = forwardRef(SvgGroup);
export default IconGroupSolid;
