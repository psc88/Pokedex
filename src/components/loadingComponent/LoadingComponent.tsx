import Lottie from 'lottie-react'
import { FC } from 'react'
import animationData from '../../utils/animatePokemon.json'
import { SCContainerLoader, SCSpanLoader } from './loadingComponent.styles'
import { messages } from '../../constant/messages'

export const LoadingComponent: FC = () => {
  return (
    <SCContainerLoader>
      <Lottie
        animationData={animationData}
        style={{ width: 200, height: 200 }}
      />
      <SCSpanLoader>{messages.SEARCHING_POKEMON}</SCSpanLoader>
    </SCContainerLoader>
  )
}
