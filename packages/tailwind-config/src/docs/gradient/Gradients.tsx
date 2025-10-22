import * as React from 'react'
import { utilityClasses, directions, effectTypes } from '.'
import { getUniqueGradientNames } from './utils'

const GradientBox: React.FC<{
  gradientClassName: string
  label: string
  emphasizeLabelByDefault?: boolean
}> = ({ gradientClassName, label, emphasizeLabelByDefault = false }) => (
  <div className="group grow basis-0">
    <p
      className={`typography-14 ${
        emphasizeLabelByDefault ? 'text-text2' : 'text-text3'
      } group-hover:text-text2 transition-colors`}
    >
      {label}
    </p>
    <button
      type="button"
      className={`${gradientClassName} h-64 w-full border-none cursor-pointer`}
      onClick={() => {
        void navigator.clipboard.writeText(gradientClassName)
      }}
    >
      <span className="opacity-0 group-hover:opacity-100 transition-opacity typography-14 text-text2">
        Click to copy the class
      </span>
    </button>
  </div>
)

export const Gradients: React.FC = () => {
  const utilityClassNames = Object.keys(utilityClasses)
  const uniqueGradientNames = getUniqueGradientNames(utilityClassNames)

  return (
    <div className="space-y-64">
      {uniqueGradientNames.map((gradientName) => (
        <div className="space-y-24" key={gradientName}>
          {directions.map((direction) => (
            <div className="flex" key={direction}>
              {utilityClassNames.includes(`${gradientName}-${direction}`) && (
                <GradientBox
                  gradientClassName={`${gradientName}-${direction}`}
                  label={`${gradientName}-${direction}`}
                  emphasizeLabelByDefault
                />
              )}
              {Object.keys(effectTypes).map(
                (effectType) =>
                  utilityClassNames.includes(
                    `${gradientName}-${direction}-${effectType}`,
                  ) && (
                    <GradientBox
                      gradientClassName={`${gradientName}-${direction}-${effectType}`}
                      label={`-${effectType}`}
                      key={effectType}
                    />
                  ),
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
