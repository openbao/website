import React from 'react'
import styles from '@/styles/components/logoCardGroup.module.scss'
import { LogoCardProps } from '@/types/logoCard'
import LogoCard from '../LogoCard/LogoCard'

interface Props {
  cards: LogoCardProps[]
}
export default function LogoCardGroup(cards: Props) {
  return (
    <div className={styles.logo__card__group}>
      {cards.cards.map(card => {
        return (
          <LogoCard
            key={card.title}
            title={card.title}
            description={card.description}
          />
        )
      })}
    </div>
  )
}
