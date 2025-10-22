import * as React from 'react'
import iconsV2 from '@charcoal-ui/icon-files/v2/datauri'
import iconsV1 from '@charcoal-ui/icon-files/v1/datauri'

const IconClassBox: React.FC<{
  className: string
}> = ({ className }) => (
  <div className="inline-flex gap-[8px] items-center">
    <i className={className} />
    <code className="text-[14px]">{className}</code>
  </div>
)

export const IconV2Classes: React.FC = () => {
  const iconClasses = Object.entries(iconsV2)
    .map(([fileName, { uri, isSetCurrentcolor }]) => {
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
        isSetCurrentcolor,
      }
    })
    .sort((a, b) => a.className.localeCompare(b.className))

  return (
    <div className="text-[24px]">
      <div className="grid gap-[8px] grid-cols-[repeat(auto-fill,300px)]">
        {iconClasses.map(({ className }) => (
          <IconClassBox key={className} className={className} />
        ))}
      </div>
    </div>
  )
}

export const IconV1Classes: React.FC = () => {
  const iconClasses = Object.entries(iconsV1)
    .map(([fileName, { uri, isSetCurrentcolor }]) => {
      const [size, name] = fileName.split('/')
      const className = [
        'icon-v1',
        name.replaceAll('.', '-'),
        ...(size === '24' ? [] : [size]),
      ].join('-')

      return {
        className,
        iconName: fileName,
        uri,
        isSetCurrentcolor,
      }
    })
    .sort((a, b) => a.className.localeCompare(b.className))

  return (
    <div className="text-[24px]">
      <div className="grid gap-[8px] grid-cols-[repeat(auto-fill,300px)]">
        {iconClasses.map(({ className }) => (
          <IconClassBox key={className} className={className} />
        ))}
      </div>
    </div>
  )
}
