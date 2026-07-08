import * as React from 'react'

const textDensities = [
  {
    label: 'compact',
    className: 'ch-text-dn-compact',
  },
  {
    label: 'default',
    className: 'ch-text-dn-default',
  },
  {
    label: 'cozy',
    className: 'ch-text-dn-cozy',
  },
] as const

const textSamples = [
  {
    label: 'text-caption-s',
    className: 'text-caption-s',
    text: 'キャプション S Caption 123',
  },
  {
    label: 'text-caption-m',
    className: 'text-caption-m',
    text: 'キャプション M Caption 123',
  },
  {
    label: 'text-body',
    className: 'text-body',
    text: '本文テキスト Body text 123',
  },
  {
    label: 'text-paragraph',
    className: 'text-paragraph',
    text: 'charcoal はピクシブ株式会社のデザインシステムです。ここでは特に、Web フロントエンドの実装に用いる npm パッケージ集のことを言います。',
  },
  {
    label: 'text-heading-xxxs',
    className: 'text-heading-xxxs',
    text: '見出し XXXS Heading',
  },
  {
    label: 'text-heading-xxs',
    className: 'text-heading-xxs',
    text: '見出し XXS Heading',
  },
  {
    label: 'text-heading-xs',
    className: 'text-heading-xs',
    text: '見出し XS Heading',
  },
  {
    label: 'text-heading-s',
    className: 'text-heading-s',
    text: '見出し S Heading',
  },
  {
    label: 'text-heading-m',
    className: 'text-heading-m',
    text: '見出し M Heading',
  },
  {
    label: 'text-heading-l',
    className: 'text-heading-l',
    text: '見出し L Heading',
  },
  {
    label: 'text-heading-xl',
    className: 'text-heading-xl',
    text: '見出し XL Heading',
  },
  {
    label: 'text-heading-xxl',
    className: 'text-heading-xxl',
    text: '見出し XXL Heading',
  },
  {
    label: 'text-heading-xxxl',
    className: 'text-heading-xxxl',
    text: '見出し XXXL Heading',
  },
] as const

export const TextDensity: React.FC = () => (
  <div className="ch-token-v2 overflow-x-auto">
    <div className="grid min-w-[1080px] grid-cols-[168px_repeat(3,minmax(0,1fr))] border-l border-t border-[var(--charcoal-color-border-default)]">
      <div className="bg-container-secondary border-b border-r border-[var(--charcoal-color-border-default)] p-layout-20" />
      {textDensities.map((density) => (
        <div
          key={density.className}
          className="bg-container-secondary border-b border-r border-[var(--charcoal-color-border-default)] p-layout-20"
        >
          <p className="text-caption-m text-text-secondary m-0">
            {density.label}
          </p>
          <p className="text-caption-s text-text-tertiary m-0">
            {density.className}
          </p>
        </div>
      ))}
      {textSamples.map((sample) => (
        <React.Fragment key={sample.className}>
          <div className="border-b border-r border-[var(--charcoal-color-border-default)] p-layout-20">
            <p className="text-caption-m text-text-secondary m-0">
              {sample.label}
            </p>
          </div>
          {textDensities.map((density) => (
            <div
              key={`${sample.className}-${density.className}`}
              className={`${density.className} border-b border-r border-[var(--charcoal-color-border-default)] p-layout-20`}
            >
              <p className={`${sample.className} text-text m-0`}>
                {sample.text}
              </p>
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  </div>
)
