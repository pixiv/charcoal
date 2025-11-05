import * as React from 'react'
import { EffectType } from '@charcoal-ui/theme'
import { colors } from '.'

const effectTypes: { [type in EffectType]: null } = {
  hover: null,
  press: null,
  disabled: null,
}

const ColorBox: React.FC<{
  bgColorClass: string
  label: string
  emphasizeLabelByDefault?: boolean
}> = ({ bgColorClass, label, emphasizeLabelByDefault = false }) => (
  <div className="group grow basis-0 space-y-8">
    <p
      className={`typography-14 ${
        emphasizeLabelByDefault ? 'text-text2' : 'text-text3'
      } group-hover:text-text2 transition-colors`}
    >
      {label}
    </p>
    <div className="relative h-64 w-full">
      <div
        /**
         * Display checker pattern for visualizing colors with transparency
         */
        className="absolute top-0 right-0 h-full w-6/12"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(135deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(135deg, transparent 75%, #ccc 75%)',
          backgroundSize: '12px 12px',
          backgroundPosition: '0 0, 6px 0, 6px -6px, 0 6px',
        }}
      />
      <button
        type="button"
        className={`absolute top-0 left-0 h-full w-full border border-r-0 group-last:border-r border-default cursor-pointer ${bgColorClass}`}
        onClick={() => {
          void navigator.clipboard.writeText(bgColorClass)
        }}
      >
        <span className="opacity-0 group-hover:opacity-100 transition-opacity typography-14 text-text2">
          Click to copy the class
        </span>
      </button>
    </div>
  </div>
)

export const Colors: React.FC = () => {
  return (
    <div className="space-y-24">
      {Object.entries(colors).map(([colorName, values]) => (
        <div className="flex" key={colorName}>
          {/* @ts-expect-error FIXME */}
          {typeof values === 'object' && 'DEFAULT' in values ? (
            <>
              <ColorBox
                bgColorClass={`bg-${colorName}`}
                label={colorName}
                emphasizeLabelByDefault
              />
              {Object.keys(effectTypes).map((modifier) =>
                modifier in values ? (
                  <ColorBox
                    key={modifier}
                    bgColorClass={`bg-${colorName}-${modifier}`}
                    label={`-${modifier}`}
                  />
                ) : null,
              )}
            </>
          ) : (
            <ColorBox
              bgColorClass={`bg-${colorName}`}
              label={colorName}
              emphasizeLabelByDefault
            />
          )}
        </div>
      ))}
    </div>
  )
}
