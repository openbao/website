import React from 'react'
import styles from '@/styles/components/logoCard.module.scss'
import { LogoCardProps } from '@/types/logoCard'

export default function LogoCard({ title, description }: LogoCardProps) {
  return (
    <div className={styles.logo__card}>
      <p className={styles.logo__card__title}>{title}</p>
      <p className={styles.logo__card__description}>{description} </p>
    </div>
  )
}
