import Button from '@/components/Button/Button'
import CardGroup from '@/components/CardGroup/CardGroup'
import HeroSection from '@/components/HeroSection/HeroSection'
import Navbar from '@/components/Navbar/Navbar'
import style from '@/styles/components/layout/layout.module.scss'
import BaoSection from '@/components/BaoSection/BaoSection'
import { cardGroupItems } from '@/constants/cardGroupItems'
import FAQSection from '@/components/FAQSection/FAQSection'
import SupportSection from '@/components/SuipportSection/SupportSection'

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
          <BaoSection />
        </section>
      </div>
      <section className={'pb-0'}>
        <FAQSection />
      </section>
      <div className="container">
        <section>
          <SupportSection />
        </section>
      </div>
    </>
  )
}
