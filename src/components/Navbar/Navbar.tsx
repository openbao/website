import React from 'react'
import styles from '@/styles/components/navbar.module.scss'
import NavbarItems from './NavbarItems'

export default function Navbar() {

  interface NavbarItem {
    name: string
    link: string
  }

  const navbarItems: NavbarItem[] = [
    { name: 'Manifesto', link: '/' },
    { name: 'Supporters', link: '/' },
    { name: 'FAQs', link: '/' },
    { name: 'Roadmap', link: '/' },
    { name: 'Docs', link: '/' },
  ]

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <span>OpenBao</span>
      </div>
      <div className={styles.navbar__menu}>
        <NavbarItems />
      </div>
    </nav>
  )
}