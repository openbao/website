import Image from 'next/image'
import styles from './page.module.css'
import ThemeSwitcher from './ThemeSwitcher'
export default function Home() {
  return (
   <div className="container">
    <ThemeSwitcher />
   </div>
  )
}
