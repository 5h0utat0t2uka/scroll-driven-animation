import { Link } from "react-router-dom";
import styles from './index.module.css'

export default function Home() {
  return (
    <>
      <section className={styles.section}>
        <ul>
          <li><Link to="/horizontal">Horizontal scroll</Link></li>
          <li><Link to="/grid">Grid scroll</Link></li>
        </ul>
        <ul>
          <li><a href="https://github.com/5h0utat0t2uka/scroll-driven-animation" target="_blank">Repo</a></li>
        </ul>
      </section>
    </>
  )

}
