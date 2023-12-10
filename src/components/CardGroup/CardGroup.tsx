import React from 'react'
import styles from '@/styles/cardGroup.module.scss'
import { Card as CardType } from '@/types/card'
import Card from '../Card/Card'

interface Props {
  cards: CardType[]
}
export default function Cardgroup(cards: Props) {
  return (
    <div className={styles.card__group}>
      {cards.cards.map(card => {
        return (
          <Card
            key={card.title}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        )
      })}
    </div>
  )
}
