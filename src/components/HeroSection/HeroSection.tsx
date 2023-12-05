import React from 'react'
import styles from '@/styles/components/heroSection.module.scss'
import LinuxFountation from '../Logos/LinuxFoundation'

export default function HeroSection() {
  return (
    <section className={styles.hero__section}>
      <LinuxFountation />
      <h1 className={styles.hero__section__text}>Let Us Keep Your Secrets</h1>
      <p className={styles.hero__section__subtext}>
        OpenBao, a secret project for the open source developer.
      </p>
    </section>
  )
}
