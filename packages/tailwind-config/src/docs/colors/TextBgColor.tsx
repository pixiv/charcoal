type Props = {
  textColorClass: string
  bgColorClass: string
}
export const TextBgColor: React.FC<Props> = ({
  textColorClass,
  bgColorClass,
}) => {
  return (
    <div className={`${bgColorClass} p-64 max-w-2xl`}>
      <p className={`typography-20 ${textColorClass}`}>
        charcoal はピクシブ株式会社のデザインシステムです。ここでは特に、Web
        フロントエンドの実装に用いる npm パッケージ集のことを言います。Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at odio
        bibendum nisl mollis eleifend et quis turpis. Quisque dignissim porta
        justo ut convallis.dipiscing elit.
      </p>
    </div>
  )
}
