import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '@/styles/components/navbar/githubStats.module.scss'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function GithubStats() {
  // const repo = "openbao/openbao"
  // const { stargazers_count: stars } = await fetch(
  //   `https://api.github.com/repos/${repo}`,
  //   {
  //     ...(process.env.GITHUB_OAUTH_TOKEN && {
  //       headers: {
  //         Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
  //         "Content-Type": "application/json",
  //       },
  //     }),
  //     // data will revalidate every 24 hours
  //     next: { revalidate: 86400 },
  //   },
  // )
  //   .then((res) => res.json())
  //   .catch((e) => {
  //     console.log(e)
  //     return { stargazers_count: "1000+" }
  //   });

  return (
    <a
      // href={`https://github.com/${repo}`}
      href="/"
      target="_blank"
      className={styles.navbar__social__github}
    >
      <div className={styles.navbar__social__github__star}>
        <FontAwesomeIcon icon={faGithub} />
        <p>Star</p>
      </div>
      <div className={styles.navbar__social__github__stats}>
        <p>123</p>
      </div>
    </a>
  )
}
