import { RepositoryLink } from "../../components/link";
import styles from './index.module.css'

export default function Page() {
  return (
    <>
      <RepositoryLink path="/tree/main/src/pages/parallax" />
      <div className={styles.container}>
        <section className={styles.hero}>
          <h1>Parallax carousel slider with animation timeline</h1>
        </section>
        <section className={styles.carousel}>
          <ul className={styles.list}>
            <li className={styles.item}><img src={`/images/8.jpg.webp`} width={1920} height={1280} alt="" /></li>
            <li className={styles.item}><img src={`/images/9.jpg.webp`} width={1920} height={1280} alt="" /></li>
            <li className={styles.item}><img src={`/images/7.jpg.webp`} width={1920} height={1280} alt="" /></li>
            <li className={styles.item}><img src={`/images/19.jpg.webp`} width={1920} height={1280} alt="" /></li>
            <li className={styles.item}><img src={`/images/20.jpg.webp`} width={1920} height={1280} alt="" /></li>
          </ul>
          <div className={styles.border}></div>
        </section>
        <section className={styles.footer}>
          <p>Some images used on this site are provided by Unsplash.</p>
        </section>
      </div>
    </>
  )
}
