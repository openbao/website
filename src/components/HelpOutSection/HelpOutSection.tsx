import styles from '@/styles/components/helpOutSection.module.scss'
import HelpOutSectionItem from './HelpOutSectionItem'
import { items } from '@/types/helpOutSection'
export default function HelpOutSection() {
  return (
    <div className="container">
      <div className={styles.help__out__section}>
        <h2 className="main__title__h2">Want to help out?</h2>
        <div className={styles.help__out__section__group}>
          {items.map(item => (
            <HelpOutSectionItem key="item.title" title={item.title} />
          ))}
        </div>
      </div>
    </div>
  )
}
