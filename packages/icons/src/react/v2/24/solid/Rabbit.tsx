import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgRabbit = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M8.532 1.501c-1.059 0-1.859.605-2.368 1.409-.5.79-.761 1.818-.803 2.879-.07 1.762.458 3.827 1.798 5.35-1.858 1.199-3.133 3.098-3.133 5.417 0 2.166.927 3.792 2.57 4.775 1.502.9 3.447 1.17 5.404 1.17 1.957 0 3.902-.27 5.405-1.17 1.642-.983 2.57-2.608 2.57-4.775 0-2.32-1.276-4.218-3.134-5.417 1.34-1.523 1.868-3.588 1.798-5.35-.042-1.061-.302-2.09-.803-2.88-.51-.803-1.31-1.408-2.368-1.408-.465 0-.889.126-1.249.385-.35.254-.59.597-.756.956-.321.693-.437 1.585-.494 2.452a45.146 45.146 0 00-.068 1.693c-.01.37-.02.736-.035 1.08-.026.61-.068 1.184-.144 1.703a9.124 9.124 0 00-1.444 0 16.868 16.868 0 01-.144-1.703c-.015-.344-.025-.71-.035-1.08-.017-.58-.033-1.167-.068-1.693-.058-.867-.173-1.76-.494-2.452-.167-.359-.405-.702-.756-.956a2.092 2.092 0 00-1.25-.385zm.747 15.15a1 1 0 11-2 0 1 1 0 012 0zm7.442 0a1 1 0 11-2 0 1 1 0 012 0z"
      fill="currentColor"
    />
  </svg>
)
export const IconRabbitSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgRabbit)
export default IconRabbitSolid
