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
    </>
  )
}
