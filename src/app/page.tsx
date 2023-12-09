import CardGroup from '@/components/CardGroup/CardGroup'
import HeroSection from '@/components/HeroSection/HeroSection'
import Navbar from '@/components/Navbar/Navbar'
import style from '@/styles/components/layout/layout.module.scss'

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
        <section className="row">
          <div className="single__column">
            <h2 className={style.home__heading__h2}>
              What are we trying to do?
            </h2>
          </div>
          <div className="single__column">
            <CardGroup
              cards={[
                { title: 'test', description: 'description', icon: 'icon' },
                { title: 'test', description: 'description', icon: 'icon' },
                { title: 'test', description: 'description', icon: 'icon' },
              ]}
            />
          </div>
        </section>
      </div>
    </>
  )
}
