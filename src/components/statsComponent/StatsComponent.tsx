import React, { FC } from 'react'
import { IStatsComponent } from './statsComponent.interface'
import { statsMapping } from '../../constant/constant'
import { SCStatBar, SCStatLabel, SCStatsContainer } from './statsComponent.styles'
import { background } from '../../utils/BackgroundsByType'

export const StatsComponent: FC<IStatsComponent> = ({ pokeSelected }) => {
  return (
    <SCStatsContainer>
      {statsMapping.map((stat, index) => (
        <React.Fragment key={index}>
          <SCStatLabel color={(background as any)[pokeSelected?.types[0]]}>{stat.label}</SCStatLabel>
          <SCStatBar value={pokeSelected?.stats[stat.label]} />
        </React.Fragment>
      ))}
    </SCStatsContainer>
  )
}
