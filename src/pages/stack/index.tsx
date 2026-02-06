import { RepositoryLink } from "../../components/link";
import styles from './index.module.css'

export default function Page() {
  return (
    <>
      <RepositoryLink path="/tree/main/src/pages/stack" />
      <div className={styles.container}>
        <section className={styles.hero}>
          <h1>Scroll stack scale effect with animation timeline</h1>
        </section>
        <section className={styles.cards}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <div className={styles.content}><img src={`/images/9.jpg.webp`} width={1920} height={1280} alt="" /></div>
            </li>
            <li className={styles.item}>
              <div className={styles.content}><img src={`/images/7.jpg.webp`} width={1920} height={1280} alt="" /></div>
            </li>
            <li className={styles.item}>
              <div className={styles.content}><img src={`/images/8.jpg.webp`} width={1920} height={1280} alt="" /></div>
            </li>
            <li className={styles.item}>
              <div className={styles.content}><img src={`/images/19.jpg.webp`} width={1920} height={1280} alt="" /></div>
            </li>
          </ul>
          <article>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </article>
        </section>
        <section className={styles.footer}>
          <p>Some images used on this site are provided by Unsplash.</p>
        </section>
      </div>
    </>
  )
}
