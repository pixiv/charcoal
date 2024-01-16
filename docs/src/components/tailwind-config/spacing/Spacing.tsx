import { config } from '@charcoal-ui/tailwind-config'

const {
  theme: { spacing },
} = config

export const Spacing: React.FC = () => {
  return (
    <div className="space-y-40">
      {Object.keys(spacing!!).map((space) => (
        <div key={space}>
          <h3 className="typography-16 my-8 text-text2">p-{space}</h3>
          <div className={`bg-surface3 p-${space} w-[min-content]`}>
            <div className="bg-brand h-40" style={{ width: '40px' }}></div>
          </div>
        </div>
      ))}
    </div>
  )
}
