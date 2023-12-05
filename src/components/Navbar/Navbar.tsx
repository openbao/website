import React from 'react'
import styles from '@/styles/components/navbar/navbar.module.scss'
import NavbarItems from './NavbarItems'
import NavbarSocial from './NavbarSocial'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__navigation__wrapper}>
        <div className={styles.navbar__logo}>
          <span>OpenBao</span>
        </div>
        <div className={styles.navbar__menu}>
          <NavbarItems />
        </div>
      </div>
      <div className={styles.navbar__social}>
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        <NavbarSocial />
      </div>
    </nav>
  )
}
