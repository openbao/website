import Button from '@/components/Button/Button'
import CardGroup from '@/components/CardGroup/CardGroup'
import HeroSection from '@/components/HeroSection/HeroSection'
import Navbar from '@/components/Navbar/Navbar'
import style from '@/styles/components/layout/layout.module.scss'
import BaoSecction from '@/components/BaoSection/BaoSection'
import { cardGroupItems } from '@/constants/cardGroupItems'
export default function Home() {
  return (
    <>
      <div className={style.first__gradient}>
        <Navbar />
        <div className="container">
          <HeroSection />
        </div>
      </div>
      <div className="container">
        <section>
          <h2 className="main__title__h2">What are we trying to do?</h2>
          <CardGroup cards={cardGroupItems} />
        </section>
        <section>
          <BaoSecction />
        </section>
      </div>
    </>
  )
}
