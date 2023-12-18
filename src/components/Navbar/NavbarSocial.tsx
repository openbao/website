import React from 'react'
import Icon from '@/components/Navbar/DarkmodeToggle/Icon'

import { faSlack, faTwitter } from '@fortawesome/free-brands-svg-icons'
import GithubStats from './GithubStats'
import styles from '@/styles/components/navbar/navbarSocial.module.scss'
import ThemeSwitcher from '@/app/ThemeSwitcher'

export default function NavbarSocial() {
  return (
    <div className={styles.navbar__social}>
      <GithubStats />
      <ul>
        <li>
          <Icon icon={faTwitter} />
        </li>
        <li>
          <Icon icon={faSlack} />
        </li>
        <li>
          <ThemeSwitcher />
        </li>
      </ul>
    </div>
  )
}
