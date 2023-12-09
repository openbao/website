import styles from '@/styles/button.module.scss'
import React, { ReactNode } from 'react'

interface Props {
  children?: ReactNode
  onClick?: () => void
  variant?: string
  size?: string
}

export default function Button({ children, onClick, variant, size }: Props) {
  const computeStyles = [styles.button]

  if (size) {
    computeStyles.push(styles[`btn--${size}`])
  }

  if (variant) {
    computeStyles.push(styles[`btn--${variant}`])
  }

  return (
    <button
      className={`${styles.btn} ${computeStyles.join(' ')}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
