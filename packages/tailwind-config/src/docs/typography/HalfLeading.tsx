import * as React from 'react'
import { sizeClasses } from '.'

export const HalfLeading: React.FC = () => (
  <div className="p-40 bg-brand-disabled">
    <div className="flex items-center space-x-16">
      <p className="typography-14 text-text1 w-6/12 text-right">
        without half leading (default)
      </p>
      <p className="typography-14 text-text1 w-6/12">preserve-half-leading</p>
    </div>
    {Object.entries(sizeClasses).map(([sizeClassName]) => (
      <div
        key={sizeClassName}
        className="flex items-center justify-center space-x-16"
      >
        <p className={`${sizeClassName} bg-background1 text-text1`}>
          Abcあいう123
        </p>
        <p
          className={`${sizeClassName} bg-background1 text-text1 preserve-half-leading`}
        >
          Abcあいう123
        </p>
      </div>
    ))}
  </div>
)
