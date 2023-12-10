import React from 'react'
import styles from '@/styles/card.module.scss'
import { Card } from '@/types/card'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Card(card: Card) {
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <FontAwesomeIcon icon={card.icon} />
        <h3 className={styles.card__content__title}>{card.title}</h3>
      </div>
      <div className={styles.card__content}>
        <div className={styles.card__text}>
          <p className={styles.card__content__description}>
            {card.description}
          </p>
        </div>
      </div>
    </div>
  )
}
