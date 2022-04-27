import React from 'react'
import { spacing } from '.'

export const Spacing: React.FC = () => {
  return (
    <div className="space-y-40">
      {Object.keys(spacing).map((space) => (
        <div key={space}>
          <p className="typography-14 text-text2">p-{space}</p>
          <div className={`bg-surface3 p-${space} w-[min-content]`}>
            <div className="bg-brand h-40" style={{ width: '40px' }}></div>
          </div>
        </div>
      ))}
    </div>
  )
}
