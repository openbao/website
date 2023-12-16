import styles from '@/styles/components/blogSection.module.scss'
import Image from 'next/image'
import Button from '../Button/Button'
export default function BlogSection() {
  return (
    <div className={styles.blog__section}>
      <h2 className="main__title__h2">Blog Or News?</h2>
      <div className={styles.blog__section__content}>
        <div className={styles.blog__section__content__left}>
          <Image
            src="/images/blog.jpg"
            alt="secret"
            width={4288}
            height={2848}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
        <div className={styles.blog__section__content__right}>
          <p className={styles.blog__section__content__date}>
            November, 69, 4203
          </p>
          <p className={styles.blog__section__content__title}>
            Title for the thing, it probably wraps, who knows?
          </p>
          <p className={styles.blog__section__content__blurb}>
            Well, its like a muffin? No, wait, its a bagel. Heck, I don't know,
            im just designing this thing! Now im going to copy and paste this
            over and over because I need more copy. Well, its like a muffin? No,
            wait, its a bagel. Heck, I don't know, im just
          </p>
          <Button variant="outline" size="sm">
            Learn How To Help
          </Button>
        </div>
      </div>
    </div>
  )
}
