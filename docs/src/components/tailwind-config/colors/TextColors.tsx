import { config } from '@charcoal-ui/tailwind-config'

const {
  theme: { colors },
} = config

export const TextColors: React.FC = () => (
  <div className="space-y-24">
    {Object.keys(colors!!).map((colorName) => (
      <div key={colorName}>
        <p className="typography-14 text-text2 mb-4">text-{colorName}</p>
        <div className={`relative z-0`}>
          <div
            className="absolute top-0 right-0 h-full w-6/12 bg-surface8 z-[-1]"
            aria-hidden="true"
          ></div>
          <p className={`typography-20 text-${colorName}`}>
            charcoal はピクシブ株式会社のデザインシステムです。ここでは特に、Web
            フロントエンドの実装に用いる npm パッケージ集のことを言います。
          </p>
        </div>
      </div>
    ))}
  </div>
)
