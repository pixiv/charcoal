import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgRabbitearBent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.52 1.5c-1.058 0-1.858.605-2.367 1.409-.5.79-.761 1.818-.803 2.879-.07 1.758.455 3.816 1.788 5.338-1.87 1.198-3.153 3.102-3.153 5.429 0 2.167.928 3.792 2.57 4.776 1.502.9 3.447 1.169 5.404 1.169 1.957 0 3.903-.27 5.405-1.17 1.642-.983 2.57-2.608 2.57-4.775 0-.373-.035-.738-.102-1.092a2.726 2.726 0 01-1.192.02c-.698-.14-1.333-.529-1.9-1.056-.78-.726-1.556-1.831-2.324-3.359l.474-.474c.516 1.065 1.17 2.14 1.875 2.954.469.541 1.014 1.03 1.613 1.286.642.276 1.38.287 2.034-.204.863-.647 1.004-1.634.827-2.52-.174-.868-.663-1.772-1.269-2.568a9.848 9.848 0 00-2.202-2.117c-.797-.547-1.722-.969-2.62-.969-1.285 0-1.975.969-2.325 1.776-.218.5-.357 1.05-.451 1.517a9.516 9.516 0 00-1.105.018 16.865 16.865 0 01-.144-1.7 70.53 70.53 0 01-.036-1.081c-.016-.58-.032-1.167-.067-1.693-.058-.867-.173-1.76-.494-2.452-.167-.358-.406-.702-.757-.956A2.092 2.092 0 008.521 1.5zm.718 15.151a1 1 0 11-2 0 1 1 0 012 0zm7.442 0a1 1 0 11-2 0 1 1 0 012 0z"
      fill="currentColor"
    />
  </svg>
)
export const IconRabbitEarBentSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgRabbitearBent)
export default IconRabbitEarBentSolid
