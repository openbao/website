'use client'
import styles from '@/styles/components/navbar/navbar.module.scss'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import NavbarItems from './NavbarItems'
import NavbarSocial from './NavbarSocial'

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false)

  return (
    <nav className={styles.navbar}>
      <div
        className={
          isNavOpen
            ? `${styles.navbar__content} ${styles.navbar__content__active}`
            : `${styles.navbar__content}`
        }
      >
        <div className={styles.navbar__navigation__wrapper}>
          <div className={styles.navbar__logo}>
            <span>OpenBao</span>
          </div>
          <div className={styles.navbar__menu}>
            <NavbarItems />
          </div>
        </div>
        <div className={styles.navbar__social}>
          <NavbarSocial />
        </div>
      </div>
      <button
        onClick={() => setIsNavOpen(!isNavOpen)}
        className={styles.navbar__toggle}
        aria-expanded={isNavOpen}
      >
        {!isNavOpen ? (
          <FontAwesomeIcon width={20} height={20} icon={faBars} />
        ) : (
          <FontAwesomeIcon width={20} height={20} icon={faClose} />
        )}
      </button>
    </nav>
  )
}
