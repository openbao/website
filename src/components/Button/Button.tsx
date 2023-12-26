import styles from '@/styles/components/button/button.module.scss'
import React, { ReactNode } from 'react'

interface Props {
  className?: string
  children?: ReactNode
  onClick?: () => void
  variant?: string
  size?: string
}

export default function Button({
  children,
  onClick,
  variant,
  size,
  className,
}: Props) {
  const computeStyles = [styles.button]

  if (size) {
    computeStyles.push(styles[`btn--${size}`])
  }

  if (variant) {
    computeStyles.push(styles[`btn--${variant}`])
  }

  if (className) {
    computeStyles.push(className)
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
