import CardGroup from '@/components/CardGroup/CardGroup'
import HeroSection from '@/components/HeroSection/HeroSection'
import Navbar from '@/components/Navbar/Navbar'
import style from '@/styles/components/layout/layout.module.scss'
import BaoSection from '@/components/BaoSection/BaoSection'
import { cardGroupItems } from '@/constants/cardGroupItems'
import FAQSection from '@/components/FAQSection/FAQSection'
import SupportSection from '@/components/SuipportSection/SupportSection'
import HelpOutSection from '@/components/HelpOutSection/HelpOutSection'
import BlogSection from '@/components/BlogSection/BlogSection'

export default function Home() {
  return (
    <>
      <div className={style.top__down__red__gradient}>
        <Navbar />
        <div className="container">
          <section className="my-xxl">
            <HeroSection />
          </section>
        </div>
      </div>
      <div className="container">
        <section className="my-xxl">
          <h2 className="main__title__h2">What are we trying to do?</h2>
          <CardGroup cards={cardGroupItems} />
        </section>
        <section className="mb-xxl">
          <BaoSection />
        </section>
      </div>
      <section className="pb-0">
        <FAQSection />
      </section>
      <div className="container">
        <section className="mb-xxl">
          <SupportSection />
        </section>
      </div>
      <div className={style.top__down__red__gradient}>
        <section>
          <HelpOutSection />
        </section>
      </div>
      <div className="container">
        <section className="my-xxl">
          <BlogSection />
        </section>
      </div>
      <div className={style.bottom__up__red__gradient}>
        <Navbar />
      </div>
    </>
  )
}
