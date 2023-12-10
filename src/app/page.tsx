import CardGroup from '@/components/CardGroup/CardGroup'
import HeroSection from '@/components/HeroSection/HeroSection'
import Navbar from '@/components/Navbar/Navbar'
import style from '@/styles/components/layout/layout.module.scss'

import { faLock } from '@fortawesome/free-solid-svg-icons'
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
                {
                  title: 'We got it on lock!',
                  description:
                    'This is some filler text to be reused throughout everything. Feel free to add more.',
                  icon: faLock,
                },
                {
                  title: 'We got it on lock!2',
                  description:
                    'This is some filler text to be reused throughout everything. Feel free to add more.',
                  icon: faLock,
                },
                {
                  title: 'We got it on lock!3',
                  description:
                    'This is some filler text to be reused throughout everything. Feel free to add more.',
                  icon: faLock,
                },
                {
                  title: 'We got it on lock!4',
                  description:
                    'This is some filler text to be reused throughout everything. Feel free to add more.',
                  icon: faLock,
                },
                {
                  title: 'We got it on lock!5',
                  description:
                    'This is some filler text to be reused throughout everything. Feel free to add more.',
                  icon: faLock,
                },
                {
                  title: 'We got it on lock!6',
                  description:
                    'This is some filler text to be reused throughout everything. Feel free to add more.',
                  icon: faLock,
                },
              ]}
            />
          </div>
        </section>
      </div>
    </>
  )
}
