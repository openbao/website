import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSlack, faTwitter } from '@fortawesome/free-brands-svg-icons';
import GithubStats from './GithubStats';
import styles from '@/styles/components/navbar/navbarSocial.module.scss';
export default function NavbarSocial() {
  return (
    <div className={styles.navbar__social}>
      <GithubStats />
      <ul>
        <li><FontAwesomeIcon icon={faTwitter} /></li>
        <li><FontAwesomeIcon icon={faSlack} /></li>
        <li><FontAwesomeIcon icon={faMoon} /></li>
      </ul>
    </div>
  )
}

