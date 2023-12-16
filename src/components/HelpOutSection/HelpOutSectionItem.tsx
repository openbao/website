import styles from '@/styles/components/helpOutSection.module.scss'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function HelpOutSectionItem({ title }: { title: string }) {
  return (
    <div className={styles.help__out__section__item}>
      <FontAwesomeIcon
        size="xl"
        className={styles.help__out__section__item__icon}
        icon={faLock}
      />
      <p className={styles.help__out__section__item__title}>{title}</p>
    </div>
  )
}
