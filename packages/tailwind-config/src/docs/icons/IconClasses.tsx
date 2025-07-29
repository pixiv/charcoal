import * as React from 'react'
import icons from '@charcoal-ui/icon-files/v2-datauri'

const IconClassBox: React.FC<{
  className: string
  iconName: string
}> = ({ className, iconName }) => (
  <div className="group grow basis-0 space-y-8">
    <p className="typography-14 text-text2 group-hover:text-text1 transition-colors">
      {className}
    </p>
    <div className="relative h-64 w-full flex items-center justify-center">
      <div
        className={`${className} text-text1 text-6xl`}
        style={{ width: '64px', height: '64px' }}
      />
    </div>
    <p className="typography-12 text-text3">
      Icon: <span className="text-text2">{iconName}</span>
    </p>
  </div>
)

export const IconClasses: React.FC = () => {
  const iconClasses = Object.entries(icons).map(([fileName, { uri, isSetCurrentcolor }]) => {
    const [size, variant, name] = fileName.split('/')
    const className = [
      'icon',
      name.replaceAll('.', '-'),
      ...(variant === 'regular' ? [] : [variant]),
      ...(size === '24' ? [] : [size]),
    ].join('-')
    
    return {
      className,
      iconName: fileName,
      uri,
      isSetCurrentcolor
    }
  }).sort((a, b) => a.className.localeCompare(b.className))

  return (
    <div className="space-y-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
        {iconClasses.map(({ className, iconName }) => (
          <IconClassBox
            key={className}
            className={className}
            iconName={iconName}
          />
        ))}
      </div>
    </div>
  )
} 