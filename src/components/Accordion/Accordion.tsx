'use client'
import React, { useState } from 'react'
import styles from '@/styles/components/accordion.module.scss'
import { AccordionItem } from '@/types/accordion'

export default function Accordion(item: AccordionItem) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  return (
    <>
      <div
        className={styles.accordion__item}
        onClick={() => setIsExpanded(previsExpanded => !previsExpanded)}
      >
        <div
          className={styles.accordion__item__title}
          aria-expanded={isExpanded}
          aria-label={(isExpanded ? 'hide ' : 'show ') + item.description}
        >
          <h3>{item.title}</h3>
          <h3 className={styles.accordion__item__trigger}>
            {isExpanded ? '-' : '+'}
          </h3>
        </div>
        {isExpanded ? (
          <div className={styles.accordion__item__description}>
            <p>{item.description}</p>
          </div>
        ) : null}
      </div>
    </>
  )
}
