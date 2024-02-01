'use client'
import styles from '@/styles/components/navbar/navbar.module.scss'
import { useState } from 'react'
import NavbarItems from '../Navbar/NavbarItems'
import NavbarSocial from '../Navbar/NavbarSocial'

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false)

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__content}>
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
    </nav>
  )
}
