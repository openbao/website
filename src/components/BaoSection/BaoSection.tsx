import React from 'react'
import Image from 'next/image'
import styles from '@/styles/components/baoSection.module.scss'
import Button from '../Button/Button'

export default function BaoSection() {
  return (
    <div className={styles.bao__section}>
      <div className={styles.bao__section__left}>
        <div className={styles.bao__section__left__content}>
          <h2 className="main__title__h2">Wanna hear a secret?</h2>
          <p>
            The best way to show support for OpenBao is to do something helpful.
            I cant tell you what that is though because like I said before, we
            like to keep your secrets!
          </p>
          <Button variant="secondary" className="my-md" size="md">
            Learn How To Help
          </Button>
        </div>
      </div>
      <div className={styles.bao__section__right}>
        <Image
          src="/images/bao.png"
          alt="secret"
          width={819}
          height={630}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
    </div>
  )
}
