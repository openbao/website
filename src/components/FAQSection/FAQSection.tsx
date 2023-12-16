import React from 'react'
import styles from '@/styles/components/faqSection.module.scss'
import Accordion from '../Accordion/Accordion'
import Button from '../Button/Button'
import { accordionData } from '@/constants/accordion'

export default function FAQSection() {
  return (
    <div className={styles.faq__section}>
      <div className="container">
        <div className={styles.faq__section__title}>
          <h2 className="main__title__h2 mb-xxl">Secrets we can share</h2>
        </div>
        {accordionData.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
        <div className={styles.faq__section__actions}>
          <Button variant="outline" size="md">
            Tell Me More
          </Button>
        </div>
      </div>
    </div>
  )
}
