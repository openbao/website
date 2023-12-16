import React from 'react'
import styles from '@/styles/components/supportSection.module.scss'
import LogoCardGroup from '../LogoCardGroup/LogoCardGroup'
import { logoCardList } from '@/constants/logoCardList'

export default function SupportSection() {
  return (
    <div className={styles.support__section}>
      <h2 className={`${styles.support__section__title} main__title__h2`}>
        Who supports us?
      </h2>

      <p>
        One{' '}
        <span className={styles.support__section__text__highlights}>2145</span>{' '}
        Two{' '}
        <span className={styles.support__section__text__highlights}>5898</span>{' '}
        Three{' '}
        <span className={styles.support__section__text__highlights}>12</span>{' '}
        Blue{' '}
        <span className={styles.support__section__text__highlights}>95</span>
      </p>

      <LogoCardGroup cards={logoCardList} />
    </div>
  )
}
