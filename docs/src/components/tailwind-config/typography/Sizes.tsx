import { sizeClasses } from './utils'

export const Sizes: React.FC = () => (
  <div className="space-y-64">
    {Object.entries(sizeClasses).map(([className, value]) => (
      <div key={className}>
        <p className="typography-14 text-text2">{className}</p>
        <p className={`${className} text-text1`}>
          charcoal はピクシブ株式会社のデザインシステムです。ここでは特に、Web
          フロントエンドの実装に用いる npm パッケージ集のことを言います。 Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p className="typography-12 text-text3">
          font-size: <span className="text-text2">{value['font-size']}</span> /{' '}
          line-height:{' '}
          <span className="text-text2">{value['line-height']}</span>
        </p>
      </div>
    ))}
  </div>
)
