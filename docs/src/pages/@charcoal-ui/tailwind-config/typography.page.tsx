import { NextPage } from 'next'
import { Sizes } from '../../../components/tailwind-config/typography/Sizes'
import { HalfLeading } from '../../../components/tailwind-config/typography/HalfLeading'

const TypographyPage: NextPage = () => (
  <div className="w-full m-16">
    <h2 className="typography-32 my-24">Sizes</h2>
    <Sizes />

    <h2 className="typography-32 my-24">Half leading cancellation</h2>
    <HalfLeading />
  </div>
)
export default TypographyPage
