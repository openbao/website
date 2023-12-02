import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '@/styles/components/navbar/githubStats.module.scss';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function NavbarSocial() {
  return (
    <div className={styles.navbar__social__github}>
      <div className={styles.navbar__social__github__star}>
        <FontAwesomeIcon icon={faGithub} />
        <p>Star</p>
      </div>
      <div className={styles.navbar__social__github__stats}>
        <p>1,234</p>
      </div>
    </div>
  )
}

