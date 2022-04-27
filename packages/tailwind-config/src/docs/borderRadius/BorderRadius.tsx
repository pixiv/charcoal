import React from 'react'
import { borderRadius } from '.'

export const BorderRadius: React.FC = () => {
  return (
    <div className="space-y-40">
      {Object.entries(borderRadius).map(([key, value]) => (
        <div key={key}>
          <p className="typography-14 text-text2">rounded-{key}</p>
          <div className="space-x-16 flex">
            <div
              className={`bg-surface4 rounded-${key} h-64`}
              style={{ width: '64px' }}
            ></div>
            <div
              className={`bg-surface4 rounded-${key} h-64`}
              style={{ width: '272px' }}
            ></div>
          </div>
          <p className="typography-12 text-text3">
            border-radius: <span className="text-text2">{value}</span>
          </p>
        </div>
      ))}
    </div>
  )
}
