import { config } from '@charcoal-ui/tailwind-config'

const screens = config.theme?.screens

export const Screens: React.FC = () => {
  return (
    <div className="space-y-40">
      {Object.entries(screens!!).map(
        ([screenName, value]) =>
          typeof value === 'string' && (
            <div key={screenName}>
              <p className="typography-14 text-text2">{screenName}</p>
              <div className="bg-surface4 h-64" style={{ width: value }}></div>
              <p className="typography-12 text-text3">
                @media (<span className="text-text2">min-width: {value}</span>)
              </p>
            </div>
          )
      )}
    </div>
  )
}
