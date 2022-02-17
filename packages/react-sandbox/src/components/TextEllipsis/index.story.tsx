import { number, text } from '@storybook/addon-knobs'
import React from 'react'
import styled from 'styled-components'
import { TextEllipsis } from '.'

export default {
  title: 'Sandbox/TextEllipsis',
  component: TextEllipsis,
}

export const Default = () => {
  const maxRows = number('maxRaws', 2)
  const contentText = text(
    'text',
    '隴西の李徴は博学才穎、天宝の末年、若くして名を虎榜に連ね、ついで江南尉に補せられたが、性、狷介、自ら恃むところ頗る厚く、賤吏に甘んずるを潔しとしなかった。' +
      'いくばくもなく官を退いた後は、故山、※(「埒のつくり＋虎」、第3水準1-91-48)略に帰臥し、人と交を絶って、ひたすら詩作に耽った。' +
      '下吏となって長く膝を俗悪な大官の前に屈するよりは、詩家としての名を死後百年に遺そうとしたのである。' +
      'しかし、文名は容易に揚らず、生活は日を逐うて苦しくなる。' +
      '李徴は漸く焦躁に駆られて来た。この頃からその容貌も峭刻となり、肉落ち骨秀で、眼光のみ徒らに炯々として、曾て進士に登第した頃の豊頬の美少年の俤は、何処に求めようもない。' +
      '数年の後、貧窮に堪えず、妻子の衣食のために遂に節を屈して、再び東へ赴き、一地方官吏の職を奉ずることになった。' +
      '一方、これは、己の詩業に半ば絶望したためでもある。' +
      '曾ての同輩は既に遥か高位に進み、彼が昔、鈍物として歯牙にもかけなかったその連中の下命を拝さねばならぬことが、往年の儁才李徴の自尊心を如何に傷けたかは、想像に難くない。' +
      '彼は怏々として楽しまず、狂悖の性は愈々抑え難くなった。' +
      '一年の後、公用で旅に出、汝水のほとりに宿った時、遂に発狂した。' +
      '或夜半、急に顔色を変えて寝床から起上ると、何か訳の分らぬことを叫びつつそのまま下にとび下りて、闇の中へ駈出した。' +
      '彼は二度と戻って来なかった。附近の山野を捜索しても、何の手掛りもない。' +
      'その後李徴がどうなったかを知る者は、誰もなかった。'
  )

  return (
    <FontSizeStyleProvider>
      <TextEllipsis lineHeight={22} lineLimit={maxRows}>
        {contentText}
      </TextEllipsis>
    </FontSizeStyleProvider>
  )
}

const FontSizeStyleProvider = styled.div`
  font-size: 14px;
`
