import React from 'react'
import styles from '@/styles/components/heroSection.module.scss'
import LinuxFountation from '../Logos/LinuxFoundation'
import Button from '../Button/Button'

export default function HeroSection() {
  return (
    <section className={styles.hero__section}>
      <LinuxFountation />
      <h1 className={styles.hero__section__text}>Let Us Keep Your Secrets</h1>
      <p className={styles.hero__section__subtext}>
        OpenBao, a secret project for the open source developer.
      </p>
      <Button variant="outline" size="md">
        Read Manifesto
      </Button>
      <Button variant="secondary" size="md">
        Give It A Try
      </Button>
    </section>
  )
}
