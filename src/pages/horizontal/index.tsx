import { RepositoryLink } from "../../components/link";
// import { ScrollBorder } from "../../components/scroll-border";
import styles from './index.module.css'

export default function Page() {
  return (
    <>
      <RepositoryLink path="/tree/main/src/pages/horizontal" />
      <div className={styles.container}>
        <section className={styles.hero}>
          <h1>Horizontal scroll with view timeline</h1>
          {/*<ScrollBorder />*/}
        </section>
        <section className={styles.horizontal}>
          <div className={styles.body}>
            <div className={styles.scroller}>
              <hgroup className={styles.item}>
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>consectetur adipiscing elit</p>
              </hgroup>
              <div className={styles.item}><img src={`/images/4.jpg.webp`} width={1920} height={2560} alt="" /></div>
              <div className={styles.item}><img src={`/images/5.jpg.webp`} width={1920} height={2560} alt="" /></div>
              <div className={styles.item}><img src={`/images/6.jpg.webp`} width={1920} height={2560} alt="" /></div>
            </div>
          </div>
        </section>
        <section className={styles.footer}>
          <p>Some images used on this site are provided by Unsplash.</p>
        </section>
      </div>
    </>
  )
}
