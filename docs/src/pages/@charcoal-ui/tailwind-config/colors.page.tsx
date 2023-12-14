import { NextPage } from 'next'
import { Colors } from '../../../components/tailwind-config/colors/Colors'
import { TextColors } from '../../../components/tailwind-config/colors/TextColors'
import { Gradients } from '../../../components/tailwind-config/colors/Gradients'

const ColorPage: NextPage = () => (
  <div className="w-full m-16 ">
    <h2 className="typography-32 my-24">Colors</h2>
    <Colors />

    <h2 className="typography-32 mt-64 mb-24">Text Colors</h2>
    <TextColors />

    <h2 className="typography-32 mt-64 mb-24">Gradients</h2>
    <Gradients />
  </div>
)
export default ColorPage
